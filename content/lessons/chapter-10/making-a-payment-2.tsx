'use client'

import { useTranslations } from 'hooks'
import { LessonInfo, Text } from 'ui'
import TransactionChallenge from 'ui/lesson/TransactionsChallenge'

export const metadata = {
  title: 'chapter_ten.making_a_payment_two.title',
  navigation_title: 'chapter_ten.making_a_payment_two.nav_title',
  theme: 'bg-[#401d4e]',
  key: 'CH10MAP2',
}

export default function MakingAPayment2({ lang }) {
  const t = useTranslations(lang)

  return (
    <TransactionChallenge
      initialStack={{
        output_0: {
          0: ['0', 'SIG(REVOCATION_YOU_2)', 'SIG(LASZLO)', '0'],
          1: ['SIG(YOU)', '1'],
        },
        output_1: { 0: ['SIG(Laszlo)'] },
      }}
      nSequenceTime={700}
      answerScript={{
        output_0: [
          'OP_IF',
          'OP_PUSH',
          '700',
          'OP_CHECKSEQUENCEVERIFY',
          'OP_DROP',
          'PUBKEY(YOU)',
          'OP_CHECKSIG',
          'OP_ELSE',
          'OP_ENDIF',
          'OP_CHECKMULTISIG',
        ],
        output_1: ['OP_PUSH', 'PUBKEY(LASZLO)', 'OP_CHECKSIG'],
      }}
      progressKey={metadata.key}
      currentTransactionTab="commitment(You)"
    >
      <LessonInfo>
        <Text className="text-lg font-bold md:text-xl">
          {t('chapter_ten.making_a_payment_two.heading_one')}
        </Text>
        <Text className="mt-4 text-lg md:text-xl">
          {t('chapter_ten.making_a_payment_two.paragraph_one')}
        </Text>
        <Text className="mt-4 text-lg md:text-xl">
          {t('chapter_ten.making_a_payment_two.paragraph_two')}
        </Text>
        <Text className="mt-4 text-lg md:text-xl">
          {t('chapter_ten.making_a_payment_two.paragraph_three')}
        </Text>
        <ul className="ml-4 mt-4 list-disc  font-nunito text-xl">
          <li>{t('chapter_ten.making_a_payment_two.list_one')}</li>
          <li>{t('chapter_ten.making_a_payment_two.list_two')}</li>
          <li>{t('chapter_ten.making_a_payment_two.list_three')}</li>
        </ul>

        <Text className="mt-4 text-lg font-bold md:text-xl">
          {t('chapter_ten.making_a_payment_two.heading_two')}
        </Text>
        <Text className="mt-4 text-lg md:text-xl">
          {t('chapter_ten.making_a_payment_two.paragraph_four')}
        </Text>
        <ul className="ml-4 mt-4 list-disc  font-nunito text-xl">
          <li>{t('chapter_ten.making_a_payment_two.hint_one')}</li>
          <li>{t('chapter_ten.making_a_payment_two.hint_two')}</li>
        </ul>
        <Text className="mt-4 text-lg md:text-xl">
          {t('chapter_ten.making_a_payment_two.paragraph_five')}
        </Text>
      </LessonInfo>
    </TransactionChallenge>
  )
}
