'use client'

import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_ten.updating_the_state_four.title',
  navigation_title: 'chapter_ten.updating_the_state_four.nav_title',
  image: '/assets/images/chapter-10-opening-a-channel-3.jpg',
  key: 'CH10UTS4',
}

export default function UpdatingTheState4({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang} imagePosition="object-center">
      <Text className="text-lg md:text-xl">
        {t('chapter_ten.updating_the_state_four.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_ten.updating_the_state_four.paragraph_two')}
      </Text>
    </Introduction>
  )
}
