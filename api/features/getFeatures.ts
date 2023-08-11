import { get } from 'utils'

export default async function getFeatures() {
  try {
    const res = await get({
      url: '/v1/features',
    })

    return res
  } catch (errors) {
    console.error(errors)
    return undefined
  }
}
