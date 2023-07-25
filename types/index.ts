export * from './enums'
export * from './interfaces'

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
  nonce?: number
}
