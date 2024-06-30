import { CourseProgress } from 'types'

export default async function setProgress(progress: CourseProgress) {
  try {
    localStorage.setItem('SavingSatoshiProgress', JSON.stringify(progress))
  } catch (errors) {
    console.error(errors)
    return undefined
  }
}
