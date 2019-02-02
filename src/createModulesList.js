const fs = require('fs')
const chalk = require('chalk')
const acorn = require('acorn-loose')
const { promisify } = require('util')
const { normalizeFilesPath } = require('./utils')
const parseModuleFromAst = require('./parseModuleFromAst')

const readFile = promisify(fs.readFile)

const createModulesList = async (rootDir, files) => {
  let modules = []

  try {
    const promises = files.map(async (file) => {
      const content = await readFile(file)
      const ast = acorn.parse(content, { sourceType: 'module' })
      const moduleObj = parseModuleFromAst(file, ast)
      if (moduleObj) modules.push(moduleObj)
    })
    await Promise.all(promises)

    if (modules.length > 0) {
      modules = normalizeFilesPath(rootDir, modules)
    }
  } catch (error) {
    console.error(chalk.red(error.stack))
  }

  return modules
}

module.exports = createModulesList
