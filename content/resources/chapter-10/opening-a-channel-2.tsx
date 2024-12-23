'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'
import { Text, ResourcePage, ToggleSwitch, CodeExample } from 'ui'

export default function OpeningAChannelTwo({ lang }) {
  const t = useTranslations(lang)
  const [challengeIsToggled, setChallengeIsToggled] = useState(false)

  const challengeToggleSwitch = () => {
    setChallengeIsToggled(!challengeIsToggled)
  }

  return (
    <ResourcePage
      lang={lang}
      readingResources={<></>}
      tipsResources={
        <ul className="list-inside list-disc font-nunito text-white">
          <li>{t('chapter_ten.resources.sats_distribution')}</li>
          <li>{t('chapter_ten.resources.output_script')}</li>
        </ul>
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
              <Text>{t('chapter_ten.resources.output_zero_sig')}</Text>
              <CodeExample
                className="max-w-3xl text-wrap"
                copy
                text
                language="bash"
                code="OP_PUSH PUBKEY(LASZLO) OP_CHECKSIG"
              />
              <Text className="mt-2">
                {t('chapter_ten.resources.output_one_sig')}
              </Text>
              <CodeExample
                className="max-w-3xl text-wrap"
                copy
                text
                language="bash"
                code="OP_PUSH PUBKEY(YOU) OP_CHECKSIG"
              />
            </div>
          )}
        </>
      }
    />
  )
}
