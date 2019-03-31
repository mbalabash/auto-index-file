// Not exactly correct, but the structure for export is okay

const ast = {
  type: 'Program',
  start: 0,
  end: 250,
  body: [
    {
      type: 'ExportDefaultDeclaration',
      start: 217,
      end: 276,
      declaration: {
        type: 'CallExpression',
        start: 232,
        end: 276,
        callee: {
          type: 'CallExpression',
          start: 232,
          end: 260,
          callee: {
            type: 'Identifier', start: 232, end: 239, name: 'connect',
          },
          arguments: [
            {
              type: 'ArrowFunctionExpression',
              start: 243,
              end: 251,
              id: null,
              params: [],
              generator: false,
              expression: false,
              async: false,
              body: {
                type: 'BlockStatement', start: 249, end: 251, body: [],
              },
            },
            {
              type: 'ObjectExpression', start: 255, end: 257, properties: [],
            },
          ],
        },
        arguments: [{
          type: 'Identifier', start: 261, end: 275, name: 'TestComponent8',
        }],
      },
    },
  ],
  sourceType: 'module',
}

module.exports = ast
