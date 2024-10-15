'use client'

import { ScriptingChallenge, LessonInfo, Table } from 'ui'
import { Data, EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useEffect, useState } from 'react'
import { getData } from 'api/data'
import { getLanguageString } from 'lib/SavedCode'
import { useAtom } from 'jotai'
import { currentLanguageAtom } from 'state/state'

export const metadata = {
  title: 'chapter_four.address_three.title',
  navigation_title: 'chapter_four.address_three.nav_title',
  key: 'CH4ADR3',
}

export default function Address3({ lang }) {
  const t = useTranslations(lang)
  const [currentLanguage] = useAtom(currentLanguageAtom)
  const [prevData, setPrevData] = useState<Data>({ lesson_id: '', data: '' })
  const dataObject = prevData?.data ? prevData?.data : ''
  const [isLoading, setIsLoading] = useState(true)
  const tableHeading = [
    t('chapter_four.address_three.table_heading.item_one'),
    t('chapter_four.address_three.table_heading.item_two'),
  ]
  const tableRows = [
    [
      t('chapter_four.address_three.table_rows.key_one'),
      t('chapter_four.address_three.table_rows.value_one'),
    ],
    [
      t('chapter_four.address_three.table_rows.key_two'),
      t('chapter_four.address_three.table_rows.value_two'),
    ],
    [
      t('chapter_four.address_three.table_rows.key_three'),
      t('chapter_four.address_three.table_rows.value_three'),
    ],
  ]

  const getPrevLessonData = async () => {
    const data = await getData('CH4ADR2')
    if (data?.answer) {
      setPrevData({
        lesson_id: 'CH4ADR2',
        data: data.answer,
      })
    }
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
    defaultCode: `const bech32 = require('@savingsatoshi/bech32js')

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
// https://github.com/saving-satoshi/bech32js/blob/main/bech32.js
function hashToAddress(hash) {

}
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
  }

  const python = {
    program: `
print(hash_to_address(compressed_public_key_hash))
print("KILL")`,
    defaultFunction: {
      name: 'find_address',
      args: ['public_key_hash'],
    },
    defaultCode: `from bech32py.bech32 import encode

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
# https://github.com/saving-satoshi/bech32py/blob/main/bech32py/bech32.py
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
  }

  const config: EditorConfig = {
    defaultLanguage: 'javascript',
    languages: {
      javascript,
      python,
    },
  }

  const [language, setLanguage] = useState(getLanguageString(currentLanguage))

  const handleSelectLanguage = (language: string) => {
    setLanguage(language)
  }

  return (
    !isLoading && (
      <ScriptingChallenge
        lang={lang}
        config={config}
        saveData
        lessonKey={metadata.key}
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
          <Text className="mt-4 font-nunito text-xl text-white">
            {t(`chapter_four.address_three.paragraph_three`)}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t(`chapter_four.address_three.paragraph_four`)}
          </Text>
          <Table headings={tableHeading} rows={tableRows} />
          <Text className="preline mt-4 font-nunito text-xl italic text-white">
            {t(`chapter_four.address_three.paragraph_five`)}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t(`chapter_four.address_three.paragraph_six`)}
          </Text>
          <hr className="my-7 h-[1px] w-full opacity-25" />
          <Text className="mt-4 font-nunito text-xl text-white">
            {t(`chapter_four.address_three.paragraph_seven`)}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t(`chapter_four.address_three.paragraph_eight`)}
          </Text>
          <ul className="list-inside list-disc">
            <li className="mt-4 font-nunito text-xl text-white">
              {t(`chapter_four.address_three.paragraph_eight_javascript`)}
            </li>
            <li className="mt-4 font-nunito text-xl text-white">
              {t(`chapter_four.address_three.paragraph_eight_python`)}
            </li>
          </ul>
        </LessonInfo>
      </ScriptingChallenge>
    )
  )
}
