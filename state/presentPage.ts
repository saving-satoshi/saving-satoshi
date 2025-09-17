import { useSetAtom } from 'jotai'
import { presentPageAtom } from './state'

export const usePresentFunctions = () => {
  const setPresentLesson = useSetAtom(presentPageAtom)

  const presentLesson = (name: string) => {
    setPresentLesson(name)
  }

  return { presentLesson }
}
