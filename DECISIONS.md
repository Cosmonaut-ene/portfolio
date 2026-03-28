# DECISIONS.md

_Significant design decisions and rejected approaches. Updated when a non-obvious choice is made._

---

## Design System

**Decision:** Custom inline styles following SPEC.md color/typography spec, no Tailwind utility classes in practice.

**Why:** Tailwind 4 via `@tailwindcss/vite` was configured per SPEC, but the inline-style approach from the design spec was used directly to match exact pixel values. Tailwind remains available but is not actively used.

**Do not reintroduce:** utility-class rewrites unless the human requests it.

---

## Layout Structure

**Decision:** Global `max-width: 900px` container lives in `Layout.astro` as a wrapping `<div>`, not on individual sections.

**Why:** Prevents `max-width` duplication across every page. Sections use padding only. Dividers are standalone `<div style="height: 0.5px;">` elements, not `border-bottom` on sections — keeps section padding independent of divider placement.

---

## Home Page Structure

**Decision:** About, Skills, and Timeline are all on the home page (`index.astro`), not a separate `/about/` page.

**Why:** Portfolio targets recruiters doing a quick scan. A separate about page adds a navigation step without enough content to justify it. All context is visible in one scroll.

---

## Project Data

**Decision:** Projects are hardcoded in `src/data/projects.ts`, not fetched from a CMS or Astro Content Collections.

**Why:** Two projects. A CMS or content collection would be over-engineering. Data structure allows adding new entries with zero component changes (SPEC Module 4 requirement).

---

## Blog

**Decision:** Astro Content Collections for blog posts, Markdown source files in `src/content/blog/`.

**Why:** Static generation, no external dependency, good authoring experience. Rejected approaches (per SPEC):
- Web-based blog publishing: not supported in static site
- Headless CMS: unnecessary external dependency
- Plain HTML blog: poor authoring experience

---

## Deployment

**Decision:** GitHub Pages via GitHub Actions, `actions/deploy-pages` workflow.

**Why:** Free for public repos, integrates with existing repo. Requires repo to be **public** (free plan does not support Pages on private repos).

**Known issue resolved:** Initial deployment failed with 404 because GitHub Pages source was not set to "GitHub Actions" in repo settings. Fix: Settings → Pages → Source → GitHub Actions.

---

## Rejected Approaches — Global

The following were explicitly rejected during SPEC discussion and must not be reintroduced:

- `@astrojs/tailwind` integration: deprecated as of Astro 4+, do not use
- Dark filled buttons / gradient / shadow / blur: violates SPEC design constraints
- Card grid for projects: violates SPEC — use flat row list
- Colored section backgrounds: violates SPEC — single background color throughout
- Google Fonts: violates SPEC — use Palatino system font stack only
- Separate `/about/` page: rejected in favor of about section on home page
- CMS / headless backend: out of scope for static portfolio
