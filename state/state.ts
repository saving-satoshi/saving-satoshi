import { atom } from 'jotai'
import { keys } from 'lib/progress'

export enum Modal {
  Account = 'account',
  SignIn = 'signin',
  SignUp = 'signup',
}

export const modalsAtom = atom({
  [Modal.Account]: { open: false, meta: undefined },
  [Modal.SignIn]: { open: false, meta: undefined },
  [Modal.SignUp]: { open: false, meta: undefined },
})

export const accountAtom = atom<any | undefined>(undefined)

export const isAuthLoadingAtom = atom<boolean>(false)

export const isLoadingFeaturesAtom = atom<boolean>(false)
export const featuresAtom = atom<{ [key: string]: number }>({})

export const defaultProgressContext = {
  progress: keys[0],
  isLoading: true,
  saveProgress: (key: string) => Promise.resolve(),
  saveProgressLocal: (key: string) => Promise.resolve(),
}
export const isLoadingProgressAtom = atom<boolean>(false)
export const progressAtom = atom<string>(keys[0])
