import langs from './langs'

export function create(program: string, config: { language: string }) {
  const events = {}

  function emit(id, payload) {
    if (events.hasOwnProperty(id)) {
      events[id].forEach((cb) => cb(payload))
    }
  }

  return {
    async run(input: string, entry: string) {
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

      const code = langs[config.language].compile(input, program)
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
