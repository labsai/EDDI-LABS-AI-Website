# EDDI Website

> Marketing and documentation site for [EDDI](https://github.com/labsai/EDDI) — the multi-agent orchestration middleware for conversational AI.

**Live at:** [eddi.labs.ai](https://eddi.labs.ai)

## Tech Stack

| Technology   | Purpose              |
| ------------ | -------------------- |
| Astro        | Static site framework |
| Starlight    | Documentation theme  |
| Tailwind CSS | Styling              |

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
├── assets/          # Images and media
├── content/
│   └── docs/        # Documentation pages (.md / .mdx)
│       ├── docs/    # Technical documentation
│       └── features/ # Feature showcase pages
├── styles/
│   └── global.css   # Custom styles
└── content.config.ts
```

## Related Repos

- [EDDI](https://github.com/labsai/EDDI) — Backend engine (Java 25, Quarkus)
- [EDDI-Manager](https://github.com/labsai/EDDI-Manager) — Admin dashboard (React 19)
- [eddi-chat-ui](https://github.com/labsai/eddi-chat-ui) — Standalone chat widget

## License

See [EDDI License](https://github.com/labsai/EDDI/blob/master/LICENSE) for details.
