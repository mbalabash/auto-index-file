const path = require('path')
const chokidar = require('chokidar')
const chalk = require('chalk')
const { isCorrectFileName, isFileInExcludedDirectory } = require('./utils')
const autoIndexFile = require('./autoIndexFile')

const worker = async (filePath, action, options) => {
  try {
    const { excludedDirectories } = options
    if (isCorrectFileName(filePath) && !isFileInExcludedDirectory(filePath, excludedDirectories)) {
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

const filesWatcher = (options) => {
  const { targetDir } = options
  const watcher = chokidar.watch(targetDir, {
    ignored: path.join(targetDir, 'index.js'),
    persistent: true,
  })

  watcher.on('change', (file) => worker(file, 'change', options))
  watcher.on('unlink', (file) => worker(file, 'unlink', options))
  console.log(chalk.magenta.bold('AutoIndexFile: started!'))
}

module.exports = filesWatcher
