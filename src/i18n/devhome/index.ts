/**
 * Loads the developer-homepage copy for a locale, falling back to English for
 * any locale file that is missing.
 */
import type { Locale } from '../index';
import en, { type DevHomeCopy } from './en';

export type { DevHomeCopy } from './en';

const imports: Record<Locale, () => Promise<{ default: DevHomeCopy }>> = {
	en: () => Promise.resolve({ default: en }),
	de: () => import('./de'),
	es: () => import('./es'),
	fr: () => import('./fr'),
	pt: () => import('./pt'),
	ar: () => import('./ar'),
	zh: () => import('./zh'),
	ja: () => import('./ja'),
	ko: () => import('./ko'),
	hi: () => import('./hi'),
	th: () => import('./th'),
};

export async function getDevHomeCopy(locale: Locale): Promise<DevHomeCopy> {
	if (locale === 'en') return en;
	try {
		return (await imports[locale]()).default;
	} catch {
		return en;
	}
}
