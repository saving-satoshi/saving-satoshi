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
}
