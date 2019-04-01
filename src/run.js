const initArgParser = require('./cliArgsParser')
const filesWatcher = require('./filesWatcher')
const autoIndexFile = require('./autoIndexFile')

;

(async () => {
  const argParser = initArgParser()
  const options = argParser.parseArgs()
  const { watch } = options

  if (watch) {
    filesWatcher(options)
  } else {
    await autoIndexFile(options)
  }
})()
