'use client'

import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_five.intro_one.title',
  navigation_title: 'chapter_five.intro_two.nav_title',
  image: '/assets/images/chapter-5-intro-2.jpg',
  key: 'CH5INT2',
}

export default function Intro2({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang} imagePosition="object-[50%_29%]">
      <Text className="text-lg md:text-xl">
        {t('chapter_five.intro_two.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_five.intro_two.paragraph_two')}
      </Text>
    </Introduction>
  )
}
