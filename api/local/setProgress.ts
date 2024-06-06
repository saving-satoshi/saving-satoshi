import { Progress } from 'types'

export default async function setProgress(progress: Progress) {
  try {
    localStorage.setItem('SavingSatoshiProgress', JSON.stringify(progress))
  } catch (errors) {
    console.error(errors)
    return undefined
  }
}
