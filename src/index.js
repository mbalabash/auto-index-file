const generateIndexFile = require('./generateIndexFile')
const writeIndexFile = require('./writeIndexFile')

const defaultConfiguration = {
  rootDir: 'src/components',
  processingFileFormats: ['.js', '.jsx', '.ts'],
  ignoreFiles: [],
  ignoreDirectories: [],
  recursive: true,
}

;(async () => {
  // parse cli arguments
  const cliOptions = { rootDir: 'debugDir' }
  const config = { ...defaultConfiguration, ...cliOptions }

  const fileContent = await generateIndexFile(config)
  if (typeof fileContent !== 'string') return

  const { rootDir } = config
  writeIndexFile(rootDir, fileContent)
})()
