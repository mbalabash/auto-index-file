const test = require('ava')
const parseModuleFromAst = require('../src/parseModuleFromAst')

const astDefaultForIdentifier = require('./__mock__/debugComponents/atoms/TestComponent1/ast')
const astDefaultForNamedClassBeforeName = require('./__mock__/debugComponents/organisms/TestComponent5/ast')
const astDefaultForNamedClassAfterBody = require('./__mock__/debugComponents/organisms/TestComponent6/ast')
const astDefaultForUnnamedClass = require('./__mock__/debugComponents/organisms/TestComponent7/ast')
const astDefaultForWrappedObjects = require('./__mock__/debugComponents/organisms/TestComponent8/ast')
const astDefaultForNamedFunctionBeforeName = require('./__mock__/debugComponents/organisms/TestComponent10/ast')
const astDefaultForIIFE = require('./__mock__/debugComponents/organisms/TestComponent11/ast')
const astNamedForIdentifier = require('./__mock__/debugComponents/ignoreMe/TestComponent0/ast')
const astNamedForFunction = require('./__mock__/debugComponents/organisms/TestComponent4/ast')
const astNamedForClass = require('./__mock__/debugComponents/organisms/TestComponent9/ast')

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

test('should correctly parse ExportDefaultDeclaration for Named Class (after body)', (t) => {
  const filePath = './test/__mock__/debugComponents/organisms/TestComponent6/index.js'

  const correctModuleObj = {
    file: `./${filePath}`,
    name: 'TestComponent6',
    namedExports: ['TestComponent6'],
    defaultExport: 'TestComponent6',
  }
  t.deepEqual(parseModuleFromAst(filePath, astDefaultForNamedClassAfterBody), correctModuleObj)
})

test('should correctly parse ExportDefaultDeclaration for Unnamed Class', (t) => {
  const filePath = './test/__mock__/debugComponents/organisms/TestComponent7/index.js'

  const correctModuleObj = {
    file: `./${filePath}`,
    name: 'TestComponent7',
    namedExports: [],
    defaultExport: 'TestComponent7',
  }
  t.deepEqual(parseModuleFromAst(filePath, astDefaultForUnnamedClass), correctModuleObj)
})

test('should correctly parse ExportDefaultDeclaration for Wrapped Objects', (t) => {
  const filePath = './test/__mock__/debugComponents/organisms/TestComponent8/index.js'

  const correctModuleObj = {
    file: `./${filePath}`,
    name: 'TestComponent8',
    namedExports: [],
    defaultExport: 'TestComponent8',
  }
  t.deepEqual(parseModuleFromAst(filePath, astDefaultForWrappedObjects), correctModuleObj)
})

test('should correctly parse ExportDefaultDeclaration for Named Function (before name)', (t) => {
  const filePath = './test/__mock__/debugComponents/organisms/TestComponent10/index.js'

  const correctModuleObj = {
    file: `./${filePath}`,
    name: 'TestComponent10',
    namedExports: [],
    defaultExport: 'TestComponent10',
  }
  t.deepEqual(parseModuleFromAst(filePath, astDefaultForNamedFunctionBeforeName), correctModuleObj)
})

test('should correctly parse ExportDefaultDeclaration for IIFE', (t) => {
  const filePath = './test/__mock__/debugComponents/organisms/TestComponent11/index.js'

  const correctModuleObj = {
    file: `./${filePath}`,
    name: 'TestComponent11',
    namedExports: [],
    defaultExport: 'TestComponent11',
  }
  t.deepEqual(parseModuleFromAst(filePath, astDefaultForIIFE), correctModuleObj)
})

test('should correctly parse ExportNamedDeclaration for Identifier', (t) => {
  const filePath = './test/__mock__/debugComponents/ignoreMe/TestComponent0/index.js'

  const correctModuleObj = {
    file: `./${filePath}`,
    name: 'TestComponent0',
    namedExports: ['TestComponent0'],
    defaultExport: '',
  }
  t.deepEqual(parseModuleFromAst(filePath, astNamedForIdentifier), correctModuleObj)
})

test('should correctly parse ExportNamedDeclaration for Function', (t) => {
  const filePath = './test/__mock__/debugComponents/organisms/TestComponent4/index.js'

  const correctModuleObj = {
    file: `./${filePath}`,
    name: 'TestComponent4',
    namedExports: ['TestComponent4'],
    defaultExport: '',
  }
  t.deepEqual(parseModuleFromAst(filePath, astNamedForFunction), correctModuleObj)
})

test('should correctly parse ExportNamedDeclaration for Class', (t) => {
  const filePath = './test/__mock__/debugComponents/organisms/TestComponent9/index.js'

  const correctModuleObj = {
    file: `./${filePath}`,
    name: 'TestComponent9',
    namedExports: ['TestComponent9'],
    defaultExport: '',
  }
  t.deepEqual(parseModuleFromAst(filePath, astNamedForClass), correctModuleObj)
})
