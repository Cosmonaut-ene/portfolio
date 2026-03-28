---
title: "Building a Human-AI Development Workflow"
date: 2026-03-26
description: "How I structured a SPEC-driven development process with AI as an execution partner, not an autonomous agent."
tags: ["AI", "workflow", "development"]
---

Most developers using AI coding tools fall into one of two traps: either they treat AI as a glorified autocomplete, or they hand over too much control and lose track of their own project. I spent a day designing a workflow that avoids both — here's what I learned.

## Situation

I was building a jobseeking agent — a full-stack application with FastAPI, Next.js, and multiple autonomous sub-agents. The project was moving fast, but something felt wrong.

AI was generating code that worked. PRs were being merged. Features were shipping. But I was losing the thread. I couldn't confidently answer basic questions about my own project: why was this module designed this way? What did we decide not to do, and why? If something broke at 2am, where would I even start?

The deeper problem wasn't technical. It was structural. I was using AI like an autonomous agent when I should have been using it like an amplifier. The difference matters enormously.

## Task

I needed to design a workflow that solved four specific problems:

1. **Requirement discussions were unstructured** — conversations with AI about features were productive in the moment but produced no durable output
2. **AI didn't push back on bad ideas** — it would implement whatever I asked, even when the requirement was unrealistic or redundant
3. **Documents drifted from reality** — SPEC.md was supposed to track everything, but it ended up tracking nothing reliably
4. **I was losing control of the codebase** — not because AI wrote bad code, but because I couldn't verify intent alignment at scale

The goal wasn't to constrain AI. It was to put myself back in the driver's seat.

## Action

### Reframing the relationship

The first insight was simple but important: **AI has no persistent memory. Files are the only source of truth.**

This meant every decision, every rejected approach, every design constraint had to live somewhere on disk — not in my head, not in chat history. The moment I accepted this, the rest of the workflow followed naturally.

### Splitting document responsibilities

I had been using a single SPEC.md to track requirements, progress, and system state simultaneously. It collapsed under its own weight. The fix was to split it into three documents with distinct purposes:

- **SPEC.md** — what we're building and why, stable, updated only on merge
- **PROJECT_STATE.md** — what the system looks like right now, updated every session
- **DECISIONS.md** — why we made the choices we made, especially the roads not taken

The third document turned out to be the most important. When AI doesn't know what you decided _not_ to do, it will reinvent those rejected approaches from scratch.

### Structuring requirement discussions

Before writing a single line of SPEC, I now run a pre-SPEC checklist with AI acting as a skeptical technical advisor — not an executor. Its job in this phase is to challenge requirements: identify what's unrealistic, redundant, or contradictory.

Then, before development begins, AI must restate its understanding of the requirements in its own words. This single step catches more intent misalignment than any amount of post-hoc code review.

### Tightening the development loop

Each SPEC module is broken into tasks small enough to fit in a single commit. The task description is self-contained: input, output, constraints, what _not_ to do, and acceptance criteria. When a task is this specific, the space for AI to misinterpret is small.

The commit format carries the traceability:

```
feat(module): [TASK-XX] description
```

Every commit is a reference back to a SPEC task. The git log becomes a readable execution history.

### Fixing Code Review

I was approving PRs I didn't fully understand. The honest framing I arrived at: **my approval means "I understand the scope and the intent is aligned" — not "I verified the implementation is correct."**

This distinction matters. It means my manual testing targets AC verification, not regression coverage. AI handles the latter through automated tests. I focus on the question AI cannot answer: did it build what I actually wanted?

### Building in session memory

AI loses context between sessions. Without intervention, every new Claude Code session starts with partial amnesia about project decisions made days ago.

The fix is explicit session bookends. Every session starts with reading PROJECT_STATE.md and DECISIONS.md. Every session ends with AI drafting an update to PROJECT_STATE.md, which I confirm before committing. It takes two minutes and has saved me hours of re-explaining context.

## Result

After a full day of designing and iterating, the workflow produced five concrete artifacts:

- **CLAUDE.md** — a global AI behavior ruleset covering session structure, development conventions, and prohibited behaviors
- **SPEC.md** — a structured requirements document with task-level granularity and acceptance criteria
- **PROJECT_STATE.md** — a living snapshot of current system state, updated every merge
- **`/commit` skill** — a slash command that enforces conventional commit format with human confirmation before execution
- **`/pr` skill** — a slash command that verifies `gh auth`, drafts a structured PR description, and requires human approval before creating

More importantly, the workflow produced a clearer model of what human-AI collaboration actually means at this stage of the technology.

AI is not a junior developer you can hand a ticket to. It's closer to a very fast, very capable executor with no judgment about whether it's building the right thing. The judgment has to come from you — through well-structured requirements, explicit constraints, and regular intent-alignment checks.

The workflow isn't about constraining AI. It's about giving yourself enough structure to stay in control while AI moves fast.

---

## Appendix: Skill Files

These two slash commands are the most immediately useful artifacts from this workflow. Drop them into `~/.claude/skills/` to use across all your projects.

### `/commit`

```markdown
---
name: commit
description: Git commit following project conventions. Use when committing completed work.
command: /commit
disable-model-invocation: true
allowed-tools: Bash(git diff:*), Bash(git add:*), Bash(git status:*), Bash(git commit:*), Bash(git push:*)
---

1. Run `git status` to check current state
2. Run `git diff --staged` to review what is staged
   - If nothing staged, show `git status` and ask human which files to stage
   - Do not run `git add` without confirmation
3. Ask human: which SPEC Task does this commit correspond to?
4. Write commit message: `feat(<module>): [TASK-XX] <description>`
   - Use `fix` for bug fixes, `docs` for documentation, `chore` for tooling
5. Show the commit message for human confirmation before committing
6. Commit after confirmation
7. Ask: push only, or create PR?
```

### `/pr`

```markdown
---
name: pr
description: Create a pull request following project conventions. Use after commits are ready for review.
command: /pr
disable-model-invocation: true
allowed-tools: Bash(git:*), Bash(gh:*)
---

1. Verify `gh auth status` — if not authenticated, stop and report
2. Confirm current branch is not `main` — if on main, stop and report
3. Run `git log main..HEAD --oneline` to review commits in this PR
4. Draft PR description:
   - What was done
   - Scope of impact
   - Key implementation decisions
   - Points requiring human review
5. Show PR description for human confirmation before creating
6. Run `gh pr create` with confirmed description
7. Output PR link
8. Remind human: do not start next feature until this PR is merged
```
