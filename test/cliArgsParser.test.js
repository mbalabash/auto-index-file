const test = require('ava')
const initArgParser = require('../src/cliArgsParser')

const defaultOptions = {
  targetDir: '',
  fileFormats: ['.js'],
  excludedDirectories: [],
  recursive: false,
  watch: false,
}

// t.deepEqual not working like expected with argParser result object
const validateConfigValues = (t, options, correctOptions) => {
  correctOptions.forEach((option) => {
    const [key, value] = option
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i += 1) {
        t.is(options[key][i], value[i])
      }
    } else {
      t.is(options[key], value)
    }
  })
}

test('should correctly initialize app arguments with minimal configuration', (t) => {
  const cliArgs = '-t ./test/__mock__/debugDir'
  const argParser = initArgParser()
  const options = argParser.parseArgs(cliArgs.split(' '))
  const correctOptions = Object.entries({
    ...defaultOptions,
    targetDir: './test/__mock__/debugDir',
  })

  validateConfigValues(t, options, correctOptions)
})

test('should correctly initialize app arguments with maximum configuration', (t) => {
  const cliArgs = '-t ./test/__mock__/debugDir -f .js .jsx .ts -e testDir1 testDir2 -r -w'
  const argParser = initArgParser()
  const options = argParser.parseArgs(cliArgs.split(' '))
  const correctOptions = Object.entries({
    targetDir: './test/__mock__/debugDir',
    fileFormats: ['.js', '.jsx', '.ts'],
    excludedDirectories: ['testDir1', 'testDir2'],
    recursive: true,
    watch: true,
  })

  validateConfigValues(t, options, correctOptions)
})
