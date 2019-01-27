const scanFiles = require('./scanFiles')
const createModulesList = require('./createModulesList')
const { isCorrectFileName, createExportString } = require('./utils')

const generateFileContent = async (options) => {
  const { rootDir } = options
  let fileContent = null

  const files = scanFiles(rootDir, options).filter(isCorrectFileName)
  const modules = await createModulesList(files)
  if (modules.length > 0) {
    fileContent = modules.map(createExportString).join('\n')
  }

  return fileContent
}

module.exports = generateFileContent
