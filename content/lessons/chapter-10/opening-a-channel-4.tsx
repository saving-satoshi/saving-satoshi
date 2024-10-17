'use client'

import { useTranslations } from 'hooks'
import { LessonInfo, Text } from 'ui'
import TransactionChallenge from 'ui/lesson/TransactionsChallenge'

export const metadata = {
  title: 'chapter_ten.opening_a_channel_four.title',
  navigation_title: 'chapter_ten.opening_a_channel_four.nav_title',
  theme: 'bg-[#401d4e]',
  key: 'CH10OAC4',
}

export default function OpeningAChannel4({ lang }) {
  const t = useTranslations(lang)

  return (
    <TransactionChallenge
      initialStack={{
        output_0: { 0: ['0', 'SIG(LASZLO)', 'SIG(YOU)'] },
        output_1: { 0: [] },
      }}
      answerScript={{
        output_0: [
          'OP_PUSH',
          'PUBKEY(LASZLO)',
          'PUBKEY(YOU)',
          'OP_CHECKMULTISIG',
        ],
        output_1: [],
      }}
      progressKey={metadata.key}
      currentTransactionTab="multi-sig"
      laszloWillNotSign
    >
      <LessonInfo>
        <Text className="text-lg font-bold md:text-xl">
          {t('chapter_ten.opening_a_channel_four.heading_one')}
        </Text>
        <Text className="mt-4 text-lg md:text-xl">
          {t('chapter_ten.opening_a_channel_four.paragraph_one')}
        </Text>
        <ul className="ml-4 list-disc  font-nunito text-lg">
          <li>{t('chapter_ten.opening_a_channel_four.multisig_one')}</li>
          <li>{t('chapter_ten.opening_a_channel_four.multisig_two')}</li>
        </ul>
        <Text className="mt-4 text-lg font-bold md:text-xl">
          {t('chapter_ten.opening_a_channel_four.heading_two')}
        </Text>
        <ul className="ml-4 list-disc  font-nunito text-lg">
          <li>
            {t('chapter_ten.opening_a_channel_four.hint_one_a')}
            {t('chapter_ten.opening_a_channel_four.hint_one_b')}
          </li>
        </ul>
      </LessonInfo>
    </TransactionChallenge>
  )
}
