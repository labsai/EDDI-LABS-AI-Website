/** Site-wide constants that are not translation strings. */
export const DEMO_URL = 'https://34-29-111-190.sslip.io/manage'; // PLACEHOLDER: replace with a branded subdomain (e.g. https://demo.eddi.technology) before relying on it in marketing
export const SOLUTIONS_URL = 'https://eddi.solutions';
export const SOLUTIONS_LIVE = false; // gates all cross-links to the commercial site (header, footer, enterprise CTAs). false = eddi.solutions still pre-launch, keep hidden; flip to true at go-live (see eddi-solutions LAUNCH.md step 7)

/**
 * Locale-preserving URL on the commercial site. eddi.solutions serves the
 * same 11 locales with the same routing convention as this site (root = en,
 * /{lang}/ prefix otherwise), so cross-links must carry the visitor's locale.
 */
export function solutionsUrl(lang: string, path = '/'): string {
	return SOLUTIONS_URL + (lang === 'en' ? '' : `/${lang}`) + path;
}
