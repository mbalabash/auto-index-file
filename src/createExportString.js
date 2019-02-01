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

    exportString += `export { ${namedExports
      .map(moduleName => `${moduleName} as ${name}_${moduleName}`)
      .join(', ')} } from '${file}'`
  }

  return exportString
}

module.exports = createExportString
