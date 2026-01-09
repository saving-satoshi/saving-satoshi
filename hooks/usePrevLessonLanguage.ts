'use client'

import { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { getData } from 'api/data'
import { detectLanguage, Language } from 'lib/SavedCode'
import { currentLanguageAtom } from 'state/state'

export default function usePrevLessonLanguage(prevLessonId: string) {
  const [prevData, setPrevData] = useState<any>({ lesson_id: '', data: '' })
  const [isLoading, setIsLoading] = useState(true)
  const [detectedLang, setDetectedLang] = useState<Language>(
    Language.JavaScript
  )
  const [language, setCurrentLanguage] = useAtom(currentLanguageAtom)

  useEffect(() => {
    const fetchPrevLesson = async () => {
      const data = await getData(prevLessonId)
      if (data?.code) {
        const decodedData = data.code.getDecoded()
        setPrevData({
          lesson_id: prevLessonId,
          data: decodedData,
        })

        const detected = detectLanguage(decodedData)
        setDetectedLang(detected)

        if (detected !== Language.Unknown) {
          setCurrentLanguage(detected)
        }
      } else {
        setDetectedLang(language)
      }
      setIsLoading(false)
    }

    fetchPrevLesson()
  }, [prevLessonId, setCurrentLanguage])

  return { prevData, isLoading, detectedLanguage: detectedLang }
}
