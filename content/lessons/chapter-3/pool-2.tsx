'use client'

import { useEffect } from 'react'
import { useTranslations } from 'hooks'
import { ChapterIntro } from 'ui'
import { Button } from 'shared'
import { useSaveAndProceed } from 'hooks'

export const metadata = {
  title: 'chapter_three.pool_two.title',
  key: 'CH3POL2',
}

export default function Pool2({ lang }) {
  const saveAndProceed = useSaveAndProceed()
  const t = useTranslations(lang)

  useEffect(() => {
    const rootStyles = document.documentElement.style
    rootStyles.setProperty('--CH3SOL1-bg', '#411e4f')
    rootStyles.setProperty('--CH3SOL1-gradient-start', '#3C1843')
    rootStyles.setProperty('--CH3SOL1-gradient-stop', '#45235a')
  }, [])

  return (
    <ChapterIntro
      className="my-8"
      heading={t('chapter_three.pool_two.heading')}
    >
      <p className="mt-2 text-lg md:text-xl">
        {t('chapter_three.pool_two.paragraph_one')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_three.pool_two.paragraph_two')}
      </p>

      <ul className="pl-2.5">
        <li className="flex flex-row text-lg md:text-xl">
          &#x2022;
          <p className="pl-2.5">{t('chapter_three.pool_two.list_one')}</p>
        </li>

        <li className="flex flex-row text-lg md:text-xl">
          &#x2022;
          <p className="pl-2.5">{t('chapter_three.pool_two.list_two')}</p>
        </li>

        <li className="flex flex-row text-lg md:text-xl">
          &#x2022;
          <p className="pl-2.5">{t('chapter_three.pool_two.list_three')}</p>
        </li>
      </ul>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_three.pool_two.paragraph_three')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_three.pool_two.paragraph_four')}
      </p>

      <Button onClick={saveAndProceed} classes="mt-10 max-md:w-full">
        {t('shared.next')}
      </Button>
    </ChapterIntro>
  )
}
