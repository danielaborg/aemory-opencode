# Merged Branches Log

Integration branch: `integration/2026-02-11-15-09`
Created from: `dev`
Date: 2026-02-11

## Merge Summary

| Branch | Commit Hash | Status | Notes |
|--------|-------------|--------|-------|
| fix/remove-dot-true | c3f9211d8f | Merged | Removed `.true` property |
| fix/rfc2119-question-tool | 85898f04b2 | Merged | RFC2119 keyword handling in question tool |
| fix/persist-sidebar | 690162bbb0 | Merged | Sidebar persistence fix with show/hide/auto |
| fix/autocompletion-filtered-order | cef2b164a3 | Merged | Fixed autocompletion filtered order |
| fix/modal-menus-filtered-order | 663e9d1d8c | Merged | Fixed modal menus filtered order |
| feat/edit-tool-description | f5841d3fee | Merged | Added edit tool description |
| feat/opeoginni--display-message-tps | dd6c7976f6 | Merged | Display tokens per second in message footer |
| feat/kv-diff-style-clean | 21ccf764e9 | Merged | Clean diff style configuration |
| feat/global-compaction-threshold | 848e3d1461 | Merged | Configurable global compaction threshold |
| feat/configurable-message-limit-wip | 0a6c52b943 | Merged | Configurable message limit |
| feat/experimental-dont-cache-markdown | 4c3a8d3284 | Merged | Experimental markdown caching option |
| feat/interjections | d55465fe94 | Merged | Interjections support |
| feat/jsonc-user-themes | 45d0394c55 | Merged | JSONC user themes support |
| feat/permission-indicator-in-sidebar | 8fdccd41b8 | Merged | Permission indicator in sidebar |
| feat/permission-spinner | dc889f2c6b | Merged | Permission spinner animation |
| feat/persist-sidebar-group-folding-states | 1e61a33ea4 | Merged | Sidebar group folding state persistence |
| feat/persistant-sidebar-overlay-behaviour | 2173fc7bec | Merged | Persistent sidebar overlay behavior |
| feat/shell-advice | 4e197a5878 | Merged | Shell advice feature |
| feat/elapsed-timer | f525d43537 | Merged | Elapsed timer for in-progress messages |
| feat/opencode-expand | 6ff2d95330 | Merged | OpenCode expand feature |
| feat/sidebar-no-auto-setting | 2fba109e53 | Merged | No sidebar auto setting |
| feat/set-session-title | eb1ed769a1 | Merged | Set session title tool |
| feat/get-session-title | a88ccc7f58 | Merged | Get session title tool |
| feat/session-timeline-repeat | e993eccdb5 | Merged | Session timeline repeat |
| feat/automatic-list-continuation | 15709193a1 | Merged | Automatic list continuation |
| feat/continue-command | 58b38e48ac | Merged | Continue command feature |
| feat/session-bookmarks | 212dc4e1ee | Merged | Session bookmarks feature |
| fix/dialog-datetime-alignment | 322ce08c6d | Merged | Dialog datetime alignment fix |
| feat/keybindable-commands | 5b34ff0954 | Merged | Keybindable commands configuration |
| feat/configurable-snapshot-lifespan | aba59c2cc8 | Merged | Configurable snapshot lifespan |
| feat/configurable-new-plan-mode | 1d611baa60 | Merged | Configurable new plan mode |
| feat/config-imports | e6a0a8021b | Merged | Config imports feature |
| feat/canceled-prompts-in-history | 3f37b43e7d | Merged | Canceled prompts in history |
| feat/sinister-quotes | f206275904 | Merged | Sinister quotes placeholders |
| feature/markdown-renderer (gignit) | 4521827aa4 | Merged | Markdown renderer from gignit remote |
| readline-additions (aspiers) | a18b09cffd | Merged | Readline additions from aspiers remote |
| add-bash-env-parameter (taxilian) | 5eefa62b95 | Merged | Add bash env parameter from taxilian remote |
| feat/thinking-indicator-hidden | 6c0f983f67 | Merged | Thinking indicator hidden |
| feat/base-one-rebrand | 8ff1874b00 | Merged | Base One rebrand |

## Merge Log

### 1. fix/remove-dot-true (c3f9211d8f)
- Status: Merged successfully
- No conflicts
- Removed `.true` property from config

### 2. fix/rfc2119-question-tool (85898f04b2)
- Status: Merged successfully
- No conflicts
- Updated question tool for RFC2119 keywords

### 3. fix/persist-sidebar (690162bbb0)
- Status: Merged with conflict resolution
- Conflict: session/index.tsx - sidebar type definition
- Resolution: Combined "show" | "hide" | "auto" types

### 4. fix/autocompletion-filtered-order (cef2b164a3)
- Status: Merged with conflict resolution
- Conflict: prompt/index.tsx - placeholder handling
- Resolution: Kept placeholderText() function and SHELL_PLACEHOLDERS

### 5. fix/modal-menus-filtered-order (663e9d1d8c)
- Status: Merged successfully
- No conflicts

### 6. feat/edit-tool-description (f5841d3fee)
- Status: Merged successfully
- No conflicts

