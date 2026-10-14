/**
 * Tiny build-time JSON highlighter: no library, no client JS.
 * Returns HTML with <span class="tok-*"> wrappers; the styles live in
 * src/components/JsonBlock.astro. Input is escaped first, so the output is
 * safe to inject with set:html.
 */
function esc(s: string): string {
	return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

const TOKEN = /("(?:\\.|[^"\\])*")(\s*:)?|\b(true|false|null)\b|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)|([{}[\],])/g;

export function highlightJson(code: string): string {
	let out = '';
	let last = 0;
	for (const m of code.matchAll(TOKEN)) {
		const i = m.index ?? 0;
		out += esc(code.slice(last, i));
		if (m[1] !== undefined) {
			if (m[2] !== undefined) out += `<span class="tok-key">${esc(m[1])}</span>${esc(m[2])}`;
			else out += `<span class="tok-str">${esc(m[1])}</span>`;
		} else if (m[3] !== undefined) out += `<span class="tok-kw">${m[3]}</span>`;
		else if (m[4] !== undefined) out += `<span class="tok-num">${m[4]}</span>`;
		else out += `<span class="tok-pun">${m[5]}</span>`;
		last = i + m[0].length;
	}
	return out + esc(code.slice(last));
}

export function toJson(value: unknown): string {
	return JSON.stringify(value, null, 2);
}
