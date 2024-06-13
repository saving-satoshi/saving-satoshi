'use client'
import { useState } from 'react'

import { useTranslations } from 'hooks'

import { Text, ResourcePage, ToggleSwitch, CodeExample } from 'ui'

export default function MiningResourcesOne({ lang }) {
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
            {t('chapter_two.resources.mining_one.mining_heading')}
          </Text>
          <Text>{t('chapter_two.resources.mining_one.mining_paragraph')}</Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t('chapter_two.resources.mining_one.difficulty_heading')}
          </Text>
          <Text>
            {t('chapter_two.resources.mining_one.difficulty_paragraph')}
          </Text>
        </>
      }
      codeResources={
        <>
          <Text>{t('help_page.solution')}</Text>
          <div className="flex flex-row items-center gap-2">
            <ToggleSwitch
              checked={challengeIsToggled}
              onChange={challengeToggleSwitch}
            />
            <Text>{t('help_page.spoilers_confirm')}</Text>
          </div>
          {challengeIsToggled && (
            <div className="text-white">
              <CodeExample
                className="text-wrap"
                text
                language="bash"
                code={t('chapter_two.resources.mining_one.spoiler')}
              />
            </div>
          )}
        </>
      }
    />
  )
}
