'use client'

import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_one.intro_two.title',
  navigation_title: "Satoshi's holocat",
  image: '/assets/images/chapter-1-holocat.jpg',
  theme: 'bg-[#32303D]',
  key: 'CH1INT2',
}

export default function Intro2({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang} imagePosition="object-[30%_30%]">
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
