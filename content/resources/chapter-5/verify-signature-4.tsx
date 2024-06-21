'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'

import { Text, ResourcePage, ToggleSwitch, CodeExample } from 'ui'
import { useAtom } from 'jotai'
import { currentLanguageAtom } from 'state/state'

export default function VerifySignatureResourcesFour({ lang }) {
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
              'chapter_five.resources.verify_signature_four.eliptic_curve_heading'
            )}
          </Text>
          <Text>
            {t(
              'chapter_five.resources.verify_signature_four.eliptic_curve_paragraph_one'
            )}
          </Text>
          <Text className="mt-[25px] text-xl font-bold">
            {t(
              'chapter_five.resources.verify_signature_four.public_private_key_heading'
            )}
          </Text>
          <Text>
            {t(
              'chapter_five.resources.verify_signature_four.public_private_key_paragraph_one'
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
              <Text>x Coordinate</Text>
              <CodeExample
                copy
                language="bash"
                code="11db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5c"
              />
              <Text className="mt-2">y Coordinate</Text>
              <CodeExample
                copy
                language="bash"
                code="b2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3"
              />
            </div>
          )}
        </>
      }
    />
  )
}
