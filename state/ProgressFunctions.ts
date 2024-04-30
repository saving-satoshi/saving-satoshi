import { useAtom, useSetAtom } from 'jotai'
import { progressAtom, isLoadingProgressAtom } from './state'
import { getProgress, setProgress } from 'api/progress'
import { getProgressLocal, setProgressLocal } from 'api/local'
import { keys } from 'lib/progress'

export const useProgressFunctions = () => {
  const [accountProgress, setAccountProgress] = useAtom(progressAtom)
  const setIsLoading = useSetAtom(isLoadingProgressAtom)

  const init = async () => {
    try {
      setIsLoading(true)
      let progress = await getProgress()
      if (progress === keys[0]) {
        progress = await getProgressLocal()
      }
      setAccountProgress(progress)
    } catch (ex) {
      console.error(ex)
    } finally {
      setIsLoading(false)
    }
  }

  const initLocal = async () => {
    try {
      setIsLoading(true)
      const progress = await getProgressLocal()
      if (progress !== keys[0]) {
        setAccountProgress(progress)
      }
    } catch (ex) {
      console.error(ex)
    } finally {
      setIsLoading(false)
    }
  }

  const saveProgress = async (key: string) => {
    const progress = await getProgress()
    if (keys.indexOf(progress) < keys.indexOf(key)) {
      try {
        setIsLoading(true)
        await setProgress(key)
        setAccountProgress(key)
      } catch (ex) {
        console.error(ex)
      } finally {
        setIsLoading(false)
      }
    }
  }

  const saveProgressLocal = async (key: string) => {
    const progress = await getProgressLocal()
    if (keys.indexOf(progress) < keys.indexOf(key)) {
      try {
        setIsLoading(true)
        await setProgressLocal(key)
        setAccountProgress(key)
      } catch (ex) {
        console.error(ex)
      } finally {
        setIsLoading(false)
      }
    }
  }

  return {
    init,
    initLocal,
    saveProgress,
    saveProgressLocal,
    accountProgress,
    isLoading: isLoadingProgressAtom,
  }
}
