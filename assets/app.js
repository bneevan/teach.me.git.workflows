// Core interactive logic for Git Workflows Course & Revision Hub

const FLASHCARDS = [
  {
    id: 1,
    category: "branching-models",
    categoryLabel: "Branching Models",
    question: "What is the core operational principle of Trunk-Based Development (TBD)?",
    answer: "All engineers merge small, frequent commits directly into a single shared branch ('trunk' or 'main') at least once a day, avoiding long-lived feature branches.",
    keyInsight: "Merge conflicts grow super-linearly with branch lifespan. TBD eliminates merge debt by forcing continuous daily integration.",
    workflow: "Trunk-Based Development"
  },
  {
    id: 2,
    category: "branching-models",
    categoryLabel: "Branching Models",
    question: "In Gitflow, what are the two permanent infinite-lifetime branches, and what does each represent?",
    answer: "'main' (or 'master') strictly reflects production-ready, released state. 'develop' serves as an integration branch for completed features targeted for the next release.",
    keyInsight: "Gitflow separates 'what is currently in production' from 'what is staged for the upcoming batch release'.",
    workflow: "Gitflow"
  },
  {
    id: 3,
    category: "branching-models",
    categoryLabel: "Branching Models",
    question: "How does GitHub Flow differ fundamentally from Gitflow?",
    answer: "GitHub Flow has only ONE permanent branch ('main'). Anything on main is deployable. Everything else is a short-lived branch created for a single feature/fix, reviewed via PR, merged, and deployed immediately.",
    keyInsight: "GitHub Flow is tailored for Continuous Delivery / Web services, whereas Gitflow was designed for scheduled boxed software releases.",
    workflow: "GitHub Flow"
  },
  {
    id: 4,
    category: "ci-cd-releases",
    categoryLabel: "Release & CI/CD",
    question: "How do Trunk-Based teams safely commit incomplete or experimental features without breaking production?",
    answer: "By using Feature Flags (Feature Toggles) and Branch-by-Abstraction to decouple code deployment from feature release.",
    keyInsight: "Deployment is a technical action (putting code in prod); Release is a business decision (flipping the flag for users).",
    workflow: "Trunk-Based Development"
  },
  {
    id: 5,
    category: "branching-models",
    categoryLabel: "Branching Models",
    question: "Why do open-source projects prefer the Fork-and-Pull-Request model over shared feature branching?",
    answer: "Security and access control. Contributors fork the repository into their personal namespace, keeping the upstream repo write-protected against untrusted push access and untrusted CI triggers.",
    keyInsight: "Upstream maintainers pull validated changes across repository boundaries rather than granting direct write rights.",
    workflow: "Fork & PR"
  },
  {
    id: 6,
    category: "gitops-monorepo",
    categoryLabel: "Monorepo & GitOps",
    question: "What defines GitOps according to the CNCF OpenGitOps standard?",
    answer: "Declarative desired state stored version-controlled in Git, with automated software agents continuously pulling Git state and reconciling real-world infrastructure to eliminate drift.",
    keyInsight: "Pull-based reconciliation (e.g., ArgoCD, Flux) inside the cluster replaces push-based CI deployment scripts holding high-privilege cluster credentials.",
    workflow: "GitOps"
  },
  {
    id: 7,
    category: "branching-models",
    categoryLabel: "Branching Models",
    question: "What was the Centralized Git Workflow, and why did SVN teams migrate to it first?",
    answer: "It mirrors Subversion (SVN) by using a single 'main' branch where all developers push directly or rebase local commits before pushing, without feature branches or PRs.",
    keyInsight: "It is simple for tiny teams (1-3 devs) but causes lockstep push-rejections ('non-fast-forward') as team size grows.",
    workflow: "Centralized"
  },
  {
    id: 8,
    category: "governance-hygiene",
    categoryLabel: "Governance & Hygiene",
    question: "What is an 'Atomic Commit' and why is it crucial for code reviews and bisecting?",
    answer: "A commit that encapsulates a single complete logical change along with its corresponding tests and docs, leaving the test suite green before and after the commit.",
    keyInsight: "Atomic commits make 'git bisect' reliable (no broken intermediate commits) and allow surgical cherry-picks or reversions.",
    workflow: "General Best Practice"
  },
  {
    id: 9,
    category: "governance-hygiene",
    categoryLabel: "Governance & Hygiene",
    question: "What are Conventional Commits, and how do they automate release management?",
    answer: "A structured commit message format (e.g. 'feat: ...', 'fix: ...', 'feat!: ...') that tooling parses to automatically bump Semantic Versions (Patch, Minor, Major) and generate CHANGELOG.md.",
    keyInsight: "'fix:' triggers Patch bump; 'feat:' triggers Minor bump; 'BREAKING CHANGE:' or '!' triggers Major bump.",
    workflow: "Release Management"
  },
  {
    id: 10,
    category: "ci-cd-releases",
    categoryLabel: "Release & CI/CD",
    question: "In Gitflow, from where does a 'hotfix' branch originate, and where must it be merged back into?",
    answer: "A hotfix branches directly off 'main' (or the production release tag), and upon completion must be merged back into BOTH 'main' AND 'develop' (or the active release branch).",
    keyInsight: "Failing to back-port hotfixes into 'develop' causes production regressions when the next scheduled release deploys.",
    workflow: "Gitflow"
  },
  {
    id: 11,
    category: "gitops-monorepo",
    categoryLabel: "Monorepo & GitOps",
    question: "What is the primary architectural advantage of a Monorepo for large engineering teams?",
    answer: "Atomic cross-project refactoring and single source of truth for dependencies. You can change a shared API and update all 10 consuming services in a single atomic commit.",
    keyInsight: "Eliminates multi-repo diamond dependency hell and version desynchronization, but requires advanced tooling (Bazel, Nx, Turborepo).",
    workflow: "Monorepos"
  },
  {
    id: 12,
    category: "governance-hygiene",
    categoryLabel: "Governance & Hygiene",
    question: "What is the difference between 'Squash and Merge' vs 'Rebase and Merge' vs 'Merge Commit'?",
    answer: "'Merge Commit' preserves full branch topology and individual commits. 'Squash' collapses all PR commits into one single commit on main. 'Rebase' replays commits linearly onto main without a merge node.",
    keyInsight: "Squashing keeps the main history pristine and atomic; rebase keeps fine-grained steps in a clean line; merge preserves true chronological graph shape.",
    workflow: "Code Reviews"
  },
  {
    id: 13,
    category: "governance-hygiene",
    categoryLabel: "Governance & Hygiene",
    question: "What is CODEOWNERS and how does it prevent organizational bottlenecks?",
    answer: "A file defining users or teams responsible for specific directories or files in a repo, automatically requesting relevant code reviews and enforcing mandatory sign-offs via branch rules.",
    keyInsight: "Prevents accidental changes to critical systems (e.g. security configs, shared billing libraries) without blocking unrelated components.",
    workflow: "Governance"
  },
  {
    id: 14,
    category: "gitops-monorepo",
    categoryLabel: "Monorepo & GitOps",
    question: "Why is Environment Branching (e.g. dev, staging, prod branches) often considered an anti-pattern in GitOps?",
    answer: "Because environment branches diverge over time through selective merges or hotfixes, breaking Git's ability to cleanly promote identical artifacts across environments.",
    keyInsight: "GitOps best practice: use a single branch with directory or Kustomize/Helm overlays (e.g., /envs/staging, /envs/prod) pinned to immutable image digests.",
    workflow: "GitOps"
  },
  {
    id: 15,
    category: "ci-cd-releases",
    categoryLabel: "Release & CI/CD",
    question: "What is Semantic Versioning (SemVer) format and what does MAJOR.MINOR.PATCH represent?",
    answer: "MAJOR: Incompatible API breaking changes. MINOR: Backward-compatible added functionality. PATCH: Backward-compatible bug fixes.",
    keyInsight: "SemVer provides a formal contract between producers and consumers so automated dependency managers can safely auto-update.",
    workflow: "Release Management"
  },
  {
    id: 16,
    category: "branching-models",
    categoryLabel: "Branching Models",
    question: "When is Gitflow still appropriate in modern software engineering?",
    answer: "When maintaining multiple supported release versions simultaneously in production (e.g. v1.2, v2.0, mobile apps with slow App Store reviews, on-prem enterprise installations).",
    keyInsight: "If you release continuously to a single SaaS environment, Gitflow introduces massive unnecessary overhead and delay.",
    workflow: "Gitflow"
  }
];

