'use client'

import { useTranslations } from 'hooks'
import { LessonInfo, Text } from 'ui'
import TransactionChallenge from 'ui/lesson/TransactionsChallenge'
import { useEffect, useState } from 'react'

export const metadata = {
  title: 'chapter_ten.making_a_payment_eight.title',
  navigation_title: 'chapter_ten.making_a_payment_eight.nav_title',
  key: 'CH10MAP8',
}

export default function MakingAPayment8({ lang }) {
  const t = useTranslations(lang)
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => {
    setHydrated(true)
  }, [])

  return (
    hydrated && (
      <TransactionChallenge
        initialStack={{
          output_0: {
            0: ['SIG(LASZLO)', '1'],
            1: ['0', 'SIG(REVOCATION_LASZLO_2)', 'SIG(YOU)', '0'],
          },
          output_1: { 0: ['SIG(YOU)'] },
        }}
        nSequenceTime={700}
        answerScript={{
          output_0: [
            'OP_IF',
            'OP_PUSH',
            'PUBKEY(REVOCATION_LASZLO_2)',
            'OP_CHECKSEQUENCEVERIFY',
            'OP_DROP',
            'PUBKEY(YOU)',
            'PUBKEY(LASZLO)',
            'OP_CHECKSIG',
            'OP_ELSE',
            'OP_ENDIF',
            'OP_CHECKMULTISIG',
          ],
          output_1: ['OP_PUSH', 'PUBKEY(YOU)', 'OP_CHECKSIG'],
        }}
        progressKey={metadata.key}
        currentTransactionTab="commitment_laszlo_1"
      >
        <LessonInfo>
          <Text className="text-lg font-bold md:text-xl">
            {t('chapter_ten.making_a_payment_eight.heading_one')}
          </Text>
          <Text className="mt-4 text-lg md:text-xl">
            {t('chapter_ten.making_a_payment_eight.paragraph_one')}
          </Text>
          <Text className="mt-4 text-lg md:text-xl">
            {t('chapter_ten.making_a_payment_eight.paragraph_two')}
          </Text>

          <ul className="ml-4 mt-4 list-disc  font-nunito text-xl">
            <li>{t('chapter_ten.making_a_payment_eight.list_one')}</li>
            <li>{t('chapter_ten.making_a_payment_eight.list_two')}</li>
            <li>{t('chapter_ten.making_a_payment_eight.list_three')}</li>
            <li>{t('chapter_ten.making_a_payment_eight.list_four')}</li>{' '}
            <li>{t('chapter_ten.making_a_payment_eight.list_five')}</li>
          </ul>

          <Text className="mt-4 text-lg md:text-xl">
            {t('chapter_ten.making_a_payment_eight.paragraph_three')}
          </Text>

          <Text className="mt-8 text-lg md:text-xl">
            {t('chapter_ten.making_a_payment_eight.heading_two')}
          </Text>
          <Text className="mt-8 text-lg md:text-xl">
            {t('chapter_ten.making_a_payment_eight.paragraph_four')}
          </Text>

          <ul className="ml-4 mt-4 list-disc  font-nunito text-xl">
            <li>{t('chapter_ten.making_a_payment_eight.hint_one')}</li>
            <li>{t('chapter_ten.making_a_payment_eight.hint_two')}</li>
          </ul>

          <Text className="mt-4 text-lg md:text-xl">
            {t('chapter_ten.making_a_payment_eight.paragraph_five')}
          </Text>
        </LessonInfo>
      </TransactionChallenge>
    )
  )
}
