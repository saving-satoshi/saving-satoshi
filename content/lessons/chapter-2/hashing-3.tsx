'use client'

import { useProceed, useTranslations } from 'hooks'
import { ChapterIntro, HolocatQuestion } from 'ui'
import { Button } from 'shared'
import { useState } from 'react'
import { chapters } from 'content/chapters'

export const metadata = {
  title: 'chapter_two.hashing_three.title',
  navigation_title: 'chapter_two.hashing_three.nav_title',
  key: 'CH2HSH3',
}

export default function Hashing3({ lang }) {
  const proceed = useProceed()
  const t = useTranslations(lang)
  const [tooltipVisible, setTooltipVisible] = useState(false)

  const handleMouseEnter = () => {
    setTooltipVisible(true)
  }

  const handleMouseLeave = () => {
    setTooltipVisible(false)
  }

  return (
    <ChapterIntro
      className="my-8"
      heading={t('chapter_two.hashing_three.heading')}
    >
      <ul className="list-disc pl-5">
        <li className="mt-2 text-lg md:text-xl">
          {t('chapter_two.hashing_three.list_one')}
        </li>

        <li className="text-lg md:text-xl">
          {t('chapter_two.hashing_three.list_two')}
        </li>

        <li className="text-lg md:text-xl">
          {t('chapter_two.hashing_three.list_three')}
        </li>
      </ul>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_two.hashing_three.paragraph_one.a')}
        <a
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          href={t('chapter_two.hashing_three.tooltip_one.link')}
          target="_blank"
          className="inline text-lg italic hover:underline md:text-xl"
        >
          {t('chapter_two.hashing_three.tooltip_one.highlighted')}
          <HolocatQuestion
            theme={chapters['chapter-2'].metadata.theme}
            inline
            id="target-difficulty"
            question={t('chapter_two.hashing_three.tooltip_one.question')}
            href={t('chapter_two.hashing_three.tooltip_one.link')}
            visible={tooltipVisible}
          />
        </a>{' '}
        {t('chapter_two.hashing_three.paragraph_one.b')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_two.hashing_three.paragraph_two')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_two.hashing_three.paragraph_three')}
      </p>

      <Button onClick={proceed} classes="mt-10 max-md:w-full">
        {t('shared.next')}
      </Button>
    </ChapterIntro>
  )
}
