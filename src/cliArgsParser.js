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
  argParser.addArgument(['-r', '--recursive'], {
    defaultValue: false,
    action: 'storeTrue',
    type: value => value === 'true',
    help: 'Run recursively (default: false)',
  })
  argParser.addArgument(['-w', '--watch'], {
    defaultValue: false,
    action: 'storeTrue',
    type: value => value === 'true',
    help: 'Observe file changes (default: false)',
  })
  argParser.addArgument(['-f', '--fileFormats'], {
    metavar: '',
    defaultValue: ['.js'],
    nargs: '+',
    help: 'File extensions whitelist (default: .js)',
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
