function compile(input, program) {
  return `import js
import json
import pyodide
import builtins as __builtin__

def print(*args, **kwargs):
    # __builtin__.print(*args, **kwargs)
    js.postMessage(json.dumps({"action":"log","payload":args}))

${input}
${program}
`
}

const python = {
  compile,
}

export default python
