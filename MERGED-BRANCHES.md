# Merged Branches Log

Integration Branch: `integration/2026-02-13-14-50`
Created: 2026-02-13
Base: `origin/dev`

## Merge Summary Table

| Branch | Source Remote | Commit Hash | Status | Notes |
|--------|---------------|-------------|--------|-------|
| fix/remove-dot-true | origin | d86a591 | Merged | Removed `.true` from config/tool files |
| fix/rfc2119-question-tool | origin | 00acb1b | Merged | Updated RFC2119 keywords in question tool |
| fix/restore-footer | origin | 81e0e4f | Merged | Restored footer in session view |
| fix/persist-sidebar | origin | e142b31 | Merged | Persist sidebar state in KV storage |
| fix/autocompletion-filtered-order | origin | b82ba26 | Merged | Fixed autocompletion filtered order |
| fix/modal-menus-filtered-order | origin | ed29c25 | Merged | Fixed modal menus filtered order |
| feat/edit-tool-description | origin | c86f864 | Merged | Updated edit tool description |
| feat/opeoginni--display-message-tps | origin | e2cfb32 | Merged | Display message TPS in session |
| feat/kv-diff-style-clean | origin | f423190 | Merged | KV diff style clean |
| feat/global-compaction-threshold | origin | 2d6bcde | Merged | Global compaction threshold config |
| feat/configurable-message-limit-wip | origin | 4087740 | Merged | Configurable message/session limits |
| feat/experimental-dont-cache-markdown | origin | 23287ce | Merged | Experimental markdown caching option |
| feat/interjections | origin | f9f7011 | Merged | Interjection support for sessions |

## Merge Log

### 11. feat/configurable-message-limit-wip (4087740)
- Configurable message/session limits
- Modified: packages/opencode/src/config/config.ts, packages/opencode/src/cli/cmd/tui/component/dialog-session-list.tsx, packages/opencode/src/cli/cmd/tui/context/sync.tsx, packages/opencode/src/session/index.ts, packages/opencode/test/config/config.test.ts, packages/sdk/js/src/gen/types.gen.ts, packages/sdk/js/src/v2/gen/types.gen.ts

### 13. feat/interjections (f9f7011)
- Interjection support for sessions
- Modified: packages/opencode/src/cli/cmd/tui/routes/session/index.tsx, packages/opencode/src/session/processor.ts, packages/sdk/js/src/gen/types.gen.ts, packages/sdk/js/src/v2/gen/sdk.gen.ts, packages/sdk/js/src/v2/gen/types.gen.ts

### 12. feat/experimental-dont-cache-markdown (23287ce)
- Experimental markdown caching option
- Modified: packages/opencode/src/command/index.ts, packages/opencode/src/config/config.ts, packages/sdk/js/src/v2/gen/types.gen.ts

