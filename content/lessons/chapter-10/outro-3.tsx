'use client'

import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_ten.outro_three.title',
  navigation_title: 'chapter_ten.outro_three.nav_title',
  image: '/assets/images/chapter-10-outro-3.jpg',
  theme: 'bg-[#401d4e]',
  key: 'CH10OUT3',
}

export default function Outro3({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang} imagePosition="object-center">
      <Text className="text-lg md:text-xl">
        {t('chapter_ten.outro_three.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_ten.outro_three.paragraph_two')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_ten.outro_three.paragraph_three')}
      </Text>
    </Introduction>
  )
}
