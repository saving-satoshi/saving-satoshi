importScripts('https://cdn.jsdelivr.net/pyodide/v0.22.1/full/pyodide.js')

function emit(action, payload) {
  self.postMessage(JSON.stringify({ action, payload }))
}

self.onmessage = async (event) => {
  const { action, payload } = JSON.parse(event.data)

  switch (action) {
    case 'init': {
      self.pyodide = await loadPyodide()
      // await self.pyodide.loadPackage(["numpy", "pytz"]);
      emit('pyodide_ready')
      break
    }
    case 'run': {
      try {
        await self.pyodide.loadPackagesFromImports(payload)
        const result = await self.pyodide.runPythonAsync(payload)
        emit('close')
      } catch (error) {
        emit('error', error.message)
      }
      break
    }
  }
}
