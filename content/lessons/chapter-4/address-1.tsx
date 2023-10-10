'use client'

import { ScriptingChallenge, LessonInfo } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useState } from 'react'
import { getLessonKey } from 'lib/progress'

export const metadata = {
  title: 'chapter_four.address_one.title',
  key: 'CH4ADDR1',
}
const javascript = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'findHash',
    args: ['nonce'],
  },
  defaultCode: `const crypto = require('crypto')

// Create a program that finds a sha256 hash starting with 5 zeroes.
// To submit your answer, log it to the terminal using console.log().

// Type your code here
`,
  validate: async (answer) => {
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
      range: [5, 1, 7, 1],
      allowMultiline: true,
    },
  ],
}

const python = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'hash_compressed',
    args: ['compressed'],
  },
  defaultCode: `import hashlib
# Get the sha256 digest of the compressed public key.
# Then get the ripemd160 digest of that sha256 hash
# REturn 20-byte array

# Type your code here
`,
  validate: async (answer) => {
    function wordArrayToUint8Array(answer) {
      const len = answer.words.length;
      const u8_array = new Uint8Array(len << 2);
      let offset = 0, word, i;
      for (i = 0; i < len; i++) {
        word = answer.words[i];
        u8_array[offset++] = word >> 24;
        u8_array[offset++] = (word >> 16) & 0xff;
        u8_array[offset++] = (word >> 8) & 0xff;
        u8_array[offset++] = word & 0xff;
      }
      return u8_array;
    }
    
    
    const uint8ArrayResult = wordArrayToUint8Array(answer);
    console.log(uint8ArrayResult.buffer);
    if (uint8ArrayResult.byteLength!==20) {
      return [false, 'Array must be 20 byte long']
    }

   // if (answer.length !== 64) {
    //  return [false, 'Hash must be 64 characters long']
    //}

    return [true, undefined]
  },
  constraints: [
    {
      range: [5, 1, 7, 11],
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

  const [language, setLanguage] = useState(config.defaultLanguage)

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
          {t('chapter_four.address_one.paragraph_one')}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(`chapter_four.address_one.paragraph_two`)}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(`chapter_four.address_one.paragraph_three`)}
        </Text>
      </LessonInfo>
    </ScriptingChallenge>
  )
}
