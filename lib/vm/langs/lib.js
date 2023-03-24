function vm_rnd_between(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function vm_rnd_string(length = 64) {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'

  let result = ' '
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }

  return result
}

function vm_send(action, payload = null) {
  window.parent.postMessage(
    JSON.stringify({
      action: action,
      payload: payload,
    })
  )
}

function vm_log() {
  const args = Array.from(arguments)
  vm_send('log', args.map((arg) => arg.toString()).join(' '))
}

function vm_close() {
  vm_send('close')
}

function vm_sleep(timeout = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
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
                  return vm_rnd_string()
                },
              }
            },
          }
        },
      }
    }
  }
}
