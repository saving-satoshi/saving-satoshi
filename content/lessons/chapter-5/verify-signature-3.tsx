'use client'

import { useTranslations } from 'hooks'
import { LessonDirection } from 'types'
import { DoubleInputChallenge, LessonInfo, Text, Title } from 'ui'

export const metadata = {
  title: 'chapter_five.verify_signature_one.title',
  key: 'CH5VFS3',
}

const rValue =
  '0x4e45e16932b8af514961a1d3a1a25fdf3f4f7732e9d624c6c61548ab5fb8cd41'
const sValue =
  '0x181522ec8eca07de4860a4acdd12909d831cc56cbbac4622082221a8768d1d09'

export default function DeriveMessage6({ lang }) {
  const t = useTranslations(lang)

  return (
    <DoubleInputChallenge
      answerOne={rValue}
      answerTwo={sValue}
      labelOne={t('chapter_five.verify_signature_three.label_one')}
      labelTwo={t('chapter_five.verify_signature_three.label_two')}
      pattern={/[a-z0-9]+/gi}
      hints
      direction={LessonDirection.Horizontal}
      inputClassNames="text-[18px] md:text-[22px]"
    >
      <LessonInfo className="px-4 md:self-start md:px-10">
        <Title>{t('chapter_five.verify_signature_three.heading')}</Title>

        <Text className="mt-2 text-lg md:text-[22px]">
          {t('chapter_five.verify_signature_three.paragraph_one')}
        </Text>

        <Text className="mt-2 text-lg md:text-[22px]">
          {t('chapter_five.verify_signature_three.paragraph_two')}
        </Text>

        <div className="mt-[30px] border-2 border-dashed border-white">
          <p className="max-w-[900px] px-[15px] py-[10px] text-left font-space-mono text-base md:text-lg">
            {t('chapter_five.verify_signature_three.paragraph_three')}
          </p>
          <p className="max-w-[900px] break-all px-[15px] py-[10px] text-left font-space-mono text-base md:text-lg">
            {t('chapter_five.verify_signature_three.paragraph_four')}
          </p>
        </div>
      </LessonInfo>
    </DoubleInputChallenge>
  )
}
