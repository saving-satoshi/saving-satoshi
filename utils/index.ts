export { get, post, fetchContext } from './fetch'
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
