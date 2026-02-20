# Merged Branches - Integration 2026-02-20-03-45

This document tracks all branches merged into the `integration/2026-02-20-03-45` integration branch.

## Branch Merge Table

| # | Branch Name | Remote | Commit Hash | Status |
|---|-------------|--------|-------------|--------|
| 1 | fix/remove-dot-true | origin | c2e2820546 | merged |
| 2 | fix/rfc2119-question-tool | origin | 22023d5d84 | merged |
| 3 | fix/restore-footer | origin | cbab34cf54 | merged |
| 4 | fix/persist-sidebar | origin | cdcd444ea5 | merged |
| 5 | fix/autocompletion-filtered-order | origin | 8d13356896 | merged |
| 6 | fix/modal-menus-filtered-order | origin | b89b0f4ffe | merged |
| 7 | fix/bad-plugin-errors | origin | 5565d20714 | merged |
| 8 | fix/config-package-json-pollution | origin | c3aaa418aa | merged |
| 9 | fix/session-list-viewport-jumping | origin | 84acb2cfce | merged |
| 10 | refactor/shared-substitute | origin | cca000807e | merged |
| 11 | feat/argument-range-syntax | origin | b92b700f34 | merged |
| 12 | feat/opencode-expand | origin | ba68cd6415 | merged |
| 13 | feat/edit-tool-description | origin | 5226f711bd | merged |
| 14 | feat/opeoginni--display-message-tps | origin | 55dc4b5029 | merged |
| 15 | feat/kv-diff-style-clean | origin | d9760d6594 | merged |
| 16 | feat/global-compaction-threshold | origin | 77c978984a | merged |
| 17 | feat/configurable-message-and-session-limit | origin | 2cf16a2b7b | merged |
| 18 | feat/experimental-dont-cache-markdown | origin | aed6d00850 | merged |
| 19 | feat/interjections | origin | 2edf9b9c0e | merged |
| 20 | feat/jsonc-user-themes | origin | 6fe398edf5 | merged |
| 21 | feat/permission-indicator-in-sidebar | origin | 1c209d7a52 | merged |
| 22 | feat/permission-spinner | origin | af7025341b | merged |
| 23 | feat/persist-sidebar-group-folding-states | origin | 8e6ca27d41 | merged |
| 24 | feat/persistant-sidebar-overlay-behaviour | origin | 14745b3d3a | merged |
| 25 | feat/shell-advice | origin | b0ef537262 | merged |
| 26 | feat/elapsed-timer | origin | a9afddb69f | merged |
| 27 | feat/sidebar-no-auto-setting | origin | d05a3d6d19 | merged |
| 28 | feat/set-session-title | origin | a55e1fd3d4 | merged |
| 29 | feat/get-session-title | origin | a0eef05cbb | merged |
| 30 | feat/session-timeline-repeat | origin | a43a79ea6c | merged |
| 31 | feat/automatic-list-continuation | origin | 05b647b37d | merged |
| 32 | feat/continue-command | origin | cf401604d3 | merged |
| 33 | feat/session-bookmarks | origin | f4c16a9341 | merged |
| 34 | fix/dialog-datetime-alignment | origin | 76e33fd110 | merged |
| 35 | feat/keybindable-commands | origin | d5e2eb662e | merged |
| 36 | feat/configurable-snapshot-lifespan | origin | 3c62fd27f8 | merged |
| 37 | feat/configurable-new-plan-mode | origin | 0ed916f8fd | merged |
| 38 | feat/config-imports | origin | 42fe57ab34 | merged |
| 39 | feat/canceled-prompts-in-history | origin | 17b90acb80 | merged |
| 40 | feat/command-palette-consistecy | origin | 13df67511d | merged |
| 41 | feat/no-disabled-lsps-in-sidebar | origin | f5b21c808e | merged |
| 42 | feat/agent-timestamps | origin | 1ccee34b18 | merged |
| 43 | feat/rewind-modal-option | origin | 635d55f0bf | merged |
| 44 | feat/session-grouping | origin | e1d270c6ce | merged |
| 45 | feat/alphabetize-command-palette-groups | origin | 795ee4438d | merged |
| 46 | feat/taller-dialogs | origin | 4ed4e90584 | merged |
| 47 | feat/sinister-quotes | origin | 8c09bbe097 | merged |
| 48 | feature/markdown-renderer | gignit | 4bab5e1e57 | merged |
| 49 | readline-additions | aspiers | 6266800025 | merged |
| 50 | add-bash-env-parameter | taxilian | 1a0c428919 | merged |
| 51 | feat/thinking-indicator-hidden | rcdailey | 0f0c0ba2bd | merged |
| 52 | feat/base-one-rebrand | origin | 3a1cfa265f | merged |

## Merge Log

All 52 branches have been successfully merged into `integration/2026-02-20-03-45`.

### Conflict Resolutions

The following branches required manual conflict resolution:

- **feat/session-grouping**: Conflicts in `dialog-session-list.tsx` and `locale.ts` - combined session_list_limit + bookmarks + grouping features
- **feat/sinister-quotes**: Conflict in `prompt/index.tsx` - kept SINISTER_PLACEHOLDERS import with list continuation
- **feature/markdown-renderer**: Conflicts in `app.tsx` and `session/index.tsx` - combined all toggle commands
- **add-bash-env-parameter**: Conflict in `bash.ts` - combined both env sources (shellEnv.env + params.env)
- **feat/session-bookmarks**: Conflicts in `registry.ts`, `dialog-session-list.tsx`, `session/index.ts`
- **feat/configurable-new-plan-mode**: Conflicts in `config.ts`, `prompt.ts`
- **feat/command-palette-consistecy**: Conflicts in `app.tsx`, `session/index.tsx`
- **feat/no-disabled-lsps-in-sidebar**: Conflict in `sidebar.tsx`
- **feat/agent-timestamps**: Conflict in `session/index.tsx`
- **feat/rewind-modal-option**: Conflict in `openapi.json` - used --theirs

### Final Configuration

- **Theme**: `my-matrix` (set in `.opencode/opencode.jsonc`)
- **VERSION**: `"2026-02-20-03-45"` (hardcoded in `packages/script/src/index.ts`)
- **CHANNEL**: `"2026-02-20-03-45"` (hardcoded fallback in `packages/opencode/src/installation/index.ts`)
- **SemVer Validation**: Updated in `registry.ts` to skip non-semver (date-based) versions
