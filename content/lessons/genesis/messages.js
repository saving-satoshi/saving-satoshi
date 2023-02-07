import { defineMessages } from 'react-intl'
import { formatMessages } from 'lib/messages'

const messages = defineMessages({
  blockExplorer: 'block explorer',
  blockExplorerTooltipContent: 'We recommend https://blockstream.info/',
  firstParagraph:
    'Let’s find the very first block in the Bitcoin blockchain. Go to a {blockExplorerTooltip} and search for ’0’. This will take you to the block at height 0 you can see, this block only contains one transaction.',
})

export default messages

export const formattedMessages = formatMessages(
  messages,
  'content.lessons.genesis'
)
