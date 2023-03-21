import sdk from './sdk'
import py_sdk from './py_sdk'

export function create(program: string, config: { language: string }) {
  const events = {}

  function emit(id, payload) {
    if (events.hasOwnProperty(id)) {
      events[id].forEach((cb) => cb(payload))
    }
  }

  return {
    run(input: string, entry: string) {
      const iframe = document.createElement('iframe')
      iframe.style.width = '0px'
      iframe.style.height = '0px'
      document.body.appendChild(iframe)

      function handleMessage(e) {
        try {
          const { action, payload } = JSON.parse(e.data)
          switch (action) {
            case 'log': {
              emit('log', payload)
              break
            }
            case 'error': {
              emit('error', payload)
              break
            }
            case 'close': {
              window.removeEventListener('message', handleMessage)
              document.body.removeChild(iframe)
              break
            }
          }
        } catch (ex) {}
      }

      window.addEventListener('message', handleMessage)

      let code

      switch (config.language) {
        case 'javascript': {
          code = `<script>
            ${sdk}
            async function vm_run() {
              ${input}
              ${program}
            }
            vm_run()
          </script>`
          break
        }

        case 'python': {
          code = `
          <script src="https://cdn.jsdelivr.net/pyodide/v0.22.1/full/pyodide.js"></script>
          <script>
            ${sdk}

            function handleMessage(e) {
              const { action, payload } = JSON.parse(e.data)
              vm_send(action, payload)
            }

            window.addEventListener('message', handleMessage)

            async function vm_run() {
              let pyodide = await loadPyodide();
              pyodide.runPython(\`${py_sdk}${input}${program}\`)
              console.log('done')
              // window.removeEventListener('message', handleMessage)
            }

            vm_run()
          </script>`
          break
        }
      }

      const doc = iframe.contentDocument
      doc.open()
      doc.write(code)
      doc.close()
    },

    on(id, callback) {
      if (!events.hasOwnProperty(id)) {
        events[id] = []
      }
      events[id].push(callback)
    },
  }
}
