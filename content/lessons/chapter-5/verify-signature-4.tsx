'use client'

import { useTranslations } from 'hooks'
import { LessonDirection } from 'types'
import { DoubleInputChallenge, LessonInfo, Text, Title } from 'ui'

export const metadata = {
  title: 'chapter_five.verify_signature_one.title',
  key: 'CH5VFS4',
}

const xValue =
  '11db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5c'
const yValue =
  'b2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3'

export default function DeriveMessage6({ lang }) {
  const t = useTranslations(lang)

  return (
    <DoubleInputChallenge
      answerOne={xValue}
      answerTwo={yValue}
      labelOne={t('chapter_five.verify_signature_four.label_one')}
      labelTwo={t('chapter_five.verify_signature_four.label_two')}
      pattern={/[a-z0-9]+/gi}
      hints
      direction={LessonDirection.Horizontal}
      inputClassNames="text-[18px] md:text-[22px]"
    >
      <LessonInfo className="px-4 md:self-start md:px-10">
        <Title>{t('chapter_five.verify_signature_four.heading')}</Title>

        <Text className="mt-2 text-lg md:text-[22px]">
          {t('chapter_five.verify_signature_four.paragraph_one')}
        </Text>

        <div className="mt-[30px] border-2 border-dashed border-white">
          <p className="max-w-[900px] px-[15px] py-[10px] text-left font-space-mono text-base md:text-lg">
            {t('chapter_five.verify_signature_four.paragraph_two')}
          </p>
          <p className="max-w-[900px] break-all px-[15px] py-[10px] text-left font-space-mono text-base md:text-lg">
            {t('chapter_five.verify_signature_four.paragraph_three')}
          </p>
        </div>
      </LessonInfo>
    </DoubleInputChallenge>
  )
}
