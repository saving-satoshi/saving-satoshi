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
  defaultCode: `const showtime = ()=> {
    let height = 6929851;
    let tips = {};
    let prevs = {};
    let invalid = [];
    let valid = [];
    let last = Bitcoin.rpc("getinfo")["blocks"];
    while (height <= last) {
        let candidates = Bitcoin.rpc("getblocksbyheight", height);
        for (let bhash of candidates) {
            let block = Bitcoin.rpc("getblock", bhash);
            // Don't even bother checking blocks with invalid parents
            if (invalid.includes(block["prev"]) || !validateBlock(block)) {
                invalid.push(bhash);
                continue;
            }
            // Valid blocks replace their parents in the tips list, extending the branch
            if (tips[block["prev"]]) {
                delete tips[block["prev"]];
            }
            tips[block["hash"]] = block;
            // save prev mapping for final output
            prevs[bhash] = block["prev"];
        }
        height += 1;
    }

    // this is the tip of the longest valid chain
    let best = Object.values(tips).reduce(function(a, b) {
        return a["height"] > b["height"] ? a : b;
    });
    // now reconstruct the chain of parent blocks
    let best_hash = best["hash"];
    valid.push(best_hash);
    while (prevs[best_hash]) {
        let prev = prevs[best_hash];
        valid.push(prev);
        best_hash = prev;
    }
    // reverse it because the instructions said to start low and go to tip
    valid.reverse();
    return {
        valid: valid,
        invalid: invalid
    };
}
`,
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
  defaultCode: `def showtime():
  height = 6929851
  tips = {}
  prevs = {}
  invalid = []
  valid = []
  last = Bitcoin.rpc("getinfo")["blocks"]
  while height <= last:
      candidates = Bitcoin.rpc("getblocksbyheight", height)
      for bhash in candidates:
          block = Bitcoin.rpc("getblock", bhash)
          # Don't even bother checking blocks with invalid parents
          if block["prev"] in invalid or not validate_block(block):
              invalid.append(bhash)
              continue
          # Valid blocks replace their parents in the tips list, extending the branch
          if block["prev"] in tips:
              del tips[block["prev"]]
          tips[block["hash"]] = block
          # save prev mapping for final output
          prevs[bhash] = block["prev"]
      height += 1
  # this is the tip of the longest valid chain
  best = max(tips.values(), key=lambda block: block["height"])
  # now reconstruct the chain of parent blocks
  best_hash = best["hash"]
  valid.append(best_hash)
  while best_hash in prevs:
      prev = prevs[best_hash]
      valid.append(prev)
      best_hash = prev
  # reverse it because the instructions said to start low and go to tip
  valid.reverse()
  return {
      "valid": valid,
      "invalid": invalid
  }
`,
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

export default function BuildingBlocksResources({ lang }) {
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
              'chapter_eight.resources.building_blocks_eight.showtime_heading'
            )}
          </Text>
          <Text>
            {t(
              'chapter_eight.resources.building_blocks_eight.showtime_paragraph_one'
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
                  height={`915px`}
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
