import { defineMiddleware } from 'astro:middleware';

const SUPPORTED = ['en', 'de', 'es', 'fr', 'pt', 'ar', 'zh', 'ja', 'ko', 'hi', 'th'] as const;
type Lang = (typeof SUPPORTED)[number];

function isSupported(s: string): s is Lang {
  return (SUPPORTED as readonly string[]).includes(s);
}

export const onRequest = defineMiddleware(async (ctx, next) => {
  const cookie = ctx.cookies.get('lang')?.value ?? '';
  const browser = (ctx.request.headers.get('accept-language') ?? '')
    .split(',')[0]?.split('-')[0]?.toLowerCase() ?? '';

  ctx.locals.lang = isSupported(cookie) ? cookie : isSupported(browser) ? browser : 'en';
  return next();
});
