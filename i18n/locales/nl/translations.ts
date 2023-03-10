export const translations = {
  shared: {
    next: 'Doorgaan',
    copy: 'Kopiëren',
    chapter: 'Hoofdstuk',
    challenge: 'Uitdaging',
    coming_soon: 'Binnenkort beschikbaar',
    start_chapter: 'Hoofstuk starten',
  },

  about: {
    title: 'About',
    subtitle:
      'Het jaar is 2139. De laatste bitcoin zal over twee weken worden gemined. Maandenlang heeft er een klok afgetikt op Satoshi Square.',
    intro:
      'De wereld wacht op het laatste blok. Dan plotseling stopt het netwerk met werken.<br><br>Je ontvangt een holocat van iemand die de naam Satoshi Nakamoto gebruikt. (Het is als elke andere e-hologram, maar deze is gevormd als een kat). Je opent de holocat door op zijn neus te tikken en bent nieuwsgierig naar wat het te zeggen heeft...',

    project: {
      title: 'Gebouwd met plezier',
      paragraph_one:
        'Saving Satoshi is een luchtig eerste contactpunt voor ontwikkelaars die nieuwsgierig zijn naar bitcoin-ontwikkeling. Saving Satoshi bevat een mix van technische tekst en uitdagingen gebaseerd op code, maar de uitdagingen zouden haalbaar moeten zijn voor iedereen met basis programmeervaardigheden. Het project is gratis en open source en alle afbeeldingen zijn gegenereerd met behulp van text-to-image (ook bekend als AI) tools zoals Midjourney.',
      paragraph_two:
        'Deze versie van het project bevindt zich momenteel in een demofase met als doel feedback te krijgen over de algehele ervaring en het leveren van een proof of concept voor vroege gebruikers. Gebruikersvoortgang wordt lokaal opgeslagen in de browser en het verhaal samen met afbeeldingen zijn nog niet definitief.',
      paragraph_three:
        'Op basis van de feedback die we ontvangen, zullen we werken aan een officiële release (die we V1 noemen) die 2 à 3 volledige hoofdstukken, accounts en meer zal bevatten. In totaal zijn er 10 hoofdstukken gepland welke in de loop van de tijd zullen worden uitgebracht. Extra functies kunnen samenwerkend leren, badges, uitdagende side-quests en meer omvatten.',
    },

    contributing: {
      title: 'Hoe kun je bijdragen?',
      paragraph_one:
        'We zijn een open-source project, dus voel je vrij om het platform naar eigen inzicht vorm te geven en ideeën aan te dragen.',

      feedback: {
        title: 'Feedback',
        paragraph_one:
          'Een geweldige manier om bij te dragen is door Hoofdstuk 1 door te nemen en ons feedback te geven over je ervaring via dit formulier.',
      },

      contribute: {
        title: 'Contribute',
        paragraph_one:
          'Alle suggesties zijn welkom, inclusief inhoudswijzigingen, spelmechanica - echt alles. We zijn ook altijd op zoek naar hulp bij het <a href="https://leaf-singer-0fc.notion.site/How-to-QA-5177e63f65a4406da01bc57d886b5ac2" target="_blank" rel="noreferrer">beoordelen en testen van code-wijzigingen</a>. Voor codeverbeteringen kun je rechtstreeks een issue openen of een pull-request indienen op GitHub.',
        paragraph_two:
          'Als je betrokken wilt raken bij het ontwerp, het verhaal of iets anders, sluit je dan aan bij ons in het #saving-satoshi-kanaal in de <a href="https://bitcoin.design/contribute/" target="_blank" rel="noreferrer">Bitcoin Design slack</a>. Vermeld hoe je wilt bijdragen en we helpen je graag op weg.',
      },
    },

    contributors: {
      title: 'Veel plezier!',
      contributions_by: 'Contributies door',
      many_more:
        'en <a href="https://github.com/saving-satoshi/saving-satoshi/graphs/contributors" target="_blank" rel="noreferrer">veel meer</a>.',
    },

    satoshi_needs_you: 'Wees snel nu, Satoshi heeft je nodig.',
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
  },

  chapter_four: {
    title: 'Wil de echte Satoshi opstaan?',
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

  genesis_one: {
    title: 'Genesis',
    heading: 'Your first challenge',
    paragraph_one:
      'Bitcoin is censorship resistant money. Anybody can send money by broadcasting a transaction to the network. After broadcast, transactions are packaged up into blocks by miners. Miners compete against other miners for the privilege of building on the chain. This is what keeps bitcoin decentralized.',
    paragraph_two:
      'We’ll now take a look at one of those blocks and see if we can find the hidden message that was mentioned.',
  },

  genesis_two: {
    title: 'Genesis',
    heading: 'Vind block 0',
    paragraph_one: `Laten we het allereerste block in de Bitcoin blockchain vinden. Gebruik een <Tooltip id="genesis_two_paragraph_one" content="genesis_two.tooltip_block_explorer" className="underline">block explorer</Tooltip> en zoek naar ’0’. Dit zal je naar het block op hoogte 0 nemen. Zoals je kunt zien bevat dit blok maar één transactie.`,
    paragraph_two: `Klap de transactie uit zodat u de details beter kunt bekijken. Aan de linkerzijde is er een input genaamd 'Coinbase'. Daarbinnen bevindt zich een veld met de naam 'ScriptSig'. Kopieer de <Tooltip id="genesis_two_paragraph_two" content="genesis_two.tooltip_hex" className="underline">HEX</Tooltip> versie van de ScriptSig en plak deze hieronder.`,
    tooltip_block_explorer:
      'Een <a href="https://bitcoinops.org/en/topics/block-explorers/" target="_blank" rel="noreferrer">block explorer</a> is een handige tool om snel informatie over bitcoin transacties op te zoeken.',
    tooltip_hex:
      'Afkorting van hexadecimaal, een cijfersysteem dat getallen vertegenwoordigt met een basis van 16.',
    view_block_0: 'Vind Block 0',
    placeholder: 'Plak de HEX versie van de ScriptSig',
  },

  genesis_three: {
    title: 'Genesis',
    heading: 'Laten we dit duidelijk maken',
    waiting_for_input: 'Wachten tot de script wordt uitgevoerd...',
    success:
      'Interessant! Het bericht verwijst naar een nieuwsartikel dat op dezelfde dag dat Satoshi het genesis block heeft gemined, gepubliceerd is. Dit geeft ons een belangrijke aanwijzing over de motivatie van Satoshi voor het maken van Bitcoin. Je kunt er <Link href="https://bitcoinmagazine.com/culture/ten-years-later-reflection-bitcoins-genesis-and-satoshis-timing" className="underline">hier</Link> meer over lezen.',
  },

  hero: {
    title: 'Saving Satoshi',
    description: 'Programmeer je weg door de mysteries van bitcoin.',
    start_journey: 'Start de demo',
    tell_more: 'Vertel me meer',
  },

  navbar: {
    intro: 'Intro',
    chapter: 'Hoofdstuk',
    chapter_complete: 'Hoofdstuk compleet',
    challenge: 'Uitdaging',
  },

  demo_disclaimer: {
    title: 'Dit is een demo',
    description:
      'We zijn nog in een vroeg stadium van dit project. Hoofdstuk 1 werkt, de rest is nog in ontwikkeling. Probeer het eens uit en laat ons weten wat je ervan vindt, we zouden graag je feedback horen.',
  },
}
