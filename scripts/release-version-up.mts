import {$, fs, argv} from 'zx';
import semver from 'semver';

const packageJson: {version: string} = await fs.readJson('./package.json')
const newVersion: string | boolean | undefined = argv.version

if (!newVersion || typeof newVersion === "boolean") throw new Error("新しいバージョンをCLI引数として指定してください")

if (!semver.lt(packageJson.version, newVersion)) throw new Error("新しいバージョンが古いバージョンより値が下回っているため、バージョンの再検討をしてください")

const newPackageJson = {
  ...packageJson,
  version: newVersion
}

await fs.writeJson('./package.json', newPackageJson)
await $`rome format package.json --write`
await $`git add ./package.json`
await $`git commit -m "ci: release v${newVersion}"`
await $`git push && git push --tags`
