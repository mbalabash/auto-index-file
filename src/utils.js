const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const writeFile = promisify(fs.writeFile)

const getParentDirectoryName = fileName => path
  .dirname(fileName)
  .split(path.sep)
  .pop()

const isCorrectFileName = fileName => path.basename(fileName).toLowerCase() === 'index.js'

const writeIndexFile = async (directory, content) => {
  const targetPath = path.join(directory, 'index.js')
  try {
    writeFile(targetPath, content)
    console.log(`Index file was successfully saved: ${targetPath}`)
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
