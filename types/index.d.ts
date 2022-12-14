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
