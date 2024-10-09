'use client'

import { useTranslations } from 'hooks'
import { InputChallenge, LessonInfo, Text } from 'ui'

export const metadata = {
  title: 'chapter_five.derive_message_one.title',
  navigation_title: 'chapter_five.derive_message_four.nav_title',
  key: 'CH5DRM4',
}

export default function DeriveMessage4({ lang }) {
  const t = useTranslations(lang)

  return (
    <InputChallenge
      answer="0411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3"
      label={t('chapter_five.derive_message_three.placeholder')}
      pattern={/[a-z0-9]+/gi}
      precedingText="OP_PUSHBYTES_65"
      successMessage={t('chapter_five.derive_message_four.success')}
      hints
      inputClassNames="text-[18px] md:text-[24px] lg:text-[30px] short:text-[24px]"
    >
      <LessonInfo className="md:self-center">
        <Text className="mt-2 text-center text-xl font-bold md:text-2xl short:text-lg">
          {t('chapter_five.derive_message_four.heading')}
        </Text>

        <Text className="mt-2 text-center text-lg md:text-xl short:text-base">
          {t('chapter_five.derive_message_four.paragraph_one')}
        </Text>
        <Text className="mt-2 text-center text-lg md:text-xl short:text-base">
          {t('chapter_five.derive_message_four.paragraph_two')}
        </Text>
        <Text className="mt-2 text-center text-lg md:text-xl short:text-base">
          {t('chapter_five.derive_message_four.paragraph_three')}
        </Text>
      </LessonInfo>
    </InputChallenge>
  )
}
