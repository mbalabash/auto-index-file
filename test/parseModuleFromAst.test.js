const test = require('ava')
const parseModuleFromAst = require('../src/parseModuleFromAst')

const astDefaultForIdentifier = require('./__mock__/debugComponents/atoms/TestComponent1/ast')
const astDefaultForNamedClassBeforeName = require('./__mock__/debugComponents/organisms/TestComponent5/ast')

test('should correctly parse ExportDefaultDeclaration for Identifier', (t) => {
  const filePath = './test/__mock__/debugComponents/atoms/TestComponent1/index.js'

  const correctModuleObj = {
    file: `./${filePath}`,
    name: 'TestComponent1',
    namedExports: [],
    defaultExport: 'TestComponent1',
  }
  t.deepEqual(parseModuleFromAst(filePath, astDefaultForIdentifier), correctModuleObj)
})

test('should correctly parse ExportDefaultDeclaration for Named Class (before name)', (t) => {
  const filePath = './test/__mock__/debugComponents/organisms/TestComponent5/index.js'

  const correctModuleObj = {
    file: `./${filePath}`,
    name: 'TestComponent5',
    namedExports: [],
    defaultExport: 'TestComponent5',
  }
  t.deepEqual(parseModuleFromAst(filePath, astDefaultForNamedClassBeforeName), correctModuleObj)
})
