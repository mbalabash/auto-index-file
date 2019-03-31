// Not exactly correct, but the structure for export is okay

const ast = {
  type: 'Program',
  start: 0,
  end: 250,
  body: [
    {
      type: 'ExportDefaultDeclaration',
      start: 65,
      end: 140,
      declaration: {
        type: 'ClassDeclaration',
        start: 80,
        end: 140,
        id: null,
        superClass: {
          type: 'Identifier', start: 94, end: 103, name: 'Component',
        },
        body: {
          type: 'ClassBody',
          start: 104,
          end: 140,
          body: [
            {
              type: 'MethodDefinition',
              start: 108,
              end: 138,
              static: false,
              computed: false,
              key: {
                type: 'Identifier', start: 108, end: 114, name: 'render',
              },
              kind: 'method',
              value: {
                type: 'FunctionExpression',
                start: 114,
                end: 138,
                id: null,
                params: [],
                generator: false,
                expression: false,
                async: false,
                body: {
                  type: 'BlockStatement',
                  start: 117,
                  end: 138,
                  body: [
                    {
                      type: 'ReturnStatement',
                      start: 123,
                      end: 134,
                      argument: {
                        type: 'Literal', start: 130, end: 134, value: null, raw: 'null',
                      },
                    },
                  ],
                },
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
