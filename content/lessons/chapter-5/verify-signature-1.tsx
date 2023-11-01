'use client'

import { useMediaQuery, useTranslations } from 'hooks'
import { useEffect, useState } from 'react'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_five.verify_signature_one.title',
  image: '/assets/images/chapter-4-intro-1.jpg',
  key: 'CH5VFS1',
}

export default function VerifySignature1({ lang }) {
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
        {t('chapter_four.intro_one.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_four.intro_one.paragraph_two')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_four.intro_one.paragraph_three')}
      </Text>
    </Introduction>
  )
}
