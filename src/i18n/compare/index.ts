/**
 * Loads the comparison copy for a locale, falling back to English for any
 * locale file (or entry) that is missing. Mirrors src/i18n/models/index.ts.
 */
import type { Locale } from '../index';
import en, { type CompareCopy } from './en';

export type { CompareCopy, ComparisonCopy, CompareUi } from './en';

const imports: Record<Locale, () => Promise<{ default: CompareCopy }>> = {
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

export async function getCompareCopy(locale: Locale): Promise<CompareCopy> {
	if (locale === 'en') return en;
	try {
		const mod = (await imports[locale]()).default;
		// Entry-level fallback, so a comparison added in English renders before it is translated.
		return {
			ui: { ...en.ui, ...mod.ui },
			comparisons: { ...en.comparisons, ...mod.comparisons },
		};
	} catch {
		return en;
	}
}

export const enCompareCopy = en;
