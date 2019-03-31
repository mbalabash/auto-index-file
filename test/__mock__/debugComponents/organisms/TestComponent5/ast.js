// Not exactly correct, but the structure for export is okay

const ast = {
  type: 'Program',
  start: 0,
  end: 250,
  body: [
    {
      type: 'ExportDefaultDeclaration',
      start: 65,
      end: 155,
      declaration: {
        type: 'ClassDeclaration',
        start: 80,
        end: 155,
        id: {
          type: 'Identifier', start: 86, end: 100, name: 'TestComponent5',
        },
        superClass: {
          type: 'Identifier', start: 109, end: 118, name: 'Component',
        },
        body: {
          type: 'ClassBody',
          start: 119,
          end: 155,
          body: [
            {
              type: 'MethodDefinition',
              start: 123,
              end: 153,
              static: false,
              computed: false,
              key: {
                type: 'Identifier', start: 123, end: 129, name: 'render',
              },
              kind: 'method',
              value: {
                type: 'FunctionExpression',
                start: 129,
                end: 153,
                id: null,
                params: [],
                generator: false,
                expression: false,
                async: false,
                body: {
                  type: 'BlockStatement',
                  start: 132,
                  end: 153,
                  body: [
                    {
                      type: 'ReturnStatement',
                      start: 138,
                      end: 149,
                      argument: {
                        type: 'Literal', start: 145, end: 149, value: null, raw: 'null',
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
