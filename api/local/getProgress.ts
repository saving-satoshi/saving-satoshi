import { defaultProgressContext } from 'providers/ProgressProvider'

export default async function getProgressLocal(): Promise<string> {
  try {
    const res = localStorage.getItem('SavingSatoshiProgress')

    if (!res) {
      throw new Error('Could not read progress from LocalStorage')
    }

    return res
  } catch (errors) {
    console.error(errors)
    return defaultProgressContext.progress
  }
}
