import { LessonDirection, LessonView } from 'types'

export interface ChapterContextType {}

export interface LessonContextType {
  direction: LessonDirection
  activeView: LessonView
  setActiveView: Function
}

export interface Modals {
  [key: string]: boolean
}

export interface ModalContextType {
  modals: Modals
}

export interface EditorLanguages {
  [language: string]: {
    program: string
    defaultCode?: string
  }
}

export interface EditorConfig {
  defaultLanguage: string
  languages: EditorLanguages
}
