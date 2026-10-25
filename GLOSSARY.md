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

