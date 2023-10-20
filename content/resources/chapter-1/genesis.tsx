'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'

import { Text, ResourcePage, ToggleSwitch, CodeExample } from 'ui'

export default function GenesisResources({ lang }) {
  const t = useTranslations(lang)

  const [challengeOneIsToggled, setChallengeOneIsToggled] = useState(false)
  const [challengeTwoIsToggled, setChallengeTwoIsToggled] = useState(false)

  const challengeOneToggleSwitch = () => {
    setChallengeOneIsToggled(!challengeOneIsToggled)
  }

  const challengeTwoToggleSwitch = () => {
    setChallengeTwoIsToggled(!challengeTwoIsToggled)
  }

  return (
    <ResourcePage
      lang={lang}
      readingResources={
        <>
          <Text className="mt-[25px] text-xl font-bold">ScriptSig</Text>
          <Text>
            The "scriptSig" is a script that you provide as part of the input in
            your new transaction. It is essentially your unlocking script, which
            proves that you have the authority to spend the bitcoins from the
            referenced UTXO. The "scriptSig" is the data that goes into the
            input's scriptSig field.
          </Text>
          <Text className="mt-[25px] text-xl font-bold">
            Bitcoin script and OP_Codes
          </Text>
          <Text>{t('chapter_four.resources.address.wpkh_paragraph')}</Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t('chapter_four.resources.address.network_heading')}
          </Text>
          <Text>{t('chapter_four.resources.address.network_paragraph')}</Text>
        </>
      }
      tipsResources={'hello world'}
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
            <div className="text-white">
              <CodeExample
                copy
                language="bash"
                code="04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73"
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
            <div className="text-white">
              <CodeExample
                copy
                language="bash"
                code="echo $scriptSigHex | xxd -r -p"
              />
            </div>
          )}
        </>
      }
    />
  )
}
