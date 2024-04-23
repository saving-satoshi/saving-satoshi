'use client'

import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_seven.intro_one.title',
  navigation_title: 'chapter_seven.intro_two.nav_title',
  image: '/assets/images/chapter-7-intro-2.jpg',
  key: 'CH7INT2',
}

export default function Intro2({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang} imagePosition="object-center">
      <Text className="text-lg md:text-xl">
        {t('chapter_seven.intro_two.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_seven.intro_two.paragraph_two')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_seven.intro_two.paragraph_three')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_seven.intro_two.paragraph_four')}
      </Text>
    </Introduction>
  )
}
