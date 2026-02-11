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

