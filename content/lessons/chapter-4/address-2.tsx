'use client'
import * as crypto from 'crypto'
import { ScriptingChallenge, LessonInfo } from 'ui'
import { Data, EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useEffect, useState } from 'react'
import { getData } from 'api/data'
import { getLanguageString } from 'lib/SavedCode'
import { useAtom } from 'jotai'
import { currentLanguageAtom } from 'state/state'

export const metadata = {
  title: 'chapter_four.address_two.title',
  navigation_title: 'chapter_four.address_two.nav_title',
  key: 'CH4ADR2',
}

export default function Address2({ lang }) {
  const t = useTranslations(lang)
  const [currentLanguage] = useAtom(currentLanguageAtom)
  const [prevData, setPrevData] = useState<Data>({ lesson_id: '', data: '' })
  const dataObject = prevData?.data ? prevData?.data : ''
  const [isLoading, setIsLoading] = useState(true)

  const getPrevLessonData = async () => {
    const data = await getData('CH4PKY4')
    if (data?.answer) {
      setPrevData({
        lesson_id: 'CH4PKY4',
        data: data.answer,
      })
    }
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
      return [true, t('chapter_four.address_two.success')]
    },
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
      return [true, t('chapter_four.address_two.success')]
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
        onSelectLanguage={handleSelectLanguage}
      >
        <LessonInfo>
          <Text className="font-nunito text-xl text-white">
            {t('chapter_four.address_two.paragraph_one')}
          </Text>
          <Text className="mt-4 font-nunito text-xl font-bold text-white">
            {t(`chapter_four.address_two.paragraph_two`)}
          </Text>
          <Text className="ml-5 mt-4 inline-block font-nunito text-xl text-white">
            {t(`chapter_four.address_two.paragraph_three`)}
          </Text>
          <Text className="preline ml-5 mt-4 inline-block font-nunito text-xl text-white">
            {t(`chapter_four.address_two.paragraph_four`)}
          </Text>
          <hr className="my-7 h-[1px] w-full opacity-25" />
          <Text className="preline mt-4 font-nunito text-xl text-white">
            {t(`chapter_four.address_two.paragraph_five`)}
          </Text>
          <Text className="preline mt-4 font-nunito text-xl italic text-white">
            {t(`chapter_four.address_two.paragraph_six`)}
          </Text>
        </LessonInfo>
      </ScriptingChallenge>
    )
  )
}
