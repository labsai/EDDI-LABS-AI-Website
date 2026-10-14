/**
 * Head-to-head comparison pages: language-neutral skeleton.
 *
 * The copy lives in src/i18n/compare/{locale}.ts (keyed by slug), mirroring the
 * /models/ catalog (src/data/models.ts + src/i18n/models). Routes: /compare/,
 * /compare/{slug}/ and the same under /{locale}/.
 *
 * Editorial rule: every page states plainly where the alternative is the
 * better choice. Balanced comparisons get cited by search engines and LLM
 * answer engines alike; one-sided ones get discounted.
 *
 * Competitor facts (checked October 2026 against official sources; the copy
 * carries no version numbers on purpose, they rot):
 *  - n8n, Flowise, Rasa, LangChain: carried over from the earlier English-only pages.
 *  - Dify: github.com/langgenius/dify (README; LICENSE: Apache 2.0 plus two
 *    conditions: no multi-tenant operation of the source without written
 *    authorization, frontend logo and copyright must stay; Dify Enterprise adds
 *    SSO, RBAC and SLAs by request; Docker Compose self-hosting; Dify Cloud),
 *    docs.dify.ai/en/use-dify/nodes/code (Code node: Python and JavaScript in a
 *    sandbox that blocks file system, outbound network and system commands),
 *    docs.dify.ai/en/use-dify/nodes/human-input (Human Input node: pauses a
 *    workflow, form via web app or email, default wait 3 days, timeout branch).
 *  - CrewAI: github.com/crewAIInc/crewAI (README: MIT, Python, standalone
 *    framework, Crews and Flows, AMP Suite commercial control plane, human
 *    input supported), docs.crewai.com/en/tools/ai-ml/codeinterpretertool
 *    (CodeInterpreterTool removed from crewai-tools, allow_code_execution
 *    deprecated, E2B or Modal recommended for sandboxed execution).
 *  - Microsoft Agent Framework: github.com/microsoft/agent-framework (README:
 *    MIT, .NET and Python, graph-based workflows with checkpointing, streaming,
 *    human-in-the-loop, OpenTelemetry, middleware, declarative YAML agents,
 *    migration guides from Semantic Kernel and AutoGen) and the Microsoft
 *    devblogs release-candidate post of February 2026 plus 1.0 reports of April
 *    2026 (Semantic Kernel receives fixes, AutoGen is in maintenance mode).
 *  - LangGraph: github.com/langchain-ai/langgraph (README: MIT, durable
 *    execution, human-in-the-loop state inspection, LangSmith Deployment).
 *
 * Stats come from src/i18n/stats.ts so `npm run check:stats` guards them.
 */

export interface ComparisonMeta {
	/** URL segment under /compare/ */
	slug: string;
	/** Short competitor label used in table headers and listings. */
	competitor: string;
	/** Full migration playbook under /guides/ (English-only), when one exists. */
	migrationGuide?: string;
}

/** Month the competitor facts were last checked. Rendered in the copy as "as of October 2026". */
export const CHECKED_ON = '2026-10';

export const COMPARISONS: ComparisonMeta[] = [
	{ slug: 'eddi-vs-langchain', competitor: 'LangChain / LangGraph' },
	{ slug: 'eddi-vs-microsoft-agent-framework', competitor: 'Microsoft Agent Framework' },
	{ slug: 'eddi-vs-crewai', competitor: 'CrewAI' },
	{ slug: 'eddi-vs-dify', competitor: 'Dify' },
	{ slug: 'eddi-vs-n8n', competitor: 'n8n', migrationGuide: '/guides/migrate-from-n8n/' },
	{ slug: 'eddi-vs-flowise', competitor: 'Flowise', migrationGuide: '/guides/migrate-from-flowise/' },
	{ slug: 'eddi-vs-rasa', competitor: 'Rasa' },
];

export const COMPARISON_BY_SLUG: Record<string, ComparisonMeta> = Object.fromEntries(COMPARISONS.map((c) => [c.slug, c]));
