import { get } from 'utils'

export default async function getSession() {
  try {
    const res = await get({
      url: '/v1/auth/session',
      includeToken: true,
    })

    return res
  } catch (errors) {
    console.error(errors)
    return undefined
  }
}
