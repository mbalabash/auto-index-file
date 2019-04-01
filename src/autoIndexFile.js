const chalk = require('chalk')
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
    console.error(chalk.red(error.stack))
  }
}

module.exports = autoIndexFile
