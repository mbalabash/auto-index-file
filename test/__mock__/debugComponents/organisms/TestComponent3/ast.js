// Not exactly correct, but the structure for export is okay

const ast = {
  type: 'Program',
  start: 0,
  end: 250,
  body: [
    {
      type: 'ExportDefaultDeclaration',
      start: 42,
      end: 71,
      declaration: {
        type: 'Identifier',
        start: 57,
        end: 71,
        name: 'TestComponent3',
      },
    },
    {
      type: 'ExportNamedDeclaration',
      start: 0,
      end: 40,
      declaration: {
        type: 'VariableDeclaration',
        start: 7,
        end: 40,
        kind: 'const',
        declarations: [
          {
            type: 'VariableDeclarator',
            start: 13,
            end: 40,
            id: {
              type: 'Identifier', start: 13, end: 27, name: 'TestComponent3',
            },
            init: {
              type: 'ArrowFunctionExpression',
              start: 30,
              end: 40,
              id: null,
              params: [],
              generator: false,
              expression: true,
              async: false,
              body: {
                type: 'Literal', start: 36, end: 40, value: null, raw: 'null',
              },
            },
          },
        ],
      },
      specifiers: [],
      source: null,
    },
  ],
  sourceType: 'module',
}

module.exports = ast
