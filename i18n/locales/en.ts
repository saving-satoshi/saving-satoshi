const translations = {
  shared: {
    next: 'Continue',
    start: 'Start',
    copy: 'Copy',
    about: 'About',
    chapter: 'Chapter',
    chapters: 'Chapters',
    challenge: 'Challenge',
    coming_soon: 'Coming soon',
    start_chapter: 'Start chapter',
    back: 'Back',
  },
  status_bar: {
    begin_message: 'Complete the challenge above to continue...',
    error_message: 'Hm... that is not quite right yet...',
    in_progress_message: 'Looking good so far...',
    success_message: 'Nicely done!',
    next: 'Next',
  },
  ///ABOUT PAGE
  about: {
    title: 'About',
    mobile_title: 'What it’s about',
    subtitle:
      'The year is 2139. The last bitcoin is two weeks from being mined. For months, a clock has ticked down in Satoshi Square.',
    intro:
      'The world awaits the last block. Then, suddenly, the network grinds to a halt.<br><br>You receive a holocat from someone using the name Satoshi Nakamoto. (It’s like any other e-hologram, but this one is shaped like a cat). You open the holocat by booping its nose curious to hear what it has to say...',

    project: {
      title: 'Built with fun',
      paragraph_one:
        'Saving Satoshi is a light-hearted first point of contact for developers who are curious about bitcoin development. Saving Satoshi has a mix of technical text and code-based challenges, but the challenges should be doable for anyone with basic coding skills. The project is free and open source and all the art has been generated using text-to-image (aka AI) tools like Midjourney.',
      paragraph_two:
        'This version of the project is currently in a demo state with a goal of getting feedback on the overall experience and providing a proof of concept for early users. In light of this, user progress is stored locally in the browser and the story along with images are not finalized.',
      paragraph_three:
        'Based on the feedback we receive, we will then work towards an official release (we call it V1) that includes 2-3 full lesson chapters, accounts, and more. 10 chapters are planned out and will be released over time as they are completed. Additional features may include collaborative learning, badges, extra-challenging side quests, and more.',
    },

    contributing: {
      title: 'How to contribute',
      paragraph_one:
        'We’re an open-source project, so all doors are open for you to help shape it.',

      feedback: {
        title: 'Feedback',
        paragraph_one:
          'A really great way to contribute is to go through Chapter 1 and give us any feedback on the overall experience you might have using this form.',
      },

      contribute: {
        title: 'Contribute',
        paragraph_one:
          'All suggestions are welcome, including content changes, game mechanics – really anything. We are also always looking for help reviewing and <a href="https://leaf-singer-0fc.notion.site/How-to-QA-5177e63f65a4406da01bc57d886b5ac2" target="_blank" rel="noreferrer">QA-ing code changes</a>. For code improvements, you can directly open an issue or submit a pull request on GitHub.',
        paragraph_two:
          'If you want to get involved with design, story, or anything else, join us in the #saving-satoshi channel in the <a href="https://bitcoin.design/contribute/" target="_blank" rel="noreferrer">Bitcoin Design slack</a>. Mention how you’d like to contribute and we’ll help point you in the right direction.',
      },
    },

    contributors: {
      title: 'Enjoy!',
      contributions_by: 'Contributions by',
      many_more:
        'and <a href="https://github.com/saving-satoshi/saving-satoshi/graphs/contributors" target="_blank" rel="noreferrer">many more</a>.',
    },

    satoshi_needs_you: 'Now be quick, Satoshi needs you.',
  },

  ///CHAPTERS TITLE PAGE
  chapter_one: {
    title: 'Secrets in plain sight',
    paragraph_one:
      'The year is 2139. The last bitcoin is two weeks from being mined. For months, a clock has ticked down in Satoshi Square. The world awaits the last block. Then, suddenly, the network grinds to a halt.',

    ///CHAPTER 1
    intro_one: {
      title: 'Genesis',
      paragraph_one: `Moments later, your Hover Screen activates.`,
      paragraph_two: `—Deborah Chunk: “Thomas Vanderpoole. As the CEO of BitRey, you run one of the largest bitcoin mining pools in the world. You also manufacture bitcoin mining machines. What is happening? Is bitcoin dying?”`,
      paragraph_three: `—Vanderpoole: “Yes I do, Deborah. Like my daddy and his daddy before him. The Vanderpooles have been mining since Block 21,000. That’s why I can confidently say that miners across the world are causing these delays by turning off their machines. This is a protest. No one wants bitcoin to stop being issued at 21 million. We cannot survive on fees alone.”`,
      start: 'Continue',
    },

    intro_two: {
      title: 'Genesis',
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

    genesis_one: {
      title: 'Genesis',
      heading: 'Your first challenge',
      paragraph_one:
        'Bitcoin is censorship resistant money. Anybody can send money by broadcasting a transaction to the network. After broadcast, transactions are packaged up into blocks by miners. Miners compete against other miners for the privilege of building on the chain. This is what keeps bitcoin decentralized.',
      paragraph_two:
        'Satoshi Nakamoto, the pseudonymous inventor of bitcoin, also mined the first bitcoin block. He left the world a secret message in the very first bitcoin transaction that was ever made. Your first challenge is to find and decode it.',
    },

    genesis_two: {
      title: 'Genesis',
      heading: 'Find the hidden message',
      paragraph_one:
        'Let’s find the very first block in the bitcoin blockchain. Click the button below to open a <Tooltip id="genesis_two_paragraph_one" content="genesis_two.tooltip_block_explorer" className="underline">block explorer</Tooltip>  exactly at block 0, which is called the genesis block.',
      paragraph_two:
        'Scroll down and expand the details on the one transaction that is stored in this block. Find the input called “Coinbase”. Now look for the label “SCRIPTSIG (<Tooltip id="genesis_two_paragraph_two" content="genesis_two.tooltip_hex" className="underline">HEX</Tooltip>)”. The value next to it is an encoded message.',
      paragraph_three: 'Copy that value and paste it in the code block.',
      tooltip_block_explorer:
        'A <a href="https://bitcoinops.org/en/topics/block-explorers/" target="_blank" rel="noreferrer">block explorer</a> is a useful tool to quickly look up information about bitcoin transactions.',
      tooltip_hex:
        'Short for hexadecimal, a numeral system that represents numbers using a base of 16.',
      view_block_0: 'View Block 0',
      placeholder: 'Paste the value you found here',
    },

    genesis_three: {
      title: 'Genesis',
      heading: 'Let’s decode the message',
      paragraph_one:
        'The message you found was encoded in a format called HEX. Now we will run a command to turn it into ASCII, which we will be able to read.',
      paragraph_two:
        'Copy and paste the command below into the Terminal in the code tab and press “Enter”.',
      terminal_challenge_lines: `Enter your commands here and press Enter...\n The variable $scriptSigHex is already defined for you.\n\n var $scriptSigHex = '04fff...e6b73'`,
      waiting_for_input: 'Waiting for you to write and run the script...',
      success: `Great work! The decoded message references the front page of <Link href="https://en.bitcoin.it/wiki/Genesis_block" className="underline">The Times</Link> from January 3,2009, the same day Satoshi mined the genesis block. How cool is that?! This message also gives us some insight into his motivation for creating bitcoin.\n\n Let's keep going.`,
    },

    genesis_four: {
      title: 'Genesis',
      subtitle: 'Congrats! You completed the first challenge!',
      paragraph_one:
        'You found the secret message Satoshi Nakamoto embedded in the genesis block. It’s time to expand on what you just learned. Decode an important clue about the story in the next challenge.',
    },

    transacting_one: {
      title: 'Transacting',
      heading: 'What’s in a transaction?',
      paragraph_one:
        'Transactions have two parts: inputs and outputs. In the previous exercise we decoded a secret message found inside a transaction input. This time we’ll decode a message that belongs to the output part.',
      paragraph_two:
        'For the following transaction, we’re going to identify the output of type OP_RETURN.',
    },

    transacting_two: {
      title: 'Transacting',
      heading: 'OP_RETURN',
      paragraph_one:
        'There’s another way to hide secret messages in transactions. Bitcoin has a special type of code called OP_RETURN that allows users to attach messages to transaction outputs. Let’s see if we can find one.',
      paragraph_two:
        '1. Click <Link href="https://blockstream.info/tx/ff9148605a772a51cba39004df5fb042d40515967a3e38ff5294cfd017c452a9?expand" className="underline">here</Link> to look at a specific transaction.',
      paragraph_three:
        '2. Open up the details and find the part that is of type “OP_RETURN”.',
      paragraph_four:
        '3. Now locate the “SCRIPTPUBKEY (ASM)” field. See the “OP_RETURN OP_PUSHBYTES_33" part? These are called opcodes. We’re actually interested in what comes after them.',
      paragraph_five:
        '4. Copy the long string of numbers after “OP_RETURN OP_PUSHBYTES_33” and paste it in the code block. ',
      input_challenge_label: 'Enter the OP_RETURN type',
    },

    transacting_three: {
      title: 'Transacting',
      heading: 'Another secret message',
      paragraph_one:
        'We’ve identified the part of the transaction output that holds the message.',
      paragraph_two:
        'All that’s left now is to decode it, just like we did in the previous exercise. You can look up the transaction again <Link href="https://blockstream.info/tx/ff9148605a772a51cba39004df5fb042d40515967a3e38ff5294cfd017c452a9?expand" className="underline">here</Link>.',
      terminal_challenge_success:
        'That’s correct! Nice work.\n\n As you can see, the clue is an address. Go to it.\n\n Your next challenge awaits you.',
      terminal_challenge_lines:
        'Enter your commands here and press Enter...\n\n Command: \n echo $scriptPubKeyBytes | xxd -r -p \n\n Note that $scriptPubKeyBytes is not defined for you this time. You’ll need to replace this variable in the code with the value you found in the previous page',
      terminal_challenge_error:
        'Almost! Remember that the variable $scriptPubKeyBytes is not set for you this time.',
    },

    outro_one: {
      title: 'Outro',
      paragraph_one:
        'You run down to your garage, step into your dad’s old solocopter, punch in the coordinates, and make your way to the address.',
      paragraph_two:
        'Despite cat allergies so intense that they apply even to holograms, the holocat comes along. You object, but cats will be cats.',
      button_text: 'Complete chapter 1',
    },

    outro_two: {
      title: 'You did it!!!',
      description:
        'Amazing. You completed the first chapter and learned a lot about bitcoin. Follow us at <Link href="https://twitter.com/savingsatoshi" className="underline">@savingsatoshi</Link> to know when we launch new chapters and challenges.',
    },

    end: {
      save: 'Save my progress',
      next: 'Continue without saving',
      feedback: 'Share your feedback',
    },
  },

  chapter_two: {
    title: 'The 51% attack',
    paragraph_one:
      'The network outage has to be related to the block subsidy. There’s no way this is a coincidence.',
    paragraph_two:
      'You hop on your computer to do some research on mining when you notice something unusual about the few blocks that are being mined. They all seem to be coming from the same place, possibly even the same mining pool. What happened to the rest of the miners?',

    intro_one: {
      title: 'Hashing out a plan',
      paragraph_one:
        'HOLOCAT: “Boy, what a dump. This place had better store some sardines or dried fish. I’d even settle for some e-nip.',
      paragraph_two:
        'You land, steady yourself, and search for a point of ingress. There, that broken window should do the trick. You take out what’s left of the window with a brick, and hop inside. The building is filled with thousands of dusty, well-preserved bitcoin miners.',
      paragraph_three:
        'HOLOCAT: “This isn’t a warehouse; this is a museum. I think these are old Vanderpoole family ASIC miners. Application-specific integrated circuit miners were all the rage back in bitcoin’s early days. Can you believe that people mined other coins at one point?”',
    },

    intro_two: {
      title: 'Hashing out a plan',
      paragraph_one:
        'In the corner, a dim, barely working computer monitor with a note stuck to it sits blinking. The note says “Turn them on, stupid."',
      paragraph_two: 'HOLOCAT: “How rude.”',
      paragraph_three:
        'Wow, a mechanical keyboard. Holocat jumps onto the keyboard and walks across it, showing you what keys to hit.',
    },

    scripting_one: {
      title: 'Automation',
      heading: 'Let’s make the computer do this for us.',
      paragraph_one:
        'OK, that probably took you a lot longer. Now imagine finding a hash that starts with five or ten zeroes. This is the challenge that the bitcoin network poses to miners when they want to submit new blocks with transactions.',
      paragraph_two:
        'Miners take all the stuff they want to put in a block, the transactions and a bunch of related metadata, and combine it with a random number called a nonce. They send all of this into the hash function to create something called the block hash.',
      paragraph_three:
        'The bitcoin network has a difficulty setting and only accepts block hashes that start with a certain number of zeroes. We call this the “difficulty” and it is revisited every 2016 blocks.',
      paragraph_four:
        'For the next challenge, write a script that finds a hash that starts with five zeroes (“00000”).',
    },

    scripting_two: {
      title: 'Automation',
      paragraph_one:
        'Alright, time to write and run your own code. Write a script that finds a hash that starts with five zeroes (“00000”).',
      paragraph_two:
        'When you press “Run the script”, the findHash function will be called over and over with an ever-increasing nonce (which is just a regular number). Write code to calculate and return a hash based on the nonce.',
      success: 'Five zeroes! That’s it!',
    },
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

  ///CHALLENGE PAGE
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
    description: `We are still in the early stages of this project. Chapter 1 is functional, the rest is in development. Give it a try and let us know what you think, we'd love <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf1xpNqUYJyvYL5IZDnxy78273pkqzfYW2Hf91H4Do4KHgy9g/viewform?usp=sf_link" className="underline">your feedback</Link>.`,
  },

  runner: {
    run: 'Run the script',
    running: 'Running',
    pause: 'Pause',
    result: 'Result',
    evaluation: 'Evaluation',
    script_output: 'Script output',
    waiting: 'Waiting for your input above...',
  },
}

export default translations
