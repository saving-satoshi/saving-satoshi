import { CourseProgress } from 'types'

export default async function setProgress(progress: CourseProgress) {
  try {
    const serialized = JSON.stringify(progress)
    localStorage.setItem('SavingSatoshiProgress', serialized)
  } catch (errors) {
    console.error('Failed to save progress to localStorage:', errors)
    return undefined
  }
}
