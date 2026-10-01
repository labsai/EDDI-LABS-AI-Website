/**
 * Model catalog: the language-neutral facts behind /models/ and /models/{slug}/.
 *
 * Localized copy (summary, strengths, best-for, host descriptions, tips) lives in
 * src/i18n/models/{locale}.ts, keyed by the same slugs.
 *
 * Editorial rules:
 * - Every number comes from the vendor's own documentation or model card, checked on
 *   CHECKED_ON. A value the vendor does not state is null and renders as "not stated".
 * - No prices. Prices change weekly; each page links the vendor's pricing page instead.
 * - Model ids are the ids the vendor documents for the route shown. Where EDDI's
 *   Manager autocompletion suggests a different id, the vendor's id wins here; the
 *   Manager accepts any id typed by hand.
 */

export const CHECKED_ON = '2026-09-30';

/** EDDI LLM task types (the `type` field of a langchain.json task). */
export type ProviderType =
	| 'anthropic'
	| 'openai'
	| 'gemini'
	| 'gemini-vertex'
	| 'mistral'
	| 'azure-openai'
	| 'bedrock'
	| 'oracle-genai'
	| 'ollama'
	| 'huggingface'
	| 'jlama'
	| 'xai'
	| 'deepseek'
	| 'moonshot'
	| 'qwen'
	| 'zhipu'
	| 'minimax'
	| 'openrouter'
	| 'groq';

export const PROVIDER_LABELS: Record<ProviderType, string> = {
	anthropic: 'Anthropic',
	openai: 'OpenAI',
	gemini: 'Google Gemini API',
	'gemini-vertex': 'Google Vertex AI',
	mistral: 'Mistral AI',
	'azure-openai': 'Azure OpenAI',
	bedrock: 'Amazon Bedrock',
	'oracle-genai': 'Oracle OCI Generative AI',
	ollama: 'Ollama (local)',
	huggingface: 'Hugging Face',
	jlama: 'Jlama (in-process)',
	xai: 'xAI',
	deepseek: 'DeepSeek',
	moonshot: 'Moonshot AI',
	qwen: 'Alibaba Cloud Model Studio',
	zhipu: 'Z.ai',
	minimax: 'MiniMax',
	openrouter: 'OpenRouter',
	groq: 'Groq',
};

/** Providers whose credential is a single API key, so setup_agent can take it directly. */
export const KEY_PROVIDERS: ProviderType[] = [
	'anthropic', 'openai', 'gemini', 'mistral', 'xai', 'deepseek', 'moonshot', 'qwen', 'zhipu', 'minimax', 'openrouter', 'groq',
];

export type Modality = 'text' | 'image' | 'video' | 'audio' | 'pdf';

/** Keys into the localized tip texts (src/i18n/models/{locale}.ts → tips). */
export type TipKey =
	| 'anthropicNoTemperature'
	| 'openaiResponsesTools'
	| 'geminiSignature'
	| 'geminiVertexTools'
	| 'xaiUsRegion'
	| 'thinkingEcho'
	| 'kimiTemperature'
	| 'qwenRegions'
	| 'minimaxNoJson'
	| 'groqPreview'
	| 'bedrockGeo'
	| 'ollamaThink'
	| 'jlamaCache'
	| 'localAirGap'
	| 'cascadeTier'
	| 'cascadeTop'
	| 'azureDeployment';

export interface Route {
	type: ProviderType;
	/** Ids for this route, most useful first. The first one goes into the snippets. */
	ids: string[];
}

export type Category = 'frontier' | 'fast' | 'open' | 'local';

export interface ModelFamily {
	slug: string;
	name: string;
	vendor: string;
	/** YYYY-MM of general availability, as the vendor states it. */
	released: string | null;
	category: Category;
	contextTokens: number | null;
	maxOutputTokens: number | null;
	input: Modality[];
	tools: boolean | null;
	reasoning: boolean;
	openWeights: boolean;
	license: string | null;
	docsUrl: string;
	pricingUrl: string | null;
	routes: Route[];
	tips: TipKey[];
	related: string[];
}

