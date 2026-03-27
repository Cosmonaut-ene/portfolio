# PROJECT_STATE.md

_Last updated: 2026-03-28_

## Current System State

Live site: https://cosmonaut-ene.github.io/portfolio/

All five SPEC modules are complete and merged to `main`. The site is deployed via GitHub Actions to GitHub Pages.

## Module Status

| Module | Status | Branch / PR |
|--------|--------|-------------|
| Module 1: Project Setup | ✅ Merged | PR #1 |
| Module 2: Site Layout | ✅ Merged | PR #2 |
| Module 3: Home Page | ✅ Merged | PR #3 |
| Module 4: Projects Page | ✅ Merged | PR #4 |
| Module 5: Blog | ✅ Merged | PR #5 + PR #6 |

## What Exists

### Pages
- `/` — Home: hero, core stack, capabilities (4-column skills grid), background + timeline
- `/projects/` — Project list: UNSW RAG Chatbot, Jobseeking Agent
- `/blog/` — Blog list, sorted by date
- `/blog/[slug]` — Blog post detail (markdown rendered)

### Data
- `src/data/projects.ts` — 2 hardcoded projects with title, description, techStack[], githubUrl
- `src/content/blog/` — 1 post: "Building a Human-AI Development Workflow" (2026-03-26)

### Infrastructure
- Astro 6.0.8, Tailwind CSS 4 via `@tailwindcss/vite`
- GitHub Actions deploy on push to `main` → GitHub Pages
- Branch naming: `feat/<module>/<short-desc>`

## Content State

### Home page
- Name: Joe Zhang
- Role: AI Engineer · GenAI · RAG Systems · Multi-Agent Pipelines
- Bio and timeline added (2026 ACS PY, 2025 graduation, 2024 RAG project, 2021–22 Tongji ICV Lab)
- Skills: AI/LLM, Backend, MLOps/Cloud, Frontend

### Projects
- UNSW Open Day RAG Chatbot: full description with metrics, tags: Python, LangGraph, FastAPI, BM25, HyDE, CRAG, RAGAS, FAISS
- Jobseeking Agent — Multi-Agent System: full description, tags: Multi-Agent, FastAPI, Next.js, Playwright, Docker, GitHub Actions, Discord API, APScheduler
- GitHub URLs point to real repos (`Cosmonaut-ene/UNSW_RAG_Assistance`, `Cosmonaut-ene/Jobseeking_Agent`)

## What Is NOT Done

- Contact info (email, LinkedIn) — placeholder links not filled in
- Resume PDF download link — not connected
- No additional blog posts beyond the first draft
- No About page (about content is on home page)

## Next Session Should

- Add real email / LinkedIn / GitHub links to home page or a dedicated contact section
- Write blog post body content (current post is drafted but sparse)
- Consider adding a contact section per `portfolio.html` reference design
