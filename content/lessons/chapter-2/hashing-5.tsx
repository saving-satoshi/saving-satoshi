'use client'

import { useSaveAndProceed, useTranslations } from 'hooks'
import { ChapterIntro } from 'ui'
import { Button } from 'shared'

export const metadata = {
  title: 'chapter_two.hashing_five.title',
  key: 'CH2HSH5',
}

export default function Hashing5({ lang }) {
  const saveAndProceed = useSaveAndProceed()
  const t = useTranslations(lang)

  return (
    <ChapterIntro className="my-auto">
      <p className="mt-2 w-full text-center text-xl font-bold sm:w-[28rem] md:text-2xl">
        {t('chapter_two.hashing_five.heading')}
      </p>

      <p className="mt-2.5 w-full break-keep text-center text-lg sm:w-[28rem] md:text-xl">
        {t('chapter_two.hashing_five.paragraph_one')}
      </p>
      <div className="flex justify-center">
        <Button onClick={saveAndProceed} classes="mt-10 max-md:w-full">
          {t('shared.next')}
        </Button>
      </div>
    </ChapterIntro>
  )
}
