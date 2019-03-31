const test = require('ava')
const parseModuleFromAst = require('../src/parseModuleFromAst')

const astDefaultForIdentifier = require('./__mock__/debugComponents/atoms/TestComponent1/ast')

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
