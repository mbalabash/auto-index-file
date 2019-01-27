// const chokidar = require('chokidar')
const initArgParser = require('./argParser')
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

  console.log(options)

  autoIndexFile(options)
})()
