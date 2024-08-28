'use client'

import { useTranslations } from 'hooks'
import { LessonInfo, Text, Title, OpCodeChallenge } from 'ui'
import { useEffect, useState } from 'react'
import { SuccessNumbers } from 'ui/common/StatusBar'

export const metadata = {
  title: 'chapter_nine.proposal_two.title',
  navigation_title: 'chapter_nine.proposal_two.nav_title',
  key: 'CH9PRP2',
}

export default function Proposal2({ lang }) {
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
          'OP_2',
          'OP_PUSH',
          'PUBKEY(VANDERPOOLE)',
          'OP_PUSH',
          'PUBKEY(ME)',
          'OP_2',
          'OP_CHECKMULTISIG',
        ]}
        success={success}
        setSuccess={setSuccess}
      >
        <LessonInfo>
          <Title>{t('chapter_nine.proposal_two.heading')}</Title>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_nine.proposal_two.paragraph_one')}
          </Text>
          <Text className="mt-4 font-nunito text-xl font-bold text-white">
            {t('chapter_nine.proposal_two.paragraph_two')}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_nine.proposal_two.paragraph_three')}
          </Text>
        </LessonInfo>
      </OpCodeChallenge>
    )
  )
}
