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

