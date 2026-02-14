export const i18n = {
  defaultLocale: 'en',
  locales: [
    { locale: 'en', label: 'English' },
    { locale: 'es', label: 'Español' },
    { locale: 'nl', label: 'Dutch' },
    { locale: 'hi', label: 'Hindi' },
    { locale: 'de', label: 'German' },
    { locale: 'pt', label: 'Português' },
    { locale: 'fr', label: 'Français' },
    { locale: 'vi', label: 'Tiếng Việt' },
    { locale: 'ko', label: '한국어' },
    { locale: 'ja', label: '日本語' },
    { locale: 'zh_cn', label: '中文' },
  ],
} as const

export type Locale = (typeof i18n)['locales'][number]
