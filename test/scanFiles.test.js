const test = require('ava')
const scanFiles = require('../src/scanFiles')

const defaultOptions = {
  targetDir: '',
  excludedDirectories: [],
  watch: false,
}

test('should correctly scan files in directory without components', (t) => {
  const targetDir = './test/__mock__/debugComponents/hocs'
  const options = { ...defaultOptions, targetDir }
  const files = scanFiles(targetDir, options)
  t.deepEqual(files, [])
})

test('should correctly scan files in directory with components', (t) => {
  const targetDir = './test/__mock__/debugComponents'
  const options = { ...defaultOptions, targetDir }
  const files = scanFiles(targetDir, options)
  t.deepEqual(files, [
    'test/__mock__/debugComponents/atoms/TestComponent1/index.js',
    'test/__mock__/debugComponents/ignoreMe/TestComponent0/index.js',
    'test/__mock__/debugComponents/molecules/TestComponent2/index.js',
    'test/__mock__/debugComponents/organisms/TestComponent10/index.js',
    'test/__mock__/debugComponents/organisms/TestComponent11/index.js',
    'test/__mock__/debugComponents/organisms/TestComponent3/index.js',
    'test/__mock__/debugComponents/organisms/TestComponent4/index.js',
    'test/__mock__/debugComponents/organisms/TestComponent5/index.js',
    'test/__mock__/debugComponents/organisms/TestComponent6/index.js',
    'test/__mock__/debugComponents/organisms/TestComponent7/index.js',
    'test/__mock__/debugComponents/organisms/TestComponent8/index.js',
    'test/__mock__/debugComponents/organisms/TestComponent9/index.js',
  ])
})

test('should correctly scan files and handle excludedDirectories configuration', (t) => {
  const targetDir = './test/__mock__/debugComponents'
  const options = {
    ...defaultOptions,
    targetDir,
    excludedDirectories: ['ignoreMe'],
  }
  const files = scanFiles(targetDir, options)
  t.deepEqual(files, [
    'test/__mock__/debugComponents/atoms/TestComponent1/index.js',
    'test/__mock__/debugComponents/molecules/TestComponent2/index.js',
    'test/__mock__/debugComponents/organisms/TestComponent10/index.js',
    'test/__mock__/debugComponents/organisms/TestComponent11/index.js',
    'test/__mock__/debugComponents/organisms/TestComponent3/index.js',
    'test/__mock__/debugComponents/organisms/TestComponent4/index.js',
    'test/__mock__/debugComponents/organisms/TestComponent5/index.js',
    'test/__mock__/debugComponents/organisms/TestComponent6/index.js',
    'test/__mock__/debugComponents/organisms/TestComponent7/index.js',
    'test/__mock__/debugComponents/organisms/TestComponent8/index.js',
    'test/__mock__/debugComponents/organisms/TestComponent9/index.js',
  ])
})

test('should correctly scan files and handle excludedDirectories configuration with nested folders', (t) => {
  const targetDir = './test/__mock__/debugComponents'
  const options = {
    ...defaultOptions,
    targetDir,
    excludedDirectories: ['ignoreMe', 'organisms/TestComponent4'],
  }
  const files = scanFiles(targetDir, options)
  t.deepEqual(files, [
    'test/__mock__/debugComponents/atoms/TestComponent1/index.js',
    'test/__mock__/debugComponents/molecules/TestComponent2/index.js',
    'test/__mock__/debugComponents/organisms/TestComponent10/index.js',
    'test/__mock__/debugComponents/organisms/TestComponent11/index.js',
    'test/__mock__/debugComponents/organisms/TestComponent3/index.js',
    'test/__mock__/debugComponents/organisms/TestComponent5/index.js',
    'test/__mock__/debugComponents/organisms/TestComponent6/index.js',
    'test/__mock__/debugComponents/organisms/TestComponent7/index.js',
    'test/__mock__/debugComponents/organisms/TestComponent8/index.js',
    'test/__mock__/debugComponents/organisms/TestComponent9/index.js',
  ])
})
