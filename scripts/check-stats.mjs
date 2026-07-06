#!/usr/bin/env node
/**
 * check-stats.mjs: build gate against stale marketing stats.
 *
 * Scans src/i18n/locales/*.ts, src/components/** (*.astro) and README.md
 * for forbidden renderings of outdated numbers and exits 1 listing every
 * file:line match. Companion to src/i18n/stats.ts: when a stat changes
 * there, add the OLD rendering to the FORBIDDEN list below.
 *
 * Zero dependencies. Run via `npm run check:stats` (part of `npm run build`).
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));

/** Forbidden stale patterns, each with the reason it is banned. */
const FORBIDDEN = [
	// Old test counts in any locale rendering: "9,000+", "Über 9.000", "9 000", "+9,000",
	// and the later "9,600"/"9.600"/"9 600" — no trailing "+" required, since several
	// locales phrase "more than" in words. Current: 10,000+
	{ pattern: /(?<!\d)9[,.\s]?000(?!\d)/, reason: 'stale test count, use 10,000+ (TESTS in src/i18n/stats.ts)' },
	{ pattern: /(?<!\d)9[,.\s]?600(?!\d)/, reason: 'stale test count, use 10,000+ (TESTS in src/i18n/stats.ts)' },
	// Pre-v6 test count. Current: 10,000+
	{ pattern: /5,100/, reason: 'stale test count, use 10,000+ (TESTS in src/i18n/stats.ts)' },
	// Old MCP tool count near "MCP" in either order, so localized word orders ("Alle 42 integrierten
	// MCP Tools", "42 outils MCP") match too. Current: 65. "42 Integration Tests" stays legit.
	{ pattern: /\b42\b.{0,40}MCP|MCP.{0,40}\b42\b/, reason: 'stale MCP tool count, use 65 (MCP_TOOLS in src/i18n/stats.ts)' },
	// Old regulatory framework count. Current: 15+
	{ pattern: /17\+ (regulatory )?frameworks/, reason: 'stale framework count, use 15+ (FRAMEWORKS in src/i18n/stats.ts)' },
	// Vague age claim. Canonical history: in continuous development since 2006, open source since 2018
	{ pattern: /18-year-old/, reason: 'stale history claim, anchor to "since 2006, open source since 2018"' },
	// Old LLM provider count. Current: 12
	{ pattern: /20\+ LLM provider/, reason: 'stale LLM provider count, use 12 (LLM_PROVIDERS in src/i18n/stats.ts)' },
];

/** Recursively collect files under dir whose names end with one of the given extensions. */
function collect(dir, extensions) {
	if (!existsSync(dir)) return [];
	const files = [];
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const full = join(dir, entry.name);
		if (entry.isDirectory()) {
			files.push(...collect(full, extensions));
		} else if (extensions.some((ext) => entry.name.endsWith(ext))) {
			files.push(full);
		}
	}
	return files;
}

/**
 * Positive checks: every locale file must render the canonical numbers at
 * least once (any separator format, or via ${TESTS}/${MCP_TOOLS} interpolation
 * from src/i18n/stats.ts). Forbidden patterns cannot anticipate every stale
 * re-translation; this catches a stat silently disappearing or drifting in a
 * single locale.
 */
const REQUIRED_IN_LOCALES = [
	{ pattern: /10[,.\s]?000|\$\{TESTS\}/, reason: 'canonical test count (10,000+) missing from this locale' },
	{ pattern: /\b65\b|\$\{MCP_TOOLS\}/, reason: 'canonical MCP tool count (65) missing from this locale' },
];

const localeFiles = collect(join(ROOT, 'src', 'i18n', 'locales'), ['.ts']);
const targets = [
	...localeFiles,
	...collect(join(ROOT, 'src', 'components'), ['.astro']),
	...collect(join(ROOT, 'src', 'layouts'), ['.astro']),
	...collect(join(ROOT, 'src', 'pages'), ['.astro']),
	...(existsSync(join(ROOT, 'README.md')) ? [join(ROOT, 'README.md')] : []),
];

const violations = [];
for (const file of targets) {
	const lines = readFileSync(file, 'utf8').split(/\r?\n/);
	lines.forEach((line, index) => {
		for (const { pattern, reason } of FORBIDDEN) {
			const match = line.match(pattern);
			if (match) {
				violations.push(`${relative(ROOT, file)}:${index + 1}: "${match[0]}" (${reason})`);
			}
		}
	});
}

for (const file of localeFiles) {
	const content = readFileSync(file, 'utf8');
	for (const { pattern, reason } of REQUIRED_IN_LOCALES) {
		if (!pattern.test(content)) {
			violations.push(`${relative(ROOT, file)}: ${reason}`);
		}
	}
}

// Em-dash guard: locale string values must not contain thinking dashes (site
// owner dislikes them). Matches the literal — and its — escape. The JSDoc
// header comment line is allowed.
const EM_DASH = String.fromCharCode(0x2014);
const EM_DASH_ESC = String.fromCharCode(92) + 'u2014';
for (const file of localeFiles) {
	const lines = readFileSync(file, 'utf8').split(/\r?\n/);
	lines.forEach((line, index) => {
		const trimmed = line.trimStart();
		if (trimmed.startsWith('*') || trimmed.startsWith('//') || trimmed.startsWith('/*')) return;
		if (line.includes(EM_DASH) || line.includes(EM_DASH_ESC)) {
			violations.push(`${relative(ROOT, file)}:${index + 1}: em dash in copy (use a colon, comma, or period)`);
		}
	});
}

if (violations.length > 0) {
	console.error(`check-stats: found ${violations.length} stale stat(s):\n`);
	for (const violation of violations) {
		console.error(`  ${violation}`);
	}
	console.error('\nFix the copy above. Canonical values live in src/i18n/stats.ts.');
	process.exit(1);
}

console.log(`check-stats: OK, ${targets.length} files scanned, no stale stats found.`);
