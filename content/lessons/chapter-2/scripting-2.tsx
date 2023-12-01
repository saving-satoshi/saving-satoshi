'use client'

import * as crypto from 'crypto'
import { ScriptingChallenge, LessonInfo } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useState } from 'react'
import { getLessonKey } from 'lib/progress'

export const metadata = {
  title: 'chapter_two.scripting_one.title',
  key: 'CH2SCR2',
}

const javascript = {
  program: `
console.log(findHash())
console.log("KILL")`,
  defaultFunction: {
    name: 'findHash',
    args: ['nonce'],
  },
  defaultCode: `const crypto = require('crypto')

// Create a program that finds a sha256 hash starting with 5 zeroes.
// To submit your answer, return it from the function.

function findHash() {
// Type your code here

}
`,
  validate: async (answer) => {
    if (!answer.startsWith('00000')) {
      return [false, 'Hash must start with 5 zeroes.']
    }

    if (answer.length !== 64) {
      return [false, 'Hash must be 64 characters long']
    }

    return [true, undefined]
  },
  constraints: [
    {
      range: [7, 1, 10, 1],
      allowMultiline: true,
    },
  ],
}

const python = {
  program: `
print(find_hash())
print("KILL")`,
  defaultFunction: {
    name: 'find_hash',
    args: ['nonce'],
  },
  defaultCode: `from hashlib import sha256

# Create a program that finds a sha256 hash starting with 5 zeroes.
# To submit your answer, return it from the function.

def find_hash():
# Type your code here
`,
  validate: async (answer) => {
    if (!answer.startsWith('00000')) {
      return [false, 'Hash must start with 5 zeroes.']
    }

    if (answer.length !== 64) {
      return [false, 'Hash must be 64 characters long']
    }

    return [true, undefined]
  },
  constraints: [
    {
      range: [7, 1, 8, 1],
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
      lessonKey={getLessonKey('chapter-2', 'scripting-2')}
      successMessage={t('chapter_two.scripting_two.success')}
      onSelectLanguage={handleSelectLanguage}
    >
      <LessonInfo>
        <Text className="font-nunito text-xl text-white">
          {t('chapter_two.scripting_two.paragraph_one')}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(`chapter_two.scripting_two.${language}.paragraph_two`)}
        </Text>
        <ul className="list-disc pl-4">
          <li className="mt-4 font-nunito text-xl text-white">
            {t(`chapter_two.scripting_two.${language}.list_one`)}
          </li>
          <li className="mt-4 font-nunito text-xl text-white">
            {t(`chapter_two.scripting_two.${language}.list_two`)}
          </li>
        </ul>
      </LessonInfo>
    </ScriptingChallenge>
  )
}
