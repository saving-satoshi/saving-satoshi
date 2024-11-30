'use client'

import { useTranslations } from 'hooks'
import { LessonInfo, Text } from 'ui'
import TransactionChallenge from 'ui/lesson/TransactionsChallenge'
import { useEffect, useState } from 'react'
import { SuccessNumbers } from 'ui/common/StatusBar'

export const metadata = {
  title: 'chapter_ten.making_a_payment_five.title',
  navigation_title: 'chapter_ten.making_a_payment_five.nav_title',
  key: 'CH10MAP5',
}

export default function MakingAPayment5({ lang }) {
  const t = useTranslations(lang)
  const [hydrated, setHydrated] = useState(false)
  const [success, setSuccess] = useState<SuccessNumbers>(0)
  useEffect(() => {
    setHydrated(true)
  }, [])

  return (
    hydrated && (
      <TransactionChallenge
        success={success}
        setSuccess={setSuccess}
        initialStack={{
          output_0: {
            0: ['SIG(LASZLO)', '1'],
            1: ['0', 'SIG(REVOCATION_LASZLO_1)', 'SIG(YOU)', '0'],
          },
          output_1: { 0: ['SIG(YOU)'] },
        }}
        nSequenceTime={700}
        answerScript={{
          output_0: [
            'OP_IF',
            'OP_PUSH',
            'PUBKEY(REVOCATION_LASZLO_1)',
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
        currentTransactionTab="commitment_laszlo"
      >
        <LessonInfo>
          <Text className="text-lg font-bold md:text-xl">
            {t('chapter_ten.making_a_payment_five.heading_one')}
          </Text>
          <Text className="mt-4 text-lg md:text-xl">
            {t('chapter_ten.making_a_payment_five.paragraph_one')}
          </Text>
          <Text className="mt-4 text-lg md:text-xl">
            {t('chapter_ten.making_a_payment_five.paragraph_two')}
          </Text>

          <hr className="my-4 h-[1px] w-full opacity-25" />
          <Text className="text-lg font-bold md:text-xl">
            {t('chapter_ten.opening_a_channel_two.heading_two')}
          </Text>
          <ul className="ml-4 mt-4 list-disc  font-nunito text-xl">
            <li>{t('chapter_ten.making_a_payment_five.list_one')}</li>
            <li>{t('chapter_ten.making_a_payment_five.list_two')}</li>
          </ul>

          <Text className="mt-4 text-lg font-bold md:text-xl">
            {t('chapter_ten.making_a_payment_five.heading_three')}
          </Text>

          <Text className="mt-4 text-lg md:text-xl">
            {t('chapter_ten.making_a_payment_five.paragraph_three')}
          </Text>

          <ul className="ml-4 mt-4 list-decimal font-nunito text-xl">
            <li>{t('chapter_ten.making_a_payment_five.hint_one')}</li>
            <li>{t('chapter_ten.making_a_payment_five.hint_two')}</li>
          </ul>
          <Text className="mt-4 text-lg md:text-xl">
            {t('chapter_ten.making_a_payment_five.paragraph_four')}
          </Text>
        </LessonInfo>
      </TransactionChallenge>
    )
  )
}
