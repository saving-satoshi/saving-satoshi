'use client'

import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_four.intro_one.title',
  image: '/assets/images/chapter-4-intro-1.jpg',
  key: 'CH4INT1',
}

export default function Intro1({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang} imagePosition="object-center">
      <Text className="text-lg md:text-xl">
        {t('chapter_four.intro_one.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_four.intro_one.paragraph_two')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_four.intro_one.paragraph_three')}
      </Text>
    </Introduction>
  )
}
