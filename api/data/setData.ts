import { StoredLessonData } from 'types'
import { put } from 'utils'

export default async function setData(
  account_id: number,
  lesson_id: string,
  data: StoredLessonData
) {
  try {
    const res = await put({
      url: '/v1/data',
      includeToken: true,
      body: {
        account_id,
        lesson_id,
        data: {
          answer: data.answer,
          code: data?.code?.getEncoded(),
        },
      },
    })

    return res
  } catch (errors) {
    console.error(errors)
    return undefined
  }
}
