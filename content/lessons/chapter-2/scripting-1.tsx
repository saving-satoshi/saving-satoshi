'use client'

import { useProceed, useTranslations } from 'hooks'
import { ChapterIntro, Text } from 'ui'
import { Button } from 'shared'
import HolocatQuestion from 'ui/lesson/HolocatQuestion'
import { useEffect, useState } from 'react'
import { chapters } from 'content/chapters'

export const metadata = {
  title: 'chapter_two.scripting_one.title',
  key: 'CH2SCR1',
}

export default function Scripting1({ lang }) {
  const t = useTranslations(lang)
  const proceed = useProceed()
  const [tooltipVisible, setTooltipVisible] = useState(false)

  const handleMouseEnter = () => {
    setTooltipVisible(true)
  }

  const handleMouseLeave = () => {
    setTooltipVisible(false)
  }

  return (
    <ChapterIntro
      className="fade-in my-8"
      heading={t('chapter_two.scripting_one.heading')}
    >
      <Text className="mt-2 text-lg md:text-xl">
        {t('chapter_two.scripting_one.paragraph_one')}
      </Text>
      <Text className="my-8 text-lg md:text-xl">
        {t('chapter_two.scripting_one.paragraph_two')}
      </Text>
      <Text className="inline text-lg md:text-xl">
        {t('chapter_two.scripting_one.paragraph_three')}{' '}
      </Text>
      <a
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        href={t('chapter_two.scripting_one.tooltip_one.link')}
        target="_blank"
        className="inline text-lg hover:underline md:text-xl"
      >
        {t('chapter_two.scripting_one.tooltip_one.highlighted')}
        <HolocatQuestion
          theme={chapters['chapter-2'].metadata.theme}
          inline
          id="target-difficulty"
          question={t('chapter_two.scripting_one.tooltip_one.question')}
          href={t('chapter_two.scripting_one.tooltip_one.link')}
          visible={tooltipVisible}
        />
      </a>
      .
      <Text className="mt-8 text-lg md:text-xl">
        {t('chapter_two.scripting_one.paragraph_four')}
      </Text>
      <Button onClick={proceed} classes="mt-10 max-md:w-full">
        {t('shared.next')}
      </Button>
    </ChapterIntro>
  )
}
