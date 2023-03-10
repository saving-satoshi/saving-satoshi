export const translations = {
  shared: {
    next: 'Continue',
    copy: 'Copy',
    chapter: 'Chapter',
    challenge: 'Challenge',
    coming_soon: 'Coming soon',
    start_chapter: 'Start chapter'
  },

  chapter_one: {
    title: 'Secrets in plain sight',
    paragraph_one:
      'The year is 2139. The last bitcoin is two weeks from being mined. For months, a clock has ticked down in Satoshi Square. The world awaits the last block. Then, suddenly, the network grinds to a halt.',
      paragraph_two: ' ',
      paragraph_three: ' '
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
      'Suddenly, you realize that you never claimed the block rewards from your competition with Amestris. Your bitcoin wallet is running low, so now is a good time to top it up again.',
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
    title: null,
    subtitle: null,
    paragraph_one: `Moments later, your Hover Screen activates.`,
    paragraph_two: `—Deborah Chunk: “Thomas Vanderpool. As the CEO of BitRey, you run one of the largest bitcoin mining pools in the world. You also manufacture bitcoin mining machines. What is happening? Is bitcoin dying?”`,
    paragraph_three: `—Vanderpool: “Yes I do, Deborah. Like my daddy and his daddy before him. The Vanderpoole’s have been mining since Block 21,000. That’s why I can confidently say that miners across the world are causing these delays by turning off their machines. This is a protest. No one wants bitcoin to stop being issued at 21 million. We cannot survive on fees alone.”`,
    start: 'Continue'
  },

  done: {
    title: 'You did it!!!',
    description:
      'Amazing. You completed the first chapter and learned a lot about bitcoin. Follow us at <Link href="https://twitter.com/savingsatoshi" className="underline">@savingsatoshi</Link> to know when we launch new chapters and challenges.',
  },

  genesis_one: {
    title: 'Genesis',
    heading: 'Find the hidden message',
    paragraph_one: 'Let’s find the very first block in the bitcoin blockchain. Click the button below to open a <Tooltip id="genesis_one_paragraph_one" content="genesis_one.tooltip_block_explorer" className="underline">block explorer</Tooltip>  exactly at block 0, which is called the genesis block.',
    paragraph_two: 'Scroll down and expand the details on the one transaction that is stored in this block. Find the input called “Coinbase”. Now look for the label “SCRIPTSIG (<Tooltip id="genesis_one_paragraph_two" content="genesis_one.tooltip_hex" className="underline">HEX</Tooltip>)”. The value next to it is an encoded message.',
    paragraph_three: 'Copy that value and paste it below.',
    tooltip_block_explorer:
      'A <a href="https://bitcoinops.org/en/topics/block-explorers/" target="_blank" rel="noreferrer">block explorer</a> is a useful tool to quickly look up information about bitcoin transactions.',
    tooltip_hex:
      'Short for hexadecimal, a numeral system that represents numbers using a base of 16.',
    view_block_0: 'View Block 0',
    placeholder: 'Paste the value you found here',
  },

  genesis_two: {
    title: 'Genesis',
    heading: 'Let’s decode the message',
    paragraph_one: 'The message you found was encoded in a format called HEX. Now we will run a command to turn it into ASCII, which we will be able to read.',
    paragraph_two: 'Copy and paste the command below into the Terminal to the right and press “Enter”.',
    terminal_challenge_lines: `Enter your commands here and press Enter...\n The variable $scriptSigHex is already defined for you.\n\n var $scriptSigHex = '04fff...e6b73'`,
    waiting_for_input: 'Waiting for you to write and run the script...',
    success: `Great work! The decoded message references the front page of <Link href="https://www.thetimes03jan2009.com" className="underline">The Times</Link> from January 3,2009, the same day Satoshi mined the genesis block. How cool is that?! This message also gives us some insight into his motivation for creating bitcoin.\n\n It’s time to expand on what you just learned. Decode the clue we’ve left for you in the next transaction.`
  },

  transacting_one: {
    title: 'Transacting',
    heading: 'What’s in a transaction?',
    paragraph_one: 'Transactions have two parts: inputs and outputs. In the previous exercise we decoded a secret message found inside a transaction input. This time we’ll decode a message that belongs to the output part.',
    paragraph_two: 'For the following transaction, we’re going to identify the output of type OP_RETURN.',
  },

  transacting_two: {
    title: 'Transacting',
    heading: 'OP_RETURN',
    paragraph_one: 'There’s another way to hide secret messages in transactions. Bitcoin has a special type of code called OP_RETURN that allows users to attach messages to transaction outputs. Let’s see if we can find one.',
    paragraph_two: '1. Click <Link href="https://blockstream.info/tx/ee3b8caaeb58245338dd299467de89ec6833d2a4235493c95059934603b5e98d?expand" className="underline">here</Link> to look at a specific transaction.',
    paragraph_three: '2. Open up the details and find the part that is of type “OP_RETURN”.',
    paragraph_four: '3. Now locate the “SCRIPTPUBKEY (ASM)” field. See the “OP_RETURN OP_PUSH_BYTES_28” part? These are called opcodes. We’re actually interested in what comes after them.',
    paragraph_five: '4. Copy the long string of numbers after “OP_RETURN OP_PUSHBYTES_28” and paste it below. ',
    input_challenge_label: 'Enter the OP_RETURN type',
  },

  transacting_three: {
    title: 'Transacting',
    heading: 'Another secret message',
    paragraph_one: 'We’ve identified the part of the transaction output that holds the message.',
    paragraph_two: 'All that’s left now is to decode it, just like we did in the previous exercise.',
    paragraph_three: 'Need to look up $scriptPubKeyBytes again? Here you go.',
    link: 'View transaction',
    terminal_challenge_success:
      'That’s correct! Nice work.\n\n As you can see, the clue is an address. Go to it.\n\n Your next challenge awaits you.',
    terminal_challenge_lines:
      'Enter your commands here and press Enter...\n\n Note that $scriptPubKeyHex is not defined for you this time. You’ll need to replace this variable in the code with the value you found in the previous challenge',
    terminal_challenge_error:
      'Almost. Take another look to find the correct value',
  },

  end: {
    save: 'Save my progress',
    next: 'Continue without saving',
    feedback: 'Share your feedback',
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
}
