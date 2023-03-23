export const i18n = {
  defaultLocale: 'en',
  locales: [
    { locale: 'en', label: 'English' },
    { locale: 'nl', label: 'Dutch' },
  ],
} as const

export type Locale = typeof i18n['locales'][number]
