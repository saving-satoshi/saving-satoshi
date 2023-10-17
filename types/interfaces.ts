import { LessonDirection, LessonView } from 'types'

export interface ChapterContextType {}

export interface LessonContextType {
  direction: LessonDirection
  activeView: LessonView
  setActiveView: (view: LessonView) => void
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
    validate: (answer: any) => Promise<any[]>
    constraints: any
    hiddenRange?: number[]
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
  id: number
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
  saveProgress: (key: string) => Promise<void>
  saveProgressLocal: (key: string) => Promise<void>
}

export interface Data {
  lesson_id: string
  value: any
}

export interface DataContextType {
  isLoading: boolean
  data: Data[]
  loadData: (lessonId: string) => void
  saveData: (lessonId: string, value: any) => void
}

export interface FeatureContextType {
  isLoading: boolean
  features: { [key: string]: number }
  isFeatureEnabled: (key: string) => boolean
}

export interface ModalState {
  open: boolean
  meta: any
}

export interface ModalContextType {
  modals: { [name: string]: ModalState }
  open: (name: string, meta?: any) => void
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

export interface KeyPair {
  pub: string
  sec: string
}
