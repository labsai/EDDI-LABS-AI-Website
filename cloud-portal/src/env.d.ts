/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SUPABASE_URL: string;
  readonly PUBLIC_SUPABASE_ANON_KEY: string;
  readonly SUPABASE_SERVICE_ROLE_KEY: string;
  readonly PUBLIC_PADDLE_ENV: 'sandbox' | 'production';
  readonly PUBLIC_PADDLE_CLIENT_TOKEN: string;
  readonly PADDLE_API_KEY: string;
  readonly PADDLE_WEBHOOK_SECRET: string;
  readonly PUBLIC_PADDLE_PRICE_ID_MONTHLY: string;
  readonly PUBLIC_PADDLE_PRICE_ID_YEARLY: string;
  readonly GCP_PROVISIONING_ENDPOINT?: string;
  readonly GCP_PROVISIONING_SECRET?: string;
}

declare namespace App {
  interface Locals {
    lang: string;
  }
}
