w# EDDI Cloud Portal

Self-contained Astro SSR app for `cloud.eddi.labs.ai` — lets customers register, subscribe to a managed EDDI instance on Google Cloud, and manage their billing.

## What's in here

```
cloud-portal/
├── src/
│   ├── layouts/BaseLayout.astro          # Shared header, footer, theme toggle
│   ├── pages/
│   │   ├── index.astro                   # Pricing page (monthly / yearly toggle)
│   │   ├── register.astro                # Email + password registration
│   │   ├── login.astro                   # Login
│   │   ├── dashboard.astro               # Instance status, subscriptions, payments
│   │   ├── checkout/success.astro        # Post-payment confirmation
│   │   └── api/
│   │       ├── auth/{register,login,logout}.ts
│   │       ├── paddle/webhook.ts         # Paddle event handler
│   │       └── subscriptions/cancel.ts
│   ├── lib/
│   │   ├── supabase.ts                   # Server + admin Supabase clients
│   │   ├── paddle.ts                     # Webhook verification, cancel API
│   │   └── gcp.ts                        # ⚠️  GCP provisioning stub (see below)
│   ├── i18n/                             # English translations + 10 locale stubs
│   └── middleware.ts                     # Language detection from cookie / Accept-Language
├── supabase/migrations/001_initial.sql   # DB schema (run once in Supabase SQL editor)
└── .env.example                          # All required environment variables
```

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Astro 6 (`output: 'server'`) |
| Hosting | Cloudflare Pages + Workers |
| Auth + DB | Supabase (email/password auth, Postgres) |
| Payments | Paddle Billing v2 (overlay checkout, webhooks) |
| Styling | TailwindCSS v4 + Outfit Variable font |
| i18n | Cookie-based, 11 languages (English + 10 stubs) |

## User flows

```
Visitor → /register → / (pricing) → Paddle checkout overlay
                                         ↓ payment succeeds
                                    /checkout/success
                                         ↓
                                    /dashboard
                                    ├── Instance status (pending → provisioning → active)
                                    ├── Subscriptions table + cancel button
                                    └── Payment history
```

---

## Local setup

### 1. Install dependencies

```bash
cd cloud-portal
npm install
```

> The portal lives inside the main website repo. An `.npmrc` file sets `legacy-peer-deps=true` automatically so npm doesn't complain about the Cloudflare adapter's peer dependency constraints.

### 2. Create your `.env` file

```bash
cp .env.example .env
```

Then fill in the values as described in the sections below.

---

### 3. Set up Supabase

