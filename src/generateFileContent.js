const chalk = require('chalk')
const scanFiles = require('./scanFiles')
const createModulesList = require('./createModulesList')
const createExportString = require('./createExportString')
const postProcessFileContent = require('./postProcessFileContent')

const generateFileContent = async (options) => {
  const { targetDir } = options
  let fileContent = null

  const files = scanFiles(targetDir, options)
  const modules = await createModulesList(targetDir, files)
  if (modules.length > 0) {
    fileContent = modules.map(createExportString).join('\n')
    fileContent = postProcessFileContent(fileContent)
  } else {
    console.log(chalk.cyan('Modules not found!'))
  }

  return fileContent
}

module.exports = generateFileContent
