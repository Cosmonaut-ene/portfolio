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
- Accent: `#D97706` (amber) — active nav, tag line, italic emphasis, CTA underline, project arrows
- Tag background: `#e4e0da`
- Divider: `#d8d4ce`

### Typography
- Headings + name: `Palatino, 'Palatino Linotype', serif`, font-weight 300
- Body / UI: sans-serif, font-weight 400 / 500
- H1: 56px, line-height 1.08, letter-spacing -0.01em
- Body: 15px, line-height 1.8
- Secondary: 13px
- Labels: 11px, uppercase, letter-spacing 0.1em

### CTA
- Primary: amber text + `→`, `border-bottom: 1.5px solid #D97706`, color `#D97706`
- Secondary: plain text link, color `#9b9690`, no underline
- No filled or bordered button shapes

### Layout
- Max content width: `900px`, centered
- Hero content max-width: `640px`
- Padding: `1.75rem 3rem` (nav), `5rem 3rem 4rem` (hero), `2.5rem 3rem` (sections)
- Dividers: `height: 0.5px`, `background: #d8d4ce`, `margin: 0 3rem`
- Section label: 11px, uppercase, letter-spacing 0.1em, color `#9b9690`

### Project Rows
- Layout: flex row, gap 1.5rem
- Number: Palatino serif, 11px, color `#c5c0ba`, min-width 20px
- Title: 15px, font-weight 500, color `#1a1a1a`
- Description: 13px, color `#6b6b6b`, line-height 1.6
- Tags: `#e4e0da` background, `#9b9690` text, 11px, padding `3px 8px`
- Arrow: `↗`, color `#D97706`, 16px, flex-shrink 0
- Row divider: `0.5px solid #d8d4ce`

### Do Not
- No dark filled buttons
- No gradient, shadow, or blur
- No card grid for projects
- No colored section backgrounds
- No Google Fonts — use Palatino system font stack

## Rejected Approaches
- `@astrojs/tailwind` integration: deprecated, do not use
- Web-based blog publishing: not supported in static site
- Headless CMS: unnecessary external dependency
- Custom backend/editor: out of scope
- Plain HTML blog: poor authoring experience

---

## Module 1: Project Setup — status: [ ] TODO

### Description
Initialize Astro project with Tailwind and configure GitHub Pages deployment.

### Task Breakdown
- [ ] TASK-01: Initialize Astro project with minimal template
  - Input: empty directory
  - Output: working Astro project
  - Constraint: Node >= 22, Astro 6.0.8
  - Not do: do not use @astrojs/tailwind

- [ ] TASK-02: Configure Tailwind CSS via @tailwindcss/vite
  - Input: bare Astro project
  - Output: Tailwind classes working in .astro files
  - Constraint: use Vite plugin path per https://docs.astro.build/en/guides/styling/#tailwind
  - Not do: do not install @astrojs/tailwind

- [ ] TASK-03: Configure GitHub Actions for GitHub Pages deployment
  - Input: Astro project
  - Output: .github/workflows/deploy.yml
  - Constraint: follow https://docs.astro.build/zh-cn/guides/deploy/github/
  - AC:
    - Given: push to main
    - When: GitHub Actions completes
    - Then: site is accessible at GitHub Pages URL

### External Dependencies
- [x] Astro: 6.0.8
- [x] Node: >= 22
- [x] Tailwind integration: @tailwindcss/vite (Tailwind 4)
- [x] GitHub Pages deploy docs: https://docs.astro.build/zh-cn/guides/deploy/github/
- [x] Tailwind styling docs: https://docs.astro.build/en/guides/styling/#tailwind
- [x] Verified: 2026-03-26

---

## Module 2: Site Layout — status: [ ] TODO

### Description
Global layout component shared across all pages.

### Task Breakdown
- [ ] TASK-01: Create base Layout.astro component
  - Output: Layout with <head>, nav, <slot />, footer
  - Constraint: import global.css here (single import point)

- [ ] TASK-02: Navigation bar with three links
  - Links: Home / Projects / Blog
  - AC:
    - All three links route correctly
    - Active page is visually indicated

- [ ] TASK-03: Responsive base styles
  - AC:
    - Layout does not break on mobile viewport
    - No horizontal scroll on small screens

---

## Module 3: Home Page — status: [ ] TODO

### Description
Landing page. First impression for recruiters.

### Task Breakdown
- [ ] TASK-01: Hero section
  - Content: name, one-line role description, brief positioning statement
  - AC: visitor understands who you are and what you do within 5 seconds

- [ ] TASK-02: Tech stack section
  - Content: key technologies (Python, LangGraph, FastAPI, Next.js, etc.)
  - Not do: do not list every tool — focus on AI/ML stack

- [ ] TASK-03: CTA links to Projects and Blog
  - AC: clear visual path from hero to Projects and Blog

---

## Module 4: Projects Page — status: [ ] TODO

### Description
Portfolio showcase. Hardcoded project data.

### Task Breakdown
- [ ] TASK-01: Define project data structure
  - Fields: title, description, techStack[], githubUrl, (optional) demoUrl
  - Location: src/data/projects.ts

- [ ] TASK-02: ProjectCard component
  - Input: single project object
  - Output: card with title, description, tech stack tags, GitHub link
  - AC: adding a new project requires only a data change, not a component change

- [ ] TASK-03: Projects page rendering all cards
  - AC: all project cards render without error

### Project Data (hardcoded)
```
Project 1:
  title: UNSW Open Day RAG Chatbot
  description: 8-node LangGraph pipeline with hybrid BM25 + semantic retrieval,
               HyDE, and CRAG. Achieved 22% accuracy improvement and 46% latency
               reduction. Served as Scrum Master.
  techStack: [Python, LangGraph, FastAPI, BM25, RAGAS]
  githubUrl: (to be filled by human)

Project 2:
  title: Jobseeking Agent
  description: 4-agent autonomous job application system with Scout, Tailor,
               Applier, and Advisor agents. Integrates Discord notifications
               and automated browser interaction.
  techStack: [FastAPI, Next.js, Playwright, Discord, GitHub Actions]
  githubUrl: (to be filled by human)
```

---

## Module 5: Blog — status: [ ] TODO

### Description
Technical blog. Markdown-based authoring, statically generated.

### Task Breakdown
- [ ] TASK-01: Configure Astro Content Collections for blog posts
  - Location: src/content/blog/
  - Schema fields: title, date, description, (optional) tags
  - AC: new .md file in /blog/ automatically appears in list

- [ ] TASK-02: Blog list page
  - Route: /blog
  - Content: post title, date, description, link to full post
  - AC: posts sorted by date descending

- [ ] TASK-03: Blog post detail page
  - Route: /blog/[slug]
  - AC:
    - Markdown renders correctly (headings, code blocks, links)
    - Title and date displayed

- [ ] TASK-04: First blog post (draft)
  - Title: "Building a Human-AI Development Workflow"
  - Content: summary of today's workflow discussion
  - Note: content written by human, TASK is to create the file scaffold only

---

## Verification Strategy (per module)

| Module | Human can verify | Requires AI explanation | External tooling |
|--------|-----------------|------------------------|-----------------|
| Setup | GitHub Pages URL loads | Tailwind config correctness | GitHub Actions log |
| Layout | Visual check, nav links | - | - |
| Home | Content accuracy | - | - |
| Projects | Cards render, links work | Data structure extensibility | - |
| Blog | New .md appears in list, renders correctly | Content Collections config | - |