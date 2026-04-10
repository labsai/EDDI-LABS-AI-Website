# EDDI Website

> Marketing site for [EDDI](https://github.com/labsai/EDDI) — the self-hosted Enterprise AI Orchestrator.

**Live at:** [eddi.labs.ai](https://eddi.labs.ai)

## Tech Stack

| Technology   | Purpose               |
| ------------ | --------------------- |
| Astro        | Static site framework |
| Tailwind CSS | Styling (v4, Vite)    |

## Development

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # Production build → ./dist/
npm run preview      # Preview production build
```

## Deployment

The site is deployed to **GitHub Pages** at `eddi.labs.ai` (configured via the `CNAME` file).

## Project Structure

```
src/
├── assets/          # Images, logos, SVGs
├── components/      # Shared Astro components (Nav, Footer, etc.)
├── i18n/
│   ├── index.ts     # i18n routing utilities
│   └── locales/     # 11 locale files (en, de, es, fr, pt, ar, zh, ja, ko, hi, th)
├── layouts/         # Page layouts
├── pages/           # Astro pages (features/, enterprise/, use-cases/, etc.)
└── styles/          # Global CSS
public/
├── CNAME            # GitHub Pages custom domain
├── robots.txt       # Crawl directives + sitemap
├── llms.txt         # LLM-discoverable content (llmstxt.org)
└── llms-full.txt    # Full-text documentation for AI agents
```

## i18n

11 locales with root-English routing (`/` = English, `/de/`, `/es/`, `/ar/`, etc.). Arabic has full RTL support.

## Related Repos

- [EDDI](https://github.com/labsai/EDDI) — Backend engine (Java 25, Quarkus)
- [EDDI-Manager](https://github.com/labsai/EDDI-Manager) — Admin dashboard (React 19)
- [eddi-chat-ui](https://github.com/labsai/eddi-chat-ui) — Standalone chat widget

## License

This website is part of the EDDI project — see [EDDI License (Apache 2.0)](https://github.com/labsai/EDDI/blob/main/LICENSE).
