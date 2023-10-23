'use client'

import { ScriptingChallenge, LessonInfo, CodeExample } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useState } from 'react'
import { getLessonKey } from 'lib/progress'

export const metadata = {
  title: 'chapter_four.public_key_four.title',
  key: 'CH4PKY4',
}
const javascript = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'compressPublicKey',
    args: ['publicKey'],
  },
  defaultCode: `
  function compress_publickey(publickey) {
    // Determine if the y coordinate is even or odd and prepend the
    // corresponding header byte to the x coordinate.
    // Return 33-byte Buffer
    const header_byte = {
      'y_is_even': Buffer.from([2]),
      'y_is_odd':  Buffer.from([3])
    };
    const x_bytes = publickey.x.encode('UTF-8');
    if ((publickey.y.val & 1n) === 0n)
      return Buffer.concat([header_byte['y_is_even'], x_bytes]);
    else
      return Buffer.concat([header_byte['y_is_odd'], x_bytes]);
  }

  console.log(compress_publickey({"x":"0x2241aafa8bd7a36a669158f4c71378dd4e4f9aa3239f354c29528afc16965bb9","y":"0xf00415d8c4a478b2b84d3a4b9c3509c583b0e8fff6c03f9705d55612643280a5"}))
`,
  validate: async (answer) => {
    console.log(answer)
  },
  constraints: [
    {
      range: [1, 1, 18, 1],
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
  defaultCode: `# Import ECDSA library.
  
  def compress_publickey(publickey):
      # Determine if the y coordinate is even or odd and prepend
      # the corresponding header byte to the x coordinate.
      # Return 33-byte array
      header_byte = {
          "y_is_even": bytes([2]),
          "y_is_odd":  bytes([3])
      }
`,
  validate: async (answer) => {
    console.log(answer)
  },
  constraints: [
    {
      range: [1, 1, 11, 1],
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

export default function PublicKey4({ lang }) {
  const t = useTranslations(lang)

  const [language, setLanguage] = useState(config.defaultLanguage)

  const handleSelectLanguage = (language: string) => {
    setLanguage(language)
  }

  return (
    <ScriptingChallenge
      lang={lang}
      config={config}
      lessonKey={getLessonKey('chapter-2', 'scripting-2')}
      successMessage={t('chapter_four.public_key_four.success')}
      onSelectLanguage={handleSelectLanguage}
    >
      <LessonInfo>
        <Text className="font-nunito text-xl text-white">
          {t('chapter_four.public_key_four.paragraph_one')}
        </Text>
        <CodeExample className="mt-4" code={`y^2 = x^3 + 7`} language="shell" />
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(`chapter_four.public_key_four.paragraph_two`)}
        </Text>
      </LessonInfo>
    </ScriptingChallenge>
  )
}
