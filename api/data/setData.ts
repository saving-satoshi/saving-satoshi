import { StoredLessonData } from 'types'
import { put } from 'utils'

const SAVE_FAILURE_MESSAGE =
  'Your submission was correct but we were unable to persist the code to the backend. ' +
  'It is needed for future lessons. Please try again.'

export type SaveDataResult = {
  ok: boolean
  message?: string
  data?: any
}

export default async function setData(
  account_id: number,
  lesson_id: string,
  data: StoredLessonData
): Promise<SaveDataResult> {
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

    return {
      ok: true,
      data: res,
    }
  } catch (errors) {
    // log the detailed error from the backend for debugging
    console.error(SAVE_FAILURE_MESSAGE, errors)

    // Return a more helpful message to display to the user
    return {
      ok: false,
      message: SAVE_FAILURE_MESSAGE,
    }
  }
}
