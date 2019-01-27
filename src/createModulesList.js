const fs = require('fs')
const acorn = require('acorn-loose')
const { promisify } = require('util')
const { getParentDirectoryName } = require('./utils')

const readFile = promisify(fs.readFile)

const createModulesList = async (files) => {
  const modules = []
  const cwd = process.cwd()

  const promises = files.map(async (file) => {
    console.log(`Processing: ${file}`)
    const filePath = `${cwd}/${file}`

    const content = await readFile(filePath)
    const ast = acorn.parse(content, { sourceType: 'module' })

    const { body: nodes } = ast
    const moduleObj = {
      file: '',
      name: '',
      namedExports: [],
      defaultExport: '',
    }

    nodes.forEach((node) => {
      const { type } = node
      if (type === 'ExportDefaultDeclaration') {
        const {
          declaration: { name },
        } = node
        moduleObj.defaultExport = name
      }
      if (type === 'ExportNamedDeclaration' && node.declaration) {
        const { name } = node.declaration.declarations[0].id
        moduleObj.namedExports.push(name)
      }
    })

    if (moduleObj.namedExports.length > 0 || moduleObj.defaultExport.length > 0) {
      moduleObj.file = `./${file}`
      moduleObj.name = getParentDirectoryName(file)
      modules.push(moduleObj)
    }
  })

  await Promise.all(promises)
  return modules
}

module.exports = createModulesList
