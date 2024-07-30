'use client'

import { useTranslations } from 'hooks'
import { LessonInfo, Text, Title, OpCodeChallenge } from 'ui'
import { useEffect, useState } from 'react'
import { SuccessNumbers } from 'ui/common/StatusBar'

export const metadata = {
  title: 'chapter_nine.opcodes_two.title',
  navigation_title: 'chapter_nine.opcodes_two.nav_title',
  key: 'CH9OPC2',
}

export default function OpCodes2({ lang }) {
  const t = useTranslations(lang)
  const [hydrated, setHydrated] = useState(false)
  const [success, setSuccess] = useState<boolean | SuccessNumbers>(0)
  useEffect(() => {
    setHydrated(true)
  }, [])
  return (
    hydrated && (
      <OpCodeChallenge
        answerScript={['OP_ADD', 'OP_3', 'OP_EQUAL']}
        prePopulate
        showRunButtons
        readOnly
        success={success}
        setSuccess={setSuccess}
      >
        <LessonInfo>
          <Title>{t('chapter_nine.opcodes_two.heading')}</Title>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_nine.opcodes_two.paragraph_one')}
          </Text>
          <Text className="mt-4 font-nunito text-xl font-bold text-white">
            {t('chapter_nine.opcodes_two.subheading_one')}
          </Text>
          <ul className="ml-4 list-disc">
            <li>{t('chapter_nine.opcodes_two.opconstants_list_one')}</li>
            <li>{t('chapter_nine.opcodes_two.opconstants_list_two')}</li>
            <li>{t('chapter_nine.opcodes_two.opconstants_list_three')}</li>
            <li>{t('chapter_nine.opcodes_two.opconstants_list_four')}</li>
            <li>{t('chapter_nine.opcodes_two.opconstants_list_five')}</li>
            <li>{t('chapter_nine.opcodes_two.opconstants_list_six')}</li>
          </ul>
          <Text className="mt-4 font-nunito text-xl font-bold text-white">
            {t('chapter_nine.opcodes_two.subheading_two')}
          </Text>
          <ul className="ml-4 list-disc">
            <li>{t('chapter_nine.opcodes_two.oparithmetic_list_one')}</li>
            <li>{t('chapter_nine.opcodes_two.oparithmetic_list_two')}</li>
            <li>{t('chapter_nine.opcodes_two.oparithmetic_list_three')}</li>
          </ul>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_nine.opcodes_two.paragraph_two')}
          </Text>
        </LessonInfo>
      </OpCodeChallenge>
    )
  )
}
