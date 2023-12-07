'use client'
import * as crypto from 'crypto'
import { ScriptingChallenge, LessonInfo } from 'ui'
import { Data, EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useEffect, useState } from 'react'
import { getLessonKey } from 'lib/progress'
import { getData } from 'api/data'

export const metadata = {
  title: 'chapter_four.address_two.title',
  key: 'CH4ADR2',
}

export default function Address2({ lang }) {
  const t = useTranslations(lang)

  const [prevData, setPrevData] = useState<Data>({ lesson_id: '', data: '' })
  const dataObject = prevData?.data ? prevData?.data : ''
  const [isLoading, setIsLoading] = useState(true)

  const getPrevLessonData = async () => {
    setPrevData(await getData('CH4PKY4'))
  }

  useEffect(() => {
    getPrevLessonData().finally(() => setIsLoading(false))
  }, [])

  const javascript = {
    program: `
console.log(hashCompressed('${prevData?.data && dataObject}'))
console.log("KILL")`,
    defaultFunction: {
      name: 'hash_compressed',
      args: ['compressed'],
    },
    defaultCode: `const crypto = require('crypto')

${prevData?.data && 'compressedPublicKey = ' + "'" + dataObject + "'"}

// Get the sha256 digest of the compressed public key.
// Then get the ripemd160 digest of that sha256 hash
// Return 20-byte array
function hashCompressed(compressedPublicKey) {

}
`,
    validate: async (answer) => {
      if (answer.startsWith('<Buffer')) {
        return [false, 'Ensure you are properly decoding your answer']
      }
      if (answer.length !== 40) {
        return [false, 'Array must be 20 bytes long']
      }
      if (
        answer !==
          crypto
            .createHash('ripemd160')
            .update(
              crypto
                .createHash('sha256')
                .update(Buffer.from(dataObject, 'hex'))
                .digest()
            )
            .digest('hex') ||
        answer === 'b472a266d0bd89c13706a4132ccfb16f7c3b9fcb'
      ) {
        return [
          false,
          'Ensure you are using the correct compressed key and it is being decoded',
        ]
      }
      return [true, undefined]
    },
    constraints: [
      {
        range: [9, 1, 11, 1],
        allowMultiline: true,
      },
    ],
  }

  const python = {
    program: `
print(hash_compressed('${prevData?.data && dataObject}'))
print("KILL")`,
    defaultFunction: {
      name: 'hash_compressed',
      args: ['compressed'],
    },
    defaultCode: `import hashlib

${prevData?.data && 'compressed_public_key = ' + "'" + dataObject + "'"}

# Get the sha256 digest of the compressed public key.
# Then get the ripemd160 digest of that sha256 hash
# Return 20-byte array
def hash_compressed(compressed_public_key):
`,
    validate: async (answer) => {
      if (answer.startsWith("b'")) {
        return [false, 'Ensure you are properly decoding your answer']
      }
      if (answer.length !== 40) {
        return [false, 'Array must be 20 bytes long']
      }
      if (
        answer !==
          crypto
            .createHash('ripemd160')
            .update(
              crypto
                .createHash('sha256')
                .update(Buffer.from(dataObject, 'hex'))
                .digest()
            )
            .digest('hex') ||
        answer === 'b472a266d0bd89c13706a4132ccfb16f7c3b9fcb'
      ) {
        return [
          false,
          'Ensure you are using the correct compressed key and it is being decoded',
        ]
      }
      return [true, undefined]
    },
    constraints: [
      {
        range: [9, 1, 9, 1],
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
        lessonKey={getLessonKey('chapter-4', 'address-2')}
        successMessage={t('chapter_four.address_two.success')}
        onSelectLanguage={handleSelectLanguage}
      >
        <LessonInfo>
          <Text className="font-nunito text-xl text-white">
            {t('chapter_four.address_two.paragraph_one')}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t(`chapter_four.address_two.paragraph_two`)}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t(`chapter_four.address_two.paragraph_three`)}
          </Text>
        </LessonInfo>
      </ScriptingChallenge>
    )
  )
}