### 7. feat/opeoginni--display-message-tps (dd6c7976f6)
- Status: Merged successfully
- No conflicts
- Added TPS display in message footer

### 8. feat/kv-diff-style-clean (21ccf764e9)
- Status: Merged with conflict resolution
- Conflict: config/config.ts
- Resolution: Combined diff_style and display_message_tps options

### 9. feat/global-compaction-threshold (848e3d1461)
- Status: Merged with conflict resolution
- Conflict: session/compaction.ts
- Resolution: Combined reserved tokens calculation with threshold multiplier

### 10. feat/configurable-message-limit-wip (0a6c52b943)
- Status: Merged with conflict resolution
- Conflict: config/config.ts
- Resolution: Added session_list_limit and messages_limit options

### 11. feat/experimental-dont-cache-markdown (4c3a8d3284)
- Status: Merged successfully
- No conflicts

### 12. feat/interjections (d55465fe94)
- Status: Merged successfully
- No conflicts

### 13. feat/jsonc-user-themes (45d0394c55)
- Status: Merged successfully
- No conflicts
- Added theme loading and parsing support

### 14. feat/permission-indicator-in-sidebar (8fdccd41b8)
- Status: Merged successfully
- No conflicts

### 15. feat/permission-spinner (dc889f2c6b)
- Status: Merged with conflict resolution
- Conflict: permission.tsx - duplicate useKV import
- Resolution: Removed duplicate import

### 16. feat/persist-sidebar-group-folding-states (1e61a33ea4)
- Status: Merged successfully
- No conflicts

### 17. feat/persistant-sidebar-overlay-behaviour (2173fc7bec)
- Status: Merged successfully
- No conflicts

### 18. feat/shell-advice (4e197a5878)
- Status: Merged successfully
- No conflicts

### 19. feat/elapsed-timer (f525d43537)
- Status: Merged with conflict resolution
- Conflict: session/index.tsx
- Resolution: Combined TPS and elapsed timer features

### 20. feat/opencode-expand (6ff2d95330)
- Status: Merged successfully
- No conflicts

### 21. feat/sidebar-no-auto-setting (2fba109e53)
- Status: Merged with conflict resolution
- Conflicts: session/index.tsx, config/config.ts, types.gen.ts
- Resolution: Added no_sidebar_auto config option

### 22. feat/set-session-title (eb1ed769a1)
- Status: Merged successfully
- No conflicts

### 23. feat/get-session-title (a88ccc7f58)
- Status: Merged successfully
- No conflicts

### 24. feat/session-timeline-repeat (e993eccdb5)
- Status: Merged with conflict resolution
- Conflicts: prompt/index.tsx - placeholder handling
- Resolution: Kept placeholderText() and SHELL_PLACEHOLDERS

### 25. feat/automatic-list-continuation (15709193a1)
- Status: Merged successfully
- No conflicts

### 26. feat/continue-command (58b38e48ac)
- Status: Merged with fix
- Fix: SessionPrompt.loop() call signature corrected

### 27. feat/session-bookmarks (212dc4e1ee)
- Status: Merged with conflict resolution
- Conflicts: dialog-session-list.tsx, tool/registry.ts
- Resolution: Combined session list limit with bookmarks feature

### 28. fix/dialog-datetime-alignment (322ce08c6d)
- Status: Merged successfully
- No conflicts

### 29. feat/keybindable-commands (5b34ff0954)
- Status: Merged successfully
- No conflicts

### 30. feat/configurable-snapshot-lifespan (aba59c2cc8)
- Status: Merged successfully
- No conflicts

### 31. feat/configurable-new-plan-mode (1d611baa60)
- Status: Merged with conflict resolution
- Conflict: config/config.ts
- Resolution: Added both loadThemeFile and experimentalPlanMode functions

### 32. feat/config-imports (e6a0a8021b)
- Status: Merged successfully
- No conflicts

### 33. feat/canceled-prompts-in-history (3f37b43e7d)
- Status: Merged successfully
- No conflicts

### 34. feat/sinister-quotes (f206275904)
- Status: Merged with conflict resolution
- Conflicts: prompt/index.tsx - multiple conflicts
- Resolution: Updated placeholderText to use sinister placeholders without prefix

### 35. feature/markdown-renderer (gignit) (4521827aa4)
- Status: Merged with conflict resolution
- Conflicts: app.tsx, session/index.tsx
- Resolution: Added Index import and markdown_all toggle

### 36. readline-additions (aspiers) (a18b09cffd)
- Status: Merged successfully
- No conflicts

### 37. add-bash-env-parameter (taxilian) (5eefa62b95)
- Status: Merged with conflict resolution
- Conflict: tool/bash.ts
- Resolution: Combined shellEnv.env and params.env

### 38. feat/thinking-indicator-hidden (6c0f983f67)
- Status: Merged successfully
- No conflicts

### 39. feat/base-one-rebrand (8ff1874b00)
- Status: Merged successfully
- No conflicts
- Major rebrand from opencode to baseone

## Finishing Touches

- Updated VERSION to "2026-02-11-15-09" in installation/index.ts
- Hardcoded version in build.ts define block
- Added theme: "my-matrix" to .opencode/opencode.jsonc
