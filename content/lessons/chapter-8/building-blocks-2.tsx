'use client'

import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_eight.building_blocks_two.title',
  navigation_title: 'chapter_eight.building_blocks_two.nav_title',
  image: '/assets/images/chapter-8-building-blocks-2.jpg',
  key: 'CH8BBK2',
}

export default function BuildingBlocks2({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang} imagePosition="object-center">
      <Text className="text-lg md:text-xl">
        {t('chapter_eight.building_blocks_two.paragraph_one')}
      </Text>
      <Text className="mt-2 text-lg md:text-xl">
        {t('chapter_eight.building_blocks_two.paragraph_two')}
      </Text>
      <Text className="mt-2 text-lg md:text-xl">
        {t('chapter_eight.building_blocks_two.paragraph_three')}
      </Text>
      <Text className="mt-2 text-lg md:text-xl">
        {t('chapter_eight.building_blocks_two.paragraph_four')}
      </Text>
    </Introduction>
  )
}
