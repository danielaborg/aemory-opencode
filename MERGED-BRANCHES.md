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
| fix/config-package-json-pollution | origin | 4204b8209026a222e8bd37b2ef46e5fde57a488b | Merged |
| feat/edit-tool-description | origin | 99175944b8c4cf99fd364b65d82ec5ec86ebbbda | Merged |
| feat/opeoginni--display-message-tps | origin | 7102b1d1f8ea2a615d16f4e73cba7a2e3b18d7e7 | Merged (with fix) |
| feat/kv-diff-style-clean | origin | 0b8cd62aa394ecb79d02dab92d411181b960f8ea | Merged |
| feat/global-compaction-threshold | origin | 9d6e9634ab8cf78698954e6081034d8f6355a8e3 | Merged |
| feat/configurable-message-and-session-limit | origin | d7cf0863c536f9394cd7ce14f7590a3568aea0d8 | Merged |
| feat/experimental-dont-cache-markdown | origin | 684d5427928b05be02a6fc33d0ca41db3ed0e269 | Merged |
| feat/interjections | origin | 28f910654aa30563a80228cc3ee45e2e440668f5 | Merged |
| feat/jsonc-user-themes | origin | 3d59ee6c8142bcdbb0934aabace2984f66a937e2 | Merged |
| feat/permission-indicator-in-sidebar | origin | f3a5b93d961b0db7482783d69dde47fd1be8c516 | Merged |
| feat/permission-spinner | origin | d9779b564fff2218e6facc0d4c4f2b0302245bee | Merged (with fix) |
| feat/persist-sidebar-group-folding-states | origin | 5bb26aa8ae0ff9ef8e6f6b6f44b3a8f457b03c0f | Merged |

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
10. **fix/config-package-json-pollution** (4204b8209026a222e8bd37b2ef46e5fde57a488b) - Prevented package.json pollution with non-SemVer versions
11. **feat/edit-tool-description** (99175944b8c4cf99fd364b65d82ec5ec86ebbbda) - Enhanced edit tool description
12. **feat/opeoginni--display-message-tps** (7102b1d1f8ea2a615d16f4e73cba7a2e3b18d7e7) - Display message TPS in UI (Fixed type error: changed `setShowTps((prev) => !prev)` to `setShowTps(!showTps())`)
13. **feat/kv-diff-style-clean** (0b8cd62aa394ecb79d02dab92d411181b960f8ea) - Clean diff styling using kv signals
14. **feat/global-compaction-threshold** (9d6e9634ab8cf78698954e6081034d8f6355a8e3) - Added global compaction threshold configuration
15. **feat/configurable-message-and-session-limit** (d7cf0863c536f9394cd7ce14f7590a3568aea0d8) - Configurable message and session list limits
