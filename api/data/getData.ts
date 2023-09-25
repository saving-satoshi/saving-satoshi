import { get } from 'utils'

export default async function getData(lessonId) {
  try {
    const res = await get({
      url: `/v1/data/${lessonId}`,
      includeToken: true,
    })

    return res
  } catch (errors) {
    console.error(errors)
    return undefined
  }
}
