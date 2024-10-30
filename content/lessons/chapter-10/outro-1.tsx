'use client'

import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_ten.outro_one.title',
  navigation_title: 'chapter_ten.outro_one.nav_title',
  image: '/assets/images/chapter-10-outro-1.jpeg',
  key: 'CH10OUT1',
}

export default function Outro1({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang} imagePosition="object-center">
      <Text className="text-lg md:text-xl">
        {t('chapter_ten.outro_one.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_ten.outro_one.paragraph_two')}
      </Text>
    </Introduction>
  )
}
