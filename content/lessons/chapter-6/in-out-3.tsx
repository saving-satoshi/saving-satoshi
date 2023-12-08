'use client'

import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_six.in_out_three.title',
  image: '/assets/images/chapter-6-in-out-3.jpg',
  key: 'CH6INO3',
}

export default function InOut3({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang} imagePosition="object-[50%_27%]">
      <Text className="text-lg md:text-xl">
        {t('chapter_six.in_out_three.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_six.in_out_three.paragraph_two')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_six.in_out_three.paragraph_three')}
      </Text>
    </Introduction>
  )
}
