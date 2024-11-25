'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'
import { LessonInfo, Text } from 'ui'
import { SuccessNumbers } from 'ui/common/StatusBar'
import TransactionChallenge from 'ui/lesson/TransactionsChallenge'

export const metadata = {
  title: 'chapter_ten.opening_a_channel_one.title',
  navigation_title: 'chapter_ten.opening_a_channel_one.nav_title',
  key: 'CH10OAC1',
}

export default function OpeningAChannel1({ lang }) {
  const t = useTranslations(lang)
  const [success, setSuccess] = useState<SuccessNumbers>(0)

  return (
    <TransactionChallenge
      success={success}
      setSuccess={setSuccess}
      initialStack={{
        output_0: { 0: ['SIG(YOU)'] },
        output_1: { 0: [] },
      }}
      answerScript={{
        output_0: ['OP_PUSH'],
        output_1: [],
      }}
      progressKey={metadata.key}
      currentTransactionTab="deposit"
      laszloWillNotSign
      prefilled
      noSignature
      alwaysShowButton
    >
      <LessonInfo>
        <Text className="text-lg font-bold md:text-xl">
          {t('chapter_ten.opening_a_channel_one.heading_one')}
        </Text>

        <Text className="mt-4 text-lg md:text-xl">
          {t('chapter_ten.opening_a_channel_one.paragraph_one')}
        </Text>
      </LessonInfo>
    </TransactionChallenge>
  )
}
