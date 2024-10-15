'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'
import { Text, ResourcePage, ToggleSwitch, CodeExample } from 'ui'

export default function OpcodesNine({ lang }) {
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
            {t('chapter_nine.resources.opcodes_nine.timelock_heading')}
          </Text>
          <p className="inline">
            <span className="font-nunito text-white">
              {t('chapter_nine.resources.opcodes_nine.timelock_paragraph')}
            </span>{' '}
            <span className="font-nunito text-white">
              {t('chapter_nine.resources.opcodes_nine.timelock_link')}
            </span>
          </p>
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
            <div className="text-white ">
              <CodeExample
                className="max-w-3xl text-wrap"
                text
                language="bash"
                code={t('chapter_nine.resources.opcodes_nine.spoiler')}
              />
            </div>
          )}
        </>
      }
    />
  )
}
