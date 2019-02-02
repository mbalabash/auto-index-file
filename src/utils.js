const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const writeFile = promisify(fs.writeFile)

const getParentDirectoryName = filePath => path
  .dirname(filePath)
  .split(path.sep)
  .pop()

const isCorrectFileName = fileName => path.basename(fileName).toLowerCase() === 'index.js'

const writeIndexFile = async (directory, content) => {
  const targetPath = path.join(directory, 'index.js')
  try {
    const isFileExist = fs.existsSync(targetPath)
    writeFile(targetPath, content)
    console.log(`Index.js was ${isFileExist ? 'updated' : 'created'}!\n`)
  } catch (error) {
    console.error(error)
  }
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

const disableCamelcaseLinterWarning = fileContent => `/* eslint-disable camelcase */\n${fileContent}`

module.exports = {
  isCorrectFileName,
  getParentDirectoryName,
  writeIndexFile,
  disableCamelcaseLinterWarning,
  normalizeFilesPath,
}
