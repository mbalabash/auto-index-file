const path = require('path')

const getParentDirectoryName = fileName => path
  .dirname(fileName)
  .split(path.sep)
  .pop()

const isCorrectFileName = fileName => path.basename(fileName).toLowerCase() === 'index.js'

module.exports = { isCorrectFileName, getParentDirectoryName }
