'use client'

import { useTranslations } from 'hooks'
import { useEffect, useState } from 'react'
import { Loader } from 'shared'

import MonacoEditor from '@monaco-editor/react'

import { EditorConfig } from 'types'
import { Text, ResourcePage, ToggleSwitch } from 'ui'
import LanguageTabs from 'ui/lesson/ScriptingChallenge/LanguageTabs'
import { readOnlyOptions } from 'ui/lesson/ScriptingChallenge/config'
import { useAuthContext } from 'providers/AuthProvider'

const javascript = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'findHash',
    args: ['nonce'],
  },
  defaultCode: [
    `// First your private key will need to be encoded into an integer from a hex string.
const encodedPrivateKey = BigInt(0x\${privateKey})
// From the library you need to use the .mul() method to multiply G by your private key
const generatorPoint = G.mul(encodedPrivateKey)
// Remember you need to log the answer for it to be validated
console.log(generatorPoint)`,
    `function compress_publickey(publickey) {
    const header_byte = {
      'y_is_even': Buffer.from([2]),
      'y_is_odd':  Buffer.from([3])
    };
    // The x value needs to encoded from an integer to a hex string
    const x_hex = publickey.x.toString(16);
    // The hex string then needs to be encoded into bytes
    const x_bytes = Buffer.from(x_hex, 'hex');
    // Finally we need to add the correct header byte whether it is even or odd and then decode into hex
    if ((publickey.y & 1n) === 0n)
      console.log(Buffer.concat([header_byte['y_is_even'], x_bytes]).toString('hex'));
    else
      console.log(Buffer.concat([header_byte['y_is_odd'], x_bytes]).toString('hex'));
  }
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
    `# First your private key will need to be encoded into an integer from a hex string.
encoded_private_key = int(0x\${private_key})
# From the library you need to use the .mul() method to multiply G by your private key
const generatorPoint = G.mul(encoded_private_key)
# Remember you need to log the answer for it to be validated
print(generator_point)`,
    `def compress_publickey(publickey):
    header_byte = {
        'y_is_even': bytes([2]),
        'y_is_odd': bytes([3])
    }
    # The x value needs to be encoded from an integer to a hex string
    x_hex = format(int(publickey['x'], 16), 'x')
    # The hex string then needs to be encoded into bytes
    x_bytes = bytes.fromhex(x_hex)
    # Finally we need to add the correct header byte whether it is even or odd and then decode into hex
    if int(publickey['y'], 16) % 2 == 0:
        print((header_byte['y_is_even'] + x_bytes).hex())
    else:
        print((header_byte['y_is_odd'] + x_bytes).hex())
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

export default function PublicKeyResources({ lang }) {
  const t = useTranslations(lang)
  const { account } = useAuthContext()

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
    setCodeTwo(configTwo.languages[value].defaultCode?.[1])
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
              'chapter_four.resources.public_key.elliptic_curve_reason_heading'
            )}
          </Text>
          <Text>
            {t(
              'chapter_four.resources.public_key.elliptic_curve_reason_paragraph'
            )}
          </Text>
          <ul className="list-inside list-disc font-nunito text-white">
            <li>
              {t(
                'chapter_four.resources.public_key.elliptic_curve_reason_list_one'
              )}
            </li>
            <li>
              {t(
                'chapter_four.resources.public_key.elliptic_curve_reason_list_two'
              )}
            </li>
            <li>
              {t(
                'chapter_four.resources.public_key.elliptic_curve_reason_list_three'
              )}
            </li>
            <li>
              {t(
                'chapter_four.resources.public_key.elliptic_curve_reason_list_four'
              )}
            </li>
          </ul>
          <Text className="mt-[25px] text-xl font-bold">
            {t('chapter_four.resources.public_key.secp_heading')}
          </Text>
          <Text>{t('chapter_four.resources.public_key.secp_paragraph')}</Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t('chapter_four.resources.public_key.generator_point_heading')}
          </Text>
          <Text>
            {t('chapter_four.resources.public_key.generator_point_paragraph')}
          </Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t(
              'chapter_four.resources.public_key.elliptic_curve_operations_heading'
            )}
          </Text>
          <Text>
            {t(
              'chapter_four.resources.public_key.elliptic_curve_operations_paragraph'
            )}
          </Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t('chapter_four.resources.public_key.discrete_log_heading')}
          </Text>
          <Text>
            {t('chapter_four.resources.public_key.discrete_log_paragraph')}
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
                  height={`calc(var(--dynamic-height) - 827px)`}
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
                  height={`calc(var(--dynamic-height) - 642px)`}
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
        </>
      }
    />
  )
}
