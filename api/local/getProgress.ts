// TO BE Edited

export default async function getProgressLocal() {
  try {
    const res = localStorage.getItem('SavingSatoshiProgress') ?? 'CH1INT1'

    return res
  } catch (errors) {
    console.error(errors)
    return undefined
  }
}
