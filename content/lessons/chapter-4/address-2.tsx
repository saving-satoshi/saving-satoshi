'use client'

import { ScriptingChallenge, LessonInfo } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useState } from 'react'
import { getLessonKey } from 'lib/progress'

export const metadata = {
  title: 'chapter_four.address_two.title',
  key: 'CH4ADDR2',
}
const javascript = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'findHash',
    args: ['nonce'],
  },
  defaultCode: [
    `const crypto = require('crypto')

// Create a program that finds a sha256 hash starting with 5 zeroes.
// To submit your answer, log it to the terminal using console.log().

// Type your code here
`,
  ],
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
      range: [5, 1, 7, 1],
      allowMultiline: true,
    },
  ],
}

const python = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'find_hash',
    args: ['nonce'],
  },
  defaultCode: [
    `from hashlib import sha256

# Create a program that finds a sha256 hash starting with 5 zeroes.
# To submit your answer, print it to the terminal using print().

# Type your code here
`,
  ],
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
      range: [5, 1, 7, 1],
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
          {t('chapter_four.address_two.paragraph_one')}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(`chapter_four.address_two.paragraph_two`)}
        </Text>
        <ul className="font-nunito">
          <li className="text-lg md:text-xl">
            {t('chapter_four.address_two.list_one')}
          </li>
          <li className="text-lg md:text-xl">
            {t('chapter_four.address_two.list_two')}
          </li>
          <li className="text-lg md:text-xl">
            {t('chapter_four.address_two.list_three')}
          </li>
        </ul>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(`chapter_four.address_two.paragraph_three`)}
        </Text>
      </LessonInfo>
    </ScriptingChallenge>
  )
}
