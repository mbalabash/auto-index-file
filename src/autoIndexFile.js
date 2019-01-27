const chokidar = require('chokidar')
const initArgParser = require('./cliArgsParser')
const { writeIndexFile } = require('./utils')
const generateFileContent = require('./generateFileContent')

const autoIndexFile = async (options) => {
  try {
    const { targetDir } = options
    const fileContent = await generateFileContent(options)
    if (fileContent) {
      await writeIndexFile(targetDir, fileContent)
    }
  } catch (error) {
    console.error(error)
  }
}

;(async () => {
  const argParser = initArgParser()
  const options = argParser.parseArgs()

  const { watch, targetDir } = options
  if (watch) {
    const watcher = chokidar.watch(targetDir, {
      ignored: `${targetDir}/index.js`,
      persistent: true,
    })
    const worker = async (path) => {
      console.log(`Changed: ${path}\n`)
      await autoIndexFile(options)
    }
    watcher.on('change', worker)
    watcher.on('unlink', worker)
  } else {
    await autoIndexFile(options)
  }

  console.log('AutoIndexFile started!')
})()
