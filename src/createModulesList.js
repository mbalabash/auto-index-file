const fs = require('fs')
const acorn = require('acorn-loose')
const { promisify } = require('util')
const { getParentDirectoryName } = require('./utils')

const readFile = promisify(fs.readFile)

const createModulesList = async (files) => {
  const modules = []
  const cwd = process.cwd()

  const promises = files.map(async (file) => {
    console.log(`Processed: ${file}`)
    const filePath = `${cwd}/${file}`

    const content = await readFile(filePath, 'utf8')
    const ast = acorn.parse(content, { sourceType: 'module' })

    const { body: nodes } = ast
    const moduleObj = { file: '', name: '', exports: [] }

    nodes.forEach((node) => {
      const { type } = node
      if (type === 'ExportDefaultDeclaration') {
        const {
          declaration: { name },
        } = node
        moduleObj.exports.push({ type, name })
      }
      if (type === 'ExportNamedDeclaration') {
        const { name } = node.declaration.declarations[0].id
        moduleObj.exports.push({ type, name })
      }
    })

    if (moduleObj.exports.length > 0) {
      moduleObj.file = `./${file}`
      moduleObj.name = getParentDirectoryName(file)
      modules.push(moduleObj)
    }
  })

  await Promise.all(promises)
  return modules
}

module.exports = createModulesList
