'use client'

import { useTranslations, useMediaQuery } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_one.intro_one.title',
  navigation_title: 'chapter_one.intro_one.nav_title',
  image: '/assets/images/chapter-1-intro-1.jpg',
  theme: 'bg-[#2C3A3F]',
  key: 'CH1INT1',
}

export default function Intro1({ lang }) {
  const t = useTranslations(lang)

  const isSmallScreen = useMediaQuery({ width: 1024 })

  return (
    <Introduction
      lang={lang}
      imagePosition={isSmallScreen ? 'object-right' : undefined}
    >
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
