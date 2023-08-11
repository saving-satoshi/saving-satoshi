import { get } from 'utils'

export default async function getData(lessonId) {
  try {
    const res = await get({
      url: `/v1/data/load/${lessonId}`,
    })

    return res
  } catch (errors) {
    console.error(errors)
    return undefined
  }
}
