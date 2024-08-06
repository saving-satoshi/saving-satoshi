'use client'

import { useTranslations } from 'hooks'
import { LessonInfo, Text, Title, OpCodeChallenge } from 'ui'
import { useEffect, useState } from 'react'
import { SuccessNumbers } from 'ui/common/StatusBar'

export const metadata = {
  title: 'chapter_nine.opcodes_six.title',
  navigation_title: 'chapter_nine.opcodes_six.nav_title',
  key: 'CH9OPC6',
}

export default function OpCodes6({ lang }) {
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
          'OP_DUP',
          'OP_HASH256',
          'OP_PUSH',
          'HASH256(PUBKEY(HOLOCAT))',
          'OP_EQUALVERIFY',
          'OP_CHECKSIG',
        ]}
        prePopulate
        showRunButtons
        readOnly
        success={success}
        setSuccess={setSuccess}
      >
        <LessonInfo>
          <Title>{t('chapter_nine.opcodes_six.heading')}</Title>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_nine.opcodes_six.paragraph_one')}
          </Text>
          <Text className="mt-4 font-nunito text-xl font-bold text-white">
            {t('chapter_nine.opcodes_six.subheading_one')}
          </Text>
          <ul className="list-none font-nunito">
            <li>
              <div className="flex flex-row gap-[15px]">
                {t('chapter_nine.opcodes_six.opcryptography_list_one_heading')}
                <p>
                  {t(
                    'chapter_nine.opcodes_six.opcryptography_list_one_paragraph'
                  )}
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-row gap-[15px]">
                {t('chapter_nine.opcodes_six.opcryptography_list_two_heading')}
                <p>
                  {t(
                    'chapter_nine.opcodes_six.opcryptography_list_two_paragraph'
                  )}
                </p>
              </div>
            </li>
          </ul>
          <Text className="mt-4 font-nunito text-xl text-white">
            {t('chapter_nine.opcodes_six.paragraph_two')}
          </Text>
        </LessonInfo>
      </OpCodeChallenge>
    )
  )
}
