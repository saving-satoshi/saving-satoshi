'use client'

import { useTranslations } from 'hooks'
import { Button, ChapterIntro } from 'ui'
import { useSaveAndProceed } from 'hooks'

export const metadata = {
  title: 'chapter_one.genesis_one.title',
  key: 'CH1GEN1',
}

export default function Genesis2({ lang }) {
  const saveAndProceed = useSaveAndProceed()
  const t = useTranslations(lang)

  return (
    <ChapterIntro heading={t('chapter_one.genesis_one.heading')}>
      <p className="mt-2 text-lg md:text-xl">
        {t('chapter_one.genesis_one.paragraph_one')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_one.genesis_one.paragraph_two')}
      </p>

      <Button onClick={saveAndProceed} classes="mt-10 max-md:w-full">
        {t('shared.start')}
      </Button>
    </ChapterIntro>
  )
}
