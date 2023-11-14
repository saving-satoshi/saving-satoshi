'use client'

import { ScriptingChallenge, LessonInfo, CodeExample } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useState } from 'react'
import { getLessonKey } from 'lib/progress'

export const metadata = {
  title: 'chapter_five.validate_signature_one.title',
  key: 'CH5VLS1',
}
const javascript = {
  program: `console.log("KILL")`,
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
// Return a hex string. 
const prefix = Buffer.from('Bitcoin Signed Message:\\n', 'ascii');

}
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
  constraints: [
    {
      range: [12, 1, 14, 1],
      allowMultiline: true,
    },
  ],
}

const python = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'encode_message',
    args: ['prefix', 'text'],
  },
  defaultCode: `import hashlib 
# Defined by Bitcoin message signing protocol 
prefix = "Bitcoin Signed Message:\\n" 
# Provided by Vanderpoole 
text = "I am Vanderpoole and I have control of the private key Satoshi\\n" 
text += "used to sign the first-ever Bitcoin transaction confirmed in block #170.\\n" 
text += "This message is signed with the same private key." 

def encode_message(prefix, text): 
  # Given an ascii-encoded text message, serialize a byte array 
  # with the Bitcoin protocol prefix string followed by the text 
  # and both components preceded by a length byte. 
  # Return a hex string. 

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
  constraints: [
    {
      range: [14, 1, 15, 1],
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
      saveData
      lessonKey={getLessonKey('chapter-5', 'validate-signature-1')}
      successMessage={t('chapter_five.validate_signature_one.success')}
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
          className="mt-4"
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
