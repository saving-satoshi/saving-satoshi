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

const javascript = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `function createTxMessage() {
  let msg = '';
  // msg += version;
  // msg += number of inputs;
  // msg += hash of tx being spent by input #0;
  // msg += index of output of tx being spent by input #0;
  // scriptPubKey of output being spent by input #0:
  // https://blockstream.info/tx/0437cd7f8525ceed2324359c2d0ba26006d92d856a9c20fa0241106ee5a597c9?output:0&expand
  msg += '43410411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3ac';
  // msg += input #0 sequence;
  // msg += number of outputs;
  // msg += output #0 value (10 BTC or 1,000,000,000 satoshis);
  // msg += output #0 scriptPubKey (Hal Finney's public key plus OP_CHECKSIG);
  // msg += output #1 value (40 BTC or 4,000,000,000 satoshis);
  // msg += output #1 scriptPubKey (Satoshi's own public key again, for change);
  // msg += locktime;
  // SIGHASH type
  msg += '01000000';
  return msg
}`,
  validate: async () => {
    return [true, undefined]
  },
  constraints: [],
}

const python = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `def create_tx_message():
    msg = ""
    # msg += version
    # msg += number of inputs
    # msg += hash of tx being spent by input #0
    # msg += index of output of tx being spent by input #0
    # scriptPubKey of output being spent by input #0
    # https://blockstream.info/tx/0437cd7f8525ceed2324359c2d0ba26006d92d856a9c20fa0241106ee5a597c9?output:0&expand
    msg += '43410411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3ac'
    # msg += input #0 sequence
    # msg += number of outputs
    # msg += output #0 value (10 BTC or 1,000,000,000 satoshis)
    # msg += output #0 scriptPubKey (Hal Finney's public key plus OP_CHECKSIG)
    # msg += outut #1 value (40 BTC or 4,000,000,000 satoshis)
    # msg += output #1 scriptPubKey (Satoshi's own public key again, for change)
    # msg += locktime
    # SIGHASH type
    msg += '01000000'
    return msg`,
  validate: async () => {
    return [true, undefined]
  },
  constraints: [],
}

const config: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript: javascript,
    python: python,
  },
}

export default function DeriveMessageResources({ lang }) {
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
              'chapter_five.resources.derive_message_seven.sighash_type_flag_heading'
            )}
          </Text>
          <Text>
            {t(
              'chapter_five.resources.derive_message_seven.sighash_type_flag_paragraph_one'
            )}
          </Text>
        </>
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
                  height={`445px`}
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
