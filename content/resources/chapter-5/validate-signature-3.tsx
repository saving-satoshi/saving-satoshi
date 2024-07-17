'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'
import { Loader } from 'shared'

import MonacoEditor from '@monaco-editor/react'

import { EditorConfig } from 'types'
import { Text, ResourcePage, ToggleSwitch } from 'ui'
import LanguageTabs from 'ui/lesson/ScriptingChallenge/LanguageTabs'
import { readOnlyOptions } from 'ui/lesson/ScriptingChallenge/config'
import { getLanguageString } from 'lib/SavedCode'
import { useAtom } from 'jotai'
import { currentLanguageAtom } from 'state/state'

const javascriptChallenge = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `// We need to take the encoded signature for this value to split into its r and s values.
const [r, s] = decode_sig(vpSig)
// This will be the message by Vanderpoole encoded into a BigInt.
const msg = encode_message(text)
// lastly this will be the value we use in the verify function to help check the signature against the message.
const keyGE = new GE(new FE(publicKeyX), new FE(publicKeyY))`,
  validate: async () => {
    return [true, undefined]
  },
  constraints: [],
}

const pythonChallenge = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `# We need to take the encoded signature for this value to split into its r and s values.
[r, s] = decode_sig(vp_sig)
# This will be the message by Vanderpoole encoded into a BigInt.
msg = encode_message(text)
# lastly this will be the value we use in the verify function to help check the signature against the message.
key_ge = GE(public_key_x, public_key_y)`,
  validate: async () => {
    return [true, undefined]
  },
  constraints: [],
}

const config: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript: javascriptChallenge,
    python: pythonChallenge,
  },
}

export default function VerifySignatureResourcesThree({ lang }) {
  const t = useTranslations(lang)
  const [currentLanguage] = useAtom(currentLanguageAtom)

  const initialStateCode =
    config.languages[getLanguageString(currentLanguage)].defaultCode
  const [code, setCode] = useState<string>(initialStateCode as string)

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
              'chapter_five.resources.validate_signature.message_verification_heading'
            )}
          </Text>
          <Text>
            {t(
              'chapter_five.resources.validate_signature.message_verification_paragraph_one'
            )}
          </Text>
        </>
      }
      codeResources={
        <>
          <Text>{t('help_page.solution')}</Text>
          <div className="flex flex-row items-center gap-2">
            <ToggleSwitch
              checked={challengeIsToggled}
              onChange={challengeToggleSwitch}
            />
            <Text>{t('help_page.spoilers_confirm')}</Text>
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
                  height={`160px`}
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
