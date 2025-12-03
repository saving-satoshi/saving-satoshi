'use client'

import { useTranslations } from 'hooks'
import { useState, useRef } from 'react'
import { Loader } from 'shared'

import MonacoEditor from '@monaco-editor/react'

import { EditorConfig } from 'types'
import { Text, ResourcePage, ToggleSwitch } from 'ui'
import LanguageTabs from 'ui/lesson/ScriptingChallenge/LanguageTabs'
import { readOnlyOptions } from 'ui/lesson/ScriptingChallenge/config'
import { getLanguageFromString, getLanguageString } from 'lib/SavedCode'
import { useAtom } from 'jotai'
import { currentLanguageAtom } from 'state/state'

const javascript = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'findHash',
    args: ['nonce'],
  },
  defaultCode: [
    `function findHashFromNonce(nonce) {
  let hash = '';

  // while the hash does not start with 5 zeroes we want the prgram to repeat
  while (hash.substring(0, 5) !== '00000') {
    // Hash the nonce using the crypto library and then increment the nonce
    hash = crypto.createHash('sha256').update(nonce.toString()).digest('hex');
    if(hash.startsWith('00000')) {
      return nonce
    }
    nonce++;
  }
}`,
  ],
  validate: async () => {
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
  defaultCode: [
    `def find_hash_from_nonce(nonce):
    # Lets initialize the hash here as an empty string
    hash = ''

    # while the hash does not start with 5 zeroes we want the prgram to repeat
    while hash[0:5] != '00000':
        # Hash the nonce using the crypto library and then increment the nonce
        hash = sha256(str(nonce).encode()).digest().hex()
        if (hash[0:5] == '00000'):
            return nonce
        nonce += 1
`,
  ],
  validate: async () => {
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

export default function ScriptingResourcesTwo({ lang }) {
  const t = useTranslations(lang)

  const [currentLanguage, setCurrentLanguage] = useAtom(currentLanguageAtom)

  const [code, setCode] = useState(
    config.languages[getLanguageString(currentLanguage)].defaultCode?.[0]
  )
  const [language, setLanguage] = useState(getLanguageString(currentLanguage))
  const [challengeIsToggled, setChallengeIsToggled] = useState(false)
  const [copied, setCopied] = useState(false)

  const editorRef = useRef<any>(null)

  const challengeToggleSwitch = () => {
    setChallengeIsToggled(!challengeIsToggled)
  }

  const handleSetLanguage = (value) => {
    setLanguage(value)
    setCurrentLanguage(getLanguageFromString(value))
    setCode(config.languages[value].defaultCode?.[0])
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

  const handleMount = (editor, monaco) => {
    editorRef.current = editor
    monaco.editor.setTheme('satoshi')
  }

  const handleCopy = async () => {
    try {
      const textToCopy = editorRef.current?.getValue?.() ?? code ?? ''

      if (!textToCopy) return

      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(textToCopy)
      } else {
        // Fallback for very old browsers
        const textarea = document.createElement('textarea')
        textarea.value = textToCopy
        textarea.style.position = 'fixed'
        textarea.style.opacity = '0'
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
      }

      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (error) {
      console.error('Failed to copy code:', error)
    }
  }

  return (
    <ResourcePage
      lang={lang}
      readingResources={
        <>
          <Text className="mt-[25px] text-xl font-bold">
            {t('chapter_two.resources.scripting_one.hash_libraries_heading')}
          </Text>
          <Text>
            {t('chapter_two.resources.scripting_one.hash_libraries_paragraph')}
          </Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t('chapter_two.resources.scripting_one.nonce_heading')}
          </Text>
          <Text>
            {t('chapter_two.resources.scripting_one.nonce_paragraph')}
          </Text>
        </>
      }
      tipsResources={
        <ul className="list-inside list-disc font-nunito text-white">
          <li>{t('chapter_two.resources.scripting_one.tip_one')}</li>
          <li>{t('chapter_two.resources.scripting_one.tip_two')}</li>
          <li>{t('chapter_two.resources.scripting_one.tip_three')}</li>
        </ul>
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
              {/* Tabs bar + copy button on right */}
              <div className="flex items-center justify-between">
                <LanguageTabs
                  languages={config.languages}
                  value={language}
                  onChange={handleSetLanguage}
                  noHide={true}
                />

                {/* Copy button with icon + small "Copied!" message */}
                <div className="relative mr-3 inline-flex items-center">
                  <button
                    type="button"
                    onClick={handleCopy}
                    title="Copy code"
                    className="inline-flex h-7 w-7 items-center justify-center rounded bg-[#00000033] text-white/80 hover:bg-[#00000066] focus:outline-none focus:ring-1 focus:ring-white/60"
                  >
                    {/* copy icon similar to 2nd screenshot */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <rect
                        x="9"
                        y="9"
                        width="11"
                        height="11"
                        rx="2"
                        ry="2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <rect
                        x="4"
                        y="4"
                        width="11"
                        height="11"
                        rx="2"
                        ry="2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </button>

                  {copied && (
                    <span className="bg-green-600 absolute -top-6 right-0 rounded px-2 py-[2px] text-[10px] font-semibold text-white shadow">
                      Copied!
                    </span>
                  )}
                </div>
              </div>

              <div className="bg-[#00000026] font-mono text-sm text-white">
                <MonacoEditor
                  loading={<Loader className="h-10 w-10 text-white" />}
                  height="250px"
                  value={code}
                  beforeMount={handleBeforeMount}
                  onMount={handleMount}
                  language={language}
                  theme="satoshi"
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
