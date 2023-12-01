'use client'

import { ScriptingChallenge, LessonInfo, CodeExample } from 'ui'
import { EditorConfig, Data } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useEffect, useState } from 'react'
import { getLessonKey } from 'lib/progress'
import { getData } from 'api/data'

export const metadata = {
  title: 'chapter_four.public_key_four.title',
  key: 'CH4PKY4',
}

function compressPublicKey(publickey) {
  var header_byte = {
    y_is_even: new Buffer([2]),
    y_is_odd: new Buffer([3]),
  }

  let x_hex = BigInt(publickey.x)
  let x_hex_string = x_hex.toString(16)
  let x_bytes = new Buffer(x_hex_string, 'hex')

  let y_hex = BigInt(publickey.y)
  let y_hex_string = y_hex.toString(16)

  let y_is_even = Number(y_hex_string[y_hex_string.length - 1]) % 2 === 0

  let header = y_is_even ? header_byte['y_is_even'] : header_byte['y_is_odd']
  let compressed_key = Buffer.concat([header, x_bytes])

  return compressed_key.toString('hex')
}

export default function PublicKey4({ lang }) {
  const t = useTranslations(lang)

  const [prevData, setPrevData] = useState<Data>({ lesson_id: '', data: '' })
  const dataObject = prevData?.data ? prevData?.data : ''
  const [isLoading, setIsLoading] = useState(true)

  const getPrevLessonData = async () => {
    setPrevData(await getData('CH4PKY3'))
  }

  useEffect(() => {
    getPrevLessonData().finally(() => setIsLoading(false))
  }, [])

  const handleSelectLanguage = (language: string) => {
    setLanguage(language)
  }

  const javascript = {
    program: `
console.log(compressPublicKey(${prevData?.data && dataObject}))
console.log("KILL")`,
    defaultFunction: {
      name: 'compressPublicKey',
      args: ['publicKey'],
    },
    defaultCode: `${prevData?.data && 'const uncompressedKey = ' + dataObject}

// Determine if the y coordinate is even or odd and prepend the
// corresponding header byte to the x coordinate.
// Return 33-byte Buffer
function compressPublicKey(publicKey) {
  const header_byte = {
    'y_is_even': Buffer.from([2]),
    'y_is_odd':  Buffer.from([3])
  };

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
      if (answer !== compressPublicKey(JSON.parse(dataObject))) {
        return [false, 'Ensure you are using your own key object']
      }
      return [true, undefined]
    },
    constraints: [
      {
        range: [6, 1, 13, 1],
        allowMultiline: true,
      },
    ],
  }

  const python = {
    program: `
print(compress_publickey(${prevData?.data && dataObject}))
print("KILL")`,
    defaultFunction: {
      name: 'compress_publickey',
      args: ['publicKey'],
    },
    defaultCode: `${prevData?.data && 'uncompressed_key = ' + dataObject}

# Determine if the y coordinate is even or odd and prepend
# the corresponding header byte to the x coordinate.
# Return 33-byte array
def compress_publickey(public_key):
    header_byte = {
          "y_is_even": bytes([2]),
          "y_is_odd":  bytes([3])
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
      if (answer !== compressPublicKey(JSON.parse(dataObject))) {
        return [false, 'Ensure you are using your own key object']
      }
      return [true, undefined]
    },
    constraints: [
      {
        range: [6, 1, 11, 1],
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

  return (
    !isLoading && (
      <ScriptingChallenge
        lang={lang}
        config={config}
        lessonKey={getLessonKey('chapter-4', 'public-key-4')}
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
            {t(`chapter_four.public_key_four.paragraph_two`)}
          </Text>
        </LessonInfo>
      </ScriptingChallenge>
    )
  )
}
