const path = require('path')
const scanFiles = require('./scanFiles')
const { isCorrectFileName, createExportString } = require('./utils')
const createModulesList = require('./createModulesList')

const createFileContent = async (config) => {
  const { rootDir } = config
  let fileContent = null

  try {
    const files = scanFiles(path.normalize(rootDir), config).filter(isCorrectFileName)
    const modulesList = await createModulesList(files)
    fileContent = modulesList.map(createExportString).join('\n')
  } catch (error) {
    console.error(error)
  }

  return fileContent
}

module.exports = createFileContent
