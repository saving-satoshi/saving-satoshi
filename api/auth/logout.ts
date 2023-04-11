import { SAVING_SATOSHI_TOKEN } from 'config/keys'
import { post } from 'utils'

export default async function logout() {
  try {
    const res = await post({
      url: '/v1/auth/logout',
      body: {},
      includeToken: true,
    })

    window.localStorage.removeItem(SAVING_SATOSHI_TOKEN)

    return true
  } catch (errors) {
    console.error(errors)
    return false
  }
}
