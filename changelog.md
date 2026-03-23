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

### Changed
- Refactored `global.css` CSS variables to use a premium, high-contrast neon palette (Electric Cyan & Deep Violet) for dark mode.
- Updated `index.mdx` splash configuration to use the new dynamic hero styling and premium variant buttons.
- Overrode Starlight's default hero behavior by registering the custom component in `astro.config.mjs`.

### Decisions
- We chose to heavily style Starlight's global classes and build a custom Hero, rather than abandoning Starlight, to keep the deep compatibility with Astro Content Collections and Markdown/MDX built-ins.

### Next Steps
- Further refine internal documentation pages (`/docs/*`) to ensure the glassmorphism aesthetic translates well to dense text pages.
- Integrate search components with the new visual aesthetic.
