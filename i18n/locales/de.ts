const translations = {
  shared: {
    next: 'Weiter',
    start: 'Start',
    copy: 'Kopieren',
    info: 'Info',
    copy_acknowledged: 'Kopiert!',
    about: 'Info',
    chapter: 'Kapitel',
    chapters: 'Kapitel',
    challenge: 'Herausforderung',
    challenges: 'Herausforderungen',
    coming_soon: 'Bald verfügbar',
    start_chapter: 'Beginne Kapitel',
    back: 'Zurück',
    poweroff: 'Zurück zur Kapitelauswahl',
    loading: 'Lädt',
  },
  status_bar: {
    begin_message: 'Beende die Challange, um fortzufahren...',
    error_message: 'Hm... das stimmt noch nicht so ganz...',
    in_progress_message: 'Sieht ganz gut aus soweit...',
    success_message: 'Sehr gut gemacht!',
    next: 'Weiter',
  },
  ///ABOUT PAGE
  about: {
    title: 'Über das Projekt',
    mobile_title: 'Um was es geht',
    subtitle:
      'Wir schreiben das Jahr 2139. Der letzte Bitcoin wird erst in zwei Wochen geschürft werden. Seit Monaten tickt auf dem Satoshi-Platz eine eigens hierführ eingerichtet Uhr herunter.',
    intro:
      'Die Welt wartet gespannt auf den letzen Block. Dann, plötzlich, kommt das Netzwerk zum Stillstand.<br><br>Du erhälst eine Holokatze von jemandem, der sich Satoshi Nakamoto nennt. (Sie ist wie jedes andere E-Hologram, jedoch in der Form einer Katze). Du öffnest die Nachricht der Holokatze, indem du auf ihre Nase drückst, um zu hören, was sie zu sagen hat.',

    project: {
      title: 'Mit Spaß gebaut',
      paragraph_one:
        'Saving Satoshi ist eine unbeschwerte erste Anlaufstelle für Programmierer, die neugierig auf die Bitcoin-Entwicklung sind. Saving Satoshi bietet eine Mischung aus technischen Text- und Code-basierten Herausforderungen, die aber für jeden mit grundlegenden Programmierkenntnissen machbar sein sollten. Das Projekt ist frei und quelloffen (FOSS) und alle Grafiken wurde mit Text-zu-Bild-Tools wie Midjourney erstellt.',
      paragraph_two:
        'Dieses Projekt befindet sich in ständiger Entwicklung und verfolgt einen iterativen Ansatz, um Feddback zu berücksichtigen, wenn wir neue Kapitel veröffentlichen. Derzeit sind zehn Kapitel geplant. Es können jedoch noch weitere hinzugefügt werden, wenn das Projekt weiter wächst.',
    },

    contributing: {
      title: 'Wie kann man mitmachen',
      paragraph_one:
        'Wir sind ein Open-Source-Projekt - Dir stehen alle Türen offen mitzugestalten.',

      feedback: {
        title: 'Feedback',
        paragraph_one:
          'Eine gute Möglichkeit, einen Beitrag zu leisten, besteht darin, Kapitel 1 durchzuarbeiten und uns Feedback zu Deiner Erfahrung zu geben. Diese kannst Du <a href="https://docs.google.com/forms/d/e/1FAIpQLSf1xpNqUYJyvYL5IZDnxy78273pkqzfYW2Hf91H4Do4KHgy9g/viewform" target="_blank" rel="noreferrer">hier</a> teilen.',
      },

      contribute: {
        title: 'Mitmachen',
        paragraph_one:
          'Alle Vorschläge sind willkommen, einschließlich inhaltlicher Änderungen, oder Änderungen an der Spielmechaniken - wirklich alles. Wir suchen ebenfalls nach Hilfe um Code-Verschläge zu begutachten oder <a href="https://leaf-singer-0fc.notion.site/How-to-QA-5177e63f65a4406da01bc57d886b5ac2" target="_blank" rel="noreferrer">Fragen zu Code-Änderungen zu beantworten </a>. Für Code-Verbesserungen kannst Du direkt ein "Issue" eröffnen oder einen "Pull-Request" auf GitHub einreichen.',
        paragraph_two:
          'Wenn du dich an der Gestaltung, der Geschichte oder etwas anderem beteiligen möchtest, mach mit im Kanal #saving-satoshi in unserem <a href="https://discord.gg/DC8Dys4G3h" target="_blank" rel="noreferrer">Bitcoin Design Discord Kanal</a>. Teile uns mit, wie Du einen Beitrag leisten möchtest, und wir helfen Dir, die richtige Richtung einzuschlagen.',
      },
    },

    contributors: {
      title: 'Viel Spaß!',
      contributions_by: 'Mitarbeit von',
      many_more:
        'und <a href="https://github.com/saving-satoshi/saving-satoshi/graphs/contributors" target="_blank" rel="noreferrer">vielen mehr</a>.',
    },

    satoshi_needs_you: 'Jetzt sei schnell, Satoshi braucht dich.',
    privacy: {
      title: 'Unser Engagement für Deinen Datenschutz',
      paragraph_one:
        'Bei Saving Satoshi sind wir sehr darauf bedacht, die Privatsphäre und Sicherheit unserer Nutzer zu gewährleisten. Wir glauben an Transparenz und möchten, dass Du verstehst, wie und warum wir die App-Nutzung verfolgen. Um dies zu erreichen, nutzen wir ein vielseitiges Werkzeug namens <Link href="https://umami.is/" className="underline" target="_blank">Umami</Link>.',
      sub_heading_one: 'Was ist Umami?',
      paragraph_two:
        'Umami ist eine quelloffene (open-source) Analyseplattform, die uns hilft, wichtige Erkenntnisse darüber zu gewinnen, wie Du unsere App nutzt. So können wir datengestützte Entscheidungen treffen und unser Produkt kontinuierlich verbessern, um Deine Bedürfnisse besser zu erfüllen.  Du kannst dir die Umami-Statistiken zu Besuchen auf savingsatoshi.com <Link className="underline" href="https://visits.bitcoindevs.xyz/share/zFmD5WIus09mDxEf/Saving%20Satoshi" target="_blank">hier</Link> anschauen.',
      sub_heading_two: 'Welche Daten sammeln wir?',
      paragraph_three:
        'Keine Sorge, wir sammeln nur nicht-persönliche Daten und annonymisieren diese. Zum Beispiel:',
      list_item_one_title: 'Produktverbesserungen:',
      list_item_one_text:
        'Wir verwenden die Daten, um Bereiche zu identifizieren, in denen unsere App verbessert werden kann. Indem wir verstehen, wie Du unsere App nutzt, können wir sie effizienter, benutzerfreundlicher und sicherer machen.',
      list_item_two_title: 'Kompatibilität:',
      list_item_two_text:
        'Die von Dir verwendeten Geräte und Plattformen zu kennen, erlaubt es uns, unsere App für verschiedene Konfigurationen zu optimieren und sicherzustellen, dass sie naht- und reibungslos für Dich funktioniert.',
      sub_heading_three: 'Deine Privatsphäre ist uns wichtig',
      paragraph_four:
        'Wir möchten betonen, dass Deine Privatsphäre für uns von größter Bedeutung ist. Wir sammeln keine persönlich identifizierbaren Informationen, und die Daten, die wir sammeln, werden ausschließlich zur Verbesserung unserer App verwendet. Deine Daten werden niemals an Dritte weitergegeben oder verkauft.',
      paragraph_five:
        'Wenn Du Bedenken oder Fragen zu unseren Datenerfassungspraktiken oder Datenschutzrichtlinien hast, zögere bitte nicht, uns zu kontaktieren. Wir sind bestrebt, Dir eine transparente und sichere Erfahrung bei der Nutzung unserer App zu bieten.',
    },
  },

  ///CHAPTERS TITLE PAGE
  chapter_one: {
    title: 'Ein Geheimnis bei Tageslicht',
    paragraph_one:
      'Wir schreiben das Jahr 2139. Der letzte Bitcoin wird in zwei Wochen geschürft werden. Seit Monaten tickt die Uhr auf dem Satoshi-Platz herunter. Die Welt wartet auf den letzten Block. Dann, ganz plötzlich, kommt das Netzwerk zum Stillstand.',

    ///CHAPTER 1
    intro_one: {
      title: 'Genesis',
      paragraph_one: `Momente später, Dein Hover Desk aktiviert sich.`,
      paragraph_two: `—Deborah Chunk: “Thomas Vanderpoole. Als Geschäftsführer von BitRey betreiben Sie einen der größten Bitcoin-Mining-Pools der Welt. Sie stellen auch Bitcoin-Mining-Maschinen her. Was geschieht hier? Stirbt Bitcoin?”`,
      paragraph_three: `—Vanderpoole: “Ja, das mache ich, Deborah. Wie mein Vater und sein Vater vor ihm. Die Vanderpools schürfen seit Block #21000. Deshalb kann ich Dir mit Sicherheit sagen, dass die Miner auf der ganzen Welt diese Netzwerk-Verzögerungen verursachen, indem sie ihre Maschinen abschalten. Dies ist ein Protest. Niemand will, dass Bitcoin bei 21 Millionen nicht mehr als Block-Belohnung ausgegeben wird. Wir können nicht allein von den Transaktionsgebühren leben.”`,
      start: 'Weiter',
    },

    intro_two: {
      title: 'Genesis',
      paragraph_one:
        'Du erhälst eine Holokatze von jemandem, der sich Satoshi Nakamoto nennt (sie ist wie jedes andere E-Hologram, jedoch in der Form einer Katze). Du öffnest die Nachricht der Holokatze, indem du auf ihre Nase drückst.',
      paragraph_two:
        '—“Bitcoin ist nicht am sterben, aber er benötigt Deine Hilfe. Vergiss die Katze nicht.” – Satoshi Nakamoto',
      paragraph_three:
        '—Satoshi? Der Satoshi? Nein, das kann nicht sein. Er wird seit über einem Jahrhundert für tot gehalten. Oder? Oder!?',
      paragraph_four: 'Wird er etwa nicht?',
      paragraph_five:
        'Holokatze: “Du gehst besser an die Arbeit. Ich kann Dir helfen, aber Du musst jetzt anfangen meow.”',
    },

    genesis_one: {
      title: 'Genesis',
      heading: 'Deine erste Herausforderung',
      paragraph_one:
        'Bitcoin ist zensurresistentes Geld. Jeder kann Geld verschicken, indem er eine Transaktion an das Netzwerk sendet. Nach der Übermittlung werden die Transaktionen von den Minern zu Blöcken zusammengefügt. Die Miner konkurrieren mit anderen Minern um das Privileg, an der Blockchain zu arbeiten. Dadurch bleibt Bitcoin dezentral.',
      paragraph_two:
        'Satoshi Nakamoto, der pseudonyme Erfinder von Bitcoin, hat auch den ersten Bitcoin-Block geschürft. Er hinterließ der Welt eine geheime Nachricht in der allerersten Bitcoin-Transaktion, die jemals durchgeführt wurde. Deine erste Aufgabe ist es, sie zu finden und zu entschlüsseln.',
    },

    genesis_two: {
      title: 'Genesis',
      heading: 'Finde die geheime Nachricht',
      paragraph_one:
        'Lass uns den allerersten Block in der Bitcoin-Blockchain finden. Klick auf den unten stehenden Button, um einen <Tooltip id="genesis_two_paragraph_one" content="chapter_one.genesis_two.tooltip_block_explorer" theme="bg-[#30435b]">Blockexplorer</Tooltip> genau an Block 0 zu öffnen - dem sogenannte Genesisblock.',
      paragraph_two:
        'Scrolle nach unten und erweitere die Details zu der einen Transaktion, die in diesem Block gespeichert ist. Suche die Eingabe mit dem Namen "Coinbase". Jetzt schau nach der Bezeichnung “SCRIPTSIG (<Tooltip id="genesis_two_paragraph_two" content="chapter_one.genesis_two.tooltip_hex" theme="bg-[#30435b]">HEX</Tooltip>)”. Die Zeichenketten daneben ist eine verschlüsselte Nachricht.',
      paragraph_three:
        'Kopiere die Zeichenkette und füge sie in das untere Feld ein.',
      tooltip_block_explorer:
        'Ein <a  href="https://bitcoinops.org/en/topics/block-explorers/" target="_blank" rel="noreferrer">Blockexplorer</a> ist ein nützliches Werkzeug um schnell Informationen über Bitcoin-Transaktionen nachzuschlagen.',
      tooltip_hex:
        'Kurz für Hexadezimal, ein Zahlensystem das Zahlen mittels der Basis 16 repräsentiert.',
      view_block_0: 'Begutachte Block 0',
      placeholder: 'Füge die Zeichenkette, die du gefunden hast, hier ein',
    },

    genesis_three: {
      title: 'Genesis',
      heading: 'Entschlüsseln wir die Nachricht',
      paragraph_one:
        'Die Nachricht, die Du gefunden hast, war in einem Format namens HEX kodiert. Jetzt werden wir einen Befehl ausführen, um sie in ASCII umzuwandeln und dann lesen zu können.',
      paragraph_two:
        'Kopiere den folgenden Befehl und füge Ihn im Terminal in das Codefeld ein und drücke “Enter”.',
      terminal_challenge_lines: `Gib Deine Befehle hier ein und drücke Enter...\n Die Variable $scriptSigHex ist schon für dich definiert worden.\n\n var $scriptSigHex = '04fff...e6b73'`,
      waiting_for_input:
        'Abwartend, dass Sie das Skript schreiben und ausführen...',
      success: `Überragende Arbeit! Die entschlüsselte Nachricht verweist auf die Titelseite von <Link href="https://en.bitcoin.it/wiki/Genesis_block" target="_blank" className="underline">The Times</Link> vom 3. Januar 2009, dem gleichen Tag an dem Satoshi den Genesisblock geschürft hat. Wie cool ist das denn?! Diese Nachricht gibt uns auch einen Einblick in seine Motivation für die Entwicklung von Bitcoin.\n\n Lass uns weiter machen.`,
    },

    genesis_four: {
      title: 'Genesis',
      subtitle: 'Glückwunsch! Du hast die erste Herausforderung gemeistert!',
      paragraph_one:
        'Du hast die geheime Nachricht gefunden, die Satoshi Nakamoto in den Genesisblock eingebettet hat. Jetzt ist es an der Zeit, das eben Gelernte zu vertiefen. Entschlüssle einen wichtigen Hinweis bezüglich der Geschichte in der nächsten Herausforderung.',
    },

    transacting_one: {
      title: 'Transaktionen',
      heading: 'Was ist in einer Transaktion?',
      paragraph_one:
        'Die zwei Hauptkomponenten einer Transaktion sind Eingänge (Inputs) und Ausgänge (Outputs). In der vorigen Übung haben wir eine geheime Nachricht entschlüsselt, die sich in einem Transaktionseingang befand. Dieses Mal werden wir eine Nachricht entschlüsseln, die dem Ausgangsteil angehört.',
      paragraph_two:
        'Für die folgende Transaktion werden wir den Output vom Typ OP_RETURN identifizieren.',
    },

    transacting_two: {
      title: 'Transaktionen',
      heading: 'OP_RETURN',
      paragraph_one:
        'Es gibt eine weitere Möglichkeit, geheime Nachrichten in Transaktionen zu verstecken. Bitcoin hat eine spezielle Art von Code namens OP_RETURN, der es Nutzern erlaubt, Nachrichten an Transaktionsausgaben anzuhängen. Schauen wir mal, ob wir eine finden können.',
      paragraph_two:
        '1. Klicke <Link href="https://blockstream.info/tx/ff9148605a772a51cba39004df5fb042d40515967a3e38ff5294cfd017c452a9" target="_blank" className="underline">hier</Link>, um dir eine spezifische Transaktion anzuschauen.',
      paragraph_three:
        '2. Öffne die Rubrik "Details" und suche nach dem Teil, der vom Typ "OP_RETURN" ist.',
      paragraph_four:
        '3. Jetzt suche das “SCRIPTPUBKEY (ASM)” Feld. Siehst Du den “OP_RETURN OP_PUSHBYTES_33" Teil? Dieser beinhaltet zwei unterschiedliche Opcodes. Wir interessieren uns für das, was nach den Opcodes kommt.',
      paragraph_five:
        '4. Kopiere die lange Zeichenfolge nach "OP_RETURN OP_PUSHBYTES_33" und füge sie in den Codeblock ein. ',
      input_challenge_label: 'Füge die Zeichenkette vom Typ OP_RETURN hier ein',
    },

    transacting_three: {
      title: 'Transaktionen',
      heading: 'Eine weitere geheime Nachricht',
      paragraph_one:
        'Wir haben den Teil der Transaktionsausgabe identifiziert, der die Nachricht enthält.',
      paragraph_two:
        'Jetzt müssen wir sie, wie wir es in der vorherigen Übung getan haben, nur noch entschlüsseln. Du kannst dir die Transaktion <Link href="https://blockstream.info/tx/ff9148605a772a51cba39004df5fb042d40515967a3e38ff5294cfd017c452a9?expand" className="underline">hier</Link> noch einmal anschauen.',
      terminal_challenge_success:
        'Das stimmt! Sehr gute Arbeit.\n\n Wie du siehst, ist der Hinweis eine Adresse. Geh zu ihr.\n\n Die nächste Herausforderung wartet schon.',
      terminal_challenge_lines:
        'Gib hier Deine Befehle ein und drücke Enter...\n\n Command: \n echo $scriptPubKeyBytes | xxd -r -p \n\n Beachte, dass die Variable $scriptPubKeyBytes dieses Mal noch nicht für Dich definiert ist. Du musst diese Variable im Code durch den Wert ersetzen, den Du auf der vorherigen Seite gefunden hast.',
      terminal_challenge_error:
        'Fastt! Erinnere dich, dass die Variable $scriptPubKeyBytes dieses Mal noch nicht für dich definiert wurde.',
    },

    outro_one: {
      title: 'Outro',
      paragraph_one:
        'Du rennst Deine Garage herunter, steigst in den alten Solocopter Deines Vaters, gibst die Koordinaten ein und machst dich auf den Weg zur Adresse.',
      paragraph_two:
        'Trotz einer Katzenhaarallergie, die so stark ist, dass selbst ein Hologram sie auslösen könnte, kommt die Holokatze mit. Du bist dagegen, aber Katzen sind nun einmal Katzen.',
      button_text: 'Vervollständige Kapitel 1',
    },

    outro_two: {
      title: 'Du hast es geschafft!!!',
      description:
        'Überragend. Du hast das erste Kapitel abgeschlossen und eine Menge über Transaktionen gelernt. Wie ist es gelaufen?',
    },

    end: {
      save: 'Speichere meinen Fortschritt',
      next: 'Fortfahren ohne zu speichern',
      feedback: 'Teile Dein Feedback',
    },
    resources: {
      genesis: {
        scriptsig_heading: 'ScriptSig',
        scriptsig_paragraph:
          "Das 'scriptSig' ist ein Skript, das Du als Teil des Eingang/Input Teils in Deiner neuen Transaktion bereitstellst. Es ist im Wesentlichen Dein Freischaltungsskript, das beweist, dass Du die Berechtigung hast, die Bitcoin aus der referenzierten UTXO auszugeben. Das 'scriptSig' ist der Teil der Daten, der in das scriptSig Feld der Eingänge/Inputs eigeben wird.",
        blocks_heading: 'Bitcoin Blocks',
        blocks_paragraph:
          "Ein 'Block' in der Blockchain-Technology ist wie ein Kontainer für eine Gruppe von Transaktionen. Er ist ein wesentlicher Bestandteil der Blockchain, da jeder Block auf den vorherigen referenziert. Dieser Verweis sowie ein 'Blockheader', der wichtige Details wie einen Zeitstempel und eine eindeutige Kennung enthält, gewährleisten die Integrität und chronologische Reihenfolge der Daten. Sobald ein Block zur Blockchain hinzugefügt wurde, ist es unglaublich schwierig, ihn zu ändern, was die Sicherheit und Unveränderlichkeit der Daten gewährleistet. Die Größe eines Blocks kann von Blockchain zu Blockchain variieren, und jeder Block muss von den Netzwerkknoten validiert werden, bevor er ein fester Bestandteil der Blockchain wird. Diese Block- und Kettenstruktur ist die Grundlage für die Transparenz und Sicherheit der Blockchain.",
        block_explorer_heading: 'Blockexplorer',
        block_explorer_paragraph:
          'Ein Blockexplorer ist ein essentielles Werkzeug zur Navigation und zum Verständnis des Blockchain-Netzwerks. Er dient als benutzerfreundliche Schnittstelle zur Überprüfung und Analyse der in einer Blockchain gespeicherten Daten. Mit einem Block-Explorer können Nutzer die Transaktionshistorie erkunden, Kontostände einsehen und den Fortschritt einzelner Blöcke und Transaktionen verfolgen. Er sorgt für Transparenz und Rechenschaftspflicht in der Welt der dezentralen Kryptowährungen und erleichtert die Überprüfung und Nachverfolgung von Transaktionen und fördert das Vertrauen in die Blockchain-Technologie.',
        tip_one:
          'Suche nach der Kategorie scriptSig(Hex), die im Coinbase-Eingang/Input verschachtelt ist, nachdem Du die Transaktion innerhalb des Blocks erweitert hast.',
        tip_two:
          "Der 'xxd' Befehl kodiert Daten nach Hex, wobei der '-r' Zusatz es dir erlaubt den Prozess umzukehren (reverse), was es Dir ermöglicht Hex in lesenbaren Text umzuwandeln. Der '-p' Zusatz druckt (print) es dann in die Konsole, sodass Du die Ausgabe lesen kannst.",
      },
      transacting: {
        transactions_heading: 'Transaktionen',
        transactions_paragraph:
          'Eine Transaktion in der Welt der Kryptowährungen ist vergleichbar mit einer einzelnen atomaren Zahlung, bei der bestehende Münzen vernichtet und neue geschaffen werden. Wenn jemand eine Kryptowährungstransaktion initiiert, weist er die Blockchain im Wesentlichen an, eine bestimmte Menge an Münzen von einer digitalen Geldbörse auf eine andere zu übertragen. Um dies zu erreichen, verbraucht die Transaktion die vorhandenen Münzen des Absenders und erzeugt neue für den Empfänger, wodurch das Eigentumsbuch effektiv aktualisiert wird.',
        bitcoin_script_heading: 'Bitcoin Skript',
        bitcoin_script_paragraph:
          'Bitcoin Skript ist eine einfache, stapelbasierte Programmiersprache, die bei Bitcoin-Transaktionen verwendet wird, um die Bedingungen festzulegen, unter denen Bitcoins ausgegeben werden können. Sie besteht aus verschiedenen Opcodes (kurz für Operationscodes), die angeben, welche Operationen mit den Daten innerhalb des Skripts durchgeführt werden sollen.',
        tip_one:
          'Mit dem Op_Code: OP_Pushbytes_33 suchen wir nach einer 33 Byte langen Zeichenkette (insgesamt 66 Zeichen) im OP_Return der Transaktion',
        tip_two:
          "Dekodiere die Zeichenkette mit dem 'xxd' Befehl. Denk daran, dass wir dieses Mal keine Variable verwenden, sondern die ganze Zeichenkette eingeben müssen.",
      },
    },
  },

  chapter_two: {
    title: 'Das Hashen eines Plans',
    paragraph_one:
      'Die von Satoshi angegebenen Koordinaten führen Dich zu einem verlassenen Lagerhaus.',
    paragraph_two:
      'Du umkreist das Lagerhaus mit Deinem Budgetcopter nicht weniger als dreimal. Der Wärmedetektor Deines Budgetcopters nimmt nichts als Dunkelheit wahr. Wenn jemand weiß, dass es diesen Ort gibt, hat er ihn schon lange nicht mehr besucht, außer vielleicht in seinen Erinnerungen.',

    intro_one: {
      title: 'Das Hashen eines Plans',
      paragraph_one:
        'HOLOKATZE: “Man, was für ein Saustall. Dieser Ort sollte besser Sardinen oder Trockenfisch lagern. Ich würde mich auch mit einem kleinen E-Schlückchen zufrieden geben."',
      paragraph_two:
        'Du landest, beruhigst dich und suchst nach einer Einstiegsstelle. Da, das zerbrochene Fenster scheint perfekt hierfür geeignet zu sein. Mit einem Ziegelstein zerstörst du die Reste des Fensters und dringst in das Gebäude ein. Das Gebäude ist voll mit Tausenden von staubigen, gut erhaltenen Bitcoin-Minern.',
      paragraph_three:
        'HOLOKATZE: “Dies ist kein Lagerhaus, sondern ein Museum. Ich glaube, das sind alte ASIC-Miner der Familie Vanderpoole. Anwendungsspezifische integrierte Schaltkreise (Application-specific integrated circuit - ASIC) waren in den Anfangstagen von Bitcoin der letzte Schrei. Kannst Du dir vorstellen, dass die Leute früher auch andere Coins geschürft haben?”',
    },

    intro_two: {
      title: 'Das Hashen eines Plans',
      paragraph_one:
        'In der Ecke blinkt ein schummriger, kaum funktionierender Computermonitor, an dem ein Zettel klebt. Auf dem Zettel steht: "Mach sie an, Dummkopf."',
      paragraph_two: 'HOLOKATZE: “Wie frech.”',
      paragraph_three:
        'Wow, eine mechanische Tastatur. Holokatze springt auf die Tastatur, läuft über sie und zeigt dir, welche Tasten Du drücken musst.',
    },

    hashing_one: {
      title: 'Nullen',
      paragraph_one:
        'Entweder durch Zufall oder weil Holokatze tatsächlich wusste, was sie tat, verwandelt der Computer die zufälligen Buchstaben und Zahlen, auf die sie getreten ist, in... weitere zufällige Buchstaben und Zahlen?',
      list_one: '> QX23Y6VGECTUKSNIEUTUB[P[pihof',
      list_two:
        '> 1c31d1d9fb848a505fc0cdbea848ff1bdd46a9ed4d639d413d3a93035194eedf',
      paragraph_two: 'Der Monitor zeigt "FALSCHER HASH. VERSUCHE ES ERNEUT."',
      paragraph_three:
        'Natürlich war das Kauderwelsch, was die Holokatze getippt hat. Sie ist nur eine holografische Katze!',
      paragraph_four: 'Was passiert, wenn Du etwas anderes eingibst?',
    },

    hashing_two: {
      title: 'Nullen',
      heading: 'Gib ein was Du willst',
      return_hash:
        'Nachfolgend siehst Du Deine Eingaben in einen Hash umgewandelt',
      progress_message: 'Versuch es weiter...',
      success_message:
        'In Ordnung, gute Arbeit beim Herumspielen. Machen wir weiter.',
    },

    hashing_three: {
      title: 'Nullen',
      heading: 'Ist Dir etwas besonderes bezüglicher der Hashe aufgefallen?',
      list_one:
        'So wie Fingerabdrücke ist jeder Hash einzigartig. Abgesehen von manchen außergewöhnlichen Umständen sollten die Hashe für zwei verschiedene Eingaben niemals identisch sein.',
      list_two:
        'Hash-Funktionen sind eine Einbahnstraße. Man kann einen Hash nicht auf seinen Eingabewert zurückrechnen, um herauszufinden welche Daten sich hinter ihm verbergen.',
      list_three:
        'Hashe sind insofern extrem zuverlässig, als das sie deterministisch sind. Das bedeutet, dass Du die selben Daten immer und immer wieder hashen kannst und immer das selbe Ergebnis erhalten wirst.',
      paragraph_one:
        'Die Funktion, die hier genutzt wird, nennt sich SHA-256, eine sehr beliebte Wahl.',
      paragraph_two:
        'Okay, jetzt lass uns schauen, ob Du einen spezifischen Hash finden kannst.',
      paragraph_three:
        'Finde einen Hash der mit einer Null beginnt (“0”). Gib unten so lange verschiedene Zeichen ein, bis Du den gewünschten Hash gefunden hast.',
    },

    hashing_four: {
      title: 'Nullen',
      heading:
        'Gib ein was du möchtest, bis du einen Hash gefunden hast, der mit einer Null beginnt (“0”)',
      hint_prompt:
        'Brauchst Du einen <Tooltip id="hint_prompt" position="bottom" theme="bg-[#5e212a]" offset="-1" content="chapter_two.hashing_four.hint_tooltip">Tipp</Tooltip>?',
      hint_tooltip:
        '<span className="text-m whitespace-nowrap leading-none text-white/50">Tipp mal:</span> <span className="whitespace-nowrap text-white">popcorn</span>',
    },

    hashing_five: {
      title: 'Nullen',
      heading: 'Das war doch gar nicht so schwer!',
      paragraph_one:
        'Lass es uns ein bisschen kniffliger machen. Versuche einen Hash zu finden, der mit zwei Nullen beginnt ("00").',
    },

    hashing_six: {
      title: 'Nullen',
      heading:
        'Gib ein was Du möchtest, bis Du einen Hash findest, der mit zwei Nullen beginnt (“00”)',
      hint_prompt:
        'Brauchst Du einen <Tooltip id="hint_prompt" position="bottom" theme="bg-[#5e212a]" offset="-1" content="chapter_two.hashing_six.hint_tooltip">Tipp</Tooltip>?',
      hint_tooltip:
        '<span className="text-m whitespace-nowrap leading-none text-white/50">Try typing:</span> <span className="whitespace-nowrap text-white">trigonometry</span>',
    },

    scripting_one: {
      title: 'Automatisierung',
      heading: 'Lassen wir den Computer das für uns machen.',
      paragraph_one:
        'Okay, das hat Dich wahrscheinlich länger beschäftigt als gedacht. Stelle Dir nun vor, Du musst einen Hash finden, der mit fünf oder zehn Nullen beginnt. Das ist die Herausforderung, vor die das Bitcoin-Netzwerk die Miner stellt, wenn sie neue Blöcke mit Transaktionen einreichen wollen.',
      paragraph_two:
        'Die Miner sammeln alle Informationen, die sie in einen Block einfügen wollen, z. B. den Hash des vorherigen Blockheaders, die Zeit, einen Hash der Transaktionen, die in den Block aufgenommen werden sollen (einschließlich der Coinbase-Transaktion) und kombinieren sie mit einer Zufallszahl, die Nonce genannt wird (was für "number only used once" steht). All dies wird in die Hash-Funktion eingegeben, um den sogenannten Block-Hash zu erstellen.',
      paragraph_three:
        'Als Bitcoin an den Start ging, haben die Miner die Nonce im Block-Header durchprobiert, indem sie die Werte im 32-Bit-Feld, Durchgang für Durchgang, um 1 erhöht haben. Da die Miner allerdings inzwischen so leistungsfähig und die Schwierigkeit so hoch geworden ist, durchlaufen sie diesen Zyklus ziemlich schnell und finden normalerweise keine Lösung unterhalb der Zielschwierigkeit.',
      paragraph_four:
        'Die Miner müssen entsprechend weitere Teile des Blockheaders ändern, z. B. die Zeit oder die im Block enthaltenen Transaktionen, um weitere, mögliche Hashe generieren zu können.',
      paragraph_five:
        'Das Bitcoin-Netzwerk hat eine Schwierigkeitseinstellung und akzeptiert nur Block-Hashe, die mit einer bestimmten Anzahl von Nullen beginnen. Wir nennen dies die "difficulty" und sie wird alle 2016 Blöcke angepasst.',
      paragraph_six:
        'Schreibe für die nächste Aufgabe ein Skript, das einen Hash findet, der mit fünf Nullen beginnt (00000).',
    },

    scripting_two: {
      title: 'Automation',
      paragraph_one:
        'Alles klar, jetzt ist es an der Zeit, Deinen eigenen Code zu schreiben und auszuführen. Schreibe ein Skript, das einen Sha256-Hash erzeugt, der mit fünf Nullen beginnt ("00000..."). Dein Code sollte die Funktion Sha256 wiederholt mit verschiedenen Inputs aufrufen, bis ein Output diese Anforderung erfüllt. Du solltest versuchen, eine ganze Zahl innerhalb einer Schleife Durchgang für Durchgang zu erhöhen, um verschiedene Input-Werte zu erhalten. In der Kryptographie wird diese Zahl als "Nonce" oder "number used once" bezeichnet.',
      python: {
        paragraph_two:
          'Wenn Du eine Nonce mit einem Hash findest, der mit fünf Nullen beginnt, gib den Hash an die Konsole zurück. Wir verwenden die hashlib-Bibliothek in Python, um Dir bei der Erstellung dieser Funktion zu helfen. Du kannst bei Bedarf die folgenden externen Ressourcen verwenden, um Dir beim Schreiben dieser Funktion zu helfen:',
        list_one:
          '<Link href="https://docs.python.org/3/library/hashlib.html" target="_blank" className="underline">hashlib documentation</Link>',
        list_two:
          '<Link href="https://datagy.io/python-sha256/" target="_blank" className="underline">Tutorial python function</Link>',
      },
      javascript: {
        paragraph_two:
          'Wenn Du eine Nonce mit einem Hash findest, der mit fünf Nullen beginnt, gib den Hash an die Konsole zurück. Wir verwenden die crypto-Bibliothek in JavaScript, um Dir bei der Erstellung dieser Funktion zu helfen. Du kannst bei Bedarf die folgenden externen Ressourcen verwenden, um Dir beim Schreiben dieser Funktion zu helfen:',
        list_one:
          '<Link href="https://www.geeksforgeeks.org/node-js-crypto-createhash-method/" target="_blank" className="underline">crypto documentation</Link>',
        list_two:
          '<Link href="https://www.educative.io/answers/what-is-node-cryptocreatehashalgorithm-options" target="_blank" className="underline">Tutorial JavaScript function</Link>',
      },
      success: 'Fünf Nullen! Geschafft!',
    },

    mining_one: {
      title: 'Innerhalb der Miene',
      heading_one:
        'Jetzt, da wir wissen wie Mining funktioniert, wollen wir uns das mal in Aktion anschauen',
      heading_two: 'Du schürfst jetzt',
      heading_three: 'Gute Arbeit!',
      heading_four: 'Lass uns 100 Blöcke schaffen',
      heading_five: 'Du hast es geschafft!',
      paragraph_one:
        'Momentan verlangt das Bitcoin-Netzwerk, dass Blöcke einen Hash mit zehn führenden Nullen aufweisen. Lass uns das hinbekommen!',
      paragraph_two:
        'Für diese einfache Simulation nehmen wir an, dass jeder Block 3500 Transaktionen und 0,061 BTC an Belohnungen und Gebühren enthält.',
      paragraph_two_one: 'Schau, ob Du die Miner anschalten kannst.',
      paragraph_three:
        'Der Code, den Du in der vorherigen Lektion geschrieben hast, um Hashe immer und immer wieder zu berechnen, läuft.',
      paragraph_four:
        'Er hält an, sobald ein Hash mit zehn führenden Nullen gefunden wurde.',
      paragraph_five:
        'Siehst Du das Nonce-Feld nach oben schnellen? Das ist die Anzahl der Hashe, die Du bis jetzt versucht hast!!',
      paragraph_six: 'Mit der folgenden Nonce:',
      paragraph_seven: 'Der erzeugte Hash lautet:',
      paragraph_eight:
        'Er hat die zehn führenden Nullen, die alle neuen Blöcke benötigen. Lass uns ein paar weitere Blöcke schürfen.',
      paragraph_eight_one: 'Mach die Miner wieder an.',
      paragraph_nine:
        'Das kann einige Zeit dauern. Aber das zeigt Dir, wie schwer es ist, Blöcke zu schürfen und Transaktionen zu bestätigen.',
      paragraph_ten:
        'Wow! Für das ganze Hashing war eine ganze Menge Rechenleistung nötig. Sieh nur, wie viele Nonces ausprobiert wurden!  Es war wirklich hilfreich, die Hashpower, d.h. die Anzahl der Hashe, die Dein Computer in einer Sekunde ausprobieren kann, zu erhöhen.',
      paragraph_eleven:
        'Da jeder Block 3500 Transaktionen enthält, wurden in den 100 Blöcken, die geschürft wurden, erwartungsgemäß insgesamt 350000 Transaktionen bestätigt.',
      paragraph_twelve:
        'Und es sieht so aus, als hättest Du eine nette Belohnung für all das Mining erhalten! Zusätzlich zur Blockbelohnung, der Menge an Bitcoin, die das Netzwerk für jeden gefundenen Block vergütet, konntest Du auch zusätzliche Einnahmen in Form von Transaktionsgebühren erzielen.',
      paragraph_thirteen:
        'In den Anfängen von Bitcoin war es möglich, mit einem durchschnittlichen Computer zu minen, so wie wir es in dieser Simulation getan haben.',
      paragraph_fourteen:
        'Heutzutage verwenden Miner eine besondere Art von Chip, der als anwendungsspezifischer integrierter Schaltkreis (Application-Specific Integrated Circuit, kurz ASIC) bezeichnet wird. Heutzutage kaufen die Leute Maschinen mit ASICs, die nur für das Mining bestimmt sind! Das erklärt all die Maschinen in der Sammlung der Familie Vanderpoole.',
      progress_bar_title: 'Gefundene Blöcke',
      progress_bar_one: 'Nonce',
      progress_bar_two: 'Hashe pro Sekunde',
      progress_bar_three: 'Bestätigte Transaktionen',
      progress_bar_four: 'Verdiente Bitcoin',
      button_hash: '10x Hash Power, bitte',
      ten_x_hint: 'Klicke auf den 10x Button, um das Hashing zu beschleunigen!',
    },
    outro_one: {
      title: 'Outro',
      heading: 'Gute Arbeit!',
      paragraph_one:
        'Die Maschinen dröhnen zum Leben. Alles scheint zu funktionieren. Auf dem Computer erscheint eine Karte, die die Standorte anderer Lagerhäuser mit ASICs zeigt, die auf der ganzen Welt online gegangen sind. Sieht so aus, als wären sie aktiviert worden, als du die Mining-Herausforderung abgeschlossen hast!',
      paragraph_two: 'HOLOKATZE: “Schau, hier ist eine Nachricht.”',
      paragraph_three:
        '“Gute Arbeit. Das wird dem Bitcoin-Netzwerk helfen, wieder zu einem geschürften Block  alle zehn Minuten zurückzukehren.” – Satoshi Nakamoto',
      paragraph_four: 'Er schon wieder?',
    },
    resources: {
      hashing: {
        hash_functions_heading: 'Hash-Funktionen',
        hash_functions_paragraph:
          'Eine Hash-Funktion ist eine Funktion, die verwendet werden kann, um Daten beliebiger Größe auf Werte fester Größe abzubilden. Die von einer Hash-Funktion zurückgegebenen Werte werden Hash-Werte, Hash-Codes, Digests oder einfach Hashe genannt. Die Werte werden in der Regel zur Indizierung einer Tabelle fester Größe verwendet, die als Hash-Tabelle bezeichnet wird. Die Verwendung einer Hash-Funktion zur Indizierung einer Hash-Tabelle wird als Hashing oder Scatter Storage Addressing bezeichnet.',
        collision_resistance_heading: 'SHA256 und Kollisionsresistenz',
        collision_resistance_paragraph:
          'SHA-256 liefert einen 256-Bit-Hash-Wert (64 Zeichen), der eine eindeutige Darstellung der Eingabedaten ist. Es gehört zur Familie der Hash-Funktionen, die auf der Merkle-Damgård-Konstruktion basieren, einer Methode zum Aufbau von Hash-Funktionen aus einfacheren Kompressionsfunktionen. Bei dieser Konstruktion wird die Eingabenachricht in Blöcke fester Größe unterteilt, und ein Verkettungsmechanismus verarbeitet diese Blöcke iterativ, wobei die Ausgabe jedes Blocks mit dem Ergebnis des vorherigen Blocks kombiniert wird. Dieser Prozess wird so lange fortgesetzt, bis die gesamte Nachricht verarbeitet ist und der endgültige Hash-Wert vorliegt. Die robusten Sicherheitseigenschaften und die Kollisionssicherheit von SHA-256 machen es zu einem Eckpfeiler der Datenintegrität und Authentifizierung in der modernen Kryptografie. Weitere Informationen findest Du auf Wikipedia.',
        tip_one:
          'Tippe einfach weiter! Aufgrund des SHA256-Algorithmus führt jede neue Eingabe zu einer völlig zufälligen Eingabe, selbst wenn diese Eingaben sehr ähnlich sind',
        tip_two:
          "Was glaubest Du, wie hoch die Wahrscheinlichkeit ist, bei 16 möglichen Zeichen pro Ziffer einen Hash zu finden, der mit '00' beginnt? Und wie sieht es mit '000' aus? Kannst Du es ausrechnen?",
      },
      scripting: {
        hash_libraries_heading: 'Hash-Funktionen',
        hash_libraries_paragraph:
          'Die Crypto-Bibliothek in Node.js und die Hashlib-Bibliothek in Python sind die Code-Bibliotheken, die die Algorithmen, die wir verwenden werden, in nützliche Werkzeuge für Entwickler umsetzen. Diese Bibliotheken werden gründlich überprüft, um ihre Genauigkeit und Sicherheit zu gewährleisten, da sich viele Menschen auf sie verlassen, um wertvolle und wichtige Systeme zu sichern.',
        nonce_heading: 'Nonce',
        nonce_paragraph:
          "Ein Nonce, kurz für 'number used once', ist eine Zufalls- oder Halbzufallszahl, die in verschiedenen kryptografischen und rechnerischen Verfahren verwendet wird. Ihr Hauptzweck ist es, Unvorhersehbarkeit einzuführen und sicherzustellen, dass eine bestimmte Operation oder Berechnung nicht einfach wiederholt oder vorhergesagt werden kann. Die Nonce ist entscheidend für die Sicherheit des Bitcoin-Minings, aber darüber werden wir später mehr erfahren...",
        tip_one:
          'Vergewissere Dich, dass die Eingaben richtig dekodiert ist. Die Hash-Algorithmen geben oft Objekte zurück, die in Bytes dekodiert sind, wir wollen sie aber im Hex-Format lesen können!',
        tip_two:
          'Überlege, wie Du eine Funktion erstellen würdest, die so lange ausgeführt wird, bis die Antwort einem bestimmten Wert entspricht',
        tip_three:
          'Denk daran, Deine Antwort mit <span className="px-1 border-[2px] border-dashed">console.log()</span> oder <span className="px-1 border-[2px] border-dashed">print()</span> einzulggen. Nur so kann unsere IDE versuchen, Deine Antwort zu überprüfen',
      },
      mining: {
        mining_heading: 'Mining',
        mining_paragraph:
          "Beim Mining kommen all diese Konzepte zusammen. Bitcoin-Mining ist der Prozess, durch den neue Bitcoins geschaffen und Transaktionen zur Blockchain hinzugefügt werden. Miner konkurrieren darum, komplexe mathematische Rätsel zu lösen, indem sie in jedem Transaktionsblock eine einzigartige, gültige 'Nonce' finden. Dieser 'Proof-of-Work'-Prozess erfordert erhebliche Rechenleistung und Energie, was ihn zu einer sicheren und dezentralen Methode zur Validierung von Transaktionen macht. Erfolgreiche Miner werden mit neu geprägten Bitcoins und Transaktionsgebühren belohnt, und sie spielen eine entscheidende Rolle bei der Aufrechterhaltung der Integrität des Bitcoin-Netzwerks.",
        difficulty_heading: 'Difficulty',
        difficulty_paragraph:
          'Die Mining-Schwierigkeit sorgt dafür, dass zwischen jedem neuen Block durchschnittlich 10 Minuten vergehen.',
      },
    },
  },
  chapter_three: {
    title: 'Die 51% Attacke',
    paragraph_one:
      'Du gibst die Internetadresse eines Blockexplorers ein und siehst, dass die Blöcke wieder im Abstand von zehn Minuten entstehen. Irgendwie schläft Holokatze trotz oder durch den Lärm der Maschinen.',
    paragraph_two:
      '—Aber irgendetwas stimmt nicht. Die Blöcke sind leer, und die Transaktionen werden nicht verarbeitet. Hast Du einen Fehler gemacht? Kann das ein Zufall sein? Auf dem Bildschirm erscheint eine weitere Nachricht, die die Holokatze aufweckt. Das ist kein Zufall.',
    intro_one: {
      title: 'Es aus hashen',
      paragraph_one:
        '—SATOSHI NAKAMOTO: “He, Du! Ja, Du! Erinnerst Du dich an mich? Bitcoin ist unter einer 51%-Attacke! Vanderpoole hat einen Virus benutzt, um bestehende Mining-Pools für seine Ziele zu manipulieren. Er benutzt sie, um leere Blöcke zu schürfen, um das Bitcoin-Ökosystem als Geisel zu halten und die Leute zu zwingen, die Erhöhung der Bitcoinmenge zu unterstützen.” – Satoshi Nakamoto',
      paragraph_two:
        '—Der alte Computer hustet ein wenig und produziert dann ein Bündel von Daten, in etwas das sich "Excel-Tabelle" nennt: Kontaktinformationen für einige der größten Bitcoin-Pool-Betreiber und ein Patch für das Virus, der BitRey die Kontrolle über sie ermöglicht. Schicke die Datei an die Pool-Betreiber, damit sie die Kontrolle über ihre Rechner zurückerlangen und sich Deinem Kampf gegen BitRey anschließen können.',
      paragraph_three:
        'HOLOKATZE: “Wir haben noch mehr Arbeit vor uns. Nun, Du hast noch mehr Arbeit vor dir. Ich werde durch Wände rennen und Mäuse erschrecken.”',
    },

    solo_one: {
      title: 'Du vs. Bitrey',
      step_zero_heading: 'Lass uns dem Ganzen eine Chance geben',
      step_zero_paragraph_one:
        'Während Du auf die Poolbetreiber wartest, die Du kontaktiert hast, beschließst Du, BitRey auf eigene Faust zu bekämpfen. Hier siehst Du, wie Deine Hash-Rate ausfällt. Was glaubst Du, wie es laufen wird?',
      step_one_heading: 'Auf in die Schlacht',
      step_one_paragraph_one:
        'Wir schürfen jetzt 100 Blöcke, um zu sehen, wie viele Blöcke Du und wie viele BitRey schürfen wird.',
      step_two_heading: 'Das ist nicht so gut gelaufen!',
      step_two_paragraph_one:
        'Krise, wir haben einfach nicht genug Hashpower, um mit BitRey und den virengesteuerten Pools konkurrieren zu können. Mal sehen, ob wir BitRey für die nächsten 100 Blöcke mit den anderen Poolbetreibern besiegen können. Bitcoin läuft schon seit über einem Jahrhundert und wird nicht kampflos untergehen.',
    },

    pool_one: {
      title: 'Pool vs. BitRey',
      waiting_screen_heading: 'Wir brauchen Unterstützung!',
      waiting_screen_paragraph_one:
        'Deine Miner im Lagerhaus haben alleine keine Chance. Wenn Du Deine Hashpower mit anderen Pools kombinierst, kannst Du den Angriff vielleicht abwehren.',
      waiting_screen_paragraph_two:
        'Lass uns warten, bis die anderen Deinem Pool beitreten, damit wir unsere Kräfte bündeln können. Holokatze besteht darauf, dass der Pool nach ihr benannt wird.',
      waiting_button: 'Warten...',
      continue_button: "Los geht's",
    },

    pool_two: {
      title: 'Pool vs. BitRey',
      step_zero_heading: 'Und los geht es',
      step_zero_paragraph_one:
        'Wenn Du Deine Hashrate mit den anderen Poolbetreibern kombinierst, kannst Du gegen BitRey bestehen.',
      step_two_heading: 'Eine weitere Niederlage!',
      step_two_paragraph_one:
        'Irgendetwas ist faul. Nur Hash Hoppers haben Blöcke gefunden. Woran könnte das liegen?',
    },

    coop_one: {
      title: 'Coop vs. BitRey',
      heading: 'Irgendetwas stimmt hier nicht.',
      paragraph_one:
        'Hash Hoppers, derjenige mit der größten Hashpower, findet alle eure Blöcke, aber die anderen finden nichts.',
      paragraph_two:
        'Das Problem ist, dass jeder beim Mining die gleichen Nonces prüft. Wie könnte man sich besser koordinieren?',
      paragraph_three:
        ' Du beschließt bei der Vorbereitung der Blockdaten für jeden von euch eine eindeutige Kennung in die "extraNonce" zu setzen, um doppelten Aufwand zu vermeiden.',
    },

    coop_two: {
      title: 'Coop vs. BitRey',
      heading: 'Was ist die extraNonce?',
      paragraph_one:
        'Für das Stratum-Mining-Pool-Protokoll (nicht das Bitcoin-Protokoll) enthält die Coinbase-Transaktion auch eine so genannte "extra nonce". Bei der Bereitstellung der Blockdaten für die Miner teilen die Mining-Pools die Extra-Nonce in zwei Teile auf: "extranonce1" und "extranonce2".',
      paragraph_two:
        'Die Aufteilung der zusätzlichen Nonce in zwei Teile hat mehrere Vorteile:',
      list_one:
        'Es verhindert, dass Poolteilnehmer die gleiche Arbeit verrichten.',
      list_two:
        'Es ermöglicht dem Pool, dieselbe Transaktionsliste an alle Miner zu senden, die sich zusammenschließen. Das bedeutet, dass die Miner lediglich "extranonce2" aktualisieren müssen und die im Block enthaltenen Transaktionen nicht ändern müssen.',
      list_three:
        'Die "extranonce1" ermöglicht es den Pools, den anteilig, geleisteten Beitrag pro Miner zu identifizieren und zu bestimmen, da jeder Miner seine eigene "extranonce1" erhält.',
      paragraph_three:
        ' Miner die Hashpower zu einem Pool beitragen, aktualisieren die "extranonce2" und probieren die eigentliche Nonce im Block-Header durch. Wenn sie keine Lösung finden, wiederholen sie diesen Vorgang mit einer anderen "extranonce2", bis sie eine Lösung finden.',
      paragraph_four:
        'Versuchen wir noch einmal die Arbeit aufzuteilen, jedoch dieses Mal nach der neuen Methode.',
    },

    coop_three: {
      title: 'Coop vs. BitRey',
      step_zero_heading: 'Noch einmal...',
      step_zero_paragraph_one:
        'Mal sehen, ob wir jetzt mit unserer verbesserten Strategie der Aufteilung des Nonce-Raums eine Chance gegen BitRey haben.',
      step_two_heading: 'Du hast es geschafft!',
      step_two_paragraph_one:
        'Gemeinsam konntest Du und die anderen Pool-Betreiber den Versuch von BitRey, das Netzwerk zu übernehmen, stoppen.',
    },

    split_one: {
      title: 'Die Belohnung aufteilen',
      heading: 'Schön gemacht.',
      paragraph_one:
        'Du hast nicht nur das Netzwerk gegen BitRey verteidigt, sondern auch Bitcoin als Belohnung verdient!',
      paragraph_two:
        'Für jeden Block, der geschürft wird, erhält der Miner eine Belohnung in Bitcoin. Wenn mehr als eine Person an dem Block gearbeitet hat, erhält die Gruppe der Miner (Mining-Pool) eine Belohnung, die sie sich teilen.',
      paragraph_three: 'Diese Belohnung besteht aus zwei Dingen:',
      list_one: 'Gebühren für alle Transaktionen des Blocks',
      list_two: 'die Blockbelohnung',
      paragraph_four:
        'Du und Deine Miner-Freunde haben insgesamt 6,1 Bitcoin verdient und suchen nach einer guten Möglichkeit, diese aufzuteilen. Es sollte danach aufgeteilt werden, wie viel Arbeit jeder von euch investiert hat.',
      paragraph_five:
        'Mining-Pools lösen dieses Problem, indem sie verfolgen, wie viele Teillösungen jeder Miner erzeugt hat. Ein Pool weist jedem Miner eine Mindestschwierigkeit (niedriger als die Blockschwierigkeit) auf der Grundlage seiner Hashpower zu. Alle paar Sekunden findet ein Miner eine dieser leichteren Lösungen und benachrichtigt den Pool. Der Pool verfolgt dann alle eingereichten Anteile und teilt die Blockbelohnungen entsprechend auf.',
      paragraph_six: 'Schauen wir uns das Ganze in Aktion an.',
    },

    split_two: {
      title: 'Die Belohunung aufteilen',
      step_zero_heading: 'Überprüfen wir wie viel jeder geleistet hat',
      step_zero_paragraph:
        'Wir werden den Kampf erneut durchführen. Diesmal werden wir uns nur auf unseren Pool konzentrieren, insbesondere auf die Anzahl der Teillösungen, die jeder Miner gefunden hat.',
      step_two_heading: 'Rechnen wir mal nach',
      step_two_paragraph:
        'Schaue Dir die obigen Zahlen an und überlege, ob Du einen fairen Weg finden könntest, die Belohnungen aufzuteilen. Hast Du es herausgefunden? Gehen wir es Schritt für Schritt durch',
      step_three_heading: 'Hashrate in Prozent',
      step_three_paragraph:
        'Wie Du weißt, stellt dies die Menge an Arbeit dar, die jeder Miner geleistet hat, um Blöcke zu finden. Aber der Mining-Pool hat keine Möglichkeit, diese Menge zu kennen oder zu messen, da die Miner nur erfolgreiche Lösungen weiterleiten.',
      step_four_heading: 'Gefundene Blöcke in Prozent',
      step_four_paragraph:
        'Die Chance, einen Block zu finden, ist sehr gering, da sie viel mit Glück zu tun hat. Vor allem in Szenarien mit einigen extrem leistungsstarken Minern kann es vorkommen, dass die wirklich kleinen Miner zwar Arbeit leisten, aber keine Blöcke finden.',
      step_five_heading: 'Teillösungen in Prozent',
      step_five_paragraph:
        'Dieser Wert wird funktionieren. Die Miner melden diese Lösungen für einfache Probleme regelmäßig an die Pools. So können die Pools ziemlich genau messen, wie viel Arbeit jeder Pool geleistet hat.',
      step_six_heading: 'Die Belohnung aufteilen',
      step_six_paragraph:
        'Jetzt können wir die Belohnung von 6,1 Bitcoin nehmen und sie entsprechend dem Prozentsatz der Teillösungen jedes Pools aufteilen. Herzlichen Glückwunsch!',
    },

    outro_one: {
      title: 'Outro',
      heading: 'Nimm das, Vanderpoole! ',
      paragraph_one:
        'Gute Arbeit! Du und Deine Mitstreiter waren in der Lage Vanderpooles 51% Attacke abzuwehren indem ihr eure Ressourcen gebündelt habt. Es werden keine leeren Blöcke mehr eingereicht, und es sieht so aus, als hätte er aufgegeben.',
      paragraph_two:
        'Es ist Zeit, Deine Belohnungen zu ernten! Gehe zum nächsten Kapitel, um dir Deine Bitcoin abzuholen.',
    },
    resources: {
      solo: {
        hashrate_heading: 'Mining Hashrate',
        hashrate_paragraph:
          'Die Hashrate eines einzelnen Miners bezieht sich auf die Rechenleistung, die er zum Mining-Prozess des Bitcoin-Netzwerks beiträgt. Es ist die Rate, mit der ihre Mining-Hardware die notwendigen mathematischen Berechnungen durchführen kann, um neue Blöcke zu schürfen. Die Hash-Rate eines einzelnen Miners wird in der Regel in Hashe pro Sekunde oder in Terahashe, also einer Billion Hashe pro Sekunde (TH/s), gemessen, je nach Umfang des Mining-Betriebs und den Fähigkeiten der Mining-Hardware.',
      },
      pool: {
        pool_heading: 'Mining Pool',
        pool_paragraph:
          'Ein Mining-Pool spielt eine zentrale Rolle beim Mining von Kryptowährungen und bietet dem einzelnen Miner mehrere wichtige Vorteile. Durch die Bündelung der Rechenleistung und der Ressourcen vieler Teilnehmer erhöhen Mining-Pools die Chancen auf ein erfolgreiches Mining neuer Blöcke, was zu vorhersehbareren und beständigeren Einnahmen führt. Sie bieten Minern auch eine Plattform für den Zugang zu fortschrittlicher Mining-Ausrüstung und fachkundiger Unterstützung, wodurch die Einstiegshürden gesenkt und die Wettbewerbsbedingungen angeglichen werden. Darüber hinaus helfen Mining-Pools bei der effizienten Verteilung von Belohnungen und stellen sicher, dass Miner ihren gerechten Anteil für ihre Beiträge erhalten, wodurch das Mining von Kryptowährungen für eine breitere Teilnehmergemeinschaft zugänglich, stabil und finanziell lohnend wird.',
      },
      coop: {
        distribution_heading: 'Arbeitsauf-/verteilung',
        distribution_paragraph:
          "Mining-Pools treffen Vorkehrungen, um sicherzustellen, dass ihre Teilnehmer nicht die gleiche Nonce für denselben Block schürfen. Dies ist wichtig, weil beim Bitcoin-Mining-Prozess die Miner darum konkurrieren, eine Nonce zu finden, die zu einem gültigen Block führt. Würden zwei Miner desselben Pools gleichzeitig an derselben Nonce arbeiten, wäre das ineffizient, und nur einer der beiden würde die Blockbelohnung erhalten. Um dies zu verhindern, verwenden Mining-Pools einen Prozess namens 'Arbeitszuweisung' oder 'Arbeitsauf-/verteilung', um die Arbeit effizient zu verteilen. Mining-Pools verteilen die Arbeit an einzelne Miner. Wenn ein neuer Block geschürft werden soll, erstellt der Server des Pools (oder der Betreiber des Pools) einen eindeutigen 'Auftrag' für die Miner. Dieser Auftrag enthält alle Informationen, die für das Mining des Blocks benötigt werden, z. B. die aktuelle Liste der unbestätigten Transaktionen, den Header des vorherigen Blocks und die Zielschwierigkeit.",
        shares_heading: 'Anteile Einreichen',
        shares_paragraph:
          "Die Miner arbeiten an den ihnen zugewiesenen Aufgaben und versuchen ständig, die richtige Nonce zu finden. Wenn ein Miner glaubt, eine Lösung zu haben, sendet er einen so genannten 'Share' (Anteil) an den Pool-Server. Dieser Anteil zeigt, dass der Miner aktiv an der Lösung des Problems arbeitet. Shares sind viel leichter zu finden als die eigentliche Lösung, aber sie dienen als Beweis für die Bemühungen des Miners.",
      },
      split: {
        payout_heading: 'Auszahlungsschemata',
        payout_subheading:
          'Ein Mining-Pool kann die Block-Belohnungen auf verschiedene Arten verteilen, die sich in einigen subtilen, aber wichtigen Punkten unterscheiden:',
        pps_heading: 'Pay-Per-Share (PPS)',
        pps_paragraph:
          'Bei PPS erhalten die Miner eine feste Auszahlung für jeden gültigen Anteil, den sie einreichen, unabhängig davon, ob der Pool erfolgreich einen Block schürft oder nicht. Dieses System bietet Minern ein gleichmäßiges und vorhersehbares Einkommen, was es zu einer bevorzugten Wahl für diejenigen macht, die Wert auf ein beständiges Einkommen legen. PPS minimiert die Schwankungen bei den Belohnungen, da die Miner für ihre Arbeit auf einer Pro-Share-Basis entschädigt werden, was eine zuverlässige Einkommensquelle in der Welt des volatilen Kryptowährungs-Minings darstellt. PPS kann jedoch eine Gebühr von den Einnahmen der Miner abziehen, wenn der Pool einen Block nicht erfolgreich schürft. Diese Gebühr soll die Betriebskosten decken und das Risiko für den Poolbetreiber mindern, falls innerhalb eines bestimmten Zeitrahmens keine Blöcke geschürft werden. Bei traditionellen PPS erhalten die Miner eine geringere Auszahlung, wenn der Pool in Schwierigkeiten gerät.',
        pplns_heading: 'Pay-Per-Last-N-Shares (PPLNS)',
        pplns_paragraph:
          'PPLNS berücksichtigt den Beitrag eines Miners über ein bestimmtes Zeitfenster der letzten N Anteile. Die Miner werden auf der Grundlage der Anzahl und des Schwierigkeitsgrads der Anteile, die sie innerhalb dieses Zeitfensters eingereicht haben, bezahlt. PPLNS ermutigt Miner, im Pool aktiv zu bleiben, da es eine beständige Beteiligung belohnt und das Risiko von Pool-Hopping-Strategien verringert. Miner erhalten Auszahlungen, wenn der Pool erfolgreich einen Block schürft, und die Belohnungen werden proportional zu ihren jüngsten Beiträgen verteilt, wodurch ein fairer und leistungsorientierter Ansatz für das Einkommen im Mining-Ökosystem geschaffen wird.',
        pps_plus_heading: 'Pay Per Share + (PPS+)',
        pps_plus_paragraph:
          'PPS+ bietet Minern eine feste Zahlung für jeden Anteil, den sie zu den Mining-Bemühungen des Pools beitragen. Allerdings enthält PPS+ in der Regel einen zusätzlichen Bonus oder eine Prämie als Anreiz für Miner, die zur Stabilität und Zuverlässigkeit des Pools beitragen. Dieser Bonus soll Schürfer dazu ermutigen, im Pool aktiv zu bleiben und eine langfristige Beteiligung zu fördern. PPS+ bietet Minern ein beständiges und vorhersehbares Einkommen, während der zusätzliche Bonus es zu einer attraktiven Option für diejenigen macht, die sowohl Zuverlässigkeit als auch zusätzliche Belohnungen in der Welt des Kryptowährungs-Minings suchen.',
        fpps_heading: 'Full Pay Per Share (FPPS)',
        fpps_paragraph:
          'Bei Full PPS erhalten die Miner eine feste Auszahlung für jeden Anteil, den sie an den Pool abgeben, unabhängig davon, ob der Pool einen Block erfolgreich schürft oder nicht. Dieser Ansatz bietet Minern ein stetiges und vorhersehbares Einkommen und ist damit eine attraktive Wahl für alle, die Wert auf ein verlässliches Einkommen legen. Im Gegensatz zum traditionellen PPS stellt das Full PPS sicher, dass die Miner die volle Auszahlung für ihre Arbeit erhalten, ohne mögliche Abzüge, auch wenn der Pool gelegentlich Schwierigkeiten hat. Es ist eine stabile und unkomplizierte Methode, die für Miner interessant ist, die ein beständiges Einkommen in der Welt des Kryptowährungs-Minings suchen.',
      },
    },
  },

  chapter_four: {
    title: 'Hol dir Deine 1.61 Bitcoin',
    paragraph_one:
      'Puh, das war knapp! Du zitterst immer noch nach Deinem Kampf mit BitRey, bist jedoch beruhigt, dass Du und Deine Freunde den Kampf für euch entscheiden konntet.',
    paragraph_two:
      'Als Du dich an Deinem Schreibtisch niederlässt, atmest Du tief durch und lässt die Ereignisse des Tages Revue passieren. Deine Hände spielen mit einem geheimnisvollen Umschlag und Du fragst dich, wer ihn abgeschickt haben könnte. ',

    intro_one: {
      title: 'Den Ertrag sichern',
      paragraph_one:
        'HOLOKATZE: “Einer von uns sollte besser schlafen. Du musst nach Hause gehen und anfangen die Mining-Pools zu kontaktieren. Sie werden mehr darüber wissen wollen, als der Rest der Welt.”',
      paragraph_two:
        'Während Du dich an Deinem TMY92-P Hover Desk niederlässt, lässt Du die Ereignisse des Tages Revue passieren. Vanderpoole. BitRey. Die Enthüllung, dass Mining-Pools nie zugestimmt haben, aus Protest ihre Maschinen auszuschalten. Könnte das alles wahr sein? War das alles inszeniert? Und wie lange sollst Du dich noch um diese Katze kümmern?',
      paragraph_three:
        'Was auch immer als Nächstes passiert, Du wirst höchstwahrscheinlich etwas Geld brauchen. Du stellst fest, dass Du die Mining-Belohnungen von Deinem Kampf mit BitRey nie eingefordert hast. Du beschließst, sie abzuheben, um damit Deinen Rückflug zu bezahlen.',
    },

    public_key_one: {
      title: 'Öffentliche Schlüssel',
      heading: 'Über Schlüsselpaare',
      paragraph_one:
        'Laut dem Mining-Pool sieht es so aus, als ob Du 1,61 Bitcoin von all der Arbeit, die Du zuvor geleistet hast, beanspruchen könntest. ',
      list_one: ' Privater Schlüssel',
      list_two: 'Öffentlicher Schlüssel',
      paragraph_two:
        "Aber warte, Du hast ja nicht einmal eine Wallet (Geldbörse)! Du fragst dich vielleicht, wo Du eine kaufen könntest. Du könntest zwar Hardware kaufen, um bestimmte Arten von Wallets zu erstellen, aber Du kannst auch einfach eine mit Deinem Computer oder Deinem Mobilgerät erstellen. Los geht's!",
      paragraph_three:
        'Wenn Du dich irgendwann einmal für ein Konto angemeldet hast, hast Du einen so genannten persönlichen Code erhalten. In der Kryptografie wird dieser Code als "privater Schlüssel" bezeichnet und ist oft Teil eines Paares:',
      paragraph_four:
        ' Ein einziges Schlüsselpaar reicht aus, um eine Wallet zu erstellen und die darin enthaltenen Gelder zu kontrollieren. Wenn Du Bitcoin ausgeben möchtst, verwendest Du den privaten Schlüssel. Wenn Du Bitcoin empfangen möchten, verwendest Du den öffentlichen Schlüssel.',
    },

    public_key_two: {
      title: 'Öffentlicher Schlüssel',
      paragraph_one:
        'Wir haben also den privaten Schlüssel, das ist der persönliche Code, den Du bei der Anmeldung erhalten hast. Wie können wir daraus einen öffentlichen Schlüssel generieren?',
      paragraph_two:
        'Dazu müssen wir einen Blick auf einen faszinierenden Zweig der Kryptographie werfen, die elliptischen Kurven. Dieser Zweig wird als Elliptische Kurven-Kryptographie oder kurz ECC bezeichnet.',
      paragraph_three:
        'Bei der ECC werden bestimmte Punkte auf einer elliptischen Kurve genommen und miteinander addiert und multipliziert.',
      paragraph_four:
        'Bitcoin verwendet eine spezielle Kurve namens secp256k1. In der Abbildung siehst Du eine vereinfachte Version, die einfacher zu visualisieren ist, aber den gleichen mathematischen Regeln folgt.',
      paragraph_five:
        'Wir starten mit einem spezifischen Punkt auf der Kurve, dem sogenannten <Link href="public-key-2/help" className="underline">Generatorpunkt</Link>.',
    },

    public_key_three: {
      title: 'Öffentlicher Schlüssel',
      paragraph_one:
        'Um einen öffentlichen Schlüssel aus einem privaten Schlüssel abzuleiten, führen wir eine elliptische Kurvenoperation wiederholt mit dem Generatorpunkt durch (' +
        '<a href="https://chat.bitcoinsearch.xyz/?author=holocat&question=Why%2520is%2520the%2520generator%2520point%2520repeatedly%2520used%2520to%2520derive%2520a%2520public%2520key%2520from%2520a%2520private%2520key%2520in%2520secp256k1%253F" ' +
        'target="_blank" rel="noopener noreferrer" class="underline">' +
        'Finde heraus weshalb' +
        '</a>' +
        '). Der Generatorpunkt ist ein bestimmter Punkt auf der Kurve. Sein Wert ist Teil des secp256k1-Standards und ist immer gleich:',
      paragraph_two:
        'Die Operation der elliptischen Kurve ähnelt der Addition und daher ähnelt ihre Wiederholung der Multiplikation. Wir nutzen das * Symbol um den Algorithmus zu beschreiben (' +
        '<a href="https://chat.bitcoinsearch.xyz/?author=holocat&question=How%2520does%2520elliptic%2520curve%2520scalar%2520multiplication%2520work%253F" ' +
        'target="_blank" rel="noopener noreferrer" class="underline">' +
        'lerne mehr' +
        '</a>' +
        '), bei dem `k` der private Schlüssel und `P` der korrespondierende öffentliche Schlüssel ist:',

      paragraph_three:
        'Vervollständige die Funktion, die einen privaten Schlüssel als hexkodierte Zeichenkette akzeptiert und den entsprechenden öffentlichen Schlüssel als GE-Objekt (Group Element) zurückgibt.',
      success:
        'Gut gemacht! Der öffentliche Schlüssel ist ziemlich lang. Versuchen wir ihn zu komprimieren!',
    },

    public_key_four: {
      title: 'Öffentlicher Schlüssel',
      paragraph_one:
        'Der öffentliche Schlüssel besteht aus einer x- und einer y-Koordinate und umfasst insgesamt 64 Bytes. Diese können auf 33 Bytes komprimiert werden, indem die y-Koordinate entfernt und ein einzelnes Byte mit Metadaten vorangestellt wird. Dieses Byte gibt an, ob die y-Koordinate gerade oder ungerade ist. Da die elliptische Kurvengleichung nur zwei Variablen hat, kann der vollständige öffentliche Schlüssel später vom Überprüfer nur mit x und den Metadaten berechnet werden:',
      paragraph_two:
        'Das Metadatenbyte sollte `2` sein, wenn y gerade ist und `3`, wenn y ungerade ist. Vervollständige die Funktion `compress_publickey()`, um einen öffentlichen Schlüssel zu akzeptieren und einen 33-Byte-Hex-String zurückzugeben, der den komprimierten öffentlichen Schlüssel darstellt.',
      success:
        'Ausgezeichnet. Jetzt haben wir unseren komprimierten öffentlichen Schlüssel. Als Nächstes müssen wir ihn hashen und in ein menschenfreundliches Format kodieren.',
    },

    address_one: {
      title: 'Addresse',
      heading: 'Gute Arbeit!',
      paragraph_one:
        'Und da hast Du ihn! Dein komprimierter öffentlicher Schlüssel! Es gibt eine Menge interessanter Dinge, die wir damit machen können - zum Beispiel Adressen für unsere Wallet generieren. Das werden wir in der nächsten Herausforderung lernen.',
      paragraph_two:
        'Beachte, dass die Erzeugung eines öffentlichen Schlüssels eine Einbahnstraße ist. Du kannst den privaten Schlüssel, der zur Erzeugung eines öffentlichen Schlüssels verwendet wurde, nicht herausfinden. Es sei denn, Du löst ein bekanntlich schwieriges mathematisches Problem: das so genannte Problem des diskreten Logarithmus in endlichen Körpern.',
    },

    address_two: {
      title: 'Addresse',
      paragraph_one:
        'Erinnerst Du dich an die Hashing-Herausforderung? Es stellt sich heraus, dass die einfachste Art von Bitcoin-Adresse durch Hashing Deines komprimierten öffentlichen Schlüssels zu erzeugen ist. Bitcoin verwendet dafür zwei verschiedene Hashing-Algorithmen: SHA-256 und RIPEMD-160.',
      paragraph_two:
        'Der erste Schritt besteht darin, einen SHA-256-Hash für deinen komprimierten öffentlichen Schlüssel zu erzeugen. Dann führst Du einen RIPEMD-160-Hash an diesem SHA-256-Ausgangshash durch. Das Endergebnis sind 20 Bytes, die als Hexadezimalzeichenfolge kodiert sind.',
      paragraph_three:
        'Vervollständige eine Funktion, die einen 33 Byte großen komprimierten öffentlichen Schlüssel als Hex-String akzeptiert und einen 20 Byte großen Hash des öffentlichen Schlüssels als Hex-String zurückgibt.',
      success:
        'Großartig. Noch ein weiterer Schritt und Du hast Deine Wallet-Adresse.',
    },

    address_three: {
      title: 'Address',
      paragraph_one:
        'Es gibt mehrere Arten von Bitcoin-Adressen. Wir wollen eine Testnet Witness Public Key Hash (wpkh)-Adresse erstellen, um den 20 Byte großen komprimierten Hash des öffentlichen Schlüssels zu kodieren. Zunächst müssen wir dem Hash die Versionsnummer des Witness (Zeugen) "0" voranstellen. Diese 21 Bytes werden als "witness program" bezeichnet. Das Witness-Programm wird in ein menschenfreundliches Format namens bech32 kodiert, das ein für Menschen lesbares Präfix und eine Prüfsumme anfügt.',
      paragraph_two: 'Das Präfix wird durch das jeweilige Netz bestimmt:',
      list_one: 'Mainnet: ‘bc’',
      list_two: 'Testnet: ‘tb’',
      list_three: 'Regtest: ‘bcrt’',
      paragraph_three:
        'Die Zeichen, die von dieser Funktion zurückgegeben werden, sind Deine Bitcoin-Adresse!',
      success:
        'Jetzt hast Du eine Adresse, an die geschürfte Bitcoin geschickt werden können.',
    },

    outro_one: {
      title: 'Outro',
      heading: 'Super!',
      paragraph_one: 'Du hast Deine eigene Wallet kreiert!',
      paragraph_two:
        'Du hebst die Bitcoin aus dem Mining-Pool in das soeben erstellte Wallet ab. Du bist nun ausreichend finanziert und bereit für alles, was Vanderpoole und BitRey Dir als Nächstes vorwerfen.',
    },
    resources: {
      public_key: {
        elliptic_curve_reason_heading:
          'Der Grund für elliptische Kurvenoperationen',
        elliptic_curve_reason_paragraph:
          'Wir verwenden eine ganz bestimmte Reihe von Schritten zur Ableitung des öffentlichen Schlüssels, weil mathematisch bewiesen ist, dass es im Grunde unmöglich ist, diesen Vorgang umzukehren. Diese Eigenschaft gilt auch für andere Algorithmen (wie RSA), aber diese haben viel größere Schlüsselgrößen und sind weniger effizient in der Berechnung. Die Schritte, denen wir folgen, wurden gewählt, weil:',
        elliptic_curve_reason_list_one:
          'wir ein System wollen, bei dem jeder mit minimalen Mitteln mitmachen kann',
        elliptic_curve_reason_list_two:
          'wir wollen, dass die Nachrichten kurz sind (und daher günstig zu übertragen sind)',
        elliptic_curve_reason_list_three:
          'wir beweisen müssen, dass wir ein Geheimnis kennen, ohne dieses Geheimnis zu verraten',
        elliptic_curve_reason_list_four:
          'es praktisch unmöglich sein muss, dass jemand anderes unser Geheimnis errechnet.',
        secp_heading: 'secp256k1',
        secp_paragraph:
          'Secp256k1 ist der Name der elliptischen Kurve, die von Bitcoin verwendet wird, um seine öffentliche Schlüsselkryptographie zu implementieren. Alle Punkte auf dieser Kurve sind gültige öffentliche Bitcoin-Schlüssel.',
        generator_point_heading: 'Der Generatorpunkt',
        generator_point_paragraph:
          'Ein bestimmter Punkt auf der secp256k1-Kurve. Sein Wert ist Teil des secp256k1-Standards und ist immer gleich. Dieser Punkt unterscheidet sich nicht von anderen Punkten auf der Kurve, aber er wird als Standardausgangspunkt für Berechnungen vereinbart. Niemand weiß genau, warum gerade dieser Punkt gewählt wurde.',
        elliptic_curve_operations_heading: 'Elliptische Kurvenoperationen',
        elliptic_curve_operations_paragraph:
          'Elliptische Kurven haben ihre eigenen mathematischen Regeln, so dass einfache Operationen wie Addition und Multiplikation anders funktionieren. Der Einfachheit und Kürze halber werden etablierte Symbole wiederverwendet, z. B. ein "*" für Operationen, die der Multiplikation ähnlich sind.',
        discrete_log_heading: 'Diskreter Logarithmus',
        discrete_log_paragraph:
          'Ein mathematisches System, in dem man z. B. multiplizieren, aber nicht dividieren kann. Eine einfache Metapher dafür ist der Blick auf eine Uhr. Drei Stunden nach 11 Uhr ist 2 Uhr. Wir könnten also sagen: "11+3=2". Wenn man jedoch "2-x=11" ausführt und nach x löst, erhält man unendlich viele mögliche Antworten (3, 15, 27, 39...). Mehr hierzu bei <Link href="https://en.wikipedia.org/wiki/Discrete_logarithm" className="underline">Wikipedia</Link>.',
      },
      address: {
        hash_algo_heading: 'SHA-256, RIPEMD-160',
        hash_algo_paragraph:
          'Hash-Funktionen "verdauen" jede beliebige Datenmenge und liefern immer ein Ergebnis derselben Größe. Bei SHA256 sind es 32 Byte. Bei RIPEMD-160 sind es 20 Byte. Die Ausgabe ist deterministisch (immer die gleiche Ausgabe für die gleiche Eingabe), aber ansonsten nicht vom Zufall zu unterscheiden. Hash-Funktionen reduzieren die Daten effektiv auf einen kleinen, konsistenten Fingerabdruck.',
        wpkh_heading: 'Witness Public Key Hash (wpkh) Addressen',
        wpkh_paragraph:
          'Eine Bitcoin-Adresse ist eine Zeichenkette, die zur einfachen Benutzung für Menschen bestimmt ist. Sie ist kurz, leicht zu kopieren und einzufügen und hat eine Art von eingebauter Prüfsumme, um sicherzustellen, dass sie immer korrekt kopiert wird. Sie kodiert sicher ein Bitcoin-Ausgabeskript, das der Empfänger ausgeben kann. Es gibt verschiedene Arten von Ausgabeskripten und verschiedene Kodierungsmechanismen. In dieser Herausforderung verschlüsseln wir einen komprimierten öffentlichen Schlüssel mit bech32, um eine so genannte Witness-Hash-Adresse für den öffentlichen Schlüssel zu erstellen.',
        network_heading: 'Mainnet, Testnet, Signet und Regtest',
        network_paragraph:
          'Wenn Du Bitcoin-Software entwickelst, ist es wichtig, Deinen Code zu testen, bevor Du ihr echtes Geld anvertraust! Einer der einfachsten Wege, Bitcoin-Software zu testen, ist die Verwendung einer anderen Blockchain mit einem neuen Genesis-Block, bei dem die Coins keine Rolle spielen, Mining kostenlos und einfach ist und alles jederzeit zurückgesetzt werden kann. Diese Ketten werden von einem einzigartigen Netzwerk von Knoten unterstützt, das die echten Münzen und Knoten im Mainnet nicht beeinträchtigt. Testnet und Signet sind die Namen von zwei solchen alternativen Bitcoin-Blockchains, die parallel zum Mainnet auf globaler Ebene betrieben werden. Regtest ist ein Entwicklermodus, der lokal ausgeführt werden kann, ohne dass eine Netzwerkverbindung erforderlich ist.',
      },
    },
  },

  chapter_five: {
    title: 'Der Besitzer der Schlüssel',
    paragraph_one:
      'Es ist spät und Du wirst müde, aber als Du für einen Moment die Augen schließt, erreicht Dich eine doppelte Dosis an schlechten Nachrichten. 1) Vanderpoole ist zurück im Fernsehen. 2) Er behauptet, er sei der Urenkel von Satoshi Nakamoto. Außerdem sieht er so aus, als hätte er schon länger nicht mehr geschlafen.',
    intro_one: {
      title: 'Don’t trust, verify',
      paragraph_one:
        '-DEBORAH CHUNK: "Herr Vanderpool. Sie haben kürzlich in den antisozialen Medien die erstaunliche Behauptung aufgestellt, Sie seien der Urenkel von Satoshi Nakamoto. Ist das richtig? Ist das wahr?"',
      paragraph_two:
        '-VANDERPOOLE: "Sowas von wahr, Deborah. Ich weiß das schon seit längerer Zeit. Du musst verstehen, meine Familie hat eine CD-ROM über Generationen weitergegeben. Sie enthält die privaten Schlüssel zum enormen Bitcoin-Bestand meines Urgroßvaters. Wenn ich also für die Miner spreche, solltet ihr wissen, dass ich auch für Satoshi Nakamoto spreche."',
      paragraph_three:
        '-DEBORAH CHUNK: "Können wir irgendwie überprüfen, ob Sie tatsächlich die privaten Schlüssel zu Satoshi Nakamotos Bitcoin besitzen?"',
      paragraph_four:
        '-VANDERPOOLE: "In der Tat, das können wir. Es ist eine einfache Angelegenheit der Kryptographie mit öffentlichen Schlüsseln."',
      paragraph_five:
        '-DEBORAH CHUNK: Aber warum dann so lange warten, um das zu enthüllen?',
    },
    intro_two: {
      paragraph_one:
        '-VANDERPOOLE: "Ich hatte nicht den Mut dazu. Es gab immer Gerüchte über die Geschichte meiner Familie, die ich dann doch irgendwie aus der Welt schaffen konnte. Ich war einfach nicht bereit für so viel Publicity. Schließlich lebe ich ein bescheidenes, zurückgezogenes Leben auf einer Privatinsel."',
      paragraph_two:
        '-VANDERPOOLE: "Aber jetzt, da die Zukunft von Bitcoin auf dem Spiel steht, wusste ich, dass ich nicht länger Schweigen darf. Ich kann nur sagen, es tut mir leid, dass ich nicht früher damit herausgerückt bin. Die CD-ROM enthält auch Satoshi Nakamotos überarbeitete Pläne für Bitcoin. Er bedauerte immer die Begrenzung des Angebots auf 21 Millionen. Allerdings habe ich nun vor, den Traum meines Großvaters zu erfüllen und den Bitcoin zu Gunsten einer immerwährenden Bitcoin-Ausgabe zu modifizieren."',
    },
    intro_three: {
      paragraph_one:
        '—Dein TXM4H-A Hover Desk erwacht zum Leben. Du hast eine neue Nachricht.',
      paragraph_two: '—HOLOKATZE: Vergiss nicht auf meine Nase zu drücken.',
      paragraph_three:
        'SATOSHI NAKAMOTO: “Vanderpoole ist nicht der, der er vorgibt zu sein. Du kannst ihn entlarven. Bitte ihn, den Besitz von Satoshis Bitcoin zu beweisen, indem er eine Nachricht mit den privaten Schlüsseln signiert.” - Satoshi',
    },
    derive_message_one: {
      title: 'Eine Nachricht herleiten',
      heading:
        'Vanderpoole sagt, er habe eine Nachricht mit Satoshis Schlüsseln signiert:',
      code_one:
        '-----BEGIN BITCOIN SIGNED MESSAGE----- <br /> <br /> Ich bin Vanderpoole und ich habe die Kontrolle über den privaten Schlüssel, den Satoshi benutzt hat, um die allererste Bitcoin-Transaktion zu signieren, die in Block #170 bestätigt wurde. Diese Nachricht ist mit dem selben privaten Schlüssel signiert. <br /> <br /> -----BEGIN BITCOIN SIGNATURE----- <br /> <br />',
      code_two:
        '<span className="break-all"> H4vQbVD0pLK7pkzPto8BHourzsBrHMB3Qf5oYVmr741pPwdU2m6FaZZmxh4ScHxFoDelFC9qG0PnAUl5qMFth8k= </span>',
      code_three: '<br/> <br/>-----END BITCOIN SIGNATURE-----',
      paragraph_two: 'Was soll das überhaupt bedeuten?',
    },
    derive_message_two: {
      paragraph_one:
        'Wir haben in Kapitel 4 gelernt, dass private Schlüssel riesige Zufallszahlen sind, die derjenige, der sie erzeugt hat, geheim hält. Mit Hilfe der Elliptischen Kurve können wir einen öffentlichen Schlüssel aus diesem privaten Schlüssel ableiten.',
      paragraph_two:
        'Der öffentliche Schlüssel kann als eindeutige Kennung weitergegeben werden, und der private Schlüssel wird verwendet, um zu beweisen, dass eine Person die Kontrolle über diese Kennung hat. Dieser Nachweis wird als SIGNATUR bezeichnet. Um eine Signatur zu erstellen, benötigst Du eine Nachricht und einen privaten Schlüssel. Jeder kann die Signatur mit einer Kopie der Nachricht und dem entsprechenden öffentlichen Schlüssel überprüfen.',
      paragraph_three:
        'Vanderpoole hat eine Unterschrift und eine Nachricht übermittelt. Wo ist der öffentliche Schlüssel?',
    },
    derive_message_three: {
      heading: 'Beginnen wir mit der Suche nach Satoshis Signatur',
      paragraph_one:
        'Hal Finney <link href="https://bitcointalk.org/index.php?topic=155054.0" target="_blank" className="underline">behauptete</Link>, dass Satoshi ihm die erste Bitcoin-Transaction überhaupt, bestätigt in Block #170, gesendet habe. Diese Transaktion kann in einem <Link href="https://blockstream.info/tx/f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16?expand" target="_blank" className="underline">Blockexplorer hier</Link> gefunden werden. In der scriptSig von input #0 gibt es ein Datenstück, das auf pushbytes... folgt. Suche es und füge es unten ein.',
      placeholder: 'Füge die Daten hier ein',
      success:
        'Sehr schön gemacht! Dies ist tatsächlich Satoshis Unterschrift, die den Transfer seiner Bitcoin an Hal Finney autorisiert.',
    },
    derive_message_four: {
      heading: 'Wo ist also sein öffentlicher Schlüssel?',
      paragraph_one:
        'Er wird zusammen mit den Bitcoin gespeichert, die von Satoshi durch das Mining von Block #9 erzeugt wurden.',
      paragraph_two:
        '<Link href="https://blockstream.info/tx/0437cd7f8525ceed2324359c2d0ba26006d92d856a9c20fa0241106ee5a597c9?output:0&expand" target="_blank" className="underline">Folge dem Link</Link> zur Ursprungstransaktion über dem Abschnitt Input #0. Dies ist die Transaktion, die Satoshi durch das Mining von Block #9 erstellt hat. Die Transaktion erzeugt 50 BTC und sperrt sie unter der Kontrolle von... einem öffentlichen Schlüssel! Suche die Daten, die mit 04... beginnen, im scriptPubKey.',
      paragraph_three:
        'Der öffentliche Schlüssel befindet sich zwischen den Skriptbefehlen OP_PUSHBYTES und OP_CHECKSIG. Füge ihn hier unten ein:',
      placeholder: 'Füge die Daten hier ein',
      success: 'Geschafft!',
    },
    derive_message_five: {
      paragraph_one:
        'Satoshi erstellte also eine Transaktion, die 50 Bitcoin an seinen öffentlichen Schlüssel schickte. Dann benutzte er seinen privaten Schlüssel, um eine Signatur zu erstellen, die 10 dieser Bitcoin an den öffentlichen Schlüssel von Hal Finney übertrug.',
      paragraph_two:
        'Als Nächstes müssen wir lernen, wie man eine Signatur überprüft. Aber etwas fehlt noch... wie lautet die Nachricht, die Satoshi signiert hat, um die Transaktion für Hal zu autorisieren?',
    },
    derive_message_six: {
      heading: 'Leite die Nachricht aus der Transaktion ab',
      paragraph_one:
        'Ein Blick auf die Blockexplorer-Webseite zeigt, dass eine Bitcoin-Transaktion aus vielen verschiedenen Teilen besteht. Einige Teile sind nur kleine Zahlen und einige Teile sind größere Datenblöcke. Das Bitcoin-Protokoll hat einen sehr spezifischen Algorithmus zur Erstellung von Nachrichten aus Transaktionen, sodass diese Nachrichten mit privaten Schlüsseln signiert werden können.',
      paragraph_two:
        'Wir fassen den hier skizzierten Prozess zusammen. Er verwendet praktischerweise genau <Link href="https://en.bitcoin.it/wiki/OP_CHECKSIG#Code_samples_and_raw_dumps" target="_blank" className="underline">diese Transaktion</Link> als Beispiel.',
      paragraph_three:
        'Zunächst benötigen wir die Rohbytes, aus denen die gesamte Transaktion besteht. <Link href="https://blockstream.info/api/tx/f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16/hex" target="_blank" className="underline">Unser Blockexplorer</Link> kann hier helfen. Verwende den API-Endpunkt "hex" und füge den gesamten Datenblock ein.',
      input_challenge_label: 'Füge die hex-kodierte Transaktion ein',
      success_message_line_one:
        'Dies ist die Rohtransaktion mit der Kennzeichnung der einzelnen Komponenten:',
      success_message_line_two: 'Version:',
      success_message_line_three: 'Anzahl an Inputs',
      success_message_line_four:
        'Hash der Tx (little-endian /"rückwärts"), aus der Input #0 stammt ,:',
      success_message_line_five:
        'Index des Outputs der Tx, die vom Input #0 aus ausgeben wird:',
      success_message_line_six:
        'scriptSig, um die Ausgabe des angegebenen Betrags zu genehmigen:',
      success_message_line_seven: 'Input #0 Sequenze:',
      success_message_line_eight: 'Anzahl an Outputs:',
      success_message_line_nine:
        'Wert von Output #0 (10 BTC oder 1,000,000,000 Satoshis):',
      success_message_line_ten:
        'Output #0 scriptPubKey (Hal Finney’s öffentlicher Schlüssel plus OP_CHECKSIG):',
      success_message_line_eleven:
        'Wert von Output #1 (40 BTC oder 4,000,000,000 satoshis):',
      success_message_line_twelve:
        'Output #1 scriptPubKey (Wieder Satoshi’s eigener öffentlicher Schlüssel, für das Wechselgeld):',
      success_message_line_thirteen: 'Locktime:',
    },
    derive_message_seven: {
      paragraph_one:
        'Es ist unmöglich, eine Nachricht zu signieren, die ihre eigene Signatur enthält, also muss scriptSig entfernt werden. Im Bitcoin-Protokoll wird sie tatsächlich durch den scriptPubKey des Transaktions-Outputs ersetzt, den wir ausgeben.',
      paragraph_two:
        'Den scriptPubKey haben wir bereits im vorherigen Schritt gefunden, Du kannst ihn in das erste Leerzeichen einfügen.',
      paragraph_three:
        'Das Letzte, das wir für unsere Transaktionsnachricht brauchen, ist eine "<span className="font-bold">Sighash Type Flag</span>." Wir werden uns das noch genauer im nächsten Kapitel anschauen, im Moment ist dies ausreichend. Wir fügen den Wert <span className="font-bold">01000000</span> einfach an das Ende der Nachricht.',
    },
    verify_signature_one: {
      title: 'Verifiziere die Signatur',
      heading: 'Endlich haben wir die Nachricht!',
      paragraph_one:
        'Wir haben auch eine Signatur, von der wir wissen, dass Satoshi sie mit seinem eigenen privaten Schlüssel erstellt hat, und wir haben seinen öffentlichen Schlüssel. Lass uns nun lernen, wie man die Signatur verifiziert, sodass wir im Anschluss versuchen können, Vanderpooles Signatur zu überprüfen.',
    },
    verify_signature_two: {
      title: 'Verifiziere die Signatur',
      heading: 'Hash des Transaktionsdigests (Verdaus)',
      paragraph_one:
        'Die serialisierten Transaktionsdaten, die wir im letzten Schritt zusammengestellt haben, sind eigentlich zu lang, um sie mit ECDSA zu signieren oder zu verifizieren.',
      paragraph_two:
        'Kennen wir eine Möglichkeit, große Datenmengen in konsistente, überschaubare Teile zu komprimieren? Aber sicher doch: Hashing.',
      paragraph_three:
        'Das Bitcoin-Protokoll verwendet einen doppelten SHA256-Digest (Verdau), um eine Transaktion in eine signierbare Nachricht zu komprimieren.',
      paragraph_four:
        'Sobald wir einen 32-Byte-Hash haben, werden diese Daten in eine Ganzzahl uminterpretiert. Ja, eine 32-Byte-Ganzzahl (das ist wirklich eine riesige Zahl)!',
      success: 'Sehr gut gemacht!',
    },
    verify_signature_three: {
      heading: 'Entschlüsseln der Signatur',
      label_one: 'Füge den R-Wert ein',
      label_two: 'Füge den S-Wert ein',
      paragraph_one:
        'Satoshis Signatur ist in einem System namens DER kodiert, das eine Untermenge von ASN.1 ist.',
      paragraph_two:
        'Es gibt zwei 32-Byte-Zahlen, die wir extrahieren müssen. Sie werden als R bzw. S bezeichnet und sind jeweils durch die Bytes 0220 in der DER-Sequenz vorangestellt. Anstatt den DER-Blob (Binary Large Object) vollständig zu dekodieren, suchen wir einfach nach den Präfixen und fügen die Werte R und S ein.',
      paragraph_three:
        '# Satoshis Unterschrift, aus dem Input-scriptSig der Transaktion an Hal Finney',
      paragraph_four:
        'sig_der = """304402204e45e16932b8af514961a1d3a1a25fdf3f4f7732e9d624c6c61548ab5fb8cd410220181522ec8eca07de4860a4acdd12909d831cc56cbbac4622082221a8768d1d09"""',
    },
    verify_signature_four: {
      heading: 'Entschlüssle den öffentlichen Schlüssel',
      label_one: 'Füge die X-Koordinaten ein',
      label_two: 'Füge die Y-Koordinaten ein',
      paragraph_one:
        'Wir haben in Kapitel 4 gelernt, dass öffentliche Schlüssel eigentlich Punkte in der ECDSA-Kurve sind, d.h. sie haben einen x- und y-Wert. Das erste Byte 04 bedeutet "unkomprimiert" (im Gegensatz zu 02 und 03, wie wir in Kapitel 4 gelernt haben). Entferne dieses erste Byte und die verbleibenden Daten sind 32-Byte-X- und -Y-Koordinaten. Kopieren und wieder einfügen.',
      paragraph_two:
        "# Satoshi's öffentlicher Schlüssel, aus dem Coinbase Output scriptPubKey von Block 9",
      paragraph_three:
        'pubkey = """0411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3"""',
    },
    verify_signature_five: {
      title: 'Verifiziere die Signatur',
      heading: 'Prüfe die Signatur!',
      success:
        'Du hast es geschafft! Du hast Satoshis Unterschrift verifiziert!',
      paragraph_one:
        'Jetzt haben wir alles, was wir brauchen, um einige ECDSA-Rechnungen durchzuführen.',
      paragraph_two:
        'Der ECDSA-Signaturprüfungsalgorithmus wird <Link className="underline" href="https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm#Signature_verification_algorithm" target="_blank">hier</Link> und <Link className="underline" href="https://www.secg.org/sec1-v2.pdf#page=52" target="_blank">hier</Link> erklärt.',
      paragraph_three:
        'Wir haben ein Group Element Objekt aus dem öffentlichen Schlüssel X und Y Elementen für Dich erstellt. Du musst die Implementierung der ECDSA-Signaturprüfungsfunktion  <span className="text-green">verify()</span> abschließen, die nur True zurückgeben sollte, wenn alles gültig ist!',
      paragraph_four:
        'Wir wissen, dass Satoshis Signatur gültig ist, da sie seit 2010 von jedem Bitcoin-Fullnode überprüft wurde! Wenn Dein Programm nicht True zurückgibt, ist etwas schief gelaufen.',
      python: {
        paragraph_five_part_one:
          'Tipp: die <span className="text-green">pow()</span>',
        paragraph_five_part_two:
          'Methode kann negative Exponenten und einen Modulus als Argumente akzeptieren. Mehr hier in der <Link className="underline" href="https://docs.python.org/3/library/functions.html#pow" target="_blank">Dokumentation</Link>.',
      },
      javascript: {
        paragraph_five_part_one:
          'Wir haben eine Hilfsfunktion <span className="text-green">invert()</span> bereitgestellt',
        paragraph_five_part_two:
          'die Du anstelle einer JavaScript-eigenen modularen Potenzierungsfunktion benötigst.',
      },
    },
    validate_signature_one: {
      title: 'Validiere die Signatur',
      heading: 'Bereite Vanderpooles Nachricht zur Überprüfung vor',
      paragraph_one:
        'Vanderpoole nutze ein <Link href="https://github.com/bitcoin/bips/blob/master/bip-0137.mediawiki" target="_blank" className="underline">Bitcoin-Nachrichten-signier-Protokoll</Link> für seine Show. Für die Berechnung wird derselbe Algorithmus verwendet, den wir bereits definiert haben, aber die Aufbereitung der Daten ist ein wenig anders.',
      paragraph_two:
        "Zunächst müssen wir seine Nachricht in ein Array von Bytes kodieren, das der folgenden Vorlage entspricht:',",
      paragraph_three:
        'Dann werden wir diesen Datenblock mit einem doppelten SHA256-Hash versehen und diesen Hash in eine Ganzzahl umwandeln. Vervollständige die Funktion encode_message(). Sie sollte einen 32-Byte-Hex-Wert zurückgeben.',
      success: 'Sehr gut gemacht',
    },
    validate_signature_two: {
      heading: 'Bereite Vanderpooles Nachricht zur Überprüfung vor',
      paragraph_one:
        'Das von Vanderpoole verwendete Bitcoin-Protokoll zum Signieren von Nachrichten gibt base64 für die Signatur vor. Wir müssen diese base64-Zeichenfolge in eine 65-Byte-Sequenz dekodieren. Für den Moment können wir das erste Byte der Metadaten außer Acht lassen. Der Rest der Daten sind die 32-Byte-Werte r und s, die wir in Schritt 6 kennengelernt haben.',
      javascript: {
        paragraph_two:
          'Verfollständige die Funktion <span className="italic">decodeSig()</span>. Sie sollte ein Array mit den [r, s]-Werten als BigInts zurückgeben.',
      },
      python: {
        paragraph_two:
          'Verfollständige die Funktion <span className="italic">decode_sig()</span>. Sie sollte ein Tuple mit den (r, s) Werten zurückgeben.',
      },
    },
    validate_signature_three: {
      title: 'Validiere die Signatur',
      heading: 'Also, ist Vanderpoole ein Lügner?!',
      paragraph_one:
        'Es gibt nicht mehr viel zu tun, außer alles zusammenzufügen und das Programm zu starten! Trommelwirbel bitte...',
      success: 'Signatur ist nicht valide',
    },
    validate_signature_four: {
      title: 'Validiere die Signatur',
      heading: 'Wie hat Vanderpoole diese Signatur überhaupt erstellt?',
      paragraph_one:
        'Holokatze meldet sich zu Wort und sagt, dass ein Überläufer von BitRey uns die tatsächliche Adresse geschickt hat, die Vanderpoole genutzt hat und die ist definitiv nicht die Adresse von Satoshi!',
      paragraph_two: 'mit dem entsprechenden öffentlichen Schlüssel:',
      paragraph_three:
        'Kannst Du die Nachricht und die Signatur von Vanderpoole mit DIESEM Schlüssel überprüfen?',
      success: 'Die Signatur ist valide!',
    },
    outro_one: {
      title: 'Outro',
      heading: 'Vanderpoole hat gelogen!',
      paragraph_one:
        'Die ganze Geschichte über seine Familie war eine Erfindung und Du hast es der ganzen Welt bewiesen. Dies wirft einen großen Schatten auf seine Glaubwürdigkeit und die Glaubwürdigkeit seines Unternehmens. Aber das ist es, was man bekommt, wenn man trickst.',
    },
    resources: {
      derive_message: {
        op_pushdata_heading: 'OP_PUSHDATA',
        op_pushdata_paragraph_one:
          'OP_PUSHDATA im Bitcoin-Skript spielt eine entscheidende Rolle bei der Erleichterung des Einfügens beliebiger Daten in die Blockchain. Es handelt sich um einen Opcode, der das Einfügen von Datenelementen unterschiedlicher Größe ermöglicht, wodurch die Bitcoin-Skriptsprache vielseitiger wird. Dieser Opcode ist besonders wichtig, um die Implementierung verschiedener Smart-Contract-Funktionen und benutzerdefinierter Transaktionsarten zu ermöglichen. Du kannst mehr über einige dieser OP_CODES und weiteres <Link href="https://en.bitcoin.it/wiki/Script#Constants" target="_blank" className="underline">hier</Link> lesen.',
      },
      verify_signature: {
        eliptic_curve_heading:
          'Elliptic Curve Digital Signature Algorithmus (ECDSA)',
        eliptic_curve_paragraph_one:
          'ECDSA ist ein kryptographischer Algorithmus, der von Bitcoin verwendet wird, um sicherzustellen, dass Gelder nur von ihren rechtmäßigen Eigentümern ausgegeben werden können. Ein öffentlicher Schlüssel wird von einem privaten Schlüssel durch elliptische Kurvenmultiplikation abgeleitet, was rechnerisch einfach ist. Die Umkehrung dieses Prozesses zur Ableitung des privaten Schlüssels aus dem öffentlichen Schlüssel ist jedoch rechnerisch nicht machbar. Diese Einwegfunktion ist ein Eckpfeiler der Sicherheit von Bitcoin.',
        public_private_key_heading: 'Public and Private Keys',
        public_private_key_paragraph_one:
          'In Bitcoin wird ein Schlüsselpaar verwendet, um sichere Transaktionen zu gewährleisten. Der private Schlüssel, der geheim gehalten wird, wird verwendet, um Transaktionen zu signieren und den Besitz einer Bitcoin-Adresse zu beweisen. Der öffentliche Schlüssel, der vom privaten Schlüssel abgeleitet ist, kann weitergegeben werden und wird verwendet, um zu überprüfen, ob eine Unterschrift vom Inhaber des privaten Schlüssels geleistet wurde, ohne den privaten Schlüssel preiszugeben.',
        signature_verification_heading: 'Signatur Verifizierung',
        signature_verification_paragraph_one:
          'Die Verifizierung von Signaturen ist in Bitcoin entscheidend, um zu bestätigen, dass eine Transaktion vom Inhaber des privaten Schlüssels autorisiert wurde. Im Kontext von ECDSA beinhaltet sie die Überprüfung, ob eine Signatur (bestehend aus zwei Zahlen, r und s) für einen bestimmten öffentlichen Schlüssel und eine Nachricht gültig ist. Diese Überprüfung gewährleistet die Integrität und Authentizität einer Transaktion.',
        finite_field_arithmetic_heading: 'Arithmetik der endlichen Felder',
        finite_field_arithmetic_paragraph_one:
          'Diese Art der Arithmetik, die in ECDSA verwendet wird, umfasst Zahlen innerhalb eines festen Bereichs oder Felder. Operationen wie Addition, Subtraktion, Multiplikation und die Suche nach modularen Inversen werden in Bezug auf die Größe dieses Feldes durchgeführt. Dies ist wesentlich für die elliptischen Kurvenberechnungen in der Bitcoin-Kryptographie.',
        ge_and_fe_heading: 'Gruppen Elemente (GE) und Felder Elemente (FE)',
        ge_and_fe_paragraph_one:
          'Im Zusammenhang mit der Kryptographie elliptischer Kurven stellt ein Gruppenelement normalerweise einen Punkt auf der elliptischen Kurve dar. In der Aufgabe bezieht sich GE auf einen solchen Punkt mit bestimmten x- und y-Koordinaten. FE steht für ein Element des endlichen Feldes, das für Berechnungen innerhalb der Feldbeschränkungen verwendet wird.',
        modular_inverse_heading: 'Modularer Kehrwert',
        modular_inverse_paragraph_one:
          'Der modulare Kehrwert einer Zahl a modulo m ist eine Zahl b, für die (a * b) % m = 1 gilt. Die Ermittlung des modularen Kehrwerts ist ein wichtiger Schritt bei der ECDSA-Signaturprüfung. Er wird bei der Berechnung von u1 und u2 während des Verifikationsprozesses verwendet.',
      },
      validate_signature: {
        message_verification_heading:
          'Die Wichtigkeit der Nachrichtenverifizierung',
        message_verification_paragraph_one:
          'Die Nachrichtenverifizierung erhöht die Sicherheit der Kommunikation innerhalb des Bitcoin-Ökosystems. Sie ermöglicht es den Parteien, die Authentizität und Integrität von Nachrichten zu verifizieren, was in Situationen wertvoll ist, in denen Vertrauen und Verifikation essentiell sind, wie z.B. bei Peer-to-Peer-Transaktionen oder der Kommunikation zwischen Parteien in einem Smart Contract. Darüber hinaus dient die Nachrichtenüberprüfung als Grundlage für verschiedene Anwendungen, einschließlich der Identitätsüberprüfung und der Bescheinigung des Eigentums an einer bestimmten Bitcoin-Adresse. Sie fügt eine Ebene der kryptographischen Sicherheit hinzu und verstärkt die vertrauenslose und dezentrale Natur des Bitcoin-Netzwerks.',
      },
    },
  },

  chapter_six: {
    title: `Angriff ist die beste Verteidigung`,
    intro_one: {
      title: 'Intro',
      paragraph_one:
        '—SATOSHI NAKAMOTO: ”Großartige Arbeit. Jetzt kann die Welt mit eigenen Augen sehen, dass Vanderpoole ein Betrüger ist. Auch wenn einige es noch nicht glauben, werden sie es tun, bevor unsere Arbeit getan ist.” – Satoshi Nakamoto',
      paragraph_two:
        '—Du hälst einen Moment inne und stellst fest, dass jede Nachricht bis zu diesem Zeitpunkt mit "Satoshi Nakamoto" unterzeichnet war. Du hattest einfach angenommen, dass es sich um einen pseudonymen Namen handelt, der von jemandem verwendet wird, der sich an die Grundprinzipien von Bitcoin hält. Sicherlich konnte er nicht der echte Satoshi Nakamoto sein. Aber schließlich beschließst Du, dass es sich lohnt zu fragen.',
      paragraph_three:
        '—”Das klingt jetzt vielleicht blöd, aber sind Sie der echte Satoshi?”',
      paragraph_four:
        '—HOLOKATZE: “Das ist wohl kaum das Einzige, was Dich bisher dumm erscheinen ließ.”',
    },
    intro_two: {
      paragraph_one:
        '—HOLOKATZE: “Das ist wohl kaum das Einzige, was Dich bisher dumm erscheinen ließ.”',
      paragraph_two:
        '—SATOSHI NAKAMOTO: “Bitcoin hat sich vor vielen, vielen Jahren weit außerhalb der Kontrolle seines Schöpfers bewegt. Es würde keine Rolle spielen, ob Vanderpoole oder ich Satoshis Enkel wären. Bitcoin wird von der Gemeinschaft definiert und kann nicht von einem einzelnen Individuum oder einer Entität vereinnahmt werden - Satoshi eingeschlossen. Dies zu beweisen, ist der wahre Kampf. Ich hoffe, es macht Dir nichts aus, aber ich habe Deinen exzentrischen, freiberuflichen Reporterfreund gebeten, sich zu melden.”',
      paragraph_three: '—Er hat was? Ding.',
      paragraph_four: '—HOLOCAT: Vergiss nicht auf meine Nase zu drücken.',
      paragraph_five:
        '—MIKE RAMEN: “Du hast Mumm. Aber Du brauchst mehr. Was du entdeckt hast, ist nur der Anfang. Es gibt noch mehr zu dieser Geschichte, aber wir müssen Vanderpooles Privatinsel besuchen, um es zu bekommen. Das wird teuer, also könnte ich deine Hilfe dabei gebrauchen, meine Gelder von der Multi-signature-Wallet abzuziehen, bei der du mir geholfen hast, sie einzurichten. Du hast immer noch einen meiner Schlüssel, richtig?”',
    },
    paragraph_one:
      'Vanderpoole hat es auf Dich abgesehen, jetzt, da Du ihn als Betrüger entlarvt hast. Aber trotzdem klammern sich viele verängstigte Menschen weiterhin an den Mythos, den er um sich selbst, seine Familie und ihre angebliche Abstammung geschaffen hat. Die Zeiten sind beängstigend, und die Menschen brauchen einen Helden. Leider ist er für viele der beste, den sie haben.',
    in_out_two: {
      title: 'Die Details kennen',
      paragraph_one:
        'Mike Ramen gibt Dir eine Adresse, an die Du Deinen Beitrag von 1 BTC schicken kannst:',
      paragraph_two:
        'Hm, diese Adresse sieht viel länger aus als Deine! Ich frage mich, warum...',
      paragraph_three: `Wie auch immer, wir müssen eine Transaktion erstellen und unterschreiben, die einen Deiner 1,61 BTC an diese Adresse sendet. Wir haben uns Satoshis Transaktionsstruktur in Kapitel 5 angeschaut, aber Deine Transaktion wird ein bisschen anders sein. Die Technologie hat sich seit Block 170 stark verbessert, und Bitcoin-Transaktionen sind jetzt Version 2 und folgen einem neuen Protokoll namens Segregated Witness.`,
    },
    in_out_three: {
      title: 'Die Details kennen',
      paragraph_one:
        'Segregierte Witness-Transaktionen funktionieren genauso wie ihre alten Vorgänger. Es gibt ein paar globale Werte wie Version und Sperrzeit (Locktime). Es gibt eine Reihe von Eingängen (UTXOs, die wir ausgeben wollen) und eine Reihe von Ausgängen (neue UTXOs, die wir erstellen wollen, damit andere Leute sie in Zukunft ausgeben können). Es wird auch eine Reihe von Witnessen geben, einen für jeden Input. Dort werden Signaturen und Skripte anstelle von scriptSig abgelegt.',
      paragraph_two:
        'Die Serialisierung zur Übermittlung für alle diese Komponenten ist <Link href="https://en.bitcoin.it/wiki/Protocol_documentation#tx" target="_blank" className="underline">hier</Link>  und <Link href="https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch06.asciidoc" target="_black" className="underline" >hier</Link> dokumentiert.',
      paragraph_three:
        'Und denk bitte daran: Integers werden in Bitcoin als little-endian serialisiert!',
    },
    put_it_together_one: {
      title: 'Das Ganze zusammenfügen',
    },
    outro_one: {
      title: 'Outro',
    },
  },

  chapter_seven: {
    title: `Einundzwanzig`,
  },

  chapter_eight: {
    title: 'Eine Frage der Nachhaltigkeit',
  },

  chapter_nine: {
    title: `Nicht rechnen, sondern prüfen.`,
  },

  chapter_ten: {
    title: '10 Milliarden Verbindungen',
  },

  ///CHALLENGE PAGE
  challenge_list: {
    coming_soon: 'Kommt demnächst. Bleib dran.',
  },

  chapter: {
    chapter_locked_one: 'Vollende das Kapitel',
    chapter_locked_two: 'zur Freischaltung.',
    coming_soon: 'Kommt demnächst. Bleib dran.',
    description:
      'Entdecke die Geheimnisse von Satoshi und lerne mehr über das Bitcoin-Netzwerk während der Reise.',
  },

  hero: {
    title: 'Rette Satoshi',
    description:
      'Code dir den Weg durch die Geheimnisse des Bitcoin-Netzwerks.',
    start_journey: 'Start',
    tell_more: 'Zeig mir mehr',
  },

  footer: {
    paragraph_one: 'Eine open-source Entwicklung von der Bitcoin Community.',
    link: 'Sieh dir den Code an',
  },

  navbar: {
    intro: 'Intro',
    chapter: 'Kapitel',
    chapter_complete: 'Kapitel abgeschlossen',
    challenge: 'Herausforderung',
    help_tooltip: 'Brauchst Du Hilfe?',
  },

  modal_signin: {
    heading: 'Anmelden',
    paragraph_one:
      'Gib unten Deinen privaten Schlüssel ein, um Dein Konto und Deinen Fortschritt wiederherzustellen.',
    prompt: 'Gib deinen privaten Schlüssel ein',
    confirm: 'Anmelden',
    create_account: 'Du hast noch kein Konto?',
  },

  modal_logout: {
    heading: 'Du bist angemeldet',
    paragraph_one:
      'Deine Sitzung bleibt aktiv, bis Du dich über den Button unten abmeldest.',
    signout: 'Abmelden',
  },

  modal_signup: {
    heading: 'Deinen Fortschritt speichern',
    paragraph_one:
      'Kopiere und speichere einen einfachen Code, um Deinen Fortschritt in diesem Browser zu speichern und zu laden. Wenn Du bereits einen Code hast, lade Deinen Fortschritt hier.',
    subheading_one: 'Wähle einen Avatar',
    subheading_two: 'Sichere Deinen persönlichen Code',
    generate:
      'Alles bereit? Code kopiert und gesichert? Vergewissere dich, denn wenn Du ihn verlierst, kann er nicht wiederhergestellt werden.',
    confirm: 'Erledigt',
    acknowledged:
      'Ich bestätige, dass ich diesen privaten Schlüssel gespeichert habe und weiß, dass ich ihn in Zukunft für Herausforderungen benötigen werde.',
  },

  disclaimer: {
    description: `Wir freuen uns, dass Du in diese Welt hinein tauchst. Beachte, dass einige Herausforderungen grundlegende Programmierkenntnisse erfordern (Tipps sind verfügbar). Probiere sie aus und teile uns Deine <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf1xpNqUYJyvYL5IZDnxy78273pkqzfYW2Hf91H4Do4KHgy9g/viewform?usp=sf_link" className="underline">Erfahrungen</Link> mit.`,
  },

  hasher: {
    placeholder: 'Tippe hier...',
    return_hash:
      'Nachfolgend siehst du Deine Eingabe umgewandelt in einen Hash',
  },

  hashrate: {
    start: 'Start',
    running: 'Läuft',
    blocks_found: 'Blöcke gefunden',
    hashrate: 'Hashrate',
    partial_solutions: 'Teilweise Lösungen',
  },

  runner: {
    run: 'Starte das Skript',
    running: 'Läuft',
    pause: 'Pause',
    result: 'Ergebnis',
    evaluation: 'Evaluation',
    script_output: 'Skript Ausgabe',
    waiting: 'Warte auf Deinen Input von oben...',
  },
  notfound: {
    first: 'Hmm...wo sind wir?',
    second: 'Es ist nicht ganz klar wo oder was für ein Ort das ist.',
    third: 'Wir mögen uns in Raum (und Zeit) verloren haben.',
    back_safety: 'Zurück Richtung Sicherheit',
  },
  error: {
    first: 'Etwas ist falsch!',
    second:
      'Holokatze hat wohl wieder ein paar Kabel angeknabbert. Böse Katze!',
    reload: 'Erneut versuchen',
  },
  help_page: {
    main_heading: 'Ressourcen zum Lernen',
    main_subheading:
      'Welche hilfreichen Informationen und Ressourcen können wir für das weitere Lernen zur Verfügung stellen?',
    tips_heading: 'Tipps',
    tips_subheading:
      'Welche spezifischen Tipps können/ wollen wir den Lernenden geben, wenn sie nicht weiterkommen?',
    spoilers_heading: 'Spoilers',
    spoilers_confirm: 'Ja, ich möchte die Lösung sehen',
    solution_one: 'Lösung für den ersten Teil dieser Aufgabe',
    solution_two: 'Lösung für den zweiten Teil dieser Aufgabe',
    solution_three: 'Lösung für den dritten Teil dieser Aufgabe',
    solution_four: 'Lösung für den vierten Teil dieser Aufgabe',
    solution_five: 'Lösung für den fünften Teil dieser Aufgabe',
    solution_six: 'Lösung für den sechsten Teil dieser Aufgabe',
    solution_seven: 'Lösung für den siebten Teil dieser Aufgabe',
    solution_eight: 'Lösung für den achten Teil dieser Aufgabe',
    solution_nine: 'Lösung für den neunten Teil dieser Aufgabe',
    solution_ten: 'Lösung für den zehnten Teil dieser Aufgabe',
  },
}
export default translations
