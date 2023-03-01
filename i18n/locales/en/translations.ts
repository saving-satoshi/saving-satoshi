export const translations = {
  shared: {
    en: {
      next: 'Continue',
      copy: 'Copy',
      chapter: 'Chapter',
      challenge: 'Challenge',
      coming_soon: 'Coming soon',
      start_chapter: 'Start chapter',
    },
  },

  chapter_one: {
    en: {
      title: 'Secrets in plain sight',
      paragraph_one:
        'The year is 2139. The very last bitcoin is slated to be mined in two weeks. For months, a final countdown has been taking place in Times Square for the last block when there will be officially no more bitcoin issued.',
      paragraph_two: `And then suddenly, the network comes to a crawl. Instead of the normal ten-minute block interval, blocks are coming in just a few times a day, if not longer. Your mom's bitcoin node stops syncing. The media starts reporting on the situation. It's everywhere on social media.`,
      paragraph_three: `The price of bitcoin is falling. There is a knock at your door, and when you open it, a yellowed, age-weathered envelope has been left for you. There's no name or return address. What could be inside?`,
    },
    nl: {
      title: 'Verborgen geheimen in het volle zicht',
      paragraph_one:
        'Het is het jaar 2139. Over twee weken zal de allerlaatste bitcoin worden gemined. Al maanden wordt er op Times Square afgeteld voor het laatste block waarna er officieel geen bitcoin meer zal worden uitgegeven.',
      paragraph_two: `En plotseling komt het netwerk tot stilstand. In plaats van het normale blockinterval van tien minuten, komen er maar een paar keer per dag blocks binnen. De bitcoin-node van je moeder stopt met synchroniseren. De media beginnen verslag uit te brengen over de situatie. Het is overal op sociale media.`,
      paragraph_three: `De prijs van bitcoin daalt. Er wordt op je deur geklopt en als je opendoet, ligt er een vergeelde, verweerde envelop voor je klaar. Er is geen naam of retouradres. Wat zou erin kunnen zitten?`,
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
    nl: {
      title: 'De 51% aanval',
      paragraph_one:
        'De netwerkstoring moet iets te maken hebben met de block subsidie. Dit kan geen toeval zijn',
      paragraph_two:
        'Je springt achter je computer om wat onderzoek te doen naar minen wanneer je iets ongewoons opmerkt aan de weinige blocks die worden gemined. Ze lijken allemaal op dezelfde plaats te worden gemined, mogelijk zelfs uit dezelfde mining pool. Wat is er met de rest van de miners gebeurd?',
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
    nl: {
      title: 'Je beloning claimen',
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
    nl: {
      title: 'Wil de echte Satoshi opstaan?',
    },
  },

  chapter_five: {
    en: {
      title: 'The keyholder',
    },
    nl: {
      title: 'De sleutelhouder',
    },
  },

  chapter_six: {
    en: {
      title: `Offense is the best defense`,
    },
    nl: {
      title: 'Aanvallen is de beste verdediging',
    },
  },

  chapter_seven: {
    en: {
      title: `Twentyone`,
    },
    nl: {
      title: 'Twentyone',
    },
  },

  chapter_eight: {
    en: {
      title: 'A matter of sustainability',
    },
    nl: {
      title: 'Een kwestie van duurzaamheid',
    },
  },

  chapter_nine: {
    en: {
      title: `Don't compute, verify.`,
    },
    nl: {
      title: `Niet berekenen, verifiëren.`,
    },
  },

  chapter_ten: {
    en: {
      title: '10 billion connections',
    },
    nl: {
      title: '10 miljard verbindingen',
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
    nl: {
      title: 'Blocks en miners',
      subtitle:
        '"Om het mysterie en de magie te begrijpen, moet je bij het begin beginnen…"',
      paragraph_one: `Satoshi, de pseudonieme uitvinder van bitcoin, ontgonnen ook het eerste bitcoin-blok. Hij liet je een verborgen aanwijzing achter in de allereerste bitcoin-transactie die ooit is gemaakt.`,
      paragraph_two: `Elk blok in de bitcoin-blockchain bevat een reeks transacties. Een leuke manier om deze blokken en de dingen die ze bevatten te bekijken, is door een blokverkenner te gebruiken.`,
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
    nl: {
      title: 'Genesis',
      heading: 'Vind block 0',
      paragraph_one: `Laten we het allereerste block in de Bitcoin blockchain vinden. Gebruik een <Tooltip content="genesis_one.tooltip_block_explorer" href="https://blockstream.info" className="underline">block explorer</Tooltip> en zoek naar ’0’. Dit zal je naar het block op hoogte 0 nemen. Zoals je kunt zien bevat dit blok maar één transactie.`,
      paragraph_two: `Klap de transactie uit zodat u de details beter kunt bekijken. Aan de linkerzijde is er een input genaamd 'Coinbase'. Daarbinnen bevindt zich een veld met de naam 'ScriptSig'. Kopieer de <Tooltip content="genesis_one.tooltip_hex" className="underline">HEX</Tooltip> versie van de ScriptSig en plak deze hieronder.`,
      tooltip_block_explorer: 'We recommend https://blockstream.info/',
      tooltip_hex:
        'Short for hexadecimal, a numeral system that represents numbers using a base of 16.',
      view_block_0: 'Vind Block 0',
      placeholder: 'Plak de HEX versie van de ScriptSig',
    },
  },

  genesis_two: {
    en: {
      title: 'Genesis',
      heading: 'Let’s make sense of this',
      waiting_for_input: 'Waiting for you to write and run the script...',
      success: `Interesting! The message references a news article on the same day Satoshi mined the genesis block. This gives us an important clue about Satoshi's motivation for creating Bitcoin. You can read more about it <Link href="https://bitcoinmagazine.com/culture/ten-years-later-reflection-bitcoins-genesis-and-satoshis-timing" className="underline">here</Link>.`,
    },
    nl: {
      title: 'Genesis',
      heading: 'Laten we dit duidelijk maken',
      waiting_for_input: 'Wachten tot de script wordt uitgevoerd...',
      success:
        'Interessant! Het bericht verwijst naar een nieuwsartikel dat op dezelfde dag dat Satoshi het genesis block heeft gemined, gepubliceerd is. Dit geeft ons een belangrijke aanwijzing over de motivatie van Satoshi voor het maken van Bitcoin. Je kunt er <Link href="https://bitcoinmagazine.com/culture/ten-years-later-reflection-bitcoins-genesis-and-satoshis-timing" className="underline">hier</Link> meer over lezen.',
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
  end: {
    en: {
      save: 'Save my progress',
      next: 'Continue without saving',
    },
  },
  challenge_list: {
    en: {
      coming_soon: 'Coming soon. Hang tight.',
    },
  },
  chapter: {
    en: {
      chapter_locked_one: 'Complete Chapter',
      chapter_locked_two: 'to unlock.',
    },
  },
  hero: {
    en: {
      title: 'Saving Satoshi',
      description: 'Code your way through the mysteries of bitcoin.',
      start_journey: 'Start your journey',
      tell_more: 'Tell me more',
    },

    nl: {
      title: 'Saving Satoshi',
      description: 'Programmeer je weg door de mysteries van bitcoin.',
      start_journey: 'Start je reis',
      tell_more: 'Vertel me meer',
    },
  },

  footer: {
    en: {
      paragraph_one: 'An open-source production by the bitcoin community.',
      link: 'Check the code',
    },
  },

  navbar: {
    en: {
      intro: 'Intro',
      chapter: 'Chapter',
      chapter_complete: 'Chapter complete',
      challenge: 'Challenge',
    },

    nl: {
      intro: 'Intro',
      chapter: 'Hoofdstuk',
      chapter_complete: 'Hoofdstuk compleet',
      challenge: 'Uitdaging',
    },
  },

  modal_login: {
    en: {
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
  },

  modal_logout: {
    en: {
      heading: 'You are logged in',
      paragraph_one:
        'Your progress is stored in this browser. You will be automatically logged out after 30 days. Use the code below to restore it after taking a break.',
      signout: 'Sign out',
    },
  },

  modal_signup: {
    en: {
      heading: 'Want to save your progress?',
      paragraph_one:
        'Copy and store a simple code to save and load your progress on any device and browser. If you already have a code, load your progress here.',
      subheading_one: 'Choose an avatar',
      subheading_two: 'Back up your personal code',
      paragraph_two:
        'All set? Code copied and backed-up? Make sure your do, as it can’t be recovered if you lose it.',
      confirm: 'I’ve copied and backed up my code',
    },
  },
}
