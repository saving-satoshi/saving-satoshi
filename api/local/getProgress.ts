// TO BE Edited

export default async function getProgressLocal() {
  try {
    const res = (
      localStorage.getItem('SavingSatoshiProgress') ?? 'CH1INT1'
    ).replace(/['"]/g, '')

    return res
  } catch (errors) {
    console.error(errors)
    return undefined
  }
}
