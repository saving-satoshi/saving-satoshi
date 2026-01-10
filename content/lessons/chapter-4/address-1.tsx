'use client'

import { useProceed, useTranslations } from 'hooks'
import { ChapterIntro, CodeExample, HolocatQuestion } from 'ui'

import { Button } from 'shared'
import { useEffect, useState } from 'react'
import { getData } from 'api/data'
import { Data } from 'types'
import { chapters } from 'content/chapters'

export const metadata = {
  title: 'chapter_four.address_one.title',
  navigation_title: 'chapter_four.address_one.nav_title',
  key: 'CH4ADR1',
}

export default function Address1({ lang }) {
  const proceed = useProceed()
  const t = useTranslations(lang)

  const [prevData, setPrevData] = useState<Data>({ lesson_id: '', data: '' })
  const dataObject = prevData?.data ? prevData?.data : ''
  const [isLoading, setIsLoading] = useState(true)
  const [tooltipVisible, setTooltipVisible] = useState(false)

  function useHoverDevice() {
    const [canHover, setCanHover] = useState(false)

    useEffect(() => {
      const mq = window.matchMedia('(hover: hover)')
      setCanHover(mq.matches)
    }, [])

    return canHover
  }

  const handleMouseEnter = () => {
    setTooltipVisible(true)
  }

  const handleMouseLeave = () => {
    setTooltipVisible(false)
  }

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

  const canHover = useHoverDevice()

  return (
    !isLoading && (
      <ChapterIntro
        className="my-8"
        heading={t('chapter_four.address_one.heading')}
      >
        <p className="mt-2 break-words text-base sm:text-lg md:text-xl">
          {t('chapter_four.address_one.paragraph_one')}
        </p>
        <CodeExample
          className="mt-4 max-w-full overflow-x-auto whitespace-pre-wrap break-all text-sm sm:text-base md:text-lg"code={dataObject}language="shell"/>
          
        <p className="mt-8 inline-block break-words text-base sm:text-lg md:text-xl">
          {t('chapter_four.address_one.paragraph_two')}
          <a
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            href={t('chapter_four.address_one.tooltip_one.link')}
            target="_blank"
            className="inline text-lg italic underline md:text-xl" // Ensuring all links are underlined
          >
            {t('chapter_four.address_one.tooltip_one.highlighted')}
            <HolocatQuestion
              theme={chapters['chapter-4'].metadata.theme}
              inline
              id="target-difficulty"
              question={t('chapter_four.address_one.tooltip_one.question')}
              href={t('chapter_four.address_one.tooltip_one.link')}
              visible={canHover && tooltipVisible}
            />
          </a>
          .
        </p>

        <Button onClick={proceed} classes="mt-10 max-md:w-full">
          {t('shared.next')}
        </Button>
      </ChapterIntro>
    )
  )
}
