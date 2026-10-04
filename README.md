# Saleem Malik · Portfolio

Personal portfolio of Saleem Malik, AI Full Stack Engineer. Live at [saleem-malik.vercel.app](https://saleem-malik.vercel.app).

Built with Next.js (App Router), TypeScript and Tailwind CSS: light and dark mode, a page per project, and an "Ask my AI" assistant that answers questions from the resume data (AI SDK + Vercel AI Gateway).

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

The chat assistant needs AI Gateway credentials locally: run `vercel env pull` (uses the project's OIDC token) or set `AI_GATEWAY_API_KEY` in `.env.local`. On Vercel it authenticates automatically.

## Editing content

All text (experience, projects, skills, education, contact links, chat starter questions) lives in
[`src/data/profile.ts`](src/data/profile.ts). The assistant reads the same data, so it stays in sync. The photo and resume are in `public/`.

## Environment variables

| Name | Purpose |
| --- | --- |
| `NEXT_PUBLIC_ASSISTANT_ENABLED` | Set to `true` to show the "Ask my AI" chat (needs AI Gateway enabled on the Vercel account) |
| `AI_GATEWAY_API_KEY` | Only needed locally if you don't use `vercel env pull` |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console verification code (optional) |

## Deployment

Deployed on Vercel from the repository root. Pushing to `main` deploys production; other branches get preview URLs.
