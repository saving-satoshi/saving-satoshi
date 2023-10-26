'use client'

import { ScriptingChallenge, LessonInfo } from 'ui'
import { Data, EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useEffect, useState } from 'react'
import { getLessonKey } from 'lib/progress'
import { getData } from 'api/data'

export const metadata = {
  title: 'chapter_four.address_three.title',
  key: 'CH4ADR3',
}

export default function Address3({ lang }) {
  const t = useTranslations(lang)

  const [prevData, setPrevData] = useState<Data>({ lesson_id: '', data: '' })
  const dataObject = prevData?.data ? prevData?.data : ''
  const [isLoading, setIsLoading] = useState(true)

  const getPrevLessonData = async () => {
    setPrevData(await getData('CH4ADR2'))
  }

  useEffect(() => {
    getPrevLessonData().finally(() => setIsLoading(false))
  }, [])

  const javascript = {
    program: `console.log("KILL")`,
    defaultFunction: {
      name: 'findHash',
      args: ['nonce'],
    },
    defaultCode: `const crypto = require('crypto')

${prevData?.data && 'const publicKeyHash = ' + "'" + dataObject + "'"}

// Create a program that finds a sha256 hash starting with 5 zeroes.
// To submit your answer, log it to the terminal using console.log().

// Type your code here
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
        range: [7, 1, 9, 1],
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
    defaultCode: `from hashlib import sha256

${prevData?.data && 'public_key_hash = ' + "'" + dataObject + "'"}

# Create a program that finds a sha256 hash starting with 5 zeroes.
# To submit your answer, print it to the terminal using print().

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
        range: [7, 1, 9, 1],
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
    !isLoading && (
      <ScriptingChallenge
        lang={lang}
        config={config}
        saveData
        lessonKey={getLessonKey('chapter-4', 'address-3')}
        successMessage={t('chapter_two.address_three.success')}
        onSelectLanguage={handleSelectLanguage}
      >
        <LessonInfo>
          <Text className="font-nunito text-xl text-white">
            {t('chapter_four.address_three.paragraph_one')}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t(`chapter_four.address_three.paragraph_two`)}
          </Text>
          <ul className="font-nunito">
            <li className="text-lg md:text-xl">
              {t('chapter_four.address_three.list_one')}
            </li>
            <li className="text-lg md:text-xl">
              {t('chapter_four.address_three.list_two')}
            </li>
            <li className="text-lg md:text-xl">
              {t('chapter_four.address_three.list_three')}
            </li>
          </ul>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t(`chapter_four.address_three.paragraph_three`)}
          </Text>
        </LessonInfo>
      </ScriptingChallenge>
    )
  )
}
