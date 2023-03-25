'use client'

import ScriptingChallenge from 'ui/lesson/ScriptingChallenge'
import { EditorConfig } from 'types'

const config: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript: {
      program: `
    let iter = vm_rnd_between(5,20)

    for (let i=0;i<iter;i++) {
      const hash = findHash(i)
      await sleep(10)
      console.log(hash)
    }

    const hash = findHash(iter+1)
    const hashResult = '00000' + hash.substring(5,hash.length-1)

    console.log(hashResult)
    console.log(' ')
    console.log(\`It took \$\{iter+1\} tries to find a hash starting with 5 zero's\`)

    vm_close()
    `,
      defaultCode: `const crypto = require('crypto')

function findHash(nonce) {
  const hash = crypto.createHash('sha256').update(nonce).digest('hex')

  return hash
}`,
    },
    python: {
      program: `
for i in range(20):
  hash = find_hash(i)
  print(hash)`,
      defaultCode: `from hashlib import sha256

def find_hash(nonce):
  hash = sha256(str(nonce).encode('utf-8')).hexdigest()

  return hash
`,
    },
  },
}

export default function ScriptingOne() {
  return <ScriptingChallenge config={config} />
}
