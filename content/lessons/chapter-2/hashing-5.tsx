'use client'

import { useSaveAndProceed, useTranslations } from 'hooks'
import { ChapterIntro } from 'ui'
import { Button } from 'shared'

export const metadata = {
  title: 'chapter_two.hashing_one.title',
  key: 'CH2HSH5',
}

export default function Hashing5({ lang }) {
  const saveAndProceed = useSaveAndProceed()
  const t = useTranslations(lang)

  return (
    <ChapterIntro>
      <div className="flex flex-col justify-center">
        <p className="mt-2 text-center text-xl md:text-2xl">
          {t('chapter_two.hashing_five.heading')}
        </p>

        <p className="mt-2.5 break-keep text-center text-lg md:text-xl">
          {t('chapter_two.hashing_five.paragraph_one')}
        </p>
        <div className="flex justify-center">
          <Button onClick={saveAndProceed} classes="mt-10 max-md:w-full">
            {t('shared.next')}
          </Button>
        </div>
      </div>
    </ChapterIntro>
  )
}
