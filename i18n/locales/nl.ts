const translations = {
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
    title: 'Het claimen van je 6,1 bitcoin',
    paragraph_one:
      'Poeh, dat was kantje boord! Je trilt nog steeds van je strijd tegen BitRey, maar je bent opgelucht dat jij en je vrienden hebben gewonnen.',
    paragraph_two:
      'Terwijl je aan je bureau zit, haal je diep adem en dwalen je gedachten af naar de gebeurtenissen van de dag. Je handen blijven bezig met de mysterieuze envelop, terwijl je je afvraagt wie deze heeft gestuurd.',
    intro_one: {
      title: 'De buit veiligstellen',
      paragraph_one:
        "HOLOCAT: 'Een van ons moet beter slapen. Jij moet naar huis gaan en contact opnemen met de mijnbouwzwembaden. Ze willen er meer over weten dan de wereld.'",
      paragraph_two:
        'Terwijl je aan je TMY92-P Hover Desk gaat zitten, speel je de gebeurtenissen van de dag af. Vanderpoole. BitRey. De onthulling dat mijnbouwzwembaden nooit hebben ingestemd met het stilleggen uit protest. Zou dit allemaal waar kunnen zijn? Was dit allemaal geënsceneerd? En hoelang moet je voor deze kat zorgen?',
      paragraph_three:
        'Wat er ook gebeurt, je hebt waarschijnlijk wat geld nodig. Je realiseert je dat je nooit de mijnbeloningen hebt opgeëist van je wedstrijd met BitRey. Je besluit ze op te nemen om je vlucht naar huis te betalen.',
    },
    public_key_one: {
      title: 'Openbare sleutel',
      heading: 'Over sleutelparen',
      paragraph_one:
        'Volgens het mijnbouwzwembad heb je 6,1 bitcoin om op te eisen voor al het werk dat je eerder hebt gedaan.',
      list_one: 'Privésleutel',
      list_two: 'Openbare sleutel',
      paragraph_two:
        'Maar wacht, je hebt niet eens een portemonnee! Je vraagt je misschien af waar je er een kunt kopen. Hoewel je hardware kunt kopen om bepaalde soorten portefeuilles te bouwen, kun je er eigenlijk gewoon een maken met je computer of mobiele apparaat. Laten we dat doen!',
      paragraph_three:
        "Als je op enig moment een account hebt aangemaakt, heb je iets gekregen dat een persoonlijke code wordt genoemd. In de cryptografie wordt dit een 'privésleutel' genoemd en het maakt vaak deel uit van een paar:",
      paragraph_four:
        'Een enkel sleutelpaar is alles wat nodig is om een portemonnee te maken en de fondsen erin te beheren. Wanneer je bitcoin wilt uitgeven, gebruik je de privésleutel. Wanneer je bitcoin wilt ontvangen, gebruik je de openbare sleutel.',
    },
    public_key_two: {
      title: 'Openbare sleutel',
      paragraph_one:
        'Dus, we hebben de privésleutel, dat is de persoonlijke code die je hebt gekregen toen je je hebt aangemeld. Hoe genereren we een openbare sleutel?',
      paragraph_two:
        'Om dat te doen, moeten we een kijkje nemen bij een fascinerende tak van de cryptografie die elliptische krommen wordt genoemd. Dit wordt elliptische-krommencryptografie genoemd, of ECC voor kort.',
      paragraph_three:
        'ECC houdt in dat bepaalde punten op een elliptische kromme worden genomen en dat er optellingen en vermenigvuldigingen op de punten worden uitgevoerd.',
      paragraph_four:
        'Bitcoin maakt gebruik van een specifieke kromme die secp256k1 wordt genoemd. Aan de rechterkant zie je een vereenvoudigde versie die gemakkelijker te visualiseren is, maar dezelfde wiskundige regels volgt.',
      paragraph_five:
        'We beginnen met een specifiek punt op deze curve, dat het Generatorpunt wordt genoemd.',
    },
    public_key_three: {
      title: 'Openbare sleutel',
      paragraph_one:
        'Om een openbare sleutel af te leiden uit een privésleutel, voeren we herhaaldelijk een elliptische kromme-operatie uit met het generatorpunt (ontdek waarom). Het generatorpunt is een specifiek punt op de kromme. De waarde ervan maakt deel uit van de secp256k1-standaard en is altijd hetzelfde:',
      paragraph_two:
        "De elliptische kromme-operatie lijkt op optelling en daarom lijkt de herhaling ervan op vermenigvuldiging. We gebruiken het *-symbool om het algoritme te beschrijven (leer meer), waarbij 'k' de privésleutel is en 'P' de overeenkomstige openbare sleutel is:",
      paragraph_three:
        "Voltooi de functie 'privatekey_to_publickey()' zodat deze de openbare sleutel retourneert die is afgeleid van een opgegeven privésleutel.",
    },
    public_key_four: {
      title: 'Openbare sleutel',
      paragraph_one:
        'De openbare sleutel heeft een x- en y-coördinaat voor in totaal 64 bytes. Dit kan worden samengeperst tot 33 bytes door de y-coördinaat te verwijderen en een enkele byte met metagegevens vooraan toe te voegen. Die byte geeft aan of de Y-coördinaat even of oneven is. Omdat de elliptische-krommevergelijking slechts twee variabelen heeft, kan de volledige openbare sleutel later worden berekend door de verificateur met alleen x en de metagegevens:',
      paragraph_two:
        "De metagegevensbyte moet '2' zijn als y even is en '3' als y oneven is. Voltooi de functie 'compress_publickey()' om een openbare sleutel te accepteren en een reeks van 33 bytes terug te geven die de samengeperste openbare sleutel vertegenwoordigen.",
    },
    public_key_five: {
      title: 'Openbare sleutel',
      heading: 'Goed gedaan!',
      paragraph_one:
        'En daar heb je het! Je samengeperste openbare sleutel! Er zijn veel interessante dingen die we ermee kunnen doen, waaronder het genereren van adressen voor onze portemonnee. Daar zullen we meer over leren in de volgende uitdaging.',
      paragraph_two:
        'Merk op dat het genereren van een openbare sleutel een eenrichtingsweg is. Je kunt de privésleutel die wordt gebruikt om een openbare sleutel te genereren, niet achterhalen, tenzij je een berucht moeilijk wiskundig probleem, de discrete logaritme, oplost.',
    },
    address_one: {
      title: 'Adres',
      paragraph_one:
        'Herinner je je de hash-uitdaging nog? Het blijkt dat je het eenvoudigste type bitcoinadres kunt genereren door je samengeperste openbare sleutel te hashen. Bitcoin gebruikt hiervoor twee verschillende hash-algoritmen: SHA-256 en RIPEMD-160.',
      paragraph_two:
        'De eerste stap is om een SHA-256-hash uit te voeren op je samengeperste openbare sleutel. Voer vervolgens een RIPEMD-160-hash uit op die SHA-256-uitvoer-digest. Het uiteindelijke resultaat zal een reeks van 20 bytes zijn.',
      paragraph_three:
        "Voltooi de functie 'hash_compressed()' die een 33-byte samengeperste openbare sleutel accepteert en een reeks van 20 bytes openbare sleutelhash retourneert.",
    },
    address_two: {
      title: 'Adres',
      paragraph_one:
        "Er zijn meerdere soorten bitcoinadressen. We willen een Signet Witness Public Key Hash (wpkh)-adres maken om de 20-byte samengeperste openbare sleutelhash te coderen. Eerst moeten we de hash voorzien van het getuigenversienummer '0'. Deze 21 bytes worden het getuigenprogramma genoemd. Het getuigenprogramma wordt gecodeerd in een mensvriendelijk formaat dat bech32 wordt genoemd, dat een leesbare voorvoegsel en een checksum zal toevoegen.",
      paragraph_two: 'Het voorvoegsel wordt bepaald door het netwerk:',
      list_one: "Hoofdnetwerk: 'bc'",
      list_two: "Signet: 'tb'",
      list_three: "Regtest: 'bcrt'",
      paragraph_three:
        "Roep de meegeleverde functie 'hash_to_address()' aan met je gegevens om je Bitcoin-adres te genereren!",
    },
    outro_one: {
      title: 'Uitro',
      heading: 'Succes!',
      paragraph_one: 'Je hebt je eigen bitcoinportemonnee gemaakt!',
      paragraph_two:
        'Je haalt de bitcoin op bij het mijnbouwzwembad in de portemonnee die je zojuist hebt gemaakt. Je bent nu volledig gefinancierd en klaar voor alles wat Vanderpoole en BitRey je misschien nog zullen voorschotelen.',
    },
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
    heading: 'Je eerste uitdaging',
    paragraph_one:
      'Bitcoin is censuurbestendig geld. Iedereen kan geld sturen door een transactie naar het netwerk te versturen. Na verzending worden transacties door miners aan blocks toegevoegd. Miners strijden tegen andere miners om het voorrecht om op de blockchain te mogen bouwen. Dit is wat bitcoin gedecentraliseerd houdt.',
    paragraph_two:
      'We gaan nu een van die blocks bekijken om te zien of we de verborgen boodschap kunnen vinden.',
  },

  genesis_two: {
    title: 'Genesis',
    heading: 'Vind block 0',
    paragraph_one: `Laten we het allereerste block in de Bitcoin blockchain vinden. Gebruik een <Tooltip id="genesis_two_paragraph_one" content="genesis_two.tooltip_block_explorer">block explorer</Tooltip> en zoek naar ’0’. Dit zal je naar het block op hoogte 0 nemen. Zoals je kunt zien bevat dit blok maar één transactie.`,
    paragraph_two: `Klap de transactie uit zodat u de details beter kunt bekijken. Aan de linkerzijde is er een input genaamd 'Coinbase'. Daarbinnen bevindt zich een veld met de naam 'ScriptSig'. Kopieer de <Tooltip id="genesis_two_paragraph_two" content="genesis_two.tooltip_hex">HEX</Tooltip> versie van de ScriptSig en plak deze hieronder.`,
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

export default translations
