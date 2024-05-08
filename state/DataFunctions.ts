import { useSetAtom, useAtom } from 'jotai'
import { isLoadingDataAtom, dataAtom, currentLanguageAtom } from './state'
import { getData, setData } from 'api/data'
import {
  Language,
  getLanguageFromString,
  getLanguageString,
} from 'lib/SavedCode'
import { useEffect } from 'react'

export const useDataFunctions = () => {
  const setIsLoading = useSetAtom(isLoadingDataAtom)
  const [data, setDataState] = useAtom(dataAtom)
  const [currentLanguage, setCurrentLanguageState] =
    useAtom(currentLanguageAtom)

  const loadData = async (lessonId: string) => {
    if (!lessonId) {
      return
    }
    try {
      setIsLoading(true)
      let loadedData = await getData(lessonId)
      if (loadedData && loadedData?.answer) {
        setDataState((oldData) => [
          ...oldData,
          { lesson_id: lessonId, data: loadedData.answer },
        ])
      }
    } catch (ex) {
      console.error(ex)
    } finally {
      setIsLoading(false)
    }
  }

  const saveData = async (lessonId: string, value: any, userId: number) => {
    try {
      setIsLoading(true)
      await setData(userId, lessonId, value)
    } catch (ex) {
      console.error(ex)
    } finally {
      setIsLoading(false)
    }
  }

  const setCurrentLanguage = (language: Language) => {
    setCurrentLanguageState(language)
    localStorage.setItem('language', getLanguageString(language))
  }

  // Initialize language from localStorage
  useEffect(() => {
    const storedLang = localStorage.getItem('language')
    if (storedLang) {
      setCurrentLanguage(getLanguageFromString(storedLang))
    }
  }, [])

  return {
    loadData,
    saveData,
    currentLanguage,
    setCurrentLanguage,
    isLoading: isLoadingDataAtom,
  }
}
