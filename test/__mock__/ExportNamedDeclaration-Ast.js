// Not exactly correct, but the structure for export is okay

const ast = {
  type: 'Program',
  start: 0,
  end: 26,
  body: [
    {
      type: 'ExportNamedDeclaration',
      start: 0,
      end: 25,
      declaration: {
        type: 'VariableDeclaration',
        start: 31,
        end: 51,
        kind: 'const',
        declarations: [
          {
            type: 'VariableDeclarator',
            start: 37,
            end: 51,
            id: {
              type: 'Identifier',
              start: 13,
              end: 21,
              name: 'Component1',
            },
            init: [],
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
