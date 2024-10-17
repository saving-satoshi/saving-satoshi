'use client'

import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_ten.intro_three.title',
  navigation_title: 'chapter_ten.intro_three.nav_title',
  image: '/assets/images/chapter-10-intro-1.jpg',
  key: 'CH10INT3',
}

export default function Intro3({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang} imagePosition="object-center">
      <Text className="text-lg md:text-xl">
        {t('chapter_ten.intro_three.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_ten.intro_three.paragraph_two')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_ten.intro_three.paragraph_three')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_ten.intro_three.paragraph_four')}
      </Text>
    </Introduction>
  )
}
