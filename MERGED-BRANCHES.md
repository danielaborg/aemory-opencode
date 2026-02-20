# Merged Branches - integration/2026-02-20-03-44

This document tracks the branches merged into this integration branch.

## Branches Merged

| # | Branch | Remote | Commit Hash | Status |
|---|--------|--------|-------------|--------|
| 1 | fix/remove-dot-true | origin | 006c350da | Merged |
| 2 | fix/rfc2119-question-tool | origin | 4adaf7a3b | Merged |
| 3 | fix/restore-footer | origin | a5096b43b | Merged |
| 4 | fix/persist-sidebar | origin | 5fcfc8282 | Merged |
| 5 | fix/autocompletion-filtered-order | origin | cea0201ed | Merged |
| 6 | fix/modal-menus-filtered-order | origin | 7e3c9c19f | Merged |
| 7 | fix/bad-plugin-errors | origin | 771f5b33a | Merged |
| 8 | fix/config-package-json-pollution | origin | b0c5732d6 | Merged |
| 9 | fix/session-list-viewport-jumping | origin | f3e81c213 | Merged |
| 10 | refactor/shared-substitute | origin | e9d8f9daa | Merged |
| 11 | feat/argument-range-syntax | origin | ee98f71d8 | Merged |
| 12 | feat/opencode-expand | origin | a174420be | Merged |
| 13 | feat/edit-tool-description | origin | 9fc3d3ac6 | Merged |
| 14 | feat/opeoginni--display-message-tps | origin | 3720ce160 | Merged |
| 15 | feat/kv-diff-style-clean | origin | ff0461a28 | Merged |
| 16 | feat/global-compaction-threshold | origin | 0594c7539 | Merged |
| 17 | feat/configurable-message-and-session-limit | origin | a61cb85f7 | Merged |
| 18 | feat/experimental-dont-cache-markdown | origin | 6695f0eb9 | Merged |
| 19 | feat/interjections | origin | 6a7813264 | Merged |
| 20 | feat/jsonc-user-themes | origin | 3abf8e577 | Merged |
| 21 | feat/permission-indicator-in-sidebar | origin | 462fcdad2 | Merged |
| 22 | feat/permission-spinner | origin | 5c8500769 | Merged |
| 23 | feat/persist-sidebar-group-folding-states | origin | 0b1ad0cd1 | Merged |
| 24 | feat/persistant-sidebar-overlay-behaviour | origin | 3abf8e577 | Merged |
| 25 | feat/shell-advice | origin | 5b81e26c0 | Merged |
| 26 | feat/elapsed-timer | origin | b5d48b070 | Merged |
| 27 | feat/sidebar-no-auto-setting | origin | 2f92f4b23 | Merged |
| 28 | feat/set-session-title | origin | 6ee55f336 | Merged |
| 29 | feat/get-session-title | origin | d6fc58548 | Merged |
| 30 | feat/session-timeline-repeat | origin | a0a08e7fc | Merged |
| 31 | feat/automatic-list-continuation | origin | 84a562d6c | Merged |
| 32 | feat/continue-command | origin | e3ba19d37 | Merged |
| 33 | feat/session-bookmarks | origin | 93c5b0f46 | Merged |
| 34 | fix/dialog-datetime-alignment | origin | 76208a675 | Merged |
| 35 | feat/keybindable-commands | origin | 69a08e6a1 | Merged |
| 36 | feat/configurable-snapshot-lifespan | origin | 5bb9e8076 | Merged |
| 37 | feat/configurable-new-plan-mode | origin | 96d99e637 | Merged |
| 38 | feat/config-imports | origin | b4a635a92 | Merged |
| 39 | feat/canceled-prompts-in-history | origin | 49cb07ceb | Merged |
| 40 | feat/command-palette-consistecy | origin | ba0275dca | Merged |
| 41 | feat/no-disabled-lsps-in-sidebar | origin | 5a912abc0 | Merged |
| 42 | feat/agent-timestamps | origin | c7324bab5 | Merged |
| 43 | feat/rewind-modal-option | origin | 625d2757f | Merged |
| 44 | feat/session-grouping | origin | d9b7d5ad3 | Merged |
| 45 | feat/alphabetize-command-palette-groups | origin | f02c289bb | Merged |
| 46 | feat/taller-dialogs | origin | c61636fbf | Merged |
| 47 | feat/sinister-quotes | origin | 17da6791b | Merged |
| 48 | feature/markdown-renderer | gignit | 3323d406b | Merged |
| 49 | readline-additions | aspiers | 8c847fca7 | Merged |
| 50 | add-bash-env-parameter | taxilian | 85a67f608 | Merged |
| 51 | feat/thinking-indicator-hidden | rcdailey | 8335aa993 | Merged |
| 52 | feat/base-one-rebrand | origin | 073e35dd0 | Merged |

## Merge Log

### 2026-02-20

Integration branch created from dev and all 52 branches merged in sequence. Type checking passed after each merge.

**Summary:**
- Total branches merged: 52
- From origin: 48 branches
- From foreign remotes: 4 branches
- Integration branch: integration/2026-02-20-03-44

## Configuration Changes

- Theme set to `my-matrix` in `.opencode/opencode.jsonc`
- SemVer validation fixed in `packages/opencode/src/bun/registry.ts` to handle non-SemVer version strings
