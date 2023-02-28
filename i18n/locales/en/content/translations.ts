export const translations = {
  chapter_one: {
    en: {
      title: 'Secrets in plain sight',
      paragraph_one:
        'The year is 2139. The very last bitcoin is slated to be mined in two weeks. For months, a final countdown has been taking place in Times Square for the last block when there will be officially no more bitcoin issued.',
      paragraph_two: `And then suddenly, the network comes to a crawl. Instead of the normal ten-minute block interval, blocks are coming in just a few times a day, if not longer. Your mom's bitcoin node stops syncing. The media starts reporting on the situation. It's everywhere on social media.`,
      paragraph_three: `The price of bitcoin is falling. There is a knock at your door, and when you open it, a yellowed, age-weathered envelope has been left for you. There's no name or return address. What could be inside?`,
    },
  },
  chapter_two: {
    en: {
      title: 'The 51% attack',
      paragraph_one:
        'The network outage has to be related to the block subsidy. There’s no way this is a coincidence.',
      paragraph_two:
        'You hop on your computer to do some research on mining when you notice something unusual about the few blocks that are being mined. They all seem to be coming from the same place, possibly even the same mining pool. What happened to the rest of the miners?',
    },
  },
  chapter_three: {
    en: {
      title: 'Claiming your rewards',
      paragraph_one:
        'Phew, that was close. You are still shaking from your battle againstAmestris, yet relieved that a victory was possible.',
      paragraph_two:
        'As you settle at your desk, you take a deep breath and drift off toreplay the day’s events. Your hands keep themselves busy playing withthe mysterious envelope, as you wonder who sent it. Who still usesenvelopes anyways, it’s 2139 after all. Even more curious is that thereis a stamp on it, from 2008...could this be another hint?',
      paragraph_three:
        'Suddenly, you realize that you never claimed the block rewards from yourcompetition with Amestris. Your bitcoin wallet is running low, so now’sa good time to top it up again.',
    },
  },
  chapter_four: {
    en: {
      title: 'Will the real Satoshi please stand up?',
      paragraph_one:
        'A mysterious billionaire is claiming to be Satoshi Nakamoto. Why would Satoshi come forward after all this time? What are the chances Satoshi is even alive?',
      paragraph_two:
        'While the public debate is largely focused on the spectacle, you have an inkling that it might be possible to disarm the claim using your knowledge of cryptography.',
    },
  },
  chapter_five: {
    en: {
      title: 'The keyholder',
    },
  },
  chapter_six: {
    en: {
      title: 'Offense is the best defense',
    },
  },
  chapter_seven: {
    en: {
      title: 'Twentyone',
    },
  },
  chapter_eight: {
    en: {
      title: 'A matter of sustainability',
    },
  },
  chapter_nine: {
    en: {
      title: `Don't compute, verify.`,
    },
  },
  chapter_ten: {
    en: {
      title: '10 billion connections',
    },
  },
  reaping_rewards: {
    en: {
      title: 'Of blocks and miners',
      subtitle:
        '"To understand the mystery and magic, you must start at the beginning…"',
      paragraph_one: `Satoshi, the pseudonymous inventor of bitcoin, also mined the first bitcoin block. He left you a hidden clue in the very first bitcoin transaction that was ever made.`,
      paragraph_two: `Each block in the bitcoin blockchain contains a set of transactions. A nice way to view these blocks and the things they contain is by using a block explorer.`,
    },
  },
  done: {
    en: {
      title: 'You did it!!!',
      description:
        'Amazing. You completed the first chapter and learned a lot about hashes and transactions. Are you ready for more?',
    },
  },
  genesis_one: {
    en: {
      title: 'Genesis',
      heading: 'Find block 0',
      paragraph_one: `Let's find the very first block in the Bitcoin blockchain. Go to a <Tooltip content="genesis_one.tooltip_block_explorer" href="https://blockstream.info" className="underline">block explorer</Tooltip> and search for ’0’. This will take you to the block at height 0. As you can see, this block only contains one transaction.`,
      paragraph_two: `Open up the transaction so you can take a closer look at the details. On the left is an input called 'Coinbase'. Inside that is a field called 'ScriptSig'. Find the <Tooltip content="genesis_one.tooltip_hex" className="underline">HEX</Tooltip> representation and paste it below.`,
      tooltip_block_explorer: 'We recommend https://blockstream.info/',
      tooltip_hex:
        'Short for hexadecimal, a numeral system that represents numbers using a base of 16.',
      view_block_0: 'View Block 0',
      placeholder: 'Paste the ScriptSig HEX Representation',
    },
  },
  genesis_two: {
    en: {
      title: 'Genesis',
      heading: 'Let’s make sense of this',
      waiting_for_input: 'Waiting for you to write and run the script...',
      success: `Interesting! The message references a news article on the same day Satoshi mined the genesis block. This gives us an important clue about Satoshi's motivation for creating Bitcoin. You can read more about it <Link href="https://bitcoinmagazine.com/culture/ten-years-later-reflection-bitcoins-genesis-and-satoshis-timing" className="underline">here</Link>.`,
    },
  },
  transacting_one: {
    en: {
      title: 'Transacting',
      heading: 'What’s in a transaction?',
      paragraph_one:
        'Bitcoin is censorship resistant money. Anybody can send money by broadcasting a transaction to the network. After broadcast, transactions are packaged up into blocks by miners. Miners compete against other miners for the privilege of building on the chain.',
      paragraph_two:
        'Transactions have two parts: inputs and outputs. In the previous exercise we decoded a secret message found inside a transaction input. This time we’ll decode a message that belongs to the output part.',
      paragraph_three:
        'For the following transaction, identify the output of type OP_RETURN.',
    },
  },
  transacting_two: {
    en: {
      title: 'Transacting',
      heading: 'OP_RETURN',
      paragraph_one:
        'For the following transaction, identify the output of type OP_RETURN.',
      link: 'View transaction',
      input_challenge_label: 'Enter the OP_RETURN type',
    },
  },
  transacting_three: {
    en: {
      title: 'Transacting',
      heading: 'Another secret message',
      paragraph_one:
        'Then, look for the hex representation of the ScriptPubKey field.',
      paragraph_two:
        'Once you’ve found it, decode the hidden message, just like we did in the previous exercise.',
      paragraph_three: 'And remember, ’Bitcoin is for everyone’.',
      terminal_challenge_success:
        'That’s correct! Nice work. We don’t know why tacos were so important to the anonymous sender of this transaction, but here we are. And it’s an admirable goal at least.',
      terminal_challenge_lines:
        'Enter your commands here and press Enter...\n\n Note that $scriptPubKeyHex is not defined for you this time. You’ll need to replace this variable in the code with the value you found in the previous challenge',
      terminal_challenge_error:
        'Almost. Take another look to find the correct value',
    },
  },
}
