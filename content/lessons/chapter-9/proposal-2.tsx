'use client'

import { useTranslations } from 'hooks'
import { LessonInfo, Text, Title, OpCodeChallenge } from 'ui'
import { useEffect, useState } from 'react'
import { SuccessNumbers } from 'ui/common/StatusBar'

export const metadata = {
  title: 'chapter_nine.opcodes_five.title',
  navigation_title: 'chapter_nine.opcodes_five.nav_title',
  key: 'CH9PRP2',
}

export default function OpCodes5({ lang }) {
  const t = useTranslations(lang)
  const [hydrated, setHydrated] = useState(false)
  const [success, setSuccess] = useState<boolean | SuccessNumbers>(0)
  useEffect(() => {
    setHydrated(true)
  }, [])
  return (
    hydrated && (
      <OpCodeChallenge
        answerScript={[
          'OP_IF',
          'OP_PUSH',
          'PUBKEY(VANDERPOOLE)',
          'OP_ELSE',
          'OP_PUSH',
          '6930300',
          'OP_CHECKLOCKTIMEVERIFY',
          'OP_DROP',
          'OP_PUSH',
          'PUBKEY(ME)',
          'OP_ENDIF',
          'OP_CHECKSIG',
        ]}
        advanceChallenge
        showRunButtons
        success={success}
        setSuccess={setSuccess}
      >
        <LessonInfo>
          <Title>{t('chapter_nine.proposal_one.heading')}</Title>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_nine.proposal_one.paragraph_one')}
          </Text>
          <Text className="mt-4 font-nunito text-xl font-bold text-white">
            {t('chapter_nine.proposal_one.paragraph_two')}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_nine.opcodes_five.paragraph_two')}
          </Text>
        </LessonInfo>
      </OpCodeChallenge>
    )
  )
}
