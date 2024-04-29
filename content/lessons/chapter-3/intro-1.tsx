'use client'

import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_three.intro_one.title',
  navigation_title: 'chapter_three.intro_one.nav_title',
  image: '/assets/images/chapter-3-intro-1.jpg',
  key: 'CH3INT1',
}

export default function Intro1({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang} imagePosition="object-[50%_31%]">
      <Text className="text-lg md:text-xl">
        {t('chapter_three.intro_one.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_three.intro_one.paragraph_two')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_three.intro_one.paragraph_three')}
      </Text>
    </Introduction>
  )
}
