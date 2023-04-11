import { LessonDirection, LessonView } from 'types'

export interface ChapterContextType {}

export interface LessonContextType {
  direction: LessonDirection
  activeView: LessonView
  setActiveView: Function
}

export interface EditorFunction {
  name: string
  args: string[]
}

export interface EditorLanguages {
  [language: string]: {
    program: string
    defaultCode?: string
    defaultFunction: EditorFunction
    validate: (answer: any) => Promise<boolean>
  }
}

export interface EditorConfig {
  defaultLanguage: string
  languages: EditorLanguages
}

export interface FetchOptions {
  url: string
  headers?: { [key: string]: any }
  includeToken?: boolean
  body?: object
}

export interface Account {
  avatar?: string
  private_key: string
}

export interface AuthContextType {
  account: Account | undefined
  isLoading: boolean
  login: (privateKey: string) => Promise<boolean>
  logout: () => Promise<void>
}

export interface ProgressContextType {
  progress: string
  isLoading: boolean
  saveProgress: (key: string) => void | undefined
}

export interface ModalContextType {
  modals: { [name: string]: boolean }
  open: (name: string) => void
  close: (name: string) => void
}

export interface User {
  publicKey: { x: string; y: string }
  privateKey: any // TODO: figure out the proper type for this
  avatar: number
  registered: boolean
  progress: {
    chapter: string
    lesson: string
  }
}

export interface PublicKey {
  x: string
  y: string
}

export interface PrivateKey {
  length: number
  negative: number
  words: number[]

  toString: (n: number) => string
}

export interface KeyPair {
  pub: PublicKey
  sec: PrivateKey
}
