'use client'

import { chapters } from 'content/chapters'
import { useTranslations, useProceed } from 'hooks'
import { ChapterIntro, HolocatQuestion } from 'ui'
import { useState } from 'react'
import { Button } from 'shared'

export const metadata = {
  title: 'chapter_eight.building_blocks_one.title',
  navigation_title: 'chapter_eight.building_blocks_one.nav_title',
  key: 'CH8BBK1',
}

export default function BuildingBlocks1({ lang }) {
  const proceed = useProceed()
  const t = useTranslations(lang)

  const [tooltipVisibleOne, setTooltipVisibleOne] = useState(false)

  const handleMouseEnterOne = () => {
    setTooltipVisibleOne(true)
  }

  const handleMouseLeaveOne = () => {
    setTooltipVisibleOne(false)
  }

  return (
    <ChapterIntro className="m-auto my-8 max-w-[840px]">
      <p className="mt-4 font-nunito text-xl text-white">
        {t('chapter_eight.building_blocks_one.paragraph_one.a')}
        <a
          onMouseEnter={handleMouseEnterOne}
          onMouseLeave={handleMouseLeaveOne}
          href={t('chapter_eight.building_blocks_one.paragraph_one.b.href')}
          target="_blank"
          className="inline text-lg italic hover:underline md:text-xl"
        >
          {t('chapter_eight.building_blocks_one.paragraph_one.b.text')}
          <HolocatQuestion
            theme={chapters['chapter-8'].metadata.theme}
            inline
            id="light-clients"
            question={t(
              'chapter_eight.building_blocks_one.paragraph_one.b.question'
            )}
            href={t('chapter_eight.building_blocks_one.paragraph_one.b.href')}
            visible={tooltipVisibleOne}
          />
        </a>
        {t('chapter_eight.building_blocks_one.paragraph_one.c')}
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
