const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const writeFile = promisify(fs.writeFile)

const getParentDirectoryName = (filePath) => {
  const isNotString = typeof filePath !== 'string'
  if (isNotString || (!isNotString && filePath.length === 0)) {
    throw new Error('filePath should have type string and contain a path to file!')
  }
  return path
    .dirname(filePath)
    .split(path.sep)
    .pop()
}

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

const createExportString = (moduleObj) => {
  const {
    file, name, defaultExport, namedExports,
  } = moduleObj
  let exportString = ''

  if (defaultExport.length > 0) {
    exportString += `export { default as ${name} } from '${file}'`
  }
  if (namedExports.length > 0) {
    if (defaultExport.length > 0) exportString += '\n'
    exportString += `export { ${namedExports.join(', ')} } from '${file}'`
  }

  return exportString
}

module.exports = {
  isCorrectFileName,
  getParentDirectoryName,
  writeIndexFile,
  createExportString,
}
