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
          <Text className="text-xl font-bold">
            {t('chapter_one.resources.genesis.scriptsig_heading')}
          </Text>
          <Text>{t('chapter_one.resources.genesis.scriptsig_paragraph')}</Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t('chapter_one.resources.genesis.blocks_heading')}
          </Text>
          <Text>{t('chapter_one.resources.genesis.blocks_paragraph')}</Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t('chapter_one.resources.genesis.block_explorer_heading')}
          </Text>
          <Text>
            {t('chapter_one.resources.genesis.block_explorer_paragraph')}
          </Text>
        </>
      }
      tipsResources={
        <ul className="list-inside list-disc font-nunito text-white">
          <li>{t('chapter_one.resources.genesis.tip_one')}</li>
          <li>{t('chapter_one.resources.genesis.tip_two')}</li>
        </ul>
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
