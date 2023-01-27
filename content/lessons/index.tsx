import * as Genesis from './genesis/genesis'
import * as Genesis2 from './genesis/genesis-2'
import * as Transacting from './transacting/transacting'
import * as Transacting1 from './transacting/transacting-1'
import * as Transacting2 from './transacting/transacting-2'
import * as Done from './done'

const Lessons = {
  genesis: Genesis,
  'genesis-2': Genesis2,
  transacting: Transacting,
  'transacting-1': Transacting1,
  'transacting-2': Transacting2,
  done: Done,
}

export default Lessons
