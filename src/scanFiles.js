const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const { isCorrectFileName } = require('./utils')

const scanFiles = (directory, options) => {
  const directories = []
  let files = []

  try {
    if (!fs.existsSync(directory)) throw new Error(`${directory} - directory not exist!`)

    const { excludedDirectories, recursive } = options

    const fileNames = fs.readdirSync(directory)
    fileNames.forEach((name) => {
      const targetPath = path.join(directory, name)
      const stats = fs.lstatSync(targetPath)

      if (stats.isFile() && isCorrectFileName(targetPath)) {
        files.push(targetPath)
      }

      if (stats.isDirectory() && !excludedDirectories.includes(name)) {
        directories.push(targetPath)
      }
    })

    if (directories.length > 0 && recursive) {
      for (let i = 0; i < directories.length; i += 1) {
        files = files.concat(scanFiles(directories[i], options))
      }
    }
  } catch (error) {
    console.error(chalk.red(error.stack))
  }

  return files
}

module.exports = scanFiles
