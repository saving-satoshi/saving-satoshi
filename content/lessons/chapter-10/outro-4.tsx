'use client'

import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_ten.intro_one.title',
  navigation_title: 'chapter_ten.intro_one.nav_title',
  image: '/assets/images/chapter-10-intro-1.jpg',
  theme: 'bg-[#401d4e]',
  key: 'CH10OUT4',
}

export default function Outro4({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang} imagePosition="object-center">
      <Text className="text-lg md:text-xl">
        {t('chapter_ten.intro_one.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_ten.intro_one.paragraph_two')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_ten.intro_one.paragraph_three')}
      </Text>
    </Introduction>
  )
}
