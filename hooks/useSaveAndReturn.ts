'use client'

import { useRouter } from 'next/navigation'
import { useLocalizedRoutes } from 'hooks'
import { useAtomValue } from 'jotai'
import { currentChapterAtom } from 'state/progressState'

export default function useSaveAndReturn() {
  const { chaptersUrl } = useLocalizedRoutes()
  const router = useRouter()
  const chapterId = useAtomValue(currentChapterAtom)

  const saveAndReturn = async () => {
    router.push(`${chaptersUrl}#chapter-${chapterId + 1}`)
  }

  return saveAndReturn
}
