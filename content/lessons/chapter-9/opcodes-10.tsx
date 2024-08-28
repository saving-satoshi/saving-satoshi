'use client'

import { useTranslations } from 'hooks'
import { OpCodeChallenge, LessonInfo, Text, Title } from 'ui'
import { useEffect, useState } from 'react'
import { SuccessNumbers } from 'ui/common/StatusBar'

export const metadata = {
  title: 'chapter_nine.opcodes_ten.title',
  navigation_title: 'chapter_nine.opcodes_ten.nav_title',
  key: 'CH9OPC10',
}

export default function OpCodes10({ lang }) {
  const t = useTranslations(lang)
  const [hydrated, setHydrated] = useState(false)
  const [success, setSuccess] = useState<boolean | SuccessNumbers>(0)
  useEffect(() => {
    setHydrated(true)
  }, [])
  return (
    hydrated && (
      <OpCodeChallenge
        lang={lang}
        answerScript={[
          'OP_ADD',
          'OP_IF',
          'OP_3',
          'OP_2',
          'OP_EQUAL',
          'OP_ELSE',
          'OP_1',
          'OP_1',
          'OP_EQUAL',
          'OP_ENDIF',
        ]}
        prePopulate
        readOnly
        success={success}
        setSuccess={setSuccess}
      >
        <LessonInfo>
          <Title>{t('chapter_nine.opcodes_ten.heading')}</Title>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_nine.opcodes_ten.paragraph_one')}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_nine.opcodes_ten.paragraph_two')}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_nine.opcodes_ten.paragraph_three')}
          </Text>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_nine.opcodes_ten.paragraph_four')}
          </Text>
        </LessonInfo>
      </OpCodeChallenge>
    )
  )
}
