import { put } from 'utils'

export default async function setProgress(progress: string) {
  try {
    const res = await put({
      url: '/v1/progress',
      includeToken: true,
      body: {
        progress,
      },
    })

    return res
  } catch (errors) {
    console.error(errors)
    return undefined
  }
}
