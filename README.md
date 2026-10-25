# Teach Me Git Workflows & Team Collaboration 🌿

An interactive, Socratic engineering course designed to teach how modern software teams organize branches, commits, code reviews, CI/CD pipelines, release management, monorepos, and GitOps at scale.

## 🚀 Interactive Dashboard & Flashcard Revision Hub

The course includes a standalone, zero-dependency modern web dashboard:
- **Curriculum Roadmap**: Track progress across all 9 core workflow modules.
- **Interactive Flashcards**: 16+ 3D flip revision flashcards testing core concepts, mechanics, and architectural trade-offs (<kbd>Space</kbd> to flip, <kbd>→</kbd> / <kbd>←</kbd> to cycle).
- **Workflow Comparison Matrix**: Architectural comparison covering release cadence, merge lifespan, CI requirements, rollback complexity, and team size.

To view the dashboard, simply open `dashboard.html` or `index.html` in any modern web browser:
```bash
open dashboard.html
# or open index.html
```

---

## 📚 Curriculum Roadmap

| Module | Topic | Core Focus |
| :--- | :--- | :--- |
| **00** | **Foundations & Diagnostics** | Directed Acyclic Graphs (DAG), commit snapshots, fast-forward vs 3-way merges |
| **01** | **Centralized Workflow** | The SVN transition model, single-branch lockstep, local rebasing |
| **02** | **Feature Branching & GitHub Flow** | Topic branches, Pull Requests, continuous deployment, branch protection rules |
| **03** | **Trunk-Based Development (TBD)** | Sub-24h branches, daily integration, feature toggles, branch-by-abstraction |
| **04** | **Gitflow & Scheduled Releases** | `develop` vs `main`, release hardening tracks, hotfix backports, SemVer sync |
| **05** | **Fork & Pull Request (Open Source)** | Untrusted contribution boundaries, upstream remotes, maintainer governance |
| **06** | **Release Management & SemVer** | Semantic Versioning 2.0.0, Conventional Commits, automated changelogs |
| **07** | **Monorepos vs Polyrepos** | Trunk in monorepos, sparse checkout, affected build graphs (Nx/Bazel), CODEOWNERS |
| **08** | **GitOps & Declarative Delivery** | Git as the single source of truth, automated pull reconciliation (ArgoCD/Flux) |
| **09** | **Decision Architecture & Trade-Offs** | Organizational decision framework, migration playbooks, anti-pattern post-mortems |

---

## 📂 Repository Structure

```text
├── MISSION.md               # Real-world objectives and course scope
├── NOTES.md                 # Pedagogical notes, learner profile, and syllabus
├── RESOURCES.md             # Curated high-trust industry authorities and communities
├── dashboard.html           # Interactive master dashboard and flashcard hub
├── index.html               # Entrypoint mirror of the dashboard
├── assets/
│   ├── styles.css           # Modern theme design system (dark/light mode)
│   └── app.js               # Flashcard deck engine and interactive widgets
├── lessons/                 # Generated bite-sized interactive HTML lessons
├── reference/               # Compressed reference cheat sheets and topologies
└── learning-records/        # Architectural decision-style learning records
```

---

## 🛠️ Requirements & Getting Started

- No build step or package manager required. The dashboard and lessons run directly in any browser.
- Git 2.x+ recommended for practical command line exercises.
