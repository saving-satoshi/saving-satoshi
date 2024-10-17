'use client'

import { useTranslations } from 'hooks'
import { HolocatQuestion, Introduction, Text } from 'ui'
import { useState } from 'react'
import { chapters } from 'content/chapters'

export const metadata = {
  title: 'chapter_ten.intro_one.title',
  navigation_title: 'chapter_ten.intro_one.nav_title',
  image: '/assets/images/chapter-10-intro-1.jpg',
  key: 'CH10INT1',
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
    <Introduction lang={lang} imagePosition="object-center">
      <Text className="text-lg md:text-xl">
        {t('chapter_ten.intro_one.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_ten.intro_one.paragraph_two')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_ten.intro_one.paragraph_three')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_ten.intro_one.paragraph_four')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_ten.intro_one.paragraph_five.a')}
        <a
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          href={t('chapter_ten.intro_one.tooltip_one.link')}
          target="_blank"
          className="inline text-lg italic underline md:text-xl"
        >
          {t('chapter_ten.intro_one.tooltip_one.highlighted')}
          <HolocatQuestion
            theme={chapters['chapter-9'].metadata.theme}
            inline
            id="laszlo"
            question={t('chapter_ten.intro_one.tooltip_one.question')}
            href={t('chapter_ten.intro_one.tooltip_one.link')}
            visible={tooltipVisible}
          />
        </a>
        {t('chapter_ten.intro_one.paragraph_five.b')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_ten.intro_one.paragraph_six')}
      </Text>
    </Introduction>
  )
}
