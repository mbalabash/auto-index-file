// Not exactly correct, but the structure for export is okay

const ast = {
  type: 'Program',
  start: 0,
  end: 273,
  body: [
    {
      type: 'ImportDeclaration',
      start: 0,
      end: 38,
      specifiers: [],
      source: [],
    },
    {
      type: 'ImportDeclaration',
      start: 39,
      end: 68,
      specifiers: [],
      source: [],
    },
    {
      type: 'VariableDeclaration',
      start: 70,
      end: 108,
      kind: 'const',
      declarations: [],
    },
    {
      type: 'VariableDeclaration',
      start: 171,
      end: 248,
      kind: 'const',
      declarations: [],
    },
    {
      type: 'ExportDefaultDeclaration',
      start: 250,
      end: 272,
      declaration: {
        name: 'TextComponent',
      },
    },
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
              name: 'PlainLink',
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
