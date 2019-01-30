const test = require('ava')
const { isCorrectFileName, createExportString, getParentDirectoryName } = require('../src/utils')

test('should be a correct file name', (t) => {
  const correctFileName1 = 'Index.js'
  const correctFileName2 = 'index.js'
  const correctFileName3 = 'TestFolder/INDEX.js'
  t.is(isCorrectFileName(correctFileName1), true)
  t.is(isCorrectFileName(correctFileName2), true)
  t.is(isCorrectFileName(correctFileName3), true)
})

test('should be an incorrect file name', (t) => {
  const incorrectFileName1 = 'qwe.js'
  const incorrectFileName2 = 'TestFolder/component.js'
  const incorrectFileName3 = 'index.png'
  t.is(isCorrectFileName(incorrectFileName1), false)
  t.is(isCorrectFileName(incorrectFileName2), false)
  t.is(isCorrectFileName(incorrectFileName3), false)
})

test('should create correct export string from moduleObject', (t) => {
  const module1 = {
    file: './debugDir/molecules/AppLogo/index.js',
    name: 'AppLogo',
    namedExports: ['Component1', 'Component2', 'Component3'],
    defaultExport: '',
  }
  const module2 = {
    file: './debugDir/atoms/PageLayout/index.js',
    name: 'PageLayout',
    namedExports: [],
    defaultExport: 'Layout',
  }
  const module3 = {
    file: './debugDir/atoms/PageContent/index.js',
    name: 'PageContent',
    namedExports: ['Component1'],
    defaultExport: 'Content',
  }
  t.is(
    createExportString(module1),
    "export { Component1, Component2, Component3 } from './debugDir/molecules/AppLogo/index.js'",
  )
  t.is(
    createExportString(module2),
    "export { default as PageLayout } from './debugDir/atoms/PageLayout/index.js'",
  )
  t.is(
    createExportString(module3),
    "export { default as PageContent } from './debugDir/atoms/PageContent/index.js'\nexport { Component1 } from './debugDir/atoms/PageContent/index.js'",
  )
})

test('should extract parent directory name correctly', async (t) => {
  const parentDir1 = 'Debug/index.js'
  const parentDir2 = 'Debug/atoms/Text/index.js'
  const parentDir3 = 'Debug/molecules/Button/index.js'
  const parentDir4 = 'Debug/organisms/Header/index.js'
  const parentDir5 = 'List/Index.js'
  t.is(getParentDirectoryName(parentDir1), 'Debug')
  t.is(getParentDirectoryName(parentDir2), 'Text')
  t.is(getParentDirectoryName(parentDir3), 'Button')
  t.is(getParentDirectoryName(parentDir4), 'Header')
  t.is(getParentDirectoryName(parentDir5), 'List')
})

test('getParentDirectoryName should throw an error when called with the wrong argument', async (t) => {
  const parentDir1 = 123
  const parentDir2 = {}
  const parentDir3 = []
  const parentDir4 = undefined
  const parentDir5 = ''

  t.throws(() => getParentDirectoryName(parentDir1))
  t.throws(() => getParentDirectoryName(parentDir2))
  t.throws(() => getParentDirectoryName(parentDir3))
  t.throws(() => getParentDirectoryName(parentDir4))
  t.throws(() => getParentDirectoryName(parentDir5))
})
