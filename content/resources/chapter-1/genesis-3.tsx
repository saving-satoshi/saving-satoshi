'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'

import { Text, ResourcePage, ToggleSwitch, CodeExample } from 'ui'

export default function GenesisThreeResources({ lang }) {
  const t = useTranslations(lang)

  const [challengeOneIsToggled, setChallengeOneIsToggled] = useState(false)

  const challengeOneToggleSwitch = () => {
    setChallengeOneIsToggled(!challengeOneIsToggled)
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
                className="whitespace-break-spaces"
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
