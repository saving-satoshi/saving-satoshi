'use client'

import { useTranslations } from 'hooks'
import { LessonInfo, Text } from 'ui'
import TransactionChallenge from 'ui/lesson/TransactionsChallenge'
import { useEffect, useState } from 'react'

export const metadata = {
  title: 'chapter_ten.making_a_payment_six.title',
  navigation_title: 'chapter_ten.making_a_payment_six.nav_title',
  key: 'CH10MAP6',
}
export default function MakingAPayment6({ lang }) {
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
            0: ['SIG(YOU)', '1'],
            1: ['0', 'SIG(REVOCATION_YOU_3)', 'SIG(LASZLO)', '0'],
          },
          output_1: { 0: ['SIG(YOU)'] },
        }}
        nSequenceTime={700}
        answerScript={{
          output_0: [
            'OP_IF',
            'OP_PUSH',
            'PUBKEY(REVOCATION_YOU_3)',
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
        prefilled
        noSignature
        alwaysShowButton
      >
        <LessonInfo>
          <Text className="text-lg font-bold md:text-xl">
            {t('chapter_ten.making_a_payment_six.heading_one')}
          </Text>

          <Text className="mt-4 text-lg md:text-xl">
            {t('chapter_ten.making_a_payment_six.paragraph_one')}
          </Text>

          <Text className="mt-4 text-lg md:text-xl">
            {t('chapter_ten.making_a_payment_six.paragraph_two')}
          </Text>

          <Text className="mt-4 text-lg md:text-xl">
            {t('chapter_ten.making_a_payment_six.paragraph_three')}
          </Text>

          <Text className="mt-4 text-lg font-semibold md:text-xl">
            {t('chapter_ten.making_a_payment_six.paragraph_four')}
          </Text>

          <ul className="ml-4 list-disc  font-nunito text-xl">
            <li>
              {t(
                'chapter_ten.making_a_payment_six.commitment_one_you.list_one'
              )}
            </li>
            <li>
              {t(
                'chapter_ten.making_a_payment_six.commitment_one_you.list_two'
              )}
            </li>
          </ul>

          <Text className="mt-4 text-lg font-semibold md:text-xl">
            {t('chapter_ten.making_a_payment_six.paragraph_five')}
          </Text>

          <ul className="ml-4 list-disc  font-nunito text-xl">
            <li>
              {t(
                'chapter_ten.making_a_payment_six.commitment_two_you.list_one'
              )}
            </li>
            <li>
              {t(
                'chapter_ten.making_a_payment_six.commitment_two_you.list_two'
              )}
            </li>
          </ul>

          <Text className="mt-4 text-lg md:text-xl">
            {t('chapter_ten.making_a_payment_six.paragraph_six')}
          </Text>

          <Text className="mt-4 text-lg font-semibold md:text-xl">
            {t('chapter_ten.making_a_payment_six.paragraph_seven')}
          </Text>

          <ul className="ml-4 list-disc  font-nunito text-xl">
            <li>
              {t(
                'chapter_ten.making_a_payment_six.commitment_two_laszlo.list_one'
              )}
            </li>
            <li>
              {t(
                'chapter_ten.making_a_payment_six.commitment_two_laszlo.list_two'
              )}
            </li>
            <li>
              {t(
                'chapter_ten.making_a_payment_six.commitment_two_laszlo.list_three'
              )}
            </li>
          </ul>

          <Text className="mt-4 text-lg md:text-xl">
            {t('chapter_ten.making_a_payment_six.paragraph_eight')}
          </Text>
        </LessonInfo>
      </TransactionChallenge>
    )
  )
}
