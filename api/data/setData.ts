import { put } from 'utils'

export default async function setdata(lessonId: string, value: JSON) {
  try {
    const res = await put({
      url: '/v1/data/save',
      includeToken: true,
      body: {
        lessonId,
        value,
      },
    })

    return res
  } catch (errors) {
    console.error(errors)
    return undefined
  }
}
