import { atom } from 'jotai'

export type ToastType = 'success' | 'error' | 'info'

export interface ToastItem {
  id: string
  type: ToastType
  message: string
  duration?: number
}

export const toastsAtom = atom<ToastItem[]>([])
