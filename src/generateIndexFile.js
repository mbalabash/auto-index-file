const path = require('path')
const scanFiles = require('./scanFiles')
const { isCorrectFileName } = require('./utils')
const createModulesList = require('./createModulesList')

const generateIndexFile = async (config) => {
  const { rootDir } = config
  const fileContent = null

  try {
    let files = scanFiles(path.normalize(rootDir), config)
    files = files.filter(isCorrectFileName)

    const modulesList = await createModulesList(files)
    console.log(modulesList)

    // generate file content
  } catch (error) {
    console.error(error)
  }

  return fileContent
}

module.exports = generateIndexFile
