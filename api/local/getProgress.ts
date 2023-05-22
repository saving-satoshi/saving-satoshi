import { defaultProgressContext } from 'providers/ProgressProvider'

export default async function getProgressLocal(): Promise<string> {
  try {
    const progress = localStorage.getItem('SavingSatoshiProgress')

    if (!progress) {
      throw new Error('Could not read progress from LocalStorage')
    }

    const res = progress.replace(/['"]/g, '')

    return res
  } catch (errors) {
    console.error(errors)
    return defaultProgressContext.progress
  }
}
