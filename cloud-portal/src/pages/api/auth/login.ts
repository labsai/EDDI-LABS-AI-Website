import type { APIRoute } from 'astro';
import { createSupabaseServerClient } from '../../../lib/supabase';

export const POST: APIRoute = async ({ request, cookies }) => {
  const json = await request.json().catch(() => null);
  if (!json?.email || !json?.password) {
    return new Response(JSON.stringify({ error: 'Email and password are required.' }), {
      status: 400, headers: { 'Content-Type': 'application/json' },
    });
  }

  const { email, password } = json as { email: string; password: string };

  const supabase = createSupabaseServerClient(cookies);
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 401, headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200, headers: { 'Content-Type': 'application/json' },
  });
};
