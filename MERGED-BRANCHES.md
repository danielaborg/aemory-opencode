# Merged Branches for integration/2026-02-18-01-06

This document tracks the branches merged into the integration branch `integration/2026-02-18-01-06`.

## Merge Summary

| Branch | Source Remote | Commit Hash | Status |
|--------|---------------|-------------|--------|
| fix/remove-dot-true | origin | 52701f9321932bc809c4260c25d7d2121b03259a | Merged |
| fix/rfc2119-question-tool | origin | 0567d86bbac2678656f9a0bd37b02574ec7bdde9 | Merged |
| fix/restore-footer | origin | 6e71f4dc10b5ee4e3e6a2330a499d6f486435a65 | Merged |
| fix/persist-sidebar | origin | 1ea70c85bca0c08811787716d9d08e7bee783cc1 | Merged |
| fix/autocompletion-filtered-order | origin | 3b2835e0e2617a0c2133d3b7fa3b6d56d4ed8b51 | Merged |
| fix/modal-menus-filtered-order | origin | c18c203b1e68ae9716c2f5fb2d1e7f5e2e40837c | Merged |
| fix/config-content-file-write | origin | 2cf6b0dda3bf76c82ea0017f0f9b5b966423ac26 | Merged |
| fix/bad-plugin-errors | origin | f1393c53a1757d1151247df24c940921a4f33093 | Merged |
| fix/config-package-json-pollution | origin | 237a3520c9c9d5342dd01a07622f484dd57a218b | Merged |
| refactor/shared-substitute | origin | 08624da8bead38660c83d4c4af9953dc95ab3532 | Merged |
| feat/argument-range-syntax | origin | d65e41d6c33c6bb9e531f7c7b372a6806974d7fe | Merged |
| feat/opencode-expand | origin | 00d92e54b4c820ffb296cd578431f1cb877b9202 | Merged |
| merged/feat/session-delete-switch | origin | 9d0cc9e628e73cdc05da8d00ef7d8355aae7e84f | Merged |
| feat/edit-tool-description | origin | 2270496e300d5e042ad66ee501e44b916d79d365 | Merged |
| feat/opeoginni--display-message-tps | origin | dbfe7f054f836e4ca58ef07d8c66960a56e47a16 | Merged |
| feat/kv-diff-style-clean | origin | ee6ff70ed25551bf56f9d544113403fb7a5f4685 | Merged |
| feat/global-compaction-threshold | origin | 12561b93a858dc81e930539c3511a995cc794585 | Merged |
| feat/configurable-message-and-session-limit | origin | 6995bcccf36acb83a746e7b74e19122b1661d8d1 | Merged |
| feat/experimental-dont-cache-markdown | origin | 6b1ee8fe0b468127faf1e481139cf96737f67e2e | Merged |
| feat/interjections | origin | 06b94ad00cabed2203a09a2506660609a21cf1cc | Merged |
| feat/jsonc-user-themes | origin | cc7163014392c0b3ba6d2c3416eec163433cf0d2 | Merged |
| feat/permission-indicator-in-sidebar | origin | 9235467d05f4dff2d2d34b7c4b2c3bb60d159111 | Merged |
| feat/permission-spinner | origin | b4aef4c4718acc157da12c2618bfacff4557024d | Merged |
| feat/persist-sidebar-group-folding-states | origin | 6a3835b91a4ac7baa402285c227c255debe20884 | Merged |
| feat/persistant-sidebar-overlay-behaviour | origin | d68337fbc45e39865d00b9f1ad4cc43cab3a81b8 | Merged |
| feat/shell-advice | origin | 6b86e441a1e9cc6e0a0eda5217a2e6be1077bed2 | Merged |
| feat/elapsed-timer | origin | 3c08a95ce381528d3ab2e34b059d6a40283acfa8 | Merged |
| feat/sidebar-no-auto-setting | origin | f047d1da42825f41fbe36a0fc909d95d794b8619 | Merged |
| feat/set-session-title | origin | 6512363b2cc08f9e69a07c45ae721739abc0a1ee | Merged |
| feat/get-session-title | origin | 32ddc7fcb2 | Merged |
| feat/session-timeline-repeat | origin | de704c434c | Merged |
| feat/automatic-list-continuation | origin | 3574f182f1 | Merged |
| feat/continue-command | origin | 8ea7eaca00 | Merged |
| feat/session-bookmarks | origin | c94bf27f37 | Merged |
| fix/dialog-datetime-alignment | origin | 764365e37b | Merged |
| feat/keybindable-commands | origin | f175d1fe05 | Merged |
| feat/configurable-snapshot-lifespan | origin | b4f508b3e8 | Merged |
| feat/configurable-new-plan-mode | origin | 681b273429 | Merged |
| feat/config-imports | origin | df2b7fd231 | Merged |
| feat/canceled-prompts-in-history | origin | 03ee524809 | Merged |
| feat/no-disabled-lsps-in-sidebar | origin | d69d79e270 | Merged |
| feat/sinister-quotes | origin | 07e0864582 | Merged |
| feature/markdown-renderer | gignit | ebc991cc59 | Merged |
| readline-additions | aspiers | c0788a7629 | Merged |
| add-bash-env-parameter | taxilian | 17823dbeb5 | Merged |
| feat/thinking-indicator-hidden | origin | b3e87c8d52 | Merged |
| feat/base-one-rebrand | origin | fd04217b1a | Merged |
| feat/agent-timestamps | origin | c3b86f3a92 | Merged |
| feat/rewind-modal-option | origin | d47e85e3c8 | Merged |
| feat/command-palette-consistecy | origin | f1657ae62d | Merged |
| feat/session-grouping-take-1 | origin | f176ce32ae | Merged |
| feat/alphabetize-command-palette-groups | origin | ed276b389f | Merged |

