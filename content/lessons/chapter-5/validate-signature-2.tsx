'use client'

import { ScriptingChallenge, LessonInfo, Title, Tooltip } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useState } from 'react'
import { getLessonKey } from 'lib/progress'
import { useDataContext } from 'contexts/DataContext'
import { getLanguageString } from 'lib/SavedCode'
import { chapters } from 'content/chapters'
import HolocatQuestion from 'ui/lesson/HolocatQuestion'

export const metadata = {
  title: 'chapter_five.validate_signature_one.title',
  key: 'CH5VLS2',
}

const vpSig =
  'H4vQbVD0pLK7pkzPto8BHourzsBrHMB3Qf5oYVmr741pPwdU2m6FaZZmxh4ScHxFoDelFC9qG0PnAUl5qMFth8k='

const javascript = {
  program: `
console.log(decode_sig("${vpSig}").toString());
console.log("KILL");
`,
  defaultFunction: {
    name: 'decodeSig',
    args: [],
  },
  defaultCode: `// Vanderpoole's signature
const vpSig = "H4vQbVD0pLK7pkzPto8BHourzsBrHMB3Qf5oYVmr741pPwdU2m6FaZZmxh4ScHxFoDelFC9qG0PnAUl5qMFth8k="

function decode_sig(vpSig) {
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
  const { currentLanguage } = useDataContext()
  const [language, setLanguage] = useState(getLanguageString(currentLanguage))
  const [tooltipVisible, setTooltipVisible] = useState(false)

  const handleMouseEnter = () => {
    setTooltipVisible(true)
  }

  const handleMouseLeave = () => {
    setTooltipVisible(false)
  }

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

        <Text className="my-2 text-lg">
          {t('chapter_five.validate_signature_two.paragraph_one')}
        </Text>

        <div className="content-center justify-items-center font-nunito">
          <Text className="inline text-lg">
            {t('chapter_five.validate_signature_two.paragraph_two.pre_link')}{' '}
          </Text>
          <a
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            href="https://chat.bitcoinsearch.xyz/?author=holocat&question=Why%2520do%2520we%2520double%2520hash%2520in%2520bitcoin%253F/"
            target="_blank"
            className="inline text-lg hover:underline md:text-xl"
          >
            {t('chapter_five.validate_signature_two.paragraph_two.highlighted')}{' '}
            <HolocatQuestion
              id="holocat"
              inline
              theme={chapters['chapter-5'].metadata.theme}
              href="https://chat.bitcoinsearch.xyz/?author=holocat&question=Why%2520do%2520we%2520double%2520hash%2520in%2520bitcoin%253F/"
              question={t(
                'chapter_five.validate_signature_two.paragraph_two.question'
              )}
              visible={tooltipVisible}
            />
          </a>
          <Text className="inline text-lg">
            {' '}
            {t('chapter_five.validate_signature_two.paragraph_two.post_link')}
            {t(`chapter_five.validate_signature_two.${language}.paragraph_two`)}
          </Text>
        </div>
      </LessonInfo>
    </ScriptingChallenge>
  )
}
