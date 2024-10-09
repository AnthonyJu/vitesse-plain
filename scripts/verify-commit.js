import { readFileSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import pico from 'picocolors'

const msgPath = path.resolve('.git/COMMIT_EDITMSG')
const msg = readFileSync(msgPath, 'utf-8').trim()

// eslint-disable-next-line max-len, regexp/no-unused-capturing-group
const commitRE = /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.log()
  console.error(
    `  ${pico.white(pico.bgRed(' ERROR '))} ${pico.red(
      `invalid commit message format.`,
    )}\n\n${
      pico.red(
        `  Proper commit message format is required for automated changelog generation. Examples:\n\n`,
      )
    }    ${pico.green(`feat(compiler): add 'comments' option`)}\n`
    + `    ${pico.green(
      `fix(v-model): handle events on blur (close #28)`,
    )}\n\n${
      pico.red(`  See .github/commit-convention.md for more details.\n`)}`,
  )
  process.exit(1)
}
