const createFileContent = require('./createFileContent')
const { writeIndexFile } = require('./utils')

const defaultConfiguration = {
  rootDir: 'src/components',
  processingFileFormats: ['.js', '.jsx', '.ts'],
  ignoreDirectories: [],
  ignoreFiles: [],
  recursive: true,
  watch: true,
}

;(async () => {
  // parse cli arguments
  const cliOptions = { rootDir: 'debugDir' }
  const config = { ...defaultConfiguration, ...cliOptions }

  const fileContent = await createFileContent(config)
  if (typeof fileContent !== 'string') return

  const { rootDir } = config
  writeIndexFile(rootDir, fileContent)
})()
