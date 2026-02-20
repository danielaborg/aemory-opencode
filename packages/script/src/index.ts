import { $, semver } from "bun"
import path from "path"

const rootPkgPath = path.resolve(import.meta.dir, "../../../package.json")
const rootPkg = await Bun.file(rootPkgPath).json()
const expectedBunVersion = rootPkg.packageManager?.split("@")[1]

if (!expectedBunVersion) {
  throw new Error("packageManager field not found in root package.json")
}

// relax version requirement
const expectedBunVersionRange = `^${expectedBunVersion}`

if (!semver.satisfies(process.versions.bun, expectedBunVersionRange)) {
  throw new Error(`This script requires bun@${expectedBunVersionRange}, but you are using bun@${process.versions.bun}`)
}

const CHANNEL = "local"
const IS_PREVIEW = true

const VERSION = "2026-02-20-03-45"

const team = [
  "actions-user",
  "opencode",
  "rekram1-node",
  "thdxr",
  "kommander",
  "jayair",
  "fwang",
  "MrMushrooooom",
  "adamdotdevin",
  "iamdavidhill",
  "Brendonovich",
  "nexxeln",
  "Hona",
  "jlongster",
  "opencode-agent[bot]",
  "R44VC0RP",
]

export const Script = {
  get channel() {
    return CHANNEL
  },
  get version() {
    return VERSION
  },
  get preview() {
    return IS_PREVIEW
  },
  get release(): boolean {
    return false
  },
  get team() {
    return team
  },
}
console.log(`opencode script`, JSON.stringify(Script, null, 2))
