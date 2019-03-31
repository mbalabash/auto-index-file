// Not exactly correct, but the structure for export is okay

const ast = {
  type: 'Program',
  start: 0,
  end: 250,
  body: [
    {
      type: 'ExportDefaultDeclaration',
      start: 149,
      end: 178,
      declaration: {
        type: 'Identifier',
        start: 164,
        end: 178,
        name: 'TestComponent6',
      },
    },
    {
      type: 'ExportNamedDeclaration',
      start: 65,
      end: 147,
      declaration: {
        type: 'ClassDeclaration',
        start: 72,
        end: 147,
        id: {
          type: 'Identifier', start: 78, end: 92, name: 'TestComponent6',
        },
        superClass: {
          type: 'Identifier', start: 101, end: 110, name: 'Component',
        },
        body: {
          type: 'ClassBody',
          start: 111,
          end: 147,
          body: [
            {
              type: 'MethodDefinition',
              start: 115,
              end: 145,
              static: false,
              computed: false,
              key: {
                type: 'Identifier', start: 115, end: 121, name: 'render',
              },
              kind: 'method',
              value: {
                type: 'FunctionExpression',
                start: 121,
                end: 145,
                id: null,
                params: [],
                generator: false,
                expression: false,
                async: false,
                body: {
                  type: 'BlockStatement',
                  start: 124,
                  end: 145,
                  body: [
                    {
                      type: 'ReturnStatement',
                      start: 130,
                      end: 141,
                      argument: {
                        type: 'Literal', start: 137, end: 141, value: null, raw: 'null',
                      },
                    },
                  ],
                },
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
