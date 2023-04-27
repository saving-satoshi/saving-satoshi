export default async function setProgress(progress: string) {
  try {
    localStorage.setItem('SavingSatoshiProgress', progress)
  } catch (errors) {
    console.error(errors)
    return undefined
  }
}
