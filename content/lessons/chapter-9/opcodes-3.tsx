'use client'

import { useTranslations } from 'hooks'
import { ChapterIntro } from 'ui'
import { Button } from 'shared'
import { useProceed } from 'hooks'

export const metadata = {
  title: 'chapter_nine.opcodes_three.title',
  navigation_title: 'chapter_nine.opcodes_three.nav_title',
  key: 'CH9OPC3',
}

export default function OpCodes3({ lang }) {
  const proceed = useProceed()
  const t = useTranslations(lang)

  return (
    <ChapterIntro
      className="my-8"
      heading={t('chapter_nine.opcodes_three.heading')}
    >
      <p className="mt-2 text-lg md:text-xl">
        {t('chapter_nine.opcodes_three.paragraph_one')}
      </p>

      <p className="mt-4 text-lg md:text-xl">
        {t('chapter_nine.opcodes_three.paragraph_two')}
      </p>

      <p className="mt-4 text-lg md:text-xl">
        {t('chapter_nine.opcodes_three.paragraph_three')}
      </p>

      <p className="text-lg md:text-xl">
        {t('chapter_nine.opcodes_three.paragraph_four')}
      </p>

      <p className="mt-4 text-lg md:text-xl">
        {t('chapter_nine.opcodes_three.paragraph_five')}
      </p>

      <Button onClick={proceed} classes="mt-10 max-md:w-full">
        {t('shared.next')}
      </Button>
    </ChapterIntro>
  )
}
