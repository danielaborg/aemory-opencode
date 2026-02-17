# Integration Branch: 2026-02-17-14-05

This branch merges all feature and fix branches from the official branch list into `dev`.

## Origin Fix Branches (9 merged)

| Branch | Commit |
|--------|--------|
| fix/remove-dot-true | 37b957495 |
| fix/rfc2119-question-tool | ebbc3d69b |
| fix/restore-footer | f3fe5b8cb |
| fix/persist-sidebar | 2169d51bd |
| fix/autocompletion-filtered-order | a6750d6df |
| fix/modal-menus-filtered-order | c6bd3e6ab |
| fix/config-content-file-write | 19b2491b8 |
| fix/bad-plugin-errors | f09b2cbd0 |
| fix/config-package-json-pollution | cd9bc346e |

## Origin Refactor Branches (1 merged)

| Branch | Commit |
|--------|--------|
| refactor/shared-substitute | 69dd33877 |

## Origin Feat Branches (25 merged)

| Branch | Commit |
|--------|--------|
| feat/argument-range-syntax | 837ce9e41 |
| feat/opencode-expand | f4e36794c |
| merged/feat/session-delete-switch | 2d8856b98 |
| feat/edit-tool-description | 2de2cce4a |
| feat/opeoginni--display-message-tps | 76176e235 |
| feat/kv-diff-style-clean | 3420ec34f |
| feat/global-compaction-threshold | 57fc08e00 |
| feat/configurable-message-and-session-limit | 3d0c23325 |
| feat/experimental-dont-cache-markdown | ddeef9836 |
| feat/interjections | 4d2ef2210 |
| feat/jsonc-user-themes | b055209da |
| feat/permission-indicator-in-sidebar | 57d6986a2 |
| feat/permission-spinner | 721d44db1 |
| feat/persist-sidebar-group-folding-states | 88759ede8 |
| feat/sinister-quotes | 4a50d7ea3 |
| feat/keybindable-commands | 9360b458d |
| feat/base-one-rebrand | b5b650f26 |
| feat/elapsed-timer | e28ecfbff |
| feat/sidebar-no-auto-setting | 58d6ab90c |
| feat/set-session-title | d720b6947 |
| feat/get-session-title | c20b7e358 |
| feat/session-timeline-repeat | 3640c3704 |
| feat/automatic-list-continuation | c6953e646 |
| feat/continue-command | 1fe92aa3d |
| feat/session-bookmarks | 23fa5f52a |
| fix/dialog-datetime-alignment | 9d2b2187d |
| feat/configurable-snapshot-lifespan | 4032031ee |
| feat/configurable-new-plan-mode | 438980fa3 |
| feat/config-imports | 31f2bee0d |
| feat/canceled-prompts-in-history | ee2401fa0 |
| feat/no-disabled-lsps-in-sidebar | 1bdbcc14d |
| feat/pschiel--timeline-tokens | f108bd07a |

## Additional Origin Feat Branches (2 merged)

| Branch | Commit |
|--------|--------|
| feat/shell-advice | 7de7f4598 |
| feat/persistant-sidebar-overlay-behaviour | d85dacfe6 |

## Foreign Remote Branches (4 merged)

| Branch | Remote | Commit |
|--------|--------|--------|
| feature/markdown-renderer | gignit | bf4bb01c0 |
| readline-additions | aspiers | f4f033e77 |
| add-bash-env-parameter | taxilian | b273c9891 |
| feat/thinking-indicator-hidden | rcdailey | a81ec5a7d |

## Total: 39 branches merged

## Finishing Touches

- Set theme to "my-matrix" in `.opencode/opencode.jsonc`
- Hardcoded VERSION to "2026-02-17-14-05" in `installation/index.ts`
- Added try-catch for SemVer operations in `bun/registry.ts`

## Conflicts Resolved

1. **feat/argument-range-syntax**: `substitute.ts` and `prompt.ts`
2. **feat/configurable-message-and-session-limit**: `config.ts`
3. **feat/interjections**: `session/index.tsx`
4. **feat/sinister-quotes**: `prompt/index.tsx` (used SINISTER_PLACEHOLDERS import)
5. **taxilian/add-bash-env-parameter**: `bash.ts` (merged both shellEnv.env and params.env)
6. **feat/base-one-rebrand**: `flag/flag.ts` (merged BASEONE_* flags with fallback support)
7. **feat/keybindable-commands**: `permission.tsx` (removed duplicate useKV import)
8. **feat/elapsed-timer**: `session/index.tsx` (merged TPS display with elapsed time)
9. **feat/sidebar-no-auto-setting**: `config.ts`
10. **feat/session-timeline-repeat**: `dialog-timeline.tsx`
11. **feat/session-bookmarks**: `sidebar.tsx`
12. **feat/configurable-new-plan-mode**: `config.ts`
13. **feat/canceled-prompts-in-history**: Multiple files
14. **feat/no-disabled-lsps-in-sidebar**: `sidebar.tsx`
15. **feat/pschiel--timeline-tokens**: `dialog-timeline.tsx`, `index.tsx`, `dialog-select.tsx` (used moveToValue with scroll)
