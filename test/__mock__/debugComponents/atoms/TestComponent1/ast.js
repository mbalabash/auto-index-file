// Not exactly correct, but the structure for export is okay

const ast = {
  type: 'Program',
  start: 0,
  end: 250,
  body: [
    {
      type: 'ExportDefaultDeclaration',
      start: 35,
      end: 64,
      declaration: {
        type: 'Identifier',
        start: 50,
        end: 64,
        name: 'TestComponent1',
      },
    },
  ],
  sourceType: 'module',
}

module.exports = ast
