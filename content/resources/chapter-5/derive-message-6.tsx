'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'

import { Text, ResourcePage, ToggleSwitch, CodeExample } from 'ui'
import { useAtom } from 'jotai'
import { currentLanguageAtom } from 'state/state'

export default function DeriveMessageResourcesSix({ lang }) {
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
              'chapter_five.resources.derive_message_six.transaction_parts_heading'
            )}
          </Text>
          <ul className="ml-4 list-disc">
            <li>
              {t(
                'chapter_five.resources.derive_message_six.transaction_parts_one'
              )}
            </li>
            <li>
              {t(
                'chapter_five.resources.derive_message_six.transaction_parts_two'
              )}
            </li>
            <li>
              {t(
                'chapter_five.resources.derive_message_six.transaction_parts_three'
              )}
            </li>
            <li>
              {t(
                'chapter_five.resources.derive_message_six.transaction_parts_four'
              )}
            </li>
            <li>
              {t(
                'chapter_five.resources.derive_message_six.transaction_parts_five'
              )}
            </li>
            <li>
              {t(
                'chapter_five.resources.derive_message_six.transaction_parts_six'
              )}
            </li>
            <li>
              {t(
                'chapter_five.resources.derive_message_six.transaction_parts_seven'
              )}
            </li>
            <li>
              {t(
                'chapter_five.resources.derive_message_six.transaction_parts_eight'
              )}
            </li>
            <li>
              {t(
                'chapter_five.resources.derive_message_six.transaction_parts_nine'
              )}
            </li>
            <li>
              {t(
                'chapter_five.resources.derive_message_six.transaction_parts_ten'
              )}
            </li>
            <li>
              {t(
                'chapter_five.resources.derive_message_six.transaction_parts_eleven'
              )}
            </li>
            <li>
              {t(
                'chapter_five.resources.derive_message_six.transaction_parts_twelve'
              )}
            </li>
          </ul>
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
            <CodeExample
              copy
              language="bash"
              className="text-wrap text-white"
              code="0100000001c997a5e56e104102fa209c6a852dd90660a20b2d9c352423edce25857fcd3704000000004847304402204e45e16932b8af514961a1d3a1a25fdf3f4f7732e9d624c6c61548ab5fb8cd410220181522ec8eca07de4860a4acdd12909d831cc56cbbac4622082221a8768d1d0901ffffffff0200ca9a3b00000000434104ae1a62fe09c5f51b13905f07f06b99a2f7159b2225f374cd378d71302fa28414e7aab37397f554a7df5f142c21c1b7303b8a0626f1baded5c72a704f7e6cd84cac00286bee0000000043410411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3ac00000000"
            />
          )}
        </>
      }
    />
  )
}
