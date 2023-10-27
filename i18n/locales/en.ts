const translations = {
  shared: {
    next: 'Continue',
    start: 'Start',
    copy: 'Copy',
    copy_acknowledged: 'Copied!',
    about: 'About',
    chapter: 'Chapter',
    chapters: 'Chapters',
    challenge: 'Challenge',
    coming_soon: 'Coming soon',
    start_chapter: 'Start chapter',
    back: 'Back',
    poweroff: 'Back to chapter selection',
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
        'Bitcoin is censorship-resistant money. Anybody can send money by broadcasting a transaction to the network. After broadcast, transactions are packaged up into blocks by miners. Miners compete against other miners for the privilege of building on the chain. This is what keeps bitcoin decentralized.',
      paragraph_two:
        'Satoshi Nakamoto, the pseudonymous inventor of bitcoin, also mined the first bitcoin block. He left the world a secret message in the very first bitcoin transaction that was ever made. Your first challenge is to find and decode it.',
    },

    genesis_two: {
      title: 'Genesis',
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
      heading: 'Let’s decode the message',
      paragraph_one:
        'The message you found was encoded in a format called HEX. Now we will run a command to turn it into ASCII, which we will be able to read.',
      paragraph_two:
        'Copy and paste the command below into the Terminal in the code block and press “Enter”.',
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
        'Two main components of a transaction are inputs and outputs. In the previous exercise we decoded a secret message found inside a transaction input. This time we’ll decode a message that belongs to the output part.',
      paragraph_two:
        'For the following transaction, we’re going to identify the output of type OP_RETURN.',
    },

    transacting_two: {
      title: 'Transacting',
      heading: 'OP_RETURN',
      paragraph_one:
        'There’s another way to hide secret messages in transactions. Bitcoin has a special type of code called OP_RETURN that allows users to attach messages to transaction outputs. Let’s see if we can find one.',
      paragraph_two:
        '1. Click <Link href="https://blockstream.info/tx/ff9148605a772a51cba39004df5fb042d40515967a3e38ff5294cfd017c452a9" className="underline">here</Link> to look at a specific transaction.',
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
      title: 'Hashing out a plan',
      paragraph_one:
        'HOLOCAT: “Boy, what a dump. This place had better store some sardines or dried fish. I’d even settle for some e-nip."',
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

    hashing_one: {
      title: 'Zeroes',
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
      heading: 'Enter Anything',
      return_hash: 'Below you will see your input converted to a hash',
      progress_message: 'Keep going...',
      success_message: 'Alright, nice work playing around. Let’s move on.',
    },

    hashing_three: {
      title: 'Zeroes',
      heading: 'Did you notice anything special about the hashes?',
      list_one:
        'Just like fingerprints, hashes are unique. Barring some exceptional circumstances, the hashes for two different things should never be the same.',
      list_two:
        'Hash functions are one way streets. You can’t reverse engineer a hash and figure out the data used to make it.',
      list_three:
        'Hashes are extremely reliable in the sense that they are deterministic. This means you can hash the same piece of data over and over again and you’ll always get the same result.',
      paragraph_one:
        'The function used here is called SHA-256, a very popular choice.',
      paragraph_two: 'Now, let’s see if you can find a specific hash.',
      paragraph_three:
        'Find a hash that starts with a zero (“0”). Keep typing different things below until you find a hash that we want.',
    },

    hashing_four: {
      title: 'Zeroes',
      heading:
        'Enter anything until you find a hash that starts with a zero (“0”)',
      hint_prompt:
        'Need a <Tooltip id="hint_prompt" position="bottom" theme="bg-[#5e212a]" offset="-1" content="chapter_two.hashing_four.hint_tooltip">hint</Tooltip>?',
      hint_tooltip:
        '<span className="text-m whitespace-nowrap leading-none text-white/50">Try typing:</span> <span className="whitespace-nowrap text-white">popcorn</span>',
    },

    hashing_five: {
      title: 'Zeroes',
      heading: 'That wasn’t too hard!',
      paragraph_one:
        'Let’s make it a bit more tricky. Try to find a hash that starts with two zeroes ("00").',
    },

    hashing_six: {
      title: 'Zeroes',
      heading:
        'Enter anything until you find a hash that starts with two zeroes (“00”)',
      hint_prompt:
        'Need a <Tooltip id="hint_prompt" position="bottom" theme="bg-[#5e212a]" offset="-1" content="chapter_two.hashing_six.hint_tooltip">hint</Tooltip>?',
      hint_tooltip:
        '<span className="text-m whitespace-nowrap leading-none text-white/50">Try typing:</span> <span className="whitespace-nowrap text-white">trigonometry</span>',
    },

    scripting_one: {
      title: 'Automation',
      heading: 'Let’s make the computer do this for us.',
      paragraph_one:
        'OK, that probably took you a lot longer. Now imagine finding a hash that starts with five or ten zeroes. This is the challenge that the bitcoin network poses to miners when they want to submit new blocks with transactions.',
      paragraph_two:
        'Miners gather all the information they want to put in a block such as the previous block header hash, a hash of transactions to be included in block (including the coinbase transaction), time, and combine it with a random number called a nonce (which stands for “number only used once”). They send all of this into the hash function to create something called the block hash.',
      paragraph_three:
        'When bitcoin first launched, miners would cycle through the nonce in the block header by incrementing the data by 1 in the 32-bit field. But since miners are so powerful now and difficulty is so high, they cycle through this pretty quickly and normally don’t find a solution below the target difficulty.',
      paragraph_four:
        'So what miners need to do is change other parts of the block header, such as the time or transactions included in the block.',
      paragraph_five:
        'The bitcoin network has a difficulty setting and only accepts block hashes that start with a certain number of zeroes. We call this the “difficulty” and it is adjusted every 2016 blocks.',
      paragraph_six:
        'For the next challenge, write a script that finds a hash that starts with five zeroes (00000).',
    },

    scripting_two: {
      title: 'Automation',
      paragraph_one:
        'Alright, time to write and run your own code. Write a script that generates a sha256 hash that begins with five zeroes ("00000..."). Your code should repeatedly call the sha256 function with different input until the output satisfies this requirement. You should try incrementing an integer inside a loop to get different inputs. In cryptography this number may referred to as a "nonce" or "number used once".',
      python: {
        paragraph_two:
          "When you find a nonce with a hash that begins with five zeroes, use Python's `print()` function to return the hash to the console. We are using the hashlib library in python to help you along in creating this function, you can use the following external resources to help you write this function if needed:",
        list_one:
          '<Link href="https://docs.python.org/3/library/hashlib.html" className="underline">hashlib documentation</Link>',
        list_two:
          '<Link href="https://datagy.io/python-sha256/" className="underline">Tutorial python function</Link>',
      },
      javascript: {
        paragraph_two:
          "When you find a nonce with a hash that begins with five zeroes, use JavaScript's `console.log()` function to return the hash to the console. We are using the crypto library in javascript to help you along in creating this function, you can use the following external resources to help you write this function if needed:",
        list_one:
          '<Link href="https://www.geeksforgeeks.org/node-js-crypto-createhash-method/" className="underline">crypto documentation</Link>',
        list_two:
          '<Link href="https://www.educative.io/answers/what-is-node-cryptocreatehashalgorithm-options" className="underline">Tutorial javascript function</Link>',
      },
      success: 'Five zeroes! That’s it!',
    },

    mining_one: {
      title: 'Into the mine',
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
        'In the early days of bitcoin, it was possible to mine with your average computer, just like we did in this simulation.',
      paragraph_fourteen:
        'Today, miners use a special type of chip called an Application-Specific Integrated Circuit, or ASIC for short. Nowadays, people buy machines with ASICs that are dedicated to just mining! This explains all the machines in the Vanderpoole family collection.',
      progress_bar_title: 'Blocks found',
      progress_bar_one: 'Nonce',
      progress_bar_two: 'Hashes per second',
      progress_bar_three: 'Transactions confirmed',
      progress_bar_four: 'Bitcoin earned',
      button_hash: '10x hash power, please',
      ten_x_hint: 'Tap the 10x button to speed up the hashing!',
    },
    outro_one: {
      title: 'Outro',
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
      title: 'Hashing it out',
      paragraph_one:
        '—SATOSHI NAKAMOTO: “Hey, you! Yeah, you! Remember me? Bitcoin is under a 51% attack! Vanderpoole used a virus to bend existing mining pools to his goals. He’s using them to mine empty blocks to hold the Bitcoin ecosystem hostage and force people to support increasing bitcoin’s supply.” – Satoshi Nakamoto',
      paragraph_two:
        '—The old computer coughs a little, then produces a wad of data in something called a “spreadsheet”: contact info for some of the largest bitcoin pool operators and a patch to the virus that is letting BitRey control them. Send the file to them so they can regain control of their machines and join your fight against BitRey.',
      paragraph_three:
        'HOLOCAT: “We’ve got more work to do. Well, you do. I’m gonna run through walls and scare mice.”',
    },

    solo_one: {
      title: 'You vs. Bitrey',
      step_zero_heading: 'Let’s give it a try',
      step_zero_paragraph_one:
        'While you’re waiting for the pool operators you reached out to, you decide to fend off BitRey by yourself. Here’s how your hash rate stacks up. How do you think this will go?',
      step_one_heading: 'We’re off to the races',
      step_one_paragraph_one:
        'We’re now mining 100 blocks to see how many you and BitRey will mine.',
      step_two_heading: 'That did not go too well!',
      step_two_paragraph_one:
        'Yikes, we just don’t have enough hashpower to compete with BitRey and the virus-controlled pools. Let’s see if we can defeat BitRey for the next 100 blocks with the other pool operators. Bitcoin has been running for over a decade and it’s not going down without a fight.',
    },

    pool_one: {
      title: 'Pool vs. BitRey',
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
      step_zero_heading: 'Here we go',
      step_zero_paragraph_one:
        'When you combine your hashrate with the other pool operators, can you stand up against BitRey?',
      step_two_heading: 'Another defeat!',
      step_two_paragraph_one:
        'Something is wrong. Only Hash Hoppers found blocks. Why do you think that might be?',
    },

    coop_one: {
      title: 'Coop vs. BitRey',
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
      step_zero_heading: 'One more time...',
      step_zero_paragraph_one:
        'Let’s see if we stand a chance against BitRey now with our improved strategy of dividing the nonce space.',
      step_two_heading: 'You did it!',
      step_two_paragraph_one:
        'Together you and the other pool operators were able to hold back BitRey’s attempt to overtake the network.',
    },

    split_one: {
      title: 'Splitting Rewards',
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
    title: 'Claiming your 6.1 bitcoin',
    paragraph_one:
      'Phew, that was close! You are still shaking from your battle against BitRey, yet relieved that you and your friends won.',
    paragraph_two:
      'As you settle at your desk, you take a deep breath and drift off to replay the day’s events. Your hands keep themselves busy playing with the mysterious envelope, as you wonder who sent it. ',

    intro_one: {
      title: 'Securing the bag',
      paragraph_one:
        'HOLOCAT: “One of us better sleep. You need to get home and start contacting the mining pools. They’ll want to know more about it than the world will.”',
      paragraph_two:
        'As you settle at your TMY92-P Hover Desk, you replay the day’s events. Vanderpoole. BitRey. The revelation that mining pools never agreed to shut down in protest. Could it all be true? Was this all staged? And how much longer are you supposed to look after this cat?',
      paragraph_three:
        'Whatever happens next, you will most likely need some funds. You realize that you never claimed the mining rewards from your competition with BitRey. You decide to withdraw them to help pay for your flight back home.',
    },

    public_key_one: {
      title: 'Public key',
      heading: 'About key pairs',
      paragraph_one:
        'According to the mining pool, it looks like you have 6.1 bitcoin to claim from all the work you did earlier. ',
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
      paragraph_one:
        'So, we have the private key, it’s the personal code you got when you signed up. How do we generate a public key from it?',
      paragraph_two:
        'To do that, we need to take a peek at a fascinating branch of cryptography called elliptic curves. This is called Elliptic Curve Cryptography, or ECC for short.',
      paragraph_three:
        'ECC involves taking certain points on an elliptic curve and performing addition and multiplication on the points.',
      paragraph_four:
        'Bitcoin uses a specific curve called secp256k1. On the right, you see a simplified version that is easier to visualize, but follows the same mathematical rules.',
      paragraph_five:
        'We start with a specific point on this curve, called the Generator Point. ',
    },

    public_key_three: {
      title: 'Public key',
      paragraph_one:
        'To derive a public key from a private key, we perform an elliptic curve operation repeatedly with the generator point (find out why). The generator point is a specific point on the curve. Its value is part of the secp256k1 standard and it’s always the same:',
      paragraph_two:
        'The elliptic curve operation is similar to addition and therefore its repetition is similar to multiplication. We use the * symbol to describe the algorithm (learn more), where `k` is the private key and `P` is the corresponding public key:',
      paragraph_three:
        'Complete the function `privatekey_to_publickey()` so that it returns the public key derived from a given private key.',
      success:
        'Good job! That public key is pretty long. Let’s try to compress it!',
    },

    public_key_four: {
      title: 'Public key',
      paragraph_one:
        'The public key has an x and y coordinate for a total of 64 bytes. This can be compressed into 33 bytes by removing the y coordinate and prepending a single byte of metadata. That byte will indicate if the Y coordinate is even or odd. Because the elliptic curve equation only has two variables, the complete public key can be computed later by the verifier using only x and the metadata:',
      paragraph_two:
        'The metadata byte should be `2` if y is even and `3` if y is odd. Complete the function `compress_publickey()` to accept a public key and return an array of 33 bytes representing the compressed public key.',
    },

    public_key_five: {
      title: 'Public key',
      heading: 'Nice work!',
      paragraph_one:
        'And there you have it! Your compressed public key! There are lots of interesting things we can do with it, including generating addresses for our wallet. We’lll learn about that in the next challenge.',
      paragraph_two:
        'Note that generating a public key is a one way street. You can’t figure out the private key used to generate a public key unless you solve a notoriously difficult math problem called the discrete log problem.',
    },

    address_one: {
      title: 'Address',
      paragraph_one:
        'Do you remember the hashing challenge? It turns out you can generate the simplest type of bitcoin address by hashing your compressed public key. Bitcoin uses two different hashing algorithms for this: SHA-256 and RIPEMD-160.',
      paragraph_two:
        'The first step is to perform a SHA-256 hash on your compressed public key. Then perform a RIPEMD-160 hash on that SHA-256 output digest. The final result will be a 20-byte array.',
      paragraph_three:
        'Complete the function `hash_compressed()` that accepts a 33-byte compressed public key and returns a 20-byte public key hash.',
      success: 'Great. One more step and you will have your wallet address.',
    },

    address_two: {
      title: 'Address',
      paragraph_one:
        'There are multiple types of bitcoin addresses. We want to create a Signet Witness Public Key Hash (wpkh) address to encode the 20-byte compressed public key hash. First we need to append the hash with the witness version number `0`. These 21 bytes are known as the witness program. The witness program is encoded into a human-friendly format called bech32, which will append a human-readable prefix and a checksum.',
      paragraph_two: 'The prefix is determined by the network:',
      list_one: 'Mainnet: ‘bc’',
      list_two: 'Signet: ‘tb’',
      list_three: 'Regtest: ‘bcrt’',
      paragraph_three:
        'Call the provided `hash_to_address()` function with your data to generate your Bitcoin address!',
    },

    outro_one: {
      title: 'Outro',
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
        wpkh_heading: 'Witness Public Key Hash (wpkh) address',
        wpkh_paragraph:
          'A Bitcoin address is a string of characters that is designed for users to handle. It is short, easy to copy and paste, and has some kind of built-in checksum to ensure that it is always copied correctly. It safely encodes a Bitcoin output script that the recipient can spend from. There any several types of output script and several encoding mechanisms. In this challenge we encode a compressed public key with bech32 to create what is called a witness public key hash address.',
        secp_heading: 'secp256k1',
        secp_paragraph:
          'Secp256k1 is the name of the elliptic curve used by Bitcoin to implement its public key cryptography. All points on this curve are valid Bitcoin public keys.',
        generator_point_heading: 'Generator point',
        generator_point_paragraph:
          'A Bitcoin address is a string of characters that is designed for users to handle. It is short, easy to copy and paste, and has some kind of built-in checksum to ensure that it is always copied correctly. It safely encodes a Bitcoin output script that the recipient can spend from. There any several types of output script and several encoding mechanisms. In this challenge we encode a compressed public key with bech32 to create what is called a witness public key hash address.',
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
    paragraph_one:
      'Enter your private key below to restore your account and progress.',
    prompt: 'Enter your private key',
    confirm: 'Sign in',
    create_account: 'Don’t have an account?',
  },

  modal_logout: {
    heading: 'You are logged in',
    paragraph_one:
      'Your session will remain active until you sign out using the button below.',
    signout: 'Sign out',
  },

  modal_signup: {
    heading: 'Want to save your progress',
    paragraph_one:
      'Copy and store a simple code to save and load your progress in this browser. If you already have a code, load your progress here.',
    subheading_one: 'Choose an avatar',
    subheading_two: 'Back up your personal code',
    generate:
      'All set? Code copied and backed-up? Make sure your do, as it can’t be recovered if you lose it.',
    confirm: 'Done',
    acknowledged:
      'I acknowledge I have saved this private key and know that I will need it for challenges in the future.',
  },

  disclaimer: {
    description: `We’re excited for you to dive in. Note that some challenges require basic programming experience (tips are available). Give it a try and share your <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf1xpNqUYJyvYL5IZDnxy78273pkqzfYW2Hf91H4Do4KHgy9g/viewform?usp=sf_link" className="underline">feedback</Link>.`,
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
    evaluation: 'Evaluation',
    script_output: 'Script output',
    waiting: 'Waiting for your input above...',
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
  },
}
export default translations
