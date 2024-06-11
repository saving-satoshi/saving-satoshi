'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'

import { Text, ResourcePage, ToggleSwitch, CodeExample } from 'ui'

export default function HashingResourcesFour({ lang }) {
  const t = useTranslations(lang)

  const [challengeIsToggled, setChallengeIsToggled] = useState(false)

  const challengeToggleSwitch = () => {
    setChallengeIsToggled(!challengeIsToggled)
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
              checked={challengeIsToggled}
              onChange={challengeToggleSwitch}
            />
            <Text>{t('help_page.spoilers_confirm')}</Text>
          </div>
          {challengeIsToggled && (
            <div className="text-white">
              <CodeExample copy language="bash" code="popcorn" />
            </div>
          )}
        </>
      }
    />
  )
}
