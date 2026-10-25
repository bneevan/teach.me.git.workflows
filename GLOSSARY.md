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
