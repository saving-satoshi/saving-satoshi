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
        'Saving Satoshi is a light-hearted first point of contact for coders who are curious about bitcoin development. Saving Satoshi has a mix of technical text and code-based challenges, but the challenges should be doable for anyone with basic coding skills. The project is free and open source (FOSS) and all the art has been generated using text-to-image tools like Midjourney.',
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
    title: 'Secrets in Plain Sight',
    paragraph_one:
      'The year is 2139. The last bitcoin is two weeks from being mined. For months, a clock has ticked down in Satoshi Square. Up until this point, every block has had some kind of bitcoin reward, a subsidy. This is the only way new bitcoins come into existence but soon, it’s about to change. After over one hundred years, the issuance schedule for bitcoin is coming to an end. The world awaits for the last block with a subsidy to be mined. It’s a historical event. The end of an era.',
    paragraph_two: 'Suddenly, the network grinds to a halt.',

    ///CHAPTER 1
    intro_one: {
      title: 'Intro',
      nav_title: 'Miner protest',
      paragraph_one: `Moments later, your Hover Screen activates.`,
      paragraph_two: `—Deborah Chunk: “Thomas Vanderpoole. As the well-dressed CEO of BitRey, you run one of the largest bitcoin mining pools in the world. You also manufacture bitcoin mining machines. What is happening? Is bitcoin dying?”`,
      paragraph_three: `—Vanderpoole: “Let’s start from the top. Yes, I am, Deborah, and yes, I do. The Vanderpooles—my well-dressed daddy and his well-dressed daddy before him—have been mining since block 21,000. That’s why I can confidently say that miners across the world are causing these delays by turning off their machines. This is a protest. No one wants bitcoin to stop being issued at 21 million. Miners cannot survive on fees alone.”`,
      start: 'Continue',
    },

    intro_two: {
      title: 'Genesis',
      nav_title: "Satoshi's holocat",
      paragraph_one:
        'On your Everything Watch, you receive a WhiskerWare brand holocat from someone using the name Satoshi Nakamoto. (It’s like any other e-hologram, but this one is shaped like a cat.) You open the holocat by booping its nose.',
      paragraph_two:
        '—“Bitcoin is not dying, but it needs your help. Don’t forget the cat.” – Satoshi Nakamoto',
      paragraph_three:
        '—Satoshi? The Satoshi? From the white paper? No, it couldn’t be. They’ve been presumed dead for over a century.',
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
        'You found the secret message Satoshi Nakamoto embedded in the genesis block. It’s time to expand on what you just learned. Decode a vital clue about the story in the next challenge.',
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
      nav_title: 'Adventure calls',
      paragraph_one:
        'You run down to your garage, step into your dad’s old Budgetcopter, punch in the coordinates, and make your way to District 21.',
      paragraph_two:
        'Despite cat allergies so intense that they apply even to holograms, the holocat comes along. You object, but cats will be cats.',
      button_text: 'Complete chapter 1',
    },

    outro_two: {
      title: 'You did it!',
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
      genesis_two: {
        scriptsig_heading: 'ScriptSig',
        scriptsig_paragraph:
          "The 'scriptSig' is a script that you provide as part of the input in your new transaction. It is essentially your unlocking script, which proves that you have the authority to spend the bitcoin from the referenced UTXO. The 'scriptSig' is the data that goes into the input's scriptSig field.",
        block_explorer_heading: 'Block Explorer',
        block_explorer_paragraph:
          'A block explorer is a crucial tool for navigating and understanding blockchain networks. It acts as a user-friendly interface to inspect and analyze the data stored on a blockchain. With a block explorer, users can explore transaction histories, view account balances, and track the progress of individual blocks and transactions.',
        tip: 'Look for the scriptSig(Hex) category nested in coinbase input after expanding the transaction within the block.',
      },
      genesis_three: {
        bash_heading: 'Bash Commands',
        bash_paragraph:
          'We are using some basic bash command and options to reverse the compression Satoshi did on the text put into the genesis block.',
        tip: "The 'xxd' command turns a file into hex and adding the '-r' tag reverses it allowing hex to be translated into text. The '-p' tag then prints it to the console allowing you to read the output.",
      },
      transacting_two: {
        transactions_heading: 'Transactions',
        transactions_paragraph:
          "A transaction in the world of cryptocurrencies is akin to a single atomic payment, where it involves the process of destroying existing coins and creating new ones. When someone initiates a cryptocurrency transaction, they're essentially instructing the blockchain to transfer a specific amount of coins from one digital wallet to another. To achieve this, the transaction consumes the sender's existing coins and generates new ones for the recipient, effectively updating the ownership ledger.",
        bitcoin_script_heading: 'Bitcoin Script',
        bitcoin_script_paragraph:
          'Bitcoin Script is a simple, stack-based programming language used in bitcoin transactions to define the conditions under which bitcoins can be spent. It consists of various opcodes (short for operation codes) that specify what operations should be performed on the data within the script.',
        tip: 'Given the Op_Code: OP_Pushbytes_33 we are looking for a string 33 bytes long (66 characters total) in the OP_Return of the transaction',
      },
      transacting_three: {
        secrets_heading: 'Secrets In Bitcoin',
        secrets_paragraph:
          'As we saw from the previous challenge, secrets embedded into bitcoin scripts has been a part of its history since the genesis block. Whether used to simply store some information in the blockchain, to pass information through bitcoin script to give some value external to bitcoin, or to pass messages to others, people have been storing things in the blockchain other than inputs and outputs since the beginning.',
        tip: "When decoding the string with the 'xxd' command, remember that we are not using a variable this time, we need to input the entire string",
      },
    },
  },

  chapter_two: {
    title: 'Hashing Out a Plan',
    paragraph_one:
      'The coordinates Satoshi gave you don’t disappoint, unfortunately: it’s a warehouse, and a scary, deserted one to boot.',
    paragraph_two:
      'You circle the warehouse in your Budgetcopter no less than three times. Yeah, sigh, you’re probably gonna have to go in there. Your Budgetcopter’s Budget Heat Detector detects nothing but darkness. If someone knows that this place exists, it’s been a long time since they visited it in anything but their memory.',

    intro_one: {
      title: 'Intro',
      nav_title: 'The warehouse',
      paragraph_one:
        '—HOLOCAT: “Boy, what a dump. This place had better have some e-anchovies stored somewhere. I’d even settle for some CyberKibble.."',
      paragraph_two:
        'You land, steady yourself, and search for a point of ingress. There, that broken window should do the trick. You take out what’s left of the window with a brick, and hop inside. The building is filled with thousands of dusty, well-preserved bitcoin miners.',
      paragraph_three: {
        a: '—HOLOCAT: “This isn’t a warehouse; this is a museum. I think these are old Vanderpoole family ASIC miners. In bitcoin’s early days, miners would use general purpose computers to mine bitcoin. But after a few years, miners realized they could use machines with a special chip called an Application-Specific Integrated Circuit, or ',
        b: ' for short. These chips do only one thing: mine bitcoin. Their narrow focus increases their efficiency and allows miners to spend less energy on mining, giving them an edge. Can you believe that people mined with their laptops at one point?"',
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
      paragraph_two: `—HOLOCAT: “How rude. Wow; a mechanical keyboard. I've heard about these things. Supposedly, they were so loud that they cost users their hearing, and were banned.”`,
      paragraph_three:
        'Holocat jumps onto the keyboard and walks across it, showing you what keys to hit.',
    },

    hashing_one: {
      title: 'Zeroes',
      nav_title: 'The computer hums to life',
      paragraph_one:
        'Either by chance, or because Holocat actually knew what she was doing, the random letters and numbers she stepped on turn into... more random letters and numbers?',
      list_one: '> QX23Y6VGECTUKSNIEUTUB[P[pihof',
      list_two:
        '> 1c31d1d9fb848a505fc0cdbea848ff1bdd46a9ed4d639d413d3a93035194eedf',
      paragraph_two: 'The monitor displays "INCORRECT HASH. TRY AGAIN."',
      paragraph_three:
        'Of course whatever gibberish Holocat typed was wrong. She’s just a sassy holographic cat!',
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
        'Hash functions are one way streets. You can’t reverse engineer a hash to figure out the data used to make it.',
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
        'Miners gather all the information they want to put in a block such as the previous block header hash, a hash of transactions to be included in block (including the coinbase transaction), time, and combine it with a random number called a nonce (number only used once). They send all of this into the hash function to create something called the block hash.',
      paragraph_three:
        'When bitcoin first launched, miners would cycle through the nonce in the block header by incrementing the data in the 32-bit field by 1. However, as miners become more powerful and efficient, the difficulty rises. Soon, it became so high that it was common to exhaust all possibilities for the 32-bit field without finding a single solution below the',
      paragraph_four:
        'To address this, miners started to change other parts of the block header, such as the time or transactions included in the block.',
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
          'When you find a nonce with a hash that begins with five zeroes, return the hash to the console. We are using the crypto library in JavaScript to help you along in creating this function, you can use the following external resources to help you write this function if needed:',
        list_one:
          '<Link href="https://www.geeksforgeeks.org/node-js-crypto-createhash-method/" target="_blank" className="underline">crypto documentation</Link>',
        list_two:
          '<Link href="https://www.educative.io/answers/what-is-node-cryptocreatehashalgorithm-options" target="_blank" className="underline">Tutorial JavaScript function</Link>',
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
        'Right now, the bitcoin network requires blocks to have a hash with ten leading zeros. Let’s get to it!',
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
        'Also, if we were really mining on the current mainnet it would take many orders of magnitude more computing power to mine these blocks.',
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
        'The machines roar to life. Everything seems to be working. A map appears on the old monitor that shows the locations of other warehouses filled with ASICs that have come online across the world. Looks like they were activated when you completed the mining challenge!',
      paragraph_two: '—HOLOCAT: “Look, there’s a message.”',
      paragraph_three:
        '“Good work. This will help bitcoin get back to one block every ten minutes.” – Satoshi Nakamoto',
      paragraph_four: 'Him again?',
    },
    resources: {
      hashing_two: {
        hash_functions_heading: 'Hash Functions',
        hash_functions_paragraph:
          'A hash function is any function that can be used to map data of arbitrary size to fixed-size values. The values returned by a hash function are called hash values, hash codes, digests, or simply hashes. The values are usually used to index a fixed-size table called a hash table. Use of a hash function to index a hash table is called hashing or scatter storage addressing.',
        tip: 'Just keep typing! Because of the SHA-256 algorithm any new input will result in a completely random hash even if the inputs are very similar',
        spoiler: 'Try something with 8 characters.',
      },
      hashing_four: {
        power_of_random_heading: 'The Power of Random',
        power_of_random_paragraph:
          "Like a perfectly random scenario, probability-wise the SHA-256 hash function is completely random for each addition of new data. If you hashed the novel 'War and Peace', then added just one extra letter to the original text, it would result in a completely different hash. Each new character changes the hash in a completely random manner. Considering that there are 16 possible characters in a hexadecimal system (0-9 and a-f), how likely is it to find a hash starting with '0'?",
        tip: "Can you do the math? Based on 16 possible characters per digit, what do you think the likelihood of finding a hash starting with '00' is? How about '000'?",
        spoiler: "Try something starting with the letter 's'.",
      },
      hashing_six: {
        collision_resistance_heading: 'SHA256 and collision resistance',
        collision_resistance_paragraph:
          "SHA-256 returns a 256-bit (64-characters) hash value, which is a unique representation of the input data. It belongs to the family of hash functions based on the Merkle–Damgård construction, a method for building hash functions from simpler compression functions. In this construction, the input message is divided into fixed-size blocks, and a chaining mechanism iteratively processes these blocks, combining each block's output with the result of the previous block. This process continues until the entire message is processed, producing the final hash value. SHA-256's robust security properties and collision resistance make it a cornerstone of data integrity and authentication in modern cryptography.",
        tip: 'No real tips in this lesson, as you continue in Saving Satoshi you will find that we hold your hand less and less and let you find the solution on your own.',
        spoiler:
          "Knowing that each new character recalculates a completely random hash you could keep adding new characters until you start with '00' or more... or try the word trigonometry.",
      },
      scripting_one: {
        hash_libraries_heading: 'Hash Functions',
        hash_libraries_paragraph:
          'The crypto library in Node.js and the hashlib library in python are the code libraries that implement the algorithms we will use into useful tools for developers. These libraries are thoroughly vetted to ensure their accuracy and security as many people rely on them to secure valuable and important systems.',
        nonce_heading: 'Nonce',
        nonce_paragraph:
          "A nonce, short for (number used once) is a random or semi-random number that is employed in various cryptographic and computational processes. Its primary purpose is to introduce unpredictability and ensure that a particular operation or calculation can't be easily repeated or predicted. The nonce is critical to the security of bitcoin mining but we will learn more about that later...",
        tip_one:
          'Ensure you are properly decoding the inputs. The hashing algorithms often return objects decoded in bytes, but we want to be able to read it in hex format!',
        tip_two:
          'Think about how you would create a function to keep running until that answer is equal to a specific value',
        tip_three:
          'Remember to log your answer with <span className="p-1 font-mono bg-[#0000004D] m-1">console.log()</span> or <span className="p-1 font-mono bg-[#0000004D] m-1">print()</span>. It is the only way our IDE will try to validate your answer.',
      },
      mining_one: {
        mining_heading: 'Mining',
        mining_paragraph:
          "Mining is where these concepts all come together. Bitcoin mining is the process by which new bitcoins are created and transactions are added to the blockchain. Miners compete to solve complex mathematical puzzles by finding a unique, valid 'nonce' in each block of transactions. This proof-of-work process demands significant computational power and energy, making it a secure and decentralized way to validate transactions. Successful miners are rewarded with newly minted bitcoins and transaction fees, and they play a critical role in maintaining the integrity of the bitcoin network.",
        difficulty_heading: 'Difficulty',
        difficulty_paragraph:
          'The mining difficulty is what allows the block to remain at an average of 10 minutes between each new block.',
        spoiler:
          'Nothing to spoil! Just go ahead and read through this lesson. There will be more opportunities to show off your   mining knowledge in future lessons!',
      },
    },
  },
  chapter_three: {
    title: 'The 51% Attack',
    paragraph_one:
      'You enter the address of a block explorer and see that blocks are back to ten minute intervals. Somehow, Holocat sleeps through the noise from all the ASICs.',
    paragraph_two: 'Cats. What can you do?',
    paragraph_three:
      'However, something is off. The blocks are empty, and transactions aren’t processing. Did you make a mistake? Could this be a coincidence? Another message pops up on the computer screen, waking Holocat.',
    paragraph_four: 'It’s not a coincidence.',

    intro_one: {
      title: 'Intro',
      nav_title: 'Hashing it out',
      paragraph_one:
        '—SATOSHI NAKAMOTO: “Hey, you! Yeah, you! Remember me? Bitcoin is being targeted with a 51% attack! Vanderpoole used a backdoor on the standard ASIC firmware to bend existing mining pools to his goals. He’s using them to mine empty blocks to hold the bitcoin ecosystem hostage and force people to support increasing bitcoin’s supply. Do something, dingdong!”',
      paragraph_two:
        'The old computer coughs a cloud of dust, then produces a wad of data called a “spreadsheet” that contains contact info for some of the largest bitcoin pool operators, as well as a patch to the virus that is letting BitRey control miners. Send the file to the pool operators so that they can regain control of their machines fight BitRey.',
      paragraph_three:
        '—HOLOCAT: “We’ve got more work to do. Well, you do. I’m gonna run through walls and scare mice.”',
    },

    solo_one: {
      title: 'You vs. Bitrey',
      nav_title: 'Mining alone',
      step_zero_heading: 'Let’s give it a try',
      step_zero_paragraph_one:
        'While you’re waiting for the pool operators you reached out to, you decide to see if BitRey can be fended off alone. Here’s how your hash rate stacks up. How do you think this will go?',
      step_one_heading: 'We’re off to the races',
      step_one_paragraph_one:
        'We’re now mining 100 blocks to see how many you stack up against BitRey.',
      step_two_heading: `That didn't go well!`,
      step_two_paragraph_one:
        'Yikes, we just don’t have enough hashpower to compete with BitRey and the virus-controlled pools. Let’s see if we can defeat BitRey for the next 100 blocks with the other pool operators. Bitcoin has been running for over a century and it’s not going down without a fight.',
    },

    pool_one: {
      title: 'Pool vs. BitRey',
      nav_title: 'Finding friends',
      waiting_screen_heading: 'We need support!',
      waiting_screen_paragraph_one: `Your miners in the warehouse don’t stand a chance. If you combine your hash power with other miners, you might be able to hold the line against BitRey's assault.`,
      waiting_screen_paragraph_two:
        'Let’s wait until the others join your cause so we can combine forces.',
      waiting_button: 'Waiting...',
      continue_button: "Let's go",
    },

    pool_two: {
      title: 'Pool vs. BitRey',
      nav_title: 'Mining together',
      step_zero_heading: 'Here we go',
      step_zero_paragraph_one:
        'By combining your hashrate with the other pool operators, can you stand up to BitRey?',
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
        'Together you and the other pool operators held back BitRey’s attempt to overtake the network.',
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
        'You and your miner friends have earned a total of 7.41 bitcoin and are looking for a good way to split it up. It should be divided based on how much work each of you put in.',
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
        'Now this number will work. Miners report these solutions to easier problems regularly to pools. That allows pools to measure fairly accurately how much work each miner has provided.',
      step_six_heading: 'Splitting the rewards',
      step_six_paragraph:
        'Now we can take the rewards of 7.41 bitcoin and split them up according to the percentage of partial solutions of each pool. Congratulations!',
    },

    outro_one: {
      title: 'Outro',
      nav_title: 'Chapter complete',
      heading: 'Take that, Vanderpoole! ',
      paragraph_one:
        'Great work! You and the other operators were able to fend off Vanderpoole’s 51% attack by pooling your resources. Empty blocks are no longer being submitted and it looks like he’s given up.',
      paragraph_two:
        'It’s time to reap your rewards! Go to the next chapter to withdraw your bitcoin.',
    },
    resources: {
      solo: {
        hashrate_heading: 'Mining Hashrate',
        hashrate_paragraph:
          "An individual miner's hashrate refers to the computational power they contribute to the bitcoin network's mining process. It is the rate at which their mining hardware can perform the necessary mathematical calculations to attempt to mine new blocks. The hashrate of an individual miner is typically measured in hashes per second, or at scale in terahashes, one-trillion hashes per second (TH/s), depending on the scale of their mining operation and the capabilities of their mining hardware.",
      },
      pool: {
        pool_heading: 'Mining Pool',
        pool_paragraph:
          'A mining pool plays a pivotal role in cryptocurrency mining, offering several key benefits to individual miners. By pooling together the computational power and resources of many participants, mining pools enhance the chances of successfully mining new blocks, resulting in more predictable and consistent earnings. They also provide a platform for miners to access advanced mining equipment and expert support, reducing barriers to entry and leveling the playing field. Furthermore, mining pools help distribute rewards efficiently, ensuring that miners receive their fair share for their contributions, making cryptocurrency mining accessible, stable, and financially rewarding for a broader community of participants.',
      },
      coop: {
        distribution_heading: 'Job Distribution',
        distribution_paragraph:
          "Mining pools take precautions to ensure that their participants do not mine the same nonce for the same block. This is important because, in the bitcoin mining process, miners compete to find a nonce that results in a valid block. If two miners in the same pool were to work on the same nonce simultaneously, it would be inefficient, and only one would receive the block reward. To prevent this, mining pools use a process called 'work assignment' or 'job distribution' to allocate work efficiently. Mining pools distribute work to individual miners or participants. When a new block needs to be mined, the pool's server (or pool operator) creates a unique 'job' for the miners. This job includes all the information needed to mine the block, such as the current list of unconfirmed transactions, the previous block's header, and the target difficulty.",
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
    title: 'Claiming Your 1.61 Bitcoin',
    paragraph_one:
      'Phew, that was close! You are shaking from your battle with BitRey, but you are relieved that you won.',
    paragraph_two:
      'As you settle at your desk, you take a deep breath, drift off, and replay the day’s events in your head. ',

    intro_one: {
      title: 'Intro',
      nav_title: 'Securing the bag',
      paragraph_one:
        '—HOLOCAT: “One of us better sleep. You need to start contacting the mining pools. They’ll want to know even more than the world will.”',
      paragraph_two:
        'As you settle at your ButtLift Hover Desk, you replay the day’s events. Vanderpoole. BitRey. The revelation that miners never agreed to shut down in protest. Could it all be true? Was this all staged? And how much longer are you supposed to look after this cat? (In the distance, something meows.)',
      paragraph_three:
        'Whatever happens next, you will need funds. Wait a second! You never claimed the mining rewards from your competition with BitRey! You decide to withdraw them.',
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
        'To derive a public key from a private key, we perform an elliptic curve operation repeatedly with the generator point. The generator point is a specific point on the curve. Its value is part of the secp256k1 standard and it’s always the same:',
      paragraph_two:
        'Mathematical operations on an elliptic curve are similar to addition. Therefore, repetition of those operations is similar to multiplication. We use the * symbol to describe the algorithm, where `k` is the private key and `P` is the corresponding public key:',
      python: {
        paragraph_three:
          'Complete the function <span className="text-green">privatekey_to_publickey()</span>  which accepts a private key as a hex-encoded string and returns the corresponding public key as a GE (Group Element) object.',
      },
      javascript: {
        paragraph_three:
          'Complete the function <span className="text-green">privateKeyToPublicKey()</span>  which accepts a private key as a hex-encoded string and returns the corresponding public key as a GE (Group Element) object.',
      },
      paragraph_four: 'Here are some type-conversion hints to get you started:',
      success:
        'Good job! That public key is pretty long. Let’s try to compress it!',
    },

    public_key_four: {
      title: 'Public key',
      nav_title: 'Compress the public key',
      paragraph_one:
        'The public key has an x and y coordinate for a total of 64 bytes. This can be compressed into 33 bytes by removing the y coordinate and prepending a single byte of metadata. That byte will indicate if the Y coordinate is even or odd. Because the elliptic curve equation only has two variables, the complete public key can be computed later by the verifier using only x and the metadata:',
      paragraph_two_javascript:
        'The metadata byte should be `2` if y is even and `3` if y is odd. Complete the function <span className="text-green">compressPublicKey()</span> to accept a public key and return a 33 byte hex string representing the compressed public key.',
      paragraph_two_python:
        'The metadata byte should be `2` if y is even and `3` if y is odd. Complete the function <span className="text-green">compress_publickey()</span> to accept a public key and return a 33 byte hex string representing the compressed public key.',
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
      nav_title: 'Hash the compressed public key',
      paragraph_one:
        'Do you remember the hashing challenge? It turns out you can generate the simplest type of bitcoin address by hashing your compressed public key. Bitcoin uses two different hashing algorithms for this: SHA-256 and RIPEMD-160.',
      paragraph_two: 'Steps:',
      paragraph_three:
        '<span className="indent-48">1. Perform a SHA-256 hash on your compressed public key.</span>',
      paragraph_four:
        '<span className="indent-48">2. Perform a RIPEMD-160 hash on that SHA-256 output digest. The final result will be 20 bytes encoded as a hex string.</span>',
      paragraph_five:
        'Complete a function that accepts a 33-byte compressed public key as a hex string and returns a 20-byte public key hash as a hex string.',
      paragraph_six:
        'Here is the documentation for the hashing libraries we imported for you:\n' +
        '<Link href="https://nodejs.org/api/crypto.html#class-hash" target="_blank" className="underline">JavaScript: crypto</Link>\n' +
        '<Link href="https://docs.python.org/3/library/hashlib.html#usage" target="_blank" className="underline">Python: hashlib</Link>',
      success: 'Great. One more step and you will have your wallet address.',
    },

    address_three: {
      title: 'Address',
      nav_title: 'Get a P2WPKH address',
      paragraph_one:
        'There are multiple types of bitcoin addresses. In the previous exercise, we created a 20-byte compressed public key hash. Now, we would like to encode that hash into a Pay-to-Witness-Public-Key-Hash (p2wpkh) address on the Testnet network.',
      paragraph_two:
        'First we need to append a witness version number of `0` to the hash. These resulting 21 bytes are known as the <span className="font-bold">witness program</span>.',
      paragraph_three:
        'Then, the witness program is encoded into a human-friendly format called <Link href="https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki#user-content-Specification" target="_blank" className="underline">bech32</Link>. Doing this appends a human-readable prefix and a checksum to the data.',
      paragraph_four: 'The prefix is determined by the network:',
      table_heading: {
        item_one: 'Network',
        item_two: 'Human-Readable Prefix',
      },
      table_rows: {
        key_one: 'Mainnet',
        value_one: 'bc',
        key_two: 'Testnet',
        value_two: 'tb',
        key_three: 'Regtest',
        value_three: 'bcrt',
      },
      paragraph_five:
        "Since we're making a Testnet address, we will be using the 'tb' prefix.",
      paragraph_six:
        'After the data has been encoded to bech32, we are left with a bitcoin address!',
      paragraph_seven:
        'Complete the function to create a bech32 address from a compressed public key hash. Start by making the witness program, then convert the program to an address by using the bech32 library that has already been imported for you.',
      paragraph_eight:
        'You may need to dig into the bech32 library and read the code to find the right functions to use:\n',
      paragraph_eight_javascript:
        '<Link href="https://github.com/saving-satoshi/bech32js/blob/main/bech32.js" target="_blank" className="underline">JavaScript: @savingsatoshi/bech32js</Link>\n',
      paragraph_eight_python:
        '<Link href="https://github.com/saving-satoshi/bech32py/blob/main/bech32py/bech32.py" target="_blank" className="underline">Python: savingsatoshi_bech32py</Link>',
      success: 'Now you have an address that mined bitcoin can be sent to.',
    },

    outro_one: {
      title: 'Outro',
      nav_title: 'Chapter complete',
      heading: 'Success!',
      paragraph_one: 'You created your very own bitcoin wallet!',
      paragraph_two:
        'You withdraw the bitcoin from the mining pool into the wallet you just created. You are now fully funded and ready for whatever Vanderpoole and BitRey throw at you next.',
    },
    resources: {
      public_key_three: {
        generator_point_heading: 'Generator point',
        generator_point_paragraph:
          'A specific point on the secp256k1 curve. Its value is part of the secp256k1 standard and it’s always the same. This point is not different from other points on the curve, but it is agreed up on as the standard starting point for calculations. No one really knows why this particular point was chosen.',
        elliptic_curve_operations_heading: 'Elliptic curve operations',
        elliptic_curve_operations_paragraph:
          'Elliptic curves have their own mathematical rules, so simple operations like addition and multiplication work differently. For simplicity and brevity, established symbols are re-used, like using a “*” for operations that are similar to multiplication.',
        discrete_log_heading: 'Discrete logarithm',
        discrete_log_paragraph:
          'A mathematical system where you can, for example, multiply but cannot divide. A simple metaphor for this is looking at a clock. Three hours past 11 o’clock is 2 o’clock. So we could say “11+3=2”. However if wanted to perform “2-x=11” and solve for x, you would have infinite possible answers (3, 15, 27, 39...). More on <Link href="https://en.wikipedia.org/wiki/Discrete_logarithm" className="underline">wikipedia</Link>.',
        tip_one:
          'Multiplication with elliptic curve points is not the same as the kind of multiplication you are used to, the one with regular numbers. So how do you perform multiplication? Notice that the generator point, <span className="p-1 font-mono bg-[#0000004D] m-1">G</span> is of the type <span className="p-1 font-mono bg-[#0000004D] m-1">secp256k1.GE</span>. Have a look at that class to see what methods you can invoke on it.',
        tip_two:
          'While the private key is accepted in hex format, it needs to be converted to a number (BigInt if you’re using JS) before multiplying with the generator point.',
      },
      public_key_four: {
        y_coordinate_compression_heading: 'Public Key Compression',
        y_coordinate_compression_paragraph:
          'When you calculate a point addition on an elliptic curve, you use the coordinates of two points to find the coordinates of a third point that lies on the curve. However, there are usually two possible y-coordinates for any given x-coordinate (except for certain special cases). When compressing a public key, you choose one of these y-coordinates and include only the x-coordinate along with an indicator of which y-coordinate to use, in this case we use the appended metadata to indicate the y-coordinate.',
        tip: 'This challenge is actually quite simple, we are only really trying to determine whether the y-coordinate is even or odd so that we can prepend that metadata to the front of our public key.',
      },
      address_two: {
        hash_algo_heading: 'SHA-256, RIPEMD-160',
        hash_algo_paragraph:
          'Hash functions digest any amount of any kind of data and always return a result of the same size. For SHA256, it’s 32 bytes. For RIPEMD-160, it’s 20 bytes. The output is deterministic (always the same output for the same input) but otherwise, indistinguishable from random. Hash functions effectively reduce data to a small consistent fingerprint.',
        tip_one:
          'When calculating the SHA-256 hash you will need to make sure to hash your compressed key as bytes not hex. If you are using JavaScript, this will require converting the hex string to a buffer.',
        tip_two:
          'Make sure you are doing the hashing algorithms in the correct order!',
      },
      address_three: {
        wpkh_heading: 'Witness Public Key Hash (wpkh) address',
        wpkh_paragraph:
          'A bitcoin address is a string of characters that is designed for users to handle. It is short, easy to copy and paste, and has some kind of built-in checksum to ensure that it is always copied correctly. It safely encodes a Bitcoin output script that the recipient can spend from. There are several types of output scripts and several encoding mechanisms. In this challenge we encode a compressed public key with bech32 to create what is called a witness public key hash address.',
        network_heading: 'Mainnet, Testnet, Signet, and Regtest',
        network_paragraph:
          'When developing bitcoin software, it is important to test your code before you trust real money with it! One of the simplest ways to test bitcoin software is to use a different blockchain with a new genesis block where the coins don’t matter, mining is free and easy, and everything can be reset at any time. These chains are supported by a unique network of nodes that does not interfere with the real coins and nodes on Mainnet. Testnet and Signet are the names of two such alternate bitcoin blockchains that are maintained in parallel with Mainnet on a global scale. Regtest is a developer mode designed to be run locally with no network connections needed at all.',
        tip: 'Make sure you take a close look at the bech32 library to find the exact methods you can use.',
      },
    },
  },

  chapter_five: {
    title: 'Will the Real Satoshi Please Stand Up',
    paragraph_one:
      'It’s late, and you’re tired, but as you shut your eyes for a moment, a double dose of bad news arrives.',
    paragraph_two: '1) Vanderpoole is back on TV.',
    paragraph_three:
      '2) He is claiming to be the great-grandson of Satoshi Nakamoto.',
    paragraph_four: 'He looks sleep-deprived.',
    intro_one: {
      title: 'Intro',
      nav_title: 'Don’t trust, verify',
      paragraph_one:
        '—DEBORAH CHUNK: “Mr. Vanderpoole. You recently made a staggering claim on anti-social media that you are the great-grandson of Satoshi Nakamoto. Is that correct? Is this true?”',
      paragraph_two:
        '—VANDERPOOLE: “It darn tootin’ is, Deborah. I have harbored this secret for a long, long time. You see, my family has passed an inconspicuous looking CD-ROM down for generations. To keep it secret, we labeled it <span className="italic">Creed – My Own Prison</span>. It contains the private keys to my great-grandfather Satoshi Nakamoto’s enormous bitcoin trove. So when I speak for miners, know that I also speak for Satoshi Nakamoto.”',
      paragraph_three:
        '—DEBORAH CHUNK: “Is there any way we can verify that you actually own the private keys to Satoshi Nakamoto’s bitcoin?”',
      paragraph_four:
        '—VANDERPOOLE: “Indeed there is. It is a simple matter of public key cryptography.”',
      paragraph_five:
        '—DEBORAH CHUNK: But why wait so long to make this earth-shattering disclosure?',
    },
    intro_two: {
      nav_title: "Vanderpoole's bold claim",
      paragraph_one:
        '—VANDERPOOLE: “I didn’t have the courage. There have always been rumors about my family’s history, ones that I could have easily confirmed. But I wasn’t ready for that much publicity. After all, I live a humble, secluded life in a 14th century castle on a dude ranch on my favorite of all my private islands, doing 5–6 interviews like this one from my hot tub every week.”',
      paragraph_two:
        '—VANDERPOOLE: “But now that bitcoin’s future is on the line, I knew it was time to face the music, specifically, the music from Creed’s debut album, My Own Prison.” *Vanderpoole hums the melody from the 20th century album’s namesake song*',
      paragraph_three:
        '—VANDERPOOLE: "I can only say that I’m sorry for not coming forth sooner because the CD-ROM also contains Satoshi’s Nakamoto’s revised plans for bitcoin. You see, my great-grandfather always regretted limiting the supply of bitcoin to 21 million coins, which is why I plan to fulfill my great-grandfather’s dream of hard forking bitcoin in favor of perpetual bitcoin issuance."',
    },
    intro_three: {
      nav_title: 'A message from Satoshi',
      paragraph_one:
        'Your TXM4H-A Hover Screen chirps to life. You have a new message.',
      paragraph_two: '—HOLOCAT: Don’t forget to boop my nose.',
      paragraph_three: 'You boop her nose',
      paragraph_four: `—SATOSHI NAKAMOTO: “Vanderpoole is not who he claims to be. You can expose him. Ask him to prove ownership of Satoshi’s bitcoin by signing a message using that wallet's private keys.”`,
    },
    derive_message_one: {
      title: 'Derive the message',
      nav_title: 'The message in question',
      heading: 'Vanderpoole says he signed a message with Satoshi’s keys:',
      code_one: `-----BEGIN BITCOIN SIGNED MESSAGE----- \n \n I am Vanderpoole and I have control of the private key Satoshi used to sign the first-ever bitcoin transaction confirmed in block #170. This message is signed with the same private key. \n \n -----BEGIN BITCOIN SIGNATURE----- \n \n`,
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
      paragraph_one: `Block #170 contains the <link href="https://bitcointalk.org/index.php?topic=155054.0" target="_blank" className="underline">first bitcoin transaction</link> made from Satoshi to Hal Finney. That transaction only has <Link href="https://blockstream.info/tx/f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16?expand" target="_blank" className="underline">one input</Link>. Retrieve the scriptSig from that input. It contains Satoshi's signature!`,
      placeholder: 'Paste the data here',
      success:
        'Nicely done! This is actually Satoshi’s signature, authorizing the transfer of his bitcoin to Hal Finney.',
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
      paragraph_one: `In the previous exercise we saw Satoshi got 50 BTC for mining block #9. He used that as input for his transaction to Hal Finney (in block #170), sending 10 BTC to Hal Finney’s public key and returning 40 BTC back to himself as change. Satoshi's private key was used to create a signature authorizing the transfer of those funds.`,
      paragraph_two:
        'Next we need to learn how to verify a signature. But something is still missing... what is the message Satoshi signed to authorize the transaction for Hal?',
    },
    derive_message_six: {
      nav_title: 'Derive the message',
      heading: 'Derive the message from the transaction',
      paragraph_one:
        'It should be clear by just looking at the block explorer web page that a bitcoin transaction has many different parts. Some parts are just small numbers and some parts are larger chunks of data. The bitcoin protocol has a very specific algorithm for creating messages from transactions, so those messages can be signed by private keys.',
      paragraph_two:
        'We will summarize the process outlined <Link href="https://en.bitcoin.it/wiki/OP_CHECKSIG" target="_blank" className="underline">here</Link>. It conveniently uses <Link href="https://en.bitcoin.it/wiki/OP_CHECKSIG#Code_samples_and_raw_dumps" target="_blank" className="underline">this exact same transaction from block #170</Link> as an example.',
      paragraph_three:
        'To begin, we need the raw bytes that make up the complete transaction. <Link href="https://blockstream.info/api/tx/f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16/hex" target="_blank" className="underline">Our block explorer</Link> can help with this. Use the "hex" API endpoint and paste the entire blob of data.',
      input_challenge_label: 'Paste the transaction blob',
      success_message_line_one:
        'This is the raw transaction with each component labeled:',
      success_message_line_two: 'version:',
      success_message_line_three: 'number of inputs:',
      success_message_line_four: 'hash of the tx that input #0 came from:',
      success_message_line_five:
        'index of input #0 in the funding transaction:',
      success_message_line_six: 'scriptSig to authorize spending input #0:',
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
      nav_title: 'Build the message to sign',
      paragraph_one:
        "It's impossible to sign a message containing it's own signature, so the scriptSig needs to be removed. In the bitcoin protocol it is actually replaced by the scriptPubKey of the transaction output we are spending.",
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
      success: "Nice! You've constructed a message to sign.",
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
      paragraph_three: {
        a: 'The bitcoin protocol uses a ',
        b: ' to compress a transaction into a signable message.',
      },
      paragraph_four:
        'Once we have a 32-byte hash, that data is re-interpreted as an integer. Yes, a 32-byte integer (that is a truly enormous number)!',
      tooltip_one: {
        question: 'Why does everything in bitcoin use double hash (HASH256)?',
        link: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=Why%2520does%2520everything%2520in%2520bitcoin%2520use%2520double%2520hash%2520%28HASH256%29%253F',
        highlighted: 'double SHA256 digest',
      },
      success: 'Nicely done!',
    },
    verify_signature_three: {
      nav_title: 'Decode the signature',
      heading: 'Decode the Signature',
      label_one: 'Paste the R value',
      label_two: 'Paste the S value',
      paragraph_one:
        "Satoshi's signature is encoded in a system called DER which is a subset of ASN.1.",
      paragraph_two:
        'There are two 32-byte numbers we need to extract. They are referred to as R and S respectively and are each prefixed by the bytes 0220 in the DER sequence. Instead of fully decoding the DER blob, just look for the prefixes and paste the R and S values.',
      paragraph_three:
        "# Satoshi's signature, from the input scriptSig of the tx to Hal Finney (block 170)",
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
        'We created a Group Element object from the public key X and Y elements for you. You need to finish implementing the ECDSA signature verification function <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">verify()</span> that should only return True if everything is valid!',
      paragraph_four:
        "We know Satoshi's signature is valid, it has been checked by every bitcoin full node since 2010! If your program does not return True something is wrong.",
      python: {
        paragraph_five_part_one:
          'Hint: the <span className="text-green">pow()</span>',
        paragraph_five_part_two:
          'method can accept negative exponents and a modulus as arguments. More on the <Link className="underline" href="https://docs.python.org/3/library/functions.html#pow" target="_blank">documentation</Link>.',
      },
      javascript: {
        paragraph_five_part_one:
          'We have provided a helper function <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">invert()</span>',
        paragraph_five_part_two:
          'which you will need in lieu of a JavaScript native modular exponentiation function.',
      },
    },
    validate_signature_one: {
      title: 'Validate the signature',
      nav_title: 'Prepare the message',
      heading: "Prepare Vanderpoole's message for verification",
      paragraph_one:
        'Vanderpoole used a <Link href="https://github.com/bitcoin/bips/blob/master/bip-0137.mediawiki" target="_blank" className="underline">bitcoin message signing protocol</Link> for his stunt. The computation uses the same algorithm we\'ve already defined, but the preparation of the data is a bit different.',
      paragraph_two:
        'First, we need to encode his message into an array of bytes corresponding to the following template:',
      paragraph_three: {
        pre_link: 'Then we will',
        highlighted: 'double SHA-256 hash',
        question: 'Why do we double hash in bitcoin?',
        post_link:
          'that blob of data, and convert that hash into an integer. Complete the function <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">encode_message()</span>. It should return a 32-byte hex value.',
      },
      success: 'Nicely Done',
    },
    validate_signature_two: {
      nav_title: 'Prepare the signature',
      heading: 'Prepare Vanderpoole’s signature for verification',
      paragraph_one:
        'The bitcoin message signing protocol Vanderpoole used specifies base64 for the signature. We need to decode that base64 string into a 65 byte sequence. For now, we can disregard the first byte of metadata. The remainder of the data are the 32-byte r and s values we learned about in step 6.',
      javascript: {
        paragraph_two: {
          post_link:
            'Complete the function <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">decode_sig()</span>.',
          return:
            'It should return an array with the [r, s] values as BigInts.',
        },
      },
      python: {
        paragraph_two: {
          post_link:
            'Complete the function <span className=" text-green">decode_sig()</span>.',
          return: 'It should return a tuple with the (r, s) values.',
        },
      },
    },
    validate_signature_three: {
      title: 'Validate the signature',
      nav_title: 'See if Vanderpoole was lying',
      heading: 'So, is Vanderpoole a liar?!',
      paragraph_one: `Let's gather all the necessary components for the program and verify if Vanderpoole's signature actually originated from the private key linked to Satoshi's public key! Please fill in the missing parameters needed to execute the <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm"> verify()</span> function using the provided code.`,
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
        "The signature is valid for this public key of Vanderpoole's, this was not Satoshi!",
    },
    outro_one: {
      title: 'Outro',
      nav_title: 'Chapter complete',
      heading: 'Vanderpoole lied!',
      paragraph_one:
        "You learned one of the most important lessons in bitcoin. You didn't trust, you verified.<br><br>In doing so, you discovered that Vanderpoole didn’t use Satoshi’s keys to sign the message, casting a big shadow on his family story, on his credibility, and the credibility of BitRey.<br><br>Now if only you could get that song out of your head.",
    },
    resources: {
      derive_message_three: {
        op_pushdata_heading: 'OP_PUSHDATA',
        op_pushdata_paragraph_one:
          'OP_PUSHDATA in bitcoin script plays a crucial role in facilitating the insertion of arbitrary pieces of data into the blockchain. It is actually a whole category of opcodes that allow for the inclusion of data elements of varying sizes, making Bitcoin’s scripting language more versatile. This opcode is particularly significant in enabling the implementation of various smart contract functionalities and custom transaction types. Given that we know this is supposed to push 71 bytes of data onto the stack, can you work out how this opcode might be represented in hex? You can read more about some of these OP_CODES and more <Link href="https://en.bitcoin.it/wiki/Script#Constants" target="_blank" className="underline">here</Link>.',
      },
      derive_message_four: {
        op_checksig_heading: 'OP_CHECKSIG',
        op_checksig_paragraph_one:
          'OP_CHECKSIG in bitcoin script is critically important to ensuring that the correct private key is able to spend a given transaction. In almost every bitcoin script there will be an OP_CHECKSIG to ensure that the person attempting to spend the bitcoin is able to do so with the given key. You can read about some of these OP_CODES and more <Link href="https://en.bitcoin.it/wiki/Script#Constants" target="_blank" className="underline">here</Link>.',
      },
      derive_message_six: {
        transaction_parts_heading: 'Transaction Parts',
        transaction_parts_one:
          'Version: This version indicates how the the transaction will be organized.',
        transaction_parts_two:
          'Number of inputs: The number of inputs in this transaction.',
        transaction_parts_three:
          'Input #0 TXID: This is the hash of the transaction that input #0 spends from.',
        transaction_parts_four:
          'Input #0 index: This is the output index of the transaction identified by the above TXID that provides a source of funds.',
        transaction_parts_five:
          'Scriptsig: This is the data that authorizes the spending of the output specified above. Typically consists of signatures.',
        transaction_parts_six:
          'Input #0 sequence: This is the sequence number for the spending input.',
        transaction_parts_seven:
          'Number of outputs: This indicates how many outputs the tx has.',
        transaction_parts_eight:
          'Output #0 value: This is the amount that is spent by the first output, expressed as a little-endian integer.',
        transaction_parts_nine:
          'Output #0 scriptPubKey: This is the script that determines what is required to spend the funds. Typically consists of a public key and other opcodes that form a challenge.',
        transaction_parts_ten:
          'Output #1 value: This is the amount that is spent by the second output, expressed as a little-endian integer.',
        transaction_parts_eleven:
          'Output #1 scriptPubKey: This is the script that determines what is required to spend the funds. Typically consists of a public key and other opcodes that form a challenge.',
        transaction_parts_twelve:
          'Locktime: A block height before which this transaction is not valid for confirmation.',
      },
      derive_message_seven: {
        sighash_type_flag_heading: 'SigHash Type Flag',
        sighash_type_flag_paragraph_one:
          'SigHash flags are a mechanism in bitcoin that define which parts of a transaction are included in the hash that is signed by a private key. Essentially, they determine the scope of commitment by the signer to specific parts of the transaction data. The SigHash flag is a single byte appended to each signature and can vary between inputs within the same transaction. There are several types of SigHash flags you can learn about <Link href="https://river.com/learn/terms/s/sighash-flag" target="_blank" className="underline">here</Link>.',
      },
      verify_signature_two: {
        tip_one:
          'JavaScript hint: You can convert a hex string to a buffer of bytes using <span className="p-1 font-mono bg-[#0000004D] m-1">Buffer.from(someString, \'hex\');</span>',
        signature_verification_heading: 'Signature Verification',
        signature_verification_paragraph_one:
          'Signature verification is a mathematical algorithm in which one party provides a piece of data (the signature) that could only be generated if that party knows a secret number (the private key). Verification involves comparing the signature, the public key, and a given message. If the algorithm outputs a TRUE boolean, then the signature is considered authentic.',
      },
      verify_signature_three: {
        signature_encoding_heading: 'Signature Encoding',
        signature_encoding_paragraph_one:
          'A (DER) signature or Distinguished Encoding Rules is simply a format used to encode an ECDSA signature in bitcoin. An ECDSA signature is generated using a private key and a hash of the signed message. It consists of two 32-byte numbers (r,s). It has multiple components you can learn more about <Link href="https://technicaldifficulties.io/2020/07/22/bip-66-unpacking-der-signatures/" target="_blank" className="underline">here</Link>.',
      },
      verify_signature_four: {
        eliptic_curve_heading:
          'Elliptic Curve Digital Signature Algorithm (ECDSA)',
        eliptic_curve_paragraph_one:
          "ECDSA is a cryptographic algorithm used by bitcoin to ensure that funds can only be spent by their rightful owners. A public key is derived from a private key through elliptic curve multiplication, which is computationally straightforward. However, reversing this process to derive the private key from the public key is computationally unfeasible. This one-way function is a cornerstone of Bitcoin's security.",
        public_private_key_heading: 'Public and Private Keys',
        public_private_key_paragraph_one:
          'In bitcoin, a pair of keys is used to ensure secure transactions. The private key, kept secret, is used to sign transactions and prove ownership of a bitcoin address. The public key, derived from the private key, can be shared and is used to verify that a signature is made by the private key holder, without revealing the private key.',
      },
      verify_signature_five: {
        finite_field_arithmetic_heading: 'Finite Field Arithmetic',
        finite_field_arithmetic_paragraph_one:
          "This type of arithmetic, used in ECDSA, involves numbers within a fixed range or field. Operations such as addition, subtraction, multiplication, and finding modular inverses are performed with respect to the size of this field. This is essential for the elliptic curve calculations in bitcoin's cryptography.",
        ge_and_fe_heading: 'Group Elements (GE) and Field Elements (FE)',
        ge_and_fe_paragraph_one:
          "In the context of elliptic curve cryptography, a group element typically represents a point on the elliptic curve. In the challenge, GE refers to such a point with specific x and y coordinates. FE represents an element of the finite field, used for calculations within the field's constraints.",
        modular_inverse_heading: 'Modular Inverse',
        modular_inverse_paragraph_one:
          "The modular inverse of a number a modulo m is a number b such that (a * b) % m = 1. Finding the modular inverse is a critical step in ECDSA signature verification. It's used in the calculation of u1 and u2 during the verification process.",
      },
      validate_signature_one: {
        message_verification_heading: 'Importance of Message Verification',
        message_verification_paragraph_one:
          'Message verification enhances the security of communications within the bitcoin ecosystem. It allows parties to verify the authenticity and integrity of messages, which is valuable in situations where trust and verification are essential, such as in peer-to-peer transactions or communication between parties in a smart contract. Furthermore, message verification serves as a foundation for various applications, including identity verification and the attestation of ownership of a particular bitcoin address. It adds a layer of cryptographic assurance, reinforcing the trustless and decentralized nature of the bitcoin network.',
      },
      validate_signature_two: {
        base64_encoding_heading: 'Base64 Encoding',
        base64_encoding_paragraph_one:
          "Base64 is a basic byte to text encoding scheme that just allows for the data to be convereted to bytes which can then be used in buffers or from bytes to text in such a way that it avoids any problems with url paths and query params. This differs from the base58 encoding scheme in that it still includes the similar characters (zero, uppercase 'O', uppercase 'I', and lowercase 'l') that may otherwise be confusing to a user when trying to copy or dictate the encoded message.",
      },
      validate_signature_three: {
        signing_and_ownership_heading: 'Message Signing and Ownership',
        signing_and_ownership_paragraph_one:
          "Based on bitcoin's psuedo-anonymity we are limited in what we are able to definitively prove because the owner of a key can refuse to sign a message or sign a message with an incorrect key on purpose. The only thing we can prove is that the key that creates an invalid signature is not one that matches a key that can sign a message.",
      },
      validate_signature_four: {
        one_for_one_heading: 'One for One',
        one_for_one_paragraph_one:
          'To ensure the reliability and security of ECDSA, a signature created by a private key can only be verified by the corresponding public key. If different private keys could produce the same public key or signature, it would undermine the security and reliability of ECDSA. Through this we can know that the public key that was able to sign this message has ownership of this bitcoin.',
      },
    },
  },

  chapter_six: {
    title: `The Keyholder`,
    paragraph_one:
      'Ahhh! Vanderpoole is out to get you for exposing his fraudulent claims. But despite the fact that the holocat is out of the bag, plenty of scared people continue to cling to the myth that Vanderpoole created around himself, his family, and their supposed ancestry. Times are scary, and people need a hero. Unfortunately, for many, he’s the best they’ve got.',
    intro_one: {
      title: 'Intro',
      nav_title: 'Was that really Satoshi',
      paragraph_one:
        '—SATOSHI NAKAMOTO: ”Well done. Now the world can see for itself that Vanderpoole is a fraud. Even if some don’t believe it yet, they will before our work is done.”',
      paragraph_two:
        'You pause for a moment and realize that every message up to this point has been signed “Satoshi Nakamoto.” You had just assumed that this was a pseudonym used by someone who adheres to bitcoin’s core principles. Surely, they couldn’t be the real Satoshi Nakamoto. But, you finally decide, it’s worth asking.',
      paragraph_three:
        '—”This might make me sound stupid, but are you the real Satoshi?”',
    },
    intro_two: {
      title: 'Intro',
      nav_title: 'Paying Mika 3000',
      paragraph_one:
        '—HOLOCAT: “Hardly the only thing to make you sound stupid lately.”',
      paragraph_two:
        '—SATOSHI NAKAMOTO: “Bitcoin moved far beyond its creator’s control many years ago. It would not matter if Vanderpoole or I were Satoshi, or one of their descendants. Bitcoin is defined by its community and cannot be co-opted by a single individual or entity—including Satoshi. Proving this is the real battle. I hope you don’t mind, but I asked your eccentric freelance reporter friend to reach out.”',
      paragraph_three: '—He what?',
      paragraph_four: '—Ding.',
      paragraph_five: '—HOLOCAT: Don’t forget to boop me.',
      paragraph_six: `—MIKA 3000: “You’ve got guts, but guts aren't enough. What you discovered is just the start. There’s more to this story, but we need to visit Vanderpoole’s private island to know for sure what "more" means. This will cost a lot, so I could use your help pulling funds off the multi-sig wallet that you helped me set up. You’ve still got one of my keys, right?”`,
    },
    in_out_one: {
      title: 'The ins and outs',
      nav_title: 'The unspent UTXO',
      paragraph_one:
        "Mika 3000 needs 1 BTC to buy gear for her trip to Vanderpoole's private island. You decide to send her 1 BTC from your chapter 3 mining rewards, which have been sent by the mining pool to the address you created in chapter 4.",
      paragraph_two:
        'You open your bitcoin full node and execute a command to see where your money is in the blockchain.',
      paragraph_three:
        'This is an unspent transaction output (aka "UTXO"). You might recognize your compressed public key hash and address from chapter 4. The amount looks right, too: 1.61 BTC.',
    },
    in_out_two: {
      title: 'The ins and outs',
      nav_title: 'The receiving address',
      paragraph_one:
        'Mika 3000 gives you an address to send your 1 BTC contribution to:',
      paragraph_two:
        'Hm, that address looks a lot longer than yours! I wonder why...',
      paragraph_three: `We need to create and sign a transaction that sends one of your 1.61 BTC to this address. We looked at Satoshi's transaction structure in chapter 5 but yours will be a bit different. Today, there are newer methods for creating transactions. We'll be using a protocol called Segregated Witness which sets the transaction version to 2.`,
    },
    in_out_three: {
      title: 'The ins and outs',
      nav_title: 'Transaction steps',
      paragraph_one:
        'Segregated Witness transactions work just like their legacy predecessors. There are a few global values like version and locktime. There is an array of inputs (UTXOs we want to spend) and an array of outputs (new UTXOs we want to create, for other people to spend in the future). There will also be an array of witnesses, one for each input. That is where signatures and scripts will go instead of the scriptSig.',
      paragraph_two:
        'The message serializations for all these components is documented <Link href="https://en.bitcoin.it/wiki/Protocol_documentation#tx" target="_blank" className="underline">here</Link>  and <Link href="https://github.com/bitcoinbook/bitcoinbook/blob/6d1c26e1640ae32b28389d5ae4caf1214c2be7db/ch06_transactions.adoc" target="_black" className="underline" >here</Link>.',
    },
    in_out_four: {
      normal: {
        title: 'The ins and outs',
        nav_title: 'The input class',
        heading: 'Looking at the Input class implementation',
        paragraph_one:
          'Bitcoin transaction inputs always point to existing, unspent transaction outputs. Therefore, our Input class has a method <span className="text-green"> from_output() </span> which is used to construct an Input by passing in the output description:',
        paragraph_two:
          'The first two arguments are the transaction ID and the index of the output of that transaction you want to spend from. Eventually we will pass in the txid and vout values you got above from listunspent. ',
        paragraph_three: {
          a: 'Hashes in bitcoin are ',
          b: {
            text: ' reversed ',
            question: 'Why do we reverse hashes in bitcoin?',
            href: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=why%2520are%2520hashes%2520reversed%2520in%2520bitcoin',
          },
          c: ' when we see them as hexadecimal strings. When we accept hashes as strings from a user we must reverse the byte order before storing or transmitting them as raw bytes. This is why we reverse the byte order of the txid argument that is passed in here.',
        },
        paragraph_four:
          "The second two arguments are the value of the output we want to spend (in satoshis) and something called a scriptcode. For now, we will just store that data as an empty byte array, we won't need it until later.",
        paragraph_five: `We also need a <span className="text-green"> serialize() </span> method that returns a byte array according to the specification. This is how the transaction is actually sent between nodes on the network, and how it is expressed in a block:`,
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
        paragraph_six:
          'And remember: integers in bitcoin are serialized little-endian!',
        success: 'The Input class looks good. Great Work!',
      },
      hard: {
        title: 'The ins and outs',
        nav_title: 'Build the input class',
        heading: 'Finish the implementation of Class Input',
        paragraph_one: 'It should have the following method:',
        paragraph_two:
          'The First two arguments are the transaction ID and the index of the output of that transaction you want to spend from.',
        paragraph_three:
          'Eventually we will pass in the txid and vout values you got above from listunspent. Note that hashes in bitcoin are little-endian, which means that you will need to reverse the byte order of the txid string!',
        paragraph_four:
          "The second two arguments are the value of the output we want to spend (in satoshis) and something called a scriptcode. For now, just store these data as properties of the Input class, we won't need them until step 6.",
        paragraph_five:
          'We also need a <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">serialize()</span> method that returns a byte array according to the specification:',
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
    },
    in_out_five: {
      title: 'The ins and outs',
      nav_title: 'Build the output class',
      heading: 'Finish the implementation of the Output class',
      paragraph_one:
        'Like the Input class, it needs a method <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">from_options()</span> that will construct an Output object from user-provided data:',
      paragraph_two: `It accepts a bitcoin address as a string (like the address from Mika 3000) and a value as an integer. The value is expressed as a number of satoshis! Remember, 1 BTC = 100000000 satoshis. You will need to use our bech32 library again to decode the address into version and data components.
        The class also needs a <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">serialize()</span>  method that returns a byte array according to the specification:`,
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
      paragraph_three:
        "Don't forget: integers in bitcoin are serialized little-endian!",
      success: 'The Output class looks good. Great Work!',
    },
    put_it_together_one: {
      normal: {
        title: 'Putting it all together',
        nav_title: 'Build the transaction digest',
        heading: 'Transaction digest',
        paragraph_one:
          'In chapter 5 we learned that to sign a transaction we first need to rearrange and hash its data into a message, which becomes one of the raw inputs to our signing algorithm. Since we are using segregated witness now, we also need to implement the updated transaction digest algorithm which is specified in <Link href="https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki" target="_blank" className="underline">BIP 143</Link>.',
        paragraph_two:
          'Remember each transaction input needs its own signature, and so some components of the digest algorithm can be cached and reused but others will be different depending on which input is being signed! Finish the transaction method <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">digest(input_index)</span> that computes the 32-byte message for signing an input.',
        list_heading: 'Some notes:',
        list_one: '"Double SHA-256" or dSHA256 = sha256(sha256(data))',
        list_two:
          'value is the amount of the satoshis in the output being spent from. We added it to our Input class back in step 2, and just saved it there inside the class until now.',
        list_three:
          'scriptcode is the raw bitcoin script being evaluated. We also added this to our Input class back in step 2.',
        list_four: 'all integers are encoded as little-endian!',
        paragraph_three:
          "We'll dive in to this more in the next section, but to spend from your pay-to-witness-public-key-hash (P2WPKH) address, your scriptcode would be:",
        paragraph_four: '...which decodes to the following bitcoin script.',
        paragraph_five:
          'For more information about scriptcode see <Link href="https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki" target="_blank" className="underline">BIP 143</Link>.',
        paragraph_six:
          'The raw transaction has a preimage that is the serialization of:',
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
            item_one:
              'The dSHA256 of all outpoints from all inputs, serialized',
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
            item_one:
              'The serialized outpoint of the single input being signed ',
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
            item_four: '4',
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
            item_one: 'Signature hash type, we will use 1 to indicate "ALL"',
            item_two: 'sighash',
            item_three: 'int',
            item_four: '4',
          },
        },
        paragraph_seven:
          'Finally, the message we sign is the double SHA-256 of all this serialized data.',
        success: 'The digest() method looks good. Great Work!',
      },
      hard: {
        title: 'Putting it all together',
        nav_title: 'Build the witness class',
        heading: 'Finish the implementation of Class Witness',
        paragraph_one:
          'It should have the following method, which accepts a byte array and adds that item to the witness stack.',
        paragraph_two:
          'It will also need a <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">serialize()</span> method that returns the serialized witness stack.',
        subheading_one: 'Witness stack',
        headings: {
          item_one: 'Description',
          item_two: 'Name',
          item_three: 'Type',
          item_four: 'Size',
        },
        table_one: {
          row_one: {
            item_one: 'The number of items in the witness stack',
            item_two: 'count',
            item_three: 'int',
            item_four: '1',
          },
          row_two: {
            item_one: 'Serialized stack items',
            item_two: 'items',
            item_three: '(items)',
            item_four: '(var)',
          },
        },
        subheading_two: 'Witness stack item',
        table_two: {
          row_one: {
            item_one: 'Total length of the following stack item',
            item_two: 'length',
            item_three: 'int',
            item_four: '1',
          },
          row_two: {
            item_one: 'The raw bytes of the stack item',
            item_two: 'data',
            item_three: 'bytes',
            item_four: '(var)',
          },
        },
        success: 'The Witness class looks good. Great Work!',
      },
    },
    put_it_together_two: {
      normal: {
        title: 'Putting it all together',
        nav_title: 'Build the witness class',
        heading: 'Sign and Populate the Witness!',
        paragraph_one:
          'In the last chapter, we wrote some important ECDSA signature verification code. Now, in order to create a valid signature, we are going to take that code and rearrange it a bit.',
        paragraph_two:
          "In this exercise we'll be implementing some of the math behind the ECDSA signing algorithm. For more information on how that works, check out these resources:",
        paragraph_three:
          '• The Wikipedia page for <Link href="https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm" target="_blank" className="underline">Elliptic Curve Digital Signature Algorithm</Link>',
        paragraph_four:
          '• <Link href="https://www.secg.org/sec1-v2.pdf#subsubsection.4.1.3" target="_blank" className="underline">Standards for Efficient Cryptography 1 (SEC 1)</Link>: Page 44, Section 4.1.3',
        heading_one: 'Step 1',
        paragraph_five:
          'In the Transaction class, there is a method, <span className="text-green p-1 text-base font-mono bg-[#0000004D] m-1">compute_input_signature(index, key)</span> that accepts the index number of an input and a private key (a 32-byte integer, or BigInt in JavaScript). Finish this method so it computes the message digest for the chosen input. Use the <span className="text-green p-1 text-base font-mono bg-[#0000004D] m-1">digest()</span> method from our last step, then return an ECDSA signature in the form of two 32-byte integers: <span className="italic">r</span> and <span className="italic">s</span>.',
        heading_two: 'Step 2',
        paragraph_six:
          'For the signing algorithm, the bitcoin protocol requires one more thing. The <span className="italic">s</span> value needs to be "low", meaning less than the order of the curve divided by 2. Add this check to <span className="text-green p-1 text-base font-mono bg-[#0000004D] m-1">compute_input_signature()</span>.',
        paragraph_seven:
          'See <Link href="https://github.com/bitcoin/bips/blob/master/bip-0146.mediawiki#low_s" target="_blank" className="underline">BIP 146</Link> to learn more.',
        heading_three: 'Step 3',
        paragraph_eight:
          'Complete the method <span className="text-green p-1 text-base font-mono bg-[#0000004D] m-1">sign_input(index, key)</span> so that it calls <span className="text-green p-1 text-base font-mono bg-[#0000004D] m-1"> compute_input_signature(index, key)</span>. When handling the return value, <span className="italic">r</span> and <span className="italic">s</span> need to be encoded with an algorithm called DER which we have implemented for you.',
        heading_four: 'Step 4',
        paragraph_nine:
          'Bitcoin requires an extra byte appended to the end of the DER-signature. This byte represents the "sighash type". For now we’ll always use the byte <span className="p-1 text-base font-mono bg-[#0000004D] m-1">0x01</span> for this, indicating "SIGHASH ALL".',
        heading_five: 'Step 5',
        paragraph_ten:
          'The last step is to create a Witness object with two stack items: the DER encoded signature blob we just made, and your compressed public key. Push the signature first, followed by the public key.',
        paragraph_eleven:
          "Append the witness stack object to the transaction object's array of witnesses.",
        success:
          'The compute_input_signature() and sign_input() methods look good. Great Work!',
      },
      hard: {
        title: 'Putting it all together',
        nav_title: 'Serialize the transaction',
        heading: 'Finish the implementation of Class Transaction',
        paragraph_one:
          'It should have global properties locktime and version as well as an array of inputs, outputs and witness stacks.',
        paragraph_two:
          'It will need a <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">serialize()</span> method that outputs the enitire transaction as bytes formatted for broadcast on the bitcoin p2p network.',
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
        paragraph_three:
          'Notice that there is no "count" value for witnesses. That is because the number of witness stacks must always be exactly equal to the number of inputs.',
        success: 'The serialize() method looks good. Great Work!',
      },
    },
    put_it_together_three: {
      normal: {
        title: 'Put it All Together',
        nav_title: 'Sign the transaction',
        heading: 'Finish the implementation of Class Transaction',
        paragraph_one:
          'To complete our transaction we will need a <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">serialize()</span> method that outputs the entire transaction as bytes formatted for broadcast on the bitcoin p2p network.',
        paragraph_two:
          'Our script should create and sign a Transaction object. It will have one input (the UTXO we identified in <span className="underline">The input class</span>) and two outputs:',
        paragraph_three:
          'We know our input, we know our output. Are we ready to build and sign a transaction? Not quite. We have a 1.61 BTC input and a 1 BTC output... what happens to the other 0.61 BTC? Most of that will be "change" and we need to send it back to our own address!',
        paragraph_four:
          'Notice that there is no "count" value for witnesses. That is because the number of witness stacks must always be exactly equal to the number of inputs.',
        paragraph_five:
          'But wait! We need to include a "fee". We\'ll shave off a tiny piece of our change output for the mining pools to incentivize them to include our transaction in a block. Let\'s reduce our change from 61,000,000 to 60,999,000 satoshis.',
        paragraph_six:
          'Finally our work is done. Your script should end by returning the result of the transaction serialize() method. This is a valid signed bitcoin transaction and we can broadcast it to the network to send Mika 3000 the money she needs!',
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
            item_one: 'All transaction inputs, serialized',
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
            item_one: 'All transaction outputs, serialized',
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
          'Mika 3000 gets 100,000,000 satoshis to bc1qgghq08syehkym52ueu9nl5x8gth23vr8hurv9dyfcmhaqk4lrlgs28epwj',
        bullet_two:
          'You get 61,000,000 back to your address bc1qm2dr49zrgf9wc74h5c58wlm3xrnujfuf5g80hs',
        success: "You've done it! You've built a transaction!",
      },
      hard: {
        title: 'Putting it all together',
        nav_title: 'Build the transaction digest',
        heading: 'Transaction digest',
        paragraph_one:
          'In chapter 5 we learned that to sign a transaction we first need to rearrange and hash its data into a message, which becomes one of the raw inputs to our signing algorithm. Since we are using segregated witness now, we also need to implement the updated transaction digest algorithm which is specified in <Link href="https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki" target="_blank" className="underline">BIP 143</Link>.',
        paragraph_two:
          'Remember each transaction input needs its own signature, and so some components of the digest algorithm can be cached and reused but others will be different depending on which input is being signed! Finish the transaction method <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">digest(input_index)</span> that computes the 32-byte message for signing an input.',
        list_heading: 'Some notes:',
        list_one: '"Double SHA-256" or dSHA256 = sha256(sha256(data))',
        list_two:
          'value is the amount of the satoshis in the output being spent from. We added it to our Input class back in step 2, and just saved it there inside the class until now.',
        list_three:
          'scriptcode is the raw bitcoin script being evaluated. We also added this to our Input class back in step 2.',
        paragraph_three:
          "We'll dive in to this more in the next section, but to spend from your pay-to-witness-public-key-hash address, your scriptcode would be:",
        paragraph_four: '...which decodes to the following bitcoin script.',
        paragraph_five:
          'For more information about scriptcode see <Link href="https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki" target="_blank" className="underline">BIP 143</Link>.',
        paragraph_six:
          'The raw transaction has a preimage that is the serialization of:',
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
            item_one:
              'The dSHA256 of all outpoints from all inputs, serialized',
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
            item_one:
              'The serialized outpoint of the single input being signed ',
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
            item_one: 'Signature hash type, we will use 1 to indicate "ALL',
            item_two: 'sighash',
            item_three: 'int',
            item_four: '4',
          },
        },
        paragraph_seven:
          'Finally, the message we sign is the double SHA-256 of all this serialized data.',
        success: 'The digest() method looks good. Great Work!',
      },
    },
    put_it_together_four: {
      hard: {
        title: 'Putting it all together',
        heading: 'Signing!',
        nav_title: 'Sign the transaction',
        paragraph_one: `We wrote the ECDSA signature verification code in the last chapter, now we need to rearrange that a bit to create a valid signature. Add a method called <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">compute_input_signature(index: int, key: int)</span> to your Transaction class that accepts an input index number and a private key (a 32-byte integer!). It should compute the message digest for the chosen input using the <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">digest()</span> method from step 6, and return an ECDSA signature in the form of two 32-byte integers r and s.`,
        paragraph_two:
          'See <Link href="https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm" target="_blank" className="underline">this page</Link> for the ECDSA signing algorithm. Also <Link href="https://www.secg.org/sec1-v2.pdf#subsubsection.4.1.3" target="_blank" className="underline">this PDF</Link> (Page 44, Section 4.1.3).',
        paragraph_three:
          'The bitcoin protocol requires one extra step to the signing algorithm, which requires that the s value is "low", meaning less than the order of the curve divided by 2. Learn more about this in <Link href="https://github.com/bitcoin/bips/blob/master/bip-0146.mediawiki#low_s" target="_blank" className="underline">BIP 146</Link>.',
        success: 'The compute_input_signature() method looks good. Great Work!',
      },
    },
    put_it_together_five: {
      hard: {
        title: 'Putting it all together',
        heading: 'Populate the Witness',
        nav_title: 'Populate the Witness',
        paragraph_one:
          'Finish the method <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">sign_input(index: int, key: int)</span> that calls our step 7 method <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">compute_input_signature(index, key)</span> and handles its return value. The r and s numbers need to be encoded with an algorithm called DER which we have implemented for you.',
        paragraph_two:
          'Bitcoin requires one extra byte appended to the DER-signature which represents the "sighash type". For now we’ll always use the byte 0x01 for this indicating "SIGHASH ALL".',
        paragraph_three:
          'Once we have that signature blob we need to create a Witness object with two stack items: the signature blob, and your compressed public key. Push the signature first, followed by the public key.',
        paragraph_four:
          'The witness stack object can then be appended to the witnesses array of the transaction object.',
        success: 'The sign_input() method looks good. Great Work!',
      },
    },
    put_it_together_six: {
      hard: {
        title: 'Putting it all together',
        heading: 'Put it All Together',
        nav_title: 'Put it All Together!',
        paragraph_one:
          'We know our input, we know our output. Are we ready to build and sign a transaction? Not quite. We have a 1.61 BTC input and a 1 BTC output... what happens to the other 0.61 BTC? Most of that will be "change" and we need to send it back to our own address!',
        paragraph_two:
          'Write a script that creates and signs a Transaction object. It should have one input (the UTXO we identified in step 1) and two outputs:',
        paragraph_three:
          'But wait! We need to include a "fee". We\'ll shave off a tiny piece of our change output for the mining pools to incentivize them to include our transaction in a block. Let\'s reduce our change from 61,000,000 to 60,999,000 satoshis.',
        paragraph_four:
          'Finally our work is done. Your script should end by returning the result of the transaction <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">serialize()</span> method. This is a valid signed bitcoin transaction and we can broadcast it to the network to send Mika 3000 the money he needs!',
        bullet_one:
          'Mika 3000 gets 100,000,000 satoshis to bc1qgghq08syehkym52ueu9nl5x8gth23vr8hurv9dyfcmhaqk4lrlgs28epwj',
        bullet_two:
          'You get 61,000,000 back to your address bc1qm2dr49zrgf9wc74h5c58wlm3xrnujfuf5g80hs',
        success: "You've done it! You've built a transaction!",
      },
    },
    outro_one: {
      title: 'Outro',
      nav_title: 'Chapter complete',
      heading: 'You did it!',
      paragraph_one:
        "You successfully built a transaction from scratch to pay Mika 3000 for her help. Now that we are done here let's see what we can find on Vanderpoole's island.",
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
    title: `Offense is the Best Defense`,
    paragraph_one:
      'You and Mika 3000 reach Vanderpoole’s private island first via plane and parachute, then via dune buggy, and then via rowboat that rows itself.',
    intro_one: {
      title: 'Intro',
      nav_title: 'Infiltrating the compound',
      paragraph_one:
        'You ask your compatriots whether they are worried about Vanderpoole’s army of security drones.',
      paragraph_two:
        '—HOLOCAT: “Give me 15 minutes. They’re basically birds, and I’m a cat. They don’t stand a chance.”',
      paragraph_three:
        'Holocat extends her claws and deals with Vanderpoole’s drone army pounce by pounce. Mika 3000 hands you a black turtleneck sweater, gloves, and a pair of night vision goggles.',
      paragraph_four:
        '—MIKA 3000: “You can’t do espionage in a Hawaiian shirt. What were you thinking? This isn’t another abandoned warehouse; this is a fortress. Here, I almost forgot. Take this grappling hook.”',
      paragraph_five:
        'Wondering what you’ve gotten yourself into, you and Mika 3000 scale the castle walls of Vanderpoole’s primary residence. To your surprise, his home overflows with pro-bitcoin art, books, and paper magazines. He is, or rather was, a true bitcoiner. A collection of miners dating back 125 years sit preserved in glass display cases. That’s when you see it: Vanderpoole’s workshop.',
    },
    intro_two: {
      nav_title: 'The control room',
      paragraph_one:
        'The gigantic room is a mess, though its layout is methodical. Remember when miners were clogging up the bitcoin network with empty blocks? Inside open notebooks, you find Vanderpoole’s designs for the backdoor that he used sketched out in detail. You were right: It was all a lie, yet one told not by a conniving villain but by a desperate believer in bitcoin whose company could no longer compete. To preserve his legacy, Vanderpoole infected the miners with a virus.',
      paragraph_two:
        'The virus replaces a section of the code used by all miners, regardless if they are part of a pool or not. It is the block building logic, the algorithm that assembles transactions into a block template. The template is still passed on to legitimate hashing code for proof-of-work. Templates are combined with zillions of different nonces while searching for a valid hash, but by the time one is found, the damage–the absence of any transactions in the block template, has been done.',
      paragraph_three:
        '—HOLOCAT: “What a loss. His family was once great. It’s so sad to see the Vanderpoole’s come to this.”',
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
      python: {
        paragraph_one:
          'This is the code you find on Vanderpoole\'s server. It imports the current mempool from a JSON file and stores all the unconfirmed transactions in memory as instances of the MempoolTransaction class. The function that Vanderpoole has crippled is <span className="text-green">assemble_block()</span>. If you run the code as Vanderpoole left it, you will see the problem right away.',
      },
      javascript: {
        paragraph_one:
          'This is the code you find on Vanderpoole\'s server. It imports the current mempool from a JSON file and stores all the unconfirmed transactions in memory as instances of the MempoolTransaction class. The function that Vanderpoole has crippled is <span className="text-green">assembleBlock()</span>. If you run the code as Vanderpoole left it, you will see the problem right away.',
      },
      paragraph_two: {
        a: 'You need to fix the block assembly function not only to build valid blocks but also maximize the fees in the block, so the miners can earn the most profit possible given the consensus rules. The most critical consensus rules you will need to pay attention to restrict the total ',
        b: {
          text: 'transaction weight ',
          href: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=what%2520are%2520weighted%2520units',
          question: 'What are weighted units?',
        },
        c: ' and the ',
        d: {
          text: 'order of transactions ',
          href: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=what%2520order%2520do%2520transactions%2520need%2520to%2520be%2520in%2520a%2520block',
          question: 'What order do transactions need to be in a block?',
        },
        e: ' in the block.',
      },
      paragraph_three:
        'You can make the following assumptions to complete your mission:',
      bullet_one:
        'All transactions in the mempool have already been verified as valid.',
      bullet_two:
        'The coinbase transaction, and the weight it contributes to the block, can be ignored.',
      paragraph_four:
        'You can view the entire raw mempool JSON file <Link href="https://github.com/saving-satoshi/resources/blob/main/chapter-7/mempool.json" target="_blank" className="underline">here</Link>.',
      paragraph_five:
        'Or browse an excerpt of the file in this table for some basic patterns:',
      headings: {
        item_one: 'Transaction ID',
        item_two: 'Fee',
        item_two_b: 'Satoshis',
        item_three: 'Weight',
        item_three_b: 'Weight units (WU)',
        item_four: 'Ancestors',
      },
      table_one: {
        footer:
          'View the json file  <Link href="https://github.com/saving-satoshi/resources/blob/main/chapter-7/mempool.json" target="_blank" className="underline">here</Link> for the rest of the transaction data',
      },
      poor: "It's a valid block, but can you do better? Try to collect more fees.",
      good: "It's a valid block, but you are not quite getting the most fees yet. Keep working, or continue, your choice.",
      success: "It's a valid block, and you optimized fees. Nice!",
    },
    outro_one: {
      title: 'Outro',
      nav_title: 'Chapter complete',
      heading: 'You did it!',
      paragraph_one:
        'You escape the compound and return home. Investors sell their BitRey shares en masse when the story drops, plummeting Vanderpoole’s net worth.',
    },
    resources: {
      mempool_transaction_one: {
        bytes_v_weight_heading: 'Bytes vs Weight Units',
        bytes_v_weight_paragraph_one:
          'In bitcoin block construction, "weight units" (WU) and "bytes" are two different metrics used to measure the size of transactions and blocks.',
        bytes_v_weight_subheading_bytes: 'Bytes',
        bytes_v_weight_paragraph_two:
          'Bytes refer to the raw size of a transaction or block in terms of actual data. It is the literal size of the transaction data when it is serialized (converted into a format that can be stored or transmitted). Before the implementation of Segregated Witness (SegWit), the block size was limited to 1 megabyte (1 MB), measured in bytes.',
        bytes_v_weight_subheading_wu: 'Weighted Units',
        bytes_v_weight_paragraph_three:
          'Weighted units are a more complex metric introduced with SegWit in Bitcoin Improvement Proposal 141 <Link href="https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki#user-content-Other_consensus_critical_limits" target="_blank" className="undeline">BIP 141</Link>. This system aims to more fairly allocate block space by considering the impact of witness data separately.',
        bytes_v_weight_paragraph_four:
          'In our lesson here its just important to note we are using weight units to calculate the maximum block size and the same for each tx so make sure your block does not exceed the maximum size of 4000000 weight units.',
      },
    },
  },

  chapter_eight: {
    title: 'Twenty-One Million',
    paragraph_one: `Thanks to your investigation, people really want to hear from you, so you boop Holocat’s nose, revealing an invitation from Deborah Chunk, who invites you to appear in person at the offices of LARGE BIG NEWS Studios. Getting the story out is important, so you once again hop into your Budgetcopter.`,
    intro_one: {
      title: 'Intro',
      nav_title: `Vanderpoole's Deception`,
      paragraph_one: `—DEBORAH CHUNK: “These documents expose the alleged lies of Thomas Vanderpoole in a way that is certainly historic, scandalous even. The first thing people will most want to know is whether you acted alone. The second is where you got your information.”`,
      paragraph_two: `You tell her about Holocat and Holocat only. You lie and say the information was delivered directly to you and Mika 3000 by someone claiming to be Satoshi Nakamoto, who you suspect is actually a hacker collective. This last point causes Thomas Vanderpoole to call directly into the show.`,
    },
    intro_two: {
      title: `Intro`,
      nav_title: ` Vanderpoole's Anger`,
      paragraph_one: `—THOMAS VANDERPOOLE: “My family is Satoshi Nakamoto! Do you see what this hootenanny just said? He just admitted to working with hackers, a collective that only uses the name Satoshi Nakamoto to claim a legacy that is rightfully mine. This scoundrel is lying to undermine the protests of bitcoiners who are rightfully upset about the elimination of block rewards!”`,
      paragraph_two: `Vanderpoole continues to hurl two century-old insults at you. He calls you a varmint, a rapscallion, a yellow belly, a greenhorn, and more. You almost feel bad for him. His family was undeniably important to bitcoin’s history, even if his claims about Satoshi Nakamoto are transparently fake.`,
    },
    intro_three: {
      intro: `Intro`,
      nav_title: `Allegations Against Vanderpoole`,
      paragraph_one: `—DEBORAH CHUNK: “Mr. Vanderpoole, if I may. People are confused and uncertain about whether the bitcoin supply has been tampered with. Can you prove that you played no part in alleged tampering? Mysterious hacker and his holocat, can you prove Vanderpoole attempted this crime against bitcoin?”`,
    },
    building_blocks_one: {
      title: 'Building blocks',
      nav_title: 'Finding the chain tip',
      paragraph_one: {
        a: 'You know that Vanderpoole has been trying to confuse people by mining blocks that generate more bitcoin than they are allowed to, ultimately inflating the money supply. These blocks are invalid because they break hard-coded protocol rules, but they might still fool some people running buggy or malicious software, or ',
        b: {
          text: 'light clients',
          href: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=what%2520are%2520light%2520clients%253F',
          question: 'What are light clients?',
        },
        c: ' that do not fully verify network data.',
      },
      paragraph_two: `You also know that somewhere on the network is a chain of valid blocks from the genesis block to today's "chain tip", where every transaction and block follows the rules. This chain is the only <span className="italic">real</span> chain, the only chain that matters, and the only chain where bitcoin's supply of 21 million original bitcoins is intact.`,
      paragraph_three:
        "Now, on live TV in front of the entire world, you need to find the longest valid blockchain and verify the coin supply's integrity. While you're at it, you'll also be able to prove that Vanderpoole has turned the bitcoin network into an invalid block minefield.",
    },
    building_blocks_two: {
      title: 'Building blocks',
      nav_title: 'A bitcoin block tree',
      paragraph_one:
        "Every block has exactly one preceding block, but could have more than one next block. Because of this, bitcoin blocks form more of a tree than a chain. Some of the branches are dead-ends and, as you must prove, some of the branches are invalid because of Vanderpoole's shenanigans.",
      paragraph_two:
        "Somewhere in this maze is a path from the genesis block to today's most recent block. You have to find it and tell Deborah Chunk which block is on the tip of the tree's most valid chain... before the next commercial break. Ahhh!",
      paragraph_three:
        'This artistic interpretation of bitcoin’s blockchain “tree” shows how every block has exactly one parent, but could have more than one child. Each block is labeled with its hash, and the hash of its parent (<span className="p-1 font-mono m-0.5 text-sm">prev</span>).',
      paragraph_four:
        'Some of these blocks are red because they are invalid. The longest path of blocks starting from the genesis block is colored green and represents the “most work” or “most valid” chain. Transactions in these blocks are the only truly “confirmed” transactions. Other valid blocks, the blue ones, don’t have as many descendants as the “most work” chain. They terminate in what are called <span className="italic">stale tips</span>.',
    },
    building_blocks_three: {
      title: 'Building Blocks',
      nav_title: `Explore the Bitcoin API`,
      heading: 'The Bitcoin API',
      paragraph_one: `To answer these questions, you'll need to interact with a bitcoin full node, via its JSON-RPC API. We've imported a library for you called <span className="p-1 font-mono bg-[#0000004D] m-1">bitcoin_rpc</span> which handles the secure HTTP connection from your script to the full node, executes your commands, and returns the responses. Your full node is \"pruning\" so it only has access to the last 300 blocks, but that should be enough to include the entire timespan of Vanderpoole's recent muckery.`,
      paragraph_two: `Let's start by getting familiar with the API. The library has one function that accepts one required argument, <span className="p-1 font-mono bg-[#0000004D] m-1">method</span> (a string) and one optional argument, <span className="p-1 font-mono bg-[#0000004D] m-1">params</span> (either a string or a number):`,
      paragraph_three:
        'The API also has a convenient "help" method! Ask it for help to learn more about the available commands, then pass the challenge by printing the current network difficulty.',
      success: "Nice work exploring the API! Let's move on.",
    },
    building_blocks_four: {
      title: 'Building Blocks',
      nav_title: `Find the Smallest Transaction Block`,
      heading: `Block Data`,
      paragraph_one: `Each bitcoin full node has a database. That's where blocks are stored and indexed by their hash. The full node keeps track of which blocks are candidates at each height in the chain with a second index that maps height -> [block hashes].`,
      paragraph_two: `The JSON-RPC API returns block data as JSON objects that include a property<span className="p-1 font-mono bg-[#0000004D] m-1">txs</span>which is an array of transaction objects.`,
      paragraph_three: `Retrieve all the block candidates at height 6929996 and print the hash of the block with the fewest transactions in it.`,
      success: `Nicely Done`,
    },
    building_blocks_five: {
      title: 'Building Blocks',
      nav_title: `Get the Transaction Fee`,
      heading: `Transaction Data`,
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
        'The first transaction in every block is called the coinbase. It may also be referred to as the "0th" transaction (referring to txs[0]) and it has a few very special properties. First of all, it has no inputs! This is because it does not spend any existing coins. Second, its output value is strictly defined by the protocol (despite what Vanderpoole might say!). This is the mechanism by which miners both collect fees from transactions, and generate new coins.',
      paragraph_two:
        "It's fairly easy to understand how total transaction fees in a block are summed up, but where does that block subsidy value come from? How does every participant in the bitcoin network determine exactly how much new bitcoin miners are allowed to generate at any given time?",
      paragraph_three:
        'This is the algorithm written by Satoshi Nakamoto that has remained an immutable core property of the bitcoin system since the beginning:',
      list_one:
        'Starting with the block #1 mined in 2009, the block subsidy is 50 BTC (or 5,000,000,000 satoshis)',
      list_two: 'Every 210,000 blocks that value is cut in half.',
      paragraph_four:
        'At block height 209,999 the subsidy was 50 BTC. In the very next block at height 210,000 the subsidy was 25 BTC, and so on. After 63 "halvings" the subsidy will be one single satoshi. The last halving will drop the subsidy to zero.',
      paragraph_five: 'AND THAT LAST HALVING WAS YESTERDAY!',
      paragraph_six:
        'Finish the implementation of the following function that accepts a block height as an argument and returns the value of the subsidy in satoshis.',
      success: 'The get_subsidy function looks great. Nice work!',
    },
    building_blocks_seven: {
      title: 'Building Blocks',
      nav_title: 'Get the Valid Block',
      heading: 'That Pernicious Scallywag!',
      paragraph_one: `There are four block candidates at height 6929851. Only one of them is a valid block, the other three were mined by Vanderpoole's cartel in reckless attempts to inflate the bitcoin money supply.`,
      paragraph_two: `Using the block subsidy function you wrote in the previous challenge and the JSON-RPC API, write a function to check the validity of a block candidate. Do this by checking if the coinbase output is correct. Your function should return true if the block is valid.`,
      paragraph_three: `Here's how your code will be used to find the one valid block at height 6929851:`,
      success: 'The validate block function looks great. Nice work!',
    },

    building_blocks_eight: {
      title: 'Building Blocks',
      nav_title: 'Showtime!',
      heading_one: 'Showtime!',
      paragraph_one: `The cameras are rolling, two billion humans worldwide are tuned in to the live stream. Only a few minutes remain until the next commercial break. Deborah Chunk is sweating. Somehow, Holocat is also sweating. Somewhere on the other end of the call, Vanderpoole must be sweating, too. This is your moment.`,
      paragraph_two: `Starting with the valid block just before the one you found at height 6929851, find the longest chain of valid blocks you can. Store the chain as an array of block hashes. While you're at it, maintain an array of every invalid block you find as well, just to show the world how hard Vanderpoole tried to break bitcoin. It doesn't matter what order these invalid block hashes are in, but your valid chain MUST start with the hash of block 6929850 followed by one block hash at each height all the way up to the chain tip.`,
      paragraph_three: `Vanderpoole is sneaky! He mined valid blocks on top of invalid blocks, and invalid blocks on top of short valid blocks! It's a maze, a minefield, out there. You may need to keep track of several valid branches as you traverse the tree. There will be valid blocks with valid parents that are not in the longest chain! In the end, there will be only one valid leaf with a greater height than all the others.`,
      paragraph_four: `Remember: Block objects returned by the JSON API have a property "prev" which identifies that block's parent by its hash:`,
      heading_two: `A block is ONLY valid if:`,
      paragraph_five: `Its coinbase output value is equal to the expected block subsidy plus the total transaction fees in the block.`,
      heading_three: `AND`,
      paragraph_six: `The block is a child of another VALID block. This is ensures a VALID CHAIN.`,
      paragraph_seven: `Return a JSON object with two arrays labeled "valid" and "invalid":`,
      success: 'The showtime function looks great. Nice work!',
    },
    outro_one: {
      title: 'Outro',
      nav_title: 'Chapter complete',
      heading: "We're doing it live!",
      paragraph_one:
        "You found the longest chain and proved it to everyone! You are one step closer to discrediting Vanderpoole. Needless to say he didn't answer anymore of Ms. Chunk's questions.",
    },
    resources: {
      building_blocks_three: {
        tip: 'Try this command first to give you an idea of what commands are available.',
        rpc_heading: 'RPC commands',
        rpc_paragraph_one:
          'RPC commands are an interface of commands that allow a client to make requests to a program creating an interaction between the client and the server. These requests are sent from the client or requester along with any parameters that the client needs to modify their request.',
      },
      building_blocks_four: {
        block_data_heading: 'Block data',
        block_data_paragraph_one:
          'At its core bitcoin is a ledger, a list, of all the transactions ever sent since its inception. Each transaction is organized by block and each block is organized in order from the genesis block.',
      },
      building_blocks_five: {
        transaction_data_heading: 'Transaction data',
        transaction_data_paragraph_one:
          'Each transaction contains its own subset of information to distinguish itself from other transactions and to make it clear how much bitcoin is transferred and what inputs and outputs are being used.',
      },
      building_blocks_six: {
        block_subsidy_heading: 'Block subsidy',
        block_subsidy_paragraph_one:
          'The block subsidy is the amount of bitcoin released into circulation from the coinbase of each new block. As there are only ~21 million total bitcoins able to be created there must be some diminishing euqation to allow for a coinbase subisdy that reaches the 21 million amount. The equation below visualizes what exists in bitcoin.',
        block_subsidy_paragraph_two:
          'What does this equation do? Well we know that the coinbase reward of the genesis block was 50 bitcoin and this is indicated with the numerator of the fraction on the right side of the equation. The denominator is the part of our equation that indicates by how much the reward will be decreased each halving, in this case 2, or by half. We also know that bitcoin is only aware of individual blocks as a chronological system so we make each halving 210,000 blocks long. Lastly we want to make each halving double each time so we want to double the amount the subsidy is halved by each halving so we raise 2 to the power of the current halving `i` to the final halving epoch 32 iterations in the future.',
      },
      building_blocks_seven: {
        validating_heading: 'Validating blocks',
        validating_paragraph_one:
          'Validating a block is incredibly important to the strength of the network as each block is built on transactions of previous blocks, if any block is discovered to be invalid in the past it can cause huge ramifications as a large chain of blocks comes into question with a previously invlaid block.',
      },
      building_blocks_eight: {
        showtime_heading: 'Validating the chain',
        showtime_paragraph_one:
          'Validating the blockchain in Bitcoin is crucial for maintaining the integrity and security of the entire network. Each transaction must be verified by miners to ensure that it is legitimate and follows the consensus rules established by the network. This validation process prevents double-spending and fraud, allowing users to trust the system without needing a central authority. Moreover, it enhances transparency, as all validated transactions are recorded on a public ledger, enabling anyone to audit the history of transactions.',
      },
    },
  },

  chapter_nine: {
    title: `Don't trust, verify.`,
    paragraph_one: `You demonstrated Vanderpoole’s invalid blocks and proved the most work chain, just in time. Its commercial break.`,
    paragraph_two: `Just then, Vanderpoole himself walks into the studio! He starts complaining that you have ruined his business and slandered his good family name.`,
    intro_one: {
      title: 'Intro',
      nav_title: 'Threats',
      paragraph_one:
        'Everyone is celebrating your success. You are smiling, the crew is smiling, Deborah Chunk is smiling. But there is one man on set who is not happy. A tall grey-haired man standing by the wall. The crowd parts and you see him face to face, for the first time: Vanderpoole! He is there!',
      paragraph_two:
        'He starts shouting at you. You have ruined his business and slandered his good family name. He threatens to sue you in court with all his might for the rest of your days.',
    },
    intro_two: {
      title: 'Intro',
      nav_title: 'Coming to terms',
      paragraph_one:
        'Just then, a TV network producer walks in and tells you and Deborah that viewers are calling in from all around the world that want to support your cause! You have lots of fans now and they all want to donate bitcoin to you! Deborah asks if you could provide a wallet address that they can broadcast on the air.',
      paragraph_two:
        'This makes Vanderpoole even more furious. He demands that you split the incoming donations with him or he will carry out his threat of endless lawsuits. Satisfy him, however, and he will leave you alone.',
      paragraph_three:
        'Your task is to create a bitcoin script contract with this untrustable counterparty, and make sure you (and Vanderpoole) can spend from it how and when you agree to.',
    },
    opcodes_one: {
      title: 'OpCodes',
      nav_title: 'Bitcoin script',
      heading: 'Bitcoin script',
      paragraph_one:
        "We mentioned bitcoin script back in chapter 6 but we didn't dwell on it because the coins you were spending were locked by a simple mechanism: a single signature and an implied script that evaluated that signature with a public key. Now things are going to get more interesting.",
      paragraph_two:
        'There are two important parts to spending a bitcoin output: A script and a stack.',
      paragraph_three: "We'll explore the two concepts at a high level first.",
    },
    opcodes_two: {
      title: 'OpCodes',
      nav_title: 'Bitcoin stack',
      heading: 'The stack',
      paragraph_one:
        "Think of a stack of books 📚. If you want to add a book, you have to place it on top of the stack, there's nowhere else for it to go. If you want to read a book, the only one you can access is the one on top of the stack. Even if you want more than one you have start at the top of the stack and work your way down. In computing terms, a stack is like an array of data items with two operations:",
      paragraph_two:
        '<span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_PUSH</span> Add an item to the "top" of the stack.',
      paragraph_three:
        '<span className="text-[#3DCFEF] w-fit rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_POP</span> Remove the "top" item from the stack for processing.',
      subheading_one: 'Example:',
      stack_list_one:
        'Here is a stack: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">[]</span>',
      stack_list_two:
        'Push the number 1: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">[1]</span>',
      stack_list_three:
        'Push the number 2: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">[1, 2]</span>',
      stack_list_four:
        'Pop the top item off the stack: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">[1]</span>',
      paragraph_four:
        'Notice that the first item pushed on to the stack will be the last item popped off the stack, so it will be the last item processed by the script. For this reason the stack has an "upside down" or "backwards" feel to it, and the first thing you see on the stack will likely be the solution required at the end of script processing.',
      paragraph_five:
        'When spending a bitcoin transaction output, the elements required by the spender are provided in the witness of the spending transaction input (see chapter 6!) and those elements get pushed on to the stack before any script processing begins. We will refer to those items as the INITIAL STACK. They are important because they are literally the data that unlocks the script and allows the spender to spend coins!',
    },
    opcodes_three: {
      title: 'OpCodes',
      nav_title: 'OpCodes',
      heading: 'OpCodes',
      paragraph_one:
        'Script is a linear series of commands that are executed one by one, manipulating items on the stack. When the end of the script has been reached, there must be EXACTLY ONE NON-ZERO (NON-FALSE) ITEM remaining on the stack, or the entire operation is invalid and so is your bitcoin transaction. There are over 100 commands in the bitcoin script language, called "opcodes". We are only going to use a handful of them for this challenge.  ',
      paragraph_two:
        "Let's demonstrate an example where we lock up a bitcoin with the math problem 1 + 2 = ?. Whoever knows the answer to this math problem can spend the coins.",
      paragraph_three: 'The script would look like this:',
      paragraph_four:
        '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_1 OP_2 OP_ADD OP_EQUAL</span>',
      paragraph_five:
        'This is script will be hashed and bech32-encoded into an address where someone can send coins.',
    },
    opcodes_four: {
      title: 'OpCodes',
      nav_title: 'The stack solution',
      heading: 'The stack solution',
      paragraph_one:
        "The stack solution would look like this: [3]. This is what the spending transaction would need in the witness of its input spending these coins. Let's step through it:",
      table_one: {
        headings: {
          item_one: 'Step',
          item_two: 'Stack',
          item_three: 'Script Execution',
        },
      },
      subheading_one: 'Explanation',
      stack_list_one:
        'init: the funding transaction output and spending transaction input are brought together.',
      stack_list_two:
        'step 1: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_1</span>pushes "1" onto the stack.',
      stack_list_three:
        'step 2: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_2</span>pushes "2" onto the stack.',
      stack_list_four:
        'step 3: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ADD</span>pops two items off the stack, adds them together, and pushes the sum back to the stack.',
      stack_list_five:
        'step 4: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_EQUAL</span>pops two items off the stack, compares them, and pushes a boolean result back to the stack.',
      paragraph_two:
        'Now we have reached the end of the script and there is only a single TRUE item left on the stack - the coins are spent!',
      paragraph_three:
        "Hopefully it's obvious that if we started this example with a 4 on the stack, we would not be able to spend the coins. For these challenges we are going to use a very limited set of opcodes, which we will introduce by category",
    },
    opcodes_five: {
      title: 'OpCodes',
      nav_title: 'Compute basic arithmetic',
      heading: 'Basic Arithmetic',
      paragraph_one:
        'Bitcoin script can do simple math operations. You could lock coins using simple math but then anyone who can do math could spend the coins! In other words, do not try this on mainnet.',
      subheading_one:
        'Opcodes that push integers or arbitrary data to the stack',
      opconstants_list_one_heading:
        '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_0</span>',
      opconstants_list_one_paragraph: 'Pushes the number 0 on to the stack.',
      opconstants_list_two_heading:
        '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_1</span>',
      opconstants_list_two_paragraph: 'Pushes the number 1 on to the stack.',
      opconstants_list_three_heading:
        '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_2</span>',
      opconstants_list_three_paragraph: 'Pushes the number 2 on to the stack.',
      opconstants_list_four_heading:
        '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_3</span>',
      opconstants_list_four_paragraph: 'Pushes the number 3 on to the stack.',
      opconstants_list_five_heading:
        '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_DUP</span>',
      opconstants_list_five_paragraph:
        'Pushes a duplicate of the top stack item on to the stack.',
      opconstants_list_six_heading:
        '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_PUSH</span>',
      opconstants_list_six_paragraph:
        'Pushes the following script value on to the stack. Example values include SIG(alice), PUBKEY(alice), HASH256(secret), secret. Lowercase strings represent real-world data and the other opcodes in this interpreter will process them as if they are actual keys, signatures, hash digests and preimages.',
      subheading_two: 'Opcodes that do arithmetic',
      oparithmetic_list_one_heading:
        '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ADD</span>',
      oparithmetic_list_one_paragraph:
        'Pops two items off the stack, adds them together, pushes their sum back to the stack.',
      oparithmetic_list_two_heading:
        '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_EQUAL</span>',
      oparithmetic_list_two_paragraph:
        'Pops two items off the stack, compares their equality, pushes a boolean back to the stack.',
      oparithmetic_list_three_heading:
        '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_EQUALVERIFY</span>',
      oparithmetic_list_three_paragraph:
        'Like OP_EQUAL but throws an error and halts script execution immediately if the two items are not equal.',
      paragraph_two: 'Provide the initial stack to spend from the script.',
    },
    opcodes_six: {
      title: 'OpCodes',
      nav_title: 'Decode with cryptography',
      heading: 'Simple Cryptography',
      paragraph_one:
        'We\'ve explored "pay to public key hash" in previous chapters. This is the bitcoin script that was written explicitly in millions of transaction outputs before segregated witness came along and abbreviated it. Coins are locked by the hash of a public key. The spender must reveal the public key that matches that hash, and then provide a signature verified by that public key.',
      subheading_one: 'Opcodes that do simple cryptography',
      opcryptography_list_one_heading:
        '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm h-fit">OP_HASH256</span>',
      opcryptography_list_one_paragraph:
        'Pops one item off the stack, computes the double-SHA256 digest and pushes that digest back to the stack. In our exercise this operation is symbolized using strings. Example: The script OP_1 OP_HASH256 produces the stack [HASH256(1)]',
      opcryptography_list_two_heading:
        '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm h-fit">OP_CHECKSIG</span>',
      opcryptography_list_two_paragraph:
        'Pops two items off the stack. The first item it pops must be a public key in the format PUBKEY(...). The second item must be a signature in the format SIG(...). If the strings inside the parentheses in both items are equal we consider that a valid ECDSA signature and push TRUE back to the stack, otherwise FALSE',
      paragraph_two: 'Provide the initial stack to spend from the script.',
    },
    opcodes_seven: {
      title: 'OpCodes',
      nav_title: 'Multisig',
      heading: 'Multisig',
      paragraph_one:
        'Multi-signature policies provide a list of public keys and a number of signatures required for a valid spend. It can be described as "m-of-n" meaning "m number of signatures are required from this list of n public keys". The public keys and the m and n values are typically included in the locking script and the spender only needs to provide the right number of signatures.',
      paragraph_two:
        'Holocat appears with a pre-recorded message from Satoshi Nakamoto!',
      paragraph_three:
        'Hi. I accidentally wrote a bug when I implemented <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_CHECKMULTISIG</span>. It pops an extra item off the stack that isn\'t used at all. UMMMMmmmmmm... WHOOPSIE! Sorry. That code is consensus-critical so every <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_CHECKMULTISIG</span> operation in bitcoin\'s past, present, and future will be forced to include a "dummy" element. Don\'t forget it! Or you won\'t be able to spend your multisig coins.',
    },
    opcodes_eight: {
      title: 'OpCodes',
      nav_title: 'Sign with multiple keys',
      heading:
        '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-1">OP_CHECKMULTISIG</span>',
      subheading_one:
        'Processes m-of-n multi-signature by following this algorithm.',
      multisig_list_one:
        'Pop a single integer off the stack. This is the <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">n</span> value.',
      multisig_list_two:
        'Pop <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">n</span> number of items off the stack, these are all expected to be public keys of the format <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">PUBKEY(...)</span>',
      multisig_list_three:
        'Pop a single integer off the stack. This is the <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">m</span> value.',
      multisig_list_four:
        'Pop <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">m</span> number of items off the stack, these are all expected to be signatures of the format <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">SIG(...)</span>',
      multisig_list_five:
        'Pop an extra element off the stack for absolutely no reason at all.',
      multisig_list_six:
        'Iterate through each public key: Verify the key against the stack-topmost signature. If it is valid, remove both the key and the signature and continue with the next public key. If it is not valid, remove the public key only and continue to the next public key (which will begin by checking against that same topmost signature)',
      multisig_list_seven:
        'If all public keys have been tested and there are any signatures remaining, the operation fails.',
      multisig_list_eight:
        'Once all signatures have been removed the operation can finish early with success, even if more public keys are remaining.',
      paragraph_one:
        'Note that m <= n. There may be more public keys than signatures but never more signatures than public keys. Also note that the keys and signatures MUST be in the same order, even if some keys are not used to sign.',
      paragraph_two: 'Provide the initial stack to spend from the script.',
    },
    opcodes_nine: {
      title: 'OpCodes',
      nav_title: 'Wait to unlock',
      heading: 'Time Locks',
      paragraph_one:
        "Way back in the last century a document entitled BIP 65 proposed a new opcode to bitcoin which was eventually added to the consensus rules. It is used to require that the nLocktime of a transaction is at or above a value specified by the script. Bitcoin's consensus rules already prohibit including a transaction in a block if that block's height is greater than the transaction's nLocktime. In other words, this opcode makes a transaction unspendable until a the blockchain reaches a certain height some time in the future. Because it was added with a soft fork, it does NOT actually pop anything off the stack, meaning most uses will also require an <span className=\"text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm\">OP_DROP</span> as well.. If the opcode determines it is too early to include this transaction in a block, script evaluation stops immediately with an error.",
      subheading_one: 'Opcodes that do block timelocks',
      optimelock_list_one_heading:
        '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_DROP</span>',
      optimelock_list_one_paragraph: 'Pops one item off the stack, ignores it.',
      optimelock_list_two_heading:
        '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_CHECKLOCKTIMEVERIFY</span>',
      optimelock_list_two_paragraph:
        'Reads (does not pop) the top stack item and interprets it as a block height. If the height argument consumed by the opcode is not at least equal to the NEXT block height, the operation is invalid.',
      paragraph_two: 'Provide the initial stack to spend from the script.',
    },
    opcodes_ten: {
      title: 'OpCodes',
      nav_title: 'Build some logic',
      heading: 'Conditionals',
      paragraph_one:
        'Just like any other good programming language, bitcoin script has logic branches! The path through the branches is typically chosen by the spender to pick which combination of authentication conditions they need to satisfy,',
      paragraph_two:
        '<span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_IF</span> <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ELSE</span> <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ENDIF</span> Logic branches.',
      paragraph_three:
        '<span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_IF</span> pops one value off the stack and evaluates it as a boolean. If it is true, code execution continues up to <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ELSE</span> then skips to <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ENDIF</span>, otherwise it skips to <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ELSE</span> and continues executing to <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ENDIF</span>. Logic branches may be nested but every <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_IF</span> must be paired with an <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ENDIF</span> to close each branch, otherwise a the interpreter will throw an error and the script will fail.',
      paragraph_four: 'Provide the initial stack to spend from the script.',
    },
    proposal_one: {
      title: 'Advanced',
      nav_title: 'Back to The Story',
      heading: 'Back to The Story!',
      paragraph_one: `Nice Work! We've gone over most of the basic opcodes you will need when building the scripts for basic transactions. Now let's put them to the test in some scenarios.`,
      paragraph_two: `For each contract proposal you discuss, provide a bitcoin script and one valid spending stack.`,
    },
    proposal_two: {
      title: '2 of 2 multisig',
      nav_title: 'Sign cooperatively',
      heading: '2 of 2 multisig',
      paragraph_one: `The first thing Vanderpoole suggests is a 2-of-2 multisig. All funds that get donated will be split by you and him 50/50, which will be managed by you both signing all spending transactions from the donation address, so you will have to agree on all "withdraws"`,
      paragraph_two: `Vanderpoole hands you his public key, it's PUBKEY(vanderpoole) and yours is PUBKEY(me).`,
      paragraph_three: 'Provide the initial stack to spend from the script.',
      next_step_message: 'Looks good! Now lets try with your own signature.',
    },
    proposal_three: {
      title: 'Conditional time locked transaction',
      nav_title: 'Make him wait',
      heading: 'Conditional time locked transaction',
      paragraph_one: `Wait a minute, that doesn't make sense -- you don't want to deal with him forever! The new deal is, you get all donations for the next two hours while you are still on TV. After that, he can have whatever else trickles in. You take a look at The Bitcoin Block Clock on the wall in the studio and agree that block height 6930300 will be probably be mined in about two hours`,
      paragraph_two: `Remember Vanderpoole's public key, it's PUBKEY(vanderpoole) and yours is PUBKEY(me).`,
      paragraph_three: 'Provide the initial stack to spend from the script.',
      next_step_message: 'Looks good! Now lets try with your own signature.',
    },
    proposal_four: {
      title: 'Secret preimage locked transaction',
      nav_title: 'Work with an oracle',
      heading: 'Secret preimage locked transaction',
      paragraph_one:
        "Vanderpoole changes his mind again. He doesn't like that deal because of the unknowns. He decides he wants the first 1.0 BTC of total donations, and then you can spend the rest after that.",
      paragraph_two:
        'There is no way to check a total balance across multiple UTXOs in bitcoin script so you agree on an unbiased third-party oracle: Deborah Chunk! She will monitor the total donation amount on the blockchain and once they add up to at least 1.0 BTC she will announce, live on TV, the preimage to a hash value you will commit to in the script.',
      paragraph_three:
        'She generates a secure random nonce in private, then hands you the hash digest: <span className="text-[#3DCFEF] w-fit rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">HASH256(FD3771E8)</span>. You can spend all the coins you receive once she reveals this secret, and not one satoshi one second earlier!',
      paragraph_four: `Remember Vanderpoole's public key, it's PUBKEY(vanderpoole) and yours is PUBKEY(me).`,
      paragraph_five: 'Provide the initial stack to spend from the script.',
      next_step_message:
        "Let's see if we used our signature with the preimage correctly.",
    },
    outro_one: {
      title: 'Outro',
      nav_title: 'Chapter Complete',
      heading: 'Coming to terms',
      paragraph_one:
        "Nice, you were able to come to an agreement that seems to make everyone happy. Let's go ahead and broadcast this transaction to set it in stone.",
    },

    resources: {
      opcodes_five: {
        arithmetic_heading: 'Arithmetic opcodes',
        arithmetic_paragraph:
          'In bitcoin script arithmetic operations like in math take in some inputs to conduct math operations on. In actual bitcoin script the inputs are limited to signed 32-bit integers but the output may overflow.',
        spoiler: `Put in two integers that give the sum of 3 in the initial stack`,
      },
      opcodes_six: {
        cryptography_heading: 'Cryptographic opcodes',
        cryptography_paragraph:
          'These opcodes are important in everyday transactions as they ensure the outputs can only be spent with the signature of the owner of that utxo. Note that there are no formal categories of opcodes and that they are only organzied by their hex code representation.',
        spoiler: `The script checks a signature against a hashed public key. Put a signature key first then a public key`,
      },
      opcodes_eight: {
        multisig_heading: 'Multisig opcodes',
        multisig_paragraph:
          '<span className="text-[#3DCFEF] rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_CHECKMULTISIG</span> has a notable bug that requires the stack to include another unused value on the top of the stack unrelated to the actual multisig.',
        spoiler: `It's a multisig script requiring two signatures, and the first value on the stack is a placeholder for a quirk in the CHECKMULTISIG operation.`,
      },
      opcodes_nine: {
        timelock_heading: 'Timelock opcodes',
        timelock_paragraph:
          'Bitcoin script can read the current block height allowing transactions to be locked based on bitcoin blocks in the future. the exact semantics of the actual <span className="text-[#3DCFEF] rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_CHECKLOCKTIMEVERIFY</span> can be found',
        timelock_link:
          '<Link target="_blank" href="https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki" className="underline">here</Link>.',
        spoiler: ` The script locks spending until a specific block height and then verifies the signature in the initial stack.`,
      },
      opcodes_ten: {
        conditionals_heading: 'Opcode logic',
        conditionals_paragraph:
          'Conditional opcodes allow for some basic programming logic branches.  While the conditional logic allows for a broad range of additional possibilities in bitcoin script, it is still limited in comparison to a traditional programming language.',
        spoiler: `The sum of the first two values on the intial stack is false, so the script follows the OP_ELSE branch.`,
      },
      proposal_two: {
        making_script_heading: 'Making script',
        making_script_paragraph:
          'Remember that scripts can only be validated if the finish with a single truthy value on the stack. some versions allow any truthy value but our script editor only allows for values equal to 1 or true.',
        tip: 'Don\'t forget about the bug in <span className="text-[#3DCFEF] rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_CHECKMULTISIG</span> that requires the extra unused value on the stack!',
        spoiler: `Script Hint: This multisig arrangement needs both participants to sign. The script specifies that two signatures are required and includes both public keys.
Stack Hint: To satisfy the script, you need to provide both signatures. The 0 on the stack accounts for a specific behavior of the CHECKMULTISIG operation.`,
      },
      proposal_three: {
        tip: "Let's think about combining a conditional with some timelock to separate Vanderpoole's signature from yours.",
        spoiler: `Script Hint: The script allows spending under two conditions: before block 6930300 or after. Before the block, Vanderpoole can spend; after the block, you can.

Stack Hint: To spend before the specified block, Vanderpoole uses his signature. After the block, you use your signature and need to provide a 0 because the script has moved past the locktime verification.`,
      },
      proposal_four: {
        tip: 'The preimage will be revealed after an unknown amount of time so no need for using timelocks.',
        spoiler: `Script Hint: The script allows spending under two conditions: before the secret has been revealed or after. Before the block, Vanderpoole can spend; after the block, you both can.

Stack Hint: To spend before the secret is revealed, Vanderpoole uses his signature. After the secret is revealed, you use your signature, a hash of the secret, and provide a 0 because the script has moved past the unrevealed verification.`,
      },
    },
  },

  chapter_ten: {
    title: '10 billion connections',
    paragraph_one: `The ON-AIR light in the TV studio goes dark. Stagehands shut off their hover-cameras and start filing out after a long day. Mike Ramen puts his hand on your shoulder and says "Great work today! Now let's celebrate. I know a bar across the street that accepts bitcoin -- and what better way to honor Satoshi's vision of digital cash for the internet than exchanging some for beer!"`,
    intro_one: {
      title: 'Intro',
      nav_title: 'Intro',
      paragraph_one: `“You did it! You pulled it off!” she exclaims as you high-five and head for the door. You step outside. Everything is as it used to be. But something feels different. A ziptaxi deposits its passengers and zooms off. Someone buys dinner from a halal cart. A child exits a store with her holodog and a carton of milk. These are regular scenes, but you see how important money is to the world you live in.`,
      paragraph_two: `“Why are you just standing there?” Mika 3000’s question snaps you out of your dream state.`,
      paragraph_three: `“Have you ever thought about money? Like, how does bitcoin work?” you stammer.`,
      paragraph_four: `“Did Vanderpoole knock you in the head? You just saved the world. Are you in shock or something?”`,
      paragraph_five: `“Let’s get something to drink,” you request and insist at the same time.`,
    },
    intro_two: {
      title: 'Intro',
      nav_title: 'Intro',
      paragraph_one: `You step into a bar called The Public Key Pub. The bartender, a friendly guy with the name tag Laszlo, welcomes you and Mika 3000 in with a big smile.`,
      paragraph_two: '“I’m in the mood for pizza,” Mika 3000 tells Laszlo.',
      paragraph_three:
        '“You and my great-great-grandad both,” Lalzo smiles while tapping a neon “KITCHEN CLOSED AFTER 10 PM” sign.',
      paragraph_four:
        '“Seriously, you’re descended from THE Laszlo?” Mika 3000 yells.',
      paragraph_five: `“That’s so cool. Well, pizza with a Laszlo would have been perfect, but I’ll settle for a [DRINK CHOICE].”`,
    },
    intro_three: {
      title: 'Intro',
      nav_title: 'Intro',
      paragraph_one: `Mika 3000 and Laszlo pull out their solar-powered ePhone 114s and start tapping buttons. Laszlo pours a beer and hands it to Mika 3000. She raises the glass to you and says, "Your little stunt back there did a number on miner fees. Good thing we’ve got off-chain payments.”`,
      paragraph_two: `You must have seen a million bitcoin payments in your life. But you’ve never really thought about it. That couple getting out of the robotaxi, the halal cart, the kid with her holodog, this beer. Of course, these aren’t on-chain payments. But how?`,
      paragraph_three: `“You’ve got that glazed-over look again,” Mika 3000 whispers.`,
      paragraph_four: `“I feel silly saying this, but how… how do we pay for stuff?”`,
      paragraph_five: `Laszlo and Mika 3000 exchange looks and smile. "You're smart enough to debug mining software and validate blocks; I bet you can figure out how to send bitcoin off-chain.”`,
      paragraph_six: `“I'll guide you a little bit,” Lazslo says. ”I’ll set up a payment channel between you and me so we can buy some drinks."`,
    },
    opening_a_channel_one: {
      title: 'The initial funds',
      nav_title: 'The initial funds',
      heading_one: 'The initial funds',
      paragraph_one:
        'You have a confirmed UTXO in the blockchain for 100,000 satoshis. It seems pretty simple to make an off-chain payment, right?',
    },
    opening_a_channel_two: {
      title: 'The off-chain transaction',
      nav_title: 'The off-chain transaction',
      heading_one: 'The off-chain transaction',
      paragraph_one:
        "Let's create a valid Bitcoin transaction but instead of sending it to the network, we'll just send it directly to Laszlo! Laszlo should trade you a beer for this transaction because he knows he effectively has the money even though the transaction is not broadcasted or confirmed.",
      paragraph_two: "Remember it's the year 2140! Beers cost 0.0001000 BTC.",
      heading_two: 'Hints',
      off_chain_list_one:
        'Fill in the two output amounts, 1000 satoshis for Laszlo and the rest for your change',
      off_chain_list_two: 'Write the two output scripts',
      off_chain_list_three: 'Sign the input by clicking "sign"',
      // off_chain_list_four:'Send it to Laszlo by clicking "send to bob"',
      hint_one: `Laszlo spends output 0 with <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> SIG(LASZLO)</span>`,
      hint_two: `You spend output 1 with <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> SIG(YOU)</span>`,
    },
    opening_a_channel_three: {
      title: 'Off-Chain Payment Trust Issue',
      nav_title: 'Off-Chain Payment Trust Issue',
      paragraph_one: `Laszlo says "waaaaaait a minute, that doesn't make any sense -- you can still spend that output at any time. You could drink your beer and then return all the money to yourself without me getting anything!`,
      paragraph_two: `If you want to spend money off-chain with me, I need a guarantee you can't move the money by yourself ON chain."`,
    },
    opening_a_channel_four: {
      title: 'Multisig',
      nav_title: 'Multisig',
      heading_one: 'Multisig',
      paragraph_one: `This game will have to start with a 2-of-2 multisig, confirmed on the blockchain. Once we have that, however, we can figure out a way to make that single on-chain transaction work harder. To do more with less.`,
      multisig_one: 'Fill in the output amount and the output script',
      multisig_two: 'Sign the input by clicking "Sign"',
      heading_two: 'Hints',
      hint_one_a: `You and Laszlo want to work together in the future to spend output 0 with <br/> `,
      hint_one_b: `<span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> 0 SIG(Laszlo) SIG(You) </span>`,
    },
    opening_a_channel_five: {
      title: 'Refund Protection in Multi-Sig',
      nav_title: 'Refund Protection in Multi-Sig',
      paragraph_one: `Laszlo says, "OK, thanks, this is a good start. But what if I walk away from the table and you never see me again? I could broadcast this transaction, and your 100,000 satoshis would be stuck in a 2-key multi-sig from which you could never recover`,
      paragraph_two: `Do yourself a favor; before signing this, make a refund transaction to know you can recover your money."`,
    },
    updating_the_state_one: {
      title: 'The refund',
      nav_title: 'The refund',
      heading_one: 'The refund',
      paragraph_one: `A second button appears: [Spend this output] which starts another TX template on the same screen, with an arrow from the first TX output to this TX input.`,
      refund_list_one: `Fill in the output amount and the output script`,
      refund_list_two: `Send it to Laszlo by clicking "Send to Laszlo" so he can sign it`,
      refund_list_three: `Don't sign it yourself yet! Let's see what Laszlo thinks, first`,
      heading_two: 'Hints',
      hint_one: `Output 0 is spent by you with <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> SIG(You) </span>`,
    },
    updating_the_state_two: {
      title: 'Revoking Refunds to Secure Payment in Multi-Sig',
      nav_title: 'Revoking Refunds to Secure Payment in Multi-Sig',
      paragraph_one: `Laszlo says, "OK, nice, I'll sign this and send it back to you, and then you can sign that funding transaction.`,
      paragraph_two: `Hey, wait a minute, though. If I sign this, we're back where we started: You can broadcast this transaction even after I give you a beer, and I won't get paid`,
      paragraph_three:
        'Before I sign this, I need a guarantee that your full refund transaction can be revoked.',
      paragraph_four: `Once you actually pay me for the beer, you shouldn't be able to broadcast that. And if you DO try to broadcast the revoked transaction, I get to keep ALL 100000 satoshis!"`,
    },
    updating_the_state_three: {
      title: 'The revocation',
      nav_title: 'The revocation',
      heading_one: 'The revocation',
      paragraph_one: `You can make the output to yourself revocable by Laszlo by adding an extra condition to the 100000 satoshi output. The logic branch should allow Laszlo to spend the output with his own key AND a new private key that you generate. To revoke the transaction, you will just give Laszlo the new private key. It's a very unusual thing to do! But since it puts 100000 satoshis at stake, it proves to Laszlo you will NOT broadcast it after revoking it.`,
      paragraph_two: `You generate a new key pair: a private key revocation_you_1 and PUBKEY(revocation_you_1). You will generate a new key pair like this every time you want to update the state of the payment channel`,
      revocation_list_one: `Add an IF condition to the script so Laszlo can spend the output ONLY if he ALSO has the revocation key (you will continue keeping the key secret until it is time to revoke!)`,
      revocation_list_two: `Send it to Laszlo by clicking "Send to Laszlo" so he can sign it`,
      revocation_list_three: `Don't sign it yourself yet!`,
      heading_two: `Hints`,
      paragraph_three: `Output 0 is spent by EITHER:`,
      hint_one: `You: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> SIG(You) 1 </span>`,
      hint_two: `Laszlo: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> 0 SIG(revocation_you_1) SIG(Laszlo) 0 </span>`,
    },
    updating_the_state_four: {
      title: 'The Race to Revoke',
      nav_title: 'The Race to Revoke',
      paragraph_one:
        'Laszlo says, "Well, this is better, but it just occurred to me that even if I have the revocation key, it will still be a race between you and me to spend this output',
      paragraph_two:
        'I need a decent head start so I have a chance to notice you cheated me. Then I can sweep the bitcoin with the revocation key before you get your full refund."',
    },
    updating_the_state_five: {
      title: 'The time lock',
      nav_title: 'The time lock',
      heading_one: 'The time lock',
      time_lock_list_one:
        'Add a 700 block delay before you can spend the output',
      time_lock_list_two:
        'Send it to Laszlo by clicking "Sign" so he can sign it',
      time_lock_list_three: "Don't sign it yourself yet!",
      heading_two: 'Hints',
      paragraph_one: 'Output 0 is spent by EITHER:',
      hint_one:
        'You, after 700 blocks: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> SIG(You) 1 </span> ',
      hint_two:
        'Laszlo: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> 0 SIG(revocation_you_1) SIG(Laszlo) 0 </span> ',
    },
    updating_the_state_six: {
      title: 'Channel Open with Laszlo',
      nav_title: 'Channel Open with Laszlo',
      paragraph_one:
        'This time, when you click Send to Laszlo, he smiles and applauds! He signs the child transaction ([X] Laszlo). Now you can sign the parent transaction and send it to the blockchain: THE CHANNEL IS OPEN',
      paragraph_two:
        "You've gotten Laszlo to agree to let you buy drinks from him off-chain and have opened up a channel to do so",
    },
    making_a_payment_one: {
      title: 'Making a payment',
      nav_title: 'Making a payment',
      heading_one: 'Making a payment',
      paragraph_one: "Let's recap:",
      list_one:
        'You sent 100000 satoshis to a 2-of-2 multisig output between you and Laszlo',
      list_two: 'You have, offline, a transaction that spends that output.',
      list_three: 'That offline output enables EITHER',
      list_three_sub_one: 'You to get all your money back after 700 blocks',
      list_three_sub_two:
        'Laszlo gets all the money if he gets the private key revocation_you_1 from you',
      list_four:
        'Laszlo has already signed it, and you can sign it whenever you want to broadcast it.',
      list_five:
        'Once Laszlo signed the offline child transaction, you were safe to sign and broadcast the parent transaction',
      paragraph_two:
        'The confirmed transaction that funded the multisig output is called the funding transaction. Confirming it in the blockchain means your channel is now OPEN.',
      paragraph_three:
        "The offline transaction that spends that output is called a commitment transaction. Confirming it in the blockchain would CLOSE the channel. The first commitment transaction is your full refund, because you haven't made any payments to Laszlo yet.",
      paragraph_four:
        'While the channel is OPEN, you and Laszlo can make offline payments to each other, back and forth, by negotiating new commitment transactions and revoking old ones. As you buy more drinks, your "refund" amount will go down and Laszlo’s outputs amounts will go up.',
    },
    making_a_payment_two: {
      title: 'Buy a beer!',
      nav_title: 'Buy a beer!',
      heading_one: 'Buy a beer!',
      paragraph_one: `ow it's finally time to send bitcoin off-chain to Laszlo. We will "simply" add a 1,000 satoshi output for him in an updated commitment transaction. We will also need to promise never to broadcast the old commitment transaction, which didn't pay Laszlo anything. That is guaranteed when we send him the revocation key for that old commitment transaction, which we'll do next.`,
      paragraph_two: `You'll need to generate another revocation key for this new state in case you want to repeat the cycle (revoke THIS transaction for another new commitment where Laszlo gets paid for a second beer) it is a party after all!`,
      paragraph_three: `You generate a private key <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> revocation_you_2 </span>`,
      list_one: `Deduct 1000 satoshis from your output`,
      list_two: `Add 1000 satoshis to the second output and fill in the script for Laszlo`,
      list_three: `Send it to Laszlo by clicking "Send to Laszlo" so he can sign it`,
      list_four: `Don't sign it yourself yet!`,
      heading_two: `Hints`,
      paragraph_four: `Output 0 is spent by EITHER:`,
      hint_one:
        'You, after 700 blocks: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base">SIG(You) 1 </span>',
      hint_two: `Laszlo: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> 0 SIG(revocation_you_2) SIG(Laszlo) 0 </span>`,
      paragraph_five: `Output 1 is spent by Laszlo: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> SIG(Laszlo) </span>`,
    },
    making_a_payment_three: {
      title: `Laszlo's Blockchain Dilemma`,
      nav_title: `Laszlo's Blockchain Dilemma`,
      paragraph_one: `Laszlo looks at this transaction for a second and grabs a glass from behind the bar but doesn't pour the bee`,
      paragraph_two: `He says, "OK, wait. If you don't sign this transaction, I have nothing. You could disappear with this beer, and I wouldn't be able to confirm anything on the chain. Maybe you should sign it first, then send it to me so we both have a copy?"`,
    },
    making_a_payment_four: {
      title: `Holocat's Trustless Warning`,
      nav_title: `Holocat's Trustless Warning`,
      paragraph_one: `That's when Holocat materializes on the table, standing up on her hind legs with her front paws outstretched, and meows, "Hang on, you can't give Laszlo your signature for this transaction! Next time you make a payment, you'll give him the revocation key revocation_you_2. He'll have everything he needs to steal all 100,000 satoshis!"`,
      paragraph_two: `Things are getting a bit messy now. Laszlo does need something before he can give you a beer with confidence that he will get paid for it. But he can't have your transaction because then he'll end up accessing all your money! Laszlo is a great guy, and his bar is one of the best in the city, but it would still be nice if we didn't have to trust him.`,
    },
    making_a_payment_five: {
      title: `Asymmetry`,
      nav_title: `Asymmetry`,
      heading_one: `Asymmetry`,
      paragraph_one: `So we know we want Laszlo to sign the first transaction but we don't want him to have our signature on it. We'll need to construct a second transaction for him that DOES have our signature on it, but without any possibility of him just spending all the money unfairly.`,
      paragraph_two: `And if Laszlo is going to have his own commitment transaction, then don't we also want that transaction to be revocable?! Yes in fact, Laszlo's commitment transaction will be a mirror-image of yours. The revocable time lock script will use Laszlo's first revocation key PUBKEY(revocation_bob_1) and the large refund output will just directly to you without any fuss.`,
      list_one: `Fill in the amounts and output scripts for Laszlo's commitment transaction`,
      list_two: `Sign it and send it to Laszlo, who will then sign your commitment transaction and send that back to you`,
      heading_two: 'Hints',
      paragraph_three: 'Output 0 is spent by EITHER:',
      hint_one:
        'Laszlo, after 700 blocks: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base">SIG(LASZLO) 1 </span>',
      hint_two: `You <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> 0 SIG(REVOCATION_LASZLO_1) SIG(YOU) 0 </span>`,
      paragraph_four: `Output 1 is spent by You: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> SIG(YOU) </span>`,
    },
    making_a_payment_six: {
      title: `Complete the payment`,
      nav_title: `Complete the payment`,
      heading_one: `Complete the payment`,
      paragraph_one: "Let's do another quick recap.",
      list_one: 'A 2 of 2 output is confirmed on the blockchain',
      paragraph_two:
        'There are several off-chain transactions that spend that output:',
      paragraph_three: 'You have these transactions:',
      paragraph_four: 'Commitment 1 (You):',
      commitment_1_you: {
        list_one: 'Input 0: signed by Laszlo',
        list_two:
          'Output 0: 100000 satoshis to you after 700 blocks or Laszlo with revocation_you_1',
      },
      commitment_2_you: {
        list_one: 'Input 0: signed by Laszlo',
        list_two:
          'Output 0: 99000 satoshis to you after 700 blocks or Laszlo with revocation_you_2',
        list_three: 'Output 1: 1000 satoshis to Laszlo',
      },
      paragraph_five: 'Commitment 2 (You):',
      paragraph_six: 'Laszlo has this transaction:',
      paragraph_seven: 'Commitment 2 (Laszlo):',
      commitment_2_laszlo: {
        list_one: 'Input 0: signed by You',
        list_two:
          'Output 0: 1000 satoshis to Laszlo after 700 blocks or You with revocation_laszlo_1',
        list_three: 'Output 1: 99000 satoshis to You',
      },
      paragraph_eight:
        "All three of these transactions are signed and valid, but Laszlo hasn't handed you a beer yet. Why not? Only one thing left to do...",
    },
    making_a_payment_seven: {
      title: `🍺 Ahhhhhhh, nice.`,
      nav_title: `Ahhhhhhh, nice.`,
      paragraph_one: '🍺 Ahhhhhhh, nice.',
    },
    making_a_payment_eight: {
      title: `Make another payment`,
      nav_title: `Make another payment`,
      heading_one: `Make another payment`,
      paragraph_one: `The night is still young, and you're not flying your Budgetcopter home. Got time for another beer? Now that you and Laszlo have your asymmetrical transactions and a flow worked out with revocation keys, let's run the protocol a few more times.`,
      paragraph_two: `The two transactions representing the current state are on the screen, where you have paid Laszlo 1,000 satoshis. Send another 1,000 satoshi payment to Laszlo.`,
      list_one: 'Update the amounts and output scripts',
      list_two: "Sign Laszlo's transaction and send it to him",
      list_three: `Laszlo will revoke his last state by sending you  <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> REVOCATION_LASZLO_1 </span>`,
      list_four: 'Send your transaction to Laszlo so he can sign it',
      list_five: `Once you have Laszlo's signature, send him your  <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> REVOCATION_YOU_1 </span> `,
      paragraph_three: 'Enjoy 🍺',
      heading_two: 'Hints',
      paragraph_four: 'Output 0 is spent by EITHER:',
      hint_one: `You, after 700 blocks:  <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> SIG(YOU) 1 </span>`,
      hint_two: `Laszlo:  <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> 0 SIG(REVOCATION_YOU_3) SIG(LASZLO) 0 </span> `,
      paragraph_five: `Output 1 is spent by Laszlo <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> SIG(LASZLO) </span> `,
    },
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
      'Explore the mysteries of Satoshi and learn about bitcoin along the way.',
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
    heading: 'Save your progress',
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

  difficulty_selection: {
    NORMAL: 'Enable hard mode to increase the difficulty of the challenges.',
    HARD: 'Disable hard mode to decrease the difficulty of the challenges.',
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

  opcode: {
    run: 'Run the Script',
    reset: 'Reset',
  },

  status_bar: {
    begin_message: 'Complete the challenge above to continue...',
    error_message: 'Hm... that is not quite right yet...',
    in_progress_message: 'Looking good so far...',
    success_message: 'Nicely done!',
    next_step_message: 'Looks good now lets move on to the next step.',
    try_again: 'Try again',
    next: 'Next',
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
    language_tabs: {
      locked: "Language disabled since you've started this chapter in",
      reset: 'Reset the terminal',
    },
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
    pseudo_confirm: 'Yes, I want to see the pseudocode',
    solution: 'Solution to this challenge',
    pseudo_solution: 'Pseudocode solution to this challenge',
    solution_one: 'Solution to part one of this challenge',
    feedback:
      'Your feedback is valuable and helps us in enhancing our work more, please give us feedback using <a href="https://docs.google.com/forms/d/e/1FAIpQLSf1xpNqUYJyvYL5IZDnxy78273pkqzfYW2Hf91H4Do4KHgy9g/viewform" target="_blank" rel="noreferrer">this link</a>. ',
    help_suggestion:
      'If you\'re ever stuck, press the "?" button in the top-right corner. It provides helpful resources and tips.',
  },
}
export default translations
