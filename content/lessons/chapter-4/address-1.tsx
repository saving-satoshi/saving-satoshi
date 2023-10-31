'use client'

import { useSaveAndProceed, useTranslations } from 'hooks'
import { ChapterIntro, CodeExample } from 'ui'

import { Button } from 'shared'
import { useEffect, useState } from 'react'
import { getData } from 'api/data'
import { Data } from 'types'

export const metadata = {
  title: 'chapter_four.address_one.title',
  key: 'CH4ADR1',
}

export default function Address1({ lang }) {
  const saveAndProceed = useSaveAndProceed()
  const t = useTranslations(lang)

  const [prevData, setPrevData] = useState<Data>({ lesson_id: '', data: '' })
  const dataObject = prevData?.data ? prevData?.data : ''
  const [isLoading, setIsLoading] = useState(true)

  const getPrevLessonData = async () => {
    setPrevData(await getData('CH4PKY4'))
  }

  useEffect(() => {
    getPrevLessonData().finally(() => setIsLoading(false))
  }, [])

  return (
    !isLoading && (
      <ChapterIntro
        className="my-8"
        heading={t('chapter_four.address_one.heading')}
      >
        <p className="mt-2 text-lg md:text-xl">
          {t('chapter_four.address_one.paragraph_one')}
        </p>
        <CodeExample className="mt-4" code={dataObject} language="shell" />
        <p className="mt-8 text-lg md:text-xl">
          {t('chapter_four.address_one.paragraph_two')}
        </p>
        <Button onClick={saveAndProceed} classes="mt-10 max-md:w-full">
          {t('shared.next')}
        </Button>
      </ChapterIntro>
    )
  )
}
