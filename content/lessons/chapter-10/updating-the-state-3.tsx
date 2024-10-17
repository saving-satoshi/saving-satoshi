'use client'

import { useTranslations } from 'hooks'
import { LessonInfo, Text } from 'ui'
import TransactionChallenge from 'ui/lesson/TransactionsChallenge'

export const metadata = {
  title: 'chapter_ten.updating_the_state_three.title',
  navigation_title: 'chapter_ten.updating_the_state_three.nav_title',
  theme: 'bg-[#401d4e]',
  key: 'CH10UTS3',
}

export default function UpdatingTheState3({ lang }) {
  const t = useTranslations(lang)

  return (
    <TransactionChallenge
      initialStack={{
        output_0: {
          0: ['0', 'SIG(REVOCATION_YOU_1)', 'SIG(LASZLO)', '0'],
          1: ['SIG(YOU)', '1'],
        },
        output_1: { 0: [] },
      }}
      answerScript={{
        output_0: [
          'OP_IF',
          'OP_PUSH',
          'OP_CHECKSIG',
          'OP_ELSE',
          'PUBKEY(REVOCATION_YOU_1)',
          'OP_ENDIF',
          'OP_CHECKMULTISIG',
        ],
        output_1: [],
      }}
      progressKey={metadata.key}
      currentTransactionTab="refund_1"
    >
      <LessonInfo>
        <Text className="text-lg font-bold md:text-xl">
          {t('chapter_ten.updating_the_state_three.heading_one')}
        </Text>
        <Text className="mt-4 text-lg md:text-xl">
          {t('chapter_ten.updating_the_state_three.paragraph_one')}
        </Text>
        <ul className="ml-4 mt-4 list-disc  font-nunito text-xl">
          <li>
            {t('chapter_ten.updating_the_state_three.revocation_list_one')}
          </li>
          <li>
            {t('chapter_ten.updating_the_state_three.revocation_list_two')}
          </li>
        </ul>
        <Text className="mt-4 text-lg font-bold md:text-xl">
          {t('chapter_ten.updating_the_state_three.heading_two')}
        </Text>
        <ul className="ml-4  list-disc font-nunito text-xl">
          <li>{t('chapter_ten.updating_the_state_three.hint_one')}</li>
          <li>{t('chapter_ten.updating_the_state_three.hint_two')}</li>
        </ul>
      </LessonInfo>
    </TransactionChallenge>
  )
}
