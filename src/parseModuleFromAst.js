const { getParentDirectoryName } = require('./utils')

const isClassOrFunctionModule = moduleType => moduleType === 'ClassDeclaration' || moduleType === 'FunctionDeclaration'

const parseExportDefaultDeclaration = (node, filePath) => {
  let defaultExport = ''
  const {
    declaration: { type: moduleType, id },
  } = node

  if (isClassOrFunctionModule(moduleType) && id !== null) {
    const { name } = id
    defaultExport = name
  } else if (
    (isClassOrFunctionModule(moduleType) && id === null)
    || moduleType === 'CallExpression'
  ) {
    defaultExport = getParentDirectoryName(filePath)
  } else {
    const {
      declaration: { name },
    } = node
    defaultExport = name
  }

  return defaultExport
}

const parseExportNamedDeclaration = (node) => {
  const namedExports = []
  const { declaration } = node
  if (!declaration) return namedExports

  const { type: moduleType } = declaration
  if (isClassOrFunctionModule(moduleType)) {
    const {
      id: { name },
    } = declaration
    namedExports.push(name)
  } else {
    const { declarations } = declaration
    const {
      id: { name },
    } = declarations[0]
    namedExports.push(name)
  }

  return namedExports
}

const getModuleDefinition = () => ({
  file: '',
  name: '',
  namedExports: [],
  defaultExport: '',
})

const parseModuleFromAst = (filePath, ast) => {
  const { body: nodes } = ast
  const moduleObject = getModuleDefinition()

  nodes.forEach((node) => {
    const { type: exportType } = node

    if (exportType === 'ExportDefaultDeclaration') {
      moduleObject.defaultExport = parseExportDefaultDeclaration(node, filePath)
    }
    if (exportType === 'ExportNamedDeclaration') {
      moduleObject.namedExports = parseExportNamedDeclaration(node)
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
