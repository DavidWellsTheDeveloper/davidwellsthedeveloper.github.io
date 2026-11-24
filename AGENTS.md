# AGENTS.md — davidwellsthedeveloper.github.io

Digital resume and portfolio site for David T. Wells (davidwellsthedeveloper.com).

## Project Structure

```
├── AGENTS.md                      # This file
├── Makefile                       # Root-level command shortcuts (make dev, test, deploy)
├── content/                       # Single source of record for site data (JSON)
│   ├── profile.json               # Name, title, contact info, summary, careerHighlights
│   ├── personal.json              # Bio, passions, interests
│   ├── homepage-highlights.json   # Planning/marketing doc (not read at runtime)
│   ├── experience/work.json       # Work history (job entries with achievements/technologies)
│   ├── skills/skills.json         # Flat skills list; `category` drives SkillsMatrix grouping
│   ├── education.json
│   ├── projects.json              # Selected projects
│   └── ai-development-practices.json
├── david-wells-resume/            # The Nuxt app (all source code lives here)
│   ├── composables/useResumeData.ts   # ⚠️ RUNTIME DATA SOURCE (hardcoded) — see warning
│   ├── composables/useResumeConfig.ts # Constitutional config + env parsing
│   ├── components/                # Sections: HeroSectionParallax, AboutSection,
│   │                              # ExperienceTimeline, SkillsMatrix, FreelanceSection,
│   │                              # ProjectsSection, ContactSection, NavigationBar, ResumeDownload
│   ├── pages/index.vue            # Single-page layout + SEO/JSON-LD metadata
│   ├── tests/                     # Vitest (components/ + composables/ + setup.ts)
│   ├── public/                    # Static assets incl. resume PDF served for download
│   ├── deploy/                    # AWS deploy scripts; .github/workflows for GitHub Pages
│   └── nuxt.config.ts, vitest.config.ts, tailwind.config.js
└── specs/, supportingDocs/        # Planning documents
```

## Data Flow (single source of record)

All rendered data comes from `content/*.json`. The composable
`david-wells-resume/composables/useResumeData.ts` imports those files at build
time and exposes them with typed interfaces plus derived helpers
(`getKeyHighlights`, `getSkillCategories`, `getExperienceDuration`,
`contactMessage` — those live in the composable, not the JSON).

**To change site content: edit `content/*.json` only.** No composable edits
needed unless you're adding new fields or helpers.

- `content/profile.json` — name, title, contact info, summary, careerHighlights
- `content/experience/work.json` — work history entries
- `content/projects.json` — selected projects
- `content/skills/skills.json` — flat skills list (categories control the
  SkillsMatrix grouping and section order: Frontend → Backend → Database →
  Data Science → Leadership → Tools → Cloud → Modern Development)
- `content/education.json` — degrees, coursework, achievements
- `content/personal.json` — bio, philosophy, passions, interests
- `content/homepage-highlights.json` — planning/marketing doc, **not** read at
  runtime (hero/achievements copy lives in the composable helpers)

## Constitutional Principles (project rules, enforced by tests)

1. **Authentic Representation** — only verified skills/experiences; all data
   entries carry `verified: true`. Never add unverified claims.
2. **Clean Design** — minimalist, purposeful Tailwind styling.
3. **Fast Loading** — static generation, perf targets (<3s load, FCP 1.5s, LCP 2.5s).
4. **Deployment Ready** — static output, cost-effective hosting.

## Commands

All app commands run from `david-wells-resume/`:

```bash
npm install --legacy-peer-deps   # install (peer deps are intentionally loose)
npm run dev                      # dev server at http://localhost:3000
npm run test:run                 # Vitest (all must pass before any deploy)
npm run lint                     # ESLint (must be clean)
npm run build                    # production build (.output/)
npm run generate                 # static site generation → .output/public
npm run preview                  # serve the built site locally
```

Root-level (from repo root): `make dev`, `make test`, `make build`,
`make deploy-preview` (generate + preview), `make deploy-github`.

## Testing Conventions

- Component tests historically use **self-contained mock components** (see
  `tests/components/*.test.ts`) rather than importing the real `.vue` file —
  `@vitejs/plugin-vue` is configured in `vitest.config.ts`, so importing real
  components also works (`ProjectsSection.test.ts` does this).
- Coverage thresholds: 80% branches/functions/lines/statements (blocks builds).
- Run tests after **every** content or component change.

## Adding / Changing Content

1. Update the JSON in `content/` (record) and the matching data in
   `useResumeData.ts` (runtime).
2. Add/update nav entries in **both** places in `NavigationBar.vue`:
   the desktop `navigation` ref array AND the hard-coded mobile menu links.
3. Register new sections in `pages/index.vue` (order matters for scroll nav).
4. `npm run test:run && npm run lint && npm run build` — all green or don't ship.
5. SEO metadata (title, description, JSON-LD) lives in `pages/index.vue`;
   update it when the positioning/title changes.

## Resume PDF

- Served from `david-wells-resume/public/David-Wells-Software-Engineer-Resume.pdf`
  (filename referenced by `ResumeDownload.vue` — keep the name if swapping).
- Source of truth is the master resume docx in `~/Jobs/David Wells Software
  Engineer Resume.docx`. Export to PDF (with correct indentation), then copy
  over the file in `public/` using the same filename.
- The resume download reflects the **master** resume, not tailored variants.

## Deployment

- **Primary: GitHub Pages** — push to `main` triggers the GitHub Actions
  workflow (`.github/workflows/deploy.yml` in the app dir), or use
  `make deploy-github`. HTTPS via Cloudflare (see `HTTPS-DOMAIN-SETUP.md`).
- **Alternative: AWS S3 + CloudFront** — `make deploy-aws` (requires AWS CLI
  and `.env.production`).
- Static output for any host: `npm run generate` → deploy `.output/public`.
- Verify the live site and the resume download after deploying.

## Gotchas

- `.output/`, `dist/`, `node_modules/`, `.nuxt/` are build artifacts — never
  edit or commit them.
- Use `--legacy-peer-deps` for npm installs.
- Email everywhere is `dave1.t.wells@gmail.com` (watch for the old
  `dave1twells` typo when touching contact data).
- The headless CMS project belongs to Andrews Accounting
  (andrewsaccountingllc.com). Pantry To Store (food waste reduction platform)
  and the Django nonprofit platform are separate projects.
