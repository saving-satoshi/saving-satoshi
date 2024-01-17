import { StoredLessonData } from 'types'
import { Base64String } from 'types/classes'
import { get } from 'utils'
import {
  INPUT_CLASS_JS,
  INPUT_CLASS_PY,
  OUTPUT_CLASS_JS,
  OUTPUT_CLASS_PY,
  TRANSACTION_CLASS_JS,
  TRANSACTION_CLASS_PY,
  WITNESS_JS,
  WITNESS_PY,
} from './tempfile'

const lessonCodesToStub = ['CH6PUT1', 'CH6INO5', 'CH6PUT2', 'CH6PUT5']

export default async function getData(
  lessonId
): Promise<StoredLessonData | undefined> {
  if (lessonCodesToStub.includes(lessonId)) {
    switch (lessonId) {
      case 'CH6PUT1':
        return {
          answer: "console.log('Hello, world!')",
          code: new Base64String(WITNESS_PY, true) as Base64String,
        }
      case 'CH6INO5':
        return {
          answer: "print('Hello, world!')",
          code: new Base64String(INPUT_CLASS_PY, true) as Base64String,
        }
      case 'CH6PUT2':
        return {
          answer: "console.log('Hello, world!')",
          code: new Base64String(OUTPUT_CLASS_PY, true) as Base64String,
        }
      case 'CH6PUT5':
        return {
          answer: "print('Hello, world!')",
          code: new Base64String(TRANSACTION_CLASS_PY, true) as Base64String,
        }
    }
  }
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
