'use client'

import { useProceed, useTranslations } from 'hooks'
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
  const proceed = useProceed()
  const t = useTranslations(lang)

  const [prevData, setPrevData] = useState<Data>({ lesson_id: '', data: '' })
  const dataObject = prevData?.data ? prevData?.data : ''
  const [isLoading, setIsLoading] = useState(true)

  const getPrevLessonData = async () => {
    const data = await getData('CH4PKY4')
    if (data?.answer) {
      setPrevData({
        lesson_id: 'CH4PKY4',
        data: data.answer,
      })
    }
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
        <Button onClick={proceed} classes="mt-10 max-md:w-full">
          {t('shared.next')}
        </Button>
      </ChapterIntro>
    )
  )
}
