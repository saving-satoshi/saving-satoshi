import { useSetAtom, useAtom } from 'jotai'
import { isLoadingDataAtom, dataAtom, currentLanguageAtom } from './state'
import { getData, setData } from 'api/data'
import { Language } from 'lib/SavedCode'

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
          { lesson_id: lessonId, data: loadedData!.answer },
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
  }

  return {
    loadData,
    saveData,
    currentLanguage,
    setCurrentLanguage,
    isLoading: isLoadingDataAtom,
  }
}
