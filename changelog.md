# Changelog

All notable changes to the EDDI website will be documented in this file.

## [Unreleased]

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
