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
        name: 'TestComponent1',
      },
    },
  ],
  sourceType: 'module',
}

module.exports = ast
