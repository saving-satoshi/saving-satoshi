'use client'

import { ScriptingChallenge, LessonInfo, CodeExample } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { Text } from 'ui'
import { useState } from 'react'
import { getLanguageString } from 'lib/SavedCode'
import { chapters } from 'content/chapters'
import HolocatQuestion from 'ui/common/HolocatQuestion'
import { useAtom } from 'jotai'
import { currentLanguageAtom } from 'state/state'

export const metadata = {
  title: 'chapter_five.validate_signature_one.title',
  navigation_title: 'chapter_five.validate_signature_one.nav_title',
  key: 'CH5VLS1',
}
export default function PublicKey3({ lang }) {
  const t = useTranslations(lang)
  const [currentLanguage] = useAtom(currentLanguageAtom)
  const [language, setLanguage] = useState(getLanguageString(currentLanguage))

  const javascript = {
    program: `
  console.log(encode_message(text))
  console.log("KILL")`,
    defaultFunction: {
      name: 'encode_message',
      args: ['text'],
    },
    defaultCode: `const crypto = require('crypto');
// Provided by Vanderpoole
let text = "I am Vanderpoole and I have control of the private key Satoshi\\n"
text += "used to sign the first-ever Bitcoin transaction confirmed in block #170.\\n"
text += "This message is signed with the same private key."

function encode_message(text){
// Given an ascii-encoded text message, serialize a byte array
// with the Bitcoin protocol prefix string followed by the text
// and both components preceded by a length byte.
// Returns a 32-byte hex value.
  const prefix = Buffer.from('Bitcoin Signed Message:\\n', 'ascii');

}
`,
    validate: async (answer: string) => {
      const correctAnswer =
        '73a16290e005b119b9ce0ceea52949f0bd4f925e808b5a54c631702d3fea1242'
      if (answer) {
        if (answer == correctAnswer) {
          return [true, t('chapter_five.validate_signature_one.success')]
        }
        return [false, 'Not a valid hex value']
      }
      return [false, 'Return a value']
    },
  }

  const python = {
    program: `
print(encode_message(text))
print("KILL")`,
    defaultFunction: {
      name: 'encode_message',
      args: ['text'],
    },
    defaultCode: `import hashlib
# Defined by Bitcoin message signing protocol
# Provided by Vanderpoole
text = "I am Vanderpoole and I have control of the private key Satoshi\\n"
text += "used to sign the first-ever Bitcoin transaction confirmed in block #170.\\n"
text += "This message is signed with the same private key."

def encode_message(text):
    # Given an ascii-encoded text message, serialize a byte array
    # with the Bitcoin protocol prefix string followed by the text
    # and both components preceded by a length byte.
    # Returns a 32-byte hex value.
    prefix = "Bitcoin Signed Message:\\n"
`,
    validate: async (answer: string) => {
      const correctAnswer =
        '73a16290e005b119b9ce0ceea52949f0bd4f925e808b5a54c631702d3fea1242'
      if (answer) {
        if (answer === correctAnswer) {
          return [true, t('chapter_five.validate_signature_one.success')]
        }
        return [false, 'Not a valid hex value']
      }
      return [false, 'Return a value']
    },
  }

  const config: EditorConfig = {
    defaultLanguage: 'javascript',
    languages: {
      javascript,
      python,
    },
  }

  const handleSelectLanguage = (language: string) => {
    setLanguage(language)
  }
  const [tooltipVisible, setTooltipVisible] = useState(false)
  const handleMouseEnter = () => {
    setTooltipVisible(true)
  }

  const handleMouseLeave = () => {
    setTooltipVisible(false)
  }

  return (
    <ScriptingChallenge
      lang={lang}
      config={config}
      saveData
      lessonKey={metadata.key}
      onSelectLanguage={handleSelectLanguage}
    >
      <LessonInfo>
        <Text className="font-nunito text-2xl font-bold text-white">
          {t('chapter_five.validate_signature_one.heading')}
        </Text>
        <Text className="mt-2 font-nunito text-xl text-white">
          {t('chapter_five.validate_signature_one.paragraph_one')}
        </Text>
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_five.validate_signature_one.paragraph_two')}
        </Text>
        <CodeExample
          className="mt-4 font-space-mono"
          code={`[size of prefix][prefix][size of message][message]`}
          language="shell"
        />
        <div className="mt-4 content-center justify-items-center font-nunito">
          <Text className="inline text-lg">
            {t('chapter_five.validate_signature_one.paragraph_three.pre_link')}{' '}
          </Text>
          <a
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            href="https://chat.bitcoinsearch.xyz/?author=holocat&question=Why%2520do%2520we%2520double%2520hash%2520in%2520bitcoin%253F"
            target="_blank"
            className="inline text-lg underline md:text-xl"
          >
            {t(
              'chapter_five.validate_signature_one.paragraph_three.highlighted'
            )}{' '}
            <HolocatQuestion
              id="holocat"
              inline
              theme={chapters['chapter-5'].metadata.theme}
              href="https://chat.bitcoinsearch.xyz/?author=holocat&question=Why%2520do%2520we%2520double%2520hash%2520in%2520bitcoin%253F"
              question={t(
                'chapter_five.validate_signature_one.paragraph_three.question'
              )}
              visible={tooltipVisible}
            />
          </a>{' '}
          <Text className="inline text-lg">
            {t(`chapter_five.validate_signature_one.paragraph_three.post_link`)}
          </Text>
        </div>
      </LessonInfo>
    </ScriptingChallenge>
  )
}
