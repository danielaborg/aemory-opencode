# Integration Branch: integration/2026-02-12-20-05

This document records all branches merged into this integration branch.

## Merged Branches

### Foreign Remotes

| Branch | Source | Commit Hash | Status |
|--------|--------|-------------|--------|
| feature/markdown-renderer | gignit | 4521827aa44165d10c5423a2674bffff89089b27 | Merged |
| readline-additions | aspiers | a18b09cffdb59697c474087cd34824bbd3e537c3 | Merged |
| add-bash-env-parameter | taxilian | 5eefa62b953fe096124296a3d489981b1a07ea8d | Merged |
| feat/thinking-indicator-hidden | rcdailey | 6c0f983f67dd810f90932f2c7ce089aeb3ac5e09 | Merged |

### Fix Branches

| Branch | Source | Commit Hash | Status |
|--------|--------|-------------|--------|
| fix/remove-dot-true | origin | d6d55d695149ffceea5aedc226196365e75b4d12 | Merged |
| fix/rfc2119-question-tool | origin | b4737244e24619ed6d549002c8e0553549cc83ca | Merged |
| fix/restore-footer | origin | b43ac86efbd729b04aa3ab9dcb9513d097def036 | Merged |
| fix/persist-sidebar | origin | d3c90fd25024d2380b2c24d8e1e6221ebd6ecf62 | Merged |
| fix/autocompletion-filtered-order | origin | 1a070b22f199aa1f250b97506cb5da408f226d66 | Merged |
| fix/modal-menus-filtered-order | origin | 313af2f7f523642365b8446164a325d6d5a0c980 | Merged |
| fix/dialog-datetime-alignment | origin | 38b5163a3fe36d56d2cfb3b996a7bb9468f9d38d | Merged |

### Feature Branches

| Branch | Source | Commit Hash | Status |
|--------|--------|-------------|--------|
| feat/edit-tool-description | origin | 01f9d00fa88fed2ee69a52c997c373ef4404eab5 | Merged |
| feat/opeoginni--display-message-tps | origin | 96b5d60ac772862a2fec0fbd2e04e66dda5d5bd7 | Merged |
| feat/kv-diff-style-clean | origin | a21a854282c6188f6711978c0549051bae403ff2 | Merged |
| feat/global-compaction-threshold | origin | 7daec2900c523a6a42d6d54cbfb7f97db4f7456d | Merged |
| feat/configurable-message-limit-wip | origin | 80be592eb82c66ed0270bd80e9e277843667070e | Merged |
| feat/experimental-dont-cache-markdown | origin | fa6612e92d149fdce8a8342b5346b4185e05ee8f | Merged |
| feat/interjections | origin | be1aed8cb2b6200bfb541d1cfa5ea85f77709a9d | Merged |
| feat/jsonc-user-themes | origin | c636e6d3c5ea57594e4b37bc9494e6b5dc11afc3 | Merged |
| feat/permission-indicator-in-sidebar | origin | 0d7257d89d1d57e1d5dd4cc617fe87239c52d120 | Merged |
| feat/permission-spinner | origin | f38afd36a762b211467eb76215c66da00f65dca9 | Merged |
| feat/persist-sidebar-group-folding-states | origin | 060295c5baee0c65ae1bfe6545a8ba115f9abbf2 | Merged |
| feat/persistant-sidebar-overlay-behaviour | origin | b77259a220f9673c7b9c04ce851b42dc260d8948 | Merged |
| feat/shell-advice | origin | 3eb82d11530f2d38e9199512b8fef500b5f87b04 | Merged |
| feat/elapsed-timer | origin | c9d914b033530cbb5f5f68da6f2a9f7fa9b1de01 | Merged |
| feat/opencode-expand | origin | 9447958b3ccf0ac75c64ca493676325d8698e0bd | Merged |
| feat/sidebar-no-auto-setting | origin | b83661d7f010aea205361ce85b5b7545955bd72e | Merged |
| feat/set-session-title | origin | da682fcf9bb5b6a063720dbe50b67ef5438c012b | Merged |
| feat/get-session-title | origin | ee65583cfacbccccb3370e37a77fd12c75e848f0 | Merged |
| feat/session-timeline-repeat | origin | d4dc52744a3d7d339b82396c7e3568bc91c2418e | Merged |
| feat/automatic-list-continuation | origin | 49687a3855f95dc68b6020c0f4281316e98fcfe7 | Merged |
| feat/continue-command | origin | 3e21ffbaa97adecca61cd07653a2a3e630976c67 | Merged |
| feat/session-bookmarks | origin | b2b44338113aea01af06f18ee879e3d6bc2595b5 | Merged |
| feat/keybindable-commands | origin | afa452a34e4e5638b57cb1e346131676b63f7327 | Merged |
| feat/configurable-snapshot-lifespan | origin | 7587d2e9a9cb5d3681f6bdd05c3eae0eb9aa0514 | Merged |
| feat/configurable-new-plan-mode | origin | 1a86924987d43349d4e87de06b0f07ed376ad805 | Merged |
| feat/config-imports | origin | 8331068d92e79b977ef8d7479017c9a503278dbc | Merged |
| feat/canceled-prompts-in-history | origin | 7fb6b589d14132f9bc100b0417754a911d8b8ad3 | Merged |
| feat/sinister-quotes | origin | 8c8b170026af8bfe920ecef45cdf1c5870488cfa | Merged |
| feat/base-one-rebrand | origin | 920c7064f919dff0fd4f42d4c5e43c14f9d52c8a | Merged |

## Merge Log

```
2026-02-12: Created integration branch from dev
- Branch: integration/2026-02-12-20-05
- Base: origin/dev

Merge gignit/feature/markdown-renderer --no-ff
- Commit: 4521827aa44165d10c5423a2674bffff89089b27
- Status: Success
- Files changed: 6 files changed, 1592 insertions(+), 17 deletions(-)

Merge aspiers/readline-additions --no-ff
- Commit: a18b09cffdb59697c474087cd34824bbd3e537c3
- Status: Success
- Files changed: 5 files changed, 387 insertions(+), 19 deletions(-)

Merge taxilian/add-bash-env-parameter --no-ff
- Commit: 5eefa62b953fe096124296a3d489981b1a07ea8d
- Status: Success (resolved conflict: include both shellEnv.env and params.env)
- Files changed: 4 files changed, integrated env parameter support

Merge rcdailey/feat/thinking-indicator-hidden --no-ff
- Commit: 6c0f983f67dd810f90932f2c7ce089aeb3ac5e09
- Status: Success
- Files changed: 1 file changed, 37 insertions(+), 21 deletions(-)

[Additional merges... see git log for complete history]

All 39 branches merged successfully!
```
