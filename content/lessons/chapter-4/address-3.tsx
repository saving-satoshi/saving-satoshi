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
    program: `
console.log(hashToAddress(compressedPublicKeyHash))
console.log("KILL")`,
    defaultFunction: {
      name: 'findAddress',
      args: ['publicKeyHash'],
    },
    defaultCode: `
const bech32 = require('@savingsatoshi/bech32js')
${
  prevData?.data &&
  'const compressedPublicKeyHash = ' +
    'Buffer.from(' +
    "'" +
    dataObject +
    "'" +
    ", 'hex')"
}

// Insert checksum and metadata, encode using bech32 and return a string
// See the library source code for the exact API.
// https://github.com/saving-satoshi/challenges/blob/master/chapter4/javascript/lib/bech32.js
function hashToAddress(hash) {

}
`,
    validate: async (answer) => {
      console.log(Buffer.from(dataObject, 'hex'), answer)
      if (!answer.startsWith('tb')) {
        return [
          false,
          'Address must start with the correct prefix for testnet.',
        ]
      }

      if (answer.length !== 42) {
        return [
          false,
          'Ensure the encoding is being done on the 20-byte compressed public key hash',
        ]
      }

      return [true, undefined]
    },
    constraints: [
      {
        range: [9, 1, 10, 1],
        allowMultiline: true,
      },
    ],
  }

  const python = {
    program: `
print(hash_to_address(compressed_public_key_hash))
print("KILL")`,
    defaultFunction: {
      name: 'find_address',
      args: ['public_key_hash'],
    },
    defaultCode: `
from bech32py.bech32 import encode
${
  prevData?.data &&
  'compressed_public_key_hash = ' +
    'bytes.fromhex(' +
    "'" +
    dataObject +
    "'" +
    ')'
}

# Insert checksum and metadata, encode using bech32 and return a string
# See the library source code for the exact API.
# https://github.com/saving-satoshi/challenges/blob/master/chapter4/python/lib/bech32.py
def hash_to_address(hash):
`,
    validate: async (answer) => {
      if (!answer.startsWith('tb')) {
        return [
          false,
          'Address must start with the correct prefix for testnet.',
        ]
      }

      if (answer.length !== 42) {
        return [
          false,
          'Ensure the encoding is being done on the 20-byte compressed public key hash',
        ]
      }

      return [true, undefined]
    },
    constraints: [
      {
        range: [8, 1, 9, 1],
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
        successMessage={t('chapter_four.address_three.success')}
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
