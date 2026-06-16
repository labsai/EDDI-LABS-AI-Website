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
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    const status = error.message?.toLowerCase().includes('already') ? 409 : 400;
    return new Response(JSON.stringify({ error: error.message }), {
      status, headers: { 'Content-Type': 'application/json' },
    });
  }

  if (data.user && !data.session) {
    return new Response(JSON.stringify({ requiresConfirmation: true }), {
      status: 200, headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200, headers: { 'Content-Type': 'application/json' },
  });
};
