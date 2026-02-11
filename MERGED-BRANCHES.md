# Merged Branches - integration/2026-02-10-18-47

## Branch Summary

| # | Branch | Remote | Commit Hash | Status |
|---|--------|--------|-------------|--------|
| 1 | feature/markdown-renderer | gignit | 4521827aa4 | Merged |
| 2 | readline-additions | aspiers | a18b09cffd | Merged |
| 3 | add-bash-env-parameter | taxilian | 5eefa62b95 | Merged |
| 4 | feat/thinking-indicator-hidden | rcdailey | 6c0f983f67 | Merged |
| 5 | fix/remove-dot-true | origin | c3f9211d8f | Merged |
| 6 | fix/rfc2119-question-tool | origin | 6c5481e9ff | Merged |
| 7 | fix/persist-sidebar | origin | 690162bbb0 | Merged |
| 8 | fix/autocompletion-filtered-order | origin | cef2b164a3 | Merged |
| 9 | fix/modal-menus-filtered-order | origin | 663e9d1d8c | Merged |
| 10 | feat/edit-tool-description | origin | d78cb7deb2 | Merged |
| 11 | feat/opeoginni--display-message-tps | origin | 943f77123d | Merged |
| 12 | feat/kv-diff-style-clean | origin | 0066d89e0a | Merged |
| 13 | feat/global-compaction-threshold | origin | 848e3d1461 | Merged |
| 14 | feat/configurable-message-limit-wip | origin | 2c0cf3bd0b | Merged |
| 15 | feat/experimental-dont-cache-markdown | origin | f9675c7f1c | Merged |
| 16 | feat/interjections | origin | 9b9690f790 | Merged |
| 17 | feat/jsonc-user-themes | origin | 45d0394c55 | Merged |
| 18 | feat/permission-indicator-in-sidebar | origin | d99c93a869 | Merged |
| 19 | feat/permission-spinner | origin | 397e9aaef6 | Merged |
| 20 | feat/persist-sidebar-group-folding-states | origin | 1e61a33ea4 | Merged |
| 21 | feat/persistant-sidebar-overlay-behaviour | origin | 2173fc7bec | Merged |
| 22 | feat/shell-advice | origin | 4e197a5878 | Merged |
| 23 | feat/elapsed-timer | origin | 0a545df3cf | Merged |
| 24 | feat/opencode-expand | origin | 831b159713 | Merged |
| 25 | feat/sidebar-no-auto-setting | origin | 218000e19f | Merged |
| 26 | feat/set-session-title | origin | eb1ed769a1 | Merged |
| 27 | feat/get-session-title | origin | 1e34844dfd | Merged |
| 28 | feat/session-timeline-repeat | origin | e993eccdb5 | Merged |
| 29 | feat/automatic-list-continuation | origin | 0eb70df18d | Merged |
| 30 | feat/continue-command | origin | c048539961 | Merged |
| 31 | feat/session-bookmarks | origin | e4fe40b733 | Merged |
| 32 | fix/dialog-datetime-alignment | origin | e97a5c65f6 | Merged |
| 33 | feat/keybindable-commands | origin | 6a7922aad3 | Merged |
| 34 | feat/configurable-snapshot-lifespan | origin | 5c572eaece | Merged |
| 35 | feat/configurable-new-plan-mode | origin | 991469f8ba | Merged |
| 36 | feat/config-imports | origin | 3f3492b264 | Merged |
| 37 | feat/canceled-prompts-in-history | origin | 339a4ac3ea | Merged |
| 38 | feat/sinister-quotes | origin | f3254588fe | Merged |
| 39 | feat/base-one-rebrand | origin | 8bfc2c205e | Merged |

## Merge Log

### 1. feature/markdown-renderer (gignit remote)
- **Commit**: 4521827aa4
- **Result**: Merged successfully (no conflicts)
- **Files changed**: 6 (markdown-renderer.ts, theme-loader.ts, session/index.tsx, run.ts, app.tsx, ui.ts)

### 2. readline-additions (aspiers remote)
- **Commit**: a18b09cffd
- **Result**: Merged successfully (no conflicts, auto-merged config.ts, types.gen.ts, keybinds.mdx)
- **Files changed**: 5 (prompt/index.tsx, config.ts, text-transform.test.ts, types.gen.ts, keybinds.mdx)

### 3. add-bash-env-parameter (taxilian remote)
- **Commit**: 5eefa62b95
- **Result**: Merged with conflict in bash.ts (resolved: kept both shellEnv.env and params.env spreads)
- **Files changed**: 3 (bash.ts, bash.txt, bash.test.ts)

