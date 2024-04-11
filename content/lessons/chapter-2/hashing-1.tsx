'use client'

import { useTranslations, useProceed } from 'hooks'
import { ChapterIntro } from 'ui'
import {} from 'hooks'
import { Button } from 'shared'

export const metadata = {
  title: 'chapter_two.hashing_one.title',
  navigation_title: 'chapter_two.hashing_one.nav_title',
  key: 'CH2HSH1',
}

export default function Hashing1({ lang }) {
  const proceed = useProceed()
  const t = useTranslations(lang)

  return (
    <ChapterIntro className="my-8">
      <p className="mt-2 text-lg md:text-xl">
        {t('chapter_two.hashing_one.paragraph_one')}
      </p>

      <p className="mt-8 break-all text-lg md:text-xl">
        {t('chapter_two.hashing_one.list_one')}
      </p>

      <p className="break-all text-lg md:text-xl">
        {t('chapter_two.hashing_one.list_two')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_two.hashing_one.paragraph_two')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_two.hashing_one.paragraph_three')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_two.hashing_one.paragraph_four')}
      </p>

      <Button onClick={proceed} classes="mt-10 max-md:w-full">
        {t('shared.next')}
      </Button>
    </ChapterIntro>
  )
}
