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
    name: 'getBlockHeight',
    args: ['height'],
  },
  defaultCode: `function getBlockHeight(height) {
  const hashes = Bitcoin.rpc('getblocksbyheight', CODE_CHALLENGE_2_HEIGHT);
  let answer = null;
  let txCount = Infinity;

  for (const bhash of hashes) {
    const block = Bitcoin.rpc('getblock', bhash);
    const num = block.txs.length;

    if (num < txCount) {
      txCount = num;
      answer = bhash;
    }
  }
  return answer;
  }`,
  validate: async (answer) => {
    if (answer !== 'True') {
      return [false, 'Signature is not valid']
    }

    return [true, undefined]
  },
  constraints: [
    {
      range: [156, 1, 158, 1],
      allowMultiline: true,
    },
  ],
}

const pythonChallenge = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'get_block_height',
    args: ['height'],
  },
  defaultCode: `def get_block_height(height):
  hashes = Bitcoin.rpc("getblocksbyheight", height)
  answer = None
  tx_count = float("inf")
  for bhash in hashes:
      block = Bitcoin.rpc("getblock", bhash)
      num = len(block["txs"])
      if num < tx_count:
          tx_count = num
          answer = bhash
  return answer
  `,
  validate: async (answer) => {
    return [true, undefined]
  },
  constraints: [
    {
      range: [154, 1, 158, 1],
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

export default function BuildingBlocksResourcesFour({ lang }) {
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
              'chapter_eight.resources.building_blocks_four.block_data_heading'
            )}
          </Text>
          <Text>
            {t(
              'chapter_eight.resources.building_blocks_four.block_data_paragraph_one'
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
                  height={`315px`}
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
