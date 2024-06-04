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
  defaultCode: `function msg_to_integer(msg) {
  // Given a hex string to sign, convert that string to bytes,
  // double-SHA256 the bytes and then return a BigInt() from the 32-byte digest.
  const bytes = Buffer.from(msg, 'hex');
  const single_hash = Hash('sha256').update(bytes).digest();
  const double_hash = Hash('sha256').update(single_hash).digest();
  return BigInt('0x' + double_hash.toString('hex'));
}`,
  validate: async (answer) => {
    return [true, undefined]
  },
  constraints: [
    {
      range: [1, 1, 1, 1],
      allowMultiline: true,
    },
  ],
}

const pythonChallenge = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `def msg_to_integer(msg):
    # Given a hex string to sign, convert that string to bytes,
    # double-SHA256 the bytes and then return an integer from the 32-byte digest.
    single_hash = hashlib.new('sha256', bytes.fromhex(msg)).digest()
    double_hash = hashlib.new('sha256', single_hash).digest()
    return int.from_bytes(double_hash, "big")`,
  validate: async (answer) => {
    return [true, undefined]
  },
  constraints: [
    {
      range: [1, 1, 1, 1],
      allowMultiline: true,
    },
  ],
}

const config: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript: javascriptChallenge,
    python: pythonChallenge,
  },
}

export default function VerifySignatureResourcesTwo({ lang }) {
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
            {t('chapter_five.resources.verify_signature.eliptic_curve_heading')}
          </Text>
          <Text>
            {t(
              'chapter_five.resources.verify_signature.eliptic_curve_paragraph_one'
            )}
          </Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t(
              'chapter_five.resources.verify_signature.public_private_key_heading'
            )}
          </Text>
          <Text>
            {t(
              'chapter_five.resources.verify_signature.public_private_key_paragraph_one'
            )}
          </Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t(
              'chapter_five.resources.verify_signature.signature_verification_heading'
            )}
          </Text>
          <Text>
            {t(
              'chapter_five.resources.verify_signature.signature_verification_paragraph_one'
            )}
          </Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t(
              'chapter_five.resources.verify_signature.finite_field_arithmetic_heading'
            )}
          </Text>
          <Text>
            {t(
              'chapter_five.resources.verify_signature.finite_field_arithmetic_paragraph_one'
            )}
          </Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t('chapter_five.resources.verify_signature.ge_and_fe_heading')}
          </Text>
          <Text>
            {t(
              'chapter_five.resources.verify_signature.ge_and_fe_paragraph_one'
            )}
          </Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t(
              'chapter_five.resources.verify_signature.modular_inverse_heading'
            )}
          </Text>
          <Text>
            {t(
              'chapter_five.resources.verify_signature.modular_inverse_paragraph_one'
            )}
          </Text>
        </>
      }
      codeResources={
        <>
          <Text>{t('help_page.solution_one')}</Text>
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
