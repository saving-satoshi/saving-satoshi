import * as Genesis1 from './genesis/genesis-1'
import * as Genesis2 from './genesis/genesis-2'
import * as Transacting1 from './transacting/transacting-1'
import * as Transacting2 from './transacting/transacting-2'
import * as Transacting3 from './transacting/transacting-3'
import * as Done from './done'

import { translations as Genesis1Translations } from './genesis/genesis-1/translations'
import { translations as Genesis2Translations } from './genesis/genesis-2/translations'
import { translations as Transacting1Translations } from './transacting/transacting-1/translations'
import { translations as Transacting2Translations } from './transacting/transacting-2/translations'
import { translations as Transacting3Translations } from './transacting/transacting-3/translations'
import { translations as DoneTranslations } from './done/translations'

export const lessons = {
  'genesis-1': Genesis1,
  'genesis-2': Genesis2,
  'transacting-1': Transacting1,
  'transacting-2': Transacting2,
  'transacting-3': Transacting3,
  done: Done,
}

export const translations = [
  Genesis1Translations,
  Genesis2Translations,
  Transacting1Translations,
  Transacting2Translations,
  Transacting3Translations,
  DoneTranslations,
]
