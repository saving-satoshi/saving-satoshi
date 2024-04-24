'use client'

import { chapters } from 'content/chapters'
import { useTranslations } from 'hooks'
import { useState } from 'react'
import { HolocatQuestion, Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_two.intro_one.title',
  navigation_title: 'chapter_two.intro_one.nav_title',
  image: '/assets/images/chapter-2-intro-1.jpg',
  key: 'CH2INT1',
}

export default function Intro1({ lang }) {
  const t = useTranslations(lang)
  const [tooltipVisible, setTooltipVisible] = useState(false)

  const handleMouseEnter = () => {
    setTooltipVisible(true)
  }

  const handleMouseLeave = () => {
    setTooltipVisible(false)
  }

  return (
    <Introduction lang={lang} imagePosition="object-[61%_67%]">
      <h1 className="mb-3 font-cbrush text-5xl">
        {t('chapter_two.intro_one.title')}
      </h1>
      <Text className="text-lg md:text-xl">
        {t('chapter_two.intro_one.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_two.intro_one.paragraph_two')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_two.intro_one.paragraph_three.a')}{' '}
        <a
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          href={t('chapter_two.intro_one.tooltip_one.link')}
          target="_blank"
          className="inline text-lg italic hover:underline md:text-xl"
        >
          {t('chapter_two.intro_one.tooltip_one.highlighted')}
          <HolocatQuestion
            theme={chapters['chapter-2'].metadata.theme}
            inline
            id="target-difficulty"
            question={t('chapter_two.intro_one.tooltip_one.question')}
            href={t('chapter_two.intro_one.tooltip_one.link')}
            visible={tooltipVisible}
          />
        </a>{' '}
        {t('chapter_two.intro_one.paragraph_three.b')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_two.intro_one.paragraph_four')}
      </Text>
    </Introduction>
  )
}
