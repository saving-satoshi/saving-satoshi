import { defaultProgressState } from 'state/progressState'
import { CourseProgress } from 'types'
import { get } from 'utils'

export default async function getProgress(): Promise<CourseProgress> {
  try {
    const res = await get({
      url: '/v1/progress',
      includeToken: true,
    })

    return res
  } catch (errors) {
    console.error(errors)
    return defaultProgressState
  }
}
