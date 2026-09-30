/**
 * Volatile marketing stats: single source of truth.
 *
 * When you change a value here, add the OLD rendering to the
 * forbidden list in scripts/check-stats.mjs and update all
 * 11 locale files.
 *
 * Usage in locale files:  import { TESTS, MCP_TOOLS } from '../stats';
 * Usage in components:    import { TESTS, MCP_TOOLS } from '../i18n/stats';
 */
export const TESTS = '20,000+';
export const MCP_TOOLS = 84;
export const FRAMEWORKS = '15+';
export const LLM_PROVIDERS = 19;
/** Of the LLM providers, the OpenAI-compatible ones with a first-class type (xAI, DeepSeek, Kimi, Qwen, GLM, MiniMax, OpenRouter, Groq). */
export const COMPATIBLE_PROVIDERS = 8;
/** RAG embedding providers (docs/rag.md in EDDI). Was 7 until Gemini embeddings. */
export const EMBEDDING_PROVIDERS = 8;
export const VECTOR_STORES = 6;
export const DOCKER_PULLS = '399K+';
export const FOUNDED = 2006;
export const OSS_SINCE = 2018;
