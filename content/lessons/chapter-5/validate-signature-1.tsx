'use client'

import { ScriptingChallenge, LessonInfo, CodeExample } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useState } from 'react'
import { getLessonKey } from 'lib/progress'
import { useDataContext } from 'contexts/DataContext'
import { getLanguageString } from 'lib/SavedCode'

export const metadata = {
  title: 'chapter_five.validate_signature_one.title',
  key: 'CH5VLS1',
}
const javascript = {
  program: `
  console.log(encode_message(text))
  console.log("KILL")`,
  defaultFunction: {
    name: 'encode_message',
    args: ['text'],
  },
  defaultCode: `const { Hash } = require('crypto');
// Provided by Vanderpoole
let text = "I am Vanderpoole and I have control of the private key Satoshi\\n"
text += "used to sign the first-ever Bitcoin transaction confirmed in block #170.\\n"
text += "This message is signed with the same private key."

function encode_message(text){
// Given an ascii-encoded text message, serialize a byte array
// with the Bitcoin protocol prefix string followed by the text
// and both components preceded by a length byte.
// Returns a 32-byte hex value.
  const prefix = Buffer.from('Bitcoin Signed Message:\\n', 'ascii');

}
`,
  validate: async (answer: string) => {
    const correctAnswer =
      '73a16290e005b119b9ce0ceea52949f0bd4f925e808b5a54c631702d3fea1242'
    console.log(typeof answer, typeof correctAnswer)
    console.log(answer, correctAnswer, answer === correctAnswer)
    if (answer) {
      if (answer == correctAnswer) {
        return [true, 'Nicely Done ']
      }
      return [false, 'Not a valid hex value']
    }
    return [false, 'Return a value']
  },
  constraints: [
    {
      range: [1, 1, 15, 1],
      allowMultiline: true,
    },
  ],
}

const python = {
  program: `
print(encode_message(text))
print("KILL")`,
  defaultFunction: {
    name: 'encode_message',
    args: ['text'],
  },
  defaultCode: `import hashlib
# Defined by Bitcoin message signing protocol
# Provided by Vanderpoole
text = "I am Vanderpoole and I have control of the private key Satoshi\\n"
text += "used to sign the first-ever Bitcoin transaction confirmed in block #170.\\n"
text += "This message is signed with the same private key."

def encode_message(text):
    # Given an ascii-encoded text message, serialize a byte array
    # with the Bitcoin protocol prefix string followed by the text
    # and both components preceded by a length byte.
    # Returns a 32-byte hex value.
    prefix = "Bitcoin Signed Message:\\n"
`,
  validate: async (answer: string) => {
    const correctAnswer =
      '73a16290e005b119b9ce0ceea52949f0bd4f925e808b5a54c631702d3fea1242'
    if (answer) {
      if (answer === correctAnswer) {
        return [true, 'Nicely Done ']
      }
      return [false, 'Not a valid hex value']
    }
    return [false, 'Return a value']
  },
  constraints: [
    {
      range: [1, 1, 14, 1],
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
  const { currentLanguage } = useDataContext()
  const [language, setLanguage] = useState(getLanguageString(currentLanguage))
  const handleSelectLanguage = (language: string) => {
    setLanguage(language)
  }
  return (
    <ScriptingChallenge
      lang={lang}
      config={config}
      saveData
      lessonKey={getLessonKey('chapter-5', 'validate-signature-1')}
      successMessage={''}
      onSelectLanguage={handleSelectLanguage}
    >
      <LessonInfo>
        <Text className="font-nunito text-2xl font-bold text-white">
          {t('chapter_five.validate_signature_one.heading')}
        </Text>
        <Text className="mt-2 font-nunito text-xl text-white">
          {t('chapter_five.validate_signature_one.paragraph_one')}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_five.validate_signature_one.paragraph_two')}
        </Text>
        <CodeExample
          className="mt-4 font-space-mono"
          code={`[size of prefix][prefix][size of message][message]`}
          language="shell"
        />
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_five.validate_signature_one.paragraph_three')}
        </Text>
      </LessonInfo>
    </ScriptingChallenge>
  )
}
