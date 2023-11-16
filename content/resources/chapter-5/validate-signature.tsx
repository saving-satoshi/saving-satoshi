'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'
import { Loader } from 'shared'

import MonacoEditor from '@monaco-editor/react'

import { EditorConfig } from 'types'
import { Text, ResourcePage, ToggleSwitch } from 'ui'
import LanguageTabs from 'ui/lesson/ScriptingChallenge/LanguageTabs'
import { readOnlyOptions } from 'ui/lesson/ScriptingChallenge/config'

const javascriptChallengeOne = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `function encodeMessage(prefix, text) {
  const textBytes = Buffer.from(text, 'ascii');
  const vector = Buffer.concat([
    Buffer.from([prefix.length]),
    prefix,
    Buffer.from([textBytes.length]),
    textBytes
  ])
  return vector.toString('hex');
}`,
  validate: async () => {
    return [true, undefined]
  },
  constraints: [],
}

const pythonChallengeOne = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `def encode_message(prefix, text):
    vector = bytes([len(prefix)]) + bytes(prefix, 'ascii') + bytes([len(text)]) + bytes(text, 'ascii')
    return vector.hex()`,
  validate: async () => {
    return [true, undefined]
  },
  constraints: [],
}

const javascriptChallengeTwo = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `function decodeSig(vpSig) {
  const vpSigBytes = Buffer.from(vpSig, 'base64');
  const vpSigR = BigInt('0x' + vpSigBytes.slice(1, 33).toString('hex'));
  const vpSigS = BigInt('0x' + vpSigBytes.slice(33).toString('hex'));
  return [vpSigR, vpSigS]
}
`,
  validate: async () => {
    return [true, undefined]
  },
  constraints: [],
}

const pythonChallengeTwo = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `def decode_sig(vp_sig):
    vp_sig_bytes = base64.b64decode(vp_sig)
    vp_sig_r = int.from_bytes(vp_sig_bytes[1:33])
    vp_sig_s = int.from_bytes(vp_sig_bytes[33:])
    return (vp_sig_r, vp_sig_s)
`,
  validate: async () => {
    return [true, undefined]
  },
  constraints: [],
}

const configOne: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript: javascriptChallengeOne,
    python: pythonChallengeOne,
  },
}

const configTwo: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript: javascriptChallengeTwo,
    python: pythonChallengeTwo,
  },
}

export default function VerifySignatureResources({ lang }) {
  const t = useTranslations(lang)

  const initialStateCodeOne =
    configOne.languages[configOne.defaultLanguage].defaultCode
  const [codeOne, setCodeOne] = useState<string>(initialStateCodeOne as string)

  const initialStateCodeTwo =
    configTwo.languages[configTwo.defaultLanguage].defaultCode
  const [codeTwo, setCodeTwo] = useState(initialStateCodeTwo as string)

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
    setCodeOne(configOne.languages[value].defaultCode as string)
  }

  const handleSetLanguageTwo = (value) => {
    setLanguageTwo(value)
    setCodeTwo(configTwo.languages[value].defaultCode as string)
  }

  const handleBeforeMount = (monaco) => {
    monaco.editor.defineTheme('satoshi', {
      base: readOnlyOptions.theme,
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#00000026',
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
                noHide
              />
              <MonacoEditor
                loading={<Loader className="h-10 w-10 text-white" />}
                height={`calc(var(--dynamic-height) - 762px)`}
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
                height={`calc(var(--dynamic-height) - 822px)`}
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
