/**
 * EDDI Website — Internationalization Core
 *
 * Provides locale definitions, TypeScript types, translation loading,
 * and URL helper functions used by all pages and components.
 *
 * English lives at root (/), all other locales at /{locale}/.
 */

// ─── Locale Definitions ───────────────────────────────────────────────
export const LOCALES = {
	en: { label: 'English', native: 'English', dir: 'ltr' as const },
	de: { label: 'German', native: 'Deutsch', dir: 'ltr' as const },
	es: { label: 'Spanish', native: 'Español', dir: 'ltr' as const },
	fr: { label: 'French', native: 'Français', dir: 'ltr' as const },
	pt: { label: 'Portuguese', native: 'Português', dir: 'ltr' as const },
	ar: { label: 'Arabic', native: 'العربية', dir: 'rtl' as const },
	zh: { label: 'Chinese', native: '中文', dir: 'ltr' as const },
	ja: { label: 'Japanese', native: '日本語', dir: 'ltr' as const },
	ko: { label: 'Korean', native: '한국어', dir: 'ltr' as const },
	hi: { label: 'Hindi', native: 'हिन्दी', dir: 'ltr' as const },
	th: { label: 'Thai', native: 'ไทย', dir: 'ltr' as const },
} as const;

export type Locale = keyof typeof LOCALES;
export const LOCALE_CODES = Object.keys(LOCALES) as Locale[];
export const DEFAULT_LOCALE: Locale = 'en';

/** Non-default locales — used by [lang] dynamic routes */
export const NON_DEFAULT_LOCALES = LOCALE_CODES.filter((l) => l !== DEFAULT_LOCALE);

// ─── Translation Loading ──────────────────────────────────────────────
import en from './locales/en';
import type { TranslationSchema } from './locales/en';
export type { TranslationSchema };

// Lazy-load non-English locales to keep bundles lean at build time
const localeImports: Record<Locale, () => Promise<{ default: TranslationSchema }>> = {
	en: () => Promise.resolve({ default: en }),
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

/** Get the full translation object for a locale. English is returned synchronously. */
export async function getTranslations(locale: Locale): Promise<TranslationSchema> {
	if (locale === 'en') return en;
	try {
		const mod = await localeImports[locale]();
		return mod.default;
	} catch {
		// Fallback to English if locale file is missing/broken
		return en;
	}
}

/** Synchronous English translations (always available). */
export const enTranslations = en;

// ─── URL Helpers ──────────────────────────────────────────────────────

/**
 * Generate a locale-prefixed path.
 * English (default) gets NO prefix — stays at root.
 * All other locales get `/{locale}/path`.
 */
export function localePath(locale: Locale, path: string): string {
	const clean = path.startsWith('/') ? path : `/${path}`;
	if (locale === DEFAULT_LOCALE) return clean;
	return `/${locale}${clean}`;
}

/** Extract the locale from a URL pathname like `/de/features/overview/`. */
export function getLocaleFromUrl(url: URL): Locale {
	const segments = url.pathname.split('/').filter(Boolean);
	const first = segments[0] as Locale;
	if (first && first in LOCALES && first !== DEFAULT_LOCALE) {
		return first;
	}
	return DEFAULT_LOCALE;
}

/** Get the current page path WITHOUT the locale prefix. */
export function getPathWithoutLocale(url: URL): string {
	const segments = url.pathname.split('/').filter(Boolean);
	const first = segments[0] as Locale;
	if (first && first in LOCALES && first !== DEFAULT_LOCALE) {
		const rest = segments.slice(1);
		if (rest.length === 0) return '/';
		return '/' + rest.join('/') + (url.pathname.endsWith('/') ? '/' : '');
	}
	return url.pathname;
}

/** Get text direction for a locale. */
export function getDir(locale: Locale): 'ltr' | 'rtl' {
	return LOCALES[locale].dir;
}
