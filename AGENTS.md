# EDDI Website — AI Agent Instructions

> **This file is automatically loaded by AI coding assistants. Follow ALL rules below.**

## 1. Project Context

**eddi-website** is the marketing site for EDDI, hosted on **Vercel** at `eddi.technology`. Built with **Astro** and **Tailwind CSS v4**.

### Architecture

| Aspect        | Details                                                       |
| ------------- | ------------------------------------------------------------- |
| **Framework** | Astro (static site generation)                                |
| **Styling**   | Tailwind CSS v4 (built via `@tailwindcss/vite`)               |
| **i18n**      | Root-English routing (`/` for en, `/{locale}/` for 10 others) |
| **RTL**       | Arabic support with `dir="rtl"` and logical CSS properties    |
| **Theme**     | Dark/Light toggle via `[data-theme]` attribute                |
| **Docs**      | Published separately at docs.labs.ai                          |
| **Hosting**   | Vercel (static, via git integration)                          |
| **Domain**    | `eddi.technology` (Vercel custom domain, DNS at easyname)        |

### Ecosystem

- Standalone site, no runtime dependency on other repos
- All repos at `c:\dev\git\`. Planning docs in Antigravity brain dir — search for `implementation_plan.md` (Appendix L covers website)

---

## 2. Mandatory Workflow Protocol

1. **Before work**: Find and read `changelog.md` + `implementation_plan.md`. Check `git status`.
2. **During work**: Commit often with `feat(website):`, `fix(website):`. Each commit must build.
3. **After work**: Update `changelog.md` with changes, decisions, next steps.

---

## 3. Key Files

| File               | Purpose                                         |
| ------------------ | ----------------------------------------------- |
| `astro.config.mjs` | Astro configuration (i18n, sitemap, vite)       |
| `src/i18n/`        | i18n core (locale definitions, translations)    |
| `src/pages/`       | All page routes (root + `[lang]/` for i18n)     |
| `src/components/`  | Layout and UI components                        |
| `vercel.json`      | Security headers (CSP, HSTS, etc.) — OpenSSF Gold |
| `public/_headers`  | Security headers (Cloudflare/Netlify fallback)    |
| `CNAME`            | GitHub Pages domain (legacy, remove after migration) |

### DO NOT

- Do NOT weaken or remove security headers in `vercel.json` or `public/_headers` — required for OpenSSF Gold badge
- Do NOT change the domain without coordination
- Do NOT embed docs content — link to docs.labs.ai instead

---

## 4. Handoff Protocol

Same as EDDI backend — see EDDI/AGENTS.md Section 5.
