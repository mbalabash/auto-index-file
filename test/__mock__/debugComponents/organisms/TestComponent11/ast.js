// Not exactly correct, but the structure for export is okay

const ast = {
  type: 'Program',
  start: 0,
  end: 250,
  body: [
    {
      type: 'ExportDefaultDeclaration',
      start: 0,
      end: 29,
      declaration: {
        type: 'CallExpression',
        start: 15,
        end: 29,
        callee: {
          type: 'ArrowFunctionExpression',
          start: 16,
          end: 26,
          id: null,
          params: [],
          generator: false,
          expression: true,
          async: false,
          body: {
            type: 'Literal', start: 22, end: 26, value: null, raw: 'null',
          },
        },
        arguments: [],
      },
    },
  ],
  sourceType: 'module',
}

module.exports = ast
