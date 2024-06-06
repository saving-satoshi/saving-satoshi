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
      if (progress.progress === keys[0]) {
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
      const { progress, progressList } = await getProgressLocal()
      if (progress !== keys[0]) {
        setAccountProgress({
          progress,
          progressList: [...progressList, progress],
        })
      }
    } catch (ex) {
      console.error(ex)
    } finally {
      setIsLoading(false)
    }
  }

  const saveProgress = async (key: string) => {
    const { progress, progressList } = await getProgress()
    const { progress: localProgress } = await getProgressLocal()

    // Determine the furthest progress
    const currentProgressIndex = keys.indexOf(progress)
    const localProgressIndex = keys.indexOf(localProgress)
    const providedKeyIndex = keys.indexOf(key)

    const furthestProgressIndex = Math.max(
      currentProgressIndex,
      localProgressIndex,
      providedKeyIndex
    )
    const furthestProgressKey = keys[furthestProgressIndex]

    if (currentProgressIndex < furthestProgressIndex) {
      try {
        setIsLoading(true)
        await setProgress({
          progress: furthestProgressKey,
          progressList: [...progressList, furthestProgressKey],
        })
        setAccountProgress({
          progress: furthestProgressKey,
          progressList: [...progressList, furthestProgressKey],
        })
      } catch (ex) {
        console.error(ex)
      } finally {
        setIsLoading(false)
      }
    }
  }

  const saveProgressLocal = async (key: string) => {
    const { progress, progressList } = await getProgressLocal()
    if (keys.indexOf(progress) < keys.indexOf(key)) {
      try {
        setIsLoading(true)
        await setProgressLocal({
          progress: key,
          progressList: [...progressList, key],
        })
        setAccountProgress({
          progress: key,
          progressList: [...progressList, key],
        })
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
