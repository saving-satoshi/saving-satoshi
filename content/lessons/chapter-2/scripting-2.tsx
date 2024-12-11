'use client'

import crypto from 'crypto'
import HelpSuggestion from 'components/HelpSuggestion'
import { ScriptingChallenge, LessonInfo } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useState } from 'react'
import { getLanguageString } from 'lib/SavedCode'
import { currentLanguageAtom } from 'state/state'
import { useAtom } from 'jotai'

export const metadata = {
  title: 'chapter_two.scripting_one.title',
  navigation_title: 'chapter_two.scripting_two.nav_title',
  key: 'CH2SCR2',
}

export default function Scripting2({ lang }) {
  const t = useTranslations(lang)
  const [currentLanguage] = useAtom(currentLanguageAtom)
  const [language, setLanguage] = useState(getLanguageString(currentLanguage))

  const handleSelectLanguage = (language: string) => {
    setLanguage(language)
  }

  const validationTest = (nonce) => {
    return crypto.createHash('sha256').update(nonce.toString()).digest('hex')
  }

  const javascript = {
    program: `//BEGIN VALIDATION BLOCK
const min = 1;
const max = 100000000;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
const testHash = findHashFromNonce(randomNumber) ?? "Be sure your function returns a value."
console.log(testHash.toString())
console.log("KILL")`,
    defaultFunction: {
      name: 'findHash',
      args: ['nonce'],
    },
    defaultCode: `const crypto = require('crypto')

// Create a program that finds a sha256 hash starting with 5 zeroes.
// To submit your answer, return it from the function.

function findHashFromNonce(nonce) {
  // Type your code here
}
  `,
    validate: async (answer) => {
      if (answer.startsWith('00000')) {
        return [
          false,
          'Be sure you are returning the nonce and not the hash from your function.',
        ]
      }

      if (
        !validationTest(answer).startsWith('00000') &&
        (validationTest(answer - 1).startsWith('00000') ||
          validationTest(answer + 1).startsWith('00000'))
      ) {
        return [
          false,
          'Make sure that you are returning your nonce before you increment it again.',
        ]
      }

      if (!validationTest(answer).startsWith('00000')) {
        return [false, 'Hash must start with 5 zeroes.']
      }

      if (validationTest(answer).length !== 64) {
        return [false, 'Hash must be 64 characters long.']
      }

      return [true, `That's it! Your nonce hashes to ${validationTest(answer)}`]
    },
  }

  const python = {
    program: `# BEGIN VALIDATION BLOCK
import random

min_value = 1
max_value = 100000000
random_number = random.randint(min_value, max_value)
test_hash = find_hash_from_nonce(random_number)
if test_hash is not None:
    print(str(test_hash))
else:
    print("Be sure your function returns a value.")
print("KILL")`,
    defaultFunction: {
      name: 'find_hash',
      args: ['nonce'],
    },
    defaultCode: `from hashlib import sha256

# Create a program that finds a sha256 hash starting with 5 zeroes.
# To submit your answer, return it from the function.

def find_hash_from_nonce(nonce):
    # Type your code here
`,
    validate: async (answer) => {
      if (answer.startsWith('00000')) {
        return [
          false,
          'Be sure you are returning the nonce and not the hash from your function.',
        ]
      }

      if (
        !validationTest(answer).startsWith('00000') &&
        (validationTest(answer - 1).startsWith('00000') ||
          validationTest(answer + 1).startsWith('00000'))
      ) {
        return [
          false,
          'Make sure that you are returning your nonce before you increment it again.',
        ]
      }

      if (!validationTest(answer).startsWith('00000')) {
        return [false, 'Hash must start with 5 zeroes.']
      }

      if (validationTest(answer).length !== 64) {
        return [false, 'Hash must be 64 characters long.']
      }

      return [true, `That's it! Your nonce hashes to ${validationTest(answer)}`]
    },
  }

  const config: EditorConfig = {
    defaultLanguage: 'javascript',
    languages: {
      javascript,
      python,
    },
  }

  return (
    <ScriptingChallenge
      lang={lang}
      config={config}
      lessonKey={metadata.key}
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
        <HelpSuggestion />
      </LessonInfo>
    </ScriptingChallenge>
  )
}
