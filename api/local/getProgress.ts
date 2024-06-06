import { defaultProgressResponse } from 'api/defaults'
import { Progress } from 'types'

export default async function getProgressLocal(): Promise<Progress> {
  try {
    const localStorageProgress = localStorage.getItem('SavingSatoshiProgress')

    if (!localStorageProgress) {
      throw new Error('Could not read progress from LocalStorage')
    } else {
      const res = JSON.parse(localStorageProgress)
      return res
    }
  } catch (errors) {
    console.error(errors)
    return defaultProgressResponse
  }
}
