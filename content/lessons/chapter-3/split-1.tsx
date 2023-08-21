'use client'

import { useEffect } from 'react'
import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'
import { cssVarThemeChange } from 'lib/themeSelector'

export const metadata = {
  title: 'chapter_three.pool_two.title',
  image: '/assets/images/chapter-3-split-1.jpg',
  theme: 'bg-gradient-to-tr from-[#291E1C] to-[#64381F]',
  secondaryTheme: 'bg-[#64381F]',
  key: 'CH3SPL1',
}

export default function Split1({ lang }) {
  const t = useTranslations(lang)

  useEffect(() => {
    cssVarThemeChange({
      '--CH3SOL1-bg': '#411e4f',
      '--CH3SOL1-gradient-start': '#3C1843',
      '--CH3SOL1-gradient-stop': '#45235a',
    })
  }, [])

  return (
    <Introduction lang={lang}>
      <Text className="text-lg md:text-xl">
        {t('chapter_one.intro_one.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_one.intro_one.paragraph_two')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_one.intro_one.paragraph_three')}
      </Text>
    </Introduction>
  )
}
