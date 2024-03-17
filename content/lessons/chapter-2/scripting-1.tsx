'use client'

import { useProceed, useTranslations } from 'hooks'
import { ChapterIntro } from 'ui'
import { Button } from 'shared'
import HolocatQuestion from 'ui/lesson/HolocatQuestion'
import { useEffect, useState } from 'react'
import { chapters } from 'content/chapters'

export const metadata = {
  title: 'chapter_two.scripting_one.title',
  key: 'CH2SCR1',
}

export default function Scripting1({ lang }) {
  const t = useTranslations(lang)
  const proceed = useProceed()
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => {
    setHydrated(true)
  }, [])

  return (
    hydrated && (
      <ChapterIntro
        className="fade-in my-8"
        heading={t('chapter_two.scripting_one.heading')}
      >
        <p className="mt-2 text-lg md:text-xl">
          {t('chapter_two.scripting_one.paragraph_one')}
        </p>

        <p className="mt-8 text-lg md:text-xl">
          {t('chapter_two.scripting_one.paragraph_two')}
        </p>
        <span className="mt-8 inline-block text-lg md:text-xl  ">
          <span className="  ">
            {t('chapter_two.scripting_one.paragraph_three')}
          </span>
          <HolocatQuestion
            theme={chapters['chapter-2'].metadata.theme}
            inline
            id="target-difficulty"
            question={t('chapter_two.scripting_one.tooltip_one.question')}
            link={t('chapter_two.scripting_one.tooltip_one.link')}
          >
            {t('chapter_two.scripting_one.tooltip_one.highlighted')}
          </HolocatQuestion>
        </span>
        <p className="mt-8 text-lg md:text-xl">
          {t('chapter_two.scripting_one.paragraph_four')}
        </p>
        <Button onClick={proceed} classes="mt-10 max-md:w-full">
          {t('shared.next')}
        </Button>
      </ChapterIntro>
    )
  )
}
