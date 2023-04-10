import { post } from 'utils'

export default async function logout() {
  try {
    const res = await post({
      url: '/v1/auth/logout',
      body: {},
      includeToken: true,
    })

    window.localStorage.removeItem('saving-satoshi-token')

    return true
  } catch (errors) {
    console.error(errors)
    return false
  }
}
