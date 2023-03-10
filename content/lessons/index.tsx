import * as Genesis1 from './genesis/genesis-1'
import * as Genesis2 from './genesis/genesis-2'
import * as Transacting1 from './transacting/transacting-1'
import * as Transacting2 from './transacting/transacting-2'
import * as Transacting3 from './transacting/transacting-3'
import * as Done from './done'
import * as Success1 from ./success1

export const lessons = {
  'genesis-1': Genesis1,
  'success1': Success1,
  'genesis-2': Genesis2,
  'transacting-1': Transacting1,
  'transacting-2': Transacting2,
  'transacting-3': Transacting3,
  done: Done,
}
