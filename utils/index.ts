export { get, put, post } from './fetch'
export { default as url } from './url'

export const isWithinRect = (
  { x, y }: { x: number; y: number },
  rect: { top: number; bottom: number; left: number; right: number }
) => {
  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
}

export const modifyRect = (
  rect: DOMRect,
  offset: { top?: number; bottom?: number }
) => {
  const result = { ...rect.toJSON() }

  if ('top' in offset) {
    result.top += offset.top
  }

  if ('bottom' in offset) {
    result.bottom += offset.bottom
  }

  return result
}

export const clamp = (value: number, min: number, max: number) => {
  return Math.max(min, Math.min(value, max))
}

export const sleep = (time: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

export function setAndVerifyLocalStorage(
  key,
  value,
  maxAttempts = 10,
  interval = 50
) {
  return new Promise((resolve, reject) => {
    localStorage.setItem(key, value)

    let attempts = 0
    const checkValue = () => {
      attempts++
      const storedValue = localStorage.getItem(key)

      if (storedValue === value) {
        resolve(storedValue)
      } else if (attempts >= maxAttempts) {
        reject(
          new Error(
            `Failed to verify localStorage value after ${maxAttempts} attempts`
          )
        )
      } else {
        setTimeout(checkValue, interval)
      }
    }

    checkValue()
  })
}

export const uuid = () =>
  `id-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
