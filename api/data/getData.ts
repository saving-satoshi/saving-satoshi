import { StoredLessonData } from 'types'
import { Base64String } from 'types/classes'
import { get } from 'utils'
import {
  CH6INO4_JS,
  CH6INO4_PY,
  CH6INO5_JS,
  CH6INO5_PY,
  CH6PUT2_JS,
  CH6PUT2_PY,
} from './tempfile'

const lessonCodesToStub = ['CH6INO4', 'CH6INO5', 'CH6PUT2', 'CH6PUT5']

export default async function getData(
  lessonId
): Promise<StoredLessonData | undefined> {
  if (lessonCodesToStub.includes(lessonId)) {
    switch (lessonId) {
      case 'CH6INO4':
        return {
          answer: "console.log('Hello, world!')",
          code: new Base64String(CH6INO4_JS, true) as Base64String,
        }
      case 'CH6INO5':
        return {
          answer: "print('Hello, world!')",
          code: new Base64String(CH6INO5_JS, true) as Base64String,
        }
      case 'CH6PUT2':
        return {
          answer: "console.log('Hello, world!')",
          code: new Base64String(CH6PUT2_JS, true) as Base64String,
        }
      case 'CH6PUT5':
        return {
          answer: "print('Hello, world!')",
          code: new Base64String(CH6PUT2_JS, true) as Base64String,
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