1. Create a free project at [supabase.com](https://supabase.com).
2. Go to **Settings → API** and copy:
   - `Project URL` → `PUBLIC_SUPABASE_URL`
   - `anon public` key → `PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY`
3. Open the **SQL Editor** and run the contents of `supabase/migrations/001_initial.sql`. This creates three tables (`user_profiles`, `subscriptions`, `payments`) with row-level security and an auto-create-profile trigger.

---

### 4. Set up Paddle

1. Create a free account at [sandbox.paddle.com](https://sandbox.paddle.com) (sandbox, no real money).
2. Create a **Product** called "EDDI Cloud".
3. Add two **Prices** to that product:
   - Monthly: €99 / month recurring
   - Yearly: €948 / year recurring
4. Copy the two price IDs (`pri_...`) into your `.env`:
   ```
   PUBLIC_PADDLE_PRICE_ID_MONTHLY=pri_...
   PUBLIC_PADDLE_PRICE_ID_YEARLY=pri_...
   ```
5. Go to **Developer → Authentication** and copy:
   - Client-side token (starts with `test_`) → `PUBLIC_PADDLE_CLIENT_TOKEN`
   - API key → `PADDLE_API_KEY`
6. Set `PUBLIC_PADDLE_ENV=sandbox`.

Webhook setup is covered in the testing section below.

---

### 5. Start the dev server

```bash
npm run dev
```

The app is available at `http://localhost:4321`.

---

## Testing the full flow

### Auth and dashboard (no tunnel needed)

1. Open `http://localhost:4321/register` and create an account.
2. You are redirected to the pricing page.
3. Open `http://localhost:4321/dashboard` — your instance status shows **Pending** and the subscriptions table is empty.

### Paddle checkout (requires a tunnel for webhooks)

Paddle's servers need to reach your local machine to fire webhook events. Use a free Cloudflare tunnel:

```bash
# Install once
npm install -g cloudflared

# In a second terminal, while the dev server is running
cloudflared tunnel --url http://localhost:4321
```

Copy the `https://xxxx.trycloudflare.com` URL it prints, then:

1. In the Paddle sandbox dashboard go to **Notifications → New endpoint**.
2. Set the endpoint URL to `https://xxxx.trycloudflare.com/api/paddle/webhook`.
3. Subscribe to these events:
   - `subscription.activated`
   - `subscription.canceled`
   - `subscription.updated`
   - `transaction.completed`
4. Copy the **secret key** that Paddle shows you → `PADDLE_WEBHOOK_SECRET` in `.env`.
5. Restart the dev server (`Ctrl+C` then `npm run dev`) so it picks up the new secret.

Now run the full checkout:

1. Go to `http://localhost:4321` while logged in — the "Get started" buttons are active.
2. Click either plan — Paddle's overlay opens.
3. Use a Paddle test card:
   - Number: `4242 4242 4242 4242`
   - Expiry: any future date
   - CVC: any 3 digits
4. Complete the payment. Paddle redirects you to `/checkout/success`.
5. Within a few seconds the webhook fires. Check:
   - Your Supabase `subscriptions` table — a new row should appear with `status = active`.
   - Your Supabase `payments` table — a completed payment row.
   - The `user_profiles` table — `gcp_instance_status` changes from `pending` to `failed` (expected until the GCP stub is implemented).
6. Reload `/dashboard` — the subscription and payment appear. Test the **Cancel** button; it calls Paddle and marks `cancel_at_period_end = true` in the DB.

### Sending a test webhook manually

You can replay webhook events directly from the Paddle sandbox dashboard without going through the checkout:

1. Go to **Notifications → your endpoint → Simulate event**.
2. Pick `subscription.activated` and fill in a `custom_data.userId` matching a real user ID from your Supabase `auth.users` table.

---

## Cloudflare Workers simulation (optional)

For a more accurate local test that uses the real Workers runtime:

```bash
npm run build      # builds to ./dist
npm run preview    # runs: wrangler pages dev ./dist
```

Requires a one-time login: `npx wrangler login`.

> Note: `npm run build` runs `astro check` first (TypeScript type-checking). The supabase/paddle packages must be installed for this to pass.

---

## Deploying to Cloudflare Pages

1. Push the repo to GitHub (the `cloud-portal/` directory is part of the main repo).
2. In the [Cloudflare Pages dashboard](https://pages.cloudflare.com) create a new project, connect the GitHub repo, and set:
   - **Root directory:** `cloud-portal`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. Add all environment variables from `.env.example` under **Settings → Environment variables** (use **Production** for live values).
4. Add a custom domain: `cloud.eddi.labs.ai`.
5. In Paddle's **production** dashboard, register `https://cloud.eddi.labs.ai/api/paddle/webhook` as a new endpoint and update `PADDLE_WEBHOOK_SECRET`.

---

## Implementing GCP provisioning

The file `src/lib/gcp.ts` contains a clearly-marked stub. When a customer's first payment is confirmed, the Paddle webhook calls `provisionEddiInstance()`. Right now it logs a warning and returns `null` (which sets the instance status to `failed`).

Replace the stub with a real call to your provisioning endpoint — a Cloud Run service or Cloud Function that creates a new EDDI instance:

```typescript
// src/lib/gcp.ts
export async function provisionEddiInstance(req: ProvisionRequest): Promise<ProvisionResult | null> {
  const endpoint = import.meta.env.GCP_PROVISIONING_ENDPOINT;
  const secret   = import.meta.env.GCP_PROVISIONING_SECRET;

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${secret}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  });

  if (!res.ok) return null;
  return res.json() as Promise<ProvisionResult>;
  // Must return { instanceId: string, instanceUrl: string }
}
```

The webhook handler in `src/pages/api/paddle/webhook.ts` updates `user_profiles.gcp_instance_status` and `gcp_instance_url` based on the return value. The dashboard reads these fields and shows the instance status and URL to the customer.

---

## Environment variable reference

| Variable | Where to get it |
|---|---|
| `PUBLIC_SUPABASE_URL` | Supabase → Settings → API |
| `PUBLIC_SUPABASE_ANON_KEY` | Supabase → Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase → Settings → API |
| `PUBLIC_PADDLE_ENV` | `sandbox` or `production` |
| `PUBLIC_PADDLE_CLIENT_TOKEN` | Paddle → Developer → Authentication |
| `PADDLE_API_KEY` | Paddle → Developer → Authentication |
| `PADDLE_WEBHOOK_SECRET` | Paddle → Notifications → your endpoint |
| `PUBLIC_PADDLE_PRICE_ID_MONTHLY` | Paddle → your product → monthly price |
| `PUBLIC_PADDLE_PRICE_ID_YEARLY` | Paddle → your product → yearly price |
| `GCP_PROVISIONING_ENDPOINT` | Your Cloud Run / Cloud Function URL |
| `GCP_PROVISIONING_SECRET` | Shared secret for your provisioning service |
