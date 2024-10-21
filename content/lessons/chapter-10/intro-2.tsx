'use client'

import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_ten.intro_two.title',
  navigation_title: 'chapter_ten.intro_two.nav_title',
  image: '/assets/images/chapter-10-intro-1.jpg',
  theme: 'bg-gradient-to-tl from-[#c41486] to-[#58a4b2]',
  secondaryTheme: 'bg-[#c41486]',
  key: 'CH10INT2',
}

export default function Intro2({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang} imagePosition="object-center">
      <Text className="text-lg md:text-xl">
        {t('chapter_ten.intro_two.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_ten.intro_two.paragraph_two')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_ten.intro_two.paragraph_three')}
      </Text>
    </Introduction>
  )
}
