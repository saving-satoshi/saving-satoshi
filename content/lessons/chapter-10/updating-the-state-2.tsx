'use client'

import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_ten.updating_the_state_two.title',
  navigation_title: 'chapter_ten.updating_the_state_two.nav_title',
  image: '/assets/images/chapter-10-opening-a-channel-3.jpg',
  theme: 'bg-[#401d4e]',
  key: 'CH10UTS2',
}

export default function UpdatingTheState2({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang} imagePosition="object-center">
      <Text className="text-lg md:text-xl">
        {t('chapter_ten.updating_the_state_two.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_ten.updating_the_state_two.paragraph_two')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_ten.updating_the_state_two.paragraph_three')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_ten.updating_the_state_two.paragraph_four')}
      </Text>
    </Introduction>
  )
}