export const MODELS: ModelFamily[] = [
	// ── Anthropic ─────────────────────────────────────────────────────
	{
		slug: 'claude-fable-5-1', name: 'Claude Fable 5.1', vendor: 'Anthropic', released: '2026-09', category: 'frontier',
		contextTokens: 1000000, maxOutputTokens: 128000, input: ['text', 'image'], tools: true, reasoning: true, openWeights: false, license: null,
		docsUrl: 'https://platform.claude.com/docs/en/models/fable-5-1/overview', pricingUrl: 'https://platform.claude.com/docs/en/about-claude/pricing',
		routes: [{ type: 'anthropic', ids: ['claude-fable-5-1', 'claude-fable-5'] }, { type: 'bedrock', ids: ['anthropic.claude-fable-5-1'] }],
		tips: ['anthropicNoTemperature', 'cascadeTop'], related: ['claude-opus-5-5', 'claude-sonnet-5-5', 'gpt-6'],
	},
	{
		slug: 'claude-opus-5-5', name: 'Claude Opus 5.5', vendor: 'Anthropic', released: '2026-09', category: 'frontier',
		contextTokens: 1000000, maxOutputTokens: 128000, input: ['text', 'image'], tools: true, reasoning: true, openWeights: false, license: null,
		docsUrl: 'https://platform.claude.com/docs/en/models/opus-5-5/overview', pricingUrl: 'https://platform.claude.com/docs/en/about-claude/pricing',
		routes: [{ type: 'anthropic', ids: ['claude-opus-5-5', 'claude-opus-5'] }, { type: 'bedrock', ids: ['anthropic.claude-opus-5-5', 'anthropic.claude-opus-5'] }],
		tips: ['anthropicNoTemperature', 'cascadeTop'], related: ['claude-fable-5-1', 'claude-sonnet-5-5', 'gpt-6'],
	},
	{
		slug: 'claude-sonnet-5-5', name: 'Claude Sonnet 5.5', vendor: 'Anthropic', released: '2026-09', category: 'frontier',
		contextTokens: 1000000, maxOutputTokens: 128000, input: ['text', 'image'], tools: true, reasoning: true, openWeights: false, license: null,
		docsUrl: 'https://platform.claude.com/docs/en/models/sonnet-5-5/overview', pricingUrl: 'https://platform.claude.com/docs/en/about-claude/pricing',
		routes: [{ type: 'anthropic', ids: ['claude-sonnet-5-5', 'claude-sonnet-5'] }, { type: 'bedrock', ids: ['global.anthropic.claude-sonnet-5-5', 'anthropic.claude-sonnet-5'] }],
		tips: ['anthropicNoTemperature'], related: ['claude-opus-5-5', 'claude-haiku-4-5', 'gemini-3-8-flash'],
	},
	{
		slug: 'claude-haiku-4-5', name: 'Claude Haiku 4.5', vendor: 'Anthropic', released: '2025-10', category: 'fast',
		contextTokens: 200000, maxOutputTokens: 64000, input: ['text', 'image'], tools: true, reasoning: true, openWeights: false, license: null,
		docsUrl: 'https://platform.claude.com/docs/en/models/haiku-4-5/overview', pricingUrl: 'https://platform.claude.com/docs/en/about-claude/pricing',
		routes: [{ type: 'anthropic', ids: ['claude-haiku-4-5'] }, { type: 'bedrock', ids: ['anthropic.claude-haiku-4-5-20251001-v1:0'] }],
		tips: ['cascadeTier'], related: ['claude-sonnet-5-5', 'gemini-3-5-flash-lite', 'deepseek-flash'],
	},
	// ── OpenAI ────────────────────────────────────────────────────────
	{
		slug: 'gpt-6', name: 'GPT-6 (Astra, Sol, Luna)', vendor: 'OpenAI', released: '2026-09', category: 'frontier',
		contextTokens: 1050000, maxOutputTokens: 128000, input: ['text', 'image'], tools: true, reasoning: true, openWeights: false, license: null,
		docsUrl: 'https://developers.openai.com/api/docs/guides/latest-model', pricingUrl: 'https://developers.openai.com/api/docs/pricing',
		routes: [{ type: 'openai', ids: ['gpt-6.1-sol', 'gpt-6-astra', 'gpt-6-luna'] }, { type: 'azure-openai', ids: ['gpt-6-sol'] }],
		tips: ['openaiResponsesTools', 'azureDeployment', 'cascadeTop'], related: ['gpt-5-6', 'claude-opus-5-5', 'gemini-3-1-pro'],
	},
	{
		slug: 'gpt-5-6', name: 'GPT-5.6 (Sol, Terra, Luna)', vendor: 'OpenAI', released: '2026-07', category: 'frontier',
		contextTokens: 1050000, maxOutputTokens: 128000, input: ['text', 'image'], tools: null, reasoning: true, openWeights: false, license: null,
		docsUrl: 'https://developers.openai.com/api/docs/models/gpt-5.6-sol', pricingUrl: 'https://developers.openai.com/api/docs/pricing',
		routes: [{ type: 'openai', ids: ['gpt-5.6-sol', 'gpt-5.6-terra', 'gpt-5.6-luna'] }, { type: 'azure-openai', ids: ['gpt-5.6-sol'] }],
		tips: ['azureDeployment'], related: ['gpt-6', 'claude-sonnet-5-5', 'gemini-3-8-flash'],
	},
	{
		slug: 'gpt-oss', name: 'gpt-oss (120b, 20b)', vendor: 'OpenAI', released: '2025-08', category: 'open',
		contextTokens: 131072, maxOutputTokens: 131072, input: ['text'], tools: true, reasoning: true, openWeights: true, license: 'Apache 2.0',
		docsUrl: 'https://developers.openai.com/api/docs/models/gpt-oss-120b', pricingUrl: null,
		routes: [
			{ type: 'groq', ids: ['openai/gpt-oss-120b', 'openai/gpt-oss-20b'] },
			{ type: 'bedrock', ids: ['openai.gpt-oss-120b-1:0'] },
		],
		tips: [], related: ['llama-3-3-70b', 'qwen-3-8', 'mistral-small'],
	},
	// ── Google ────────────────────────────────────────────────────────
	{
		slug: 'gemini-3-8-flash', name: 'Gemini 3.8 Flash', vendor: 'Google', released: '2026-09', category: 'fast',
		contextTokens: 1048576, maxOutputTokens: 65536, input: ['text', 'image', 'video', 'audio', 'pdf'], tools: true, reasoning: true, openWeights: false, license: null,
		docsUrl: 'https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash', pricingUrl: 'https://ai.google.dev/gemini-api/docs/pricing',
		routes: [{ type: 'gemini', ids: ['gemini-3.8-flash'] }, { type: 'gemini-vertex', ids: ['gemini-3.8-flash'] }],
		tips: ['geminiSignature', 'geminiVertexTools', 'cascadeTier'], related: ['gemini-3-1-pro', 'gemini-3-5-flash-lite', 'claude-sonnet-5-5'],
	},
	{
		slug: 'gemini-3-1-pro', name: 'Gemini 3.1 Pro', vendor: 'Google', released: '2026-02', category: 'frontier',
		contextTokens: 1048576, maxOutputTokens: 65536, input: ['text', 'image', 'video', 'audio', 'pdf'], tools: true, reasoning: true, openWeights: false, license: null,
		docsUrl: 'https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro-preview', pricingUrl: 'https://ai.google.dev/gemini-api/docs/pricing',
		routes: [{ type: 'gemini', ids: ['gemini-3.1-pro-preview', 'gemini-3.1-pro-preview-customtools'] }],
		tips: ['geminiSignature', 'geminiVertexTools'], related: ['gemini-3-8-flash', 'gpt-6', 'claude-opus-5-5'],
	},
	{
		slug: 'gemini-3-5-flash-lite', name: 'Gemini 3.5 Flash-Lite', vendor: 'Google', released: '2026-07', category: 'fast',
		contextTokens: 1048576, maxOutputTokens: 65536, input: ['text', 'image', 'video', 'audio', 'pdf'], tools: true, reasoning: true, openWeights: false, license: null,
		docsUrl: 'https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite', pricingUrl: 'https://ai.google.dev/gemini-api/docs/pricing',
		routes: [{ type: 'gemini', ids: ['gemini-3.5-flash-lite'] }, { type: 'gemini-vertex', ids: ['gemini-3.5-flash-lite'] }],
		tips: ['geminiSignature', 'cascadeTier'], related: ['gemini-3-8-flash', 'claude-haiku-4-5', 'deepseek-flash'],
	},
	{
		slug: 'gemma', name: 'Gemma (Gemma 4, Gemma 3)', vendor: 'Google', released: '2026-04', category: 'local',
		contextTokens: null, maxOutputTokens: null, input: ['text', 'image'], tools: true, reasoning: true, openWeights: true, license: 'Gemma 4: Apache 2.0 · Gemma 3: Gemma Terms of Use',
		docsUrl: 'https://ai.google.dev/gemma/docs/core', pricingUrl: null,
		routes: [{ type: 'ollama', ids: ['gemma3:4b'] }],
		tips: ['localAirGap'], related: ['phi-4-mini', 'ministral', 'llama-3-2-1b'],
	},
	// ── xAI ───────────────────────────────────────────────────────────
	{
		slug: 'grok-4-7', name: 'Grok 4.7', vendor: 'xAI', released: '2026-09', category: 'frontier',
		contextTokens: 500000, maxOutputTokens: null, input: ['text', 'image'], tools: true, reasoning: true, openWeights: false, license: null,
		docsUrl: 'https://docs.x.ai/developers/grok-4-7', pricingUrl: 'https://docs.x.ai/developers/pricing',
		routes: [{ type: 'xai', ids: ['grok-4.7', 'grok-4.6', 'grok-4.3'] }],
		tips: ['xaiUsRegion'], related: ['gpt-6', 'claude-opus-5-5', 'kimi-k3'],
	},
	// ── DeepSeek ──────────────────────────────────────────────────────
	{
		slug: 'deepseek-flash', name: 'DeepSeek Flash (V4.1)', vendor: 'DeepSeek', released: '2026-09', category: 'fast',
		contextTokens: 1000000, maxOutputTokens: 384000, input: ['text', 'image'], tools: true, reasoning: true, openWeights: true, license: 'MIT',
		docsUrl: 'https://api-docs.deepseek.com/guides/thinking_mode', pricingUrl: 'https://api-docs.deepseek.com/quick_start/pricing',
		routes: [{ type: 'deepseek', ids: ['deepseek-flash'] }],
		tips: ['thinkingEcho', 'cascadeTier'], related: ['deepseek-v4-pro', 'qwen-3-8', 'gemini-3-8-flash'],
	},
	{
		slug: 'deepseek-v4-pro', name: 'DeepSeek V4 Pro', vendor: 'DeepSeek', released: '2026-08', category: 'frontier',
		contextTokens: 1000000, maxOutputTokens: 384000, input: ['text'], tools: true, reasoning: true, openWeights: true, license: 'MIT',
		docsUrl: 'https://api-docs.deepseek.com/news/news260813/', pricingUrl: 'https://api-docs.deepseek.com/quick_start/pricing',
		routes: [{ type: 'deepseek', ids: ['deepseek-v4-pro'] }],
		tips: ['thinkingEcho'], related: ['deepseek-flash', 'glm-5-3', 'kimi-k3'],
	},
	{
		slug: 'deepseek-r1-distill', name: 'DeepSeek-R1 Distill (8B)', vendor: 'DeepSeek', released: '2025-05', category: 'local',
		contextTokens: 128000, maxOutputTokens: null, input: ['text'], tools: true, reasoning: true, openWeights: true, license: 'MIT',
		docsUrl: 'https://huggingface.co/deepseek-ai/DeepSeek-R1-0528-Qwen3-8B', pricingUrl: null,
		routes: [{ type: 'ollama', ids: ['deepseek-r1:8b'] }],
		tips: ['ollamaThink', 'localAirGap'], related: ['phi-4-mini', 'gemma', 'llama-3-3-70b'],
	},
	// ── Moonshot ──────────────────────────────────────────────────────
	{
		slug: 'kimi-k3', name: 'Kimi K3', vendor: 'Moonshot AI', released: '2026-07', category: 'frontier',
		contextTokens: 1048576, maxOutputTokens: 1048576, input: ['text', 'image', 'video'], tools: true, reasoning: true, openWeights: true, license: 'Kimi K3 License',
		docsUrl: 'https://platform.kimi.ai/docs/guide/kimi-k3-quickstart', pricingUrl: 'https://platform.moonshot.ai/docs/pricing/chat-k3',
		routes: [{ type: 'moonshot', ids: ['kimi-k3', 'kimi-k2.6'] }],
		tips: ['thinkingEcho'], related: ['kimi-k2-7-code', 'deepseek-v4-pro', 'glm-5-3'],
	},
	{
		slug: 'kimi-k2-7-code', name: 'Kimi K2.7 Code', vendor: 'Moonshot AI', released: '2026-06', category: 'open',
		contextTokens: 256000, maxOutputTokens: null, input: ['text', 'image', 'video'], tools: true, reasoning: true, openWeights: true, license: 'Modified MIT',
		docsUrl: 'https://platform.kimi.ai/docs/guide/kimi-k2-7-code-quickstart', pricingUrl: 'https://platform.kimi.ai/docs/pricing/chat-k27-code',
		routes: [{ type: 'moonshot', ids: ['kimi-k2.7-code', 'kimi-k2.7-code-highspeed'] }],
		tips: ['thinkingEcho', 'kimiTemperature'], related: ['kimi-k3', 'codestral', 'glm-5-3'],
	},
	// ── Alibaba ───────────────────────────────────────────────────────
	{
		slug: 'qwen-3-8', name: 'Qwen 3.8 (Max, Flash)', vendor: 'Alibaba', released: '2026-08', category: 'frontier',
		contextTokens: 1000000, maxOutputTokens: 131072, input: ['text', 'image', 'video'], tools: true, reasoning: true, openWeights: true, license: 'API models proprietary · Qwen3.8-27B: Apache 2.0',
		docsUrl: 'https://www.alibabacloud.com/help/en/model-studio/qwen3-8-max', pricingUrl: 'https://www.alibabacloud.com/help/en/model-studio/model-pricing',
		routes: [{ type: 'qwen', ids: ['qwen3.8-max', 'qwen3.8-flash'] }, { type: 'groq', ids: ['qwen/qwen3.8-27b'] }],
		tips: ['qwenRegions', 'groqPreview'], related: ['qwen-3-7-plus', 'deepseek-v4-pro', 'glm-5-3'],
	},
	{
		slug: 'qwen-3-7-plus', name: 'Qwen 3.7 Plus', vendor: 'Alibaba', released: '2026-05', category: 'fast',
		contextTokens: 1000000, maxOutputTokens: 131072, input: ['text', 'image', 'video'], tools: true, reasoning: true, openWeights: false, license: null,
		docsUrl: 'https://www.alibabacloud.com/help/en/model-studio/qwen3-7-plus', pricingUrl: 'https://www.alibabacloud.com/help/en/model-studio/model-pricing',
		routes: [{ type: 'qwen', ids: ['qwen3.7-plus', 'qwen3.7-flash'] }],
		tips: ['qwenRegions', 'cascadeTier'], related: ['qwen-3-8', 'gemini-3-8-flash', 'deepseek-flash'],
	},
	// ── Z.ai ──────────────────────────────────────────────────────────
	{
		slug: 'glm-5-3', name: 'GLM-5.3', vendor: 'Z.ai', released: '2026-08', category: 'frontier',
		contextTokens: 1000000, maxOutputTokens: 128000, input: ['text'], tools: true, reasoning: true, openWeights: true, license: 'GLM-5.3 License · GLM-5.3-Flash: MIT',
		docsUrl: 'https://docs.z.ai/guides/llm/glm-5.3', pricingUrl: 'https://docs.z.ai/guides/overview/pricing',
		routes: [{ type: 'zhipu', ids: ['glm-5.3', 'glm-5.3-flash', 'glm-5.3-flashx', 'glm-5.2'] }],
		tips: ['thinkingEcho'], related: ['kimi-k3', 'deepseek-v4-pro', 'qwen-3-8'],
	},
	// ── MiniMax ───────────────────────────────────────────────────────
	{
		slug: 'minimax-m3', name: 'MiniMax M3', vendor: 'MiniMax', released: '2026-06', category: 'frontier',
		contextTokens: 1000000, maxOutputTokens: 524288, input: ['text', 'image', 'video'], tools: true, reasoning: true, openWeights: true, license: 'MiniMax Community License',
		docsUrl: 'https://platform.minimax.io/docs/guides/text-m3-function-call', pricingUrl: 'https://platform.minimax.io/docs/guides/pricing-paygo',
		routes: [{ type: 'minimax', ids: ['MiniMax-M3', 'MiniMax-M2.7'] }],
		tips: ['thinkingEcho', 'minimaxNoJson'], related: ['kimi-k3', 'glm-5-3', 'qwen-3-8'],
	},
	// ── Mistral ───────────────────────────────────────────────────────
	{
		slug: 'mistral-large', name: 'Mistral Large 3', vendor: 'Mistral AI', released: '2025-12', category: 'open',
		contextTokens: 256000, maxOutputTokens: null, input: ['text', 'image'], tools: true, reasoning: false, openWeights: true, license: 'Apache 2.0',
		docsUrl: 'https://docs.mistral.ai/models/mistral-large-3-25-12', pricingUrl: 'https://mistral.ai/pricing',
		routes: [{ type: 'mistral', ids: ['mistral-large-2512', 'mistral-large-latest'] }],
		tips: [], related: ['mistral-medium', 'mistral-small', 'llama-4'],
	},
	{
		slug: 'mistral-medium', name: 'Mistral Medium 3.5', vendor: 'Mistral AI', released: '2026-04', category: 'open',
		contextTokens: 256000, maxOutputTokens: null, input: ['text', 'image'], tools: true, reasoning: true, openWeights: true, license: 'Modified MIT',
		docsUrl: 'https://docs.mistral.ai/models/mistral-medium-3-5-26-04', pricingUrl: 'https://mistral.ai/pricing',
		routes: [{ type: 'mistral', ids: ['mistral-medium-3-5'] }],
		tips: [], related: ['mistral-large', 'mistral-small', 'codestral'],
	},
	{
		slug: 'mistral-small', name: 'Mistral Small 4', vendor: 'Mistral AI', released: '2026-03', category: 'open',
		contextTokens: 256000, maxOutputTokens: null, input: ['text', 'image'], tools: true, reasoning: true, openWeights: true, license: 'Apache 2.0',
		docsUrl: 'https://docs.mistral.ai/models/mistral-small-4-0-26-03', pricingUrl: 'https://mistral.ai/pricing',
		routes: [{ type: 'mistral', ids: ['mistral-small-latest', 'mistral-small-2603'] }],
		tips: ['cascadeTier'], related: ['mistral-medium', 'ministral', 'gpt-oss'],
	},
	{
		slug: 'ministral', name: 'Ministral 3 (3B, 8B, 14B)', vendor: 'Mistral AI', released: '2025-12', category: 'local',
		contextTokens: 256000, maxOutputTokens: null, input: ['text', 'image'], tools: true, reasoning: true, openWeights: true, license: 'Apache 2.0',
		docsUrl: 'https://docs.mistral.ai/models/ministral-3-14b-25-12', pricingUrl: 'https://mistral.ai/pricing',
		routes: [{ type: 'mistral', ids: ['ministral-14b-2512'] }],
		tips: ['cascadeTier'], related: ['mistral-small', 'phi-4-mini', 'gemma'],
	},
	{
		slug: 'codestral', name: 'Codestral', vendor: 'Mistral AI', released: '2025-07', category: 'fast',
		contextTokens: 128000, maxOutputTokens: null, input: ['text'], tools: true, reasoning: false, openWeights: false, license: null,
		docsUrl: 'https://docs.mistral.ai/models/codestral-25-08', pricingUrl: 'https://mistral.ai/pricing',
		routes: [{ type: 'mistral', ids: ['codestral-2508'] }],
		tips: [], related: ['kimi-k2-7-code', 'mistral-medium', 'deepseek-v4-pro'],
	},
	// ── Meta ──────────────────────────────────────────────────────────
	{
		slug: 'llama-4', name: 'Llama 4 (Scout, Maverick)', vendor: 'Meta', released: '2025-04', category: 'open',
		contextTokens: 1000000, maxOutputTokens: 8000, input: ['text', 'image'], tools: true, reasoning: false, openWeights: true, license: 'Llama 4 Community License',
		docsUrl: 'https://huggingface.co/meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8', pricingUrl: null,
		routes: [
			{ type: 'bedrock', ids: ['us.meta.llama4-maverick-17b-instruct-v1:0'] },
			{ type: 'oracle-genai', ids: ['meta.llama-4-maverick-17b-128e-instruct-fp8'] },
		],
		tips: ['bedrockGeo'], related: ['llama-3-3-70b', 'mistral-large', 'amazon-nova'],
	},
	{
		slug: 'llama-3-3-70b', name: 'Llama 3.3 70B', vendor: 'Meta', released: '2024-12', category: 'local',
		contextTokens: 128000, maxOutputTokens: null, input: ['text'], tools: true, reasoning: false, openWeights: true, license: 'Llama 3.3 Community License',
		docsUrl: 'https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct', pricingUrl: null,
		routes: [
			{ type: 'ollama', ids: ['llama3.3:70b'] },
			{ type: 'oracle-genai', ids: ['meta.llama-3.3-70b-instruct'] },
		],
		tips: ['localAirGap'], related: ['llama-4', 'gpt-oss', 'llama-3-2-1b'],
	},
	{
		slug: 'llama-3-2-1b', name: 'Llama 3.2 1B', vendor: 'Meta', released: '2024-09', category: 'local',
		contextTokens: 128000, maxOutputTokens: null, input: ['text'], tools: null, reasoning: false, openWeights: true, license: 'Llama 3.2 Community License',
		docsUrl: 'https://huggingface.co/meta-llama/Llama-3.2-1B-Instruct', pricingUrl: null,
		routes: [{ type: 'jlama', ids: ['tjake/Llama-3.2-1B-Instruct-JQ4'] }],
		tips: ['jlamaCache', 'localAirGap'], related: ['phi-4-mini', 'gemma', 'ministral'],
	},
	// ── Others ────────────────────────────────────────────────────────
	{
		slug: 'amazon-nova', name: 'Amazon Nova (Pro, Lite)', vendor: 'Amazon', released: '2024-12', category: 'fast',
		contextTokens: 300000, maxOutputTokens: 5000, input: ['text', 'image', 'video'], tools: true, reasoning: false, openWeights: false, license: null,
		docsUrl: 'https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-amazon-nova-pro.html', pricingUrl: 'https://aws.amazon.com/bedrock/pricing/',
		routes: [{ type: 'bedrock', ids: ['amazon.nova-pro-v1:0', 'amazon.nova-lite-v1:0'] }],
		tips: [], related: ['llama-4', 'claude-haiku-4-5', 'gpt-oss'],
	},
	{
		slug: 'cohere-command-a', name: 'Cohere Command A', vendor: 'Cohere', released: '2025-03', category: 'frontier',
		contextTokens: 256000, maxOutputTokens: 8000, input: ['text'], tools: true, reasoning: false, openWeights: false, license: null,
		docsUrl: 'https://docs.oracle.com/en-us/iaas/Content/generative-ai/pretrained-models.htm', pricingUrl: null,
		routes: [{ type: 'oracle-genai', ids: ['cohere.command-a-03-2025', 'cohere.command-a-reasoning'] }],
		tips: [], related: ['llama-3-3-70b', 'mistral-large', 'gpt-oss'],
	},
	{
		slug: 'phi-4-mini', name: 'Phi-4-mini', vendor: 'Microsoft', released: '2025-02', category: 'local',
		contextTokens: 128000, maxOutputTokens: null, input: ['text'], tools: true, reasoning: false, openWeights: true, license: 'MIT',
		docsUrl: 'https://huggingface.co/microsoft/Phi-4-mini-instruct', pricingUrl: null,
		routes: [{ type: 'ollama', ids: ['phi4-mini'] }],
		tips: ['localAirGap'], related: ['gemma', 'llama-3-2-1b', 'ministral'],
	},
];

