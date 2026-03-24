# Changelog

All notable changes to the EDDI website will be documented in this file.

## [Unreleased]

- `feat(website)`: **Light/Dark Mode Optimization** — Added comprehensive light mode support via CSS-level overrides in `global.css`, remapping all hardcoded dark-mode Tailwind classes (`text-white`, `bg-gray-900/*`, `border-gray-700/*`, etc.) to appropriate light-mode equivalents. Covers all 20+ MDX content pages without individual file edits.
- `feat(website)`: **Gold/Amber Logo Rebrand** — Updated both SVG logo variants (`eddi-logo-dark.svg`, `eddi-logo-light.svg`) from blue to gold/amber brand identity. Footer now uses actual logo image with automatic light/dark switching instead of text.
- `fix(website)`: **Navigation Sizing** — Reduced header logo from 2.5rem to 1.8rem. Increased nav link font-size from 0.8125rem to 0.9375rem for better readability.
- `feat(website)`: **Header & Footer Light Mode** — Added full light mode style overrides for header (nav links, dropdowns, mobile menu) and footer (background, text, social icons, links, trust items).
- `fix(website)`: **Docs/Website Navigation Separation** — Removed Features (9 pages) and Enterprise (3 pages) from the Starlight docs sidebar to eliminate confusing cross-linking between marketing pages and documentation. Marketing pages are accessed via the Header nav only. Moved `docs/use-cases` from Enterprise to Resources sidebar group where it belongs.
- `fix(website)`: **Quickstart Page Rendering** — Rewrote quickstart page without `<Steps>` component (was causing blank render). Now uses plain headings with code blocks.
- `fix(website)`: **Hero CTA Button Visibility** — Added gold gradient background, border, and glow effects to `.hero-btn-primary` in `Hero.astro`. Button was previously invisible (white text on dark bg).
- `feat(website)`: **Prev/Next Pagination Glassmorphism** — Styled Starlight's `.pagination-links` with semi-transparent background, blur, rounded corners, and accent hover border.
- `feat(website)`: **FAQ Section Wider** — Changed FAQ container from `max-w-3xl` to `max-w-5xl` on 4 pages (landing, why-eddi, code-quality, ai-ready).
- `fix(website)`: **Edit Page Link Spacing** — Reduced excessive vertical whitespace around the "Edit page" link on docs pages.
- `fix(website)`: **Inline Code Pill Styling** — Added subtle background, border, and border-radius to inline `<code>` elements for polished tool name display.
- `fix(website)`: **Getting Started Casing** — Fixed "Create Your first agent" → "Create Your First Agent" for consistent Title Case.

- `feat(website)`: **Hero Images for All Pages** — Generated and added custom hero images to all 12 feature and enterprise pages. Each image matches the page's theme (security shield, neural pathways, comparison arena, etc.) with amber/gold tones on dark backgrounds.
- `fix(website)`: **Full-Width Hero Gradient** — Fixed the hero gradient background to span the full viewport width using `100vw` + `translateX(-50%)` technique, preventing clipping by parent containers.
- `feat(website)`: **Docs Pages Glassmorphism** — Converted 6 remaining docs pages (`mcp/overview`, `use-cases`, `integrations`, `roadmap`, `install-wizard`, `architecture/seven-pillars`) from default Starlight `<Card>` components to custom glassmorphism HTML cards with SVG icons, watermark backgrounds, and accent hover borders.
- `feat(website)`: **Page Consistency Overhaul** — Converted all 12 feature and enterprise pages to match the landing page's premium glassmorphism design:
  - **Feature Pages (9):** `overview`, `config-as-code`, `security`, `mcp-server`, `observability`, `performance`, `multi-agent`, `code-quality`, `ai-ready`
  - **Enterprise Pages (3):** `why-eddi`, `vs-alternatives` (converted `.md` → `.mdx`), `compliance`
  - All pages now use: custom HTML cards with glassmorphism, inline SVG icons with glowing containers, watermark background icons, accent hover borders, section dividers (`border-t border-gray-800/60`), and consistent `py-24` spacing.
  - Replaced all Starlight default `<Card>` components and emojis with inline HTML cards.
  - Added styled comparison tables on enterprise pages.
  - Added FAQ sections with `<details>` elements on several pages.
