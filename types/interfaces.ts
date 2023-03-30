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
