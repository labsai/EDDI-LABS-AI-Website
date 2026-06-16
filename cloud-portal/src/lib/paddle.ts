const PADDLE_URLS = {
  sandbox:    'https://sandbox-api.paddle.com',
  production: 'https://api.paddle.com',
} as const;

function baseUrl() {
  const env = import.meta.env.PUBLIC_PADDLE_ENV as 'sandbox' | 'production';
  return PADDLE_URLS[env] ?? PADDLE_URLS.sandbox;
}

export async function verifyPaddleWebhook(request: Request): Promise<boolean> {
  const sig = request.headers.get('Paddle-Signature');
  if (!sig) return false;

  const secret = import.meta.env.PADDLE_WEBHOOK_SECRET;
  if (!secret) return false;

  const parts = Object.fromEntries(
    sig.split(';').map((p) => p.split('=') as [string, string])
  );
  const { ts, h1 } = parts;
  if (!ts || !h1) return false;

  const body = await request.clone().text();
  const signed = `${ts}:${body}`;

  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const sigBytes = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(signed));
  const computed = Array.from(new Uint8Array(sigBytes))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');

  if (computed.length !== h1.length) return false;
  let diff = 0;
  for (let i = 0; i < computed.length; i++) {
    diff |= computed.charCodeAt(i) ^ h1.charCodeAt(i);
  }
  return diff === 0;
}

export async function cancelSubscription(paddleSubId: string): Promise<boolean> {
  const res = await fetch(`${baseUrl()}/subscriptions/${paddleSubId}/cancel`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${import.meta.env.PADDLE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ effective_from: 'next_billing_period' }),
  });
  return res.ok;
}
