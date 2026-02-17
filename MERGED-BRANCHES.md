# Integration Branch: 2026-02-17-14-05

This branch merges the following feature and fix branches into `dev`:

## Origin Branches (28 merged)

| Branch | Commit |
|--------|--------|
| fix/remove-dot-true | 37b957495 |
| fix/rfc2119-question-tool | ebbc3d69b |
| fix/restore-footer | f3fe5b8cb |
| fix/persist-sidebar | 2169d51bd |
| fix/autocompletion-filtered-order | a6750d6df |
| fix/modal-menus-filtered-order | c6bd3e6ab |
| fix/config-content-file-write | 19b2491b8 |
| fix/bad-plugin-errors | f09b2cbd0 |
| fix/config-package-json-pollution | cd9bc346e |
| refactor/shared-substitute | 69dd33877 |
| feat/argument-range-syntax | 837ce9e41 |
| feat/opencode-expand | f4e36794c |
| merged/feat/session-delete-switch | 2d8856b98 |
| feat/edit-tool-description | 2de2cce4a |
| feat/opeoginni--display-message-tps | 76176e235 |
| feat/kv-diff-style-clean | 3420ec34f |
| feat/global-compaction-threshold | 57fc08e00 |
| feat/configurable-message-and-session-limit | 3d0c23325 |
| feat/experimental-dont-cache-markdown | ddeef9836 |
| feat/interjections | 4d2ef2210 |
| feat/jsonc-user-themes | b055209da |
| feat/permission-indicator-in-sidebar | 57d6986a2 |
| feat/permission-spinner | 721d44db1 |
| feat/persist-sidebar-group-folding-states | 88759ede8 |
| feat/sinister-quotes | 4a50d7ea3 |

## Foreign Remote Branches (3 merged)

| Branch | Remote | Commit |
|--------|--------|--------|
| feature/markdown-renderer | gignit | bf4bb01c0 |
| readline-additions | aspiers | f4f033e77 |
| add-bash-env-parameter | taxilian | b273c9891 |

## Final Branch

| Branch | Commit |
|--------|--------|
| feat/base-one-rebrand | b5b650f26 |

## Finishing Touches (7c5cabf43)

- Set theme to "my-matrix" in `.opencode/opencode.jsonc`
- Hardcoded VERSION to "2026-02-17-14-05" in `installation/index.ts`
- Hardcoded VERSION and CHANNEL in `script/build.ts`
- Added try-catch for SemVer operations in `bun/registry.ts`

## Conflicts Resolved

1. **feat/argument-range-syntax**: `substitute.ts` and `prompt.ts`
2. **feat/configurable-message-and-session-limit**: `config.ts`
3. **feat/interjections**: `session/index.tsx`
4. **feat/sinister-quotes**: `prompt/index.tsx` (used SINISTER_PLACEHOLDERS import)
5. **taxilian/add-bash-env-parameter**: `bash.ts` (merged both shellEnv.env and params.env)
6. **feat/base-one-rebrand**: `flag/flag.ts` (merged BASEONE_* flags with fallback support)
