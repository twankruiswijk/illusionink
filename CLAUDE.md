# IllusionInk

Website for IllusionInk - Iris's tattoo studio.

## Tech Stack

- **Framework:** Astro 5 with React islands
- **Styling:** Tailwind CSS 4
- **UI Components:** Radix UI primitives + custom components
- **Linting:** Biome
- **Deployment:** Cloudflare Pages (via GitHub)
- **CMS:** Sanity (planned)

## Project Structure

```
src/
├── components/     # React components (.tsx) and Astro components (.astro)
│   ├── ui/         # Reusable UI primitives (Button, Sheet, etc.)
│   └── Header/     # Feature components
├── layouts/        # Page layouts
├── pages/          # Astro pages (file-based routing)
├── hooks/          # React hooks
├── lib/            # Utilities
└── config/         # Site configuration
```

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm check        # TypeScript + Biome check
pnpm lint:fix     # Auto-fix lint issues
pnpm format       # Format code
```

## Conventions

- Use Astro components for static content, React for interactive islands
- Follow Radix UI patterns for accessible components
- Use `cn()` utility for conditional class merging
- Keep components small and composable
- Use TypeScript strict mode

## Branch Strategy

- `main` — Current production (legacy landing page)
- `V2` — New website development (protected, requires PR)
- Feature branches → PR to V2 → Review → Merge

## Skills

This project includes agent skills in `/skills/` for consistent best practices:

- **vercel-react-best-practices** — React performance patterns
- **vercel-composition-patterns** — Component architecture
- **web-design-guidelines** — UI/UX and accessibility
- **sanity-best-practices** — Sanity CMS patterns (for future CMS integration)
- **content-modeling-best-practices** — Content structure
- **seo-aeo-best-practices** — SEO optimization
