'use client'

import { useProceed, useTranslations } from 'hooks'
import { Button } from 'shared'
import { CodeExample, Introduction, Text } from 'ui'

export const metadata = {
  title: 'chapter_three.tabconf_clue_one.title',
  navigation_title: 'chapter_three.tabconf_clue_one.nav_title',
  image: '/assets/images/tabconf-clue-1.webp',
  key: 'CH3TCC1',
}

export default function BookACall1({ lang }) {
  const t = useTranslations(lang)
  const proceed = useProceed()
  return (
    <Introduction
      lang={lang}
      imagePosition="object-[50%_100%] md:object-top"
      noBtn
    >
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_three.tabconf_clue_one.paragraph_one')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_three.tabconf_clue_one.paragraph_two')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_three.tabconf_clue_one.paragraph_three')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('chapter_three.tabconf_clue_one.paragraph_four')}
      </Text>
      <CodeExample
        className="mt-4 text-wrap font-space-mono text-[#F6A40A]"
        code={`${process.env.NEXT_PUBLIC_TABCONF_KEY}`}
        language="shell"
        copy
      />

      <div className="mt-8 flex flex-wrap gap-4">
        <Button
          size="small"
          classes="w-full md:w-auto !text-[#723409]"
          onClick={proceed}
        >
          {t('shared.next')}
        </Button>
      </div>
    </Introduction>
  )
}
