# Merged Branches - integration/2026-02-20-03-44

This document tracks the branches merged into this integration branch.

## Summary

- **Total branches merged**: 58
- **Integration branch**: integration/2026-02-20-03-44

## Branches Merged

| # | Branch | Type |
|---|--------|------|
| 1 | fix/remove-dot-true | fix |
| 2 | fix/rfc2119-question-tool | fix |
| 3 | fix/restore-footer | fix |
| 4 | fix/persist-sidebar | fix |
| 5 | fix/autocompletion-filtered-order | fix |
| 6 | fix/modal-menus-filtered-order | fix |
| 7 | fix/bad-plugin-errors | fix |
| 8 | fix/config-package-json-pollution | fix |
| 9 | fix/session-list-viewport-jumping | fix |
| 10 | refactor/shared-substitute | refactor |
| 11 | feat/argument-range-syntax | feat |
| 12 | feat/opencode-expand | feat |
| 13 | feat/edit-tool-description | feat |
| 14 | feat/opeoginni--display-message-tps | feat |
| 15 | feat/agent-descriptions-in-autocomplete | feat |
| 16 | feat/automatic-list-continuation | feat |
| 17 | feat/base-one-rebrand | feat |
| 18 | feat/config-imports | feat |
| 19 | feat/configurable-message-and-session-limit | feat |
| 20 | feat/configurable-new-plan-mode | feat |
| 21 | feat/configurable-recent-models-limit | feat |
| 22 | feat/configurable-snapshot-lifespan | feat |
| 23 | feat/continue-command | feat |
| 24 | feat/dynamic-console-toggle-text | feat |
| 25 | feat/elapsed-timer | feat |
| 26 | feat/get-session-title | feat |
| 27 | feat/gignit--markdown-render | feat |
| 28 | feat/keybindable-commands | feat |
| 29 | feat/markdown-frontmatter-interpolation | feat |
| 30 | feat/session-bookmarks | feat |
| 31 | feat/session-id-in-status | feat |
| 32 | feat/session-timeline-repeat | feat |
| 33 | feat/set-session-title | feat |
| 34 | feat/sidebar-no-auto-setting | feat |
| 35 | feat/thinking-indicator-hidden | feat |
| 36 | feat/total-diff-count | feat |
| 37 | fix/bad-plugin-errors-with-desktop | fix |
| 38 | fix/repair-disable-copy-on-select | fix |
| 39 | feat/agent-timestamps | feat |
| 40 | feat/alphabetize-command-palette-groups | feat |
| 41 | feat/canceled-prompts-in-history | feat |
| 42 | feat/command-palette-consistecy | feat |
| 43 | feat/experimental-dont-cache-markdown | feat |
| 44 | feat/global-compaction-threshold | feat |
| 45 | feat/interjections | feat |
| 46 | feat/jsonc-user-themes | feat |
| 47 | feat/kv-diff-style-clean | feat |
| 48 | feat/no-disabled-lsps-in-sidebar | feat |
| 49 | feat/permission-indicator-in-sidebar | feat |
| 50 | feat/permission-spinner | feat |
| 51 | feat/persist-sidebar-group-folding-states | feat |
| 52 | feat/persistant-sidebar-overlay-behaviour | feat |
| 53 | feat/rewind-modal-option | feat |
| 54 | feat/session-grouping | feat |
| 55 | feat/shell-advice | feat |
| 56 | feat/sinister-quotes | feat |
| 57 | feat/taller-dialogs | feat |
| 58 | fix/dialog-datetime-alignment | fix |

## Notable Changes

### Conflict Resolutions
- `refactor/shared-substitute` + `feat/argument-range-syntax`: Combined extended placeholder syntax (${N:M}) with simplified substitution logic
- `feat/configurable-new-plan-mode`: Added `plan_mode` config option alongside existing `context_compaction_threshold`
- `feat/configurable-recent-models-limit`: Added `recent_models_count` alongside `session_list_limit` and `messages_limit`
- `feat/session-bookmarks`: Combined bookmark functionality with session grouping
- Multiple `prompt/index.tsx` conflicts resolved to keep sinister-quotes and list-continuation features

### SDK Regenerations
- SDK regenerated to include `startupErrors` method (fix/bad-plugin-errors)
- SDK regenerated to include `continue` endpoint (feat/continue-command)
- SDK regenerated for `recent_models_count` config

### Bug Fixes Applied
- Fixed semver validation in `registry.ts` (wrapped in try-catch since Bun's semver lacks `valid` method)
- Fixed test config missing `cache_command_markdown_files` property
- Removed duplicate `update` function in `session/index.ts`
