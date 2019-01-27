const { getParentDirectoryName } = require('./utils')

const getModuleDescription = () => ({
  file: '',
  name: '',
  namedExports: [],
  defaultExport: '',
})

const parseModuleFromAst = (filePath, ast) => {
  const moduleObject = getModuleDescription()
  const { body: nodes } = ast

  nodes.forEach((node) => {
    const { type } = node
    if (type === 'ExportDefaultDeclaration') {
      const {
        declaration: { name },
      } = node
      moduleObject.defaultExport = name
    }
    if (type === 'ExportNamedDeclaration' && node.declaration) {
      const { name } = node.declaration.declarations[0].id
      moduleObject.namedExports.push(name)
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
