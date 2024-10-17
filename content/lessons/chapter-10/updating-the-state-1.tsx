'use client'

import { useTranslations } from 'hooks'
import { LessonInfo, Text } from 'ui'
import TransactionChallenge from 'ui/lesson/TransactionsChallenge'

export const metadata = {
  title: 'chapter_ten.updating_the_state_one.title',
  navigation_title: 'chapter_ten.updating_the_state_one.nav_title',
  theme: 'bg-[#401d4e]',
  key: 'CH10UTS1',
}

export default function UpdatingTheState1({ lang }) {
  const t = useTranslations(lang)

  return (
    <TransactionChallenge
      initialStack={{
        output_0: { 0: ['SIG(YOU)'] },
        output_1: { 0: [] },
      }}
      answerScript={{
        output_0: ['OP_PUSH', 'PUBKEY(YOU)', 'OP_CHECKSIG'],
        output_1: [],
      }}
      progressKey={metadata.key}
      currentTransactionTab="refund"
      laszloWillNotSign
    >
      <LessonInfo>
        <Text className="text-lg font-bold md:text-xl">
          {t('chapter_ten.updating_the_state_one.heading_one')}
        </Text>
        <Text className="mt-4 text-lg md:text-xl">
          {t('chapter_ten.updating_the_state_one.paragraph_one')}
        </Text>
        <ul className="ml-4 list-disc  font-nunito text-lg">
          <li>{t('chapter_ten.updating_the_state_one.refund_list_one')}</li>
          <li>{t('chapter_ten.updating_the_state_one.refund_list_two')}</li>
        </ul>
        <Text className="text-lg font-bold md:text-xl">
          {t('chapter_ten.updating_the_state_one.heading_two')}
        </Text>
        <ul className="ml-4 list-disc  font-nunito text-lg">
          <li>{t('chapter_ten.updating_the_state_one.hint_one')}</li>
        </ul>
      </LessonInfo>
    </TransactionChallenge>
  )
}
