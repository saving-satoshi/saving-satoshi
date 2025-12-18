'use client'

import { useTranslations } from 'hooks'
import { LessonInfo, Text, Title, OpCodeChallenge } from 'ui'
import { useEffect, useState } from 'react'
import { SuccessNumbers } from 'ui/common/StatusBar'

export const metadata = {
  title: 'chapter_nine.proposal_three.title',
  navigation_title: 'chapter_nine.proposal_three.nav_title',
  key: 'CH9PRP3',
}

export default function Proposal3({ lang }) {
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
          'PUBKEY(ME)',
          'OP_ELSE',
          'OP_PUSH',
          '6930300',
          'OP_CHECKLOCKTIMEVERIFY',
          'OP_DROP',
          'OP_PUSH',
          'PUBKEY(VANDERPOOLE)',
          'OP_ENDIF',
          'OP_CHECKSIG',
        ]}
        advancedChallenge
        success={success}
        setSuccess={setSuccess}
        initialHeight={6930299}
        initialStackScript={['SIG(VANDERPOOLE)', '0']}
        nextStepMessage={t('chapter_nine.proposal_three.next_step_message')}
      >
        <LessonInfo>
          <Title>{t('chapter_nine.proposal_three.heading')}</Title>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_nine.proposal_three.paragraph_one')}
          </Text>
          <Text className="mt-4 font-nunito text-xl font-bold text-white">
            {t('chapter_nine.proposal_three.paragraph_two')}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_nine.proposal_three.paragraph_three')}
          </Text>
        </LessonInfo>
      </OpCodeChallenge>
    )
  )
}
