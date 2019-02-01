const test = require('ava')
const scanFiles = require('../src/scanFiles')

const defaultOptions = {
  targetDir: '',
  fileFormats: ['.js'],
  excludedDirectories: [],
  recursive: false,
  watch: false,
}

test('should correctly scan files with default configuration', (t) => {
  const targetDir = './test/__mock__/debugDir'
  const options = { ...defaultOptions, targetDir }
  const files = scanFiles(targetDir, options)
  t.deepEqual(files, ['test/__mock__/debugDir/component.js'])
})

test('should correctly scan files with recursive configuration', (t) => {
  const targetDir = './test/__mock__/debugDir'
  const options = { ...defaultOptions, targetDir, recursive: true }
  const files = scanFiles(targetDir, options)
  t.deepEqual(files, [
    'test/__mock__/debugDir/component.js',
    'test/__mock__/debugDir/IgnoreMe/index.js',
    'test/__mock__/debugDir/atoms/Component1/index.js',
    'test/__mock__/debugDir/atoms/Component2/index.js',
    'test/__mock__/debugDir/molecules/Component3/index.js',
    'test/__mock__/debugDir/molecules/Component4/index.js',
    'test/__mock__/debugDir/molecules/Component5/index.js',
    'test/__mock__/debugDir/organisms/Component6/index.js',
    'test/__mock__/debugDir/organisms/Component7/index.js',
    'test/__mock__/debugDir/organisms/Component8/index.js',
    'test/__mock__/debugDir/organisms/Component9/index.js',
  ])
})

test('should correctly scan files with custom file formats configuration', (t) => {
  const targetDir = './test/__mock__/debugDir'
  const options = {
    ...defaultOptions,
    targetDir,
    recursive: true,
    fileFormats: ['.js', '.jsx'],
  }
  const files = scanFiles(targetDir, options)
  t.deepEqual(files, [
    'test/__mock__/debugDir/component.js',
    'test/__mock__/debugDir/IgnoreMe/index.js',
    'test/__mock__/debugDir/atoms/Component1/index.js',
    'test/__mock__/debugDir/atoms/Component2/index.js',
    'test/__mock__/debugDir/jsx/JsxComponent1/index.jsx',
    'test/__mock__/debugDir/jsx/JsxComponent2/index.jsx',
    'test/__mock__/debugDir/jsx/JsxComponent3/index.jsx',
    'test/__mock__/debugDir/molecules/Component3/index.js',
    'test/__mock__/debugDir/molecules/Component4/index.js',
    'test/__mock__/debugDir/molecules/Component5/index.js',
    'test/__mock__/debugDir/organisms/Component6/index.js',
    'test/__mock__/debugDir/organisms/Component7/index.js',
    'test/__mock__/debugDir/organisms/Component8/index.js',
    'test/__mock__/debugDir/organisms/Component9/index.js',
  ])
})

test('should correctly scan files with excludedDirectories configuration', (t) => {
  const targetDir = './test/__mock__/debugDir'
  const options = {
    ...defaultOptions,
    targetDir,
    recursive: true,
    excludedDirectories: ['IgnoreMe'],
  }
  const files = scanFiles(targetDir, options)
  t.deepEqual(files, [
    'test/__mock__/debugDir/component.js',
    'test/__mock__/debugDir/atoms/Component1/index.js',
    'test/__mock__/debugDir/atoms/Component2/index.js',
    'test/__mock__/debugDir/molecules/Component3/index.js',
    'test/__mock__/debugDir/molecules/Component4/index.js',
    'test/__mock__/debugDir/molecules/Component5/index.js',
    'test/__mock__/debugDir/organisms/Component6/index.js',
    'test/__mock__/debugDir/organisms/Component7/index.js',
    'test/__mock__/debugDir/organisms/Component8/index.js',
    'test/__mock__/debugDir/organisms/Component9/index.js',
  ])
})