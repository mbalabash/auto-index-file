const { ArgumentParser } = require('argparse')

const initArgParser = () => {
  const argParser = new ArgumentParser({
    prog: 'AutoIndexFile',
    description: 'Index.js file without your tears 😉',
    addHelp: true,
  })

  argParser.addArgument(['-t', '--targetDir'], {
    metavar: 'directory',
    required: true,
    help: 'Target directory for processing',
  })
  argParser.addArgument(['-w', '--watch'], {
    defaultValue: false,
    action: 'storeTrue',
    type: (value) => value === 'true',
    help: 'Observe file changes (default: false)',
  })
  argParser.addArgument(['-e', '--excludedDirectories'], {
    metavar: '',
    defaultValue: [],
    nargs: '+',
    help: 'Excluded directories (default: [])',
  })

  return argParser
}

module.exports = initArgParser
