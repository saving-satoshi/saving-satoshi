export * from './config'

import { translations as Content } from './locales/en/content/translations'
import { translations as Global } from './locales/en/global/translations'
import { translations as UI } from './locales/en/ui/translations'

export const translations = [Content, Global, UI]