export const MODEL_BY_SLUG: Record<string, ModelFamily> = Object.fromEntries(MODELS.map((m) => [m.slug, m]));

/** Hosting routes shown on the catalog page, in display order. Localized text: src/i18n/models → hosts. */
export const HOSTS = [
	{ slug: 'bedrock', type: 'bedrock' as ProviderType, docsUrl: 'https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html' },
	{ slug: 'vertex', type: 'gemini-vertex' as ProviderType, docsUrl: 'https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/partner-models/claude' },
	{ slug: 'azure', type: 'azure-openai' as ProviderType, docsUrl: 'https://learn.microsoft.com/en-us/azure/foundry/openai/reference' },
	{ slug: 'oracle', type: 'oracle-genai' as ProviderType, docsUrl: 'https://docs.oracle.com/en-us/iaas/Content/generative-ai/overview.htm' },
	{ slug: 'groq', type: 'groq' as ProviderType, docsUrl: 'https://console.groq.com/docs/openai' },
	{ slug: 'openrouter', type: 'openrouter' as ProviderType, docsUrl: 'https://openrouter.ai/docs/features/model-routing' },
	{ slug: 'ollama', type: 'ollama' as ProviderType, docsUrl: 'https://docs.ollama.com/' },
	{ slug: 'huggingface', type: 'huggingface' as ProviderType, docsUrl: 'https://huggingface.co/docs/inference-providers/index' },
	{ slug: 'jlama', type: 'jlama' as ProviderType, docsUrl: 'https://github.com/tjake/Jlama' },
];

