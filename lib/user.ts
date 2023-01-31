const crypto = require('crypto')
const Secp256k1 = require('@lionello/secp256k1-js')

export function getUser() {
  if (!process.browser) {
    return
  }
  let result = JSON.parse(window.localStorage.getItem('user'))
  if (!result) {
    result = createUser(null)
  }
  return result
}

export function getUserProgress() {
  const user = getUser()

  if (!user) {
    return null
  }

  return !isUserRegistered() || isUserLoggedIn() ? user.progress : null
}

export function setUserProgress(chapter, lesson) {
  const user = getUser()
  if (user) {
    user.progress.chapter = chapter
    user.progress.lesson = lesson
    saveUser(user)
  }
}

export function setUserAvatar(avatar) {
  const user = getUser()
  if (user) {
    user.avatar = avatar
    saveUser(user)
  }
}

export function setUserRegistered() {
  const user = getUser()
  if (user) {
    user.registered = true
    saveUser(user)
  }
}

function createUser(avatar) {
  let publicKey = null
  let privateKey = null
  do {
    const privateKeyBuf = crypto.randomBytes(32)
    privateKey = Secp256k1.uint256(privateKeyBuf, 16)
    publicKey = Secp256k1.generatePublicKeyFromPrivateKeyData(privateKey)
  } while (
    !publicKey ||
    privateKey.gte(
      Secp256k1.uint256(
        'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141',
        16
      )
    )
  )

  const user = {
    publicKey: publicKey,
    privateKey: privateKey,
    avatar: avatar || 1,
    registered: false,
    progress: {
      chapter: 'chapter-1',
      lesson: 'genesis',
    },
  }

  saveUser(user)
}

export function saveUser(user) {
  if (!process.browser) {
    return
  }
  window.localStorage.setItem('user', JSON.stringify(user))
}

export function isUserLoggedIn() {
  if (!process.browser) {
    return
  }
  return JSON.parse(window.localStorage.getItem('loggedIn')) === true
}

export function isUserRegistered() {
  const user = getUser()

  if (!user) {
    return false
  }

  return user.registered
}

export function loginUser() {
  if (!process.browser) {
    return
  }
  window.localStorage.setItem('loggedIn', 'true')
}

export function logoutUser() {
  if (!process.browser) {
    return
  }
  window.localStorage.setItem('loggedIn', 'false')
}

export function clearUser() {
  if (!process.browser) {
    return
  }
  window.localStorage.removeItem('user')
  window.localStorage.removeItem('loggedIn')
}
