'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'

import { Text, ResourcePage, ToggleSwitch, CodeExample } from 'ui'

export default function TransactingTwoResources({ lang }) {
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
          <Text className="mt-[25px] text-xl font-bold">
            {t('chapter_one.resources.transacting_two.transactions_heading')}
          </Text>
          <Text>
            {t('chapter_one.resources.transacting_two.transactions_paragraph')}
          </Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t('chapter_one.resources.transacting_two.bitcoin_script_heading')}
          </Text>
          <Text>
            {t(
              'chapter_one.resources.transacting_two.bitcoin_script_paragraph'
            )}
          </Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t('chapter_one.resources.transacting_two.asm_heading')}
          </Text>
          <Text>
            {t('chapter_one.resources.transacting_two.asm_paragraph')}
          </Text>
        </>
      }
      tipsResources={
        <ul className="list-inside list-disc font-nunito text-white">
          <li>{t('chapter_one.resources.transacting_two.tip')}</li>
        </ul>
      }
      codeResources={
        <>
          <Text>{t('help_page.solution')}</Text>
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
                code="44697374726963742032312c20426974636f696e2046726565646f6d205a6f6e65"
              />
            </div>
          )}
        </>
      }
    />
  )
}
