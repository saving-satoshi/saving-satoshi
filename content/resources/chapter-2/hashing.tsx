'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'

import { Text, ResourcePage, ToggleSwitch, CodeExample } from 'ui'

export default function HashingResources({ lang }) {
  const t = useTranslations(lang)

  const [challengeOneIsToggled, setChallengeOneIsToggled] = useState(false)
  const [challengeTwoIsToggled, setChallengeTwoIsToggled] = useState(false)
  const [challengeThreeIsToggled, setChallengeThreeIsToggled] = useState(false)

  const challengeOneToggleSwitch = () => {
    setChallengeOneIsToggled(!challengeOneIsToggled)
  }

  const challengeTwoToggleSwitch = () => {
    setChallengeTwoIsToggled(!challengeTwoIsToggled)
  }

  const challengeThreeToggleSwitch = () => {
    setChallengeThreeIsToggled(!challengeThreeIsToggled)
  }

  return (
    <ResourcePage
      lang={lang}
      readingResources={
        <>
          <Text className="mt-[25px] text-xl font-bold">
            {t('chapter_two.resources.hashing.hash_functions_heading')}
          </Text>
          <Text>
            {t('chapter_two.resources.hashing.hash_functions_paragraph')}
          </Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t('chapter_two.resources.hashing.collision_resistance_heading')}
          </Text>
          <Text>
            {t('chapter_two.resources.hashing.collision_resistance_paragraph')}
          </Text>
        </>
      }
      tipsResources={
        <ul className="list-inside list-disc font-nunito text-white">
          <li>{t('chapter_two.resources.hashing.tip_one')}</li>
          <li>{t('chapter_two.resources.hashing.tip_two')}</li>
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
              <CodeExample copy language="bash" code="00000000" />
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
              <CodeExample copy language="bash" code="popcorn" />
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
            <div className="text-white">
              <CodeExample copy language="bash" code="trigonometry" />
            </div>
          )}
        </>
      }
    />
  )
}
