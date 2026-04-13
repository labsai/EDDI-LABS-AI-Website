# Changelog

All notable changes to the EDDI website will be documented in this file.

## [Unreleased]
### 🐛 Bug Fixes
- `fix(website)`: **setup_agent Missing apiKey** — The `setup_agent()` code snippet on the Getting Started page was missing the required `apiKey` parameter and used `modelId` instead of `model`. Fixed to match the actual `McpSetupTools.java` signature.

### ♿ Lighthouse Accessibility & Best Practices (Score: 85 → Target 100)
- `fix(website)`: **aria-hidden Focusable Descendants** — Mobile menu (`#eddi-mobile-menu`) had `aria-hidden="true"` but contained interactive `<a>` and `<button>` elements. Added `tabindex="-1"` toggle on all focusable descendants when the menu is closed/opened.
- `fix(website)`: **Color Contrast WCAG AA** — Bumped `--color-text-subtle` from `#8a8a92` (~3.7:1) to `#9e9ea7` (~4.6:1 on `#09090b`). Upgraded `text-zinc-500` to `text-zinc-400` for tech stack descriptions on homepage.
- `fix(website)`: **Touch Target Sizing** — Increased footer navigation link padding from `0.2rem` to `0.375rem`. Increased mobile menu link padding to `0.625rem` with `min-height: 2.75rem` (~44px) to meet the 48px tap target recommendation.
- `fix(website)`: **Image Dimensions for CLS** — Added explicit `width` and `height` attributes to all external badge images (shields.io, GitHub Actions) in `HomeContent.astro` and `TrustContent.astro` to eliminate Cumulative Layout Shift warnings.
- `fix(website)`: **French Locale Parse Error** — Fixed curly right single quote (`'`) in `fr.ts` `timelineTitle` that broke the JavaScript string literal, causing build failures.

### 🎨 UI Enhancements
- `feat(website)`: **Getting Started Hero Image** — Added a 3D isometric hero image to the Getting Started page, matching the dark-charcoal-and-gold visual style used across all other feature and enterprise pages. Updated hero section from centered text-only layout to side-by-side text + image layout (matching FeaturePage layout).

### 🔐 Security Documentation
- `feat(website)`: **Secure API Key Storage Step** — Added new Step 3 "Store Your API Key" to Getting Started guide, teaching users to store keys in the Secrets Vault (REST API or Manager UI) before referencing them via `${vault:...}` syntax. Steps renumbered 3→6.
- `feat(website)`: **MCP/REST Dual Tabs** — Steps 4 (Create Agent) and 5 (Chat) now show both MCP tool calls and REST API (curl) equivalents in switchable tabs, enabling developers who don't use MCP clients to follow along.
- `feat(website)`: **Generic Tab Script** — Refactored the tab switching script to be generic (`querySelectorAll('.gs-tabs')`) instead of hardcoded to `#install-tabs`, enabling reuse across vault, agent, and chat tab sets.

### 🔧 Version Management
- `feat(website)`: **Centralized Version String** — Created `src/i18n/version.ts` as single source of truth for `EDDI_VERSION`. Replaced ~35 hardcoded `v6.0.0-RC1` references across all 11 locale files and `BaseLayout.astro` JSON-LD schemas with template literal interpolation. Version now updated in one place.

### 📈 Social Proof
- `feat(website)`: **Docker Pulls Badge** — Added live Docker Hub pulls badge (from shields.io) to the homepage "Trusted & Certified" section. Card links to `hub.docker.com/r/labsai/eddi`.
- `feat(website)`: **CI & CodeQL Badges** — Added GitHub Actions CI and CodeQL status badges as social proof. Card links to GitHub Actions workflow.
- `feat(website)`: **Trust Section i18n** — Added `trustDocker`, `trustDockerDesc`, `trustCI`, `trustCIDesc` translation keys to all 11 locales.
- `feat(website)`: **Track Record Page** — New `/enterprise/trust/` page showcasing EDDI's 18-year evolution, institutional validation (FFG, EU/ELG, EDUBOTS, weXelerate, inits.at, Red Hat), Gnowbe enterprise deployment, and community trust signals (OpenSSF, Codacy, Docker Hub, CI, CodeQL badges). Features a compact vertical timeline, glassmorphism institution cards, live badge row, and developer trust signal grid. Added `pages.trust` translation block to all 11 locales with English placeholder content. Updated Header (desktop + mobile) and Footer navigation with Track Record link.

