'use client'

import { useTranslations } from 'hooks'
import { useEffect, useState } from 'react'
import { Loader } from 'shared'

import MonacoEditor from '@monaco-editor/react'

import { EditorConfig } from 'types'
import { Text, ResourcePage, ToggleSwitch } from 'ui'
import LanguageTabs from 'ui/lesson/ScriptingChallenge/LanguageTabs'
import { readOnlyOptions } from 'ui/lesson/ScriptingChallenge/config'
import { useDataContext } from 'contexts/DataContext'
import { getLanguageString } from 'lib/SavedCode'

const javascript = {
  program: `console.log("KILL")`,
  defaultFunction: {
    name: 'findHash',
    args: ['nonce'],
  },
  defaultCode: [
    `function privateKeyToPublicKey(privateKey) {
  // First your private key will need to be encoded into an integer from a hex string.
  const encodedPrivateKey = BigInt(\`0x\${privateKey}\`)
  // From the library you need to use the .mul() method to multiply G by your private key
  const generatorPoint = G.mul(encodedPrivateKey)
  return generatorPoint
}`,
    `function compress_publickey(publicKey) {
  // Determine if the y coordinate is even or odd and prepend the
  // corresponding header byte to the x coordinate.
  // Return a hex string
  const header_byte = {
    'y_is_even': '02',
    'y_is_odd':  '03'
  };
  const regex = /([a-f0-9]+),([a-f0-9]+)/;
  const cleanedPublicKey = publicKey.replace(/\\s/g, '');
  const match = cleanedPublicKey.match(regex);
  const which = BigInt("0x" + match[2]) % 2n == 0 ? 'y_is_even' : 'y_is_odd';
  return header_byte[which] + match[1];
}`,
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
    `def privatekey_to_publickey(private_key):
    # First your private key will need to be encoded into an integer from a hex string.
    encoded_private_key = int(private_key, 16)
    # From the library you need to use the .mul() method to multiply G by your private key
    generator_point = G.mul(encoded_private_key)
    return generator_point`,
    `def compress_publickey(public_key):
    header_byte = {
        "y_is_even": "02",
        "y_is_odd":  "03"
    }
    regex = r"([a-f0-9]+),([a-f0-9]+)"
    cleaned_public_key = re.sub(r"\\s", "", public_key)
    match = re.search(regex, cleaned_public_key)
    which = 'y_is_even' if int(match.group(2), 16) % 2 == 0 else 'y_is_odd'
    return header_byte[which] + match.group(1)`,
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
  const { currentLanguage } = useDataContext()

  const [codeOne, setCodeOne] = useState(
    configOne.languages[getLanguageString(currentLanguage)].defaultCode?.[0]
  )
  const [codeTwo, setCodeTwo] = useState(
    configTwo.languages[getLanguageString(currentLanguage)].defaultCode?.[1]
  )
  const [languageOne, setLanguageOne] = useState(
    getLanguageString(currentLanguage)
  )
  const [languageTwo, setLanguageTwo] = useState(
    getLanguageString(currentLanguage)
  )
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
                  height={`140px`}
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
                  height={`220px`}
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
