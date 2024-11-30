'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'
import { Text, ResourcePage, ToggleSwitch, CodeExample } from 'ui'

export default function UpdatingTheStateThree({ lang }) {
  const t = useTranslations(lang)
  const [challengeIsToggled, setChallengeIsToggled] = useState(false)

  const challengeToggleSwitch = () => {
    setChallengeIsToggled(!challengeIsToggled)
  }

  return (
    <ResourcePage
      lang={lang}
      readingResources={<></>}
      tipsResources={<>{t('chapter_ten.resources.miner_fees_basic')}</>}
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
                className="break-word max-w-3xl text-wrap"
                copy
                text
                language="bash"
                code="OP_IF OP_PUSH PUBKEY(YOU) OP_CHECKSIG OP_ELSE OP_2 OP_PUSH PUBKEY(REVOCATION_YOU_1) OP_PUSH PUBKEY(LASZLO) OP_2 OP_CHECKMULTISIG OP_ENDIF"
              />
            </div>
          )}
        </>
      }
    />
  )
}