### 4. feat/thinking-indicator-hidden (rcdailey remote)
- **Commit**: 6c0f983f67
- **Result**: Merged successfully (auto-merged session/index.tsx)
- **Files changed**: 1 (session/index.tsx)

### 5. fix/remove-dot-true (origin)
- **Commit**: c3f9211d8f
- **Result**: Merged successfully (auto-merged config.ts)
- **Files changed**: 3 (config.ts, skill.ts, registry.ts)

### 6. fix/rfc2119-question-tool (origin)
- **Commit**: 6c5481e9ff
- **Result**: Merged successfully (no conflicts)
- **Files changed**: 1 (question.txt)

### 7. fix/persist-sidebar (origin)
- **Commit**: 690162bbb0
- **Result**: Merged successfully (auto-merged session/index.tsx)
- **Files changed**: 2 (kv.tsx, session/index.tsx)

### 8. fix/autocompletion-filtered-order (origin)
- **Commit**: cef2b164a3
- **Result**: Merged with conflict in prompt/index.tsx (resolved: kept readline text transformation functions from HEAD)
- **Files changed**: 1 (prompt/index.tsx)

### 9. fix/modal-menus-filtered-order (origin)
- **Commit**: 663e9d1d8c
- **Result**: Merged successfully (no conflicts)
- **Files changed**: 1 (sdk.gen.ts)

### 10. feat/edit-tool-description (origin)
- **Commit**: d78cb7deb2
- **Result**: Merged successfully (no conflicts)
- **Files changed**: 1 (edit.txt)

### 11. feat/opeoginni--display-message-tps (origin)
- **Commit**: 943f77123d
- **Result**: Merged successfully (no conflicts)
- **Files changed**: 3 (config.ts, types.gen.ts, session/index.tsx)

### 12. feat/kv-diff-style-clean (origin)
- **Commit**: 0066d89e0a
- **Result**: Merged with conflict in config.ts (resolved: removed diff_style per branch intent, kept display_message_tps)
- **Files changed**: 4 (config.ts, types.gen.ts, kv.tsx, diff.tsx)

### 13. feat/global-compaction-threshold (origin)
- **Commit**: 848e3d1461
- **Result**: Merged successfully (no conflicts)
- **Files changed**: 3 (config.ts, types.gen.ts, session.ts)

### 14. feat/configurable-message-limit-wip (origin)
- **Commit**: 2c0cf3bd0b
- **Result**: Merged with conflict in config.ts (resolved: kept display_message_tps, added session_list_limit + messages_limit; fixed duplicate export type TUI)
- **Files changed**: 5 (config.ts, types.gen.ts, session/index.tsx, list.tsx, session.ts)

### 15. feat/experimental-dont-cache-markdown (origin)
- **Commit**: f9675c7f1c
- **Result**: Merged successfully (no conflicts)
- **Files changed**: 1 (markdown-renderer.ts)

### 16. feat/interjections (origin)
- **Commit**: 9b9690f790
- **Result**: Merged successfully (no conflicts)
- **Files changed**: 4 (config.ts, types.gen.ts, session/index.tsx, prompt/index.tsx)

### 17. feat/jsonc-user-themes (origin)
- **Commit**: 45d0394c55
- **Result**: Merged successfully (no conflicts)
- **Files changed**: 2 (theme.ts, config.ts)

### 18. feat/permission-indicator-in-sidebar (origin)
- **Commit**: d99c93a869
- **Result**: Merged successfully (no conflicts)
- **Files changed**: 2 (sidebar.tsx, permission.tsx)

### 19. feat/permission-spinner (origin)
- **Commit**: 397e9aaef6
- **Result**: Merged successfully (fixed duplicate useKV import in permission.tsx)
- **Files changed**: 1 (permission.tsx)

### 20. feat/persist-sidebar-group-folding-states (origin)
- **Commit**: 1e61a33ea4
- **Result**: Merged successfully (no conflicts)
- **Files changed**: 2 (sidebar.tsx, kv.tsx)

### 21. feat/persistant-sidebar-overlay-behaviour (origin)
- **Commit**: 2173fc7bec
- **Result**: Merged successfully (no conflicts)
- **Files changed**: 3 (sidebar.tsx, kv.tsx, session/index.tsx)

### 22. feat/shell-advice (origin)
- **Commit**: 4e197a5878
- **Result**: Merged successfully (no conflicts)
- **Files changed**: Shell advice feature files

