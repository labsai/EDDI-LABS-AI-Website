# Changelog

All notable changes to the EDDI website will be documented in this file.

## [Unreleased]

### ⚙️ CI/CD & Deployment
- `feat(website)`: **Astro Version** — Upgraded Astro to version 6.1.3 dependencies.

### 🌐 Internationalization & RTL
- `feat(website)`: **11-Locale Deployment** — Fully translated the entire EDDI marketing site into 11 languages (en, de, es, fr, pt, ar, zh, ja, ko, hi, th) with industry-standard SaaS terminology.
- `feat(website)`: **Hindi & Thai Full Translation** — Replaced English stub content in `hi.ts` and `th.ts` with complete native translations covering all schema keys (nav, common, footer, newsletter, home, gettingStarted, useCases, featuresOverview, and all 11 feature pages).
- `fix(website)`: **7-Locale Translation Regression Fix** — Detected and replaced English-stub locale files for ar, zh, ja, ko, hi, th, pt that were silently importing `en.ts` content, restoring full SEO/GEO indexability for all non-English markets.
- `fix(website)`: **French Locale Parse Error** — Fixed a Unicode curly apostrophe (`'`) in `fr.ts` line 58 that caused esbuild to fail with "Expected `}` but found `orchestration`".
- `feat(website)`: **Astro i18n Routing** — Implemented zero-prefix root for English (SEO preservation) and sub-directory routing for 10 non-English locales (e.g., `/de/`, `/ar/`).
- `feat(website)`: **Arabic RTL Native Support** — Audited and converted all physical CSS properties (left/right/margin/padding) to logical directives (inset-inline-start, margin-inline-start) throughout Tailwind v4 layouts, enabling native `dir="rtl"` structural flipping.
- `fix(website)`: **i18n Syntax Stability** — Resolved build pipeline crashes caused by corrupted array structures (`vsItems`) and missing paragraphs in Japanese, Chinese, Arabic, and Korean localization blocks.
- `feat(website)`: **SEO Localization Tags** — Injected precise `hreflang` headers and `og:locale:alternate` properties dynamically into the `<head>` through cross-locale routing maps.

### 🚀 Starlight → Regular Astro Migration
- `feat(website)`: **Complete Starlight Removal** — Migrated the entire website from the Starlight documentation framework to a standard Astro marketing site. Removed `@astrojs/starlight`.
- `feat(website)`: **Custom Layout System** — Created `BaseLayout.astro` and `FeaturePage.astro`.
- `feat(website)`: **Standalone Components** — Rewrote `Header.astro` and `Footer.astro` as fully standalone components.
- `feat(website)`: **Page Conversion (16 pages)** — Converted all pages from Starlight MDX to regular Astro pages.
- `feat(website)`: **Custom Design Token System** — Replaced all Starlight CSS variables with a custom system supporting dark/light mode via `[data-theme]` selectors.

### 🎨 UI Alignment & Asset Overhaul
- `feat(website)`: **Color System Synchronization** — Replaced legacy cyan tokens with Tailwind `zinc` and `amber` core semantics to match the EDDI Manager React application.
- `feat(website)`: **Concrete 3D Illustration System** — Exchanged 14 generic legacy abstract images with precise, feature-locked 3D renderings showcasing architectural value props.
- `feat(website)`: **Premium Image Enclosure** — Established a unified glassmorphism wrapper around imagery to broadcast enterprise quality.
- `feat(website)`: **Copy-To-Clipboard Tooling** — Injected a vanilla JS script into the foundational layout to parse `<code>` nodes with a stylized copy action.

### 🔧 Code Review Fixes
- `feat(website)`: **Sitemap Generation** — Installed `@astrojs/sitemap`. Auto-generating `sitemap-index.xml` with locale references.
- `feat(website)`: **Shared CSS Design System** — Extracted hero and button utilities to `global.css`.
- `fix(website)`: **Font Loading Cleanup** — Removed unused Inter font and fixed broken CSS variables.
- `feat(website)`: **Light/Dark Mode Optimization** — Added comprehensive light mode support via CSS-level overrides.

### ⚙️ CI/CD & Deployment
- `feat(website)`: **Automated GitHub Pages Deployment** — Configured an official Astro GitHub Actions workflow (`deploy.yml`) to automatically build and deploy the website via GitHub Pages artifacts upon pushing to `main`.

### Decisions
- Completed the full migration from Starlight to a custom Astro site to achieve full layout control.
- Established a root-English i18n strategy to preserve inbound SEO link juice while offering expanded global reach.
- Adopted GitHub Actions native artifact deployment (`actions/deploy-pages`) over the legacy `gh-pages` branch push.

### Next Steps
- Final review prior to official launch.

