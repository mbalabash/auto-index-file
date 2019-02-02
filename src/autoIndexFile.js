const chalk = require('chalk')
const path = require('path')
const chokidar = require('chokidar')
const { writeIndexFile } = require('./utils')
const initArgParser = require('./cliArgsParser')
const generateFileContent = require('./generateFileContent')
const { isCorrectFileName, isFileInExcludedDirectory } = require('./utils')

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
    const { targetDir, excludedDirectories } = options
    const watcher = chokidar.watch(targetDir, {
      ignored: path.join(targetDir, 'index.js'),
      persistent: true,
    })
    const worker = async (filePath) => {
      if (
        isCorrectFileName(filePath)
        && !isFileInExcludedDirectory(filePath, excludedDirectories)
      ) {
        console.log(chalk.yellow(`Changed: ${filePath}`))
        await autoIndexFile(options)
      }
    }
    watcher.on('change', worker)
    watcher.on('unlink', worker)
    console.log(chalk.magenta.bold('AutoIndexFile: started!'))
  } else {
    await autoIndexFile(options)
  }
})()
