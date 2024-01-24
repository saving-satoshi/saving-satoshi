'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'
import { Loader } from 'shared'

import MonacoEditor from '@monaco-editor/react'

import { EditorConfig } from 'types'
import { Text, ResourcePage, ToggleSwitch, CodeExample } from 'ui'
import LanguageTabs from 'ui/lesson/ScriptingChallenge/LanguageTabs'
import { readOnlyOptions } from 'ui/lesson/ScriptingChallenge/config'

const javascriptChallengeOne = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: ``,
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

const pythonChallengeOne = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: ``,
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

const javascriptChallengeTwo = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: ``,
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

const pythonChallengeTwo = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: ``,
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
const javascriptChallengeThree = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: ``,
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

const pythonChallengeThree = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: ``,
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

const javascriptChallengeFour = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: ``,
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

const pythonChallengeFour = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: ``,
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

const javascriptChallengeFive = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: ``,
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

const pythonChallengeFive = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: ``,
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

const javascriptChallengeSix = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `
const in0 = Input.from_output(txid, vout, value, scriptcode);
const out0 = Output.from_options('bc1qgghq08syehkym52ueu9nl5x8gth23vr8hurv9dyfcmhaqk4lrlgs28epwj', 100000000);
const out1 = Output.from_options(addr, 549999000);
const tx = new Transaction();
tx.inputs.push(in0);
tx.outputs.push(out0);
tx.outputs.push(out1);
tx.sign_input(0, priv, compressed_pub);
    `,
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

