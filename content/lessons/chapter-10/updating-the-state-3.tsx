'use client'

import { useTranslations } from 'hooks'
import { LessonInfo, Text } from 'ui'
import TransactionChallenge from 'ui/lesson/TransactionsChallenge'
import { useEffect, useState } from 'react'
import { SuccessNumbers } from 'ui/common/StatusBar'

export const metadata = {
  title: 'chapter_ten.updating_the_state_three.title',
  navigation_title: 'chapter_ten.updating_the_state_three.nav_title',
  key: 'CH10UTS3',
}

export default function UpdatingTheState3({ lang }) {
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
        prefilledEditable="refund"
        currentTransactionTab="refund_1"
        laszloWillNotSign
      >
        <LessonInfo>
          <Text className="text-lg font-bold md:text-xl">
            {t('chapter_ten.updating_the_state_three.heading_one')}
          </Text>
          <Text className="mt-4 text-lg md:text-xl">
            {t('chapter_ten.updating_the_state_three.paragraph_one')}
          </Text>
          <Text className="mt-4 text-lg md:text-xl">
            {t('chapter_ten.updating_the_state_three.paragraph_two')}
          </Text>
          <hr className="my-4 h-[1px] w-full opacity-25" />

          <Text className="mt-4 text-lg font-bold md:text-xl">
            {t('chapter_ten.updating_the_state_three.heading_two')}
          </Text>
          <ul className="ml-4 mt-4 list-decimal font-nunito text-xl">
            <li>
              {t('chapter_ten.updating_the_state_three.revocation_list_one')}
            </li>
            <li>
              {t('chapter_ten.updating_the_state_three.revocation_list_two')}
            </li>
          </ul>
          <Text className="mt-4 text-lg font-bold md:text-xl">
            {t('chapter_ten.updating_the_state_three.heading_three')}
          </Text>
          <ul className="ml-4  list-disc font-nunito text-xl">
            <li>{t('chapter_ten.updating_the_state_three.hint_one')}</li>
            <li>{t('chapter_ten.updating_the_state_three.hint_two')}</li>
          </ul>
        </LessonInfo>
      </TransactionChallenge>
    )
  )
}
