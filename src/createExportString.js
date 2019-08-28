const generateDefaultExport = (name, file) => `export { default as ${name} } from '${file}'`

const generateNamedExports = (name, file, namedExports) => `export { ${namedExports
  .map((moduleName) => `${moduleName} as ${name}_${moduleName}`)
  .join(', ')} } from '${file}'`

const createExportString = (moduleObj) => {
  const {
    file, name, defaultExport, namedExports,
  } = moduleObj
  let exportString = ''

  if (defaultExport.length > 0) {
    exportString += generateDefaultExport(name, file)
  }

  if (namedExports.length > 0) {
    if (defaultExport.length > 0) exportString += '\n'
    exportString += generateNamedExports(name, file, namedExports)
  }

  return exportString
}

module.exports = createExportString