### 🐛 Bug Fixes
- `fix(website)`: **French Locale String** — Fixed broken `siteDescription` in `fr.ts` where escaped apostrophes (`d\'`) collided with backtick conversion during version migration, producing invalid template literal syntax.
- `fix(website)`: **Getting Started Install Instructions** — Replaced misleading bare `docker run` command with the correct one-command installer (with OS-specific tabs for Linux/macOS/WSL and Windows PowerShell) and Docker Compose as an alternative. Added tabbed UI with `step1TabInstaller`, `step1TabCompose`, `step1ComposeDesc` keys across all 11 locales.
- `fix(website)`: **Mobile Layout Overflows** — Fixed a severe horizontal viewport shift caused by missing `box-sizing: border-box` CSS resets from Tailwind Preflight in Astro. Re-enabled `border-box` globally. Stacked hero action buttons vertically on mobile for optimal touchscreen formatting.
- `fix(website)`: **Trust Page Hero Spacing** — Fixed `TrustContent.astro` hero using hardcoded `10rem`/`8rem` padding instead of `calc(var(--total-header-height) + ...)`, causing the hero to overlap/gap incorrectly when the announcement banner is present. All pages now consistently use the dynamic `--total-header-height` variable.
- `fix(website)`: **Banner Dismiss Persistence Across SPA** — Banner dismiss state (localStorage) was not re-checked during ClientRouter SPA navigations. Added an `astro:page-load` guard that re-hides the banner and recalculates header height when navigating between pages after dismissal.
- `fix(website)`: **Banner RTL Optimization** — Converted physical CSS properties (`padding-right`, `right`) to logical equivalents (`padding-inline-end`, `inset-inline-end`) and added `scaleX(-1)` transform on the arrow icon for `dir="rtl"` so Arabic users see correct layout and directionality.
- `fix(website)`: **Mobile/Tablet Hero Spacing** — Fixed hero titles being hidden behind the fixed header + announcement banner on mobile and tablet viewports. Root cause: the global responsive rule `section:not(.hero-section) { padding-top: 3rem !important }` was overriding the calculated `padding-top` on all non-homepage hero sections (gs-hero, fp-hero, fo-hero, trust-hero, cp-hero, uc-hero). Updated selector to exclude all hero-pattern classes. Also bumped `--banner-height` default to 2.5rem with a 3.5rem mobile fallback for banner text wrapping.
- `fix(website)`: **Mobile CTA Button Layout** — Fixed CTA buttons (Get Started / View on GitHub) appearing cramped and side-by-side on mobile viewports across all pages. Buttons now stack vertically, stretch to full container width (max 20rem), and center-align text. Applied consistently to global `.btn-cta-primary`/`.btn-cta-outline`, homepage hero, FeaturePage layout, FeaturesOverviewContent, ComplianceContent hero and closing CTA sections.
- `fix(website)`: **Image Sharpness / Quality** — Fixed blurry hero images across all pages. Source images are 1024×1024 but Astro's `<Image>` component was downscaling them to 480×480 / 500×500 with default mid-quality webp compression. Updated all `<Image>` usages (FeaturePage, HomeContent, FeaturesOverviewContent, ComplianceContent, GettingStartedContent) to render at full 1024×1024 source resolution. Added `object-fit: contain` as a safety net. Switched to `passthroughImageService()` so Astro serves the pre-optimized WebP assets byte-for-byte without re-encoding (previously `quality="max"` was tripling file sizes: e.g. 76kB → 205kB). Fixed FeaturesOverviewContent missing the `premium-image-wrapper` class for visual consistency.
### 🔧 PR Code Review Fixes (Copilot)
- `fix(website)`: **Duplicate English Route** — Fixed `[lang]/contact.astro` using `LOCALE_CODES` instead of `NON_DEFAULT_LOCALES`, which generated a duplicate `/en/contact/` page alongside the root `/contact/`.
- `fix(website)`: **Language Picker Locale Detection** — Added `data-locale` attribute to language dropdown items. Previously the JS derived the locale from the URL path, which failed for English root paths (e.g., `/features/overview/` would store `features` as the locale code).
- `fix(website)`: **Language Picker Accessibility** — Added click/keyboard toggle for `aria-expanded` on the language picker button, plus Escape-to-close and outside-click-to-close handlers. Previously `aria-expanded` was hardcoded to `false` despite CSS hover controlling visibility.
- `fix(website)`: **Language Picker Listener Leak** — Moved document-level click and keydown listeners behind a module-level guard to prevent handler accumulation on ClientRouter `astro:after-swap` events.
- `fix(website)`: **Copy Button Idempotency** — Added guard to skip `<pre>` elements already inside `.eddi-pre-wrapper`, preventing duplicate buttons and nested wrappers during client-side navigations.
- `fix(website)`: **Footer SVG Accessibility** — Added `aria-hidden="true"` to all 4 decorative SVGs in the trust bar so screen readers skip them.
- `fix(website)`: **robots.txt SEO** — Removed `Disallow: /_astro/` rule that was blocking crawlers from fetching hashed CSS/JS assets needed for rendering-based indexing.
- `fix(website)`: **ESM Path Resolution** — Replaced non-standard `import.meta.dirname` with `dirname(fileURLToPath(import.meta.url))` across all 11 translation scripts for reliable Node.js execution.
- `docs(website)`: **AGENTS.md Refresh** — Updated project context from "migrating to Astro" to current architecture (Astro + Tailwind CSS v4, root-English i18n routing). Updated key files table to reflect current project structure.
- `fix(website)`: **Vite Override Pin** — Pinned `overrides.vite` from `^7` to exact `7.3.2` to prevent unexpected breakage on lockfile regeneration.