## Merge Log

### 1. fix/remove-dot-true (52701f9321932bc809c4260c25d7d2121b03259a)
- Status: Merged successfully
- Changes: Removed `.true` references from config, skill, and registry files

### 2. fix/rfc2119-question-tool (0567d86bbac2678656f9a0bd37b02574ec7bdde9)
- Status: Merged successfully
- Changes: Updated RFC 2119 keywords in question tool description

### 3. fix/restore-footer (6e71f4dc10b5ee4e3e6a2330a499d6f486435a65)
- Status: Merged successfully
- Changes: Restored footer in session route

### 4. fix/persist-sidebar (1ea70c85bca0c08811787716d9d08e7bee783cc1)
- Status: Merged successfully
- Changes: Fixed sidebar persistence in kv and session route

### 5. fix/autocompletion-filtered-order (3b2835e0e2617a0c2133d3b7fa3b6d56d4ed8b51)
- Status: Merged successfully
- Changes: Fixed filtered order in autocompletion, prompt-input, and use-filtered-list

### 6. fix/modal-menus-filtered-order (c18c203b1e68ae9716c2f5fb2d1e7f5e2e40837c)
- Status: Merged successfully
- Changes: Fixed filtered order in modal menus

### 7. fix/config-content-file-write (2cf6b0dda3bf76c82ea0017f0f9b5b966423ac26)
- Status: Merged successfully
- Changes: Fixed config content file write functionality

### 8. fix/bad-plugin-errors (f1393c53a1757d1151247df24c940921a4f33093)
- Status: Merged successfully
- Changes: Fixed bad plugin error handling

### 9. fix/config-package-json-pollution (237a3520c9c9d5342dd01a07622f484dd57a218b)
- Status: Merged successfully
- Changes: Fixed package.json pollution with non-SemVer versions

### 10. refactor/shared-substitute (08624da8bead38660c83d4c4af9953dc95ab3532)
- Status: Merged successfully
- Changes: Extracted shared substitute function to config/substitute.ts

### 11. feat/argument-range-syntax (d65e41d6c33c6bb9e531f7c7b372a6806974d7fe)
- Status: Merged successfully (conflict resolved in prompt.ts - formatting difference)
- Changes: Added ${N:M} range syntax for argument placeholders