### 23. feat/elapsed-timer (origin)
- **Commit**: 0a545df3cf
- **Result**: Merged with conflicts in prompt/index.tsx and session/index.tsx (resolved: kept HEAD text-transform functions, kept both TPS + elapsed timer code)
- **Files changed**: prompt/index.tsx, session/index.tsx

### 24. feat/opencode-expand (origin)
- **Commit**: 831b159713
- **Result**: Merged successfully (no conflicts)
- **Files changed**: Expand feature files

### 25. feat/sidebar-no-auto-setting (origin)
- **Commit**: 218000e19f
- **Result**: Merged with conflicts in config.ts, session/index.tsx, types.gen.ts (resolved: kept both sides — session_list_limit, messages_limit, no_sidebar_auto)
- **Files changed**: config.ts, session/index.tsx, types.gen.ts

### 26. feat/set-session-title (origin)
- **Commit**: eb1ed769a1
- **Result**: Merged successfully (no conflicts)
- **Files changed**: Set session title tool files

### 27. feat/get-session-title (origin)
- **Commit**: 1e34844dfd
- **Result**: Merged successfully (no conflicts)
- **Files changed**: Get session title tool files

### 28. feat/session-timeline-repeat (origin)
- **Commit**: e993eccdb5
- **Result**: Merged with conflict in prompt/index.tsx (resolved: kept HEAD text-transform functions)
- **Files changed**: prompt/index.tsx, session timeline files

### 29. feat/automatic-list-continuation (origin)
- **Commit**: 0eb70df18d
- **Result**: Merged successfully (no conflicts)
- **Files changed**: List continuation feature files

### 30. feat/continue-command (origin)
- **Commit**: c048539961
- **Result**: Merged successfully (fixed type error: SessionPrompt.loop(sessionID) -> SessionPrompt.loop({ sessionID }))
- **Files changed**: session.ts, continue command files

### 31. feat/session-bookmarks (origin)
- **Commit**: e4fe40b733
- **Result**: Merged with conflicts in dialog-session-list.tsx and registry.ts (resolved: kept both imports, combined bookmarks UI with session_list_limit)
- **Files changed**: dialog-session-list.tsx, registry.ts, app.tsx, kv.tsx, session.ts, session/index.ts, sdk.gen.ts, types.gen.ts

### 32. fix/dialog-datetime-alignment (origin)
- **Commit**: e97a5c65f6
- **Result**: Merged successfully (auto-merged locale.ts)
- **Files changed**: locale.ts

### 33. feat/keybindable-commands (origin)
- **Commit**: 6a7922aad3
- **Result**: Merged successfully (auto-merged app.tsx, config.ts, types.gen.ts)
- **Files changed**: app.tsx, keybind.tsx, config.ts, types.gen.ts

### 34. feat/configurable-snapshot-lifespan (origin)
- **Commit**: 5c572eaece
- **Result**: Merged successfully (auto-merged config.ts, types.gen.ts)
- **Files changed**: config.ts, snapshot/index.ts, snapshot.test.ts, types.gen.ts

### 35. feat/configurable-new-plan-mode (origin)
- **Commit**: 991469f8ba
- **Result**: Merged with conflict in config.ts (resolved: kept both loadThemeFile and experimentalPlanMode functions)
- **Files changed**: config.ts, prompt.ts, registry.ts

### 36. feat/config-imports (origin)
- **Commit**: 3f3492b264
- **Result**: Merged successfully (auto-merged config.ts, config.test.ts)
- **Files changed**: config.ts, config.test.ts, config.mdx

### 37. feat/canceled-prompts-in-history (origin)
- **Commit**: 339a4ac3ea
- **Result**: Merged with conflict in app.tsx (resolved: kept both markdown toggle and prompt history toggle menu items)
- **Files changed**: app.tsx, prompt/index.tsx

### 38. feat/sinister-quotes (origin)
- **Commit**: f3254588fe
- **Result**: Merged with conflicts in prompt/index.tsx (4 regions resolved: kept text-transform functions, imported SINISTER_PLACEHOLDERS, kept list continuation, added placeholder resize effect, used sinister placeholder format)
- **Files changed**: prompt/index.tsx, prompt-input.tsx, placeholders constants

### 39. feat/base-one-rebrand (origin)
- **Commit**: 8bfc2c205e
- **Result**: Merged successfully (auto-merged app.tsx, sidebar.tsx, config.ts, index.ts)
- **Files changed**: 22 files (rebrand from opencode to base-one naming)
