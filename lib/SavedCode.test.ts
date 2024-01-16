// organizeImports.test.ts
import { organizeImports } from './SavedCode'

describe('organizeImports', () => {
  it('should organize JavaScript requires', () => {
    const code = `console.log('Hello');\nconst fs = require('fs');`
    const expected = `const fs = require('fs');\nconsole.log('Hello');`
    expect(organizeImports(code)).toBe(expected)
  })

  it('should correctly organize Python imports', () => {
    const pythonCode = `print('Hello World')\nimport os\nimport sys\nprint('Another line')\nimport os`
    const expectedOutput = `import os\nimport sys\nprint('Hello World')\nprint('Another line')`

    expect(organizeImports(pythonCode)).toBe(expectedOutput)
  })
})
