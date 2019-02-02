const scanFiles = require('./scanFiles')
const createModulesList = require('./createModulesList')
const createExportString = require('./createExportString')
const { isCorrectFileName } = require('./utils')

const generateFileContent = async (options) => {
  const { targetDir } = options
  let fileContent = null

  const files = scanFiles(targetDir, options).filter(isCorrectFileName)
  const modules = await createModulesList(targetDir, files)
  if (modules.length > 0) {
    fileContent = modules.map(createExportString).join('\n')
  }

  return fileContent
}

module.exports = generateFileContent
