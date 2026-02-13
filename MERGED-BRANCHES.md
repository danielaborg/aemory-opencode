# Merged Branches Log

Integration Branch: `integration/2026-02-13-14-50`
Created: 2026-02-13
Base: `origin/dev`

## Merge Summary Table

| Branch | Source Remote | Commit Hash | Status | Notes |
|--------|---------------|-------------|--------|-------|
| fix/remove-dot-true | origin | 6703ce9 | Merged | Removed `.true` from config/tool files |
| fix/rfc2119-question-tool | origin | 61dabdb | Merged | Updated RFC2119 keywords in question tool |
| fix/restore-footer | origin | c1ef4c8 | Merged | Restored footer in session view |
| fix/persist-sidebar | origin | d709b4b | Merged | Persist sidebar state in KV storage |
| fix/autocompletion-filtered-order | origin | 9586abd | Merged | Fixed autocompletion filtered order |
| fix/modal-menus-filtered-order | origin | 39d9446 | Merged | Fixed modal menus filtered order |
| feat/edit-tool-description | origin | 6ca0b1f | Merged | Updated edit tool description |
| feat/opeoginni--display-message-tps | origin | c517716 | Merged | Display message TPS in session |
| feat/kv-diff-style-clean | origin | 2ce4822 | Merged | KV diff style clean |
| feat/global-compaction-threshold | origin | 639a2a6 | Merged | Global compaction threshold config |
| feat/configurable-message-limit-wip | origin | e90b934 | Merged | Configurable message/session limits |
| feat/experimental-dont-cache-markdown | origin | 72d3f48 | Merged | Experimental markdown caching option |
| feat/interjections | origin | a9ca622 | Merged | Interjection support for sessions |
| feat/jsonc-user-themes | origin | 5226516 | Merged | JSONC user themes support |
| feat/permission-indicator-in-sidebar | origin | 51ce8d4 | Merged | Permission indicator in sidebar |
| feat/permission-spinner | origin | 9015b63 | Merged | Permission spinner animation |
| feat/persist-sidebar-group-folding-states | origin | 017b223 | Merged | Persist sidebar group folding |
| feat/persistant-sidebar-overlay-behaviour | origin | 7a93221 | Merged | Persistent sidebar overlay toggle |
| feat/shell-advice | origin | 9467d44 | Merged | Shell advice in bash tool |
| feat/elapsed-timer | origin | 1d12007 | Merged | Elapsed time display for running messages |
| feat/opencode-expand | origin | 1ed63a3 | Merged | OpenCode expand command |
| feat/sidebar-no-auto-setting | origin | 15a023b | Merged | No sidebar auto setting option |
| feat/set-session-title | origin | e9d5ad5 | Merged | Set session title tool |
| feat/get-session-title | origin | 28ec98e | Merged | Get session title tool |
| feat/session-timeline-repeat | origin | 05de42b | Merged | Session timeline repeat |
| feat/automatic-list-continuation | origin | be4db6f | Merged | Automatic list continuation |
| feat/continue-command | origin | da1c1ce | Merged | Continue command for interrupted sessions |
| feat/session-bookmarks | origin | 383901b | Merged | Session bookmarks feature |
| fix/dialog-datetime-alignment | origin | 22a2194 | Merged | Dialog datetime alignment |
| feat/keybindable-commands | origin | c4fa7df | Merged | Keybindable commands |
| feat/configurable-snapshot-lifespan | origin | 484b77f | Merged | Configurable snapshot lifespan |
| feat/configurable-new-plan-mode | origin | 114cdd4 | Merged | Configurable new plan mode |
| feat/config-imports | origin | ac8979e | Merged | Config imports feature |
| feat/canceled-prompts-in-history | origin | 353a7b0 | Merged | Canceled prompts in history |
| feat/sinister-quotes | origin | 0f0000d | Merged | Sinister quotes placeholders |
| gignit/feature/markdown-renderer | gignit | 55ca08a | Merged | Markdown renderer for all messages |
| aspiers/readline-additions | aspiers | db50695 | Merged | Readline additions |
| taxilian/add-bash-env-parameter | taxilian | 7909965 | Merged | Bash env parameter support |
| feat/thinking-indicator-hidden | origin | 354fd7d | Merged | Thinking indicator hidden option |
| feat/base-one-rebrand | origin | 6312c0d | Merged | Base One rebranding |
| feat/argument-range-syntax | origin | 108ce6c | Merged | Argument range syntax for prompts |
| fix/config-content-file-write | origin | 533937f | Merged | Fix config content file write with $schema |

## Summary

- **Total branches merged**: 42
- **Origin branches**: 38
- **Foreign remote branches**: 4 (gignit, aspiers, taxilian)
- **Conflicts resolved**: Multiple conflicts in config.ts, session/index.tsx, prompt/index.tsx, dialog-session-list.tsx, sidebar.tsx, app.tsx, bash.ts, registry.ts

## Finishing Touches Applied

1. Theme set to "my-matrix" in .opencode/opencode.jsonc
2. VERSION hardcoded to "2026-02-13-14-50" in:
   - packages/opencode/src/installation/index.ts
   - packages/opencode/script/build.ts
