'use client'

import { useEffect, useState } from 'react'
import { getUserLessonStatus } from 'lib/content'

export default function useStatus(chapterId, lessonId) {
  const [status, setStatus] = useState(undefined)

  useEffect(() => {
    setStatus(getUserLessonStatus(chapterId, lessonId))
  }, [chapterId, lessonId])

  return status
}
