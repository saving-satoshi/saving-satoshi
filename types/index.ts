export * from './enums'
export * from './interfaces'

// TODO add contributors
export type SiteConfig = {
  name: string
  links: {
    github: string
    twitter: string
  }
}

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type SectionsConfig = {
  mainNav: NavItem[]
}

export type TabData = {
  id: string
  text: string
  disabled?: boolean
}

export type Lesson = {
  title: string
  lessonId: string
}

export type Chapter = {
  default: any
  meta: Object
}
