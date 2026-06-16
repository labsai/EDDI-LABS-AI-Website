import { en } from './locales/en';
export type { Translations } from './locales/en';

export const SUPPORTED_LANGS = [
  'en', 'de', 'es', 'fr', 'pt', 'ar', 'zh', 'ja', 'ko', 'hi', 'th',
] as const;
export type Locale = (typeof SUPPORTED_LANGS)[number];

export function isRTL(lang: string): boolean {
  return lang === 'ar';
}

type Loader = () => Promise<Record<string, typeof en>>;

const loaders: Partial<Record<Locale, Loader>> = {
  de: () => import('./locales/de'),
  es: () => import('./locales/es'),
  fr: () => import('./locales/fr'),
  pt: () => import('./locales/pt'),
  ar: () => import('./locales/ar'),
  zh: () => import('./locales/zh'),
  ja: () => import('./locales/ja'),
  ko: () => import('./locales/ko'),
  hi: () => import('./locales/hi'),
  th: () => import('./locales/th'),
};

export async function getT(lang: string): Promise<typeof en> {
  if (lang === 'en') return en;
  const loader = loaders[lang as Locale];
  if (!loader) return en;
  try {
    const mod = await loader();
    return (mod[lang] as typeof en) ?? en;
  } catch {
    return en;
  }
}

export { en };
