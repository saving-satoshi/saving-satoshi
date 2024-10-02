'use client'

import { useTranslations } from 'hooks'
import { InputChallenge, LessonInfo, Text } from 'ui'

export const metadata = {
  title: 'chapter_five.derive_message_one.title',
  navigation_title: 'chapter_five.derive_message_three.nav_title',
  key: 'CH5DRM3',
}

export default function DeriveMessage3({ lang }) {
  const t = useTranslations(lang)

  return (
    <InputChallenge
      answer="304402204e45e16932b8af514961a1d3a1a25fdf3f4f7732e9d624c6c61548ab5fb8cd410220181522ec8eca07de4860a4acdd12909d831cc56cbbac4622082221a8768d1d0901"
      label={t('chapter_five.derive_message_three.placeholder')}
      pattern={/[a-z0-9]+/gi}
      precedingText="OP_PUSHBYTES_71"
      successMessage={t('chapter_five.derive_message_three.success')}
      hints
      inputClassNames="text-[18px] md:text-[24px] lg:text-[30px] short:text-[24px]"
    >
      <LessonInfo className="md:self-center">
        <Text className="mt-2 text-center text-xl font-bold md:text-2xl short:text-lg">
          {t('chapter_five.derive_message_three.heading')}
        </Text>

        <Text className="mt-2 text-center text-lg md:text-xl short:text-base">
          {t('chapter_five.derive_message_three.paragraph_one')}
        </Text>
      </LessonInfo>
    </InputChallenge>
  )
}
