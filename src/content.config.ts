/**
 * Content collections.
 *
 * `guides` holds task-oriented walkthroughs published at /guides/. These are
 * acquisition content, not reference documentation: each one gets someone from
 * "I have nothing" to "this works", then hands off to docs.labs.ai for the
 * exact field reference. See AGENTS.md section 3 for why that line exists.
 *
 * English only, like src/data/comparisons.ts, so the routes pass
 * `localized={false}`.
 */
// NOTE: Astro 6 deprecates re-exporting `z` from 'astro:content' in favour of
// importing zod directly, which is why `astro check` reports ~22 deprecation
// hints (not errors) against this file. Switching means declaring zod in
// package.json and regenerating package-lock.json, so it is left as a
// deliberate follow-up rather than an undeclared transitive import.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Maps to the three search-intent personas the content strategy targets. */
export const PERSONAS = {
	'technical-buyer': 'Technical Buyer',
	'ml-engineer': 'Prompt / ML Engineer',
	'platform-operator': 'Platform / DevOps Operator',
} as const;

export type PersonaKey = keyof typeof PERSONAS;

const guides = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
	schema: z.object({
		title: z.string(),
		/** Also the meta description, so keep it under ~155 characters. */
		description: z.string(),
		/** Who this is written for. Drives grouping on the /guides/ hub. */
		persona: z.enum(['technical-buyer', 'ml-engineer', 'platform-operator']),
		level: z.enum(['beginner', 'intermediate', 'advanced']),
		/** Honest reading-and-doing estimate, in minutes. */
		timeMinutes: z.number().int().positive(),
		publishDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		/** Sort order within a persona group on the hub. Lower comes first. */
		order: z.number().int().default(100),
		/** Reference documentation this guide hands off to. */
		docsLinks: z
			.array(z.object({ label: z.string(), href: z.string().url() }))
			.default([]),
		/** Rendered as an FAQ section and emitted as FAQPage structured data. */
		faq: z
			.array(z.object({ question: z.string(), answer: z.string() }))
			.default([]),
		tags: z.array(z.string()).default([]),
		/** Excluded from routes, the hub, and the sitemap while true. */
		draft: z.boolean().default(false),
	}),
});

export const collections = { guides };
