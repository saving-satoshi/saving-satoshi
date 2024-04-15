import { atom } from 'jotai'

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
