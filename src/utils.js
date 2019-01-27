const fs = require('fs')
const path = require('path')

const getParentDirectoryName = fileName => path
  .dirname(fileName)
  .split(path.sep)
  .pop()

const isCorrectFileName = fileName => path.basename(fileName).toLowerCase() === 'index.js'

const writeIndexFile = (directory, content) => {
  const targetPath = path.join(directory, 'index.js')

  fs.writeFile(targetPath, content, (err) => {
    if (err) console.error(err)
    console.log(`Index file was successfully saved: ${targetPath}`)
  })
}

const createExportString = (moduleItem) => {
  const {
    file, name, defaultExport, namedExports,
  } = moduleItem
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
  isCorrectFileName, getParentDirectoryName, writeIndexFile, createExportString,
}
