'use client'

import { useTranslations, useLocalizedRoutes } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_one.intro_one.title',
  image: '/assets/images/chapter-1-intro-1.jpg',
  theme: 'bg-[#2C3A3F]',
}

export default function Intro1({ lang }) {
  const routes = useLocalizedRoutes()
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang}>
      <Text className="text-lg md:text-xl">
        {t('chapter_one.intro_one.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_one.intro_one.paragraph_two')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_one.intro_one.paragraph_three')}
      </Text>
    </Introduction>
  )
}
