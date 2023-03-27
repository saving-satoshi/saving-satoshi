'use client'

import ScriptingChallenge from 'ui/lesson/ScriptingChallenge'
import { EditorConfig } from 'types'

const javascript = {
  program: `
// Validate whether findHash is defined in the user script, and whether its a function.
if (typeof findHash !== 'function') {
await VM.validate()
return VM.close()
}

// Validate whether the user code will produce a string with a length of 64.
const testResult = findHash(0)
if (!testResult || testResult.length !== 64) {
await VM.validate()
return VM.close()
}

// Get a number for the amount of fake tries the script will perform.
let n = VM.randomBetween(5,20)

// Run the user script 'n' amount of times.
for (let nonce=0;nonce<n;nonce++) {
const hash = findHash(nonce)
await sleep(100)
log(hash, nonce)
}

// After n amount of tries have failed, force a hash starting with 5 zeroes.
const hash = findHash(n+1)
const result = '00000' + hash.substring(5, hash.length)
log(result, n+1)

// Validate the answer.
const success = await VM.validate(result)

// Helpers
function log(hash, nonce) {
console.log(hash + ' (nonce: ' + nonce + ')')
}
`,
  defaultCode: `const crypto = require('crypto')

function findHash(nonce) {
const hash = crypto.createHash('sha256').update(nonce).digest('hex')

return hash
}`,
  validate: async (answer) => {
    return answer.startsWith('00000') && answer.length === 64
  },
}

const python = {
  program: `
# Validate whether find_hash is defined in the user script, and whether its a function.
#if not callable(find_hash):
#    print('error in user script')

#print('rnd: '+VM.random_string())

#def cb():
#    print('cb called')

#VM.request('test', 123, cb)

for i in range(20):
    hash = find_hash(i)
    print(hash)`,
  defaultCode: `from hashlib import sha256

def find_hash(nonce):
    hash = sha256(str(nonce).encode('utf-8')).hexdigest()

    return hash
`,
  validate: async (answer) => {
    console.log(answer)

    return true
  },
}

const config: EditorConfig = {
  defaultLanguage: 'python',
  languages: {
    javascript,
    python,
  },
}

export default function ScriptingOne() {
  return <ScriptingChallenge config={config} />
}
