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

## Merge Log

### 1. fix/remove-dot-true (d86a591)
- Removed `.true` references from config and tool registry
- Modified: packages/opencode/src/config/config.ts, packages/opencode/src/skill/skill.ts, packages/opencode/src/tool/registry.ts

### 2. fix/rfc2119-question-tool (00acb1b)
- Updated RFC2119 keywords in question tool description
- Modified: packages/opencode/src/tool/question.txt

### 3. fix/restore-footer (81e0e4f)
- Restored footer in session view
- Modified: packages/opencode/src/cli/cmd/tui/routes/session/index.tsx

