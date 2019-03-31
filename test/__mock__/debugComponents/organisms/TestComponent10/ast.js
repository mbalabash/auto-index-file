// Not exactly correct, but the structure for export is okay

const ast = {
  type: 'Program',
  start: 0,
  end: 250,
  body: [
    {
      type: 'ExportDefaultDeclaration',
      start: 0,
      end: 59,
      declaration: {
        type: 'FunctionDeclaration',
        start: 15,
        end: 59,
        id: {
          type: 'Identifier',
          start: 24,
          end: 39,
          name: 'TestComponent10',
        },
        params: [],
        generator: false,
        expression: false,
        async: false,
        body: {
          type: 'BlockStatement',
          start: 42,
          end: 59,
          body: [
            {
              type: 'ReturnStatement',
              start: 46,
              end: 57,
              argument: {
                type: 'Literal',
                start: 53,
                end: 57,
                value: null,
                raw: 'null',
              },
            },
          ],
        },
      },
    },
  ],
  sourceType: 'module',
}

module.exports = ast
