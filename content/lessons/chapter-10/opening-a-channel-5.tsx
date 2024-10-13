'use client'

import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_ten.opening_a_channel_five.title',
  navigation_title: 'chapter_ten.opening_a_channel_five.nav_title',
  image: '/assets/images/chapter-10-opening-a-channel-5.jpg',
  theme: 'bg-[#401d4e]',
  key: 'CH10OAC5',
}

export default function OpeningAChannel5({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang} imagePosition="object-center">
      <Text className="text-lg md:text-xl">
        {t('chapter_ten.opening_a_channel_five.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_ten.opening_a_channel_five.paragraph_two')}
      </Text>
    </Introduction>
  )
}
