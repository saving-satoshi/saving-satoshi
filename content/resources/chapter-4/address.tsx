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
    `// This is the compressed public key from the previous lesson
const compressedPublicKey = "021f5b099ee48f1697658361bfd600c174021a871d8e5a4686f5c0753ba70abda3"
// First we need to hash it with SHA256
const shaHash = crypto.Hash('sha256').update(compressedPublicKey).digest()
// Then you will need to hash it with ripemd160 this needs to be decoded into hex
const ripemdHash = crypto.Hash('ripemd160').update(shaHash)
// Finally decode the answer into hex
const publicKeyHash = ripemdHash.digest('hex')
console.log(publicKeyHash)`,
    `const crypto = require('crypto')wwooooo

// Create a program that finds a sha256 hash starting with 5 zeroes.
// To submit your answer, log it to the terminal using console.log().

// Type your code here
`,
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
    `# This is the compressed public key from the previous lesson that needs to be encoded to proceed
encodedPublicKey = "021f5b099ee48f1697658361bfd600c174021a871d8e5a4686f5c0753ba70abda3".encode('utf-8')
# First we need to hash it with SHA256
shaHash = hashlib.new('sha256', compressedPublicKey).digest()
# Then you will need to hash it with ripemd160
ripemdHash = hashlib.new('ripemd160', shaHash)
# Finally decode the answer into hex
publicKeyHash = ripemdHash.hexdigest()
print(publicKeyHash)`,
    `from hashlib import sha256wooooo

# Create a program that finds a sha256 hash starting with 5 zeroes.
# To submit your answer, print it to the terminal using print().

# Type your code here
`,
  ],
  validate: async (answer) => {
    return [true, undefined]
  },
  constraints: [],
}

const configOne: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript,
    python,
  },
}

const configTwo: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript,
    python,
  },
}

export default function AddressResources({ lang }) {
  const t = useTranslations(lang)

  const [codeOne, setCodeOne] = useState(
    configOne.languages[configOne.defaultLanguage].defaultCode?.[0]
  )
  const [codeTwo, setCodeTwo] = useState(
    configTwo.languages[configTwo.defaultLanguage].defaultCode?.[1]
  )
  const [languageOne, setLanguageOne] = useState(configOne.defaultLanguage)
  const [languageTwo, setLanguageTwo] = useState(configTwo.defaultLanguage)
  const [challengeOneIsToggled, setChallengeOneIsToggled] = useState(false)
  const [challengeTwoIsToggled, setChallengeTwoIsToggled] = useState(false)

  const challengeOneToggleSwitch = () => {
    setChallengeOneIsToggled(!challengeOneIsToggled)
  }

  const challengeTwoToggleSwitch = () => {
    setChallengeTwoIsToggled(!challengeTwoIsToggled)
  }

  const handleSetLanguageOne = (value) => {
    setLanguageOne(value)
    setCodeOne(configOne.languages[value].defaultCode?.[0])
  }

  const handleSetLanguageTwo = (value) => {
    setLanguageTwo(value)
    setCodeTwo(configOne.languages[value].defaultCode?.[1])
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
            {t('chapter_four.resources.address.hash_algo_heading')}
          </Text>
          <Text>{t('chapter_four.resources.address.hash_algo_paragraph')}</Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t('chapter_four.resources.address.wpkh_heading')}
          </Text>
          <Text>{t('chapter_four.resources.address.wpkh_paragraph')}</Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t('chapter_four.resources.address.network_heading')}
          </Text>
          <Text>{t('chapter_four.resources.address.network_paragraph')}</Text>
        </>
      }
      codeResources={
        <>
          <Text>{t('help_page.solution_one')}</Text>
          <div className="flex flex-row items-center gap-2">
            <ToggleSwitch
              checked={challengeOneIsToggled}
              onChange={challengeOneToggleSwitch}
            />
            <Text>{t('help_page.spoilers_confirm')}</Text>
          </div>
          {challengeOneIsToggled && (
            <div className="border border-white/25">
              <LanguageTabs
                languages={configOne.languages}
                value={languageOne}
                onChange={handleSetLanguageOne}
                noHide={true}
              />
              <MonacoEditor
                loading={<Loader className="h-10 w-10 text-white" />}
                height={`calc(var(--dynamic-height) - 767px)`}
                value={codeOne}
                beforeMount={handleBeforeMount}
                onMount={handleMount}
                language={languageOne}
                theme={'satoshi'}
                options={readOnlyOptions}
              />
            </div>
          )}
          <Text>{t('help_page.solution_two')}</Text>
          <div className="flex flex-row items-center gap-2">
            <ToggleSwitch
              checked={challengeTwoIsToggled}
              onChange={challengeTwoToggleSwitch}
            />
            <Text>{t('help_page.spoilers_confirm')}</Text>
          </div>
          {challengeTwoIsToggled && (
            <div className="border border-white/25">
              <LanguageTabs
                languages={configTwo.languages}
                value={languageTwo}
                onChange={handleSetLanguageTwo}
                noHide
              />
              <MonacoEditor
                loading={<Loader className="h-10 w-10 text-white" />}
                height={`calc(var(--dynamic-height) - 767px)`}
                value={codeTwo}
                beforeMount={handleBeforeMount}
                onMount={handleMount}
                language={languageTwo}
                theme={'satoshi'}
                options={readOnlyOptions}
              />
            </div>
          )}
        </>
      }
    />
  )
}
