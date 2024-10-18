'use client'

import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_ten.outro_four.title',
  navigation_title: 'chapter_ten.outro_four.nav_title',
  image: '/assets/images/chapter-10-outro-4.jpg',
  key: 'CH10OUT4',
}

export default function Outro4({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang} imagePosition="object-top">
      <Text className="text-lg md:text-xl">
        {t('chapter_ten.outro_four.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_ten.outro_four.paragraph_two')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_ten.outro_four.paragraph_three')}
      </Text>
    </Introduction>
  )
}
