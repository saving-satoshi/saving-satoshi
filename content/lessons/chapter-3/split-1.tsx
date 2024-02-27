'use client'

import { useEffect } from 'react'
import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'
import { cssVarThemeChange } from 'lib/themeSelector'
import { Title } from 'ui'

export const metadata = {
  title: 'chapter_three.split_one.title',
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
    <Introduction lang={lang} imagePosition="object-[55%_19%]">
      <Title>{t('chapter_three.split_one.heading')}</Title>
      <Text className="mt-2 text-lg md:text-xl">
        {t('chapter_three.split_one.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_three.split_one.paragraph_two')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_three.split_one.paragraph_three')}
      </Text>

      <ol className="pl-2.5">
        <li className="flex flex-row text-lg md:text-xl">
          1.
          <p className="pl-2.5">{t('chapter_three.split_one.list_one')}</p>
        </li>

        <li className="flex flex-row text-lg md:text-xl">
          2.
          <p className="pl-2.5">{t('chapter_three.split_one.list_two')}</p>
        </li>
      </ol>

      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_three.split_one.paragraph_four')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_three.split_one.paragraph_five')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_three.split_one.paragraph_six')}
      </Text>
    </Introduction>
  )
}
