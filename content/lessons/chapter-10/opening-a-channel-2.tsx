'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'hooks'
import { LessonInfo, Text } from 'ui'
import TransactionChallenge from 'ui/lesson/TransactionsChallenge'

export const metadata = {
  title: 'chapter_ten.opening_a_channel_two.title',
  navigation_title: 'chapter_ten.opening_a_channel_two.nav_title',
  key: 'CH10OAC2',
}

export default function OpeningAChannel2({ lang }) {
  const t = useTranslations(lang)
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => {
    setHydrated(true)
  }, [])

  return (
    hydrated && (
      <TransactionChallenge
        initialStack={{
          output_0: { 0: ['SIG(LASZLO)'] },
          output_1: { 0: ['SIG(YOU)'] },
        }}
        answerScript={{
          output_0: ['OP_PUSH', 'PUBKEY(LASZLO)', 'OP_CHECKSIG'],
          output_1: ['OP_PUSH', 'PUBKEY(YOU)', 'OP_CHECKSIG'],
        }}
        progressKey={metadata.key}
        currentTransactionTab="payment"
        laszloWillNotSign
        laszloHidden
      >
        <LessonInfo>
          <Text className="text-lg font-bold md:text-xl">
            {t('chapter_ten.opening_a_channel_two.heading_one')}
          </Text>
          <Text className="mt-4 text-lg md:text-xl">
            {t('chapter_ten.opening_a_channel_two.paragraph_one')}
          </Text>
          <Text className="mt-4 text-lg md:text-xl">
            {t('chapter_ten.opening_a_channel_two.paragraph_two')}
          </Text>

          <hr className="my-4 h-[1px] w-full opacity-25" />
          <Text className="text-lg font-bold md:text-xl">
            {t('chapter_ten.opening_a_channel_two.heading_two')}
          </Text>
          <ul className="ml-4 list-disc font-nunito text-lg md:text-xl">
            <li>{t('chapter_ten.opening_a_channel_two.off_chain_list_one')}</li>
            <li>{t('chapter_ten.opening_a_channel_two.off_chain_list_two')}</li>
            <li>
              {t('chapter_ten.opening_a_channel_two.off_chain_list_three')}
            </li>
            <li>
              {t('chapter_ten.opening_a_channel_two.off_chain_list_four')}
            </li>
          </ul>

          <Text className="mt-4 text-lg font-bold md:text-xl">
            {t('chapter_ten.opening_a_channel_two.heading_three')}
          </Text>
          <ul className="ml-4 list-disc font-nunito text-lg md:text-xl">
            <li>{t('chapter_ten.opening_a_channel_two.hint_one')}</li>
            <li>{t('chapter_ten.opening_a_channel_two.hint_two')}</li>
            <li>{t('chapter_ten.opening_a_channel_two.hint_three')}</li>
          </ul>
        </LessonInfo>
      </TransactionChallenge>
    )
  )
}
