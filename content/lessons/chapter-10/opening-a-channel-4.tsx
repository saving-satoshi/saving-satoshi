'use client'

import { useTranslations } from 'hooks'
import { LessonInfo, Text } from 'ui'
import TransactionChallenge from 'ui/lesson/TransactionsChallenge'
import { useEffect, useState } from 'react'

export const metadata = {
  title: 'chapter_ten.opening_a_channel_four.title',
  navigation_title: 'chapter_ten.opening_a_channel_four.nav_title',
  key: 'CH10OAC4',
}

export default function OpeningAChannel4({ lang }) {
  const t = useTranslations(lang)
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => {
    setHydrated(true)
  }, [])

  return (
    hydrated && (
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
        currentTransactionTab="multisig"
        laszloWillNotSign
        laszloHidden
      >
        <LessonInfo>
          <Text className="text-lg font-bold md:text-xl">
            {t('chapter_ten.opening_a_channel_four.heading_one')}
          </Text>
          <Text className="mt-4 text-lg md:text-xl">
            {t('chapter_ten.opening_a_channel_four.paragraph_one')}
          </Text>
          <ul className="ml-4 list-disc  font-nunito text-lg">
            <li key={1}>
              {t('chapter_ten.opening_a_channel_four.multisig_one')}
            </li>
            <li key={2}>
              {t('chapter_ten.opening_a_channel_four.multisig_two')}
            </li>
          </ul>
          <Text className="mt-4 text-lg font-bold md:text-xl">
            {t('chapter_ten.opening_a_channel_four.heading_two')}
          </Text>
          <ul className="ml-4 list-disc  font-nunito text-lg">
            <li key={1}>{t('chapter_ten.opening_a_channel_four.hint_one')}</li>
          </ul>
        </LessonInfo>
      </TransactionChallenge>
    )
  )
}
