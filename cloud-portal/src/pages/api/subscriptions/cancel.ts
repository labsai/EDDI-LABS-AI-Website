import type { APIRoute } from 'astro';
import { createSupabaseServerClient, createSupabaseAdminClient } from '../../../lib/supabase';
import { cancelSubscription } from '../../../lib/paddle';

export const POST: APIRoute = async ({ request, cookies }) => {
  const supabase = createSupabaseServerClient(cookies);
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401, headers: { 'Content-Type': 'application/json' },
    });
  }

  const json = await request.json().catch(() => null);
  const subscriptionId = json?.subscriptionId as string | undefined;
  if (!subscriptionId) {
    return new Response(JSON.stringify({ error: 'subscriptionId is required' }), {
      status: 400, headers: { 'Content-Type': 'application/json' },
    });
  }

  const admin = createSupabaseAdminClient();
  const { data: sub, error: fetchErr } = await admin
    .from('subscriptions')
    .select('paddle_subscription_id')
    .eq('id', subscriptionId)
    .eq('user_id', user.id)
    .single();

  if (fetchErr || !sub) {
    return new Response(JSON.stringify({ error: 'Subscription not found' }), {
      status: 404, headers: { 'Content-Type': 'application/json' },
    });
  }

  const ok = await cancelSubscription(sub.paddle_subscription_id);
  if (!ok) {
    return new Response(JSON.stringify({ error: 'Failed to cancel via Paddle' }), {
      status: 502, headers: { 'Content-Type': 'application/json' },
    });
  }

  await admin
    .from('subscriptions')
    .update({ cancel_at_period_end: true, updated_at: new Date().toISOString() })
    .eq('id', subscriptionId);

  return new Response(JSON.stringify({ success: true }), {
    status: 200, headers: { 'Content-Type': 'application/json' },
  });
};
