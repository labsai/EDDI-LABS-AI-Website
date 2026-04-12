# EDDI Website — AI Agent Instructions

> **This file is automatically loaded by AI coding assistants. Follow ALL rules below.**

## 1. Project Context

**eddi-website** is the marketing site for EDDI, hosted on **GitHub Pages** at `eddi.labs.ai`. Built with **Astro** and **Tailwind CSS v4**.

### Architecture

| Aspect        | Details                                                       |
| ------------- | ------------------------------------------------------------- |
| **Framework** | Astro (static site generation)                                |
| **Styling**   | Tailwind CSS v4 (built via `@tailwindcss/vite`)               |
| **i18n**      | Root-English routing (`/` for en, `/{locale}/` for 10 others) |
| **RTL**       | Arabic support with `dir="rtl"` and logical CSS properties    |
| **Theme**     | Dark/Light toggle via `[data-theme]` attribute                |
| **Docs**      | Published separately at docs.labs.ai                          |
| **Hosting**   | GitHub Pages via GitHub Actions                               |
| **Domain**    | `eddi.labs.ai` (CNAME file)                                   |

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
| `CNAME`            | GitHub Pages domain: `eddi.labs.ai`             |

### DO NOT

- Do NOT delete `CNAME` — it's required for the custom domain
- Do NOT change the domain without coordination
- Do NOT embed docs content — link to docs.labs.ai instead

---

## 4. Handoff Protocol

Same as EDDI backend — see EDDI/AGENTS.md Section 5.
