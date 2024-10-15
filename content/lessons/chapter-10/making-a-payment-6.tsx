'use client'

import { useTranslations } from 'hooks'
import { LessonInfo, Text } from 'ui'
import TransactionChallenge from 'ui/lesson/TransactionsChallenge'

export const metadata = {
  title: 'chapter_nine.intro_two.title',
  navigation_title: 'chapter_nine.intro_two.nav_title',
  image: '/assets/images/chapter-9-intro-2.jpg',
  theme: 'bg-[#401d4e]',
  key: 'CH10MAP6',
}

export default function MakingAPayment6({ lang }) {
  const t = useTranslations(lang)

  return (
    <TransactionChallenge
      initialStack={{
        output_0: ['SIG(YOU)'],
        output_1: [],
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
          {t('chapter_ten.intro_two.heading_one')}
        </Text>
        <Text className="mt-4 text-lg md:text-xl">
          {t('chapter_ten.intro_two.paragraph_one')}
        </Text>
        <Text className="mt-4 text-lg md:text-xl">
          {t('chapter_ten.intro_two.paragraph_two')}
        </Text>
        <Text className="mt-4 text-lg md:text-xl">
          {t('chapter_ten.intro_two.paragraph_three')}
        </Text>
      </LessonInfo>
    </TransactionChallenge>
  )
}
