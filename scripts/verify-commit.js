/* eslint-disable max-len */
const chalk = require('chalk')

const msgPath = process.env.HUSKY_GIT_PARAMS
const msg = require('fs')
.readFileSync(msgPath, 'utf-8')
.trim()

const commitRE = /^(feat|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|release|workflow|WIP)(\(.+\))?: .{1,100}/

if (!commitRE.test(msg)) {
    console.log()
    console.error(
        `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
            '不合法的 commit 消息格式',
        )}\n\n`
        + chalk.red(
            '  请使用正确的提交格式:\n\n',
        )
        + `    ${chalk.green('feat: add \'comments\' option')}\n`
        + `    ${chalk.green('fix: handle events on blur (close #28)')}\n\n`
        + chalk.blue('  https://gitlab.com/PtmindDev/ecp/infrastructure/front-end-specification/-/blob/main/doc/git.md#git-commit-message-%E8%A7%84%E8%8C%83\n'),
    )

    process.exit(1)
}