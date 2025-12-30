import { CourseProgress } from 'types'
import { put } from 'utils'

export default async function setProgress(
  progress: CourseProgress
): Promise<void> {
  try {
    const res = await put({
      url: '/v1/progress',
      includeToken: true,
      body: {
        progress_state: progress,
      },
    })

    return res
  } catch (errors) {
    console.error('Failed to save progress to backend:', errors)
    return undefined
  }
}
