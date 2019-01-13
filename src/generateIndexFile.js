const path = require('path')
const scanFiles = require('./scanFiles')
const { isCorrectFileName } = require('./utils')
const createModulesList = require('./createModulesList')
const generateExportString = require('./generateExportString')

const generateIndexFile = async (config) => {
  const { rootDir } = config
  let fileContent = null

  try {
    const files = scanFiles(path.normalize(rootDir), config).filter(isCorrectFileName)
    const modulesList = await createModulesList(files)
    fileContent = modulesList.map(generateExportString).join('\n')
  } catch (error) {
    console.error(error)
  }

  return fileContent
}

module.exports = generateIndexFile