### 📈 Content Updates
- `feat(website)`: **Test Count Milestone** — Updated all test count references from 1,700+ to 2,000+ across all 11 locale files (en, de, es, fr, pt, ar, zh, ja, ko, hi, th). Affected strings: `codeQualityDesc`, `footer.tests`, `home.trustTests`, `featuresOverview.cqCardDesc`, `pages.codeQuality.description`, and `pages.codeQuality.items`. 6 strings × 11 locales = 66 string replacements.

### 📊 Analytics & Cookie Consent
- `feat(website)`: **Cookie Consent Banner** — Ported the cookie consent system from the original `index.html` into a standalone `CookieConsent.astro` component. Features Accept All / Manage Cookies flow, settings modal with Necessary / Analytics / Marketing toggles, focus trap for keyboard accessibility, Escape to close, and localStorage-persisted consent.
- `feat(website)`: **Google Analytics (GA4)** — Consent-gated GA4 integration (`G-L1011GL1PY`). Only loads the gtag script after the user explicitly consents to analytics cookies.
- `feat(website)`: **Umami Analytics** — Added Umami cloud tracking (`cloud.umami.is`) as a cookieless, GDPR-safe analytics layer. Loads unconditionally — no consent banner required.
- Design follows the EDDI design-system tokens (dark/light theme-aware), includes slide-up and scale-in animations.

### 🏛️ FOSS Compliance (OpenSSF Badge Readiness)
- `feat(website)`: **Community Footer Column** — Added a 5th footer column ("Community") linking to Contributing guide, Bug Report template, Security Policy, Code of Conduct, and Discussions — all pointing to the EDDI repo. Propagated native translations across all 11 locales. Footer grid updated to 5-column layout.
- `feat(website)`: **Apache 2.0 LICENSE** — Added LICENSE file to the website repository (previously only in the main EDDI repo).
- `fix(website)`: **README Modernization** — Rewrote README.md to reflect current Astro architecture (removed stale Starlight references, updated project structure and tech stack).

### 🔍 Website Audit & Hardening
- `fix(website)`: **JSON-LD Positioning Fix** — Updated `WebSite` and `SoftwareApplication` JSON-LD schema descriptions from stale "Java-native AI middleware" to "self-hosted enterprise AI orchestration platform" to match the documented positioning reframe.
- `feat(website)`: **Page Deduplication** — Extracted 5 shared content components (`HomeContent`, `GettingStartedContent`, `UseCasesContent`, `FeaturesOverviewContent`, `ComplianceContent`) to eliminate ~3,680 lines of duplication between root and `[lang]/` page files. All page files are now thin wrappers (~5-12 lines) that delegate to shared components.
- `fix(website)`: **Features Overview Content Drift** — Fixed bug where `[lang]/features/overview.astro` was missing the entire "AI Capabilities" section (Memory, RAG, Model Cascading, Scheduling) that existed in the root English version.
- `fix(website)`: **WCAG AA Text Contrast** — Raised `--color-text-subtle` from `#686870` (~3.5:1 contrast) to `#8a8a92` (~5:1 contrast) for WCAG AA compliance.
- `fix(website)`: **RTL Class Normalization** — Standardized `inset-e-2` to `end-2` across all templates for consistent RTL support.
- `chore(website)`: **Legacy File Cleanup** — Deleted pre-migration artifacts: `index.html` (62KB), `privacy.html` (30KB), `404.html` (62KB) from repo root.
- `feat(website)`: **PR Build Validation** — Added `.github/workflows/ci.yml` to run `npm run build` on pull requests, catching build failures before merge.
- `fix(website)`: **Emoji Accessibility** — Added `aria-hidden="true"` to decorative emoji icons in use cases cards.

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
- `fix(website)`: **Hero Image Style Consistency** — Regenerated 4 hero images (`hero_memory`, `hero_model_cascading`, `hero_rag`, `hero_scheduling`) that used mismatched color schemes (purple/blue, green, teal, orange/purple) and flat 2D illustration styles. Replaced with dark charcoal background, gold/amber accent, isometric 3D, glassmorphism renders matching the established site aesthetic. Both `.png` and `.webp` variants updated.
- `fix(website)`: **Newsletter Dark Mode Contrast** — Fixed HubSpot newsletter form labels and consent text being unreadable in dark mode. The form renders inside a cross-origin iframe, so parent-page CSS cannot reach it. Solved by injecting theme-aware CSS via HubSpot's `css` parameter at form creation time, and re-creating the form on theme toggle to apply updated styles.
- `fix(website)`: **Checkstyle Copy Reframe** — Removed all "reduced from 697 to 0" historical messaging from all 11 locale files. Replaced with present-state framing ("zero warnings, strict rules enforced on every build"). Marketing copy should describe what IS, not what WAS.
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

