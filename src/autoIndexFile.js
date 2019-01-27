// const chokidar = require('chokidar')
const generateFileContent = require('./generateFileContent')
const { writeIndexFile } = require('./utils')

const defaultConfiguration = {
  rootDir: 'src/components',
  fileFormats: ['.js', '.jsx', '.ts'],
  ignoreDirectories: [],
  ignoreFiles: [],
  recursive: true,
  watch: true,
}

const autoIndexFile = async (options) => {
  try {
    const { rootDir } = options
    const fileContent = await generateFileContent(options)
    if (fileContent) {
      await writeIndexFile(rootDir, fileContent)
    }
  } catch (error) {
    console.error(error)
  }
}

;(async () => {
  // parse cli arguments
  const cliOptions = { rootDir: 'debugDir' }
  const options = { ...defaultConfiguration, ...cliOptions }

  autoIndexFile(options)
})()
