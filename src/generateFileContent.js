const scanFiles = require('./scanFiles')
const createModulesList = require('./createModulesList')
const createExportString = require('./createExportString')
const { isCorrectFileName, disableCamelcaseLinterWarning } = require('./utils')

const generateFileContent = async (options) => {
  const { targetDir, fileFormats } = options
  let fileContent = null

  const files = scanFiles(targetDir, options).filter(file => isCorrectFileName(fileFormats, file))
  const modules = await createModulesList(targetDir, files)
  if (modules.length > 0) {
    fileContent = modules.map(createExportString).join('\n')
    fileContent = disableCamelcaseLinterWarning(fileContent)
  }

  return fileContent
}

module.exports = generateFileContent
