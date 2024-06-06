import { defaultProgressResponse } from 'api/defaults'
import { Progress } from 'types'
import { get } from 'utils'

export default async function getProgress(): Promise<Progress> {
  try {
    const res = await get({
      url: '/v1/progress',
      includeToken: true,
    })

    return res
  } catch (errors) {
    console.error(errors)
    return defaultProgressResponse
  }
}
