import { Language } from 'lib/SavedCode'
import { EditorRange, LessonDirection, LessonView } from 'types'

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
    defaultCode?: string | string[]
    defaultFunction: EditorFunction
    validate: (answer: any) => Promise<any[]>
    constraints?: any
    hiddenRange?: number[]
    rangeToNotCollapse?: EditorRange[]
  }
}

export interface PlainEditorLanguages {
  [language: string]: {
    defaultCode?: string | string[]
  }
}

export interface EditorConfig {
  defaultLanguage: string
  languages: EditorLanguages
}

export interface PlainEditorConfig {
  defaultLanguage: string
  languages: PlainEditorLanguages
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
  data: string
}

export interface ModalState {
  open: boolean
  meta: any
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
