import { CourseProgress } from 'types'

export default async function getProgressLocal(): Promise<CourseProgress | null> {
  try {
    const localStorageProgress = localStorage.getItem('SavingSatoshiProgress')

    if (!localStorageProgress) {
      return null
    }

    return JSON.parse(localStorageProgress)
  } catch (errors) {
    console.error(errors)
    return null
  }
}
