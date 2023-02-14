'use client'

import { useEffect, useState } from 'react'
import { getUserLessonStatus } from 'lib/content'
import { useUser } from 'hooks'

export const useStatus = (chapterId, lessonId) => {
  const [status, setStatus] = useState(undefined)
  const { user, isLoggedIn, isRegistered } = useUser()
  const userProgress = !isRegistered || isLoggedIn ? user?.progress : null

  useEffect(() => {
    setStatus(getUserLessonStatus(chapterId, lessonId, userProgress))
  }, [chapterId, lessonId, userProgress])

  return status
}
