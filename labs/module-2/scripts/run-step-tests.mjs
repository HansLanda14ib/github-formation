import { readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const labRoot = resolve(__dirname, '..')
const config = JSON.parse(readFileSync(resolve(labRoot, 'lab.config.json'), 'utf8'))

const branch = process.env.GITHUB_REF_NAME ?? ''
const step = config.steps.find((entry) => entry.branch === branch)

if (!step) {
  console.error(`No lab step configured for branch: ${branch}`)
  process.exit(1)
}

console.log(`Running tests for step ${step.id}: ${step.testFiles.join(', ')}`)

const result = spawnSync(
  process.platform === 'win32' ? 'npm.cmd' : 'npm',
  ['test', '--', '--reporter=json', '--outputFile=test-results.json', ...step.testFiles],
  { cwd: labRoot, stdio: 'inherit' },
)

process.exit(result.status ?? 1)
