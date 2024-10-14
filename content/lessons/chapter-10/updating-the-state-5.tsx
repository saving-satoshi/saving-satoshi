'use client'

import { useTranslations } from 'hooks'
import { LessonInfo, Text } from 'ui'
import TransactionChallenge from 'ui/lesson/TransactionsChallenge'

export const metadata = {
  title: 'chapter_ten.updating_the_state_five.title',
  navigation_title: 'chapter_ten.updating_the_state_five.nav_title',
  theme: 'bg-[#401d4e]',
  key: 'CH10UTS5',
}

export default function UpdatingTheState5({ lang }) {
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
      currentTransactionTab="refund_2"
      laszloWillNotSign
    >
      <LessonInfo>
        <Text className="text-lg font-bold md:text-xl">
          {t('chapter_ten.updating_the_state_five.heading_one')}
        </Text>
        <ul className="ml-4 mt-4 list-disc  font-nunito text-xl">
          <li>{t('chapter_ten.updating_the_state_five.time_lock_list_one')}</li>
          <li>{t('chapter_ten.updating_the_state_five.time_lock_list_two')}</li>
        </ul>
        <Text className="mt-4 text-lg font-bold md:text-xl">
          {t('chapter_ten.updating_the_state_five.heading_two')}
        </Text>
        <ul className="ml-4 mt-4 list-disc  font-nunito text-xl">
          <li>{t('chapter_ten.updating_the_state_five.hint_one')}</li>
          <li>{t('chapter_ten.updating_the_state_five.hint_two')}</li>
        </ul>
      </LessonInfo>
    </TransactionChallenge>
  )
}
