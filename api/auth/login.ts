import { SAVING_SATOSHI_TOKEN } from 'config/keys'
import { post, setAndVerifyLocalStorage } from 'utils'

export default async function login(privateKey) {
  try {
    const { token } = await post({
      url: '/v1/auth/login',
      body: {
        private_key: privateKey,
      },
    })
    setAndVerifyLocalStorage(SAVING_SATOSHI_TOKEN, token)

    return true
  } catch (errors) {
    console.error(errors)
    return false
  }
}
