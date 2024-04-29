'use client'

import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_five.intro_one.title',
  navigation_title: 'chapter_five.intro_one.nav_title',
  image: '/assets/images/chapter-5-intro-1.jpg',
  key: 'CH5INT1',
}

export default function Intro1({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang} imagePosition="object-[50%_27%]">
      <Text className="text-lg md:text-xl">
        {t('chapter_five.intro_one.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_five.intro_one.paragraph_two')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_five.intro_one.paragraph_three')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_five.intro_one.paragraph_four')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_five.intro_one.paragraph_five')}
      </Text>
    </Introduction>
  )
}
