/**
 * Loads the model catalog copy for a locale, falling back to English for any
 * locale file (or entry) that is missing.
 */
import type { Locale } from '../index';
import en, { type ModelsCopy } from './en';

export type { ModelsCopy, ModelCopy, HostCopy } from './en';

const imports: Record<Locale, () => Promise<{ default: ModelsCopy }>> = {
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

export async function getModelsCopy(locale: Locale): Promise<ModelsCopy> {
	if (locale === 'en') return en;
	try {
		const mod = (await imports[locale]()).default;
		// Entry-level fallback, so a model added in English renders before it is translated.
		return {
			models: { ...en.models, ...mod.models },
			hosts: { ...en.hosts, ...mod.hosts },
			tips: { ...en.tips, ...mod.tips },
		};
	} catch {
		return en;
	}
}

export const enModelsCopy = en;
