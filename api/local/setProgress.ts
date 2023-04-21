export default async function setProgress(progress: string) {
  try {
    localStorage.setItem('SavingSatoshiProgress', JSON.stringify(progress))
  } catch (errors) {
    console.error(errors)
    return undefined
  }
}
