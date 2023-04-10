// 'use client'

import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_two.intro_one.title',
  image: '/assets/images/chapter-2-intro-1.jpg',
}

export default function ReapingRewards({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang}>
      <h1 className="mb-3 font-cbrush text-5xl">
        {t('chapter_two.intro_one.title')}
      </h1>
      <Text className="text-lg font-bold md:text-xl">
        {t('chapter_two.intro_one.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_two.intro_one.paragraph_two')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_two.intro_one.paragraph_three')}
      </Text>
    </Introduction>
  )
}
