const fs = require('fs')
const acorn = require('acorn-loose')
const { promisify } = require('util')
const parseModuleFromAst = require('./parseModuleFromAst')

const readFile = promisify(fs.readFile)

const createModulesList = async (files) => {
  const modules = []

  try {
    const promises = files.map(async (file) => {
      const content = await readFile(file)
      const ast = acorn.parse(content, { sourceType: 'module' })
      const moduleObj = parseModuleFromAst(file, ast)
      if (moduleObj) modules.push(moduleObj)
    })
    await Promise.all(promises)
  } catch (error) {
    console.error(error)
  }

  return modules
}

module.exports = createModulesList
