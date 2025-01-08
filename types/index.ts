import { DifficultyLevel } from 'state/progressState'
import { Base64String } from './classes'
import { TabDetails } from './interfaces'

export * from './enums'
export * from './interfaces'

export type TransactionData = Record<string, TabDetails>

export type SiteConfig = {
  name: string
  links: {
    github: string
    twitter: string
  }
  navItems: NavItem[]
}

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type TabData = {
  id: string
  text: string
  disabled?: boolean
}

export type Translation = {
  [key: string]: string
}

export type Translations = {
  [key: string]: Translation
}

export type Lesson = {
  default: any
  metadata: Object
  translations: Translations
}

export type Chapter = {
  default: any
  metadata: Object
  translations: Translations
}

export type Profile = {
  username: string
  avatar?: string
  description?: string
  value: number
}

export interface ProfileWithHashPower extends Profile {
  hashpower: number
  hashes: number
}

export type ColorGroup = {
  start: number
  end: number
  colorCode: string
}

export type StoredLessonData = {
  answer: string
  code?: Base64String
}

export type EditorRange = {
  start: number
  end: number
}

export type Progress = {
  progress: string
  progressList: string[]
}

export type LessonInState = {
  id: string
  path: string
  completed: boolean
}

export type Difficulty = {
  level: DifficultyLevel
  lessons: LessonInState[]
  completed: boolean
}

export type ChapterWithDifficulties = {
  id: number
  difficulties: Difficulty[]
  completed: boolean
  selectedDifficulty: DifficultyLevel
  hasDifficulty: true
}

export type ChapterWithoutDifficulties = {
  id: number
  lessons: LessonInState[]
  completed: boolean
  hasDifficulty: false
}

export type ChapterInState =
  | ChapterWithDifficulties
  | ChapterWithoutDifficulties

export type CourseProgress = {
  chapters: ChapterInState[]
  currentChapter: number
  currentLesson: string
}

export type SetAtom<Args extends unknown[], Result> = (...args: Args) => Result
