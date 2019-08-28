const disableCamelcaseLinterWarning = (fileContent) => `/* eslint-disable camelcase */\n${fileContent}`

const addEmptyLineToEndOfFile = (fileContent) => `${fileContent}\n`

const postProcessFileContent = (fileContent) => {
  let content = fileContent.slice()

  content = disableCamelcaseLinterWarning(content)
  content = addEmptyLineToEndOfFile(content)

  return content
}

module.exports = postProcessFileContent
