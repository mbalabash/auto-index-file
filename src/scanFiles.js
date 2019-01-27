const fs = require('fs')
const path = require('path')

const scanFiles = (directory, options) => {
  const directories = []
  let files = []

  try {
    if (!fs.existsSync(directory)) throw new Error(`${directory} - directory not exist!`)

    const {
      fileFormats, ignoreFiles, ignoreDirectories, recursive,
    } = options

    const fileNames = fs.readdirSync(directory)
    fileNames.forEach((name) => {
      const targetPath = path.join(directory, name)
      const stats = fs.lstatSync(targetPath)

      if (
        stats.isFile()
        && !ignoreFiles.includes(name)
        && fileFormats.includes(path.extname(name))
      ) {
        files.push(targetPath)
      }

      if (stats.isDirectory() && !ignoreDirectories.includes(name)) {
        directories.push(targetPath)
      }
    })

    if (directories.length > 0 && recursive) {
      for (let i = 0; i < directories.length; i += 1) {
        files = files.concat(scanFiles(directories[i], options))
      }
    }
  } catch (error) {
    console.error(error)
  }

  return files
}

module.exports = scanFiles
