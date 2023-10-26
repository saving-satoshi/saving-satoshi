'use client'

import { ScriptingChallenge, LessonInfo, CodeExample } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useEffect, useLayoutEffect, useState } from 'react'
import { getLessonKey } from 'lib/progress'
import { editor } from 'monaco-editor'
import { secp256k1 } from 'ui/lesson/ScriptingChallenge/library/'

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
  defaultCode: ` ${secp256k1.secp256k1js}
  // Import ECDSA library.
  // Multiply the private key by the ECDSA generator point G to
  // produce a new curve point which is the public key.
  // Return that curve point (also known as a group element)
  // which will be an instance of secp256k1.GE
  // See the library source code for the exact definition
  // https://github.com/saving-satoshi/challenges/blob/master/chapter4/javascript/lib/secp256k1.js
  const G = secp256k1.G
  // To submit your answer, log it to the terminal using console.log().

`,
  validate: async (answer: string) => {
    const parsedAnswer = JSON.parse(answer)
    const correctPattern = /^0x[0-9a-fA-F]{64}$/
    if (parsedAnswer) {
      if (
        parsedAnswer['x'].match(correctPattern) &&
        parsedAnswer['y'].match(correctPattern)
      ) {
        return [true, 'Nicely Done ']
      } else {
        return [false, 'Try multiplying with the G constant']
      }
    } else {
      return [false, 'Try logging out your answer']
    }
  },
  hiddenRange: [1, 0, 126, 0],
  constraints: [
    {
      range: [133, 1, 137, 1],
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
  defaultCode: `${secp256k1.secp256k1py}
# Import ECDSA library.
# Multiply the private key by the ECDSA generator point G to
# produce a new curve point which is the public key.
# Return that curve point (also known as a group element)
# which will be an instance of secp256k1.GE
# See the library source code for the exact definition
# https://github.com/saving-satoshi/challenges/blob/master/chapter4/python/lib/secp256k1.py
G = SECP256K1.FAST_G
# To submit your answer, print to the terminal using print()


 `,
  validate: async (answer) => {
    const parsedAnswer = JSON.parse(answer)
    const correctPattern = /^0x[0-9a-fA-F]{64}$/
    if (parsedAnswer) {
      if (
        parsedAnswer['x'].match(correctPattern) &&
        parsedAnswer['y'].match(correctPattern)
      ) {
        return [true, 'Nicely Done ']
      } else {
        return [false, 'Try multiplying with the G constant']
      }
    } else {
      return [false, 'Try printing out your answer']
    }
  },
  hiddenRange: [1, 0, 126, 0],
  constraints: [
    {
      range: [133, 1, 136, 1],
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
