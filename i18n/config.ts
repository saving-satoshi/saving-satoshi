export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'nl'],
  languages: ['English', 'Dutch'],
} as const

export type Locale = typeof i18n['locales'][number]
