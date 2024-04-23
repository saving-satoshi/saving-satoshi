'use client'

import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_seven.intro_one.title',
  navigation_title: 'chapter_seven.intro_three.nav_title',
  image: '/assets/images/chapter-7-intro-3.jpg',
  key: 'CH7INT3',
}

export default function Intro3({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang} imagePosition="object-center">
      <Text className="text-lg md:text-xl">
        {t('chapter_seven.intro_three.paragraph_one')}
      </Text>
    </Introduction>
  )
}