let currentCardIndex = 0;
let currentFilter = 'all';
let filteredCards = [...FLASHCARDS];
let knownCardIds = new Set();

function initTheme() {
  const savedTheme = localStorage.getItem('git_course_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeButton(savedTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const target = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', target);
  localStorage.setItem('git_course_theme', target);
  updateThemeButton(target);
}

function updateThemeButton(theme) {
  const btn = document.getElementById('theme-toggle-btn');
  if (btn) {
    btn.innerHTML = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
  }
}

function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.style.display = 'none');
  
  const activeBtn = document.querySelector(`[data-tab="${tabId}"]`);
  const activeContent = document.getElementById(tabId);
  
  if (activeBtn) activeBtn.classList.add('active');
  if (activeContent) activeContent.style.display = 'block';
}

function filterFlashcards(category, elem) {
  currentFilter = category;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (elem) elem.classList.add('active');

  if (category === 'all') {
    filteredCards = [...FLASHCARDS];
  } else if (category === 'known') {
    filteredCards = FLASHCARDS.filter(c => knownCardIds.has(c.id));
    if (filteredCards.length === 0) {
      alert("No flashcards marked as known yet! Review cards and click 'Mark Known'.");
      filteredCards = [...FLASHCARDS];
      currentFilter = 'all';
      document.querySelector('[data-filter="all"]').classList.add('active');
      return;
    }
  } else {
    filteredCards = FLASHCARDS.filter(c => c.category === category);
  }
  
  currentCardIndex = 0;
  renderFlashcard();
}

