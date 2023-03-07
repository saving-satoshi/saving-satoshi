export const translations = {
  shared: {
    next: 'Doorgaan',
    copy: 'Kopiëren',
    chapter: 'Hoofdstuk',
    challenge: 'Uitdaging',
    coming_soon: 'Binnenkort beschikbaar',
    start_chapter: 'Hoofstuk starten',
  },

  chapter_one: {
    title: 'Verborgen geheimen in het volle zicht',
    paragraph_one:
      'Het is het jaar 2139. Over twee weken zal de allerlaatste bitcoin worden gemined. Al maanden wordt er op Times Square afgeteld voor het laatste block waarna er officieel geen bitcoin meer zal worden uitgegeven.',
    paragraph_two: `En plotseling komt het netwerk tot stilstand. In plaats van het normale blockinterval van tien minuten, komen er maar een paar keer per dag blocks binnen. De bitcoin-node van je moeder stopt met synchroniseren. De media beginnen verslag uit te brengen over de situatie. Het is overal op sociale media.`,
    paragraph_three: `De prijs van bitcoin daalt. Er wordt op je deur geklopt en als je opendoet, ligt er een vergeelde, verweerde envelop voor je klaar. Er is geen naam of retouradres. Wat zou erin kunnen zitten?`,
  },

  chapter_two: {
    title: 'De 51% aanval',
    paragraph_one:
      'De netwerkstoring moet iets te maken hebben met de block subsidie. Dit kan geen toeval zijn',
    paragraph_two:
      'Je springt achter je computer om wat onderzoek te doen naar minen wanneer je iets ongewoons opmerkt aan de weinige blocks die worden gemined. Ze lijken allemaal op dezelfde plaats te worden gemined, mogelijk zelfs uit dezelfde mining pool. Wat is er met de rest van de miners gebeurd?',
  },

  chapter_three: {
    title: 'Je beloning claimen',
    paragraph_one:
      'Phew, that was close. You are still shaking from your battle againstAmestris, yet relieved that a victory was possible.',
    paragraph_two:
      'As you settle at your desk, you take a deep breath and drift off toreplay the day’s events. Your hands keep themselves busy playing withthe mysterious envelope, as you wonder who sent it. Who still usesenvelopes anyways, it’s 2139 after all. Even more curious is that thereis a stamp on it, from 2008...could this be another hint?',
    paragraph_three:
      'Suddenly, you realize that you never claimed the block rewards from yourcompetition with Amestris. Your bitcoin wallet is running low, so now’sa good time to top it up again.',
  },

  chapter_four: {
    title: 'Wil de echte Satoshi opstaan?',
    paragraph_one:
      'A mysterious billionaire is claiming to be Satoshi Nakamoto. Why would Satoshi come forward after all this time? What are the chances Satoshi is even alive?',
    paragraph_two:
      'While the public debate is largely focused on the spectacle, you have an inkling that it might be possible to disarm the claim using your knowledge of cryptography.',
  },

  chapter_five: {
    title: 'De sleutelhouder',
  },

  chapter_six: {
    title: 'Aanvallen is de beste verdediging',
  },

  chapter_seven: {
    title: `Twentyone`,
  },

  chapter_eight: {
    title: 'Een kwestie van duurzaamheid',
  },

  chapter_nine: {
    title: `Niet berekenen, verifiëren.`,
  },

  chapter_ten: {
    title: '10 miljard verbindingen',
  },

  reaping_rewards: {
    title: 'Blocks en miners',
    subtitle:
      '"Om het mysterie en de magie te begrijpen, moet je bij het begin beginnen…"',
    paragraph_two: `Elk blok in de bitcoin-blockchain bevat een reeks transacties. Een leuke manier om deze blokken en de dingen die ze bevatten te bekijken, is door een blokverkenner te gebruiken.`,
  },

  done: {
    title: 'You did it!!!',
    description:
      'Amazing. You completed the first chapter and learned a lot about hashes and transactions. Are you ready for more?',
  },

  genesis_one: {
    title: 'Genesis',
    heading: 'Vind block 0',
    paragraph_one: `Laten we het allereerste block in de Bitcoin blockchain vinden. Gebruik een <Tooltip content="genesis_one.tooltip_block_explorer" className="underline">block explorer</Tooltip> en zoek naar ’0’. Dit zal je naar het block op hoogte 0 nemen. Zoals je kunt zien bevat dit blok maar één transactie.`,
    paragraph_two: `Klap de transactie uit zodat u de details beter kunt bekijken. Aan de linkerzijde is er een input genaamd 'Coinbase'. Daarbinnen bevindt zich een veld met de naam 'ScriptSig'. Kopieer de <Tooltip content="genesis_one.tooltip_hex" className="underline">HEX</Tooltip> versie van de ScriptSig en plak deze hieronder.`,
    tooltip_block_explorer:
      'Een <a href="https://bitcoinops.org/en/topics/block-explorers/" target="_blank" rel="noreferrer">block explorer</a> is een handige tool om snel informatie over bitcoin transacties op te zoeken.',
    tooltip_hex:
      'Afkorting van hexadecimaal, een cijfersysteem dat getallen vertegenwoordigt met een basis van 16.',
    view_block_0: 'Vind Block 0',
    placeholder: 'Plak de HEX versie van de ScriptSig',
  },

  genesis_two: {
    title: 'Genesis',
    heading: 'Laten we dit duidelijk maken',
    waiting_for_input: 'Wachten tot de script wordt uitgevoerd...',
    success:
      'Interessant! Het bericht verwijst naar een nieuwsartikel dat op dezelfde dag dat Satoshi het genesis block heeft gemined, gepubliceerd is. Dit geeft ons een belangrijke aanwijzing over de motivatie van Satoshi voor het maken van Bitcoin. Je kunt er <Link href="https://bitcoinmagazine.com/culture/ten-years-later-reflection-bitcoins-genesis-and-satoshis-timing" className="underline">hier</Link> meer over lezen.',
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
    description: 'Programmeer je weg door de mysteries van bitcoin.',
    start_journey: 'Start de demo',
    tell_more: 'Vertel me meer',
  },

  footer: {
    paragraph_one: 'An open-source production by the bitcoin community.',
    link: 'Check the code',
  },

  navbar: {
    intro: 'Intro',
    chapter: 'Hoofdstuk',
    chapter_complete: 'Hoofdstuk compleet',
    challenge: 'Uitdaging',
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
    title: 'Dit is een demo',
    description:
      'We zijn nog in een vroeg stadium van dit project. Hoofdstuk 1 werkt, de rest is nog in ontwikkeling. Probeer het eens uit en laat ons weten wat je ervan vindt, we zouden graag je feedback horen.',
  },
}
