'use client'

import { useTranslations } from 'hooks'
import { useEffect, useState } from 'react'
import { Loader } from 'shared'

import MonacoEditor from '@monaco-editor/react'

import { EditorConfig } from 'types'
import { Text, ResourcePage, ToggleSwitch } from 'ui'
import LanguageTabs from 'ui/lesson/ScriptingChallenge/LanguageTabs'
import { readOnlyOptions } from 'ui/lesson/ScriptingChallenge/config'
import { getLanguageString } from 'lib/SavedCode'
import { useAtom } from 'jotai'
import { currentLanguageAtom } from 'state/state'

const javascript = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'findHash',
    args: ['nonce'],
  },
  defaultCode: `function compressPublicKey(publicKey) {
  // Determine if the y coordinate is even or odd and prepend the
  // corresponding header byte to the x coordinate.
  // Return a hex string
  const header_byte = {
    'y_is_even': '02',
    'y_is_odd':  '03'
  };
  const evenOrOdd = publicKeyToBigInt % 2n == 0 ? 'is_even' : 'is_odd';
  return header_byte[evenOrOdd] + publicKeyX;
}`,
  validate: async (answer) => {
    return [true, undefined]
  },
  constraints: [],
}

const python = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'find_hash',
    args: ['nonce'],
  },
  defaultCode: `def compress_publickey(public_key):
    header_byte = {
        "y_is_even": "02",
        "y_is_odd":  "03"
    }
    evenOrOdd = 'is_even' if publicKeyToBigInt % 2 == 0 else 'is_odd';
    return header_byte[evenOrOdd] + public_keyX`,
  validate: async (answer) => {
    return [true, undefined]
  },
  constraints: [],
}

const config: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript,
    python,
  },
}

export default function PublicKeyResourcesFour({ lang }) {
  const t = useTranslations(lang)
  const [currentLanguage] = useAtom(currentLanguageAtom)

  const [code, setCode] = useState(
    config.languages[getLanguageString(currentLanguage)].defaultCode as string
  )

  const [language, setLanguage] = useState(getLanguageString(currentLanguage))

  const [challengeIsToggled, setChallengeIsToggled] = useState(false)

  const challengeToggleSwitch = () => {
    setChallengeIsToggled(!challengeIsToggled)
  }

  const handleSetLanguage = (value) => {
    setLanguage(value)
    setCode(config.languages[value].defaultCode as string)
  }

  const handleBeforeMount = (monaco) => {
    monaco.editor.defineTheme('satoshi', {
      base: readOnlyOptions.theme,
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#00000000',
        'editor.lineHighlightBorder': '#00000000', // 4th channel is for transparency
      },
    })
  }

  const handleMount = (_editor, monaco) => {
    monaco.editor.setTheme('satoshi')
  }

  return (
    <ResourcePage
      lang={lang}
      readingResources={
        <>
          <Text className="mt-[25px] text-xl font-bold">
            {t(
              'chapter_four.resources.public_key_four.y_coordinate_compression_heading'
            )}
          </Text>
          <Text>
            {t(
              'chapter_four.resources.public_key_four.y_coordinate_compression_paragraph'
            )}
          </Text>
        </>
      }
      tipsResources={
        <ul className="list-inside list-disc font-nunito text-white">
          <li>{t('chapter_four.resources.public_key_four.tip')}</li>
        </ul>
      }
      codeResources={
        <>
          <Text>{t('help_page.pseudo_solution')}</Text>
          <div className="flex flex-row items-center gap-2">
            <ToggleSwitch
              checked={challengeIsToggled}
              onChange={challengeToggleSwitch}
            />
            <Text>{t('help_page.pseudo_confirm')}</Text>
          </div>
          {challengeIsToggled && (
            <div className="border border-white/25">
              <LanguageTabs
                languages={config.languages}
                value={language}
                onChange={handleSetLanguage}
                noHide
              />
              <div className="relative grow bg-[#00000026] font-mono text-sm text-white">
                <MonacoEditor
                  loading={<Loader className="h-10 w-10 text-white" />}
                  height={`280px`}
                  value={code}
                  beforeMount={handleBeforeMount}
                  onMount={handleMount}
                  language={language}
                  theme={'satoshi'}
                  options={readOnlyOptions}
                />
              </div>
            </div>
          )}
        </>
      }
    />
  )
}
