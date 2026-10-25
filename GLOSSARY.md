# Git Workflows & Architecture Glossary

Canonical terminology and precise definitions for Git collaboration workflows and repository architecture.

## Graph Topology & Core Primitives

**Directed Acyclic Graph (DAG)**:
A finite mathematical network of commit nodes connected by one-way parent reference edges that cannot form closed loops.
_Avoid_: Tree graph, commit history list

**Commit**:
An immutable, content-addressed snapshot object containing metadata (author, timestamp, message), a pointer to a root directory tree, and pointers to zero, one, or more parent commit hashes.
_Avoid_: Diff delta, code patch

**Branch**:
A lightweight, 41-byte movable reference file containing the hexadecimal commit hash representing the tip of a line of development.
_Avoid_: Folder copy, sub-directory

**Parent Pointer**:
A one-way reference stored inside a commit object that points backward in time to its immediate ancestor commit(s).
_Avoid_: Child reference, forward link

## Integration & Merging Mechanics

**Fast-Forward Merge**:
Moving a branch pointer directly forward along an existing linear chain of commits without creating a new merge commit.
_Avoid_: Straight merge, auto-forward

**Three-Way Merge**:
An integration of two diverging commit chains that finds their common ancestor and generates a new commit with two parents.
_Avoid_: Diamond merge, multi-merge

**Rebase**:
An operation that reapplies commits from one branch on top of another base tip, creating new commits with new hashes and a linear history.
_Avoid_: Replaying, history flattening

**Non-Fast-Forward Rejection**:
A push rejection enforced by a Git server when the incoming commit does not have the current remote tip in its direct ancestor chain.
_Avoid_: Push collision, write conflict

**Squash and Merge**:
A merge operation that takes all commits on a branch, squashes their tree changes into a single new commit, and appends it to the target branch.
_Avoid_: Commit squishing, branch compaction

**Atomic Commit**:
A single commit that encapsulates one complete, indivisible logical change with its accompanying tests and documentation, leaving the test suite green.
_Avoid_: Megacommit, batch commit

## Forensic & Investigation Tools

**Git Bisect**:
A debugging tool that performs a binary search between a known good commit and a known bad commit to identify the exact commit that introduced a defect.
_Avoid_: Step-through debug, commit search

**Git Reflog**:
A local ledger that records every update to local references and the HEAD pointer, allowing recovery of abandoned commits or undone rebases.
_Avoid_: Git undo log, commit history backup

## Governance & High-Velocity Branching

**Branch Protection Rules**:
Server-side constraints enforced on designated branches that require peer review approvals, passing CI checks, and linear history before changes can be integrated.
_Avoid_: Branch locks, merge permissions

**Git Revert**:
A forward-moving rollback operation that records a new commit containing the exact inverse changes of a targeted commit, preserving unbroken history.
_Avoid_: Undo commit, roll-back command

**Trunk-Based Development (TBD)**:
A branching pattern where all developers merge short-lived feature branches (< 24 hours) directly into a single shared trunk, supported by fast automated testing.
_Avoid_: Master-only development, trunkline

**Feature Flag (Feature Toggle)**:
A software engineering mechanism that wraps unreleased code in a conditional check, enabling code deployment to production while hiding functionality from end users.
_Avoid_: Feature switch, config flag

**Branch by Abstraction**:
A refactoring technique that introduces an abstraction layer around legacy code, builds a new implementation alongside it in trunk, and flips the dependency once ready.
_Avoid_: In-place replacement, refactor branch



