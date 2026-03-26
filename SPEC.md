# Portfolio Website — SPEC.md

## Project Overview
Personal portfolio website targeting Australian recruiters.
Showcases projects and technical understanding via a blog.

## Tech Stack
- Framework: Astro 6.0.8
- Styling: Tailwind CSS 4 (via @tailwindcss/vite)
- Content: Markdown (Astro Content Collections)
- Deployment: GitHub Pages via GitHub Actions
- Node: >= 22

## UI Design Spec

### Color
- Background: `#F0EDE8` (warm gray)
- Primary text: `#1a1a1a`
- Secondary text: `#6b6b6b`
- Muted text / labels: `#9b9690`
- Accent: `#D97706` (amber) — used for active nav, tag line, italic emphasis, CTA underline, project arrows
- Tag background: `#e4e0da`
- Divider: `#d8d4ce`

### Typography
- Headings: Georgia serif, font-weight 300
- Body / UI: sans-serif, font-weight 400 / 500
- Base size: 15px body, 13px secondary, 11px labels
- Labels: uppercase, letter-spacing 0.1em

### CTA Buttons
- Primary: amber underline text link with `→`, `border-bottom: 1.5px solid #D97706`, color `#D97706`
- Secondary: plain text link, color `#9b9690`, no underline
- No filled or bordered button shapes

### Layout
- Padding: `2rem 3rem` (nav), `4rem 3rem` (hero), `2.5rem 3rem` (sections)
- Dividers: `0.5px solid #d8d4ce`
- Project list: numbered rows, not cards
- Project numbers: Georgia serif, 11px, color `#b5b0aa`
- Tech tags: `#e4e0da` background, `#9b9690` text, 11px, `padding: 3px 8px`
- Project arrow: `↗`, color `#D97706`, 16px

### Do Not
- No dark filled buttons
- No gradient, shadow, or blur
- No card grid for projects
- No colored section backgrounds

## Rejected Approaches
- `@astrojs/tailwind` integration: deprecated, do not use
- Web-based blog publishing: not supported in static site
- Headless CMS: unnecessary external dependency
- Custom backend/editor: out of scope
- Plain HTML blog: poor authoring experience

---

## Module 1: Project Setup — status: [x] COMPLETED

### Description
Initialize Astro project with Tailwind and configure GitHub Pages deployment.

### Task Breakdown
- [x] TASK-01: Initialize Astro project with minimal template
- [x] TASK-02: Configure Tailwind CSS via @tailwindcss/vite
- [x] TASK-03: Configure GitHub Actions for GitHub Pages deployment

### External Dependencies
- [x] Astro: 6.0.8
- [x] Node: >= 22
- [x] Tailwind integration: @tailwindcss/vite (Tailwind 4)
- [x] GitHub Pages deploy docs: https://docs.astro.build/zh-cn/guides/deploy/github/
- [x] Tailwind styling docs: https://docs.astro.build/en/guides/styling/#tailwind
- [x] Verified: 2026-03-26

---

## Module 2: Site Layout — status: [x] COMPLETED

### Description
Global layout component shared across all pages.

### Task Breakdown
- [x] TASK-01: Create base Layout.astro component
- [x] TASK-02: Navigation bar with three links (Home / Projects / Blog)
- [x] TASK-03: Responsive base styles

---

## Module 3: Home Page — status: [x] COMPLETED

### Description
Landing page. First impression for recruiters.

### Task Breakdown
- [x] TASK-01: Hero section
- [x] TASK-02: Tech stack section
- [x] TASK-03: CTA links to Projects and Blog

---

## Module 4: Projects Page — status: [x] COMPLETED

### Description
Portfolio showcase. Hardcoded project data.

### Task Breakdown
- [x] TASK-01: Define project data structure (src/data/projects.ts)
- [x] TASK-02: ProjectCard component
- [x] TASK-03: Projects page rendering all cards

### Project Data (hardcoded)
```
Project 1:
  title: UNSW Open Day RAG Chatbot
  description: 8-node LangGraph pipeline with hybrid BM25 + semantic retrieval,
               HyDE, and CRAG. Achieved 22% accuracy improvement and 46% latency
               reduction. Served as Scrum Master.
  techStack: [Python, LangGraph, FastAPI, BM25, RAGAS]
  githubUrl: https://github.com/Cosmonaut-ene/UNSW_RAG_Assistance

Project 2:
  title: Jobseeking Agent
  description: 4-agent autonomous job application system with Scout, Tailor,
               Applier, and Advisor agents. Integrates Discord notifications
               and automated browser interaction.
  techStack: [FastAPI, Next.js, Playwright, Discord, GitHub Actions]
  githubUrl: https://github.com/Cosmonaut-ene/Jobseeking_Agent
```

---

## Module 5: Blog — status: [x] COMPLETED

### Description
Technical blog. Markdown-based authoring, statically generated.

### Task Breakdown
- [x] TASK-01: Configure Astro Content Collections for blog posts
- [x] TASK-02: Blog list page
- [x] TASK-03: Blog post detail page
- [x] TASK-04: First blog post (scaffold created, content by author)

---

## Verification Strategy (per module)

| Module | Human can verify | Requires AI explanation | External tooling |
|--------|-----------------|------------------------|-----------------|
| Setup | GitHub Pages URL loads | Tailwind config correctness | GitHub Actions log |
| Layout | Visual check, nav links | - | - |
| Home | Content accuracy | - | - |
| Projects | Cards render, links work | Data structure extensibility | - |
| Blog | New .md appears in list, renders correctly | Content Collections config | - |
