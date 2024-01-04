'use client'

import { ScriptingChallenge, LessonInfo, CodeExample } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useState } from 'react'
import { getLessonKey } from 'lib/progress'
import { useAuthContext } from 'providers/AuthProvider'

export const metadata = {
  title: 'chapter_four.public_key_three.title',
  key: 'CH4PKY3',
}

export default function PublicKey3({ lang }) {
  const t = useTranslations(lang)
  const { account } = useAuthContext()
  const [privateKey, setPrivateKey] = useState('')

  if (account && !privateKey) {
    setPrivateKey(account?.private_key.toString())
  }

  const javascript = {
    program: `
console.log(privateKeyToPublicKey(\`${privateKey}\`))
console.log("KILL")`,
    defaultFunction: {
      name: 'privateKeyToPublicKey',
      args: ['privateKey'],
    },
    defaultCode: `
const secp256k1 = require('@savingsatoshi/secp256k1js')
// Multiply the private key by the ECDSA generator point G to
// produce a new curve point which is the public key.
// Return that curve point (also known as a group element)
// which will be an instance of secp256k1.GE
// See the library source code for the exact definition
// https://github.com/saving-satoshi/challenges/blob/master/chapter4/javascript/lib/secp256k1.js
const G = secp256k1.G

function privateKeyToPublicKey(privateKey) {

}
`,
    validate: async (answer: string) => {
      // Parsing the GE object string
      const regex = /([a-f0-9]+),([a-f0-9]+)/
      const cleanedAnswer = answer.replace(/\s/g, '')
      const match = cleanedAnswer.match(regex)

      const correctPattern = /^0x[0-9a-fA-F]{64}$/

      // Validate if the GE object string matches the required format
      if (match) {
        const hash1 = '0x' + match[1] // Prepending 0x for pattern matching
        const hash2 = '0x' + match[2] // Prepending 0x for pattern matching

        // Check if both hashes match the correct pattern
        if (hash1.match(correctPattern) && hash2.match(correctPattern)) {
          return [true, 'Nicely Done ']
        } else {
          return [false, 'Try multiplying with the G constant']
        }
      } else {
        return [false, 'Try logging out your answer']
      }
    },
    constraints: [
      {
        range: [12, 1, 12, 1],
        allowMultiline: true,
      },
    ],
  }

  const python = {
    program: `
print(privatekey_to_publickey("${privateKey}"))
print("KILL")`,
    defaultFunction: {
      name: 'privatekey_to_publickey',
      args: ['private_key'],
    },
    defaultCode: `import secp256k1py.secp256k1 as SECP256K1
# Multiply the private key by the ECDSA generator point G to
# produce a new curve point which is the public key.
# Return that curve point (also known as a group element)
# which will be an instance of secp256k1.GE
# See the library source code for the exact definition
# https://github.com/saving-satoshi/challenges/blob/master/chapter4/python/lib/secp256k1.py
G = SECP256K1.FAST_G

def privatekey_to_publickey(private_key):
`,
    validate: async (answer: string) => {
      // Parsing the new object string format
      const regex = /([a-f0-9]+),([a-f0-9]+)/
      const cleanedAnswer = answer.replace(/\s/g, '')
      const match = cleanedAnswer.match(regex)

      const correctPattern = /^0x[0-9a-fA-F]{64}$/

      // Validate if the object string matches the required format
      if (match) {
        const hash1 = '0x' + match[1] // Prepending 0x for pattern matching
        const hash2 = '0x' + match[2] // Prepending 0x for pattern matching

        // Check if both hashes match the correct pattern
        if (hash1.match(correctPattern) && hash2.match(correctPattern)) {
          return [true, 'Nicely Done']
        } else {
          return [false, 'Try multiplying with the G constant']
        }
      } else {
        return [false, 'Try logging out your answer']
      }
    },
    constraints: [
      {
        range: [11, 1, 11, 1],
        allowMultiline: true,
      },
    ],
  }

  const config: EditorConfig = {
    defaultLanguage: 'javascript',
    languages: {
      javascript,
      python,
    },
  }

  const [language, setLanguage] = useState(config.defaultLanguage)
  const handleSelectLanguage = (language: string) => {
    setLanguage(language)
  }

  return (
    <ScriptingChallenge
      lang={lang}
      config={config}
      saveData
      lessonKey={getLessonKey('chapter-4', 'public-key-3')}
      successMessage={t('chapter_four.public_key_three.success')}
      onSelectLanguage={handleSelectLanguage}
    >
      <LessonInfo>
        <Text className="font-nunito text-xl text-white">
          {t('chapter_four.public_key_three.paragraph_one')}
        </Text>
        <CodeExample
          className="mt-4"
          code={`G = {
            x: 0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28
               D959F2815B16F81798
            y: 0x483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554
               199C47D08FFB10D4B8
          }`}
          language="shell"
        />
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(`chapter_four.public_key_three.paragraph_two`)}
        </Text>
        <CodeExample className="mt-4" code={`P = k * G`} language="shell" />
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(`chapter_four.public_key_three.paragraph_three`)}
        </Text>
      </LessonInfo>
    </ScriptingChallenge>
  )
}
