'use client'

import { useTranslations } from 'hooks'
import { LessonInfo, Text, Title, OpCodeChallenge } from 'ui'
import { useEffect, useState } from 'react'
import { SuccessNumbers } from 'ui/common/StatusBar'

export const metadata = {
  title: 'chapter_nine.proposal_four.title',
  navigation_title: 'chapter_nine.proposal_four.nav_title',
  key: 'CH9PRP4',
}

export default function Proposal4({ lang }) {
  const t = useTranslations(lang)
  const [hydrated, setHydrated] = useState(false)
  const [success, setSuccess] = useState<boolean | SuccessNumbers>(0)
  useEffect(() => {
    setHydrated(true)
  }, [])
  return (
    hydrated && (
      <OpCodeChallenge
        lang={lang}
        answerScript={[
          'OP_IF',
          'OP_PUSH',
          'PUBKEY(VANDERPOOLE)',
          'OP_ELSE',
          'OP_HASH256',
          'OP_PUSH',
          'HASH256(FD3771E8)',
          'OP_EQUALVERIFY',
          'OP_PUSH',
          'PUBKEY(ME)',
          'OP_ENDIF',
          'OP_CHECKSIG',
        ]}
        advancedChallenge
        success={success}
        setSuccess={setSuccess}
        initialStackSuccess="SIG(ME) FD3771E8 0"
        nextStepMessage={t('chapter_nine.proposal_four.next_step_message')}
      >
        <LessonInfo>
          <Title>{t('chapter_nine.proposal_four.heading')}</Title>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_nine.proposal_four.paragraph_one')}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_nine.proposal_four.paragraph_two')}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_nine.proposal_four.paragraph_three')}
          </Text>
          <Text className="mt-4 font-nunito text-xl font-bold text-white">
            {t('chapter_nine.proposal_four.paragraph_four')}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_nine.proposal_four.paragraph_five')}
          </Text>
        </LessonInfo>
      </OpCodeChallenge>
    )
  )
}
