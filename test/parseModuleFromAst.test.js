const test = require('ava')
const parseModuleFromAst = require('../src/parseModuleFromAst')

const defaultExportAst = require('./__mock__/ExportDefaultDeclaration-Ast')
const namedExportAst = require('./__mock__/ExportNamedDeclaration-Ast')
const mixedExportAst = require('./__mock__/MixedExportDeclaration-Ast')

test('should create correct moduleObject (ExportDefaultDeclaration)', (t) => {
  const filePath = './test/__mock__/debugComponents/atoms/TestComponent1/index.js'

  const correctModuleObj = {
    file: `./${filePath}`,
    name: 'TestComponent1',
    namedExports: [],
    defaultExport: 'TestComponent1',
  }
  t.deepEqual(parseModuleFromAst(filePath, defaultExportAst), correctModuleObj)
})

test('should create correct moduleObject (ExportNamedDeclaration)', (t) => {
  const filePath = './test/__mock__/debugComponents/molecules/TestComponent2/index.js'
  const correctModuleObj = {
    file: `./${filePath}`,
    name: 'TestComponent2',
    namedExports: ['Component'],
    defaultExport: '',
  }
  t.deepEqual(parseModuleFromAst(filePath, namedExportAst), correctModuleObj)
})

test('should create correct moduleObject (MixedExportDeclaration)', (t) => {
  const filePath = './test/__mock__/debugComponents/organisms/TestComponent3/index.js'
  const correctModuleObj = {
    file: `./${filePath}`,
    name: 'TestComponent3',
    namedExports: ['Component'],
    defaultExport: 'TestComponent3',
  }
  t.deepEqual(parseModuleFromAst(filePath, mixedExportAst), correctModuleObj)
})

// test('should correctly handle default class export', async (t) => {})
