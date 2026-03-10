# EDDI Website — AI Agent Instructions

> **This file is automatically loaded by AI coding assistants. Follow ALL rules below.**

## 1. Project Context

**eddi-website** is the marketing site for EDDI, hosted on **GitHub Pages** at `eddi.labs.ai`. Currently a single HTML file, migrating to **Astro**.

### Current State → Target

| Aspect        | Current                              | Target                                      |
| ------------- | ------------------------------------ | ------------------------------------------- |
| **Framework** | Single `index.html` (1188 lines)     | Astro                                       |
| **Styling**   | Tailwind via CDN                     | Tailwind (built)                            |
| **i18n**      | None                                 | Astro i18n routing (`/en/`, `/de/`, `/ar/`) |
| **RTL**       | None                                 | Arabic support with `dir="rtl"`             |
| **Theme**     | Light only                           | Dark/Light toggle                           |
| **Docs**      | Published separately at docs.labs.ai | Link to docs.labs.ai                        |
| **Hosting**   | GitHub Pages (manual push)           | GitHub Pages via GitHub Actions             |
| **Domain**    | `eddi.labs.ai` (CNAME file)          | Same                                        |

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

| File         | Purpose                                             |
| ------------ | --------------------------------------------------- |
| `index.html` | Current entire site (1188 lines) — migration source |
| `CNAME`      | GitHub Pages domain: `eddi.labs.ai`                 |

### DO NOT

- Do NOT delete `CNAME` — it's required for the custom domain
- Do NOT change the domain without coordination
- Do NOT embed docs content — link to docs.labs.ai instead

---

## 4. Handoff Protocol

Same as EDDI backend — see EDDI/AGENTS.md Section 5.
