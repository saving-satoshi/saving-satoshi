'use client'

import { useTranslations } from 'hooks'
import { LessonInfo, Text } from 'ui'
import TransactionChallenge from 'ui/lesson/TransactionsChallenge'

export const metadata = {
  title: 'chapter_ten.opening_a_channel_one.title',
  navigation_title: 'chapter_ten.opening_a_channel_one.nav_title',
  theme: 'bg-[#401d4e]',
  key: 'CH10OAC1',
}

export default function OpeningAChannel1({ lang }) {
  const t = useTranslations(lang)

  return (
    <TransactionChallenge
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
