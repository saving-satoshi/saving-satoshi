'use client'

import { useTranslations } from 'hooks'
import { LessonInfo, Text, Title } from 'ui'
import { InputChallenge } from 'ui'

export const metadata = {
  title: 'chapter_one.transacting_two.title',
  navigation_title: 'chapter_one.transacting_two.nav_title',
  key: 'CH1TRA2',
}

export default function Transacting2({ lang }) {
  const t = useTranslations(lang)

  return (
    <InputChallenge
      answer="44697374726963742032312c20426974636f696e2046726565646f6d205a6f6e65"
      label={t('chapter_one.transacting_two.input_challenge_label')}
      pattern={/[a-z0-9]+/gi}
      precedingText="OP_RETURN OP_PUSHBYTES_33"
      hints
      inputClassNames="text-[18px] md:text-[24px] lg:text-[30px] short:text-[24px]"
    >
      <LessonInfo className="md:self-center">
        <Title className="short:text-lg">
          {t('chapter_one.transacting_two.heading')}
        </Title>

        <Text className="mt-2 text-lg short:text-base">
          {t('chapter_one.transacting_two.paragraph_one')}
        </Text>

        <Text className="mt-2 text-lg short:text-base">
          {t('chapter_one.transacting_two.paragraph_two')}
        </Text>

        <Text className="mt-2 text-lg short:text-base">
          {t('chapter_one.transacting_two.paragraph_three')}
        </Text>

        <Text className="mt-2 text-lg short:text-base">
          {t('chapter_one.transacting_two.paragraph_four')}
        </Text>

        <Text className="mt-2 text-lg short:text-base">
          {t('chapter_one.transacting_two.paragraph_five')}
        </Text>
      </LessonInfo>
    </InputChallenge>
  )
}
