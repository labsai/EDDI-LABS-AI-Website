import type { APIRoute } from 'astro';
import { verifyPaddleWebhook } from '../../../lib/paddle';
import { createSupabaseAdminClient } from '../../../lib/supabase';
import { provisionEddiInstance } from '../../../lib/gcp';

export const POST: APIRoute = async ({ request }) => {
  const ok = await verifyPaddleWebhook(request);
  if (!ok) {
    return new Response('Invalid signature', { status: 401 });
  }

  const body = await request.text();
  let event: Record<string, unknown>;
  try {
    event = JSON.parse(body);
  } catch {
    return new Response('Bad JSON', { status: 400 });
  }

  const eventType = event.event_type as string;
  const data = event.data as Record<string, unknown>;
  const admin = createSupabaseAdminClient();

  try {
    if (eventType === 'subscription.activated') {
      await handleSubscriptionActivated(data, admin);
    } else if (eventType === 'subscription.canceled') {
      await handleSubscriptionCanceled(data, admin);
    } else if (eventType === 'subscription.updated') {
      await handleSubscriptionUpdated(data, admin);
    } else if (eventType === 'transaction.completed') {
      await handleTransactionCompleted(data, admin);
    }
  } catch (err) {
    console.error(`[webhook] Error handling ${eventType}:`, err);
    return new Response('Internal error', { status: 500 });
  }

  return new Response('ok', { status: 200 });
};

async function handleSubscriptionActivated(
  data: Record<string, unknown>,
  admin: ReturnType<typeof createSupabaseAdminClient>
) {
  const subId = data.id as string;
  const customerId = data.customer_id as string;
  const customData = data.custom_data as Record<string, string> | null;
  const userId = customData?.userId;

  if (!userId) {
    console.error('[webhook] subscription.activated: no userId in custom_data', data);
    return;
  }

  const items = data.items as Array<Record<string, unknown>>;
  const billingInterval = (
    (items?.[0]?.price as Record<string, unknown>)
      ?.billing_cycle as Record<string, string>
  )?.interval;
  const plan = billingInterval === 'year' ? 'yearly' : 'monthly';

  const billingPeriod = data.current_billing_period as Record<string, string> | null;

  const { data: existing } = await admin
    .from('subscriptions')
    .select('id')
    .eq('paddle_subscription_id', subId)
    .single();

  if (!existing) {
    await admin.from('subscriptions').insert({
      user_id:               userId,
      paddle_subscription_id: subId,
      paddle_customer_id:    customerId,
      plan,
      status:                'active',
      current_period_start:  billingPeriod?.starts_at ?? null,
      current_period_end:    billingPeriod?.ends_at ?? null,
    });
  }

  const { data: profile } = await admin
    .from('user_profiles')
    .select('gcp_instance_status')
    .eq('id', userId)
    .single();

  if (profile?.gcp_instance_status === 'pending') {
    await admin
      .from('user_profiles')
      .update({ gcp_instance_status: 'provisioning' })
      .eq('id', userId);

    const customer = data.customer as Record<string, string> | null;
    const result = await provisionEddiInstance({
      userId,
      userEmail: customer?.email ?? '',
      subscriptionId: subId,
      plan,
    });

    if (result) {
      await admin
        .from('user_profiles')
        .update({
          gcp_instance_status: 'active',
          gcp_instance_id:     result.instanceId,
          gcp_instance_url:    result.instanceUrl,
        })
        .eq('id', userId);
    } else {
      await admin
        .from('user_profiles')
        .update({ gcp_instance_status: 'failed' })
        .eq('id', userId);
    }
  }
}

async function handleSubscriptionCanceled(
  data: Record<string, unknown>,
  admin: ReturnType<typeof createSupabaseAdminClient>
) {
  const subId = data.id as string;
  await admin
    .from('subscriptions')
    .update({ status: 'canceled', updated_at: new Date().toISOString() })
    .eq('paddle_subscription_id', subId);
}

async function handleSubscriptionUpdated(
  data: Record<string, unknown>,
  admin: ReturnType<typeof createSupabaseAdminClient>
) {
  const subId = data.id as string;
  const status = data.status as string;
  const billingPeriod = data.current_billing_period as Record<string, string> | null;

  await admin
    .from('subscriptions')
    .update({
      status,
      current_period_start: billingPeriod?.starts_at ?? null,
      current_period_end:   billingPeriod?.ends_at ?? null,
      updated_at:           new Date().toISOString(),
    })
    .eq('paddle_subscription_id', subId);
}

async function handleTransactionCompleted(
  data: Record<string, unknown>,
  admin: ReturnType<typeof createSupabaseAdminClient>
) {
  const txId = data.id as string;
  const subscriptionPaddleId = data.subscription_id as string | null;
  const customData = data.custom_data as Record<string, string> | null;
  const userId = customData?.userId;

  if (!userId) {
    console.error('[webhook] transaction.completed: no userId in custom_data', data);
    return;
  }

  const details = data.details as Record<string, unknown> | null;
  const totals  = details?.totals as Record<string, unknown> | null;
  const grandTotal = totals?.grand_total as number | null ?? 0;
  const currency   = (totals?.currency_code as string | null) ?? 'EUR';

  let subscriptionDbId: string | null = null;
  if (subscriptionPaddleId) {
    const { data: sub } = await admin
      .from('subscriptions')
      .select('id')
      .eq('paddle_subscription_id', subscriptionPaddleId)
      .single();
    subscriptionDbId = sub?.id ?? null;
  }

  const { data: existing } = await admin
    .from('payments')
    .select('id')
    .eq('paddle_transaction_id', txId)
    .single();

  if (!existing) {
    await admin.from('payments').insert({
      user_id:               userId,
      subscription_id:       subscriptionDbId,
      paddle_transaction_id: txId,
      amount_cents:          Math.round(Number(grandTotal) * 100),
      currency,
      status:                'completed',
    });
  }
}
