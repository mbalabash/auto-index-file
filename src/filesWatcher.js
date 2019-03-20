const path = require('path')
const chokidar = require('chokidar')
const chalk = require('chalk')
const { autoIndexFile } = require('./autoIndexFile')
const { isCorrectFileName, isFileInExcludedDirectory } = require('./utils')

const filesWatcher = (options) => {
  const { targetDir, excludedDirectories } = options
  const watcher = chokidar.watch(targetDir, {
    ignored: path.join(targetDir, 'index.js'),
    persistent: true,
  })

  const worker = async (filePath, action) => {
    try {
      if (
        isCorrectFileName(filePath)
        && !isFileInExcludedDirectory(filePath, excludedDirectories)
      ) {
        if (action === 'change') {
          console.log(chalk.yellow(`Changed: ${filePath}`))
        } else {
          console.log(chalk.hex('#bb4040')(`Deleted: ${filePath}`))
        }
        await autoIndexFile(options)
      }
    } catch (error) {
      console.error(chalk.red(error.stack))
    }
  }

  watcher.on('change', file => worker(file, 'change'))
  watcher.on('unlink', file => worker(file, 'unlink'))
  console.log(chalk.magenta.bold('AutoIndexFile: started!'))
}

module.exports = filesWatcher