// ─── Config snippets ────────────────────────────────────────────────

/** The parameters block EDDI's setup tools write for this provider, mirrored from AgentSetupService. */
export function taskParameters(type: ProviderType, id: string): Record<string, string> {
	const vault = `\${vault:${type}-key}`;
	switch (type) {
		case 'anthropic':
			// No temperature: Claude 5.x rejects a non-default one, and setup_agent omits it.
			return { apiKey: vault, modelName: id, maxTokens: '16384' };
		case 'gemini':
			return { apiKey: vault, modelName: id, maxOutputTokens: '8192' };
		case 'gemini-vertex':
			return { projectId: 'your-gcp-project', location: 'us-central1', modelId: id };
		case 'azure-openai':
			return { apiKey: vault, deploymentName: id, endpoint: 'https://your-resource.openai.azure.com' };
		case 'bedrock':
			return { modelId: id, region: 'us-east-1', maxTokens: '16384' };
		case 'oracle-genai':
			return { modelName: id, compartmentId: 'ocid1.compartment.oc1..your-compartment', configProfile: 'DEFAULT' };
		case 'ollama':
			return { baseUrl: 'http://ollama:11434', model: id, timeout: '120000' };
		case 'huggingface':
			return { accessToken: vault, modelId: id };
		case 'jlama':
			return { modelName: id, modelCachePath: '/var/lib/eddi/jlama', maxTokens: '512' };
		default:
			return { apiKey: vault, modelName: id };
	}
}

/** A complete langchain.json for a single-task chat agent. */
export function langchainJson(type: ProviderType, id: string): string {
	const task = {
		actions: ['send_message'],
		id: 'chat',
		type,
		parameters: { ...taskParameters(type, id), systemMessage: 'You are a helpful assistant', addToOutput: 'true' },
	};
	return JSON.stringify({ tasks: [task] }, null, 2);
}

/** The one-call setup_agent form, for providers that authenticate with a single key. */
export function setupAgentCall(type: ProviderType, id: string): string {
	return `setup_agent(
  agentName: "My ${id} agent",
  systemPrompt: "You are a helpful assistant.",
  provider: "${type}",
  model: "${id}",
  apiKey: "\${vault:${type}-key}"
)`;
}

export function formatTokens(n: number | null): string | null {
	if (n == null) return null;
	if (n >= 1000000) {
		const m = n / 1000000;
		return `${Number.isInteger(m) ? m : m.toFixed(2).replace(/0+$/, '').replace(/\.$/, '')}M`;
	}
	return `${Math.round(n / 1000)}K`;
}
