const lib = require('../lib.js').default

function compile(input: string, program: string) {
  return `<script>
  ${lib}
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
