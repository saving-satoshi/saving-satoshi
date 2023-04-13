'use client'

import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_two.intro_two.title',
  image: '/assets/images/chapter-2-intro-2.jpg',
}

export default function Intro2({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang}>
      <h1 className="mb-3 font-cbrush text-5xl">
        {t('chapter_two.intro_two.title')}
      </h1>
      <Text className="text-lg font-bold md:text-xl">
        {t('chapter_two.intro_two.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_two.intro_two.paragraph_two')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_two.intro_two.paragraph_three')}
      </Text>
    </Introduction>
  )
}