- `feat(website)`: Updated global color palette from Electric Cyan/Violet to Gold/Amber to match the EDDI Manager's branding.
- `fix(website)`: Removed branded site-wide footer from docs pages to avoid Starlight's `<a>` tag stripping issue. Homepage and other pages retain the full footer.

### Added
- Created a custom `Hero.astro` component with animated background gradients, dynamic text clipping, and floating elements.
- Integrated modern Google Fonts (**Outfit** for UI sans-serif, **JetBrains Mono** for monospace).
- Implemented a complete **glassmorphism** design system in `global.css` affecting all `.card`, `.sl-link-card`, and `<details>` elements (using `backdrop-blur`, semi-transparent backgrounds, and hover elevation).
- Added a custom geographic pride message to `Footer.astro`: *"Initiated in Vienna. Developed with ❤️ in Europe. Made for the World."*
- **[Phase 2]** Replaced the default mascot with a custom abstract 3D visual for the hero section.
- **[Phase 2]** Redesigned the "The Problem" section using elevated glassmorphism feature rows instead of basic Starlight `<CardGrid>`s.
- **[Phase 2]** Implemented a high-end **Bento Grid** layout for "The Solution" section, introducing numbered hierarchies and dramatic `py-24` vertical spacing across the homepage.
- **[Phase 3]** Added top spacing below the Starlight navigation menu for the Hero section to breathe.
- **[Phase 3]** Framed the Hero abstract visual in a stunning glassmorphism container and disabled floating animations.
- **[Phase 3]** Normalized "The Solution" Bento Grid layout into a uniform `md:grid-cols-2 lg:grid-cols-3` layout.
- **[Phase 3]** Changed Starlight's default navigation header background to deep black via `--sl-color-bg-nav`.
- `feat(website)`: Phase 4 Visual Enhancements
  - **The Problem:** Replaced basic emojis with premium glowing Lucide SVGs inside glassmorphism containers.
  - **The Solution:** Upgraded plain text numbers (`01-06`) to standalone glowing pill badges.
  - **Trusted & Certified:** Redesigned trust badges from custom CSS into sleek Tailwind glass panels with Lucide icons.
  - **Proven Technology:** Eliminated all emojis in favor of monochromatic, hover-responsive Lucide line-art icons.
- `fix(website)`: Top menu dropdown spacing increased.
- `feat(website)`: Hero image framed in a sleek glassmorphism container and paused the distracting animation.
- `feat(website)`: Top menu background permanently darkened to black by overriding Starlight `--sl-color-bg-nav`.
- `fix(website)`: Normalized Bento grid columns in "The Solution" section to render a uniform 3x2 symmetrical grid.
- `feat(website)`: Replaced abstract hero image with high-tech orchestrator visual (`abstract_orchestrator.png`).
- `feat(website)`: Redesigned "The Problem" section to use 3 modern dark-glass Tailwind cards, replacing Starlight defaults.
- `feat(website)`: Rebuilt "The Solution" section into a responsive Bento grid design with translucent cards and gradient flares.
- `feat(website)`: Dropped the "Houston" mascot from the homepage to elevate the brand's enterprise tone.
- `feat(website)`: Added new foundational global CSS variables for `accent-500`, `gray-800`, and `gray-900` to support Tailwind.

### Changed
- Refactored `global.css` CSS variables to use a premium, high-contrast neon palette (Electric Cyan & Deep Violet) for dark mode.
- Updated `index.mdx` splash configuration to use the new dynamic hero styling and premium variant buttons.
- Overrode Starlight's default hero behavior by registering the custom component in `astro.config.mjs`.

### Decisions
- We chose to heavily style Starlight's global classes and build a custom Hero, rather than abandoning Starlight, to keep the deep compatibility with Astro Content Collections and Markdown/MDX built-ins.

### Next Steps
- Further refine internal documentation pages (`/docs/*`) to ensure the glassmorphism aesthetic translates well to dense text pages.
- Integrate search components with the new visual aesthetic.
