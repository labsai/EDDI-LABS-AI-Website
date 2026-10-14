/**
 * Progressive-enhancement tabs (WAI-ARIA tabs pattern): roving tabindex, arrow /
 * Home / End navigation, one visible panel. Markup contract: a [role=tablist]
 * containing [role=tab][aria-controls], panels with the matching ids. Panels other
 * than the first start with the `hidden` attribute, so everything reads without JS.
 * Idempotent per root, safe with Astro's ClientRouter (call it on astro:page-load).
 */
export function initTabs(root: HTMLElement): void {
	if (root.dataset.tabsBound === '1') return;
	root.dataset.tabsBound = '1';
	const tabs = Array.from(root.querySelectorAll<HTMLElement>('[role="tab"]'));
	if (!tabs.length) return;

	const activate = (tab: HTMLElement, focus: boolean) => {
		tabs.forEach((t) => {
			const on = t === tab;
			t.setAttribute('aria-selected', String(on));
			t.tabIndex = on ? 0 : -1;
			const panel = document.getElementById(t.getAttribute('aria-controls') ?? '');
			if (panel) panel.hidden = !on;
		});
		if (focus) tab.focus();
	};

	tabs.forEach((tab, i) => {
		tab.addEventListener('click', () => activate(tab, false));
		tab.addEventListener('keydown', (e) => {
			let next = -1;
			const rtl = getComputedStyle(root).direction === 'rtl';
			if (e.key === 'ArrowRight') next = (i + (rtl ? -1 : 1) + tabs.length) % tabs.length;
			else if (e.key === 'ArrowLeft') next = (i + (rtl ? 1 : -1) + tabs.length) % tabs.length;
			else if (e.key === 'Home') next = 0;
			else if (e.key === 'End') next = tabs.length - 1;
			if (next >= 0) {
				e.preventDefault();
				activate(tabs[next], true);
			}
		});
	});
}
