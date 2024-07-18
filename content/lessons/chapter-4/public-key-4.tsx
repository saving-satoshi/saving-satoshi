'use client'

import { ScriptingChallenge, LessonInfo, CodeExample } from 'ui'
import { EditorConfig, Data } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useEffect, useState } from 'react'
import { getData } from 'api/data'
import { getLanguageString } from 'lib/SavedCode'
import { useAtom } from 'jotai'
import { currentLanguageAtom } from 'state/state'

export const metadata = {
  title: 'chapter_four.public_key_four.title',
  navigation_title: 'chapter_four.public_key_four.nav_title',
  key: 'CH4PKY4',
}

function compressPublicKey(publickey) {
  const header_byte = {
    y_is_even: '02',
    y_is_odd: '03',
  }
  const regex = /([a-f0-9]+),([a-f0-9]+)/
  const cleanedPublicKey = publickey.replace(/\s/g, '')
  const match = cleanedPublicKey.match(regex)
  const which =
    BigInt('0x' + match[2]) % BigInt(2) == BigInt(0) ? 'y_is_even' : 'y_is_odd'
  return header_byte[which] + match[1]
}

export default function PublicKey4({ lang }) {
  const t = useTranslations(lang)
  const [currentLanguage] = useAtom(currentLanguageAtom)
  const [prevData, setPrevData] = useState<Data>({ lesson_id: '', data: '' })
  const dataObject = prevData?.data ? prevData?.data : ''
  const [isLoading, setIsLoading] = useState(true)

  const getPrevLessonData = async () => {
    const data = await getData('CH4PKY3')
    if (data?.answer) {
      setPrevData({
        lesson_id: 'CH4PKY3',
        data: data.answer,
      })
    }
  }

  useEffect(() => {
    getPrevLessonData().finally(() => setIsLoading(false))
  }, [])

  const handleSelectLanguage = (language: string) => {
    setLanguage(language)
  }

  const javascript = {
    program: `
console.log(compressPublicKey(uncompressedKey))
console.log("KILL")`,
    defaultFunction: {
      name: 'compressPublicKey',
      args: ['publicKey'],
    },
    defaultCode: `${
      prevData?.data &&
      `const uncompressedKey = ["${dataObject
        .slice(1, -1)
        .replace(', ', '", "')}"]`
    }

// Determine if the y coordinate is even or odd and prepend the
// corresponding header byte to the x coordinate.
// Return a hex string
function compressPublicKey(publicKey) {
  const header_byte = {
    'y_is_even': '02',
    'y_is_odd':  '03'
  };
  // YOUR CODE HERE

}
`,
    validate: async (answer) => {
      const pattern = /^[0-9a-f]{66}$/i
      if (answer.length !== 66) {
        return [false, "Length isn't valid"]
      }
      if (!answer.match(pattern)) {
        return [false, 'Answer is not a hexadecimal value']
      }
      if (answer !== compressPublicKey(dataObject)) {
        return [false, 'Ensure you are using your own key object']
      }
      return [true, undefined]
    },
  }

  const python = {
    program: `
print(compress_publickey(uncompressed_key))
print("KILL")`,
    defaultFunction: {
      name: 'compress_publickey',
      args: ['publicKey'],
    },
    defaultCode: `${
      prevData?.data &&
      `uncompressed_key = ("${dataObject.slice(1, -1).replace(', ', '", "')}")`
    }

# Determine if the y coordinate is even or odd and prepend
# the corresponding header byte to the x coordinate.
# Return a hex string
def compress_publickey(public_key):
    header_byte = {
        "y_is_even": "02",
        "y_is_odd":  "03"
    }
    # YOUR CODE HERE

`,
    validate: async (answer) => {
      const pattern = /^[0-9a-f]{66}$/i
      if (answer.length !== 66) {
        return [false, "Length isn't valid"]
      }
      if (!answer.match(pattern)) {
        return [false, 'Answer is not a hexadecimal value']
      }
      if (answer !== compressPublicKey(dataObject)) {
        return [false, 'Ensure you are using your own key object']
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

  return (
    !isLoading && (
      <ScriptingChallenge
        lang={lang}
        config={config}
        lessonKey={metadata.key}
        saveData
        successMessage={t('chapter_four.public_key_four.success')}
        onSelectLanguage={handleSelectLanguage}
      >
        <LessonInfo>
          <Text className="font-nunito text-xl text-white">
            {t('chapter_four.public_key_four.paragraph_one')}
          </Text>
          <CodeExample
            className="mt-4"
            code={`y^2 = x^3 + 7`}
            language="shell"
          />
          <Text className="mt-4 font-nunito text-xl text-white">
            {t(`chapter_four.public_key_four.paragraph_two_${language}`)}
          </Text>
        </LessonInfo>
      </ScriptingChallenge>
    )
  )
}
