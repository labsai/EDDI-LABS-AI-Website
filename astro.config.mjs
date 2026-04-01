// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://eddi.labs.ai',
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'de', 'es', 'fr', 'pt', 'ar', 'zh', 'ja', 'ko', 'hi', 'th'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
