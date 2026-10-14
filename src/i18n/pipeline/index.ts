/**
 * Loads the pipeline copy for a locale, falling back to English per stage and
 * UI string when a locale file is missing or incomplete.
 */
import type { Locale } from '../index';
import en, { type PipelineCopy } from './en';

export type { PipelineCopy } from './en';

const imports: Record<Locale, () => Promise<{ default: PipelineCopy }>> = {
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

export async function getPipelineCopy(locale: Locale): Promise<PipelineCopy> {
	if (locale === 'en') return en;
	try {
		const mod = (await imports[locale]()).default;
		return { ui: { ...en.ui, ...mod.ui }, stages: { ...en.stages, ...mod.stages } };
	} catch {
		return en;
	}
}
