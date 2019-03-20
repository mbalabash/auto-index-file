const { getParentDirectoryName } = require('./utils')

const getModuleDefinition = () => ({
  file: '',
  name: '',
  namedExports: [],
  defaultExport: '',
})

const parseModuleFromAst = (filePath, ast) => {
  const moduleObject = getModuleDefinition()
  const { body: nodes } = ast

  nodes.forEach((node) => {
    const { type: exportDeclarationType } = node
    if (exportDeclarationType === 'ExportDefaultDeclaration') {
      const {
        declaration,
        declaration: { type: exportItemType, id },
      } = node

      if (exportItemType === 'ClassDeclaration' && id !== null) {
        const { name } = id
        moduleObject.defaultExport = name
      } else if (
        (exportItemType === 'ClassDeclaration' && id === null)
        || exportItemType === 'CallExpression'
      ) {
        moduleObject.defaultExport = getParentDirectoryName(filePath)
      } else {
        const { name } = declaration
        moduleObject.defaultExport = name
      }
    }

    if (exportDeclarationType === 'ExportNamedDeclaration' && node.declaration) {
      const {
        declaration,
        declaration: { type: exportItemType },
      } = node

      if (exportItemType === 'ClassDeclaration') {
        const { name } = declaration.id
        moduleObject.namedExports.push(name)
      } else {
        const { name } = declaration.declarations[0].id
        moduleObject.namedExports.push(name)
      }
    }
  })

  if (moduleObject.namedExports.length > 0 || moduleObject.defaultExport.length > 0) {
    moduleObject.file = `./${filePath}`
    moduleObject.name = getParentDirectoryName(filePath)
    return moduleObject
  }

  return false
}

module.exports = parseModuleFromAst
