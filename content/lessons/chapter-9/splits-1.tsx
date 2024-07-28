'use client'

import { useTranslations } from 'hooks'
import { LessonInfo, Text, Title } from 'ui'
import { useEffect, useState } from 'react'
import OpRunnerLesson from 'ui/lesson/OpRunner'
import { SuccessNumbers } from 'ui/common/StatusBar'

export const metadata = {
  title: 'chapter_nine.split_one.title',
  navigation_title: 'chapter_nine.split_one.nav_title',
  key: 'CH9SPL1',
}

export default function Splits1({ lang }) {
  const t = useTranslations(lang)
  const [hydrated, setHydrated] = useState(false)
  const [success, setSuccess] = useState<boolean | SuccessNumbers>(0)
  useEffect(() => {
    setHydrated(true)
  }, [])
  return (
    hydrated && (
      <OpRunnerLesson
        answerScript={['OP_ADD', 'OP_3', 'OP_EQUAL']}
        prePopulate
        showRunButtons
        readOnly
        success={success}
        setSuccess={setSuccess}
      >
        <LessonInfo>
          <Title>{t('chapter_nine.split_one.heading')}</Title>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_nine.split_one.paragraph_one')}
          </Text>
          <Text className="mt-4 font-nunito text-xl font-bold text-white">
            {t('chapter_nine.split_one.subheading_one')}
          </Text>
          <ul className="ml-4 list-disc">
            <li>{t('chapter_nine.split_one.opconstants_list_one')}</li>
            <li>{t('chapter_nine.split_one.opconstants_list_two')}</li>
            <li>{t('chapter_nine.split_one.opconstants_list_three')}</li>
            <li>{t('chapter_nine.split_one.opconstants_list_four')}</li>
            <li>{t('chapter_nine.split_one.opconstants_list_five')}</li>
            <li>{t('chapter_nine.split_one.opconstants_list_six')}</li>
          </ul>
          <Text className="mt-4 font-nunito text-xl font-bold text-white">
            {t('chapter_nine.split_one.subheading_two')}
          </Text>
          <ul className="ml-4 list-disc">
            <li>{t('chapter_nine.split_one.oparithmetic_list_one')}</li>
            <li>{t('chapter_nine.split_one.oparithmetic_list_two')}</li>
            <li>{t('chapter_nine.split_one.oparithmetic_list_three')}</li>
          </ul>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_nine.split_one.paragraph_two')}
          </Text>
        </LessonInfo>
      </OpRunnerLesson>
    )
  )
}
