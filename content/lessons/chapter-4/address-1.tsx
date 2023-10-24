'use client'
import * as crypto from 'crypto';
import { ScriptingChallenge, LessonInfo } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useState } from 'react'
import { getLessonKey } from 'lib/progress'

export const metadata = {
  title: 'chapter_four.address_one.title',
  key: 'CH4ADDR1',
}
const javascript = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'hash_compressed',
    args: ['compressed'],
  },
  defaultCode: `const crypto = require('crypto')

// Get the sha256 digest of the compressed public key.
// Then get the ripemd160 digest of that sha256 hash
// Return 20-byte array
// Type your code here
`,
  validate: async (answer) => {

    if (answer.startsWith("<Buffer")) {
      return [false, "Ensure you are properly decoding your answer"]
    }
if (answer.length !== 40) {
      return [false, 'Array must be 20 bytes long']
    }
if (answer !== crypto.createHash('ripemd160')
      .update(crypto.createHash('sha256')
        .update("021f5b099ee48f1697658361bfd600c174021a871d8e5a4686f5c0753ba70abda3")
        .digest())
      .digest('hex')) {
      return [false, 'Ensure you are using the correct compressed key and it is being decoded']
    }
    return[true,undefined]
  },
  constraints: [
    {
      range: [7, 1, 7, 1],
      allowMultiline: true,
    },
  ],
}

const python = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'hash_compressed',
    args: ['compressed'],
  },
  defaultCode: `import hashlib

# Get the sha256 digest of the compressed public key.
# Then get the ripemd160 digest of that sha256 hash
# Return 20-byte array
# Type your code here
`,
  validate: async (answer) => {
    if (answer.startsWith("b'")) {
      return [false, "Ensure you are properly decoding your answer"]
    }
if (answer.length !== 40) {
      return [false, 'Array must be 20 bytes long']
    }
if (answer !== crypto.createHash('ripemd160')
      .update(crypto.createHash('sha256')
        .update("021f5b099ee48f1697658361bfd600c174021a871d8e5a4686f5c0753ba70abda3")
        .digest())
      .digest('hex')) {
      return [false, 'Ensure you are using the correct compressed key and it is being decoded']
    }
      return [true, undefined]
  },
  constraints: [
    {
      range: [7, 1, 7, 1],
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

export default function Scripting2({ lang }) {
  const t = useTranslations(lang)

  const [language, setLanguage] = useState(config.defaultLanguage)

  const handleSelectLanguage = (language: string) => {
    setLanguage(language)
  }

  return (
    <ScriptingChallenge
      lang={lang}
      config={config}
      lessonKey={getLessonKey('chapter-4', 'address-1')}
      successMessage={t('chapter_four.address_one.success')}
      onSelectLanguage={handleSelectLanguage}
      saveData={true}
    >
      <LessonInfo>
        <Text className="font-nunito text-xl text-white">
          {t('chapter_four.address_one.paragraph_one')}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(`chapter_four.address_one.paragraph_two`)}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(`chapter_four.address_one.paragraph_three`)}
        </Text>
      </LessonInfo>
    </ScriptingChallenge>
  )
}

