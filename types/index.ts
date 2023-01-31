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
