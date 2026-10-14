/**
 * Loads the integration catalog copy for a locale, falling back to English for any
 * locale file (or entry) that is missing.
 */
import type { Locale } from '../index';
import en, { type IntegrationsCopy } from './en';

export type { IntegrationsCopy, IntegrationCopy, IntegrationsUi } from './en';

const imports: Record<Locale, () => Promise<{ default: IntegrationsCopy }>> = {
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

export async function getIntegrationsCopy(locale: Locale): Promise<IntegrationsCopy> {
	if (locale === 'en') return en;
	try {
		const mod = (await imports[locale]()).default;
		// Entry-level fallback, so an integration added in English renders before it is translated.
		return {
			ui: { ...en.ui, ...mod.ui },
			categories: { ...en.categories, ...mod.categories },
			integrations: { ...en.integrations, ...mod.integrations },
		};
	} catch {
		return en;
	}
}

export const enIntegrationsCopy = en;
