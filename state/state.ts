import { atom, createStore } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import {
  Language,
  getLanguageString,
  getLanguageFromString,
} from 'lib/SavedCode'
import { Data } from 'types'

export const isLoadingDataAtom = atom<boolean>(true)
export const dataAtom = atom<Data[]>([])
export const currentLanguageAtom = atomWithStorage<Language>(
  'language',
  Language.JavaScript,
  {
    getItem: (key: string) => {
      const storedValue = localStorage.getItem(key)
      if (storedValue === null) return Language.JavaScript
      return getLanguageFromString(storedValue)
    },
    setItem: (key: string, value: Language) => {
      localStorage.setItem(key, getLanguageString(value))
    },
    removeItem: (key: string) => {
      localStorage.removeItem(key)
    },
  }
)

export enum Modal {
  Account = 'account',
  SignIn = 'signin',
  SignUp = 'signup',
  Help = 'help',
}

export const modalsAtom = atom({
  [Modal.Account]: { open: false, meta: undefined },
  [Modal.SignIn]: { open: false, meta: undefined },
  [Modal.SignUp]: { open: false, meta: undefined },
  [Modal.Help]: { open: false, meta: undefined },
})

export const accountAtom = atom<any | undefined>(undefined)

export const presentPageAtom = atom('CH1INT1') // Default Page

export const isAuthLoadingAtom = atom<boolean>(false)

export const isLoadingFeaturesAtom = atom<boolean>(false)
export const featuresAtom = atom<{ [key: string]: number }>({})

export const store = createStore()
