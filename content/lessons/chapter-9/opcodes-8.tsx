'use client'

import { useTranslations } from 'hooks'
import { OpCodeChallenge, LessonInfo, Text, Title } from 'ui'
import { useEffect, useState } from 'react'
import { SuccessNumbers } from 'ui/common/StatusBar'

export const metadata = {
  title: 'chapter_nine.opcodes_eight.title',
  navigation_title: 'chapter_nine.opcodes_eight.nav_title',
  key: 'CH9OPC8',
}

export default function OpCodes8({ lang }) {
  const t = useTranslations(lang)
  const [hydrated, setHydrated] = useState(false)
  const [success, setSuccess] = useState<boolean | SuccessNumbers>(0)
  useEffect(() => {
    setHydrated(true)
  }, [])
  return (
    hydrated && (
      <OpCodeChallenge
        answerScript={[
          'OP_2',
          'OP_PUSH',
          'PUBKEY(MIKERAMEN)',
          'OP_PUSH',
          'PUBKEY(DEBORAHCHUNK)',
          'OP_2',
          'OP_CHECKMULTISIG',
        ]}
        prePopulate
        showRunButtons
        readOnly
        success={success}
        setSuccess={setSuccess}
      >
        <LessonInfo>
          <Title>{t('chapter_nine.opcodes_eight.heading')}</Title>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_nine.opcodes_eight.paragraph_one')}
          </Text>
          <Text className="mt-4 font-nunito text-xl font-bold text-white">
            {t('chapter_nine.opcodes_eight.subheading_one')}
          </Text>
          <Text className="mt-4 font-space-mono text-lg text-white">
            {t('chapter_nine.opcodes_eight.paragraph_two')}
          </Text>
          <Text className="mt-4 font-nunito text-xl font-bold text-white">
            {t('chapter_nine.opcodes_eight.subheading_two')}{' '}
            {t('chapter_nine.opcodes_eight.subheading_two_link')}
          </Text>
          <ol className="ml-4 list-decimal">
            <li>{t('chapter_nine.opcodes_eight.multisig_list_one')}</li>
            <li>{t('chapter_nine.opcodes_eight.multisig_list_two')}</li>
            <li>{t('chapter_nine.opcodes_eight.multisig_list_three')}</li>
            <li>{t('chapter_nine.opcodes_eight.multisig_list_four')}</li>
            <li>{t('chapter_nine.opcodes_eight.multisig_list_five')}</li>
            <li>{t('chapter_nine.opcodes_eight.multisig_list_six')}</li>
            <li>{t('chapter_nine.opcodes_eight.multisig_list_seven')}</li>
            <li>{t('chapter_nine.opcodes_eight.multisig_list_eight')}</li>
          </ol>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_nine.opcodes_eight.paragraph_three')}
          </Text>
        </LessonInfo>
      </OpCodeChallenge>
    )
  )
}
