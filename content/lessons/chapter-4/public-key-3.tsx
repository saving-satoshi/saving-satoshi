'use client'

import { ScriptingChallenge, LessonInfo, CodeExample } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useEffect, useState } from 'react'
import { getLessonKey } from 'lib/progress'
import { editor } from 'monaco-editor'
import { Secp256k1 } from 'ui/lesson/ScriptingChallenge/library/'

export const metadata = {
  title: 'chapter_four.public_key_three.title',
  key: 'CH4PKY3',
}
const javascript = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'rawPublicKey',
    args: ['private_key'],
  },
  defaultCode: `${Secp256k1.secp256k1}
  // Import ECDSA library.
  // Multiply the private key by the ECDSA generator point G to
  // produce a new curve point which is the public key.
  // Return that curve point (also known as a group element)
  // which will be an instance of secp256k1.GE
  // See the library source code for the exact definition
  const G = secp256k1.G
  // To submit your answer, log it to the terminal using console.log().

`,
  validate: async (answer) => {
    return [true, '']
  },
  constraints: [
    {
      range: [11, 1, 7, 1],
      allowMultiline: true,
    },
  ],
}

const python = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'rawPublicKey',
    args: ['private_key'],
  },
  defaultCode: `# Import ECDSA library.
from lib import secp256k1

def privatekey_to_publickey(private_key):
    # Multiply the private key by the ECDSA generator point G to
    # produce a new curve point which is the public key.
    # Return that curve point (also known as a group element)
    # which will be an instance of secp256k1.GE
    # See the library source code for the exact definition
    G = secp256k1.G
`,
  //   defaultCode: `from hashlib import sha256

  // # Create a program that finds a sha256 hash starting with 5 zeroes.
  // # To submit your answer, print it to the terminal using print().

  // # Type your code here
  // `,
  validate: async (answer) => {
    return [true, '']
  },
  constraints: [
    {
      range: [5, 1, 11, 1],
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

export default function PublicKey3({ lang }) {
  const t = useTranslations(lang)

  const [language, setLanguage] = useState(config.defaultLanguage)

  const handleSelectLanguage = (language: string) => {
    setLanguage(language)
  }

  return (
    <ScriptingChallenge
      lang={lang}
      config={config}
      hiddenRange={[1, 0, 1, 0]}
      lessonKey={getLessonKey('chapter-2', 'scripting-2')}
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
