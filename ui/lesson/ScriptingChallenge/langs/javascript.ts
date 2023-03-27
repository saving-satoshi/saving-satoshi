function compile(input: string, program: string) {
  return `<script>
window.addEventListener('message', e => {
  const data = JSON.parse(e.data)

  switch(data.action) {
    case 'result': {
      VM.response(data)
      break
    }
  }
})

class VM {
  static requestId = 0
  static callbacks = {}

  static randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  static randomString(length=64) {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'

    let result = ''
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    return result
  }

  static send(action, payload = null) {
    window.parent.postMessage(
      JSON.stringify({
        action,
        payload,
      })
    )
  }

  static request(action, payload = null) {
    return new Promise((resolve) => {
      const requestId = VM.requestId++

      VM.callbacks[requestId] = resolve

      window.parent.postMessage(
        JSON.stringify({
          action,
          payload,
          requestId
        })
      )

    })
  }

  static response({ action, payload, requestId }) {
    if (!VM.callbacks.hasOwnProperty(requestId)) {
      return
    }
    const callback = VM.callbacks[requestId]
    callback(payload)
  }

  static close() {
    VM.send('close')
  }

  static async validate(output='') {
    return VM.request('validate', output)
  }

  static async run() {
    ${input}
    ${program}

    VM.close()
  }
}

function sleep(timeout = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}

const console = {};
console.log = function() {
  const args = Array.from(arguments)
  VM.send('log', args.map((arg) => arg.toString()).join(' '))
}

function require(pckg) {
  switch (pckg) {
    case 'crypto': {
      return {
        createHash: (algo) => {
          return {
            update: (input) => {
              return {
                digest: (format) => {
                  return VM.randomString()
                },
              }
            },
          }
        },
      }
    }
  }
}

VM.run()
</script>`
}

const javascript = {
  compile,
}

export default javascript