const pythonChallengeSix = {
  program: `print("KILL")`,
  defaultFunction: {
    name: 'verify',
    args: [],
  },
  defaultCode: `
in0 = Input.from_output(txid, vout, value, scriptcode)
out0 = Output.from_options("bc1qgghq08syehkym52ueu9nl5x8gth23vr8hurv9dyfcmhaqk4lrlgs28epwj", 100000000)
out1 = Output.from_options(addr, 549999000)
tx.inputs.append(in0)
tx.outputs.append(out0)
tx.outputs.append(out1)
tx.sign_input(0, priv, compressed_pub)
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

const configThree: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript: javascriptChallengeThree,
    python: pythonChallengeThree,
  },
}

const configFour: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript: javascriptChallengeFour,
    python: pythonChallengeFour,
  },
}

const configFive: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript: javascriptChallengeFive,
    python: pythonChallengeFive,
  },
}

const configSix: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript: javascriptChallengeSix,
    python: pythonChallengeSix,
  },
}

export default function PutItAllTogetherResources({ lang }) {
  const t = useTranslations(lang)
  const initialStateCodeOne =
    configOne.languages[configOne.defaultLanguage].defaultCode
  const [codeOne, setCodeOne] = useState<string>(initialStateCodeOne as string)
  const initialStateCodeTwo =
    configTwo.languages[configTwo.defaultLanguage].defaultCode
  const [codeTwo, setCodeTwo] = useState<string>(initialStateCodeTwo as string)
  const initialStateCodeThree =
    configThree.languages[configThree.defaultLanguage].defaultCode
  const [codeThree, setCodeThree] = useState<string>(
    initialStateCodeThree as string
  )
  const initialStateCodeFour =
    configFour.languages[configFour.defaultLanguage].defaultCode
  const [codeFour, setCodeFour] = useState<string>(
    initialStateCodeFour as string
  )
  const initialStateCodeFive =
    configFive.languages[configFive.defaultLanguage].defaultCode
  const [codeFive, setCodeFive] = useState<string>(
    initialStateCodeFive as string
  )
  const initialStateCodeSix =
    configSix.languages[configSix.defaultLanguage].defaultCode
  const [codeSix, setCodeSix] = useState<string>(initialStateCodeSix as string)
  const [languageOne, setLanguageOne] = useState(configOne.defaultLanguage)
  const [languageTwo, setLanguageTwo] = useState(configTwo.defaultLanguage)
  const [languageThree, setLanguageThree] = useState(
    configThree.defaultLanguage
  )
  const [languageFive, setLanguageFive] = useState(configFive.defaultLanguage)
  const [languageSix, setLanguageSix] = useState(configSix.defaultLanguage)
  const [languageFour, setLanguageFour] = useState(configFour.defaultLanguage)
  const [challengeOneIsToggled, setChallengeOneIsToggled] = useState(false)
  const [challengeTwoIsToggled, setChallengeTwoIsToggled] = useState(false)
  const [challengeThreeIsToggled, setChallengeThreeIsToggled] = useState(false)
  const [challengeFourIsToggled, setChallengeFourIsToggled] = useState(false)
  const [challengeFiveIsToggled, setChallengeFiveIsToggled] = useState(false)
  const [challengeSixIsToggled, setChallengeSixIsToggled] = useState(false)

  const challengeOneToggleSwitch = () => {
    setChallengeOneIsToggled(!challengeOneIsToggled)
  }

  const challengeTwoToggleSwitch = () => {
    setChallengeTwoIsToggled(!challengeTwoIsToggled)
  }

  const challengeThreeToggleSwitch = () => {
    setChallengeThreeIsToggled(!challengeThreeIsToggled)
  }

  const challengeFourToggleSwitch = () => {
    setChallengeFourIsToggled(!challengeFourIsToggled)
  }

  const challengeFiveToggleSwitch = () => {
    setChallengeFiveIsToggled(!challengeFiveIsToggled)
  }

  const challengeSixToggleSwitch = () => {
    setChallengeSixIsToggled(!challengeSixIsToggled)
  }

  const handleSetLanguageOne = (value) => {
    setLanguageOne(value)
    setCodeOne(configOne.languages[value].defaultCode as string)
  }
  const handleSetLanguageTwo = (value) => {
    setLanguageTwo(value)
    setCodeTwo(configTwo.languages[value].defaultCode as string)
  }
  const handleSetLanguageThree = (value) => {
    setLanguageThree(value)
    setCodeThree(configThree.languages[value].defaultCode as string)
  }
  const handleSetLanguageFour = (value) => {
    setLanguageFour(value)
    setCodeFour(configFour.languages[value].defaultCode as string)
  }
  const handleSetLanguageFive = (value) => {
    setLanguageFive(value)
    setCodeFive(configFive.languages[value].defaultCode as string)
  }
  const handleSetLanguageSix = (value) => {
    setLanguageSix(value)
    setCodeSix(configSix.languages[value].defaultCode as string)
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
            {t('chapter_six.resources.verify_signature.eliptic_curve_heading')}
          </Text>
          <Text>
            {t(
              'chapter_six.resources.verify_signature.eliptic_curve_paragraph_one'
            )}
          </Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t(
              'chapter_six.resources.verify_signature.public_private_key_heading'
            )}
          </Text>
          <Text>
            {t(
              'chapter_six.resources.verify_signature.public_private_key_paragraph_one'
            )}
          </Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t(
              'chapter_six.resources.verify_signature.signature_verification_heading'
            )}
          </Text>
          <Text>
            {t(
              'chapter_six.resources.verify_signature.signature_verification_paragraph_one'
            )}
          </Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t(
              'chapter_six.resources.verify_signature.finite_field_arithmetic_heading'
            )}
          </Text>
          <Text>
            {t(
              'chapter_six.resources.verify_signature.finite_field_arithmetic_paragraph_one'
            )}
          </Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t('chapter_six.resources.verify_signature.ge_and_fe_heading')}
          </Text>
          <Text>
            {t(
              'chapter_six.resources.verify_signature.ge_and_fe_paragraph_one'
            )}
          </Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t(
              'chapter_six.resources.verify_signature.modular_inverse_heading'
            )}
          </Text>
          <Text>
            {t(
              'chapter_six.resources.verify_signature.modular_inverse_paragraph_one'
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
              <div className="relative grow bg-[#00000026] font-mono text-sm text-white">
                <MonacoEditor
                  loading={<Loader className="h-10 w-10 text-white" />}
                  height={`327px`}
                  value={codeOne}
                  beforeMount={handleBeforeMount}
                  onMount={handleMount}
                  language={languageOne}
                  theme={'satoshi'}
                  options={readOnlyOptions}
                />
              </div>
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
              <div className="relative grow bg-[#00000026] font-mono text-sm text-white">
                <MonacoEditor
                  loading={<Loader className="h-10 w-10 text-white" />}
                  height={`327px`}
                  value={codeTwo}
                  beforeMount={handleBeforeMount}
                  onMount={handleMount}
                  language={languageTwo}
                  theme={'satoshi'}
                  options={readOnlyOptions}
                />
              </div>
            </div>
          )}
          <Text>{t('help_page.solution_three')}</Text>
          <div className="flex flex-row items-center gap-2">
            <ToggleSwitch
              checked={challengeThreeIsToggled}
              onChange={challengeThreeToggleSwitch}
            />
            <Text>{t('help_page.spoilers_confirm')}</Text>
          </div>
          {challengeThreeIsToggled && (
            <div className="border border-white/25">
              <LanguageTabs
                languages={configThree.languages}
                value={languageThree}
                onChange={handleSetLanguageThree}
                noHide
              />
              <div className="relative grow bg-[#00000026] font-mono text-sm text-white">
                <MonacoEditor
                  loading={<Loader className="h-10 w-10 text-white" />}
                  height={`327px`}
                  value={codeThree}
                  beforeMount={handleBeforeMount}
                  onMount={handleMount}
                  language={languageThree}
                  theme={'satoshi'}
                  options={readOnlyOptions}
                />
              </div>
            </div>
          )}
          <Text>{t('help_page.solution_four')}</Text>
          <div className="flex flex-row items-center gap-2">
            <ToggleSwitch
              checked={challengeFourIsToggled}
              onChange={challengeFourToggleSwitch}
            />
            <Text>{t('help_page.spoilers_confirm')}</Text>
          </div>
          {challengeFourIsToggled && (
            <div className="border border-white/25">
              <LanguageTabs
                languages={configFour.languages}
                value={languageFour}
                onChange={handleSetLanguageFour}
                noHide
              />
              <div className="relative grow bg-[#00000026] font-mono text-sm text-white">
                <MonacoEditor
                  loading={<Loader className="h-10 w-10 text-white" />}
                  height={`1130px`}
                  value={codeFour}
                  beforeMount={handleBeforeMount}
                  onMount={handleMount}
                  language={languageFour}
                  theme={'satoshi'}
                  options={readOnlyOptions}
                />
              </div>
            </div>
          )}
          <Text>{t('help_page.solution_five')}</Text>
          <div className="flex flex-row items-center gap-2">
            <ToggleSwitch
              checked={challengeFiveIsToggled}
              onChange={challengeFiveToggleSwitch}
            />
            <Text>{t('help_page.spoilers_confirm')}</Text>
          </div>
          {challengeFiveIsToggled && (
            <div className="border border-white/25">
              <LanguageTabs
                languages={configFive.languages}
                value={languageFive}
                onChange={handleSetLanguageFive}
                noHide
              />
              <div className="relative grow bg-[#00000026] font-mono text-sm text-white">
                <MonacoEditor
                  loading={<Loader className="h-10 w-10 text-white" />}
                  height={`1130px`}
                  value={codeFive}
                  beforeMount={handleBeforeMount}
                  onMount={handleMount}
                  language={languageFive}
                  theme={'satoshi'}
                  options={readOnlyOptions}
                />
              </div>
            </div>
          )}
          <Text>{t('help_page.solution_six')}</Text>
          <div className="flex flex-row items-center gap-2">
            <ToggleSwitch
              checked={challengeSixIsToggled}
              onChange={challengeSixToggleSwitch}
            />
            <Text>{t('help_page.spoilers_confirm')}</Text>
          </div>
          {challengeSixIsToggled && (
            <div className="border border-white/25">
              <LanguageTabs
                languages={configSix.languages}
                value={languageSix}
                onChange={handleSetLanguageSix}
                noHide
              />
              <div className="relative grow bg-[#00000026] font-mono text-sm text-white">
                <MonacoEditor
                  loading={<Loader className="h-10 w-10 text-white" />}
                  height={`1130px`}
                  value={codeSix}
                  beforeMount={handleBeforeMount}
                  onMount={handleMount}
                  language={languageSix}
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
