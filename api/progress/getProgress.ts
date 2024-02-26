import { defaultProgressContext } from 'contexts/ProgressContext'
import { get } from 'utils'

export default async function getProgress(): Promise<string> {
  try {
    const res = await get({
      url: '/v1/progress',
      includeToken: true,
    })

    return res.progress
  } catch (errors) {
    console.error(errors)
    return defaultProgressContext.progress
  }
}
