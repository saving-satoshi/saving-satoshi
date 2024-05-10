'use client'

import { useTranslations, useProceed } from 'hooks'
import { ChapterIntro } from 'ui'
import { Button } from 'shared'

export const metadata = {
  title: 'chapter_eight.building_blocks_one.title',
  navigation_title: 'chapter_eight.building_blocks_one.nav_title',
  key: 'CH8BBK1',
}

export default function BuildingBlocks1({ lang }) {
  const proceed = useProceed()
  const t = useTranslations(lang)

  return (
    <ChapterIntro className="m-auto my-8 max-w-[840px]">
      <p className="mt-2 text-lg md:text-xl">
        {t('chapter_eight.building_blocks_one.paragraph_one')}
      </p>
      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_eight.building_blocks_one.paragraph_two')}
      </p>
      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_eight.building_blocks_one.paragraph_three')}
      </p>
      <Button onClick={proceed} classes="mt-10 max-md:w-full">
        {t('shared.next')}
      </Button>
    </ChapterIntro>
  )
}
