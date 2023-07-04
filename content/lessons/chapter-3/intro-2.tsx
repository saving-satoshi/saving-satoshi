'use client'

import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_two.intro_two.title',
  image: '/assets/images/chapter-3-intro-2.jpg',
  key: 'CH3INT2',
}

export default function Intro2({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang}>
      <Text className="text-lg md:text-xl">
        {t('chapter_three.intro_two.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_three.intro_two.paragraph_two')}
      </Text>
    </Introduction>
  )
}
