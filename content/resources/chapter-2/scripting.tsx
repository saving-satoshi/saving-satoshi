'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'
import { Loader } from 'shared'

import MonacoEditor from '@monaco-editor/react'

import { EditorConfig } from 'types'
import { Text, ResourcePage, ToggleSwitch } from 'ui'
import LanguageTabs from 'ui/lesson/ScriptingChallenge/LanguageTabs'
import { readOnlyOptions } from 'ui/lesson/ScriptingChallenge/config'

const javascript = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'findHash',
    args: ['nonce'],
  },
  defaultCode: [
    `function sha256_digest(nonce) {
    // Create a 4-byte UInt32 buffer
    const buf = Buffer.alloc(4);
    // Write the nonce as an integer into the buffer
    buf.writeUInt32LE(nonce);
    // Digest the 4-byte buffer with SHA256
    const hash = crypto.createHash('sha256').update(buf).digest();
    // Return hash as a hex string
    return hash.toString('hex')
}

// Lets initialize the hash here as an empty string
let hash = '';
// Lets initialize the nonce here as a number 0
let nonce = 0;
// while the hash does not start with 5 zeroes we want the prgram to repeat
while (hash.substring(0, 5) !== '00000') {
    // Hash the nonce using the crypto library and then increment the nonce
    hash = sha256_digest(nonce);
    nonce++;
}
console.log(hash)`,
  ],
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
  defaultCode: [
    `def sha256_digest(nonce):
    # Write the nonce as a string
    encoded_nonce = str(nonce).encode()
    # Digest the encoded string with SHA256
    return sha256(encoded_nonce).digest().hex()

# Lets initialize the hash here as an empty string
hash = ''
# Lets initialize the nonce here as a number 0
nonce = 0
# while the hash does not start with 5 zeroes we want the prgram to repeat
while hash[0:5] != '00000':
    # Hash the nonce using the crypto library and then increment the nonce
    hash = sha256_digest(nonce)
    nonce = nonce + 1
print(hash)`,
  ],
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

export default function AddressResources({ lang }) {
  const t = useTranslations(lang)

  const [code, setCode] = useState(
    config.languages[config.defaultLanguage].defaultCode?.[0]
  )
  const [language, setLanguage] = useState(config.defaultLanguage)
  const [challengeIsToggled, setChallengeIsToggled] = useState(false)

  const challengeToggleSwitch = () => {
    setChallengeIsToggled(!challengeIsToggled)
  }

  const handleSetLanguage = (value) => {
    setLanguage(value)
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

  const handleMount = (_editor, monaco) => {
    monaco.editor.setTheme('satoshi')
  }

  return (
    <ResourcePage
      lang={lang}
      readingResources={
        <>
          <Text className="mt-[25px] text-xl font-bold">
            {t('chapter_two.resources.scripting.hash_libraries_heading')}
          </Text>
          <Text>
            {t('chapter_two.resources.scripting.hash_libraries_paragraph')}
          </Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t('chapter_two.resources.scripting.nonce_heading')}
          </Text>
          <Text>{t('chapter_two.resources.scripting.nonce_paragraph')}</Text>
        </>
      }
      tipsResources={
        <ul className="list-inside list-disc font-nunito text-white">
          <li>{t('chapter_two.resources.scripting.tip_one')}</li>
          <li>{t('chapter_two.resources.scripting.tip_two')}</li>
          <li>{t('chapter_two.resources.scripting.tip_three')}</li>
        </ul>
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
                noHide={true}
              />
              <div className="relative grow bg-[#00000026] font-mono text-sm text-white">
                <MonacoEditor
                  loading={<Loader className="h-10 w-10 text-white" />}
                  height={`430px`}
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
