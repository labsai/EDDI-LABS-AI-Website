import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', 'src', 'i18n', 'locales');

// For single-line minified files, we match from `compliance: {` to the next `},\n`
const locales = ['ko', 'ar', 'hi', 'th'];

for (const locale of locales) {
	const filePath = join(ROOT, locale + '.ts');
	let content = readFileSync(filePath, 'utf-8');
	
	// Find compliance block start
	const startMatch = content.match(/\tcompliance:\s*\{/);
	if (!startMatch) { console.error(locale + ': compliance not found'); continue; }
	const startIdx = startMatch.index;
	
	// For single-line files, the compliance block ends with `},\n`
	// We need to find the FIRST `},\n` after `compliance: {`
	const afterStart = content.slice(startIdx);
	
	// The compliance object is on one line, ending with `},` followed by newline
	const closingMatch = afterStart.match(/\},\n/);
	if (!closingMatch) { console.error(locale + ': closing not found'); continue; }
	const endIdx = startIdx + closingMatch.index + closingMatch[0].length - 1; // -1 to keep the \n
	
	console.log(locale + ': found compliance block at chars ' + startIdx + '-' + endIdx + ' (' + (endIdx - startIdx) + ' chars)');
	
	// Just mark it - we'll write the translations next
	const oldBlock = content.slice(startIdx, endIdx);
	console.log(locale + ': starts with: ' + oldBlock.slice(0, 60) + '...');
	console.log(locale + ': ends with: ...' + oldBlock.slice(-60));
}
