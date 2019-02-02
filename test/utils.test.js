const test = require('ava')
const { isCorrectFileName, getParentDirectoryName, normalizeFilesPath } = require('../src/utils')

test('should be a correct file name', (t) => {
  const correctFileName1 = 'Index.js'
  const correctFileName2 = 'inDex.JS'
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

test('should correctly normalize file path', async (t) => {
  const moduleObj1 = { file: './data/components/test/index.js' }
  const moduleObj2 = { file: './components/Button/index.js' }
  const moduleObj3 = { file: './components/test/data/atoms/Text/index.js' }
  const moduleObj4 = { file: './modules/ui/data/test/components/kit/qwe/Text/index.js' }

  t.deepEqual(normalizeFilesPath('data/components', [moduleObj1]), [{ file: './test' }])
  t.deepEqual(normalizeFilesPath('components', [moduleObj2]), [{ file: './Button' }])
  t.deepEqual(normalizeFilesPath('components', [moduleObj3]), [{ file: './test/data/atoms/Text' }])
  t.deepEqual(normalizeFilesPath('modules/ui/data/test/components', [moduleObj4]), [
    { file: './kit/qwe/Text' },
  ])
})
