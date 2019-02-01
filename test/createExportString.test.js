const test = require('ava')
const createExportString = require('../src/createExportString')

test('should create correct export string from moduleObject', (t) => {
  const module1 = {
    file: './debugDir/molecules/AppLogo',
    name: 'AppLogo',
    namedExports: ['Component1', 'Component2', 'Component3'],
    defaultExport: '',
  }
  const module2 = {
    file: './debugDir/atoms/PageLayout',
    name: 'PageLayout',
    namedExports: [],
    defaultExport: 'Layout',
  }
  const module3 = {
    file: './debugDir/atoms/PageContent',
    name: 'PageContent',
    namedExports: ['Component1'],
    defaultExport: 'Content',
  }

  t.is(
    createExportString(module1),
    "export { Component1 as AppLogo_Component1, Component2 as AppLogo_Component2, Component3 as AppLogo_Component3 } from './debugDir/molecules/AppLogo'",
  )
  t.is(
    createExportString(module2),
    "export { default as PageLayout } from './debugDir/atoms/PageLayout'",
  )
  t.is(
    createExportString(module3),
    "export { default as PageContent } from './debugDir/atoms/PageContent'\nexport { Component1 as PageContent_Component1 } from './debugDir/atoms/PageContent'",
  )
})
