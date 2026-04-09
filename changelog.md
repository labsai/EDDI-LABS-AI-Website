# Changelog

All notable changes to the EDDI website will be documented in this file.

## [Unreleased]

### 📋 Global Compliance Hub
- `feat(website)`: **15+ Regulatory Frameworks** — Expanded the EU AI Act compliance page into a comprehensive Global Privacy & Regulatory Compliance hub covering GDPR, CCPA/CPRA, PIPEDA (Canada), LGPD (Brazil), APPI (Japan), POPIA (South Africa), PDPA (Singapore/Thailand), HIPAA, SOC 2, NIST AI RMF, ISO 42001, UK GDPR, PIPA (South Korea), DPDPA (India), and Australian Privacy Act.
- `feat(website)`: **Compliance-by-Architecture Positioning** — Mapped EDDI's technical platform capabilities (cascade erasure via `DELETE /admin/gdpr/{userId}`, data export, processing restriction, HMAC-SHA256 audit trails, OIDC/Keycloak RBAC) to specific regulatory articles across all 15+ frameworks.
- `feat(website)`: **Compliance Page Visual Redesign** — Replaced wall-of-text compliance page with a card-based grid layout matching the homepage design system: SVG icons in amber-glowing containers, watermark SVGs in card corners, ambient blur glow effects, `border-t border-zinc-800/60` section dividers, and Tailwind utility classes (`rounded-3xl bg-zinc-900/40 backdrop-blur`).
- `feat(website)`: **Compliance Schema Expansion** — Updated the `compliance` object structure across all 11 locale files to support AI governance frameworks, data privacy regulations, industry-specific compliance, and unified API sections.

### 🎯 Positioning Overhaul: Java-Centric → Outcome-Centric
- `feat(website)`: **Strategic Reframe** — Shifted the entire site identity from "Java-native AI middleware" to "self-hosted enterprise AI orchestration platform". Java/Quarkus/JVM demoted from headline identity to supporting "Proven Technology" credibility signals.
- `feat(website)`: **11-Locale Propagation** — Applied the positioning reframe across all 11 locale files (en, de, es, fr, pt, ar, zh, ja, ko, hi, th) with ~200 total string replacements.
- Key messaging changes: "Java-native" → "Self-hosted", "No compiled Java" → "No compiled code", "No recompilation" → "No redeployment", "Enterprise Java teams" → "Enterprise teams", "vs. Spring AI / LangChain4j" → "vs. AI Libraries".
- Performance deep-dive page intentionally retains Java 25/Quarkus/Virtual Threads as the core technical message.

### 📐 Locale Format Harmonization
- `refactor(website)`: **Format Harmonization** — Reformatted all 10 non-English locale files to match `en.ts` multi-line structure. Previously `hi.ts` (16,005 chars/line), `ko.ts` (9,810 chars/line), and `th.ts` (15,163 chars/line) had entire sections crammed onto single lines, making diffs and code review impossible.
- All locale files now use one-key-per-line formatting with consistent indentation. Max line length reduced from ~16K to under 580 chars across all files.

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
- `fix(website)`: **Newsletter Dark Mode Contrast** — Fixed HubSpot newsletter form labels and consent text being unreadable in dark mode. The form renders inside a cross-origin iframe, so parent-page CSS cannot reach it. Solved by injecting theme-aware CSS via HubSpot's `css` parameter at form creation time, and re-creating the form on theme toggle to apply updated styles.
- `fix(website)`: **Checkstyle 0 Warnings** — Updated all 11 locale files to reflect the achievement of 0 Checkstyle warnings (previously "reduced from 697 to 81") across the features overview card, code quality page description, and code quality page items list.
- `feat(website)`: **Graphical Logo Replacement** — Replaced text-based "EDDI" SVG logos (styled `<text>` elements) in the Header and Footer with the actual EDDI graphical logo. Created a white variant for dark mode and a dark (#0f172a) variant for light mode, both theme-switching automatically.
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

