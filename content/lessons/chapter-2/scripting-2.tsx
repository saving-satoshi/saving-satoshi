'use client'

import * as crypto from 'crypto'
import { ScriptingChallenge, LessonInfo } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useState } from 'react'
import { getLessonKey } from 'lib/progress'
import { getLanguageString } from 'lib/SavedCode'
import { useDataContext } from 'contexts/DataContext'

export const metadata = {
  title: 'chapter_two.scripting_one.title',
  key: 'CH2SCR2',
}

const javascript = {
  program: `//BEGIN VALIDATION BLOCK
const min = 1;
const max = 100000000;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
const testHash = findHash(randomNumber)
console.log((findHash(1000000) === '000001f8479faf79c1a58152ffc6b027a93f6ae6b27dc19ef986b2c9e7cad3b3' && findHash(0) !== '000001f8479faf79c1a58152ffc6b027a93f6ae6b27dc19ef986b2c9e7cad3b3') ? testHash : 'test-failed')
console.log("KILL")`,
  defaultFunction: {
    name: 'findHash',
    args: ['nonce'],
  },
  defaultCode: `const crypto = require('crypto')

// Create a program that finds a sha256 hash starting with 5 zeroes.
// To submit your answer, return it from the function.

function findHash(nonce) {
  // Type your code here
}
`,
  validate: async (answer) => {
    if (answer === 'test-failed') {
      return [
        false,
        'Be sure you are using the nonce param in your function as a random starting nonce will be used to test',
      ]
    }

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
      range: [1, 1, 9, 1],
      allowMultiline: true,
    },
  ],
}

const python = {
  program: `# BEGIN VALIDATION BLOCK
import random

min_value = 1
max_value = 100000000
random_number = random.randint(min_value, max_value)
test_hash = find_hash(random_number)
if find_hash(1000000) != '000001f8479faf79c1a58152ffc6b027a93f6ae6b27dc19ef986b2c9e7cad3b3':
    print('test-failed')
elif find_hash(1000000) == '000001f8479faf79c1a58152ffc6b027a93f6ae6b27dc19ef986b2c9e7cad3b3' and find_hash(0) != '000001f8479faf79c1a58152ffc6b027a93f6ae6b27dc19ef986b2c9e7cad3b3':
    print(test_hash)
else:
    print('error')
print("KILL")`,
  defaultFunction: {
    name: 'find_hash',
    args: ['nonce'],
  },
  defaultCode: `from hashlib import sha256

# Create a program that finds a sha256 hash starting with 5 zeroes.
# To submit your answer, return it from the function.

def find_hash(nonce):
    # Type your code here
`,
  validate: async (answer) => {
    if (answer === 'test-failed' || answer === 'error') {
      return [
        false,
        'Be sure you are using the nonce param in your function as a random starting nonce will be used to test',
      ]
    }
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
      range: [1, 1, 8, 1],
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
  const { currentLanguage } = useDataContext()
  const [language, setLanguage] = useState(getLanguageString(currentLanguage))

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
