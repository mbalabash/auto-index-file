const chalk = require('chalk')
const { writeIndexFile } = require('./utils')
const initArgParser = require('./cliArgsParser')
const filesWatcher = require('./filesWatcher')
const generateFileContent = require('./generateFileContent')

const autoIndexFile = async (options) => {
  try {
    const { targetDir } = options
    const fileContent = await generateFileContent(options)
    if (fileContent) {
      await writeIndexFile(targetDir, fileContent)
    }
  } catch (error) {
    console.error(chalk.red(error.stack))
  }
}

;(async () => {
  const argParser = initArgParser()
  const options = argParser.parseArgs()
  const { watch } = options

  if (watch) {
    filesWatcher(options)
  } else {
    await autoIndexFile(options)
  }
})()

module.exports = { autoIndexFile }
