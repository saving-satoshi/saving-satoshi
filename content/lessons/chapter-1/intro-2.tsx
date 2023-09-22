'use client'

import { useTranslations, useMediaQuery } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_one.intro_two.title',
  image: '/assets/images/chapter-1-holocat.jpg',
  theme: 'bg-[#32303D]',
  key: 'CH1INT2',
}

export default function Intro2({ lang }) {
  const t = useTranslations(lang)

  const isSmallScreen = useMediaQuery({ width: 1024 })

  return (
    <Introduction
      lang={lang}
      imagePosition={isSmallScreen ? 'object-left-top' : undefined}
    >
      <Text className="text-lg md:text-xl">
        {t('chapter_one.intro_two.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_one.intro_two.paragraph_two')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_one.intro_two.paragraph_three')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_one.intro_two.paragraph_four')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_one.intro_two.paragraph_five')}
      </Text>
    </Introduction>
  )
}
