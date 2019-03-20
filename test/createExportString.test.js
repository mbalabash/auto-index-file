const test = require('ava')
const createExportString = require('../src/createExportString')

test('should create correct export string for moduleObject with named exports', (t) => {
  const module1 = {
    file: './test/__mock__/debugComponents/molecules/TestComponent1',
    name: 'TestComponent1',
    namedExports: ['Component1', 'Component2', 'Component3'],
    defaultExport: '',
  }
  t.is(
    createExportString(module1),
    "export { Component1 as TestComponent1_Component1, Component2 as TestComponent1_Component2, Component3 as TestComponent1_Component3 } from './test/__mock__/debugComponents/molecules/TestComponent1'",
  )
})

test('should create correct export string for moduleObject with default export', (t) => {
  const module2 = {
    file: './test/__mock__/debugComponents/atoms/TestComponent2',
    name: 'TestComponent2',
    namedExports: [],
    defaultExport: 'Layout',
  }
  t.is(
    createExportString(module2),
    "export { default as TestComponent2 } from './test/__mock__/debugComponents/atoms/TestComponent2'",
  )
})

test('should create correct export string for moduleObject with mixed type of exports', (t) => {
  const module3 = {
    file: './test/__mock__/debugComponents/atoms/TestComponent3',
    name: 'TestComponent3',
    namedExports: ['Component1'],
    defaultExport: 'Content',
  }
  t.is(
    createExportString(module3),
    "export { default as TestComponent3 } from './test/__mock__/debugComponents/atoms/TestComponent3'\nexport { Component1 as TestComponent3_Component1 } from './test/__mock__/debugComponents/atoms/TestComponent3'",
  )
})
