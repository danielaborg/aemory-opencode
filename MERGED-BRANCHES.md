# Merged Branches

This document lists all branches merged into the integration branch `integration/2026-02-18-20-35`.

## Fix Branches (11)

| # | Branch Name | Commit Hash |
|---|-------------|-------------|
| 1 | fix/remove-dot-true | 5e5ff8c8f |
| 2 | fix/rfc2119-question-tool | ce2d8e73f |
| 3 | fix/restore-footer | 6dd55bd5f |
| 4 | fix/persist-sidebar | 983ad8da5 |
| 5 | fix/autocompletion-filtered-order | 24a1b97d7 |
| 6 | fix/modal-menus-filtered-order | 5cd752ecf |
| 7 | fix/config-content-file-write | 2d489113c |
| 8 | fix/bad-plugin-errors | b01a811e5 |
| 9 | fix/config-package-json-pollution | 5b614abfe |
| 10 | fix/session-list-viewport-jumping | a7f3bd7ec |
| 11 | fix/dialog-datetime-alignment | 828e9b16e |

## Refactor Branches (1)

| # | Branch Name | Commit Hash |
|---|-------------|-------------|
| 1 | refactor/shared-substitute | d0f8a1a57 |

## Feature Branches (39)

| # | Branch Name | Commit Hash |
|---|-------------|-------------|
| 1 | feat/argument-range-syntax | 84979db3b |
| 2 | feat/opencode-expand | 9a0ed29c5 |
| 3 | merged/feat/session-delete-switch | 4f68b3dc0 |
| 4 | feat/edit-tool-description | dd9da3822 |
| 5 | feat/kv-diff-style-clean | 6492ac783 |
| 6 | feat/global-compaction-threshold | 32fad4b0f |
| 7 | feat/configurable-message-and-session-limit | 43bf47405 |
| 8 | feat/experimental-dont-cache-markdown | f732add21 |
| 9 | feat/interjections | 1bb27246b |
| 10 | feat/jsonc-user-themes | 623c4e654 |
| 11 | feat/permission-indicator-in-sidebar | 83667009b |
| 12 | feat/permission-spinner | fd37340ed |
| 13 | feat/persist-sidebar-group-folding-states | df165b2a2 |
| 14 | feat/persistant-sidebar-overlay-behaviour | b7ba38be6 |
| 15 | feat/shell-advice | 8483dfeaf |
| 16 | feat/elapsed-timer | 25825e892 |
| 17 | feat/sidebar-no-auto-setting | 4e51c459d |
| 18 | feat/set-session-title | 1483f369e |
| 19 | feat/get-session-title | 8c741f88b |
| 20 | feat/session-timeline-repeat | 573d92909 |
| 21 | feat/automatic-list-continuation | 6820282c9 |
| 22 | feat/continue-command | cf380c8cf |
| 23 | feat/session-bookmarks | fa9255b20 |
| 24 | feat/keybindable-commands | 2320b6faf |
| 25 | feat/configurable-snapshot-lifespan | c19235493 |
| 26 | feat/configurable-new-plan-mode | 4e1a33a37 |
| 27 | feat/config-imports | 34ad66fc0 |
| 28 | feat/canceled-prompts-in-history | 1237af1bd |
| 29 | feat/command-palette-consistecy | 5c86c0370 |
| 30 | feat/no-disabled-lsps-in-sidebar | b645eb5a1 |
| 31 | feat/agent-timestamps | d3c3adb48 |
| 32 | feat/rewind-modal-option | 7177977cb |
| 33 | feat/session-grouping | dfcf8dc16 |
| 34 | feat/alphabetize-command-palette-groups | a624f5e83 |
| 35 | feat/taller-dialogs | 0934da902 |
| 36 | feat/sinister-quotes | 24916b4e5 |
| 37 | feat/opeoginni--display-message-tps | beb1537c7 |
| 38 | feat/thinking-indicator-hidden | b75bbec07 |
| 39 | feat/base-one-rebrand | 0e585bc6c |

## Summary

- **Total Branches Merged:** 51
- **Fix Branches:** 11
- **Refactor Branches:** 1
- **Feature Branches:** 39
- **Integration Branch:** `integration/2026-02-18-20-35`

## Notes

All merges were performed using `git merge --no-ff` to preserve branch history. After each merge, typecheck was run using `bun turbo typecheck` to ensure no TypeScript errors were introduced.

Several branches required manual conflict resolution:
- `feat/argument-range-syntax` - Conflicts in substitute.ts
- `feat/configurable-message-and-session-limit` - Conflicts in config.ts
- `feat/permission-spinner` - Duplicate import error
- `feat/sidebar-no-auto-setting` - Conflicts in 3 files
- `feat/continue-command` - Required SDK regeneration
- `feat/session-bookmarks` - Cleaned up out-of-scope spinner code and deleteKeybind
- `feat/configurable-new-plan-mode` - Conflicts in config.ts and prompt.ts
- `feat/command-palette-consistecy` - Conflicts in app.tsx and session/index.tsx
- `feat/no-disabled-lsps-in-sidebar` - Conflict in sidebar.tsx
- `feat/agent-timestamps` - Conflicts in session/index.tsx
- `feat/session-grouping` - Complex conflicts combining with bookmarks feature
- `feat/sinister-quotes` - Multiple conflicts in prompt/index.tsx
- `feat/opeoginni--display-message-tps` - Conflicts combining elapsed time and TPS features
- `feat/base-one-rebrand` - Removed duplicate BASEONE namespace declarations

The final merge of `feat/base-one-rebrand` required cleanup to remove:
- Duplicate `Flag` namespace declarations
- BASEONE_* environment variable declarations (reverted to OPENCODE_*)
- Unused helper functions (envWithFallback, truthyWithFallback, numberWithFallback)
- Conflicting Object.defineProperty calls
