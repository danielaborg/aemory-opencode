# Integration Branch: integration/2026-02-16-11-59

Created: 2026-02-16
Base: dev

## Merged Branches

| Branch | Remote | Commit Hash | Status |
|--------|--------|-------------|--------|
| refactor/shared-substitute | origin | ca077d6b9694f811367da252a3c77f9c67bd0cf8 | Merged |
| fix/remove-dot-true | origin | f9a2827956ff787d79b16e76c83ab1a4cc710b4a | Merged |
| fix/rfc2119-question-tool | origin | f7cf6ec2496949ecef146e0cdabc7b458854cbdf | Merged |
| fix/restore-footer | origin | 12c5b639db5944d6a6859ecb4d9cb9e3cd14c916 | Merged |
| fix/persist-sidebar | origin | 0aaf4913f2d2b07f1d0f4147edb6dd34230ed456 | Merged (with fix) |
| fix/autocompletion-filtered-order | origin | 81363462bb63edcc3a37394eda8ce18df93827c4 | Merged |
| fix/modal-menus-filtered-order | origin | 4803df467cfa7a246eb812709557a261aebb4f20 | Merged |
| fix/config-content-file-write | origin | b8d265b2ea50f865f2deeb2eae3ecbdeb8d113b7 | Merged |
| fix/bad-plugin-errors | origin | 2deaaf0a749f9a1da104ee24c247d8a340d5b151 | Merged |

## Merge Log

1. **refactor/shared-substitute** (ca077d6b9694f811367da252a3c77f9c67bd0cf8) - Extracted shared substitute function to config/substitute.ts
2. **fix/remove-dot-true** (f9a2827956ff787d79b16e76c83ab1a4cc710b4a) - Removed unnecessary dot/true references
3. **fix/rfc2119-question-tool** (f7cf6ec2496949ecef146e0cdabc7b458854cbdf) - Added RFC 2119 keywords to question tool
4. **fix/restore-footer** (12c5b639db5944d6a6859ecb4d9cb9e3cd14c916) - Restored footer display in TUI
5. **fix/persist-sidebar** (0aaf4913f2d2b07f1d0f4147edb6dd34230ed456) - Fixed type error: kv.signal setter doesn't accept callbacks, changed `setShowHeader((prev) => !prev)` to `setShowHeader(!showHeader())`
6. **fix/autocompletion-filtered-order** (81363462bb63edcc3a37394eda8ce18df93827c4) - Fixed autocompletion filtered order
7. **fix/modal-menus-filtered-order** (4803df467cfa7a246eb812709557a261aebb4f20) - Fixed modal menus filtered order
8. **fix/config-content-file-write** (b8d265b2ea50f865f2deeb2eae3ecbdeb8d113b7) - Fixed config content file write
9. **fix/bad-plugin-errors** (2deaaf0a749f9a1da104ee24c247d8a340d5b151) - Improved plugin error handling
