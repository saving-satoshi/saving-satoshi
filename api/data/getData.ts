import { StoredLessonData } from 'types'
import { Base64String } from 'types/classes'
import { get } from 'utils'

export default async function getData(
  lessonId
): Promise<StoredLessonData | undefined> {
  try {
    const res = await get({
      url: `/v1/data/${lessonId}`,
      includeToken: true,
    })

    return {
      answer: res.data.answer,
      code: new Base64String(res.data.code, true) as Base64String,
    }
  } catch (errors) {
    console.error(errors)
    return undefined
  }
}
