'use client'

import { useTranslations } from 'hooks'
import { OpCodeChallenge, LessonInfo, Text, Title } from 'ui'
import { useEffect, useState } from 'react'
import { SuccessNumbers } from 'ui/common/StatusBar'

export const metadata = {
  title: 'chapter_nine.opcodes_nine.title',
  navigation_title: 'chapter_nine.opcodes_nine.nav_title',
  key: 'CH9OPC9',
}

export default function OpCodes9({ lang }) {
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
          'OP_PUSH',
          '6930010',
          'OP_CHECKLOCKTIMEVERIFY',
          'OP_DROP',
          'OP_PUSH',
          'PUBKEY(HOLOCAT)',
          'OP_CHECKSIG',
        ]}
        prePopulate
        readOnly
        success={success}
        setSuccess={setSuccess}
      >
        <LessonInfo>
          <Title>{t('chapter_nine.opcodes_nine.heading')}</Title>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_nine.opcodes_nine.paragraph_one')}
          </Text>
          <Text className="mt-4 font-nunito text-xl font-bold text-white">
            {t('chapter_nine.opcodes_nine.subheading_one')}
          </Text>
          <ul className="list-none font-nunito">
            <li>
              <div className="flex flex-row gap-[15px]">
                {t('chapter_nine.opcodes_nine.optimelock_list_one_heading')}
                <p>
                  {t('chapter_nine.opcodes_nine.optimelock_list_one_paragraph')}
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-[15px]">
                {t('chapter_nine.opcodes_nine.optimelock_list_two_heading')}
                <p>
                  {t('chapter_nine.opcodes_nine.optimelock_list_two_paragraph')}
                </p>
              </div>
            </li>
          </ul>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_nine.opcodes_nine.paragraph_two')}
          </Text>
        </LessonInfo>
      </OpCodeChallenge>
    )
  )
}
