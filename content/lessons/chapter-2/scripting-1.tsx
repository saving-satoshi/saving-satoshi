'use client'

import { useSaveAndProceed, useTranslations } from 'hooks'
import { Button, ChapterIntro } from 'ui'

export const metadata = {
  title: 'chapter_two.scripting_one.title',
  key: 'CH2SCR1',
}

export default function Scripting1({ lang }) {
  const t = useTranslations(lang)
  const saveAndProceed = useSaveAndProceed()

  return (
    <ChapterIntro heading={t('chapter_two.scripting_one.heading')}>
      <p className="mt-2 text-lg md:text-xl">
        {t('chapter_two.scripting_one.paragraph_one')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_two.scripting_one.paragraph_two')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_two.scripting_one.paragraph_three')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_two.scripting_one.paragraph_four')}
      </p>

      <Button onClick={saveAndProceed} classes="mt-10 max-md:w-full">
        {t('shared.next')}
      </Button>
    </ChapterIntro>
  )
}
