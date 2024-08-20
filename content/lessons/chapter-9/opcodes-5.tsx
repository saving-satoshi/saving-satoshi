'use client'

import { useTranslations } from 'hooks'
import { LessonInfo, Text, Title, OpCodeChallenge } from 'ui'
import { useEffect, useState } from 'react'
import { SuccessNumbers } from 'ui/common/StatusBar'

export const metadata = {
  title: 'chapter_nine.opcodes_five.title',
  navigation_title: 'chapter_nine.opcodes_five.nav_title',
  key: 'CH9OPC5',
}

export default function OpCodes5({ lang }) {
  const t = useTranslations(lang)
  const [hydrated, setHydrated] = useState(false)
  const [success, setSuccess] = useState<boolean | SuccessNumbers>(0)
  useEffect(() => {
    setHydrated(true)
  }, [])
  return (
    hydrated && (
      <OpCodeChallenge
        answerScript={['OP_3', 'OP_ADD', 'OP_EQUAL']}
        prePopulate
        readOnly
        success={success}
        setSuccess={setSuccess}
      >
        <LessonInfo>
          <Title>{t('chapter_nine.opcodes_five.heading')}</Title>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_nine.opcodes_five.paragraph_one')}
          </Text>
          <Text className="mt-4 font-nunito text-xl font-bold text-white">
            {t('chapter_nine.opcodes_five.subheading_one')}
          </Text>
          <ul className="list-none font-nunito">
            <li>
              <div className="flex flex-row gap-[15px]">
                {t('chapter_nine.opcodes_five.opconstants_list_one_heading')}
                <p>
                  {t(
                    'chapter_nine.opcodes_five.opconstants_list_one_paragraph'
                  )}
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-[15px]">
                {t('chapter_nine.opcodes_five.opconstants_list_two_heading')}
                <p>
                  {t(
                    'chapter_nine.opcodes_five.opconstants_list_two_paragraph'
                  )}
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-[15px]">
                {t('chapter_nine.opcodes_five.opconstants_list_three_heading')}
                <p>
                  {t(
                    'chapter_nine.opcodes_five.opconstants_list_three_paragraph'
                  )}
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-[15px]">
                {t('chapter_nine.opcodes_five.opconstants_list_four_heading')}
                <p>
                  {t(
                    'chapter_nine.opcodes_five.opconstants_list_four_paragraph'
                  )}
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-[15px]">
                {t('chapter_nine.opcodes_five.opconstants_list_five_heading')}
                <p>
                  {t(
                    'chapter_nine.opcodes_five.opconstants_list_five_paragraph'
                  )}
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-[15px]">
                {t('chapter_nine.opcodes_five.opconstants_list_six_heading')}
                <p>
                  {t(
                    'chapter_nine.opcodes_five.opconstants_list_six_paragraph'
                  )}
                </p>
              </div>
            </li>
          </ul>
          <Text className="mt-4 font-nunito text-xl font-bold text-white">
            {t('chapter_nine.opcodes_five.subheading_two')}
          </Text>
          <ul className="list-none font-nunito">
            <li>
              <div className="flex flex-row gap-[15px]">
                {t('chapter_nine.opcodes_five.oparithmetic_list_one_heading')}
                <p>
                  {t(
                    'chapter_nine.opcodes_five.oparithmetic_list_one_paragraph'
                  )}
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-[15px]">
                {t('chapter_nine.opcodes_five.oparithmetic_list_two_heading')}
                <p>
                  {t(
                    'chapter_nine.opcodes_five.oparithmetic_list_two_paragraph'
                  )}
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-[15px]">
                {t('chapter_nine.opcodes_five.oparithmetic_list_three_heading')}
                <p>
                  {t(
                    'chapter_nine.opcodes_five.oparithmetic_list_three_paragraph'
                  )}
                </p>
              </div>
            </li>
          </ul>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_nine.opcodes_five.paragraph_two')}
          </Text>
        </LessonInfo>
      </OpCodeChallenge>
    )
  )
}
