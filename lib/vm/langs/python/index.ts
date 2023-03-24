const lib = require('../lib.js').default
const pylib = require('./lib.py').default

function compile(input, program) {
  return `<script src="https://cdn.jsdelivr.net/pyodide/v0.22.1/full/pyodide.js"></script>
<script>
  ${lib}
  function handleMessage(e) {
    const { action, payload } = JSON.parse(e.data)
    vm_send(action, payload)
  }

  window.addEventListener('message', handleMessage)

  async function vm_run() {
    let pyodide = await loadPyodide();
    pyodide.runPython(\`${pylib}${input}${program}\`)
    console.log('done')
    // window.removeEventListener('message', handleMessage)
  }

  vm_run()
</script>`
}

const python = {
  compile,
}

export default python
