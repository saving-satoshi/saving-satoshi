'use client'

import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_six.in_out_two.title',
  image: '/assets/images/chapter-6-in-out-2.jpg',
  key: 'CH6INO2',
}

export default function InOut2({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang} imagePosition="object-[50%_27%]">
      <Text className="text-lg md:text-xl">
        {t('chapter_six.in_out_two.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_six.in_out_two.paragraph_two')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_six.in_out_two.paragraph_three')}
      </Text>
    </Introduction>
  )
}
