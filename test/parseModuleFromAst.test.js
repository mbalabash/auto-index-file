const test = require('ava')
const parseModuleFromAst = require('../src/parseModuleFromAst')

const defaultExportAst = require('./__mock__/ExportDefaultDeclaration-Ast')
const namedExportAst = require('./__mock__/ExportNamedDeclaration-Ast')
const mixedExportAst = require('./__mock__/MixedExportDeclaration-Ast')

test('should create correct moduleObject (ExportDefaultDeclaration)', (t) => {
  const filePath = 'debugDir/atoms/Text/index.js'
  const correctModuleObj = {
    file: `./${filePath}`,
    name: 'Text',
    namedExports: [],
    defaultExport: 'TextComponent',
  }
  t.deepEqual(parseModuleFromAst(filePath, defaultExportAst), correctModuleObj)
})

test('should create correct moduleObject (ExportNamedDeclaration)', (t) => {
  const filePath = 'debugDir/atoms/Component/index.js'
  const correctModuleObj = {
    file: `./${filePath}`,
    name: 'Component',
    namedExports: ['Component1'],
    defaultExport: '',
  }
  t.deepEqual(parseModuleFromAst(filePath, namedExportAst), correctModuleObj)
})

test('should create correct moduleObject (MixedExportDeclaration)', (t) => {
  const filePath = 'debugDir/atoms/Link/index.js'
  const correctModuleObj = {
    file: `./${filePath}`,
    name: 'Link',
    namedExports: ['PlainLink'],
    defaultExport: 'TextComponent',
  }
  t.deepEqual(parseModuleFromAst(filePath, mixedExportAst), correctModuleObj)
})
