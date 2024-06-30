'use client'

import { useRouter } from 'next/navigation'
import { useLocalizedRoutes } from 'hooks'
import useEnvironment from './useEnvironment'
import { useAtomValue, useSetAtom } from 'jotai'
import {
  nextLessonPathAtom,
  progressToNextLessonAtom,
} from 'state/progressState'

export default function useProceed() {
  const router = useRouter()
  const { isDevelopment } = useEnvironment()
  const routes = useLocalizedRoutes()
  const nextLessonPath = useAtomValue(nextLessonPathAtom)
  const progressToNextLesson = useSetAtom(progressToNextLessonAtom)
  const queryParams = isDevelopment ? '?dev=true' : ''

  const Proceed = async () => {
    const route = routes.chaptersUrl + nextLessonPath + queryParams
    progressToNextLesson()
    router.push(route, { scroll: true })
  }

  return Proceed
}
