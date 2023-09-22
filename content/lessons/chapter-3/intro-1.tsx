'use client'

import { useTranslations, useMediaQuery } from 'hooks'
import { useEffect, useState } from 'react'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_two.intro_one.title',
  image: '/assets/images/chapter-3-intro-1.jpg',
  key: 'CH3INT1',
}

export default function Intro1({ lang }) {
  const t = useTranslations(lang)
  const [objectPosition, setObjectPosition] = useState<string | undefined>()

  const isMediumScreen = useMediaQuery({ width: 1024 })
  const isSmallScreen = useMediaQuery({ width: 640 })

  useEffect(() => {
    if (isSmallScreen) {
      setObjectPosition('object-left')
    } else if (isMediumScreen) {
      setObjectPosition('object-left-top')
    }
  }, [isMediumScreen, isSmallScreen])

  return (
    <Introduction lang={lang} imagePosition={objectPosition}>
      <Text className="text-lg md:text-xl">
        {t('chapter_three.intro_one.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_three.intro_one.paragraph_two')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_three.intro_one.paragraph_three')}
      </Text>
    </Introduction>
  )
}
