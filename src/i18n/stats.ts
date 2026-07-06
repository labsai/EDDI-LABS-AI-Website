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
export const TESTS = '10,000+';
export const MCP_TOOLS = 65;
export const FRAMEWORKS = '15+';
export const LLM_PROVIDERS = 12;
export const DOCKER_PULLS = '390K+';
export const FOUNDED = 2006;
export const OSS_SINCE = 2018;
