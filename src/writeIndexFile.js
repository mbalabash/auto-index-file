const fs = require('fs')
const path = require('path')

const writeIndexFile = (directory, content) => {
  const targetPath = path.join(directory, 'index.js')

  fs.writeFile(targetPath, content, (err) => {
    if (err) console.error(err)
    console.log(`Index file was successfully writed: ${targetPath}`)
  })
}

module.exports = writeIndexFile
