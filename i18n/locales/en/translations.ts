export const translations = {
  shared: {
    next: 'Continue',
    copy: 'Copy',
    chapter: 'Chapter',
    challenge: 'Challenge',
    coming_soon: 'Coming soon',
    start_chapter: 'Start chapter',
  },

  chapter_one: {
    title: 'Secrets in plain sight',
    paragraph_one:
      'The year is 2139. The very last bitcoin is slated to be mined in two weeks. For months, a final countdown has been taking place in Times Square for the last block when there will be officially no more bitcoin issued.',
    paragraph_two: `And then suddenly, the network comes to a crawl. Instead of the normal ten-minute block interval, blocks are coming in just a few times a day, if not longer. Your mom's bitcoin node stops syncing. The media starts reporting on the situation. It's everywhere on social media.`,
    paragraph_three: `The price of bitcoin is falling. There is a knock at your door, and when you open it, a yellowed, age-weathered envelope has been left for you. There's no name or return address. What could be inside?`,
  },

  chapter_two: {
    title: 'The 51% attack',
    paragraph_one:
      'The network outage has to be related to the block subsidy. There’s no way this is a coincidence.',
    paragraph_two:
      'You hop on your computer to do some research on mining when you notice something unusual about the few blocks that are being mined. They all seem to be coming from the same place, possibly even the same mining pool. What happened to the rest of the miners?',
  },

  chapter_three: {
    title: 'Claiming your rewards',
    paragraph_one:
      'Phew, that was close. You are still shaking from your battle againstAmestris, yet relieved that a victory was possible.',
    paragraph_two:
      'As you settle at your desk, you take a deep breath and drift off toreplay the day’s events. Your hands keep themselves busy playing withthe mysterious envelope, as you wonder who sent it. Who still usesenvelopes anyways, it’s 2139 after all. Even more curious is that thereis a stamp on it, from 2008...could this be another hint?',
    paragraph_three:
      'Suddenly, you realize that you never claimed the block rewards from yourcompetition with Amestris. Your bitcoin wallet is running low, so now’sa good time to top it up again.',
  },

  chapter_four: {
    title: 'Will the real Satoshi please stand up?',
    paragraph_one:
      'A mysterious billionaire is claiming to be Satoshi Nakamoto. Why would Satoshi come forward after all this time? What are the chances Satoshi is even alive?',
    paragraph_two:
      'While the public debate is largely focused on the spectacle, you have an inkling that it might be possible to disarm the claim using your knowledge of cryptography.',
  },

  chapter_five: {
    title: 'The keyholder',
  },

  chapter_six: {
    title: `Offense is the best defense`,
  },

  chapter_seven: {
    title: `Twentyone`,
  },

  chapter_eight: {
    title: 'A matter of sustainability',
  },

  chapter_nine: {
    title: `Don't compute, verify.`,
  },

  chapter_ten: {
    title: '10 billion connections',
  },

  reaping_rewards: {
    title: 'Of blocks and miners',
    subtitle:
      '"To understand the mystery and magic, you must start at the beginning…"',
    paragraph_one: `Moments later, your Hover Screen activates.`,
    paragraph_two: `—Deborah Chunk: “Thomas Vanderpool. As the CEO of BitRey, you run one of the largest bitcoin mining pools in the world. You also manufacture bitcoin mining machines. What is happening? Is bitcoin dying?”`,
    paragraph_three: `—Vanderpool: “Yes I do, Deborah. Like my daddy and his daddy before him. The Vanderpoole’s have been mining since Block 21,000. That’s why I can confidently say that miners across the world are causing these delays by turning off their machines. This is a protest. No one wants bitcoin to stop being issued at 21 million. We cannot survive on fees alone.”`,
  },

  done: {
    title: 'You did it!!!',
    description:
      'Amazing. You completed the first chapter and learned a lot about hashes and transactions. Are you ready for more?',
  },

  genesis_one: {
    title: 'Genesis',
    heading: 'Find block 0',
    paragraph_one: `Let's find the very first block in the Bitcoin blockchain. Go to a <Tooltip id="genesis_one_paragraph_one" content="genesis_one.tooltip_block_explorer" className="underline">block explorer</Tooltip> and search for ’0’. This will take you to the block at height 0. As you can see, this block only contains one transaction.`,
    paragraph_two: `Open up the transaction so you can take a closer look at the details. On the left is an input called 'Coinbase'. Inside that is a field called 'ScriptSig'. Find the <Tooltip id="genesis_one_paragraph_two" content="genesis_one.tooltip_hex" className="underline">HEX</Tooltip> representation and paste it below.`,
    tooltip_block_explorer:
      'A <a href="https://bitcoinops.org/en/topics/block-explorers/" target="_blank" rel="noreferrer">block explorer</a> is a useful tool to quickly look up information about bitcoin transactions.',
    tooltip_hex:
      'Short for hexadecimal, a numeral system that represents numbers using a base of 16.',
    view_block_0: 'View Block 0',
    placeholder: 'Paste the ScriptSig HEX Representation',
  },

  genesis_two: {
    title: 'Genesis',
    heading: 'Let’s make sense of this',
    waiting_for_input: 'Waiting for you to write and run the script...',
    success: `Interesting! The message references a news article on the same day Satoshi mined the genesis block. This gives us an important clue about Satoshi's motivation for creating Bitcoin. You can read more about it <Link href="https://en.bitcoin.it/wiki/Genesis_block" className="underline">here</Link>.`,
  },

  transacting_one: {
    title: 'Transacting',
    heading: 'What’s in a transaction?',
    paragraph_one:
      'Bitcoin is censorship resistant money. Anybody can send money by broadcasting a transaction to the network. After broadcast, transactions are packaged up into blocks by miners. Miners compete against other miners for the privilege of building on the chain.',
    paragraph_two:
      'Transactions have two parts: inputs and outputs. In the previous exercise we decoded a secret message found inside a transaction input. This time we’ll decode a message that belongs to the output part.',
    paragraph_three:
      'For the following transaction, identify the output of type OP_RETURN.',
  },

  transacting_two: {
    title: 'Transacting',
    heading: 'OP_RETURN',
    paragraph_one:
      'For the following transaction, identify the output of type OP_RETURN.',
    link: 'View transaction',
    input_challenge_label: 'Enter the OP_RETURN type',
  },

  transacting_three: {
    title: 'Transacting',
    heading: 'Another secret message',
    paragraph_one:
      'Then, look for the hex representation of the ScriptPubKey field.',
    paragraph_two:
      'Once you’ve found it, decode the hidden message, just like we did in the previous exercise.',
    paragraph_three: 'And remember, ’Bitcoin is for everyone’.',
    terminal_challenge_success:
      'That’s correct! Nice work.\n\n As you can see, the clue is an address. Go to it.\n\n There you’ll find an abandoned warehouse with all the tools you need to fight BitRey and bring equilibrium back to bitcoin.\n\n Your next challenge awaits you.',
    terminal_challenge_lines:
      'Enter your commands here and press Enter...\n\n Note that $scriptPubKeyHex is not defined for you this time. You’ll need to replace this variable in the code with the value you found in the previous challenge',
    terminal_challenge_error:
      'Almost. Take another look to find the correct value',
  },

  end: {
    save: 'Save my progress',
    next: 'Continue without saving',
  },

  challenge_list: {
    coming_soon: 'Coming soon. Hang tight.',
  },

  chapter: {
    chapter_locked_one: 'Complete Chapter',
    chapter_locked_two: 'to unlock.',
  },

  hero: {
    title: 'Saving Satoshi',
    description: 'Code your way through the mysteries of bitcoin.',
    start_journey: 'Start the demo',
    tell_more: 'Tell me more',
  },

  footer: {
    paragraph_one: 'An open-source production by the bitcoin community.',
    link: 'Check the code',
  },

  navbar: {
    intro: 'Intro',
    chapter: 'Chapter',
    chapter_complete: 'Chapter complete',
    challenge: 'Challenge',
  },

  modal_login: {
    heading: 'Load your progress',
    paragraph_one:
      'Enter your personal code below to restore your chapter and challenge progress, as well as your avatar.',
    clear: 'No code yet?',
    prompt: 'Enter your code',
    confirm: 'Load my progress',
    paragraph_two:
      'Sorry, that’s not the right code for the progress stored in this browser.',
    paragraph_three: 'No code yet or want to start again?',
    quit: 'Clear save progress.',
    success: 'Progress loaded',
    success_message: 'You’re all set to continue with Chapter',
  },

  modal_logout: {
    heading: 'You are logged in',
    paragraph_one:
      'Your progress is stored in this browser. You will be automatically logged out after 30 days. Use the code below to restore it after taking a break.',
    signout: 'Sign out',
  },

  modal_signup: {
    heading: 'Want to save your progress?',
    paragraph_one:
      'Copy and store a simple code to save and load your progress on any device and browser. If you already have a code, load your progress here.',
    subheading_one: 'Choose an avatar',
    subheading_two: 'Back up your personal code',
    paragraph_two:
      'All set? Code copied and backed-up? Make sure your do, as it can’t be recovered if you lose it.',
    confirm: 'I’ve copied and backed up my code',
  },

  demo_disclaimer: {
    title: 'This is a demo',
    description: `We are still in the early stages of this project. Chapter 1 is functional, the rest is in development. Give it a try and let us know what you think, we'd love your feedback.`,
  },
  holocat: {
    title: 'holocat',
    paragraph_one:
      'You receive a holocat from someone using the name Satoshi Nakamoto. (It’s like any other e-hologram, but this one is shaped like a cat.) You open the holocat by booping its nose.',
    paragraph_two:
      '—“Bitcoin is not dying, but it needs your help. Don’t forget the cat.” – Satoshi Nakamoto',
    paragraph_three:
      '—Satoshi? The Satoshi? No, it couldn’t be. They’ve been presumed dead for over a century. Haven’t they?',
    paragraph_four: 'Haven’t they?',
    paragraph_five:
      'Holocat: “You better get to work. I can help, but you have to start meow.”',
  },
}
