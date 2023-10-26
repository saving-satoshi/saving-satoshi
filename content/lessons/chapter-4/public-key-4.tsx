'use client'

import { ScriptingChallenge, LessonInfo, CodeExample } from 'ui'
import { EditorConfig } from 'types'
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
  const [prevData, setPrevData] = useState({ lessonId: '', data: '' })
  const dataObject = prevData?.data ? prevData?.data : ''

  const javascript = {
    program: `console.log("KILL")`,
    defaultFunction: {
      name: 'compressPublicKey',
      args: ['publicKey'],
    },
    defaultCode: `${prevData?.data && 'const uncompressedKey = ' + dataObject}

function compressPublicKey(publickey) {
  // Determine if the y coordinate is even or odd and prepend the
  // corresponding header byte to the x coordinate.
  // Return 33-byte Buffer
  const header_byte = {
    'y_is_even': Buffer.from([2]),
    'y_is_odd':  Buffer.from([3])
  };
  // To submit your answer, log it to the terminal using console.log().

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
        range: [12, 1, 15, 1],
        allowMultiline: true,
      },
    ],
  }

  const python = {
    program: `print("KILL")`,
    defaultFunction: {
      name: 'compress_publickey',
      args: ['public'],
    },
    defaultCode: `${prevData?.data && 'uncompressed_key = ' + dataObject}
  
def compress_publickey(publickey):
    # Determine if the y coordinate is even or odd and prepend
    # the corresponding header byte to the x coordinate.
    # Return 33-byte array
    header_byte = {
          "y_is_even": bytes([2]),
          "y_is_odd":  bytes([3])
    }
# To submit your answer, print it to the terminal using print().

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
        range: [12, 1, 13, 1],
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
  const t = useTranslations(lang)
  const [isLoading, setIsLoading] = useState(true)
  const [language, setLanguage] = useState(config.defaultLanguage)

  const getPrevLessonData = async () => {
    setPrevData(await getData('CH4PKY3'))
  }

  useEffect(() => {
    getPrevLessonData().finally(() => setIsLoading(false))
  }, [])
  const handleSelectLanguage = (language: string) => {
    setLanguage(language)
  }

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
