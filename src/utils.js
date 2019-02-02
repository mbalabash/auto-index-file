const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const { promisify } = require('util')

const writeFile = promisify(fs.writeFile)

const getParentDirectoryName = filePath => path
  .dirname(filePath)
  .split(path.sep)
  .pop()

const isCorrectFileName = (filePath) => {
  const name = path.basename(filePath).toLowerCase()
  return name === 'index.js'
}

const isFileInExcludedDirectory = (filePath, excludedDirs) => {
  const dirs = excludedDirs.filter(dir => filePath.includes(path.normalize(dir)))
  return dirs.length > 0
}

const normalizeFilesPath = (rootDir, modules) => modules.map((moduleObj) => {
  const { file } = moduleObj
  const filePathWithoutName = file
    .split(path.sep)
    .slice(0, -1)
    .join(path.sep)
  const normalizedName = `./${path.relative(rootDir, filePathWithoutName)}`
  return { ...moduleObj, file: normalizedName }
})

const writeIndexFile = async (directory, content) => {
  const targetPath = path.join(directory, 'index.js')
  try {
    const isFileExist = fs.existsSync(targetPath)
    await writeFile(targetPath, content)
    console.log(chalk.green(`Index.js was ${isFileExist ? 'updated' : chalk.bold('created')}!`))
  } catch (error) {
    console.error(chalk.red(error.stack))
  }
}

const disableCamelcaseLinterWarning = fileContent => `/* eslint-disable camelcase */\n${fileContent}`

module.exports = {
  isCorrectFileName,
  getParentDirectoryName,
  writeIndexFile,
  isFileInExcludedDirectory,
  disableCamelcaseLinterWarning,
  normalizeFilesPath,
}
