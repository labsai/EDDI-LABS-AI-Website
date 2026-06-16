-- User profiles — extends Supabase Auth users
CREATE TABLE IF NOT EXISTS public.user_profiles (
  id                   UUID        PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at           TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  gcp_instance_id      TEXT,
  gcp_instance_url     TEXT,
  gcp_instance_status  TEXT        NOT NULL DEFAULT 'pending'
    CHECK (gcp_instance_status IN ('pending', 'provisioning', 'active', 'failed'))
);

-- Subscriptions — synced from Paddle webhook events
CREATE TABLE IF NOT EXISTS public.subscriptions (
  id                     UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id                UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  paddle_subscription_id TEXT        UNIQUE NOT NULL,
  paddle_customer_id     TEXT,
  plan                   TEXT        NOT NULL CHECK (plan IN ('monthly', 'yearly')),
  status                 TEXT        NOT NULL DEFAULT 'active'
    CHECK (status IN ('active', 'canceled', 'past_due', 'trialing', 'paused')),
  current_period_start   TIMESTAMPTZ,
  current_period_end     TIMESTAMPTZ,
  cancel_at_period_end   BOOLEAN     NOT NULL DEFAULT FALSE,
  created_at             TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at             TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Payments — synced from Paddle transaction events
CREATE TABLE IF NOT EXISTS public.payments (
  id                     UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id                UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  subscription_id        UUID        REFERENCES public.subscriptions(id),
  paddle_transaction_id  TEXT        UNIQUE NOT NULL,
  amount_cents           INTEGER     NOT NULL,
  currency               TEXT        NOT NULL DEFAULT 'EUR',
  status                 TEXT        NOT NULL
    CHECK (status IN ('completed', 'refunded', 'failed')),
  created_at             TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Row-Level Security
ALTER TABLE public.user_profiles  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments       ENABLE ROW LEVEL SECURITY;

CREATE POLICY "own profile select"  ON public.user_profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "own profile insert"  ON public.user_profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "own profile update"  ON public.user_profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "own subscriptions"   ON public.subscriptions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "own payments"        ON public.payments       FOR SELECT USING (auth.uid() = user_id);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id    ON public.subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_paddle_id  ON public.subscriptions(paddle_subscription_id);
CREATE INDEX IF NOT EXISTS idx_payments_user_id         ON public.payments(user_id);

-- Auto-create profile row when a new user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  INSERT INTO public.user_profiles (id) VALUES (NEW.id);
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
