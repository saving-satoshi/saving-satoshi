'use client'

import { useMediaQuery, useTranslations } from 'hooks'
import { getLessonKey } from 'lib/progress'
import { useEffect, useState } from 'react'
import { EditorConfig } from 'types'
import { LessonInfo, ScriptingChallenge, Text } from 'ui'

export const metadata = {
  title: 'chapter_five.verify_signature_two.title',
  key: 'CH5VFS2',
}

const satoshiTransactionMessage =
  '0100000001c997a5e56e104102fa209c6a852dd90660a20b2d9c352423edce25857fcd37040000000043410411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3acffffffff0200ca9a3b00000000434104ae1a62fe09c5f51b13905f07f06b99a2f7159b2225f374cd378d71302fa28414e7aab37397f554a7df5f142c21c1b7303b8a0626f1baded5c72a704f7e6cd84cac00286bee0000000043410411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3ac0000000001000000'
const correctAnswer =
  '55192368857469264807759274836848938481238746809645363588732068292162212317977'

const javascript = {
  program: `
console.log(msg_to_integer("${satoshiTransactionMessage}"));
console.log("KILL")
`,
  defaultFunction: {
    name: 'msg_to_integer',
    args: [],
  },
  defaultCode: `const {Hash} = require('crypto');
  
  function msg_to_integer(msg) {
    // Given a hex string to sign, convert that string to bytes,
    // double-SHA256 the bytes and then return a BigInt() from the 32-byte digest.
  }
`,
  validate: async (answer) => {
    // for some reason the answer is coming through with a lot of ansi characters included
    // so we will need to strip them before doing the comparison.
    const cleanedAnswer = answer.replace(/\u001b\[[0-9;]*m/g, '')
    if (cleanedAnswer !== correctAnswer) {
      return [false, 'Hash is not valid']
    }

    return [true, undefined]
  },
  constraints: [
    {
      range: [4, 1, 7, 1],
      allowMultiline: true,
    },
  ],
}

const python = {
  program: `
print(msg_to_integer("${satoshiTransactionMessage}"))
print("KILL")
`,
  defaultFunction: {
    name: 'msg_to_integer',
    args: [],
  },
  defaultCode: `# Import from python standard libraries
import hashlib
import base64

def msg_to_integer(msg):
    # Given a hex string to sign, convert that string to bytes,
    # double-SHA256 the bytes and then return an integer from the 32-byte digest.
`,
  validate: async (answer) => {
    // for some reason the answer is coming through with a lot of ansi characters included
    // so we will need to strip them before doing the comparison.
    const cleanedAnswer = answer.replace(/\u001b\[[0-9;]*m/g, '')
    if (cleanedAnswer !== correctAnswer) {
      return [false, 'Hash is not valid']
    }

    return [true, undefined]
  },
  constraints: [
    {
      range: [1, 1, 4, 1],
      allowMultiline: true,
    },
    {
      range: [6, 1, 8, 1],
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

export default function VerifySignature2({ lang }) {
  const t = useTranslations(lang)
  const [objectPosition, setObjectPosition] = useState<string | undefined>()
  const [language, setLanguage] = useState(config.defaultLanguage)

  const handleSelectLanguage = (language: string) => {
    setLanguage(language)
  }
  const isMediumScreen = useMediaQuery({ width: 1024 })

  useEffect(() => {
    if (isMediumScreen) {
      setObjectPosition('object-left')
    } else {
      setObjectPosition('object-bottom')
    }
  }, [isMediumScreen])

  return (
    <ScriptingChallenge
      lang={lang}
      config={config}
      lessonKey={getLessonKey('chapter-5', 'verify-signature-2')}
      successMessage={t('chapter_five.verify_signature_two.success')}
      onSelectLanguage={handleSelectLanguage}
    >
      <LessonInfo>
        <Text className="font-nunito text-xl text-white">
          {t('chapter_five.verify_signature_two.heading')}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(`chapter_five.verify_signature_two.paragraph_one`)}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(`chapter_five.verify_signature_two.paragraph_two`)}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(`chapter_five.verify_signature_two.paragraph_three`)}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t(`chapter_five.verify_signature_two.paragraph_four`)}
        </Text>
      </LessonInfo>
    </ScriptingChallenge>
  )
}
