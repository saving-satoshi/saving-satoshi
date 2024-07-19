'use client'

import { useTranslations } from 'hooks'
import { LessonInfo, Text, Title } from 'ui'
import { useEffect, useState } from 'react'
import OpRunnerLesson from 'ui/lesson/OpRunner'
import { SuccessNumbers } from 'ui/common/StatusBar'

export const metadata = {
  title: 'chapter_eight.building_blocks_one.title',
  navigation_title: 'chapter_eight.building_blocks_one.nav_title',
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
        userScript={['OP_1', 'OP_2', 'OP_ADD']}
        success={success}
        setSuccess={setSuccess}
      >
        <LessonInfo>
          <Title>{t('chapter_eight.building_blocks_six.heading')}</Title>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_eight.building_blocks_seven.paragraph_one')}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_eight.building_blocks_seven.paragraph_two')}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_eight.building_blocks_seven.paragraph_three')}
          </Text>
        </LessonInfo>
      </OpRunnerLesson>
    )
  )
}
