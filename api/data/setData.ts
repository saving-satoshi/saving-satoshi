import { put } from 'utils'

export default async function setData(
  account_id: number,
  lesson_id: string,
  data: string
) {
  try {
    const res = await put({
      url: '/v1/data/save',
      includeToken: true,
      body: {
        account_id,
        lesson_id,
        data,
      },
    })

    return res
  } catch (errors) {
    console.error(errors)
    return undefined
  }
}
