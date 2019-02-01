const scanFiles = require('./scanFiles')
const createModulesList = require('./createModulesList')
const createExportString = require('./createExportString')
const { isCorrectFileName, normalizeFilesPath } = require('./utils')

const generateFileContent = async (options) => {
  const { targetDir } = options
  let fileContent = null

  const files = scanFiles(targetDir, options).filter(isCorrectFileName)
  let modules = await createModulesList(files)
  if (modules.length > 0) {
    modules = normalizeFilesPath(targetDir, modules)
    fileContent = modules.map(createExportString).join('\n')
  }

  return fileContent
}

module.exports = generateFileContent
