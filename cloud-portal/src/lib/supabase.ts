import { createServerClient } from '@supabase/ssr';
import { createClient } from '@supabase/supabase-js';
import type { AstroCookies } from 'astro';

export function createSupabaseServerClient(cookies: AstroCookies) {
  return createServerClient(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get:    (name: string)                             => cookies.get(name)?.value,
        set:    (name: string, val: string, opts: object) => cookies.set(name, val, { ...opts, path: '/' } as Parameters<typeof cookies.set>[2]),
        remove: (name: string, opts: object)              => cookies.delete(name, { ...opts, path: '/' } as Parameters<typeof cookies.delete>[1]),
      },
    }
  );
}

export function createSupabaseAdminClient() {
  return createClient(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.SUPABASE_SERVICE_ROLE_KEY,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}
