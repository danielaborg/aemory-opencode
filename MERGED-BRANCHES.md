# Merged Branches - Integration 2026-02-20-09-50

This document lists all branches merged into the integration branch `integration/2026-02-20-09-50`.

## Merge Order

| # | Branch | Source | Commit Hash |
|---|--------|--------|-------------|
| 1 | fix/persist-sidebar | origin | aa5f36f42c |
| 2 | fix/autocompletion-filtered-order | origin | c2f7ba5ed3 |
| 3 | fix/modal-menus-filtered-order | origin | 2c46b2fa68 |
| 4 | fix/bad-plugin-errors | origin | 0f80addf3e |
| 5 | fix/config-package-json-pollution | origin | d96c574e27 |
| 6 | fix/session-list-viewport-jumping | origin | b83a0a23c2 |
| 7 | refactor/shared-substitute | origin | c4f6e8bb09 |
| 8 | feat/argument-range-syntax | origin | 0678ee789f |
| 9 | feat/opencode-expand | origin | cc0ae92f56 |
| 10 | feat/edit-tool-description | origin | e6c8629257 |
| 11 | feat/opeoginni--display-message-tps | origin | 10d6d7e26b |
| 12 | feat/kv-diff-style-clean | origin | 2e69233f5b |
| 13 | feat/global-compaction-threshold | origin | 0d7539370e |
| 14 | feat/configurable-message-and-session-limit | origin | fbe0789424 |
| 15 | feat/experimental-dont-cache-markdown | origin | e12b283a5b |
| 16 | feat/interjections | origin | 1c3db28219 |
| 17 | feat/jsonc-user-themes | origin | c000660a42 |
| 18 | feat/permission-indicator-in-sidebar | origin | 58f47b7cc2 |
| 19 | feat/permission-spinner | origin | cfb8d4533b |
| 20 | feat/persist-sidebar-group-folding-states | origin | 82d82b275f |
| 21 | feat/persistant-sidebar-overlay-behaviour | origin | 8ad51c5382 |
| 22 | feat/shell-advice | origin | 7cd2923321 |
| 23 | feat/elapsed-timer | origin | 71c6af9d79 |
| 24 | feat/sidebar-no-auto-setting | origin | f4eae4a5cf |
| 25 | feat/set-session-title | origin | 2fd3edb416 |
| 26 | feat/get-session-title | origin | 71c6af9d79 |
| 27 | feat/session-timeline-repeat | origin | eb757cf7e1 |
| 28 | feat/automatic-list-continuation | origin | affd0e3265 |
| 29 | feat/continue-command | origin | f395354b70 |
| 30 | feat/session-bookmarks | origin | c074ad4739 |
| 31 | fix/dialog-datetime-alignment | origin | 593372f3de |
| 32 | feat/keybindable-commands | origin | 1f1b02df7a |
| 33 | feat/configurable-snapshot-lifespan | origin | b43c420fb0 |
| 34 | feat/configurable-new-plan-mode | origin | a311c81adc |
| 35 | feat/config-imports | origin | 48b77e03ee |
| 36 | feat/canceled-prompts-in-history | origin | 6349fbde93 |
| 37 | feat/command-palette-consistecy | origin | 0adc36cf7c |
| 38 | feat/no-disabled-lsps-in-sidebar | origin | bf1ebe437e |
| 39 | feat/agent-timestamps | origin | 9fca92348d |
| 40 | feat/rewind-modal-option | origin | a193f52185 |
| 41 | feat/session-grouping | origin | 0b3ccc39e0 |
| 42 | feat/alphabetize-command-palette-groups | origin | 095a0cc632 |
| 43 | feat/taller-dialogs | origin | 76493e8758 |
| 44 | feat/sinister-quotes | origin | efffc97f31 |
| 45 | feature/markdown-renderer | gignit | a8d438a2e5 |
| 46 | readline-additions | aspiers | f5b52c4c8f |
| 47 | add-bash-env-parameter | taxilian | ef30f63f07 |
| 48 | feat/thinking-indicator-hidden | rcdailey | 49b6043739 |
| 49 | feat/base-one-rebrand | origin | 2d2b4d1897 |

## Finishing Touches Applied

1. **Theme Configuration**: Set theme to "my-matrix" in `.opencode/opencode.jsonc`
2. **Version String**: Set VERSION to "2026-02-20-09-50" in `packages/opencode/src/installation/index.ts`
3. **SemVer Validation Fix**: Wrapped semver calls in try-catch in `packages/opencode/src/bun/registry.ts`
4. **Channel Setting**: Set CHANNEL to 'local' in `packages/opencode/script/build.ts`

## Integration Details

- **Base Branch**: `dev`
- **Integration Branch**: `integration/2026-02-20-09-50`
- **Created**: 2026-02-20
- **Total Merges**: 49 branches (37 from origin, 4 from external remotes, 8 additional merges)
