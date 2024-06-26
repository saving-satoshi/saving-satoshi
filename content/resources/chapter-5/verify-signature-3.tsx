'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'

import { Text, ResourcePage, ToggleSwitch, CodeExample } from 'ui'
import { getLanguageString } from 'lib/SavedCode'
import { useAtom } from 'jotai'
import { currentLanguageAtom } from 'state/state'

export default function VerifySignatureResourcesThree({ lang }) {
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
            {t(
              'chapter_five.resources.verify_signature.signature_verification_heading'
            )}
          </Text>
          <Text>
            {t(
              'chapter_five.resources.verify_signature.signature_verification_paragraph_one'
            )}
          </Text>
        </>
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
              <Text>r Value</Text>
              <CodeExample
                copy
                language="bash"
                code="4e45e16932b8af514961a1d3a1a25fdf3f4f7732e9d624c6c61548ab5fb8cd41"
              />
              <Text className="mt-2">s Value</Text>
              <CodeExample
                copy
                language="bash"
                code="181522ec8eca07de4860a4acdd12909d831cc56cbbac4622082221a8768d1d09"
              />
            </div>
          )}
        </>
      }
    />
  )
}
