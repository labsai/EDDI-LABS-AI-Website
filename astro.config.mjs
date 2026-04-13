// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	image: {
		service: passthroughImageService(),
	},
	site: 'https://eddi.labs.ai',
	integrations: [sitemap({
		i18n: {
			defaultLocale: 'en',
			locales: {
				en: 'en-US', de: 'de-DE', es: 'es-ES', fr: 'fr-FR', pt: 'pt-BR',
				ar: 'ar-SA', zh: 'zh-CN', ja: 'ja-JP', ko: 'ko-KR', hi: 'hi-IN', th: 'th-TH',
			},
		},
	})],
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
