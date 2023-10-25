'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'

import { Text, ResourcePage, ToggleSwitch, CodeExample } from 'ui'

export default function TransactingResources({ lang }) {
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
          <Text className="mt-[25px] text-xl font-bold">
            {t('chapter_one.resources.transacting.transactions_heading')}
          </Text>
          <Text>
            {t('chapter_one.resources.transacting.transactions_paragraph')}
          </Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t('chapter_one.resources.transacting.bitcoin_script_heading')}
          </Text>
          <Text>
            {t('chapter_one.resources.transacting.bitcoin_script_paragraph')}
          </Text>
        </>
      }
      tipsResources={
        <ul className="list-inside list-disc font-nunito text-white">
          <li>{t('chapter_one.resources.transacting.tip_one')}</li>
          <li>{t('chapter_one.resources.transacting.tip_two')}</li>
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
                code="44697374726963742032312c20426974636f696e2046726565646f6d205a6f6e65"
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
                code="echo 44697374726963742032312c20426974636f696e2046726565646f6d205a6f6e65 | xxd -r -p"
              />
            </div>
          )}
        </>
      }
    />
  )
}
