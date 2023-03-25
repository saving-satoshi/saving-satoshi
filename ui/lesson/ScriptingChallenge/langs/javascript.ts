function compile(input: string, program: string) {
  return `<script>
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

  function vm_close() {
    vm_send('close')
  }

  function sleep(timeout = 1000) {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout)
    })
  }

  const console = {};
  console.log = function() {
    const args = Array.from(arguments)
    vm_send('log', args.map((arg) => arg.toString()).join(' '))
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

  async function vm_run() {
    ${input}
    ${program}
  }

  vm_run()
</script>`
}

const javascript = {
  compile,
}

export default javascript
