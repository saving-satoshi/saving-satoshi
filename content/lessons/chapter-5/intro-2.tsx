'use client'

import { useMediaQuery, useTranslations } from 'hooks'
import { useEffect, useState } from 'react'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_five.intro_one.title',
  image: '/assets/images/chapter-5-intro-2.jpg',
  key: 'CH5INT2',
}

export default function Intro2({ lang }) {
  const t = useTranslations(lang)
  const [objectPosition, setObjectPosition] = useState<string | undefined>()

  const isMediumScreen = useMediaQuery({ width: 1024 })

  useEffect(() => {
    if (isMediumScreen) {
      setObjectPosition('object-left')
    } else {
      setObjectPosition('object-bottom')
    }
  }, [isMediumScreen])

  return (
    <Introduction lang={lang} imagePosition={objectPosition}>
      <Text className="text-lg md:text-xl">
        {t('chapter_five.intro_two.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_five.intro_two.paragraph_two')}
      </Text>
    </Introduction>
  )
}
