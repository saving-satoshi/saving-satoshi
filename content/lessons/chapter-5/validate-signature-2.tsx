'use client'

import { ScriptingChallenge, LessonInfo, Title } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useState } from 'react'
import { getLessonKey } from 'lib/progress'

export const metadata = {
  title: 'chapter_five.validate_signature_one.title',
  key: 'CH5VLS2',
}

const vpSig =
  'H4vQbVD0pLK7pkzPto8BHourzsBrHMB3Qf5oYVmr741pPwdU2m6FaZZmxh4ScHxFoDelFC9qG0PnAUl5qMFth8k='

const javascript = {
  program: `
console.log(decodeSig("${vpSig}").toString());
console.log("KILL");
`,
  defaultFunction: {
    name: 'decodeSig',
    args: [],
  },
  defaultCode: `// Vanderpoole's signature
const vpSig = "H4vQbVD0pLK7pkzPto8BHourzsBrHMB3Qf5oYVmr741pPwdU2m6FaZZmxh4ScHxFoDelFC9qG0PnAUl5qMFth8k="

function decodeSig(vpSig) {
  // Decode a base64-encoded signature string into its ECDSA signature elements r and s, returned as an array of integers.
  // Remember to throw away the first byte of metadata from the signature string!

}
`,
  validate: async (answer) => {
    console.log(answer)
    if (
      answer !==
      '63239744615459417534795088953002824328865520877888079618399827727977035042153,28508663025799969786676261677335521233963265910413171955666154169583931328457'
    ) {
      return [
        false,
        'Be sure to return the r and s values in the correct order.',
      ]
    }

    return [true, undefined]
  },
  constraints: [
    {
      range: [1, 1, 9, 1],
      allowMultiline: true,
    },
  ],
}

const python = {
  program: `
print(decode_sig("${vpSig}"))
print("KILL")
`,
  defaultFunction: {
    name: 'decode_sig',
    args: [],
  },
  defaultCode: `import base64

# Vanderpoole's signature
vp_sig = "H4vQbVD0pLK7pkzPto8BHourzsBrHMB3Qf5oYVmr741pPwdU2m6FaZZmxh4ScHxFoDelFC9qG0PnAUl5qMFth8k="

def decode_sig(vp_sig):
    # Decode a base64-encoded signature string into its ECDSA signature elements r and s, returned as a tuple of integers.
    # Remember to throw away the first byte of metadata from the signature string!
`,
  validate: async (answer) => {
    if (
      answer !==
      '(63239744615459417534795088953002824328865520877888079618399827727977035042153, 28508663025799969786676261677335521233963265910413171955666154169583931328457)'
    ) {
      return [
        false,
        'Be sure to return the r and s values in the correct order.',
      ]
    }

    return [true, undefined]
  },
  constraints: [
    {
      range: [1, 1, 9, 1],
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
      lessonKey={getLessonKey('chapter-5', 'validate-signature-2')}
      successMessage=""
      onSelectLanguage={handleSelectLanguage}
    >
      <LessonInfo>
        <Title>{t('chapter_five.validate_signature_two.heading')}</Title>

        <Text className="mt-2 text-lg">
          {t('chapter_five.validate_signature_two.paragraph_one')}
        </Text>

        <Text className="mt-2 text-lg">
          {t(`chapter_five.validate_signature_two.${language}.paragraph_two`)}
        </Text>
      </LessonInfo>
    </ScriptingChallenge>
  )
}
