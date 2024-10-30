'use client'

import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_ten.outro_two.title',
  navigation_title: 'chapter_ten.outro_two.nav_title',
  image: '/assets/images/chapter-10-outro-2.jpg',
  key: 'CH10OUT2',
}

export default function Outro2({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang} imagePosition="object-center">
      <Text className="text-lg md:text-xl">
        {t('chapter_ten.outro_two.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_ten.outro_two.paragraph_two')}
      </Text>
    </Introduction>
  )
}
