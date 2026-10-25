# Git Workflows & Collaboration Resources

## Knowledge

- [Article: "Patterns for Managing Source Code Branches" by Martin Fowler (martinfowler.com)](https://martinfowler.com/articles/branching-patterns.html)
  The definitive taxonomy on source code branching patterns, integration frequency, and semantic conflict resolution. Use for: theoretical foundations of branching models and trade-offs.
- [Specification & Guide: "Trunk Based Development" by Paul Hammant et al. (trunkbaseddevelopment.com)](https://trunkbaseddevelopment.com/)
  Comprehensive authority on Trunk-Based Development, branch-by-abstraction, short-lived feature branches, and feature toggles. Use for: high-frequency CI/CD and enterprise trunk workflows.
- [Article: "A successful Git branching model" by Vincent Driessen (nvie.com)](https://nvie.com/posts/a-successful-git-branching-model/)
  The original 2010 Gitflow proposal. Use for: understanding scheduled release branches, hotfix mechanics, and legacy enterprise software delivery.
- [Guide: "GitHub Flow" by Scott Chacon & GitHub Guides](https://docs.github.com/en/get-started/using-github/github-flow)
  Standard reference for web-scale, lightweight branch-and-deploy models with automated CI and branch protections. Use for: continuous deployment and PR-based workflows.
- [Book: _Pro Git_ (2nd Edition) by Scott Chacon & Ben Straub (git-scm.com/book)](https://git-scm.com/book/en/v2)
  Official open reference for Git plumbing, porcelain, distributed workflows, rebase vs merge mechanics, and reflogs. Use for: mechanical accuracy and graph topology behavior.
- [Whitepaper & Standards: "OpenGitOps Principles" (opengitops.dev)](https://opengitops.dev/)
  The Cloud Native Computing Foundation (CNCF) GitOps working group standards. Use for: declarative state, automated pull reconciliation, and software supply chain definitions.
- [Case Study: "Why Google Stores Billions of Lines of Code in a Single Repository" (CACM, Rachel Potvin & Josh Levenberg)](https://cacm.acm.org/magazines/2016/7/204032-why-google-stores-billions-of-lines-of-code-in-a-single-repository/fulltext)
  Foundational industry analysis of monorepo advantages, dependency atomicity, and scaling trade-offs. Use for: Monorepo vs Polyrepo architectural comparisons.
- [Standard: "Conventional Commits 1.0.0" (conventionalcommits.org)](https://www.conventionalcommits.org/en/v1.0.0/)
  Standardized commit message conventions for automated semantic versioning, changelog generation, and team commit hygiene. Use for: commit standards and release automation.

## Wisdom (Communities)

- [Hacker News (news.ycombinator.com)](https://news.ycombinator.com)
  Real-world developer discourse, post-mortems, and engineering debates on Git branching dilemmas and monorepo scaling challenges. Use for: practical industry feedback and operational retrospectives.
- [DevOps Subreddit (r/devops)](https://reddit.com/r/devops)
  Engineering discussions on CI/CD pipelines, GitOps implementation pitfalls, ArgoCD/Flux orchestration, and trunk gating. Use for: production pipeline troubleshooting.
- [Git Mailing List & GitHub Community Forum](https://github.community/)
  Discussions on upstream Git behavior, merge driver edge cases, and GitHub enterprise collaboration features.
