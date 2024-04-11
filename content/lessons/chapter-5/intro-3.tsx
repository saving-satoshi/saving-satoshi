'use client'

import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_five.intro_one.title',
  image: '/assets/images/chapter-5-intro-3.jpg',
  key: 'CH5INT3',
}

export default function Intro3({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang} imagePosition="object-[50%_45%]">
      <Text className="text-lg md:text-xl">
        {t('chapter_five.intro_three.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_five.intro_three.paragraph_two')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_five.intro_three.paragraph_three')}
      </Text>
    </Introduction>
  )
}
