'use client'

import { useProceed, useTranslations } from 'hooks'
import { ChapterIntro } from 'ui'
import { Button } from 'shared'

export const metadata = {
  title: 'chapter_two.hashing_three.title',
  key: 'CH2HSH3',
}

export default function Hashing3({ lang }) {
  const proceed = useProceed()
  const t = useTranslations(lang)

  return (
    <ChapterIntro
      className="my-8"
      heading={t('chapter_two.hashing_three.heading')}
    >
      <ul className="list-disc pl-5">
        <li className="mt-2 text-lg md:text-xl">
          {t('chapter_two.hashing_three.list_one')}
        </li>

        <li className="text-lg md:text-xl">
          {t('chapter_two.hashing_three.list_two')}
        </li>

        <li className="text-lg md:text-xl">
          {t('chapter_two.hashing_three.list_three')}
        </li>
      </ul>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_two.hashing_three.paragraph_one')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_two.hashing_three.paragraph_two')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_two.hashing_three.paragraph_three')}
      </p>

      <Button onClick={proceed} classes="mt-10 max-md:w-full">
        {t('shared.next')}
      </Button>
    </ChapterIntro>
  )
}
