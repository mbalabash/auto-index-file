// Not exactly correct, but the structure for export is okay

const ast = {
  type: 'Program',
  start: 0,
  end: 250,
  body: [
    {
      type: 'ExportNamedDeclaration',
      start: 0,
      end: 50,
      declaration: {
        type: 'FunctionDeclaration',
        start: 7,
        end: 50,
        id: {
          type: 'Identifier', start: 16, end: 30, name: 'TestComponent4',
        },
        params: [],
        generator: false,
        expression: false,
        async: false,
        body: {
          type: 'BlockStatement',
          start: 33,
          end: 50,
          body: [
            {
              type: 'ReturnStatement',
              start: 37,
              end: 48,
              argument: {
                type: 'Literal', start: 44, end: 48, value: null, raw: 'null',
              },
            },
          ],
        },
      },
      specifiers: [],
      source: null,
    },
  ],
  sourceType: 'module',
}

module.exports = ast
