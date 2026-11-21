/**
 * Cross-links between pages, for discoverability.
 *
 * Feature and enterprise pages used to end at "Get Started", with no way on to the
 * pages next to them. This map drives the "Related" block at the end of those pages
 * (FeaturePage layout), and is read in reverse by integration pages ("which features
 * use this?") and guides ("which features and integrations does this belong to?").
 *
 * Labels come from the `nav` translations, so the block is localized without new copy.
 * Integration names are product names and are not translated; guides are English only.
 *
 * Only pair pages when the target's copy actually covers the topic: integration pages
 * show these links back as "Features: …", which reads as a claim.
 */
import type { TranslationSchema } from '../i18n';

type NavKey = keyof TranslationSchema['nav'];

/** Pages that can appear as a related card: path, then the nav label and description keys. */
export const PAGE_LABELS: Record<string, { label: NavKey; desc: NavKey }> = {
	'/features/manager/': { label: 'eddiManager', desc: 'eddiManagerDesc' },
	'/features/config-as-code/': { label: 'configAsCode', desc: 'configAsCodeDesc' },
	'/features/mcp-server/': { label: 'mcpServer', desc: 'mcpServerDesc' },
	'/features/security/': { label: 'securityFirst', desc: 'securityFirstDesc' },
	'/features/human-in-the-loop/': { label: 'humanInTheLoop', desc: 'humanInTheLoopDesc' },
	'/features/performance/': { label: 'performance', desc: 'performanceDesc' },
	'/features/multi-agent/': { label: 'multiAgent', desc: 'multiAgentDesc' },
	'/features/observability/': { label: 'observability', desc: 'observabilityDesc' },
	'/features/code-quality/': { label: 'codeQuality', desc: 'codeQualityDesc' },
	'/features/ai-ready/': { label: 'aiReady', desc: 'aiReadyDesc' },
	'/features/memory/': { label: 'memory', desc: 'memoryDesc' },
	'/features/rag/': { label: 'rag', desc: 'ragDesc' },
	'/features/model-cascading/': { label: 'modelCascading', desc: 'modelCascadingDesc' },
	'/features/scheduling/': { label: 'scheduling', desc: 'schedulingDesc' },
	'/enterprise/why-eddi/': { label: 'whyEddi', desc: 'whyEddiDesc' },
	'/enterprise/vs-alternatives/': { label: 'vsAlternatives', desc: 'vsAlternativesDesc' },
	'/enterprise/compliance/': { label: 'euAiAct', desc: 'euAiActDesc' },
	'/enterprise/trust/': { label: 'trackRecord', desc: 'trackRecordDesc' },
	'/use-cases/': { label: 'useCases', desc: 'useCasesDesc' },
};

export interface Related {
	/** Paths from PAGE_LABELS, without locale prefix. */
	pages: string[];
	/** Integration slugs (src/data/integrations.ts). */
	integrations?: string[];
	/** Guide slugs (src/content/guides). */
	guides?: string[];
	/** Show a link to the model catalog. */
	models?: boolean;
}

/** Keyed by page path without locale prefix. */
export const RELATED: Record<string, Related> = {
	'/features/manager/': {
		pages: ['/features/human-in-the-loop/', '/features/observability/', '/features/multi-agent/'],
		integrations: ['keycloak-oidc'],
		guides: ['self-host-eddi-with-docker-compose'],
	},
	'/features/config-as-code/': {
		pages: ['/features/ai-ready/', '/features/mcp-server/', '/features/manager/'],
		integrations: ['openapi', 'secrets-vault'],
		guides: ['connect-any-api-with-openapi'],
	},
	'/features/mcp-server/': {
		pages: ['/features/ai-ready/', '/features/config-as-code/', '/features/multi-agent/'],
		integrations: ['mcp-server', 'mcp-client', 'a2a'],
	},
	'/features/security/': {
		pages: ['/features/human-in-the-loop/', '/features/observability/', '/enterprise/compliance/'],
		integrations: ['keycloak-oidc', 'secrets-vault'],
		guides: ['secure-eddi-with-keycloak-oidc'],
	},
	'/features/human-in-the-loop/': {
		pages: ['/features/security/', '/features/observability/', '/features/multi-agent/'],
		integrations: ['slack', 'email'],
	},
	'/features/performance/': {
		pages: ['/features/multi-agent/', '/features/model-cascading/', '/features/code-quality/'],
	},
	'/features/multi-agent/': {
		pages: ['/features/human-in-the-loop/', '/features/memory/', '/features/mcp-server/'],
		integrations: ['a2a'],
	},
	'/features/observability/': {
		pages: ['/features/security/', '/features/human-in-the-loop/', '/features/model-cascading/'],
	},
	'/features/code-quality/': {
		pages: ['/features/ai-ready/', '/features/security/', '/enterprise/trust/'],
	},
	'/features/ai-ready/': {
		pages: ['/features/mcp-server/', '/features/config-as-code/', '/features/code-quality/'],
		integrations: ['mcp-server'],
	},
	'/features/memory/': {
		pages: ['/features/rag/', '/features/scheduling/', '/features/multi-agent/'],
	},
	'/features/rag/': {
		pages: ['/features/memory/', '/features/model-cascading/', '/features/scheduling/'],
		integrations: ['chroma', 'pgvector', 'qdrant', 'elasticsearch', 'mongodb-atlas-vector-search', 'ollama'],
		guides: ['build-a-rag-agent-with-chroma'],
	},
	'/features/model-cascading/': {
		pages: ['/features/observability/', '/features/rag/', '/features/performance/'],
		models: true,
	},
	'/features/scheduling/': {
		pages: ['/features/memory/', '/features/human-in-the-loop/', '/features/multi-agent/'],
	},
	'/enterprise/why-eddi/': {
		pages: ['/enterprise/vs-alternatives/', '/enterprise/trust/', '/use-cases/'],
	},
	'/enterprise/vs-alternatives/': {
		pages: ['/enterprise/why-eddi/', '/features/config-as-code/', '/features/security/'],
	},
	'/enterprise/compliance/': {
		pages: ['/features/security/', '/features/human-in-the-loop/', '/features/observability/'],
		integrations: ['keycloak-oidc', 'secrets-vault'],
	},
	'/enterprise/trust/': {
		pages: ['/features/code-quality/', '/features/security/', '/enterprise/compliance/'],
	},
	'/enterprise/unido-trusted-partner/': {
		pages: ['/enterprise/trust/', '/use-cases/', '/enterprise/why-eddi/'],
	},
};

/** Feature pages that list an integration, for the integration page's links. */
export function pagesForIntegration(slug: string): string[] {
	return Object.entries(RELATED)
		.filter(([path, r]) => path.startsWith('/features/') && r.integrations?.includes(slug))
		.map(([path]) => path);
}

/** Feature pages that list a guide, for the guide's "related" block. */
export function pagesForGuide(slug: string): string[] {
	return Object.entries(RELATED)
		.filter(([path, r]) => path.startsWith('/features/') && r.guides?.includes(slug))
		.map(([path]) => path);
}
