const translations = {
  shared: {
    next: 'Continue',
    start: 'Start',
    copy: 'Copy',
    info: 'Info',
    copy_acknowledged: 'Copied!',
    about: 'About',
    chapter: 'Chapter',
    chapters: 'Chapters',
    challenge: 'Challenge',
    challenges: 'Challenges',
    coming_soon: 'Coming soon',
    start_chapter: 'Start chapter',
    back: 'Back',
    close: 'Close',
    poweroff: 'Back to chapter selection',
    loading: 'Loading',
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
        'Saving Satoshi is a light-hearted first point of contact for coders who are curious about Bitcoin development. Saving Satoshi has a mix of technical text and code-based challenges, but the challenges should be doable for anyone with basic coding skills. The project is free and open source (FOSS) and all the art has been generated using text-to-image tools like Midjourney.',
      paragraph_two:
        'This project is in continuous development and takes an iterative approach to incorporate feedback as we release new chapters. There are currently ten chapters mapped out. However more may be added as the project continues to grow.',
    },

    contributing: {
      title: 'How to contribute',
      paragraph_one:
        'We’re an open-source project, so all doors are open for you to help shape it.',

      feedback: {
        title: 'Feedback',
        paragraph_one:
          'A great way to contribute is to go through Chapter 1 and give us any feedback on the overall experience you might have using <a href="https://docs.google.com/forms/d/e/1FAIpQLSf1xpNqUYJyvYL5IZDnxy78273pkqzfYW2Hf91H4Do4KHgy9g/viewform" target="_blank" rel="noreferrer">this form</a>.',
      },

      contribute: {
        title: 'Contribute',
        paragraph_one:
          'All suggestions are welcome, including content changes, game mechanics – really anything. We are also always looking for help reviewing and <a href="https://leaf-singer-0fc.notion.site/How-to-QA-5177e63f65a4406da01bc57d886b5ac2" target="_blank" rel="noreferrer">QA-ing code changes</a>. For code improvements, you can directly open an issue or submit a pull request on GitHub.',
        paragraph_two:
          'If you want to get involved with design, story, or anything else, join us in the #saving-satoshi channel in the <a href="https://discord.gg/DC8Dys4G3h" target="_blank" rel="noreferrer">Bitcoin Design Discord</a>. Mention how you’d like to contribute and we’ll help point you in the right direction.',
      },
    },

    contributors: {
      title: 'Enjoy!',
      contributions_by: 'Contributions by',
      many_more:
        'and <a href="https://github.com/saving-satoshi/saving-satoshi/graphs/contributors" target="_blank" rel="noreferrer">many more</a>.',
    },

    satoshi_needs_you: 'Now be quick, Satoshi needs you.',
    privacy: {
      title: 'Our commitment to privacy',
      paragraph_one:
        'At Saving Satoshi, we are deeply committed to ensuring the privacy and security of our users. We believe in transparency and want you to understand how and why we track app usage. To achieve this, we use a powerful tool called <Link href="https://umami.is/" className="underline" target="_blank">Umami</Link>.',
      sub_heading_one: 'What is Umami?',
      paragraph_two:
        'Umami is an open-source analytics platform that helps us gather essential insights about how you use our app. It allows us to make data-driven decisions and continuously enhance our product to better meet your needs.  You can view the Umami dashboard <Link className="underline" href="https://visits.bitcoindevs.xyz/share/zFmD5WIus09mDxEf/Saving%20Satoshi" target="_blank">here</Link>.',
      sub_heading_two: 'What Data Do We Collect?',
      paragraph_three:
        'Rest assured, we only collect non-personal and anonymized data, such as:',
      list_item_one_title: 'Product Improvement:',
      list_item_one_text:
        'We use the data to identify areas where our app can be improved. By understanding how you use our app, we can make it more efficient, user-friendly, and secure.',
      list_item_two_title: 'Compatibility:',
      list_item_two_text:
        'Understanding the devices and platforms you use allows us to optimize our app for various configurations, ensuring it works seamlessly for you.',
      sub_heading_three: 'Your Privacy Matters',
      paragraph_four:
        'We want to emphasize that your privacy is of utmost importance to us. We do not collect any personally identifiable information, and the data we gather is used solely for the purpose of improving our app. Your data is never shared or sold to third parties.',
      paragraph_five:
        "If you have any concerns or questions about our data collection practices or privacy policies, please don't hesitate to contact us. We are committed to providing you with a transparent and secure experience while using our app.",
    },
  },

  ///CHAPTERS TITLE PAGE
  chapter_one: {
    title: 'Secrets in plain sight',
    paragraph_one:
      'The year is 2139. The last bitcoin is two weeks from being mined. For months, a clock has ticked down in Satoshi Square. The world awaits the last block. Then, suddenly, the network grinds to a halt.',

    ///CHAPTER 1
    intro_one: {
      title: 'Intro',
      nav_title: 'Miner protest',
      paragraph_one: `Moments later, your Hover Screen activates.`,
      paragraph_two: `—Deborah Chunk: “Thomas Vanderpoole. As the CEO of BitRey, you run one of the largest bitcoin mining pools in the world. You also manufacture bitcoin mining machines. What is happening? Is bitcoin dying?”`,
      paragraph_three: `—Vanderpoole: “Yes I do, Deborah. Like my daddy and his daddy before him. The Vanderpooles have been mining since Block 21,000. That’s why I can confidently say that miners across the world are causing these delays by turning off their machines. This is a protest. No one wants bitcoin to stop being issued at 21 million. We cannot survive on fees alone.”`,
      start: 'Continue',
    },

    intro_two: {
      title: 'Genesis',
      nav_title: "Satoshi's holocat",
      paragraph_one:
        'You receive a holocat from someone using the name Satoshi Nakamoto. (It’s like any other e-hologram, but this one is shaped like a cat.) You open the holocat by booping its nose.',
      paragraph_two:
        '—“Bitcoin is not dying, but it needs your help. Don’t forget the cat.” – Satoshi Nakamoto',
      paragraph_three:
        '—Satoshi? The Satoshi? No, it couldn’t be. They’ve been presumed dead for over a century.',
      paragraph_four: 'Haven’t they?',
      paragraph_five:
        'Holocat: “You better get to work. I can help, but you have to start meow.”',
    },

    genesis_one: {
      title: 'Genesis',
      nav_title: 'Genesis Secret',
      heading: 'Your first challenge',
      paragraph_one:
        'Bitcoin is censorship-resistant money. Anybody can send money by broadcasting a transaction to the network. After broadcast, transactions are packaged up into blocks by miners. Miners compete against other miners for the privilege of building on the chain. This is what keeps bitcoin decentralized.',
      paragraph_two:
        'Satoshi Nakamoto, the pseudonymous inventor of bitcoin, also mined the first bitcoin block. He left the world a secret message in the very first bitcoin transaction that was ever made. Your first challenge is to find and decode it.',
    },

    genesis_two: {
      title: 'Genesis',
      nav_title: 'Find the message',
      heading: 'Find the hidden message',
      paragraph_one:
        'Let’s find the very first block in the bitcoin blockchain. Click the button below to open a <Tooltip id="genesis_two_paragraph_one" content="chapter_one.genesis_two.tooltip_block_explorer" theme="bg-[#30435b]">block explorer</Tooltip>  exactly at block 0, which is called the genesis block.',
      paragraph_two:
        'Scroll down and expand the details on the one transaction that is stored in this block. Find the input called “Coinbase”. Now look for the label “SCRIPTSIG (<Tooltip id="genesis_two_paragraph_two" content="chapter_one.genesis_two.tooltip_hex" theme="bg-[#30435b]">HEX</Tooltip>)”. The value next to it is an encoded message.',
      paragraph_three: 'Copy that value and paste it in the code block.',
      tooltip_block_explorer:
        'A <a  href="https://bitcoinops.org/en/topics/block-explorers/" target="_blank" rel="noreferrer">block explorer</a> is a useful tool to quickly look up information about bitcoin transactions.',
      tooltip_hex:
        'Short for hexadecimal, a numeral system that represents numbers using a base of 16.',
      view_block_0: 'View Block 0',
      placeholder: 'Paste the value you found here',
    },

    genesis_three: {
      title: 'Genesis',
      nav_title: 'Decode the message',
      heading: "Let's decode the message",
      paragraph_one:
        'The message you found was encoded in a format called HEX. Now we will run a command to turn it into ASCII, which we will be able to read.',
      paragraph_two:
        'Copy and paste the command below into the Terminal in the code block and press “Enter”.',
      terminal_challenge_lines: `Enter your commands here and press Enter...\n The variable $scriptSigHex is already defined for you.\n\n var $scriptSigHex = '04fff...e6b73'`,
      waiting_for_input: 'Waiting for you to write and run the script...',
      success: `Great work! The decoded message references the front page of <Link href="https://en.bitcoin.it/wiki/Genesis_block" target="_blank" className="underline">The Times</Link> from January 3,2009, the same day Satoshi mined the genesis block. How cool is that?! This message also gives us some insight into his motivation for creating bitcoin.\n\n Let's keep going.`,
    },

    genesis_four: {
      title: 'Genesis',
      nav_title: 'Your first success',
      subtitle: 'Congrats! You completed the first challenge!',
      paragraph_one:
        'You found the secret message Satoshi Nakamoto embedded in the genesis block. It’s time to expand on what you just learned. Decode an important clue about the story in the next challenge.',
    },

    transacting_one: {
      title: 'Transacting',
      nav_title: "What's in a transaction",
      heading: 'What’s in a transaction?',
      paragraph_one:
        'Two main components of a transaction are inputs and outputs. In the previous exercise we decoded a secret message found inside a transaction input. This time we’ll decode a message that belongs to the output part.',
      paragraph_two:
        'For the following transaction, we’re going to identify the output of type OP_RETURN.',
    },

    transacting_two: {
      title: 'Transacting',
      nav_title: 'Find the OP_RETURN',
      heading: 'OP_RETURN',
      paragraph_one:
        'There’s another way to hide secret messages in transactions. Bitcoin has a special type of code called OP_RETURN that allows users to attach messages to transaction outputs. Let’s see if we can find one.',
      paragraph_two:
        '1. Click <Link href="https://blockstream.info/tx/ff9148605a772a51cba39004df5fb042d40515967a3e38ff5294cfd017c452a9" target="_blank" className="underline">here</Link> to look at a specific transaction.',
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
      nav_title: 'Decode the OP_RETURN',
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
      nav_title: 'Off to the address',
      paragraph_one:
        'You run down to your garage, step into your dad’s old solocopter, punch in the coordinates, and make your way to the address.',
      paragraph_two:
        'Despite cat allergies so intense that they apply even to holograms, the holocat comes along. You object, but cats will be cats.',
      button_text: 'Complete chapter 1',
    },

    outro_two: {
      title: 'You did it!!!',
      nav_title: 'Chapter complete',
      description:
        'Amazing. You completed the first chapter and learned a lot about hashes and transactions. How did it go?',
    },

    end: {
      save: 'Save my progress',
      next: 'Continue without saving',
      feedback: 'Share your feedback',
    },
    resources: {
      genesis: {
        scriptsig_heading: 'ScriptSig',
        scriptsig_paragraph:
          "The 'scriptSig' is a script that you provide as part of the input in your new transaction. It is essentially your unlocking script, which proves that you have the authority to spend the bitcoin from the referenced UTXO. The 'scriptSig' is the data that goes into the input's scriptSig field.",
        blocks_heading: 'Bitcoin Blocks',
        blocks_paragraph:
          "A 'block' in blockchain technology is like a container for a group of transactions. It forms a crucial part of the blockchain, with each block referencing the one before it. This reference, along with a block header that contains important details like a timestamp and a unique identifier, ensures the data's integrity and chronological order. Once a block is added to the blockchain, it's incredibly difficult to change, ensuring the security and immutability of the data. The size of a block can vary between different blockchains, and each block must undergo validation by network nodes before becoming a permanent part of the blockchain. This block-and-chain structure is the foundation of blockchain's transparency and security.",
        block_explorer_heading: 'Block Explorer',
        block_explorer_paragraph:
          'A block explorer is a crucial tool for navigating and understanding blockchain networks. It acts as a user-friendly interface to inspect and analyze the data stored on a blockchain. With a block explorer, users can explore transaction histories, view account balances, and track the progress of individual blocks and transactions. It provides transparency and accountability in the world of decentralized cryptocurrencies, making it easier to verify and trace transactions while promoting trust in blockchain technology.',
        tip_one:
          'Look for the scriptSig(Hex) category nested in coinbase input after expanding the transaction within the block.',
        tip_two:
          "The 'xxd' command turns a file into hex and adding the '-r' tag reverses it allowing hex to be translated into text. The '-p' tag then prints it to the console allowing you to read the output.",
      },
      transacting: {
        transactions_heading: 'Transactions',
        transactions_paragraph:
          "A transaction in the world of cryptocurrencies is akin to a single atomic payment, where it involves the process of destroying existing coins and creating new ones. When someone initiates a cryptocurrency transaction, they're essentially instructing the blockchain to transfer a specific amount of coins from one digital wallet to another. To achieve this, the transaction consumes the sender's existing coins and generates new ones for the recipient, effectively updating the ownership ledger.",
        bitcoin_script_heading: 'Bitcoin Script',
        bitcoin_script_paragraph:
          'Bitcoin Script is a simple, stack-based programming language used in Bitcoin transactions to define the conditions under which bitcoins can be spent. It consists of various opcodes (short for operation codes) that specify what operations should be performed on the data within the script.',
        tip_one:
          'Given the Op_Code: OP_Pushbytes_33 we are looking for a string 33 bytes long (66 characters total) in the OP_Return of the transaction',
        tip_two:
          "Decoding the string with the 'xxd' command remember that we are not using a variable this time, we need to input the entire string",
      },
    },
  },

  chapter_two: {
    title: 'Hashing out a plan',
    paragraph_one:
      'The coordinates Satoshi gave takes you to an abandoned warehouse.',
    paragraph_two:
      'You circle the warehouse in your Budgetcopter no less than three times. Your Budgetcopter’s heat detector picks up nothing but darkness. If someone knows that this place exists, it’s been a long time since they visited it in anything but their memory.',

    intro_one: {
      title: 'Intro',
      nav_title: 'The warehouse',
      paragraph_one:
        'HOLOCAT: “Boy, what a dump. This place had better store some sardines or dried fish. I’d even settle for some e-nip."',
      paragraph_two:
        'You land, steady yourself, and search for a point of ingress. There, that broken window should do the trick. You take out what’s left of the window with a brick, and hop inside. The building is filled with thousands of dusty, well-preserved bitcoin miners.',
      paragraph_three: {
        a: 'HOLOCAT: “This isn’t a warehouse; this is a museum. I think these are old Vanderpoole family ASIC miners. In bitcoin’s early days, miners would use general purpose computers to mine bitcoin. But early on miners realized they could use machines with a special type of chip called an Application-Specific Integrated Circuit, or ',
        b: ' for short. These chips do only one thing, mine bitcoin, their narrow focus increases their efficiency and allows miners to spend less energy to mine, giving them an edge. Can you believe that people mined with their laptops at one point?"',
      },
      paragraph_four:
        'This explains all the machines in the Vanderpoole family collection.',
      tooltip_one: {
        question: 'What is an ASIC miner?',
        link: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=What%2520is%2520an%2520ASIC%2520miner%253F',
        highlighted: 'ASIC',
      },
    },

    intro_two: {
      title: 'Hashing out a plan',
      nav_title: 'Turning on the computer',
      paragraph_one:
        'In the corner, a dim, barely working computer monitor with a note stuck to it sits blinking. The note says “Turn them on, stupid."',
      paragraph_two: 'HOLOCAT: “How rude.”',
      paragraph_three:
        "Wow a mechanical keyboard, I've heard about these legendary devices. Supposedly they were so loud that everyone lost their hearing and they were banned. Holocat jumps onto the keyboard and walks across it, showing you what keys to hit.",
    },

    hashing_one: {
      title: 'Zeroes',
      nav_title: 'The computer hums to life',
      paragraph_one:
        'Either by chance, or because Holocat actually knew what he was doing, the computer turns the random letters and numbers he stepped on turn into... more random letters and numbers?',
      list_one: '> QX23Y6VGECTUKSNIEUTUB[P[pihof',
      list_two:
        '> 1c31d1d9fb848a505fc0cdbea848ff1bdd46a9ed4d639d413d3a93035194eedf',
      paragraph_two: 'The monitor displays "INCORRECT HASH. TRY AGAIN."',
      paragraph_three:
        'Of course whatever gibberish Holocat typed was wrong. He’s just a holographic cat!',
      paragraph_four: 'What happens if you type something different?',
    },

    hashing_two: {
      title: 'Zeroes',
      nav_title: 'Try to hash something',
      heading: 'Enter Anything',
      return_hash: 'Below you will see your input converted to a hash',
      progress_message: 'Keep going...',
      success_message: 'Alright, nice work playing around. Let’s move on.',
    },

    hashing_three: {
      title: 'Zeroes',
      nav_title: 'The power of SHA256',
      heading: 'Did you notice anything special about the hashes?',
      list_one:
        'Just like fingerprints, hashes are unique. Barring some exceptional circumstances, the hashes for two different things should never be the same.',
      list_two:
        'Hash functions are one way streets. You can’t reverse engineer a hash and figure out the data used to make it.',
      list_three:
        'Hashes are extremely reliable in the sense that they are deterministic. This means you can hash the same piece of data over and over again and you’ll always get the same result.',
      paragraph_one: {
        a: 'The function used here is called ',
        b: 'a very popular choice.',
      },
      paragraph_two: 'Now, let’s see if you can find a specific hash.',
      paragraph_three:
        'Find a hash that starts with a zero (“0”). Keep typing different things below until you find a hash that we want.',
      tooltip_one: {
        question: 'How is SHA-256 used in bitcoin? ',
        link: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=how%2520is%2520SHA-256%2520used%2520in%2520bitcoin%253F',
        highlighted: 'SHA-256',
      },
    },

    hashing_four: {
      title: 'Zeroes',
      nav_title: 'Find a hash with a zero',
      heading:
        'Enter anything until you find a hash that starts with a zero (“0”)',
      hint_prompt:
        'Need a <Tooltip id="hint_prompt" position="bottom" theme="bg-[#5e212a]" offset="-1" content="chapter_two.hashing_four.hint_tooltip">hint</Tooltip>?',
      hint_tooltip:
        '<span className="text-m whitespace-nowrap leading-none text-white/50">Try typing:</span> <span className="whitespace-nowrap text-white">popcorn</span>',
    },

    hashing_five: {
      title: 'Zeroes',
      nav_title: 'Turning up the heat',
      heading: 'That wasn’t too hard!',
      paragraph_one:
        'Let’s make it a bit more tricky. Try to find a hash that starts with two zeroes ("00").',
    },

    hashing_six: {
      title: 'Zeroes',
      nav_title: 'Find a hash with two zeroes',
      heading:
        'Enter anything until you find a hash that starts with two zeroes (“00”)',
      hint_prompt:
        'Need a <Tooltip id="hint_prompt" position="bottom" theme="bg-[#5e212a]" offset="-1" content="chapter_two.hashing_six.hint_tooltip">hint</Tooltip>?',
      hint_tooltip:
        '<span className="text-m whitespace-nowrap leading-none text-white/50">Try typing:</span> <span className="whitespace-nowrap text-white">trigonometry</span>',
    },

    scripting_one: {
      title: 'Automation',
      nav_title: 'Hashing the nonce',
      heading: 'Let’s make the computer do this for us.',
      paragraph_one:
        'OK, that probably took you a lot longer. Now imagine finding a hash that starts with five or ten zeroes. This is the challenge that the bitcoin network poses to miners when they want to submit new blocks with transactions.',
      paragraph_two:
        'Miners gather all the information they want to put in a block such as the previous block header hash, a hash of transactions to be included in block (including the coinbase transaction), time, and combine it with a random number called a nonce (which stands for “number only used once”). They send all of this into the hash function to create something called the block hash.',
      paragraph_three:
        'When bitcoin first launched, miners would cycle through the nonce in the block header by incrementing the data by 1 in the 32-bit field. But since miners are so powerful now and difficulty is so high, they cycle through this pretty quickly and normally don’t find a solution below the',
      paragraph_four:
        'So what miners need to do is change other parts of the block header, such as the time or transactions included in the block.',
      paragraph_five:
        'The bitcoin network has a difficulty setting and only accepts block hashes that start with a certain number of zeroes. We call this the “difficulty” and it is adjusted every 2016 blocks.',
      paragraph_six:
        'For the next challenge, write a script that finds a hash that starts with five zeroes (00000).',
      tooltip_one: {
        question: 'What is target difficulty? ',
        link: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=what%2520is%2520target%2520difficulty%253F',
        highlighted: 'target difficulty',
      },
    },

    scripting_two: {
      title: 'Automation',
      nav_title: 'Build a hash function',
      paragraph_one:
        'Alright, time to write and run your own code. Write a script that generates a sha256 hash that begins with five zeroes ("00000..."). Your code should repeatedly call the sha256 function with different input until the output satisfies this requirement. You should try incrementing an integer inside a loop to get different inputs. In cryptography this number may referred to as a "nonce" or "number used once".',
      python: {
        paragraph_two:
          'When you find a nonce with a hash that begins with five zeroes, return the hash to the console. We are using the hashlib library in python to help you along in creating this function, you can use the following external resources to help you write this function if needed:',
        list_one:
          '<Link href="https://docs.python.org/3/library/hashlib.html" target="_blank" className="underline">hashlib documentation</Link>',
        list_two:
          '<Link href="https://datagy.io/python-sha256/" target="_blank" className="underline">Tutorial python function</Link>',
      },
      javascript: {
        paragraph_two:
          'When you find a nonce with a hash that begins with five zeroes, return the hash to the console. We are using the crypto library in javascript to help you along in creating this function, you can use the following external resources to help you write this function if needed:',
        list_one:
          '<Link href="https://www.geeksforgeeks.org/node-js-crypto-createhash-method/" target="_blank" className="underline">crypto documentation</Link>',
        list_two:
          '<Link href="https://www.educative.io/answers/what-is-node-cryptocreatehashalgorithm-options" target="_blank" className="underline">Tutorial javascript function</Link>',
      },
      success: 'Five zeroes! That’s it!',
    },

    mining_one: {
      title: 'Into the mine',
      nav_title: 'Mining blocks',
      heading_one: 'Now that we know how mining works, let’s see it in action',
      heading_two: 'You’re mining now',
      heading_three: 'Nice work!',
      heading_four: 'Let’s get to 100 blocks',
      heading_five: 'You did it!',
      paragraph_one:
        'Right now, the Bitcoin network requires blocks to have a hash with ten leading zeros. Let’s get to it!',
      paragraph_two:
        'For this simple simulation, we’ll just assume that every block contains 3,500 transactions and 0.061 BTC in rewards and fees.',
      paragraph_two_one: 'See if you can turn on the miners.',
      paragraph_three:
        'The code you wrote in the previous lesson to compute hashes over and over again is running.',
      paragraph_four:
        'It will stop once it’s found a hash with ten leading zeroes.',
      paragraph_five:
        'See the nonce field incrementing? That’s how many hashes you have tried so far!',
      paragraph_six: 'With the following nonce:',
      paragraph_seven: 'The resulting hash is:',
      paragraph_eight:
        'It has the ten leading zeros that all new blocks require. Let’s mine a few more blocks.',
      paragraph_eight_one: 'Turn the miners back on.',
      paragraph_nine:
        'This might take some time. But this shows you how hard it is to mine blocks and confirm transactions.',
      paragraph_ten:
        'Wow! That took quite a bit of computing power to do all that hashing. Just look how many nonces were tried!  It really helped to have that boost in hash power i.e. the number of hashes your computer can try in a second.',
      paragraph_eleven:
        'As expected, since each block contains 3,500 transactions, a total of 350,000 transactions have been confirmed by the 100 blocks that were mined.',
      paragraph_twelve:
        'And it looks like you’ve collected a nice reward for all this mining! In addition to the block subsidy, the amount of bitcoin the network rewards for each block, you’ve also been able to collect additional income in the form of transaction fees. ',
      paragraph_thirteen:
        'Remember, this was just a simulation, each block is supposed to take 10 minutes on average.',
      paragraph_fourteen:
        'Also, if we were really mining on the current mainnet it would take many orders of maginitude more computing power to mine these blocks.',
      progress_bar_title: 'Blocks found',
      progress_bar_one: 'Nonce',
      progress_bar_two: 'Hashes per second',
      progress_bar_three: 'Transactions confirmed',
      progress_bar_four: 'Bitcoin earned',
      button_hash: '10x hash power, please',
      ten_x_hint: 'Tap the 100x button to speed up the hashing!',
    },
    outro_one: {
      title: 'Outro',
      nav_title: 'Chapter complete',
      heading: 'Great Job!',
      paragraph_one:
        'The machines roar to life. Everything seems to be working. A map appears on the computer that shows the locations of other warehouses filled with ASICs that have come online across the world. Looks like they were activated when you completed the mining challenge!',
      paragraph_two: 'HOLOCAT: “Look, there’s a message.”',
      paragraph_three:
        '“Good work. This will help bitcoin get back to one block every ten minutes.” – Satoshi Nakamoto',
      paragraph_four: 'Him again?',
    },
    resources: {
      hashing: {
        hash_functions_heading: 'Hash Functions',
        hash_functions_paragraph:
          'A hash function is any function that can be used to map data of arbitrary size to fixed-size values. The values returned by a hash function are called hash values, hash codes, digests, or simply hashes. The values are usually used to index a fixed-size table called a hash table. Use of a hash function to index a hash table is called hashing or scatter storage addressing.',
        collision_resistance_heading: 'SHA256 and collision resistance',
        collision_resistance_paragraph:
          "SHA-256 returns a 256-bit (64-characters) hash value, which is a unique representation of the input data. It belongs to the family of hash functions based on the Merkle–Damgård construction, a method for building hash functions from simpler compression functions. In this construction, the input message is divided into fixed-size blocks, and a chaining mechanism iteratively processes these blocks, combining each block's output with the result of the previous block. This process continues until the entire message is processed, producing the final hash value. SHA-256's robust security properties and collision resistance make it a cornerstone of data integrity and authentication in modern cryptography. You can learn more on Wikipedia.",
        tip_one:
          'Just keep typing! Because of the  SHA256 algorithm any new input will result in a completely random input even if those inputs are very similar',
        tip_two:
          "Can you do the math? Based on 16 possible characters per digit, what do you think the likelihood of finding a hash starting with '00' is? And how about '000'?",
      },
      scripting: {
        hash_libraries_heading: 'Hash Functions',
        hash_libraries_paragraph:
          'The crypto library in Node.js and the hashlib library in python are the code libraries that implement the algorithms we will use into useful tools for developers. These libraries are thoroughly vetted to ensure their accuracy and security as many people rely on them to secure valuable and important systems.',
        nonce_heading: 'Nonce',
        nonce_paragraph:
          "A nonce, short for (number used once) is a random or semi-random number that is employed in various cryptographic and computational processes. Its primary purpose is to introduce unpredictability and ensure that a particular operation or calculation can't be easily repeated or predicted. The nonce is critical to the security of Bitcoin mining but we will learn more about that later...",
        tip_one:
          'Ensure you are properly decoding the inputs the hashing algorithms often return objects decoded in bytes, we want to be able to read it in hex format!',
        tip_two:
          'Think about how you would create a function to keep running until that answer is equal to a specific value',
        tip_three:
          'Remember to log your answer with <span className="px-1 border-[2px] border-dashed">console.log()</span> or <span className="px-1 border-[2px] border-dashed">print()</span> its the only way our IDE will try to validate your answer',
      },
      mining: {
        mining_heading: 'Mining',
        mining_paragraph:
          "Mining is where these concepts all come together. Bitcoin mining is the process by which new bitcoins are created and transactions are added to the blockchain. Miners compete to solve complex mathematical puzzles by finding a unique, valid 'nonce' in each block of transactions. This proof-of-work process demands significant computational power and energy, making it a secure and decentralized way to validate transactions. Successful miners are rewarded with newly minted bitcoins and transaction fees, and they play a critical role in maintaining the integrity of the Bitcoin network.",
        difficulty_heading: 'Difficulty',
        difficulty_paragraph:
          'The mining difficulty is what allows the block to remain at an average of 10 minutes between each new block.',
      },
    },
  },
  chapter_three: {
    title: 'The 51% Attack',
    paragraph_one:
      'You enter the address of a block explorer and see blocks are back to ten minutes intervals. Somehow, holocat sleeps through the noise of the machines.',
    paragraph_two:
      '—However, something is off. The blocks are empty, and transactions aren’t processing. Did you make a mistake? Could this be a coincidence? Another message pops up on the computer screen, waking holocat. It’s not a coincidence.',
    intro_one: {
      title: 'Intro',
      nav_title: 'Hashing it out',
      paragraph_one:
        '—SATOSHI NAKAMOTO: “Hey, you! Yeah, you! Remember me? Bitcoin is under a 51% attack! Vanderpoole used a virus to bend existing mining pools to his goals. He’s using them to mine empty blocks to hold the Bitcoin ecosystem hostage and force people to support increasing bitcoin’s supply.” – Satoshi Nakamoto',
      paragraph_two:
        '—The old computer coughs a little, then produces a wad of data in something called a “spreadsheet”: contact info for some of the largest bitcoin pool operators and a patch to the virus that is letting BitRey control them. Send the file to them so they can regain control of their machines and join your fight against BitRey.',
      paragraph_three:
        'HOLOCAT: “We’ve got more work to do. Well, you do. I’m gonna run through walls and scare mice.”',
    },

    solo_one: {
      title: 'You vs. Bitrey',
      nav_title: 'Mining alone',
      step_zero_heading: 'Let’s give it a try',
      step_zero_paragraph_one:
        'While you’re waiting for the pool operators you reached out to, you decide to fend off BitRey by yourself. Here’s how your hash rate stacks up. How do you think this will go?',
      step_one_heading: 'We’re off to the races',
      step_one_paragraph_one:
        'We’re now mining 100 blocks to see how many you and BitRey will mine.',
      step_two_heading: 'That did not go too well!',
      step_two_paragraph_one:
        'Yikes, we just don’t have enough hashpower to compete with BitRey and the virus-controlled pools. Let’s see if we can defeat BitRey for the next 100 blocks with the other pool operators. Bitcoin has been running for over a century and it’s not going down without a fight.',
    },

    pool_one: {
      title: 'Pool vs. BitRey',
      nav_title: 'Finding friends',
      waiting_screen_heading: 'We need support!',
      waiting_screen_paragraph_one:
        'Your miners in the warehouse alone don’t stand a chance. If you combine your hashing power with other pools, you might be able to hold the line against the assault.',
      waiting_screen_paragraph_two:
        'Let’s wait until the others join your pool, which HoloCat insists gets named after her, so we can combine forces.',
      waiting_button: 'Waiting...',
      continue_button: "Let's go",
    },

    pool_two: {
      title: 'Pool vs. BitRey',
      nav_title: 'Mining together',
      step_zero_heading: 'Here we go',
      step_zero_paragraph_one:
        'When you combine your hashrate with the other pool operators, can you stand up against BitRey?',
      step_two_heading: 'Another defeat!',
      step_two_paragraph_one:
        'Something is wrong. Only Hash Hoppers found blocks. Why do you think that might be?',
    },

    coop_one: {
      title: 'Coop vs. BitRey',
      nav_title: 'Something went wrong',
      heading: 'Something is not quite right yet.',
      paragraph_one:
        'Hash Hoppers, the one with the most hash power, is finding all your blocks but others find nothing.',
      paragraph_two:
        'The problem is that everyone is checking the same nonces while they’re mining. How can you better coordinate?',
      paragraph_three:
        ' You decide to place a unique identifier in the “extraNonce” when preparing the block data for each of you to prevent duplicate efforts.',
    },

    coop_two: {
      title: 'Coop vs. BitRey',
      nav_title: 'The extraNonce',
      heading: 'What is the extraNonce?',
      paragraph_one:
        'For the Stratum mining pool protocol (not bitcoin protocol), the coinbase transaction also has something called the “extra nonce”. When providing miners with the block data, mining pools divide the extra nonce into two parts: “extranonce1” and “extranonce2”.',
      paragraph_two:
        'Splitting the extra nonce into two parts has several advantages:',
      list_one: 'It prevents pool participants from doing the same work.',
      list_two:
        'It allows the pool to send the same transaction list to all miners that are pooling together. That means miners simply have to update “extranonce2” and not change transactions included in the block.',
      list_three:
        'The “extranonce1” allows pools to identify and determine share contribution because each miner gets their own “extranonce1”.',
      paragraph_three:
        ' Miners who contribute to a pool update the “extranonce2” and cycle through the nonce in the block header. If they don’t find a solution, they repeat the process with a different “extranonce2” until they do.',
      paragraph_four: 'Let’s try again splitting the work using this method.',
    },

    coop_three: {
      title: 'Coop vs. BitRey',
      nav_title: 'Mining with teamwork',
      step_zero_heading: 'One more time...',
      step_zero_paragraph_one:
        'Let’s see if we stand a chance against BitRey now with our improved strategy of dividing the nonce space.',
      step_two_heading: 'You did it!',
      step_two_paragraph_one:
        'Together you and the other pool operators were able to hold back BitRey’s attempt to overtake the network.',
    },

    split_one: {
      title: 'Splitting Rewards',
      nav_title: 'Splitting the fair share',
      heading: 'Nicely done.',
      paragraph_one:
        'Not only did you defend the network against BitRey, you also earned bitcoin as a reward!',
      paragraph_two:
        'For every block that is mined, the miner gets a reward in bitcoin. If more than one person worked on the block, the group of miners (mining pool) gets a reward to share.',
      paragraph_three: 'This reward is made up of two things:',
      list_one: 'fees for all the transactions in the block',
      list_two: 'the block subsidy',
      paragraph_four:
        'You and your miner friends have earned a total of 6.1 bitcoin and are looking for a good way to split it up. It should be divided based on how much work each of you put in.',
      paragraph_five:
        'Mining pools solve this by tracking how many partial solutions each miner has generated. A pool assigns each miner a minimum difficulty (lower than the block difficulty) based on their hash power. Every few seconds a miner finds one of those easier solutions and notifies the pool. The pool then tracks all the submitted shares and splits up the block rewards accordingly.',
      paragraph_six: 'Let’s take a look at this in action.',
    },

    split_two: {
      title: 'Splitting Rewards',
      nav_title: 'Calculating rewards',
      step_zero_heading: 'Let’s review everyone’s efforts',
      step_zero_paragraph:
        'We will re-run the battle. This time we will only focus on our pool, specifically on the number of partial solutions each miner found.',
      step_two_heading: 'Let’s do the math',
      step_two_paragraph:
        'Take a look at the numbers above and see if you can find a fair way to split up the rewards. Figured it out? Let’s go over it step by step.',
      step_three_heading: 'Hash rate percentage',
      step_three_paragraph:
        'As you know, this represents the amount of work every miner has chipped in to find blocks. But the mining pool has no way of knowing or measuring this number, since miners only forward successful solutions.',
      step_four_heading: 'Block found percentage',
      step_four_paragraph:
        'The chance of finding a block is very low since it has a lot to do with luck. Especially in scenarios with some extremely powerful miners, the really small miners may contribute work but never find any blocks. ',
      step_five_heading: 'Partial solution percentage',
      step_five_paragraph:
        'Now this number will work. Miners report these solutions to easier problems regularly to pools. That allows pools to fairly accurately measure how much work each pool has provided.',
      step_six_heading: 'Splitting the rewards',
      step_six_paragraph:
        'Now we can take the rewards of 6.1 bitcoin and split them up according to the percentage of partial solutions of each pool. Congratulations!',
    },

    outro_one: {
      title: 'Outro',
      nav_title: 'Chapter complete',
      heading: 'Take that, Vanderpoole! ',
      paragraph_one:
        'Great work! You and your collaborators were able to fend off Vanderpoole’s 51% attack by pooling your resources together. Empty blocks are no longer being submitted and it looks like he’s given up.',
      paragraph_two:
        'It’s time to reap your rewards! Go to the next chapter to withdraw your bitcoin.',
    },
    resources: {
      solo: {
        hashrate_heading: 'Mining Hashrate',
        hashrate_paragraph:
          "An individual miner's hashrate refers to the computational power they contribute to the Bitcoin network's mining process. It is the rate at which their mining hardware can perform the necessary mathematical calculations to attempt to mine new blocks. The hashrate of an individual miner is typically measured in hashes per second, or at scale in terahashes, one-trillion hashes per second (TH/s), depending on the scale of their mining operation and the capabilities of their mining hardware.",
      },
      pool: {
        pool_heading: 'Mining Pool',
        pool_paragraph:
          'A mining pool plays a pivotal role in cryptocurrency mining, offering several key benefits to individual miners. By pooling together the computational power and resources of many participants, mining pools enhance the chances of successfully mining new blocks, resulting in more predictable and consistent earnings. They also provide a platform for miners to access advanced mining equipment and expert support, reducing barriers to entry and leveling the playing field. Furthermore, mining pools help distribute rewards efficiently, ensuring that miners receive their fair share for their contributions, making cryptocurrency mining accessible, stable, and financially rewarding for a broader community of participants.',
      },
      coop: {
        distribution_heading: 'Job Distribution',
        distribution_paragraph:
          "Mining pools take precautions to ensure that their participants do not mine the same nonce for the same block. This is important because, in the Bitcoin mining process, miners compete to find a nonce that results in a valid block. If two miners in the same pool were to work on the same nonce simultaneously, it would be inefficient, and only one would receive the block reward. To prevent this, mining pools use a process called 'work assignment' or 'job distribution' to allocate work efficiently. Mining pools distribute work to individual miners or participants. When a new block needs to be mined, the pool's server (or pool operator) creates a unique 'job' for the miners. This job includes all the information needed to mine the block, such as the current list of unconfirmed transactions, the previous block's header, and the target difficulty.",
        shares_heading: 'Submitting Shares',
        shares_paragraph:
          "Miners work on these assigned jobs and continuously attempt to find the correct nonce. When a miner believes they have a solution, they submit what's called a 'share' to the pool server. This share demonstrates that the miner is actively working on solving the problem. Shares are much easier to find than the actual solution, but they serve as proof of the miner's efforts.",
      },
      split: {
        payout_heading: 'Payout Schemes',
        payout_subheading:
          'A mining pool can choose to distrubute the block rewards in several ways the differ in some subtle but key ways:',
        pps_heading: 'Pay-Per-Share (PPS)',
        pps_paragraph:
          "In PPS, miners receive a fixed payout for each valid share they submit, regardless of whether the pool successfully mines a block or not. This system provides miners with a steady and predictable income, making it a preferred choice for those who value consistency in their earnings. PPS minimizes the variance in rewards, as miners are compensated for their work on a per-share basis, offering a reliable source of income in the world of volatile cryptocurrency mining. However, PPS may deduct a fee from the miner's earnings if the pool doesn't successfully mine a block. This fee is meant to cover operational costs and mitigate the risk for the pool operator in case no blocks are mined within a certain timeframe. In traditional PPS, miners receive a reduced payout when the pool faces difficulties.",
        pplns_heading: 'Pay-Per-Last-N-Shares (PPLNS)',
        pplns_paragraph:
          "PPLNS takes into account a miner's contribution over a specific window of the last N shares. Miners are paid based on the number and difficulty of shares they've submitted within that window. PPLNS encourages miners to stay active in the pool, as it rewards consistent participation and helps to reduce the risk of pool-hopping strategies. Miners receive payouts when the pool successfully mines a block, and the rewards are distributed proportionally to their recent contributions, providing a fair and performance-driven approach to earning in the mining ecosystem.",
        pps_plus_heading: 'Pay Per Share + (PPS+)',
        pps_plus_paragraph:
          "PPS+ offers miners a fixed payment for each share they contribute to the pool's mining efforts. However, PPS+ typically includes an additional bonus or premium as an incentive to miners who contribute to the pool's stability and reliability. This bonus is designed to encourage miners to stay active in the pool and foster long-term participation. PPS+ provides miners with a consistent and predictable income, while the added bonus makes it an attractive option for those seeking both reliability and extra rewards in the world of cryptocurrency mining.",
        fpps_heading: 'Full Pay Per Share (FPPS)',
        fpps_paragraph:
          "In Full PPS, miners receive a fixed payout for every share they submit to the pool, irrespective of whether the pool successfully mines a block or not. This approach provides miners with a steady and predictable income, making it an attractive choice for those who value reliability in their earnings. Unlike traditional PPS, Full PPS ensures that miners receive their full payout for their contributed work, without any potential deductions, even if the pool faces occasional difficulties. It's a stable and straightforward method that appeals to miners seeking consistent income in the world of cryptocurrency mining.",
      },
    },
  },

  chapter_four: {
    title: 'Claiming your 1.61 bitcoin',
    paragraph_one:
      'Phew, that was close! You are still shaking from your battle against BitRey, yet relieved that you and your friends won.',
    paragraph_two:
      'As you settle at your desk, you take a deep breath and drift off to replay the day’s events. Your hands keep themselves busy playing with the mysterious envelope, as you wonder who sent it. ',

    intro_one: {
      title: 'Intro',
      nav_title: 'Secutring the bag',
      paragraph_one:
        'HOLOCAT: “One of us better sleep. You need to get home and start contacting the mining pools. They’ll want to know more about it than the world will.”',
      paragraph_two:
        'As you settle at your TMY92-P Hover Desk, you replay the day’s events. Vanderpoole. BitRey. The revelation that mining pools never agreed to shut down in protest. Could it all be true? Was this all staged? And how much longer are you supposed to look after this cat?',
      paragraph_three:
        'Whatever happens next, you will most likely need some funds. You realize that you never claimed the mining rewards from your competition with BitRey. You decide to withdraw them to help pay for your flight back home.',
    },

    public_key_one: {
      title: 'Public key',
      nav_title: 'Key pairs',
      heading: 'About key pairs',
      paragraph_one:
        'According to the mining pool, it looks like you have 1.61 bitcoin to claim from all the work you did earlier. ',
      list_one: ' Private key',
      list_two: 'Public key',
      paragraph_two:
        "But wait, you don’t even have a wallet! You might be wondering where you can buy one. While you can purchase hardware to build certain kinds of wallets, you can actually just make one with your computer or mobile device. Let's do it!",
      paragraph_three:
        'If you signed up for an account at any point, you got something called a personal code. In cryptography, this is called a “private key” and it is often part of a pair:',
      paragraph_four:
        ' A single key pair is all that’s needed to create a wallet and control the funds within it. When you want to spend bitcoin, you use the private key. When you want to receive bitcoin, you use the public key.',
    },

    public_key_two: {
      title: 'Public key',
      nav_title: 'Elliptic curve cryptography',
      paragraph_one:
        'So, we have the private key, it’s the personal code you got when you signed up. How do we generate a public key from it?',
      paragraph_two:
        'To do that, we need to take a peek at a fascinating branch of cryptography called elliptic curves. This is called Elliptic Curve Cryptography, or ECC for short.',
      paragraph_three:
        'ECC involves taking certain points on an elliptic curve and performing addition and multiplication on the points.',
      paragraph_four:
        'Bitcoin uses a specific curve called secp256k1. In the image, you see a simplified version that is easier to visualize, but follows the same mathematical rules.',
      paragraph_five:
        'We start with a specific point on this curve, called the',
      tooltip_one: {
        highlighted: 'Generator Point',
        question: 'What is the Generator Point?',
        link: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=What%2520is%2520the%2520Generator%2520point%253F',
      },
    },

    public_key_three: {
      title: 'Public key',
      nav_title: 'Calculate the public key',
      paragraph_one:
        'To derive a public key from a private key, we perform an elliptic curve operation repeatedly with the generator point (<Link href="public-key-3/help" className="underline">find out why</Link>). The generator point is a specific point on the curve. Its value is part of the secp256k1 standard and it’s always the same:',
      paragraph_two:
        'The elliptic curve operation is similar to addition and therefore its repetition is similar to multiplication. We use the * symbol to describe the algorithm (<Link href="public-key-3/help" className="underline">learn more</Link>), where `k` is the private key and `P` is the corresponding public key:',
      paragraph_three:
        'Complete the function which accepts a private key as a hex-encoded string and returns the corresponding public key as a GE (Group Element) object.',
      success:
        'Good job! That public key is pretty long. Let’s try to compress it!',
    },

    public_key_four: {
      title: 'Public key',
      nav_title: 'Compress the public key',
      paragraph_one:
        'The public key has an x and y coordinate for a total of 64 bytes. This can be compressed into 33 bytes by removing the y coordinate and prepending a single byte of metadata. That byte will indicate if the Y coordinate is even or odd. Because the elliptic curve equation only has two variables, the complete public key can be computed later by the verifier using only x and the metadata:',
      paragraph_two:
        'The metadata byte should be `2` if y is even and `3` if y is odd. Complete the function `compress_publickey()` to accept a public key and return a 33 byte hex string representing the compressed public key.',
      success:
        'Excellent. Now we have our compressed public key. Next we need to hash it and encode it in a human-friendly format.',
    },

    address_one: {
      title: 'Address',
      nav_title: 'A one way street',
      heading: 'Nice work!',
      paragraph_one:
        'And there you have it! Your compressed public key! There are lots of interesting things we can do with it, including generating addresses for our wallet. We’ll learn about that in the next challenge.',
      paragraph_two:
        'Note that generating a public key is a one way street. You can’t figure out the private key used to generate a public key unless you solve a notoriously difficult math problem called the ',
      tooltip_one: {
        question: 'How is the discrete log problem relevant to bitcoin?',
        link: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=how%2520is%2520the%2520discrete%2520log%2520problem%2520relevant%2520to%2520bitcoin%253F',
        highlighted: 'discrete log problem ',
      },
    },

    address_two: {
      title: 'Address',
      nav_title: 'Find the compressed public key',
      paragraph_one:
        'Do you remember the hashing challenge? It turns out you can generate the simplest type of bitcoin address by hashing your compressed public key. Bitcoin uses two different hashing algorithms for this: SHA-256 and RIPEMD-160.',
      paragraph_two:
        'The first step is to perform a SHA-256 hash on your compressed public key. Then perform a RIPEMD-160 hash on that SHA-256 output digest. The final result will be 20 bytes encoded as a hex string.',
      paragraph_three:
        'Complete a function that accepts a 33-byte compressed public key as a hex string and returns a 20-byte public key hash as a hex string.',
      success: 'Great. One more step and you will have your wallet address.',
    },

    address_three: {
      title: 'Address',
      nav_title: 'Get a P2WPKH address',
      paragraph_one:
        'There are multiple types of bitcoin addresses. We want to create a Testnet Witness Public Key Hash (wpkh) address to encode the 20-byte compressed public key hash. First we need to append the hash with the witness version number `0`. These 21 bytes are known as the witness program. The witness program is encoded into a human-friendly format called bech32, which will append a human-readable prefix and a checksum.',
      paragraph_two: 'The prefix is determined by the network:',
      list_one: 'Mainnet: ‘bc’',
      list_two: 'Testnet: ‘tb’',
      list_three: 'Regtest: ‘bcrt’',
      paragraph_three:
        "You will want to use the testnet prefix 'tb' in this function.",
      paragraph_four:
        'The data returned by this function will be your Bitcoin address!',
      success: 'Now you have an address that mined bitcoin can be sent to.',
    },

    outro_one: {
      title: 'Outro',
      nav_title: 'Chapter complete',
      heading: 'Success!',
      paragraph_one: 'You created your very own bitcoin wallet!',
      paragraph_two:
        'You withdraw the bitcoin from the mining pool into the wallet you just created. You are now fully funded and ready for whatever Vanderpoole and BitRey may throw at you next.',
    },
    resources: {
      public_key: {
        elliptic_curve_reason_heading:
          'The reason for elliptic curve operations',
        elliptic_curve_reason_paragraph:
          'We use a very specific set of steps to derive the public key because there is mathematical proof that reversing this operation is essentially impossibly hard. That feature also applies to other algorithms ( like RSA), but those have much larger key sizes and are less efficient computations. The steps we follow were chosen because:',
        elliptic_curve_reason_list_one:
          'we want a system where anyone can join using minimal resources',
        elliptic_curve_reason_list_two:
          'we want messages to be short (and therefore cheap to transmit)',
        elliptic_curve_reason_list_three:
          'we need to prove we know a secret without giving away that secret',
        elliptic_curve_reason_list_four:
          'we need it to be practically impossible for anyone else to compute our secret',
        secp_heading: 'secp256k1',
        secp_paragraph:
          'Secp256k1 is the name of the elliptic curve used by Bitcoin to implement its public key cryptography. All points on this curve are valid Bitcoin public keys.',
        generator_point_heading: 'Generator point',
        generator_point_paragraph:
          'A specific point on the secp256k1 curve. Its value is part of the secp256k1 standard and it’s always the same. This point is not different from other points on the curve, but it is agreed up on as the standard starting point for calculations. No one really knows why this particular point was chosen.',
        elliptic_curve_operations_heading: 'Elliptic curve operations',
        elliptic_curve_operations_paragraph:
          'Elliptic curves have their own mathematical rules, so simple operations like addition and multiplication work differently. For simplicity and brevity, established symbols are re-used, like using a “*” for operations that are similar to multiplication.',
        discrete_log_heading: 'Discrete logarithm',
        discrete_log_paragraph:
          'A mathematical system where you can, for example, multiply but cannot divide. A simple metaphor for this is looking at a clock. Three hours past 11 o’clock is 2 o’clock. So we could say “11+3=2”. However if wanted to perform “2-x=11” and solve for x, you would have infinite possible answers (3, 15, 27, 39...). More on <Link href="https://en.wikipedia.org/wiki/Discrete_logarithm" className="underline">wikipedia</Link>.',
      },
      address: {
        hash_algo_heading: 'SHA-256, RIPEMD-160',
        hash_algo_paragraph:
          'Hash functions digest any amount of any kind of data and always return a result of the same size. For SHA256, it’s 32 bytes. For RIPEMD-160, it’s 20 bytes. The output is deterministic (always the same output for the same input) but otherwise, indistinguishable from random. Hash functions effectively reduce data to a small consistent fingerprint.',
        wpkh_heading: 'Witness Public Key Hash (wpkh) address',
        wpkh_paragraph:
          'A Bitcoin address is a string of characters that is designed for users to handle. It is short, easy to copy and paste, and has some kind of built-in checksum to ensure that it is always copied correctly. It safely encodes a Bitcoin output script that the recipient can spend from. There any several types of output script and several encoding mechanisms. In this challenge we encode a compressed public key with bech32 to create what is called a witness public key hash address.',
        network_heading: 'Mainnet, Testnet, Signet, and Regtest',
        network_paragraph:
          'When developing Bitcoin software, it is important to test your code before you trust real money with it! One of the simplest ways to test Bitcoin software is to use a different blockchain with a new genesis block where the coins don’t matter, mining is free and easy, and everything can be reset at any time. These chains are supported by a unique network of nodes that does not interfere with the real coins and nodes on Mainnet. Testnet and Signet are the names of two such alternate Bitcoin blockchains that are maintained in parallel with Mainnet on a global scale. Regtest is a developer mode designed to be run locally with no network connections needed at all.',
      },
    },
  },

  chapter_five: {
    title: 'The keyholder',
    paragraph_one:
      'It’s late, and you’re getting sleepy, but as you shut your eyes for a moment, a double dose of bad news arrives. 1) Vanderpoole is back on TV. 2) He is claiming to be the great-grandson of Satoshi Nakamoto. He also looks sleep-deprived.',
    intro_one: {
      title: 'Intro',
      nav_title: 'Don’t trust, verify',
      paragraph_one:
        '—DEBORAH CHUNK: “Mr. Vanderpool. You recently made a staggering claim on anti-social media that you are the great-grandson of Satoshi Nakamoto. Is that correct? Is this true?”',
      paragraph_two:
        '—VANDERPOOLE: “It darn tootin’ is, Deborah. I have known this for a long time. You see, my family passed a CD-ROM down for generations. It contains the private keys to my great-grandfather’s enormous trove of bitcoin. So when I speak for miners, know that I also speak for Satoshi Nakamoto.”',
      paragraph_three:
        '—DEBORAH CHUNK: “Is there any way we can verify that you actually own the private keys to Satoshi Nakamoto’s bitcoin?”',
      paragraph_four:
        '—VANDERPOOLE: “Indeed there is. It is a simple matter of public key cryptography.”',
      paragraph_five: '—DEBORAH CHUNK: But why wait so long to reveal this?',
    },
    intro_two: {
      nav_title: "Vanderpoole's bold claim",
      paragraph_one:
        '—VANDERPOOLE: “I didn’t have the courage. There have always been rumors about my family’s history, ones that I could easily put to rest. But I wasn’t ready for that much publicity. After all, I live a humble, secluded life on a private island/dude ranch/castle.”',
      paragraph_two:
        '—VANDERPOOLE: “But now that bitcoin’s future is on the line, I knew I had to tell the world. I can only say I’m sorry for not coming forth sooner. The CD-ROM also contains Satoshi’s Nakamoto’s revised plans for bitcoin. He always regretted the 21 million supply limit. Even though I plan to fulfill my grandfather’s dream of hard forking bitcoin in favor of perpetual bitcoin issuance.”',
    },
    intro_three: {
      nav_title: 'A message from Satoshi',
      paragraph_one:
        '—Your TXM4H-A Hover Screen chirps to life. You have a new message.',
      paragraph_two: '—HOLOCAT: Don’t forget to boop my nose.',
      paragraph_three:
        'SATOSHI NAKAMOTO: “Vanderpoole is not who he claims to be. You can expose him. Ask him to prove ownership of Satoshi’s bitcoin by signing a message with the private keys.” - Satoshi',
    },
    derive_message_one: {
      title: 'Derive the message',
      nav_title: 'The message in question',
      heading: 'Vanderpoole says he signed a message with Satoshi’s keys:',
      code_one: `-----BEGIN BITCOIN SIGNED MESSAGE----- \n \n I am Vanderpoole and I have control of the private key Satoshi used to sign the first-ever Bitcoin transaction confirmed in block #170. This message is signed with the same private key. \n \n -----BEGIN BITCOIN SIGNATURE----- \n \n`,
      code_two:
        '<span className="break-all"> H4vQbVD0pLK7pkzPto8BHourzsBrHMB3Qf5oYVmr741pPwdU2m6FaZZmxh4ScHxFoDelFC9qG0PnAUl5qMFth8k= </span>',
      code_three: '\n \n-----END BITCOIN SIGNATURE-----',
      paragraph_two: 'What does this even mean?',
    },
    derive_message_two: {
      nav_title: 'Finding the public key',
      paragraph_one:
        'We learned in chapter 4 that private keys are huge random numbers kept secret by whomever generated them. We can use Elliptic Curve math to derive a public key from that private key.',
      paragraph_two:
        'The public key can be shared as a unique identifier and the private key is used to prove a person has control of that identifier. That proof is called a SIGNATURE. To create a signature you need a message and a private key. Anyone can verify the signature with a copy of the message and the corresponding public key.',
      paragraph_three:
        'Vanderpoole has provided a signature and a message. Where is the public key?',
    },
    derive_message_three: {
      nav_title: "Find Satoshi's signature",
      heading: 'Let’s start with finding Satoshi’s signature',
      paragraph_one:
        'Hal Finney <link href="https://bitcointalk.org/index.php?topic=155054.0" target="_blank" className="underline">claimed</Link> Satoshi sent him the first Bitcoin transaction ever, confirmed in block #170. That transaction can be found on a <Link href="https://blockstream.info/tx/f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16?expand" target="_blank" className="underline">block explorer here</Link>. In the scriptSig of input #0 there is a chunk of data following pushbytes... Find it and paste it below.',
      placeholder: 'Paste the data here',
      success:
        'Nicely done! This is actually Satoshi’s signature, authorizing the transfer of his Bitcoin to Hal Finney.',
    },
    derive_message_four: {
      nav_title: "Find Satoshi's public key",
      heading: 'So where is his public key?',
      paragraph_one:
        'It’s actually stored along with the bitcoin Satoshi generated by mining block #9.',
      paragraph_two:
        '<Link href="https://blockstream.info/tx/0437cd7f8525ceed2324359c2d0ba26006d92d856a9c20fa0241106ee5a597c9?output:0&expand" target="_blank" className="underline">Follow the link</Link> to the source transaction at the top of the input #0 section. This is the transaction Satoshi created by mining block #9. The transaction creates 50 BTC and locks them under control of... a public key! Find the data beginning with 0411... in the scriptPubKey.',
      paragraph_three:
        'The public key lives between the script commands OP_PUSHBYTES and OP_CHECKSIG. Paste it below:',
      placeholder: 'Paste the data here',
      success: 'That’s it!',
    },
    derive_message_five: {
      nav_title: 'Verifiying the signature next',
      paragraph_one:
        'So Satoshi created a transaction that sent 50 BTC to his public key. Then he used his private key to create a signature that transferred 10 of those BTC to Hal Finney’s public key.',
      paragraph_two:
        'Next we need to learn how to verify a signature. But something is still missing... what is the message Satoshi signed to authorize the transaction for Hal?',
    },
    derive_message_six: {
      nav_title: 'Derive the message',
      heading: 'Derive the message from the transaction',
      paragraph_one:
        'It should be clear by just looking at the block explorer web page that a Bitcoin transaction has many different parts. Some parts are just small numbers and some parts are larger chunks of data. The Bitcoin protocol has a very specific algorithm for creating messages from transactions, so those messages can be signed by private keys.',
      paragraph_two:
        'We will summarize the process outlined here. It conveniently uses <Link href="https://en.bitcoin.it/wiki/OP_CHECKSIG#Code_samples_and_raw_dumps" target="_blank" className="underline">this exact same transaction</Link> as an example.',
      paragraph_three:
        'To begin, we need the raw bytes that make up the complete transaction. <Link href="https://blockstream.info/api/tx/f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16/hex" target="_blank" className="underline">Our block explorer</Link> can help with this. Use the "hex" API endpoint and paste the entire blob of data.',
      input_challenge_label: 'Paste the transaction blob',
      success_message_line_one:
        'This is the raw transaction with each component labeled:',
      success_message_line_two: 'version:',
      success_message_line_three: 'number of inputs:',
      success_message_line_four: 'hash of tx being spent by input #0:',
      success_message_line_five:
        'index of output of tx being spent by input #0:',
      success_message_line_six:
        'scriptSig to authorize spending the indicated output:',
      success_message_line_seven: 'input #0 sequence:',
      success_message_line_eight: 'number of outputs:',
      success_message_line_nine:
        'output #0 value (10 BTC or 1,000,000,000 satoshis):',
      success_message_line_ten:
        'output #0 scriptPubKey (Hal Finney’s public key plus OP_CHECKSIG):',
      success_message_line_eleven:
        'outut #1 value (40 BTC or 4,000,000,000 satoshis):',
      success_message_line_twelve:
        'output #1 scriptPubKey (Satoshi’s own public key again, for change):',
      success_message_line_thirteen: 'locktime:',
    },
    derive_message_seven: {
      nav_title: 'Build the signed message',
      paragraph_one:
        "It's impossible to sign a message containing it's own signature, so the scriptSig needs to be removed. In the Bitcoin protocol it is actually replaced by the scriptPubKey of the transaction output we are spending.",
      paragraph_two:
        'We already found the scriptPubKey in the previous step, you can paste that in the first blank.',
      paragraph_three: {
        a: 'The last thing we need for our transaction message is a',
        b: '. We\'ll cover this more in the next chapter but for now we\'ll just add the value <span className="font-bold">01000000</span> to the end of the message.',
      },
      tooltip_one: {
        question: 'What are sighash flags?',
        link: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=what%2520are%2520sighash%2520flags%253F',
        highlighted: 'sighash type flag',
      },
      success: "Nice! You've constructed a signed message.",
    },
    verify_signature_one: {
      title: 'Verify the signature',
      nav_title: 'Verifying the signature',
      heading: 'Finally we have a message!',
      paragraph_one:
        'We also have a signature we know Satoshi created with his own private keys, and we have his public key. Let’s learn how to verify the signature and then we can try to verify Vanderpoole’s signature.',
    },
    verify_signature_two: {
      title: 'Verify the signature',
      nav_title: 'Hash the message',
      heading: 'Hash the transaction digest',
      paragraph_one:
        'The serialized transaction data we compiled in the last step is actually too long to sign or verify with ECDSA.',
      paragraph_two:
        'Do we know any way to compress large chunks of data into more consistent, manageable pieces? We sure do: hashing.',
      paragraph_three:
        'The Bitcoin protocol uses a double SHA256 digest to compress a transaction into a signable message.',
      paragraph_four:
        'Once we have a 32-byte hash, that data is re-interpreted as an integer. Yes, a 32-byte integer (that is a truly enormous number)!',
      success: 'Nicely done!',
    },
    verify_signature_three: {
      nav_title: 'Deocde the signature',
      heading: 'Decode the Signature',
      label_one: 'Paste the R value',
      label_two: 'Paste the S value',
      paragraph_one:
        "Satoshi's signature is encoded in a system called DER which is a subset of ASN.1.",
      paragraph_two:
        'There are two 32-byte numbers we need to extract. They are referred to as R and S respectively and are each prefixed by the bytes 0220 in the DER sequence. Instead of fully decoding the DER blob, just look for the prefixes and paste the R and S values.',
      paragraph_three:
        "# Satoshi's signature, from the input scriptSig of the tx to Hal Finney",
    },
    verify_signature_four: {
      nav_title: 'Decode the public key',
      heading: 'Decode the Public Key',
      label_one: 'Paste the x coordinate',
      label_two: 'Paste the y coordinate',
      paragraph_one:
        'We learned in chapter 4 that public keys are really points in the ECDSA curve, meaning they have an x and y value. The first byte 04 means "uncompressed" (as opposed to 02 and 03 like we learned in chapter 4). Remove that first byte and the remaining data are 32-byte x and y coordinates. Copy and paste again.',
      paragraph_two:
        "# Satoshi's public key, from the block 9 coinbase output scriptPubKey",
    },
    verify_signature_five: {
      title: 'Verify the signature',
      nav_title: 'Test the signature',
      heading: 'Verify the signature!',
      success: "You've done it! You've verified Satoshi's signature!",
      paragraph_one:
        'At this point we have everything we need to do some ECDSA math.',
      paragraph_two:
        'The ECDSA signature verification algorithm is explained <Link className="underline" href="https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm#Signature_verification_algorithm" target="_blank">here</Link> and <Link className="underline" href="https://www.secg.org/sec1-v2.pdf#page=52" target="_blank">here</Link>.',
      paragraph_three:
        'We created a Group Element object from the public key X and Y elements for you. You need to finish implementing the ECDSA signature verification function <span className="text-green">verify()</span> that should only return True if everything is valid!',
      paragraph_four:
        "We know Satoshi's signature is valid, it has been checked by every Bitcoin full node since 2010! If your program does not return True something is wrong.",
      python: {
        paragraph_five_part_one:
          'Hint: the <span className="text-green">pow()</span>',
        paragraph_five_part_two:
          'method can accept negative exponents and a modulus as arguments. More on the <Link className="underline" href="https://docs.python.org/3/library/functions.html#pow" target="_blank">documentation</Link>.',
      },
      javascript: {
        paragraph_five_part_one:
          'We have provided a helper function <span className="text-green">invert()</span>',
        paragraph_five_part_two:
          'which you will need in lieu of a JavaScript native modular exponentiation function.',
      },
    },
    validate_signature_one: {
      title: 'Validate the signature',
      nav_title: 'Prepare the message',
      heading: "Prepare Vanderpoole's message for verification",
      paragraph_one:
        'Vanderpoole used a <Link href="https://github.com/bitcoin/bips/blob/master/bip-0137.mediawiki" target="_blank" className="underline">Bitcoin message signing protocol</Link> for his stunt. The computation uses the same algorithm we\'ve already defined, but the preparation of the data is a bit different.',
      paragraph_two:
        "First, we need to encode his message into an array of bytes corresponding to the following template:',",
      paragraph_three:
        'Then we will double-SHA256 hash that blob of data, and convert that hash into an integer. Complete the function encode_message(). It should return a 32-byte hex value.',
      success: 'Nicely Done',
    },
    validate_signature_two: {
      nav_title: 'Prepare the signature',
      heading: 'Prepare Vanderpoole’s signature for verification',
      paragraph_one:
        'The Bitcoin message signing protocol Vanderpoole used specifies base64 for the signature. We need to decode that base64 string into a 65 byte sequence. For now, we can disregard the first byte of metadata. The remainder of the data are the 32-byte r and s values we learned about in step 6.',
      paragraph_two: {
        pre_link: 'Then we will',
        highlighted: 'double SHA-256',
        post_link:
          'hash that block of data, and convert that hash into an integer.Complete the function <span className="italic">decode_sig()</span>.',
        question: 'Why do we double hash in Bitcoin?',
      },
      javascript: {
        paragraph_two:
          'It should return an array with the [r, s] values as BigInts.',
      },
      python: {
        paragraph_two: 'It should return a tuple with the (r, s) values.',
      },
    },
    validate_signature_three: {
      title: 'Validate the signature',
      nav_title: 'See if Vanderpoole was lying',
      heading: 'So, is Vanderpoole a liar?!',
      paragraph_one:
        "Let's gather all the necessary components for the program and verify if Vanderpoole's signature actually originated from the private key linked to Satoshi's public key! Please fill in the missing parameters needed to execute the verify() function using the provided code.",
      paragraph_two:
        'Then we can run the program to see if Vanderpoole was lying. Drumroll please...',
      success:
        "This message indicates that the signature did not originate from Satoshi's public key, as the verification failed.",
    },
    validate_signature_four: {
      title: 'Validate the signature',
      nav_title: 'Find the correct key',
      heading: 'How did Vanderpoole even create that signature?',
      paragraph_one:
        'Holocat chimes in and says a defector in BitRey has sent us a list of public keys Vanderpoole commonly uses, maybe he used one of these keys to sign the message.',
      paragraph_two:
        'Please provide the key that successfully completes the verification process, allowing us to identify the public key Vanderpoole used to sign this message.',
      paragraph_three:
        "Let's see if you can verify Vanderpoole's message and signature using one of THESE keys?",
      success:
        "The signature is valid for this public key of Vanderpoole's, this was not satoshi!",
    },
    outro_one: {
      title: 'Outro',
      nav_title: 'Chapter complete',
      heading: 'Vanderpoole lied!',
      paragraph_one:
        "You didn't trust, you verified.<br>In doing so you discovered the whole story about his family was a fabrication, and you proved it to the whole world. This casts a big shadow on his credibility, and the credibility of his company.",
    },
    resources: {
      derive_message: {
        op_pushdata_heading: 'OP_PUSHDATA',
        op_pushdata_paragraph_one:
          'OP_PUSHDATA in Bitcoin script plays a crucial role in facilitating the insertion of arbitrary pieces of data into the blockchain. It is an opcode that allows for the inclusion of data elements of varying sizes, making Bitcoin’s scripting language more versatile. This opcode is particularly significant in enabling the implementation of various smart contract functionalities and custom transaction types. You can read more about some of these OP_CODES and more <Link href="https://en.bitcoin.it/wiki/Script#Constants" target="_blank" className="underline">here</Link>.',
      },
      verify_signature: {
        eliptic_curve_heading:
          'Elliptic Curve Digital Signature Algorithm (ECDSA)',
        eliptic_curve_paragraph_one:
          "ECDSA is a cryptographic algorithm used by Bitcoin to ensure that funds can only be spent by their rightful owners. A public key is derived from a private key through elliptic curve multiplication, which is computationally straightforward. However, reversing this process to derive the private key from the public key is computationally unfeasible. This one-way function is a cornerstone of Bitcoin's security.",
        public_private_key_heading: 'Public and Private Keys',
        public_private_key_paragraph_one:
          'In Bitcoin, a pair of keys is used to ensure secure transactions. The private key, kept secret, is used to sign transactions and prove ownership of a Bitcoin address. The public key, derived from the private key, can be shared and is used to verify that a signature is made by the private key holder, without revealing the private key.',
        signature_verification_heading: 'Signature Verification',
        signature_verification_paragraph_one:
          'Signature verification is crucial in Bitcoin to confirm that a transaction is authorized by the holder of the private key. In the context of ECDSA, it involves checking that a signature (comprising two numbers, r and s) is valid for a given public key and message. This verification ensures the integrity and authenticity of a transaction.',
        finite_field_arithmetic_heading: 'Finite Field Arithmetic',
        finite_field_arithmetic_paragraph_one:
          "This type of arithmetic, used in ECDSA, involves numbers within a fixed range or field. Operations such as addition, subtraction, multiplication, and finding modular inverses are performed with respect to the size of this field. This is essential for the elliptic curve calculations in Bitcoin's cryptography.",
        ge_and_fe_heading: 'Group Elements (GE) and Field Elements (FE)',
        ge_and_fe_paragraph_one:
          "In the context of elliptic curve cryptography, a group element typically represents a point on the elliptic curve. In the challenge, GE refers to such a point with specific x and y coordinates. FE represents an element of the finite field, used for calculations within the field's constraints.",
        modular_inverse_heading: 'Modular Inverse',
        modular_inverse_paragraph_one:
          "The modular inverse of a number a modulo m is a number b such that (a * b) % m = 1. Finding the modular inverse is a critical step in ECDSA signature verification. It's used in the calculation of u1 and u2 during the verification process.",
      },
      validate_signature: {
        message_verification_heading: 'Importance of Message Verification',
        message_verification_paragraph_one:
          'Message verification enhances the security of communications within the Bitcoin ecosystem. It allows parties to verify the authenticity and integrity of messages, which is valuable in situations where trust and verification are essential, such as in peer-to-peer transactions or communication between parties in a smart contract. Furthermore, message verification serves as a foundation for various applications, including identity verification and the attestation of ownership of a particular Bitcoin address. It adds a layer of cryptographic assurance, reinforcing the trustless and decentralized nature of the Bitcoin network.',
      },
    },
  },

  chapter_six: {
    title: `Offense is the best defense`,
    paragraph_one:
      'Vanderpoole is out to get you now that you’ve exposed him as a fraud. But despite that, plenty of scared people continue to cling to the myth he created around himself, his family, and their supposed ancestry. Times are scary, and people need a hero. Unfortunately, for many, he’s the best they’ve got.',
    intro_one: {
      title: 'Intro',
      nav_title: 'Was that really Satoshi',
      paragraph_one:
        '—SATOSHI NAKAMOTO: ”Great work. Now the world can see for itself that Vanderpoole is a fraud. Even if some don’t believe it yet, they will before our work is done.” – Satoshi Nakamoto',
      paragraph_two:
        '—You pause for a moment and realize that every message up to this point has been signed “Satoshi Nakamoto.” You had just assumed that this was just a pseudonymous moniker used by someone who adheres to bitcoin’s core principles. Surely, they couldn’t be the real Satoshi Nakamoto. But, you finally decide, it’s worth asking.',
      paragraph_three:
        '—”This might make me sound stupid, but are you the real Satoshi?”',
      paragraph_four:
        '—HOLOCAT: “Hardly the only thing that’s made you sound stupid until now.”',
    },
    intro_two: {
      nav_title: 'Paying Mike Ramen',
      paragraph_one:
        '—HOLOCAT: “Hardly the only thing that’s made you sound stupid until now.”',
      paragraph_two:
        '—SATOSHI NAKAMOTO: “Bitcoin moved far beyond its creator’s control many, many years ago. It would not matter if Vanderpoole or I were Satoshi’s grandson. Bitcoin is defined by the community and cannot be co-opted by a single individual or entity—including Satoshi. Proving this is the real battle. I hope you don’t mind, but I asked your eccentric freelance reporter friend to reach out.”',
      paragraph_three: '—He what? Ding.',
      paragraph_four: '—HOLOCAT: Don’t forget to boop me.',
      paragraph_five:
        '—MIKE RAMEN: “You’ve got guts. But you’ll need more. What you discovered is just the start. There’s more to this story, but we need to visit Vanderpoole’s private island to get it. It’s going to cost, so I could use your help pulling my funds off the multi-signature that you helped me set up. You’ve still got one of my keys, right?”',
    },
    in_out_one: {
      title: 'The ins and outs',
      nav_title: 'The unspent UTXO',
      paragraph_one:
        "Mike Ramen needs 1 BTC to book his flight to Vanderpoole's private island. You decide to send him 1 BTC from your chapter 3 mining rewards, which have been sent by the mining pool to the address you created in chapter 4.",
      paragraph_two:
        'You open you Bitcoin full node and execute a command to see where your money is in the blockchain.',
      paragraph_three:
        'This is an unspent transaction output (aka "UTXO"). You might recognize your compressed public key hash and address from chapter 4. The amount looks right, too: 1.61 BTC.',
    },
    in_out_two: {
      title: 'The ins and outs',
      nav_title: 'The receiving address',
      paragraph_one:
        'Mike Ramen gives you an address to send your 1 BTC contribution to:',
      paragraph_two:
        'Hm, that address looks a lot longer than yours! I wonder why...',
      paragraph_three: `Anyway, we need to create and sign a transaction that sends one of your 1.61 BTC to this address. We looked at Satoshi's transaction structure in chapter 5 but your transaction will be a bit different. Technology has improved a lot since block 170, and Bitcoin transactions are now version 2, and follow a new protocol called Segregated Witness.`,
    },
    in_out_three: {
      title: 'The ins and outs',
      nav_title: 'Transaction steps',
      paragraph_one:
        'Segregated Witness transactions work just like their legacy predecessors. There are a few global values like version and locktime. There is an array of inputs (UTXOs we want to spend) and an array of outputs (new UTXOs we want to create, for other people to spend in the future). There will also be an array of witnesses, one for each input. That is where signatures and scripts will go instead of the scriptSig.',
      paragraph_two:
        'The message serializations for all these components is documented <Link href="https://en.bitcoin.it/wiki/Protocol_documentation#tx" target="_blank" className="underline">here</Link>  and <Link href="https://github.com/bitcoinbook/bitcoinbook/blob/6d1c26e1640ae32b28389d5ae4caf1214c2be7db/ch06_transactions.adoc" target="_black" className="underline" >here</Link>.',
      paragraph_three:
        'And remember: integers in Bitcoin are serialized little-endian!',
    },
    in_out_four: {
      title: 'The ins and outs',
      nav_title: 'The input class',
      heading: 'Looking at the Class Input implementation',
      paragraph_one: 'It should have the following method:',
      paragraph_two:
        'The First two arguments are the transaction ID and the index of the output of that transaction you want to spend from.',
      paragraph_three:
        'Eventually we will pass in the txid and vout values you got above from listunspent. Note that hashes in Bitcoin are little-endian, which means that you will need to reverse the byte order of the txid string!',
      paragraph_four:
        "The second two arguments are the value of the output we want to spend (in satoshis) and something called a scriptcode. For now, just store these data as properties of the Input class, we won't need them until step 6.",
      paragraph_five:
        'We also need a serialize() method that returns a byte array according to the specification:',
      heading_two: 'Outpoint',
      table_one: {
        heading: {
          one: 'Description',
          two: 'Name',
          three: 'Type',
          four: 'Size',
        },
        row_one: {
          column: {
            one: 'Hash of transaction being spent from',
            two: 'txid',
            three: 'bytes',
            four: '32',
          },
        },
        row_two: {
          column: {
            one: "Position of output being spent in the transaction's output array",
            two: 'index',
            three: 'int',
            four: '4',
          },
        },
      },
      heading_three: 'Input',
      table_two: {
        row_one: {
          column: {
            one: 'txid and output index being spent from',
            two: 'outpoint',
            three: 'bytes',
            four: '36',
          },
        },
        row_two: {
          column: {
            one: 'ScriptSig length (always 0 for Segregated Witness)',
            two: 'length',
            three: 'int',
            four: '1',
          },
        },
        row_three: {
          column: {
            one: 'Always empty for Segregated Witness',
            two: 'script',
            three: 'bytes',
            four: '0',
          },
        },
        row_four: {
          column: {
            one: 'Default value is 0xffffffff but can be used for relative timelocks',
            two: 'sequence',
            three: 'int',
            four: '4',
          },
        },
      },
      success: 'The Input class looks good. Great Work!',
    },
    in_out_five: {
      title: 'The ins and outs',
      nav_title: 'Build the output class',
      heading: 'Finish the implementation of Class Output',
      paragraph_one: 'It should have the following method:',
      paragraph_two: `It accepts a Bitcoin address as a string (like the address from Mike Ramen) and a value as an integer. The value is expressed as a number of satoshis! Remember, 1 BTC = 100000000 satoshis. You will need to use our bech32 library again to decode the address into version and data components.
        The class also needs a serialize() method method that returns a byte array according to the specification:`,
      heading_two: 'Output',
      table: {
        heading: {
          one: 'Description',
          two: 'Name',
          three: 'Type',
          four: 'Size',
        },
        row_one: {
          column: {
            one: 'Number of satoshis being sent.',
            two: 'value',
            three: 'bytes',
            four: '8',
          },
        },
        row_two: {
          column: {
            one: 'Total length of the following script (the "witness program")."',
            two: 'length',
            three: 'int',
            four: '1',
          },
        },
        row_three: {
          column: {
            one: 'The segregated witness version. Derived from the bech32 address.',
            two: 'version',
            three: 'int',
            four: '1',
          },
        },
        row_four: {
          column: {
            one: 'Length of the following witness program data.',
            two: 'length',
            three: 'int',
            four: '1',
          },
        },
        row_five: {
          column: {
            one: 'The data component derived from the bech32 address.',
            two: 'index',
            three: 'bytes',
            four: '(var)',
          },
        },
      },
      success: 'The Output class looks good. Great Work!',
    },
    put_it_together_one: {
      title: 'Putting it all together',
      nav_title: 'Build the transaction digest',
      heading: 'Transaction digest',
      paragraph_one:
        'In chapter 5 we learned that to sign a transaction we first need to rearrange and hash its data into a message, which becomes one of the raw inputs to our signing algorithm. Since we are using segregated witness now, we also need to implement the updated transaction digest algorithm which is specified in <Link href="https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki" target="_blank" className="underline">BIP 143</Link>.',
      paragraph_two:
        'Remember each transaction input needs its own signature, and so some components of the digest algorithm can be cached and reused but others will be different depending on which input is being signed! Finish the transaction method digest(input_index) that computes the 32-byte message for signing an input.',
      list_heading: 'Some notes:',
      list_one: '"Double SHA-256" or dSHA256 = sha256(sha256(data))',
      list_two:
        'value is the amount of the satoshis in the output being spent from. We added it to our Input class back in step 2, and just saved it there inside the class until now.',
      list_three:
        'scriptcode is the raw Bitcoin script being evaluated. We also added this to our Input class back in step 2.',
      paragraph_three:
        "We'll dive in to this more in the next section, but to spend from your pay-to-witness-public-key-hash address, your scriptcode would be:",
      paragraph_four: '...which decodes to the following Bitcoin script.',
      paragraph_five:
        'For more information about scriptcode see <Link href="https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki" target="_blank" className="underline">BIP 143</Link>.',
      paragraph_six:
        'The raw transaction has preimage is the serialization of:',
      headings: {
        item_one: 'Description',
        item_two: 'Name',
        item_three: 'Type',
        item_four: 'Size',
      },
      table: {
        row_one: {
          item_one: 'Transaction version, default 2',
          item_two: 'version',
          item_three: 'int',
          item_four: '4',
        },
        row_two: {
          item_one: 'The dSHA256 of all outpoints from all inputs, serialized',
          item_two: 'bytes',
          item_three: 'bytes',
          item_four: '32',
        },
        row_three: {
          item_one:
            'The dSHA256 of all sequence values from all inputs, serialized',
          item_two: 'sequences',
          item_three: 'bytes',
          item_four: '32',
        },
        row_four: {
          item_one: 'The serialized outpoint of the single input being signed ',
          item_two: 'outpoint',
          item_three: 'bytes',
          item_four: '36',
        },
        row_five: {
          item_one: 'The output script being spent from',
          item_two: 'scriptcode',
          item_three: 'bytes',
          item_four: '(var)',
        },
        row_six: {
          item_one:
            'The value in satoshis being spent by the single input being signed',
          item_two: 'value',
          item_three: 'int',
          item_four: '8',
        },
        row_seven: {
          item_one: 'The sequence value of the single input being signed',
          item_two: 'sequence',
          item_three: 'int',
          item_four: '8',
        },
        row_eight: {
          item_one: 'The dSHA256 of all outputs, serialized',
          item_two: 'outputs',
          item_three: 'bytes',
          item_four: '32',
        },
        row_nine: {
          item_one: 'Transaction locktime, default 0',
          item_two: 'locktime',
          item_three: 'int',
          item_four: '4',
        },
        row_ten: {
          item_one: 'Signature hassh type, we will use 1 to indicate "ALL',
          item_two: 'sighash',
          item_three: 'int',
          item_four: '4',
        },
      },
      paragraph_seven:
        'Finally, the message we sign is the double SHA-256 of all this serialized data.',
      success: 'The digest() method looks good. Great Work!',
    },
    put_it_together_two: {
      title: 'Putting it all together',
      nav_title: 'Build the witness class',
      heading: 'Sign and Populate the Witness!',
      paragraph_one: `We wrote the ECDSA signature verification code in the last chapter, now we need to rearrange that a bit to create a valid signature. Add a method called compute_input_signature(index: int, key: int) to your Transaction class that accepts an input index number and a private key (a 32-byte integer!). It should compute the message digest for the chosen input using the digest() method from step 6, and return an ECDSA signature in the form of two 32-byte integers r and s.`,
      paragraph_two:
        'See <Link href="https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm" target="_blank" className="underline">this page</Link> for the ECDSA signing algorithm. Also <Link href="https://www.secg.org/sec1-v2.pdf#subsubsection.4.1.3" target="_blank" className="underline">this PDF</Link> (Page 44, Section 4.1.3).',
      paragraph_three:
        'The Bitcoin protocol requires one extra step to the signing algorithm, which requires that the s value is "low", meaning less than the order of the curve divided by 2. Learn more about this in <Link href="https://github.com/bitcoin/bips/blob/master/bip-0146.mediawiki#low_s" target="_blank" className="underline">BIP 146</Link>.',
      paragraph_four:
        'Next, finish the method sign_input(index: int, key: int) that calls our compute_input_signature(index, key) method and handles its return value. The r and s numbers need to be encoded with an algorithm called DER which we have implemented for you.',
      paragraph_five:
        'Bitcoin requires one extra byte appended to the DER-signature which represents the "sighash type". For now we’ll always use the byte 0x01 for this indicating "SIGHASH ALL".',
      paragraph_six:
        'Once we have that signature blob we need to create a Witness object with two stack items: the signature blob, and your compressed public key. Push the signature first, followed by the public key.',
      paragraph_seven:
        'The witness stack object can then be appended to the witnesses array of the transaction object.',
      success:
        'The compute_input_signature() and sign_input() methods look good. Great Work!',
    },
    put_it_together_three: {
      title: 'Put it All Together',
      nav_title: 'Sign the transaction',
      heading: 'Finish the implementation of Class Transaction',
      paragraph_one:
        'To complete our transaction we will need a serialize() method that outputs the entire transaction as bytes formatted for broadcast on the Bitcoin p2p network.',
      paragraph_two:
        'Our script should create and sign a Transaction object. It will have one input (the UTXO we identified in <span className="underline">Populate the Input</span>) and two outputs:',
      paragraph_three:
        'We know our input, we know our output. Are we ready to build and sign a transaction? Not quite. We have a 1.61 BTC input and a 1 BTC output... what happens to the other 0.61 BTC? Most of that will be "change" and we need to send it back to our own address!',
      paragraph_four:
        'Notice that there is no "count" value for witnesses. That is because the number of witness stacks must always be exactly equal to the number of inputs.',
      paragraph_five:
        'But wait! We need to include a "fee". We\'ll shave off a tiny piece of our change output for the mining pools to incentivize them to include our transaction in a block. Let\'s reduce our change from 61,000,000 to 60,999,000 satoshis.',
      paragraph_six:
        'Finally our work is done. Your script should end by returning the result of the transaction serialize() method. This is a valid signed Bitcoin transaction and we can broadcast it to the network to send Mike Ramen the money he needs!',
      headings: {
        item_one: 'Description',
        item_two: 'Name',
        item_three: 'Type',
        item_four: 'Size',
      },
      table: {
        row_one: {
          item_one: 'Currently 2',
          item_two: 'version',
          item_three: 'int',
          item_four: '4',
        },
        row_two: {
          item_one: 'Must be exactly 0x0001 for segregated witness',
          item_two: 'flags',
          item_three: 'bytes',
          item_four: '2',
        },
        row_three: {
          item_one: 'The number of inputs',
          item_two: 'in count',
          item_three: 'int',
          item_four: '1',
        },
        row_four: {
          item_one: 'All transaction inputs,serialized',
          item_two: 'inputs',
          item_three: 'Inputs[]',
          item_four: '(var)',
        },
        row_five: {
          item_one: 'The number of outputs',
          item_two: 'out count',
          item_three: 'int',
          item_four: '1',
        },
        row_six: {
          item_one: 'All transaction outputs,serialized',
          item_two: 'outputs',
          item_three: 'Outputs[]',
          item_four: '(var)',
        },
        row_seven: {
          item_one: 'All witness stacks, serialized',
          item_two: 'witness',
          item_three: 'Witnesses[]',
          item_four: '(var)',
        },
        row_eight: {
          item_one: 'Setting to 0 indicates finality',
          item_two: 'locktime',
          item_three: 'int',
          item_four: '4',
        },
      },
      bullet_one:
        'Mike Ramen gets 100,000,000 satoshis to bc1qgghq08syehkym52ueu9nl5x8gth23vr8hurv9dyfcmhaqk4lrlgs28epwj',
      bullet_two:
        'You get 61,000,000 back to your address bc1qm2dr49zrgf9wc74h5c58wlm3xrnujfuf5g80hs',
      success: "You've done it! You've built a transaction!",
    },
    outro_one: {
      title: 'Outro',
      nav_title: 'Chapter complete',
      heading: 'You did it!!!',
      paragraph_one:
        "You successfully built a transaction from scratch to pay Mike Ramen for his help. Now that we are done here let's get off this island...",
    },
    resources: {
      in_out: {
        input_class_heading: 'Input Class',
        input_class_paragraph_one: 'Placeholder Resources',
        output_class_heading: 'Output Class',
        output_class_paragraph_one: 'Placeholder Resources',
      },
      put_it_together: {
        building_a_transaction_heading: 'Building a Transaction',
        building_a_transaction_paragraph_one: 'Placeholder Resources',
      },
    },
  },
  chapter_seven: {
    title: `Offense is the best defense`,
    paragraph_one:
      'You and Mike Ramen arrive first via plane, then via dune buggy, and then via rowboat at Vanderpoole’s private island.',
    intro_one: {
      title: 'Intro',
      nav_title: 'Infiltrating the compound',
      paragraph_one:
        'You ask your compatriots whether they are worried about being spotted by Vanderpoole’s army of security drones.',
      paragraph_two:
        '—HOLOCAT: “Give me 15 minutes, and I’ll take care of them. They’re birds, and I’m a cat. They don’t stand a chance.”',
      paragraph_three:
        'Holocat extends his claws and deals with Vanderpoole’s drone army. Mike Ramen hands you a black turtleneck sweater, gloves, and a pair of night vision goggles.',
      paragraph_four:
        '—MIKE RAMEN: “You can’t do espionage in a Hawaiian shirt. What were you thinking? This isn’t another abandoned warehouse; this is a fortress. Here, I almost forgot. Take this grappling hook.”',
      paragraph_five:
        'You and Mike Ramen scale the castle walls of Vanderpoole’s primary residence. To your surprise, his home overflows with pro-bitcoin art, books, and paper magazines. He is or rather was, a true bitcoiner. A collection of miners dating back 125 years sit anointed in display cases. That’s when you see it: Vanderpoole’s workshop.',
    },
    intro_two: {
      nav_title: 'The control room',
      paragraph_one:
        'The gigantic room is a mess, though its layout is methodical. Inside open notebooks, Vanderpoole’s designs for the backdoor that clogged up the bitcoin network are sketched out in detail. You were right: It was all a lie, but one told not by a conniving villain but by a desperate believer in bitcoin whose company could no longer keep up with modern miners and so infected the pools with a virus.',
      paragraph_two:
        'The virus replaces a section of the code used by all the mining pools. It is the block building logic, the algorithm that assembles transactions into a block template that then gets combined with zillions of different nonces, looking for a valid hash. The template is still passed on to legitimate hashing code for proof-of-work, but by then the damage has been done.',
      paragraph_three:
        '—HOLOCAT: “What a loss. His family was once great. It’s so sad to see the Vanderpoole’s come to this.”',
      paragraph_four:
        'Investors will sell their BitRey shares en masse when the story drops, plummeting Vanderpoole’s net worth.',
    },
    intro_three: {
      nav_title: 'Correcting the software',
      paragraph_one:
        "But you can't just leave the crippled mining code on Vanderpoole's server to keep infecting all the mining pools. You have to fix it! As you read through the code, Holocat shows you a mempool display and it is filling up with unconfirmed transactions. The sooner this code gets fixed, the better.",
    },
    mempool_transaction_one: {
      title: 'Building blocks',
      nav_title: 'Assemble a block',
      heading: 'Code Challenge',
      paragraph_one:
        "This is the code you find on Vanderpoole's server. It imports the current mempool from a JSON file and stores all the unconfirmed transactions in memory as instances of the MempoolTransaction class. The function that Vanderpoole has crippled is assemble_block() (in Python, assembleBlock() in JavaScript). If you run the code as Vanderpoole left it, you will see the problem right away.",
      paragraph_two:
        'You need to fix the block assembly function not only to build valid blocks but also maximize the fees in the block, so the miners can earn the most profit possible given the consensus rules.',
      paragraph_three:
        'You can make the following assumptions to complete your mission:',
      bullet_one:
        'All transactions in the mempool have already been verified as valid.',
      bullet_two:
        'The coinbase transaction, and the weight it contributes to the block, can be ignored.',
      paragraph_four:
        'You can view the entire raw mempool JSON file <Link href="https://raw.githubusercontent.com/saving-satoshi/challenges/master/chapter7/javascript/mempool.json" target="_blank" className="underline">here</Link>.',
      paragraph_five:
        'Or browse an excerpt of the file in this table for some basic patterns:',
      headings: {
        item_one: 'Transaction ID',
        item_two: 'Fee',
        item_two_b: 'Satoshis',
        item_three: 'Weight',
        item_three_b: 'Virtual bytes',
        item_four: 'Ancestors',
      },
      table_one: {
        footer:
          'View the json file  <Link href="https://raw.githubusercontent.com/saving-satoshi/challenges/master/chapter7/javascript/mempool.json" target="_blank" className="underline">here</Link> for the rest of the transaction data',
      },
      poor: "It's a valid block, but can you do better? Try to collect more fees.",
      good: "It's a valid block, but you are not quite getting the most fees yet. Keep working, or continue, your choice.",
      success: "It's a valid block, and you optimized fees. Nice!",
    },
    outro_one: {
      title: 'Outro',
      nav_title: 'Chapter complete',
      heading: 'You did it!!!',
      paragraph_one:
        'You escape the compound and return home. Investors sell their BitRey shares en masse when the story drops, plummeting Vanderpoole’s net worth.',
    },
    resources: {},
  },

  chapter_eight: {
    title: 'Twenty-one Million',
    paragraph_one: `Now that the news is out, people are more interested in you than Vanderpoole. Deborah Chunk invites you to appear in person, potentially exposing yourself to Vanderpoole’s wrath. You once again hop into your Budgetcopter and fly downtown to the offices of LARGE BIG NEWS Studios.`,
    intro_one: {
      title: 'Intro',
      nav_title: `Intro`,
      paragraph_one: `—DEBORAH CHUNK: “These documents expose the alleged lies of Thomas Vanderpoole in a way that is certainly historic. It’s all very scandalous. The first thing people will want to know is whether you acted alone. The second is where you got your information.”`,
      paragraph_two: ` —You tell her about holocat and holocat only. You lie and say that the information was delivered directly to you and Mike Ramen by someone claiming to be Satoshi Nakamoto, who you suspect is actually a hacker collective. This last point causes Thomas Vanderpoole to call directly into the show while you’re still on it.`,
    },
    intro_two: {
      title: `Intro`,
      nav_title: `Intro`,
      paragraph_one: `—THOMAS VANDERPOOLE: “My family is Satoshi Nakamoto! Do you see what this hootenanny just said? They just admitted to being hackers, working for a collective that only uses the name Satoshi Nakamoto to claim a legacy that is rightfully mine. This scoundrel forged those photos to undermine the protests of bitcoiners who are rightfully upset about the elimination of block rewards!”`,
      paragraph_two: `—Thomas Vanderpoole continues to throw two century-old insults at you. He calls you a varmint, a rapscallion, a yellow belly, a greenhorn, and more. You almost feel bad for him. His family was undeniably important to Bitcoin’s history, even if their claims about Satoshi Nakamoto are transparently fake.`,
    },
    intro_three: {
      intro: `Intro`,
      nav_title: `Intro`,
      paragraph_one: `—DEBORAH CHUNK: “Mr. Vanderpoole, if I may. People are confused and uncertain about whether the bitcoin supply has been tampered with. Mr. Vanderpoole, can you prove that you did no such thing? Mysterious hacker and his holocat, can you prove Vanderpoole had attempted this crime against Bitcoin?”`,
    },
    building_blocks_one: {
      title: 'Building blocks',
      nav_title: 'Finding the chain tip',
      paragraph_one:
        'You know Vanderpoole has been trying to confuse people by mining blocks that generate more Bitcoin than they are allowed to, in order to inflate the money supply. These blocks are invalid because they break hard-coded protocol rules, but they might still fool some people running buggy or malicious software, or light clients that do not fully verify data they receive from the network.',
      paragraph_two:
        'You also know that somewhere out there on the network is a chain of VALID blocks from the genesis block to today\'s "chain tip", where every transaction and every block follows all the rules exactly correctly. This chain is the only "real" chain, the only chain that matters, and the only chain where the 21 Million Bitcoin supply is intact.',
      paragraph_three:
        "Now, on live TV in front of the entire world, you need to find the longest valid blockchain and verify the integrity of the coin supply. While you're at it, you'll also be able to prove that Vanderpoole has turned the Bitcoin network into a minefield of invalid blocks.",
    },
    building_blocks_two: {
      title: 'Building blocks',
      nav_title: 'A bitcoin block tree',
      paragraph_one:
        "Every block has exactly one previous block, but could have more than one next block. Because of this, Bitcoin blocks really form more of a tree than a chain. Some of the branches are dead-ends and, as you must prove, some of the branches are totally invalid because of Vanderpoole's malfeasance.",
      paragraph_two:
        "Somewhere in this maze is a path from the genesis block to today's newest block. FIND IT! And tell Deborah Chunk which block is on the tip of most valid Bitcoin chain in the tree! AND ALL BEFORE THE NEXT COMMERCIAL BREAK!",
      paragraph_three:
        'Here\'s CHRISTOPH ONO\'s ARTISTIC INTERPRETATION of the Bitcoin blockchain "tree" showing a few relevant historical events. Blocks are labeled by their height in the chain and appended with a letter (OR WHATEVER) to indicate multiple candidate blocks at each height. Some of these blocks are invalid! But there must be a path from genesis to tip in here somewhere.',
    },
    building_blocks_three: {
      title: 'Building blocks',
      nav_title: `Explore the Bitcoin API`,
      heading: 'The Bitcoin API',
      paragraph_one:
        "To answer these questions, you'll need to interact with a Bitcoin full node, via it's JSON-RPC API. We've imported a library for you called bitcoin_rpc which handles the secure HTTP connection from your script to the full node, executes your commands, and returns the responses. Your full node is \"pruning\" so it only has access to the last 300 blocks, but that should be enough to include the entire timespan of Vanderpoole's recent muckery.",
      paragraph_two:
        "Let's start by getting familiar with the API. The library has one function that accepts one required argument (a string) and one optional argument (either a string or a number):",
      paragraph_three:
        'The API also has a convenient "help" method! Ask it for help to learn more about the available commands, then pass the challenge by printing the current network difficulty.',
      success: "Nice work exploring the API! Let's move on.",
    },
    building_blocks_four: {
      nav_title: `Building blocks`,
      heading: `2. Block Data`,
      paragraph_one: `Blocks are stored in the full node database, indexed by their hash. The full node keeps track of which blocks are candidates at each height in the chain with a second index that maps height -> [block hashes].`,
      paragraph_two: `The JSON-RPC API returns block data as JSON objects that include a property "txs" which is an array of transaction objects.`,
      paragraph_three: `Retrieve all the block candidates at height 6929996 and print the hash of the block with the fewest transactions in it.`,
      success: `Nicely Done`,
    },
    building_blocks_five: {
      nav_title: `Building blocks`,
      heading: `3. Transaction Data`,
      paragraph_one: `The transaction objects confirmed in a block are JSON objects that include arrays of "inputs" and "outputs". Both of these arrays are lists of UTXOs, also known as "coins". Coin objects have a "value" property represented in satoshis.`,
      paragraph_two: `The "inputs" array is the coins spent (destroyed) by the transaction and the "outputs" array is the coins created by the transaction. You may recall from Chapter 6 that transactions always pay a fee to incentivize miners to include them in a block. That fee is exactly the difference in value between the total input and total output values of a transaction.`,
      paragraph_three: `In other words, the miner gets to keep whatever bitcoin that was sent in to the transaction but not sent back out to the transaction recipients.`,
      paragraph_four: `There is a transaction with the txid:`,
      paragraph_five: `in a block with the hash:`,
      paragraph_six: `Print that transaction's fee in satoshis.`,
      success: `Nicely Done`,
    },
    building_blocks_six: {
      title: 'Building Blocks',
      nav_title: 'Determine the subsidy',
      heading: 'The Coinbase Transaction',
      paragraph_one:
        'The first transaction in every block is called the coinbase. It may also be referred to as the "0th" transaction (referring to txs[0]) and it has a few very special properties. First of all, it has no inputs! This is because it does not spend any existing coins. Second, it\'s output value is strictly defined by the protocol (despite what Vanderpoole might say!). This is the mechanism by which miners both collect fees from transactions, and generate new coins.',
      paragraph_two:
        "It's fairly easy to understand how total transaction fees in a block are summed up, but where does that block subsidy value come from? How does every participant in the Bitcoin network determine exactly how much new bitcoin miners are allowed to generate at any given time?",
      paragraph_three:
        'This is the algorithm written by Satoshi Nakamoto that has remained an immutable core property of the Bitcoin system for over 120 years:',
      list_one:
        'Starting with the block #1 mined in 2009, the block subsidy is 50 BTC (or 5000000000 satoshis)',
      list_two: 'Every 210,000 blocks that value is cut in half.',
      paragraph_four:
        'At block height 209,999 the subsisdy was 50 BTC. In the very next block at height 210,000 the subsidy was 25 BTC, and so on. After 63 "halvings" the subsidy will be one single satoshi. The last halving will drop the subsidy to zero.',
      paragraph_five: 'AND THAT LAST HALVING WAS YESTERDAY!',
      paragraph_six:
        'Finish the implementation of the following function that accepts a block height as an argument and returns the value of the subsidy in satoshis.',
      success: 'The (get subsidy) function looks great. Nice work!',
    },
    building_blocks_seven: {
      title: 'Building Blocks',
      nav_title: 'Validate Block',
      heading: '5. That Pernicious Scallywag!',
      paragraph_one: `There are four block candidates at height 6929851. Only one of them is a valid block, the other three were mined by Vanderpoole's cartel in reckless attempts to inflate the Bitcoin money supply.`,
      paragraph_two: `Use your block subsidy function and the JSON-RPC API to check the coinbase outputs in all four block candidates and print the hash of the one and only valid block at that height!`,
      paragraph_three: `Your code will be tested using `,
      success: 'The validate block function looks great. Nice work!',
    },
    outro_one: {
      title: 'Outro',
      heading: "We're doing it live!",
      paragraph_one:
        "You found the longest chain and proved it to everyone! You are one step closer to discrediting Vanderpoole, needless to say he didn't answer anymore of Ms. Chunk's questions.",
    },
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
    coming_soon: 'Coming soon. Hang tight.',
    description:
      'Explore the mysteries of Satoshi and learn about Bitcoin along the way.',
  },

  hero: {
    title: 'Saving Satoshi',
    description: 'Code your way through the mysteries of bitcoin.',
    start_journey: 'Start',
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
    help_tooltip: 'Need help?',
  },

  modal_signin: {
    heading: 'Sign in',
    pre_signin_paragraph_one:
      'Enter your private key below to restore your account and progress.',
    post_signin_paragraph_one:
      'Nice to see you return to save Satoshi! You can go directly to your last lesson from here.',
    prompt: 'Enter your private key',
    confirm: 'Sign in',
    create_account: 'Don’t have an account?',
    login: 'Log in',
    welcome_back: 'Welcome back!',
    progress_redirect: 'Take me to where I left off',
  },

  modal_logout: {
    heading: 'You are logged in',
    paragraph_one:
      'Your session will remain active until you sign out using the button below.',
    private_key: 'Your private key',
    signout: 'Sign out',
  },

  modal_signup: {
    heading: 'Want to save your progress',
    paragraph_one:
      'Copy and store a simple code to save and load your progress in this browser. If you already have a code, load your progress here.',
    subheading_one: 'Choose an avatar',
    subheading_two: 'Back up your private key',
    generate:
      'All set? Code copied and backed-up? Make sure your do, as it can’t be recovered if you lose it.',
    confirm: 'Done',
    acknowledged:
      'I acknowledge I have saved this private key and know that I will need it for challenges in the future.',
  },

  social: {
    twitter_share: 'Share via X',
    nostr_share: 'Share via nostr',
    sharing: 'Sharing...',
    shared: 'Shared!',
    share_error: 'Failed to share',
  },

  disclaimer: {
    description:
      'We’re excited for you to dive in. Note that some challenges require basic programming experience (tips are available). Give it a try and share your <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf1xpNqUYJyvYL5IZDnxy78273pkqzfYW2Hf91H4Do4KHgy9g/viewform?usp=sf_link" className="underline">feedback</Link>',
  },

  hasher: {
    placeholder: 'Type here...',
    return_hash: 'Below you will see your input converted to a hash',
  },

  hashrate: {
    start: 'Start',
    running: 'Running',
    blocks_found: 'Blocks found',
    hashrate: 'Hashrate',
    partial_solutions: 'Partial solutions',
  },

  runner: {
    run: 'Run the script',
    running: 'Running',
    pause: 'Pause',
    result: 'Result',
    computing: 'Computing...',
    evaluation: 'Evaluation',
    script_output: 'Script output',
    waiting: 'Waiting for your input above...',
    poor: "This is valid code but it's not quite what we are looking for. Try again.",
    good: 'Good job, its not quite perfect but still considered correct. Keep working or continue, your choice.',
    success: 'Great work your code looks great!',
  },
  notfound: {
    first: 'Hmm...where are we?',
    second: 'It’s not quite clear where or what this place is.',
    third: 'We might have gotten lost in space (or time).',
    back_safety: 'Back to safety',
  },
  error: {
    first: 'Something is wrong!',
    second: 'Holocat may have chewed on some cables again. Bad cat!',
    reload: 'Retry',
  },
  help_page: {
    main_heading: 'Learning Resources',
    main_subheading:
      'What helpful info and resources can we provide for further learning?',
    tips_heading: 'Tips',
    tips_subheading:
      'What specific tips can/do we want to give learners if they are stuck?',
    spoilers_heading: 'Spoilers',
    spoilers_confirm: 'Yes, I want to see the solution',
    solution_one: 'Solution to part one of this challenge',
    solution_two: 'Solution to part two of this challenge',
    solution_three: 'Solution to part three of this challenge',
    solution_four: 'Solution to part four of this challenge',
    solution_five: 'Solution to part five of this challenge',
    solution_six: 'Solution to part six of this challenge',
    solution_seven: 'Solution to part seven of this challenge',
    solution_eight: 'Solution to part eight of this challenge',
    solution_nine: 'Solution to part nine of this challenge',
    solution_ten: 'Solution to part ten of this challenge',
    feedback:
      'Your feedback is valuable and helps us in enhancing our work more, please give us feedback using <a href="https://docs.google.com/forms/d/e/1FAIpQLSf1xpNqUYJyvYL5IZDnxy78273pkqzfYW2Hf91H4Do4KHgy9g/viewform" target="_blank" rel="noreferrer">this link</a>. ',
    help_suggestion:
      'If you\'re ever stuck, press the "?" button in the top-right corner. It provides helpful resources and tips.',
  },
}
export default translations
