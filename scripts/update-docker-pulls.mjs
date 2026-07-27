#!/usr/bin/env node
/**
 * update-docker-pulls.mjs: keep the Docker Hub pull count current.
 *
 * Runs at BUILD time (see "prebuild" in package.json), not in the visitor's
 * browser. That is deliberate: embedding the live shields.io badge would send
 * every visitor's IP to a third party on each page view, which is exactly the
 * tracking we removed for GDPR. Fetching here means the number refreshes on
 * every deploy while the page stays free of third-party requests.
 *
 * Rewrites two things from the Docker Hub public API:
 *   1. public/badges/docker-pulls.svg  (the self-hosted badge image)
 *   2. DOCKER_PULLS in src/i18n/stats.ts (the "395K+" stat on the Trust page)
 *
 * Network failures are non-fatal: the committed values stay as they are, so an
 * offline or rate-limited build still succeeds with the last known-good number.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import process from 'node:process';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const API = 'https://hub.docker.com/v2/repositories/labsai/eddi/';
const SVG_PATH = new URL('../public/badges/docker-pulls.svg', import.meta.url);
const STATS_PATH = new URL('../src/i18n/stats.ts', import.meta.url);

/** Docker-Hub-style short form: 395563 -> "395k", 1250000 -> "1.2M". Floors, never overstates. */
function short(n) {
	if (n >= 1_000_000) return `${Math.floor(n / 100_000) / 10}M`;
	if (n >= 1_000) return `${Math.floor(n / 1_000)}k`;
	return String(n);
}

/** Flat shields-style badge, matching the other self-hosted badges in public/badges/. */
function badge(value) {
	const labelW = 77;
	const valueW = Math.round(value.length * 6.7) + 10;
	const total = labelW + valueW;
	const valueCenter = (labelW + total) * 5; // scale(.1) => x10, centre of the value box
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${total}" height="20" role="img" aria-label="docker pulls: ${value}"><title>docker pulls: ${value}</title><g shape-rendering="crispEdges"><rect width="${labelW}" height="20" fill="#27272a"/><rect x="${labelW}" width="${valueW}" height="20" fill="#f59e0b"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text x="395" y="140" textLength="670" transform="scale(.1)">docker pulls</text><text x="${valueCenter}" y="140" textLength="${value.length * 67}" transform="scale(.1)">${value}</text></g></svg>`;
}

try {
	const res = await fetch(API, { signal: AbortSignal.timeout(10_000) });
	if (!res.ok) throw new Error(`Docker Hub returned ${res.status}`);

	const { pull_count: pulls } = await res.json();
	if (!Number.isFinite(pulls) || pulls <= 0) throw new Error(`unexpected pull_count: ${pulls}`);

	const value = short(pulls);
	writeFileSync(SVG_PATH, badge(value));

	// "395k" -> "395K+" for the prose stat.
	const stat = `${value.replace('k', 'K')}+`;
	const stats = readFileSync(STATS_PATH, 'utf8');
	const updated = stats.replace(/export const DOCKER_PULLS = '[^']*';/, `export const DOCKER_PULLS = '${stat}';`);
	if (updated === stats && !stats.includes(`'${stat}'`)) {
		throw new Error('could not locate DOCKER_PULLS in src/i18n/stats.ts');
	}
	writeFileSync(STATS_PATH, updated);

	console.log(`update-docker-pulls: ${pulls.toLocaleString('en-US')} pulls -> badge "${value}", DOCKER_PULLS "${stat}"`);
} catch (error) {
	console.warn(`update-docker-pulls: keeping committed values (${error.message})`);
	process.exitCode = 0; // never break the build over a badge refresh
}
