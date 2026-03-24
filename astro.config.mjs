// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://eddi.labs.ai',
	integrations: [
		starlight({
			title: 'EDDI',
			logo: {
				dark: './src/assets/eddi-logo-dark.png',
				light: './src/assets/eddi-logo-light.svg',
				alt: 'EDDI — Enterprise AI Orchestrator',
				replacesTitle: true,
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/labsai/EDDI' },
			],
			editLink: {
				baseUrl: 'https://github.com/labsai/EDDI/edit/main/docs-website/',
			},
			components: {
			Header: './src/components/Header.astro',
			Footer: './src/components/Footer.astro',
			Hero: './src/components/Hero.astro',
		},
		sidebar: [
			{
				label: 'Getting Started',
				items: [
					{ label: 'Introduction', slug: 'docs/getting-started' },
					{ label: 'Quickstart', slug: 'docs/quickstart' },
					{ label: 'Install Wizard', slug: 'docs/install-wizard' },
				],
			},
			{
				label: 'Architecture',
				items: [
					{ label: 'The 7 Pillars', slug: 'docs/architecture/seven-pillars' },
					{ label: 'Lifecycle Pipeline', slug: 'docs/architecture/pipeline' },
					{ label: 'Configuration-as-Code', slug: 'docs/architecture/config-as-code' },
				],
			},
			{
				label: 'MCP Server',
				items: [
					{ label: 'Overview', slug: 'docs/mcp/overview' },
					{ label: 'Conversation Tools', slug: 'docs/mcp/conversation-tools' },
					{ label: 'Admin Tools', slug: 'docs/mcp/admin-tools' },
					{ label: 'Setup Tools', slug: 'docs/mcp/setup-tools' },
					{ label: 'Diagnostic Tools', slug: 'docs/mcp/diagnostic-tools' },
					{ label: 'Security', slug: 'docs/mcp/security' },
				],
			},
			{
				label: 'Resources',
				items: [
					{ label: 'Use Cases', slug: 'docs/use-cases' },
					{ label: 'Integrations', slug: 'docs/integrations' },
					{ label: 'Security Architecture', slug: 'docs/security/overview' },
					{ label: 'Docker & Kubernetes', slug: 'docs/deployment/docker' },
					{ label: 'REST API', slug: 'docs/api/rest' },
				],
			},
			{
				label: 'Community',
				items: [
					{ label: 'Roadmap', slug: 'docs/roadmap' },
					{ label: 'Changelog v6.0', slug: 'docs/changelog/v6' },
				],
			},
		],
			customCss: ['./src/styles/global.css'],
			head: [
				// OG social preview image (Fix #3)
				{
					tag: 'meta',
					attrs: { property: 'og:image', content: 'https://eddi.labs.ai/og-image.png' },
				},
				{
					tag: 'meta',
					attrs: { name: 'twitter:image', content: 'https://eddi.labs.ai/og-image.png' },
				},
				// JSON-LD: Organization (Fix #4)
				{
					tag: 'script',
					attrs: { type: 'application/ld+json' },
					content: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Organization',
						name: 'Labs.ai',
						url: 'https://eddi.labs.ai',
						logo: 'https://eddi.labs.ai/og-image.png',
						sameAs: ['https://github.com/labsai/EDDI'],
					}),
				},
				// JSON-LD: WebSite with search
				{
					tag: 'script',
					attrs: { type: 'application/ld+json' },
					content: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebSite',
						name: 'EDDI Documentation',
						url: 'https://eddi.labs.ai',
						description: 'EDDI — The Enterprise AI Orchestrator. Configuration-driven, Java-native, production-ready AI middleware built on Quarkus.',
						potentialAction: {
							'@type': 'SearchAction',
							target: 'https://eddi.labs.ai/?q={search_term_string}',
							'query-input': 'required name=search_term_string',
						},
					}),
				},
				// JSON-LD: SoftwareApplication
				{
					tag: 'script',
					attrs: { type: 'application/ld+json' },
					content: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'SoftwareApplication',
						name: 'EDDI',
						applicationCategory: 'DeveloperApplication',
						operatingSystem: 'Cross-platform (JVM)',
						description: 'JVM-native visual AI orchestration middleware. Configuration-driven agent logic, 39 MCP tools, security-first architecture, Java 25 Virtual Threads on Quarkus.',
						url: 'https://eddi.labs.ai',
						downloadUrl: 'https://github.com/labsai/EDDI',
						softwareVersion: '6.0',
						license: 'https://www.apache.org/licenses/LICENSE-2.0',
						author: {
							'@type': 'Organization',
							name: 'Labs.ai',
						},
						offers: {
							'@type': 'Offer',
							price: '0',
							priceCurrency: 'USD',
						},
					}),
				},
			],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
