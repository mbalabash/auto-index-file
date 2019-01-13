const generateExportString = (moduleItem) => {
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

module.exports = generateExportString