function renderFlashcard() {
  const cardElem = document.getElementById('flashcard-card');
  if (!cardElem || filteredCards.length === 0) return;

  // Reset flip
  cardElem.classList.remove('flipped');

  const card = filteredCards[currentCardIndex];
  
  document.getElementById('card-cat-front').textContent = card.categoryLabel + " • " + card.workflow;
  document.getElementById('card-cat-back').textContent = card.categoryLabel + " • " + card.workflow;
  document.getElementById('card-question-text').textContent = card.question;
  document.getElementById('card-answer-text').textContent = card.answer;
  document.getElementById('card-insight-text').textContent = card.keyInsight;
  
  document.getElementById('card-counter-display').textContent = 
    `${currentCardIndex + 1} of ${filteredCards.length}`;

  const markBtn = document.getElementById('card-mark-known-btn');
  if (markBtn) {
    if (knownCardIds.has(card.id)) {
      markBtn.innerHTML = '✓ Mastered';
      markBtn.classList.add('btn-primary');
    } else {
      markBtn.innerHTML = 'Mark Known';
      markBtn.classList.remove('btn-primary');
    }
  }
}

function flipFlashcard() {
  const card = document.getElementById('flashcard-card');
  if (card) {
    card.classList.toggle('flipped');
  }
}

function nextFlashcard() {
  if (currentCardIndex < filteredCards.length - 1) {
    currentCardIndex++;
  } else {
    currentCardIndex = 0;
  }
  renderFlashcard();
}

function prevFlashcard() {
  if (currentCardIndex > 0) {
    currentCardIndex--;
  } else {
    currentCardIndex = filteredCards.length - 1;
  }
  renderFlashcard();
}

function shuffleFlashcards() {
  for (let i = filteredCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filteredCards[i], filteredCards[j]] = [filteredCards[j], filteredCards[i]];
  }
  currentCardIndex = 0;
  renderFlashcard();
}

function toggleCardKnown() {
  const card = filteredCards[currentCardIndex];
  if (knownCardIds.has(card.id)) {
    knownCardIds.delete(card.id);
  } else {
    knownCardIds.add(card.id);
  }
  localStorage.setItem('git_known_cards', JSON.stringify([...knownCardIds]));
  updateStats();
  renderFlashcard();
}

function loadSavedKnownCards() {
  try {
    const saved = localStorage.getItem('git_known_cards');
    if (saved) {
      knownCardIds = new Set(JSON.parse(saved));
    }
  } catch(e) {}
}

function updateStats() {
  const knownCountElem = document.getElementById('stat-known-cards');
  if (knownCountElem) {
    knownCountElem.textContent = `${knownCardIds.size}/${FLASHCARDS.length}`;
  }
}

// Keyboard shortcuts for Flashcards: Space = flip, ArrowRight = next, ArrowLeft = prev
document.addEventListener('keydown', (e) => {
  const flashcardTab = document.getElementById('tab-flashcards');
  if (flashcardTab && flashcardTab.style.display !== 'none') {
    if (e.code === 'Space') {
      e.preventDefault();
      flipFlashcard();
    } else if (e.code === 'ArrowRight') {
      nextFlashcard();
    } else if (e.code === 'ArrowLeft') {
      prevFlashcard();
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  loadSavedKnownCards();
  renderFlashcard();
  updateStats();
});
