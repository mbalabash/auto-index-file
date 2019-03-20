const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const { isCorrectFileName, isFileInExcludedDirectory } = require('./utils')

const scanFiles = (directory, options) => {
  let files = []

  try {
    if (!fs.existsSync(directory)) throw new Error(`${directory} - directory not exist!`)

    const { excludedDirectories } = options
    const fileNames = fs.readdirSync(directory)

    fileNames.forEach((name) => {
      const targetPath = path.join(directory, name)
      const stats = fs.lstatSync(targetPath)

      if (
        stats.isFile()
        && isCorrectFileName(targetPath)
        && !isFileInExcludedDirectory(targetPath, excludedDirectories)
      ) {
        files.push(targetPath)
      }
      if (stats.isDirectory()) {
        files = files.concat(scanFiles(targetPath, options))
      }
    })
  } catch (error) {
    console.error(chalk.red(error.stack))
  }

  return files
}

module.exports = scanFiles
