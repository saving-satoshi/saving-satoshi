const translations = {
  shared: {
    next: 'Continuar',
    start: 'Começar',
    copy: 'Copiar',
    info: 'Info',
    copy_acknowledged: 'Copiado!',
    about: 'Sobre',
    chapter: 'Capítulo',
    chapters: 'Capítulos',
    challenge: 'Desafio',
    challenges: 'Desafios',
    coming_soon: 'Em breve',
    start_chapter: 'Iniciar capítulo',
    back: 'Voltar',
    end: 'Final',
    close: 'Fechar',
    poweroff: 'Voltar a seleção de capítulos',
    loading: 'Carregando',
    bitcoin_dev_project: 'Projeto Dev Bitcoin',
  },
  ///ABOUT PAGE
  about: {
    title: 'Sobre',
    mobile_title: 'Sobre o que é',
    subtitle:
      'O ano é 2139. O último bitcoin está a duas semanas de ser minerado. Por meses, uma contagem regressiva acontece na Praça Satoshi.',
    intro:
      'O mundo aguarda pelo último bloco. Então, de repente, a rede é interrompida. <br><br>Você recebeu um holocat de alguém usando o nome Satoshi Nakamoto. (É como qualquer outro e-holograma, mas esse tem forma de gato). Você toca no nariz do holocat para abri-lo, curioso para ouvir o que tem a dizer...',

    project: {
      title: 'Bitcoin é sério, mas aprender sobre ele não precisa ser',
      paragraph_one: `Saving Satoshi é um jogo de RPG interativo e descontraído sobre a tecnologia bitcoin. Ele combina desafios divertidos e inovadores com narrativa e mecânica de jogo para criar um ponto de entrada suave para o desenvolvimento de bitcoin.`,
      paragraph_two: `Ele é construído com diversão para programadores curiosos e qualquer pessoa que queira aprender como o bitcoin <span className="italic">realmente</span> funciona. É para aqueles que viram a magia do software de código aberto do bitcoin (₿OSS) e estão procurando maneiras de começar a contribuir.`,
      paragraph_three: `Cada capítulo está repleto de conteúdo de lições baseadas em código, simulações e exercícios de programação para tornar o aprendizado dos detalhes esotéricos da tecnologia bitcoin mais agradável.`,
      paragraph_four: `Com exemplos simples e diretos, os jogadores constroem bases sólidas antes de adicionar complexidade. Através de uma experiência de usuário imersiva, visuais ricos e interações perfeitas, os alunos são levados a uma jornada por uma variedade de tópicos, incluindo:`,
      chapter_topics: {
        list_one: `Encontrar e decodificar a mensagem secreta no bloco de gênese`,
        list_two: `Funções de hash e prova de trabalho`,
        list_three: `A dinâmica da mineração em pool`,
        list_four: `O básico da criptografia de curva elíptica e como derivar um endereço de pares de chaves pública-privada`,
        list_five: `Assinatura e verificação de mensagens ECDSA`,
        list_six: `Construindo uma transação do zero`,
        list_seven: `Montando transações para construir um modelo de bloco`,
        list_eight: `Usando a API RPC do Bitcoin Core e calculando o subsídio do bloco`,
        list_nine: `Bitcoin Script`,
        list_ten: `Como funciona a rede Lightning`,
      },
      paragraph_five: `Mas não se trata apenas do currículo. Acreditamos que a educação sobre bitcoin pode ser tão criativa e única quanto a própria tecnologia. É por isso que o jogo aborda muitos outros elementos fascinantes do bitcoin, como cultura, história e design.`,
      paragraph_six: `Para nós, o bitcoin é uma força positiva no mundo. Este projeto é construído por um grupo apaixonado de contribuidores sob os mais altos padrões, e é 100% gratuito e de código aberto (FOSS). Para saber mais sobre como o Saving Satoshi foi feito, consulte nosso <Link href="https://bitcoin.design/guide/case-studies/saving-satoshi" className="underline" target="_blank">estudo de caso</Link> no Guia de Design do Bitcoin.`,
      paragraph_seven: `Desde jogar o jogo, até realizar um workshop, até contribuições de código, existem muitas maneiras de se juntar à comunidade Saving Satoshi. Ficaríamos encantados em tê-lo conosco. Para entrar em contato, siga <Link href="https://github.com/saving-satoshi/saving-satoshi" className="underline" target="_blank">Saving Satoshi no GitHub</Link> e junte-se ao <Link href="https://discord.gg/eBGRaCSjg5" className="underline" target="_blank">canal #saving-satoshi</Link> no Discord da Comunidade de Design do Bitcoin.`,
      paragraph_eight: `Você também pode se conectar conosco no <Link href="https://x.com/savingsatoshi" className="underline" target="_blank">X</Link>, <Link href="https://njump.me/npub1vy6wcgw6jhhtcmpawvlnsfx7g8qt8r40z7qlks9zwa4ed57vm5eqx527hr" className="underline" target="_blank">nostr</Link>, e <Link href="https://bsky.app/profile/bitcoindevs.bsky.social" className="underline" target="_blank">Bluesky</Link>. Adoramos receber mensagens e ouvir nossos usuários!`,
    },

    contributing: {
      title: 'Como contribuir',
      paragraph_one:
        'Somos um projeto de código aberto, então todas as portas estão abertas para que possa ajudar a moldá-lo.',

      feedback: {
        title: 'Feedback',
        paragraph_one:
          'Uma excelente forma de contribuir é ler o Capítulo 1 e dar-nos a sua opinião sobre a experiência geral que possa ter, utilizando <a href="https://docs.google.com/forms/d/e/1FAIpQLSf1xpNqUYJyvYL5IZDnxy78273pkqzfYW2Hf91H4Do4KHgy9g/viewform" target="_blank" rel="noreferrer">este formulário</a>.',
      },

      contribute: {
        title: 'Contribua',
        paragraph_one:
          'Todas as sugestões são bem-vindas, incluindo alterações de conteúdo, mecânicas de jogo, enfim, tudo. Também estamos sempre à procura de ajuda com revisões e <a href="https://leaf-singer-0fc.notion.site/How-to-QA-5177e63f65a4406da01bc57d886b5ac2" target="_blank" rel="noreferrer">controle de qualidade das alterações de código</a>. Para melhorias de código, pode abrir diretamente um problema ou submeter um pedido de alteração (Pull Request) no GitHub.',
        paragraph_two:
          'Se você quiser se envolver com design, história ou qualquer outra coisa, junte-se a nós no canal #saving-satoshi no <a href="https://discord.gg/DC8Dys4G3h" target="_blank" rel="noreferrer">Bitcoin Design Discord</a>. Mencione como gostaria de contribuir e nós o ajudaremos a indicar a direção certa.',
      },
    },

    contributors: {
      title: 'Divirta-se!',
      contributions_by: 'Contribuições por',
      many_more:
        'e <a href="https://github.com/saving-satoshi/saving-satoshi/graphs/contributors" target="_blank" rel="noreferrer">muitos outros</a>.',
    },

    satoshi_needs_you: 'Rápido, o Satoshi precisa de você.',
    privacy: {
      title: 'Nosso compromisso com a privacidade',
      paragraph_one:
        'Na Saving Satoshi, estamos profundamente comprometidos em garantir a privacidade e a segurança de nossos usuários. Acreditamos na transparência e queremos que você entenda como e por que rastreamos o uso do aplicativo. Para isso, usamos uma ferramenta poderosa chamada <Link href="https://umami.is/" className="underline" target="_blank">Umami</Link>.',
      sub_heading_one: 'O que é Umami?',
      paragraph_two:
        'A Umami é uma plataforma open-source (código aberto) de análise que nos ajuda a reunir insights essenciais sobre como você usa nosso aplicativo. Isso nos permite tomar decisões baseadas em dados e aprimorar continuamente nosso produto para atender melhor às suas necessidades.  Você pode visualizar o painel da Umami <Link className="underline" href="https://visits.bitcoindevs.xyz/share/zFmD5WIus09mDxEf/Saving%20Satoshi" target="_blank">aqui</Link>.',
      sub_heading_two: 'Quais dados coletamos?',
      paragraph_three:
        'Fique tranquilo, pois coletamos apenas dados não pessoais e anônimos, como:',
      list_item_one_title: 'Melhoria do produto:',
      list_item_one_text:
        'Usamos os dados para identificar áreas em que nosso aplicativo pode ser aprimorado. Ao entender como você usa nosso aplicativo, podemos torná-lo mais eficiente, fácil de usar e seguro.',
      list_item_two_title: 'Compatibilidade:',
      list_item_two_text:
        'Compreender os dispositivos e as plataformas que você usa nos permite otimizar nosso aplicativo para várias configurações, garantindo que ele funcione perfeitamente para você.',
      sub_heading_three: 'Sua privacidade é importante',
      paragraph_four:
        'Queremos enfatizar que sua privacidade é de extrema importância para nós. Não coletamos nenhuma informação de identificação pessoal, e os dados que coletamos são usados exclusivamente com a finalidade de aprimorar nosso aplicativo. Seus dados nunca são compartilhados ou vendidos a terceiros.',
      paragraph_five:
        'Se tiver alguma preocupação ou dúvida sobre nossas práticas de coleta de dados ou políticas de privacidade, não hesite em entrar em contato conosco. Temos o compromisso de oferecer a você uma experiência transparente e segura ao usar nosso aplicativo.',
    },
  },

  ///CHAPTERS TITLE PAGE
  chapter_one: {
    title: 'Segredos à vista de todos',
    paragraph_one:
      'O ano é 2139. O último bitcoin está a duas semanas de ser minerado. Há meses, uma contagem regressiva acontece na Praça Satoshi. Até esse momento, cada bloco teve algum tipo de recompensa em bitcoin, um subsídio. Essa é a única forma de surgirem novos bitcoins, mas isso está prestes a mudar. Depois de mais de cem anos, o cronograma de emissão do bitcoin está chegando ao fim. O mundo aguarda o último bloco com um subsídio para ser minerado. É um evento histórico. O fim de uma era.',
    paragraph_two: 'De repente, a rede é interrompida.',

    ///CHAPTER 1
    intro_one: {
      title: 'Introdução',
      nav_title: 'Protesto dos mineradores',
      paragraph_one: 'Momentos depois, sua Hover Screen é ativada.',
      paragraph_two: `—Deborah Chunk: "Thomas Vanderpoole, estiloso CEO da BitRey. Você administra, de longe, o maior pool de mineração de bitcoin do mundo. Você também fabrica máquinas de mineração de bitcoin. O que está acontecendo? O bitcoin está morrendo?"`,
      paragraph_three: `—Vanderpoole: "Vamos começar do começo. Sim, eu sou, Deborah, e sim, administro. Os Vanderpooles - meu estiloso pai e o seu estiloso pai antes dele - estão minerando desde o bloco 21.000. É por isso que posso dizer com segurança que os mineradores de todo o mundo estão causando esses atrasos ao desligar suas máquinas. Isso é um protesto. Ninguém quer que o bitcoin pare de ser emitido aos 21 milhões. Os mineradores não podem sobreviver apenas com as taxas."`,
      start: 'Continuar',
    },

    intro_two: {
      title: 'Gênesis',
      nav_title: 'O holocat de Satoshi',
      paragraph_one:
        'Em seu Relógio multi-uso, você recebe um holocat da marca WhiskerWare de alguém que usa o nome Satoshi Nakamoto. (É como qualquer outro holograma eletrônico, mas este tem o formato de um gato.) Você abre o hologato tocando em seu nariz.',
      paragraph_two:
        '—"O Bitcoin não está morrendo, mas precisa de sua ajuda. Não se esqueça do gato." - Satoshi Nakamoto',
      paragraph_three:
        '—Satoshi? O Satoshi? Do "white paper"? Não, não pode ser. Eles estão supostamente mortos há mais de um século.',
      paragraph_four: 'Será mesmo?',
      paragraph_five:
        'Holocat: "É melhor você começar a trabalhar. Eu posso ajudar, mas você tem que começar já, miau!".',
    },

    genesis_one: {
      title: 'Gênesis',
      nav_title: 'Segredo de Gênesis',
      heading: 'Seu primeiro desafio',
      paragraph_one:
        'O Bitcoin é um dinheiro resistente à censura. Qualquer pessoa pode enviar dinheiro transmitindo uma transação para a rede. Após a transmissão, as transações são agrupadas em blocos pelos mineradores. Os mineradores competem com outros mineradores pelo privilégio de construir a blockchain. É isso que mantém o bitcoin descentralizado.',
      paragraph_two:
        'Satoshi Nakamoto, o pseudônimo inventor do bitcoin, também minerou o primeiro bloco de bitcoin. Ele deixou para o mundo uma mensagem secreta na primeira transação de bitcoin que já foi feita. Seu primeiro desafio é encontrá-la e decodificá-la.',
    },

    genesis_two: {
      title: 'Gênesis',
      nav_title: 'Encontre a mensagem',
      heading: 'Encontre a mensagem oculta',
      paragraph_one:
        'Vamos encontrar o primeiro bloco no blockchain do bitcoin. Clique no botão abaixo para abrir um <Tooltip id="genesis_two_paragraph_one" content="chapter_one.genesis_two.tooltip_block_explorer" theme="bg-[#30435b]">block explorer</Tooltip> exatamente no bloco 0, que é chamado de bloco genesis.',
      paragraph_two:
        'Role para baixo e expanda os detalhes da única transação que está armazenada nesse bloco. Encontre a entrada chamada "Coinbase". Agora procure o rótulo "SCRIPTSIG (<Tooltip id="genesis_two_paragraph_two" content="chapter_one.genesis_two.tooltip_hex" theme="bg-[#30435b]">HEX</Tooltip>)". O valor próximo a ele é uma mensagem codificada.',
      paragraph_three: 'Copie esse valor e cole-o no bloco de código.',
      tooltip_block_explorer:
        'Um <a href="https://bitcoinops.org/en/topics/block-explorers/" target="_blank" rel="noreferrer">explorador de blocos</a> é uma ferramenta útil para procurar informações sobre transações de bitcoin rapidamente.',
      tooltip_hex:
        'Abreviação de hexadecimal, um sistema numérico que representa números usando uma base de 16.',
      view_block_0: 'Ver Bloco 0',
      placeholder: 'Cole o valor que você encontrou aqui',
    },

    genesis_three: {
      title: 'Gênesis',
      nav_title: 'Decodifique a mensagem',
      heading: 'Vamos decodificar a mensagem',
      paragraph_one:
        'A mensagem que você encontrou foi codificada em um formato chamado HEX. Agora, executaremos um comando para transformá-la em ASCII, que poderemos ler.',
      paragraph_two:
        'Copie e cole o comando abaixo no Terminal, no bloco de código, e pressione "Enter".',
      terminal_challenge_lines: `Digite seus comandos aqui e pressione Enter...\n A variável $scriptSigHex já está definida para você.\n\n var $scriptSigHex = '04fff...e6b73'`,
      waiting_for_input: 'Aguardando que você escreva e execute o script...',
      success: `Excelente trabalho! A mensagem decodificada faz referência à primeira página do <Link href="https://en.bitcoin.it/wiki/Genesis_block" target="_blank" className="underline">The Times</Link> de 3 de janeiro de 2009, o mesmo dia em que Satoshi minerou o bloco genesis. Legal! Essa mensagem também nos dá uma ideia de sua motivação para criar o bitcoin.\n\n Vamos continuar`,
    },

    genesis_four: {
      title: 'Gênesis',
      nav_title: 'Seu primeiro sucesso',
      subtitle: 'Parabéns! Você concluiu o primeiro desafio!',
      paragraph_one:
        'Você encontrou a mensagem secreta de Satoshi Nakamoto embutida no bloco de gênese. É hora de expandir o que você acabou de aprender. Decodifique uma pista vital sobre a história no próximo desafio.',
    },

    transacting_one: {
      title: 'Transacionando',
      nav_title: 'O que há em uma transação',
      heading: 'O que há em uma transação?',
      paragraph_one:
        'Dois componentes principais de uma transação são os Inputs(entradas) e os Outputs(saídas). No exercício anterior, decodificamos uma mensagem secreta encontrada dentro de uma entrada da transação. Desta vez, decodificaremos uma mensagem que pertence a uma saída.',
      paragraph_two:
        'Para a transação a seguir, identificaremos uma saída de tipo OP_RETURN.',
    },

    transacting_two: {
      title: 'Transacionando',
      nav_title: 'Encontre o OP_RETURN',
      heading: 'OP_RETURN',
      paragraph_one:
        'Há outra maneira de ocultar mensagens secretas nas transações. O Bitcoin tem um tipo especial de código chamado OP_RETURN que permite aos usuários anexar mensagens ás saídas das transações. Vamos ver se conseguimos encontrar uma.',
      paragraph_two:
        '1. Clique <Link href="https://blockstream.info/tx/ff9148605a772a51cba39004df5fb042d40515967a3e38ff5294cfd017c452a9" target="_blank" className="underline">aqui</Link> para ver uma transação específica.',
      paragraph_three:
        '2. Abra os detalhes e localize a parte que é do tipo "OP_RETURN".',
      paragraph_four:
        '3. Agora, localize o campo "SCRIPTPUBKEY (ASM)". Está vendo a parte "OP_RETURN OP_PUSHBYTES_33"? Esses são os chamados opcodes(códigos de operação). Na verdade, estamos interessados no que vem depois deles.',
      paragraph_five:
        '4. Copie a longa sequência de números após "OP_RETURN OP_PUSHBYTES_33" e cole-a no bloco de código.',
      input_challenge_label: 'Digite o tipo OP_RETURN',
    },

    transacting_three: {
      title: 'Transacionando',
      nav_title: 'Decodifique o OP_RETURN',
      heading: 'Outra mensagem secreta',
      paragraph_one:
        'Identificamos a parte da saída da transação que contém a mensagem.',
      paragraph_two:
        'Tudo o que resta agora é decodificá-la, exatamente como fizemos no exercício anterior. Você pode consultar a transação novamente <Link href="https://blockstream.info/tx/ff9148605a772a51cba39004df5fb042d40515967a3e38ff5294cfd017c452a9?expand" className="underline">aqui</Link>.',
      terminal_challenge_success:
        'É isso mesmo! Bom trabalho.\n\n Como você pode ver, a pista é um endereço. Vá até ele.\n\n Seu próximo desafio o aguarda.',
      terminal_challenge_lines:
        'Digite seus comandos aqui e pressione Enter...\n\n Comando:\n echo $scriptPubKeyBytes | xxd -r -p\n\n Saiba que $scriptPubKeyBytes não está definido para você desta vez. Você precisará substituir essa variável no código pelo valor que encontrou na página anterior',
      terminal_challenge_error:
        'Quase! Lembre-se de que a variável $scriptPubKeyBytes não está definida para você desta vez.',
    },

    outro_one: {
      title: 'Outro',
      nav_title: 'Chamadas de aventura',
      paragraph_one:
        'Você corre para a garagem, entra no velho Budgetcopter do seu pai, digita as coordenadas e vai para o Distrito 21.',
      paragraph_two:
        'Apesar das alergias a gatos tão intensas que se aplicam até mesmo a hologramas, o holocat aparece. Você se opõe, mas gatos são gatos.',
      button_text: 'Completar capítulo 1',
    },

    outro_two: {
      title: 'Você conseguiu!',
      nav_title: 'Capítulo completo',
      description:
        'Incrível. Você concluiu o primeiro capítulo e aprendeu muito sobre hashes e transações. Como foi?',
    },

    end: {
      save: 'Salvar meu progresso',
      next: 'Continuar sem salvar',
      feedback: 'Compartilhe seu feedback',
    },
    resources: {
      genesis_two: {
        scriptsig_heading: 'ScriptSig',
        scriptsig_paragraph:
          'O "scriptSig" é um script que você fornece como parte da entrada em sua nova transação. É essencialmente seu script de desbloqueio(unlocking script), que prova que você tem autoridade para gastar o bitcoin do UTXO referenciado. O "scriptSig" é o dado que vai para o campo scriptSig da entrada.',
        block_explorer_heading: 'Explorador de blocos',
        block_explorer_paragraph:
          'Um explorador de blocos é uma ferramenta essencial para navegar e entender as redes de blockchain. Ele funciona como uma interface fácil de usar para inspecionar e analisar os dados armazenados em um blockchain. Com um explorador de blocos, os usuários podem explorar históricos de transações, visualizar saldos de contas e acompanhar o progresso de blocos e transações individuais.',
        tip: 'Procure a categoria scriptSig(Hex) aninhada na entrada da coinbase depois de expandir a transação dentro do bloco.',
      },
      genesis_three: {
        bash_heading: 'Comandos do Bash',
        bash_paragraph:
          'Estamos usando alguns comandos e opções básicos do bash para reverter a compactação que Satoshi fez no texto colocado no bloco genesis.',
        tip: 'O comando "xxd" transforma um arquivo em hexadecimal e a adição da tag "-r" o reverte, permitindo que o hexadecimal seja traduzido em texto. A tag "-p" imprime o texto no console, permitindo lermos a saída(resultado).',
      },
      transacting_two: {
        transactions_heading: 'Transações',
        transactions_paragraph:
          'Uma transação no mundo das criptomoedas é semelhante a um pagamento atômico único, que envolve o processo de destruição de moedas existentes e criação de novas. Quando alguém inicia uma transação de criptomoeda, está essencialmente instruindo o blockchain a transferir uma quantidade específica de moedas de uma carteira digital para outra. Para conseguir isso, a transação consome as moedas existentes do remetente e gera novas moedas para o destinatário, atualizando efetivamente o livro razão(registro de propriedade).',
        bitcoin_script_heading: 'Script de Bitcoin',
        bitcoin_script_paragraph:
          'O Bitcoin Script é uma linguagem de programação simples, baseada em stack(pilha), usada em transações de bitcoin para definir as condições sob as quais os bitcoins podem ser gastos. Ela consiste em vários opcodes (abreviação de códigos de operação) que especificam quais operações devem ser realizadas nos dados dentro do script.',
        tip: 'Dado o Op_Code: OP_Pushbytes_33, estamos procurando uma string de 33 bytes de comprimento (66 caracteres no total) no OP_Return da transação',
      },
      transacting_three: {
        secrets_heading: 'Segredos no Bitcoin',
        secrets_paragraph:
          'Como vimos no desafio anterior, os segredos incorporados aos scripts de bitcoin fazem parte de sua história desde o bloco gênese. Seja para simplesmente armazenar algumas informações no blockchain, para passar informações por meio de scripts de bitcoin para dar algum valor externo ao bitcoin ou para passar mensagens a outros, as pessoas têm armazenado coisas no blockchain além de entradas e saídas desde o início.',
        tip: 'Ao decodificar a string com o comando "xxd", lembre-se de que não estamos usando uma variável desta vez, precisamos inserir a string inteira',
      },
    },
  },

  chapter_two: {
    title: 'Elaborando um plano',
    paragraph_one:
      'As coordenadas que Satoshi lhe deu não decepcionam, mas infelizmente: é um armazém, e além de assustador é deserto.',
    paragraph_two:
      'Você circunda o depósito em seu Budgetcopter pelo menos três vezes. Sim (respira fundo), você provavelmente terá que entrar lá. O detector de calor do seu Budgetcopter não detecta nada além de escuridão. Se alguém sabe que esse lugar existe, faz muito tempo que não o visita, a não ser em sua memória.',

    intro_one: {
      title: 'Introdução',
      nav_title: 'O depósito',
      paragraph_one:
        '—HOLOCAT: "Caramba, que lixeira. É bom que esse lugar tenha alguns peixinhos-hologramas armazenados em algum lugar. Eu até me contentaria com um pouco de CyberKibbles..."',
      paragraph_two:
        'Você aterrissa, se estabiliza e procura um ponto de entrada. Ali, aquela janela quebrada deve servir. Você tira o que sobrou da janela com um tijolo e pula para dentro. O prédio está cheio de milhares de mineradoras de bitcoin empoeiradas mas bem preservadas.',
      paragraph_three: {
        a: '—HOLOCAT: "Isso não é um depósito, é um museu. Acho que esses são antigos dispositivos de mineração da família Vanderpoole. Nos primeiros dias do bitcoin, os mineradores usavam computadores de uso geral para minerar bitcoin. Mas depois de alguns anos, os mineradores perceberam que poderiam usar máquinas com um chip especial chamado Circuito Integrado de Aplicação Específica, ou',
        b: ' para abreviar. Esses chips fazem apenas uma coisa: mineram bitcoin. Seu foco restrito aumenta sua eficiência e permite que os mineradores gastem menos energia na mineração, o que lhes dá uma vantagem. Dá para acreditar que um dia, as pessoas mineravam com seus laptops?"',
      },
      paragraph_four:
        'Isso explica todas estas máquinas da coleção da família Vanderpoole.',
      tooltip_one: {
        question: 'O que é uma mineradora ASIC?',
        link: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=What%2520is%2520an%2520ASIC%2520miner%253F',
        highlighted: 'ASIC',
      },
    },

    intro_two: {
      title: 'Elaborando um plano',
      nav_title: 'Ligando o computador',
      paragraph_one:
        'No canto, um monitor de computador escuro, que mal funciona, com um bilhete colado na tela, estava piscando. O bilhete diz: "Ligue-os, estúpido!".',
      paragraph_two: `—HOLOCAT: "Que mal-educado. Uau, um teclado mecânico. Já ouvi falar dessas coisas. Supostamente, eles eram tão barulhentos que custaram a audição dos usuários e foram banidos."`,
      paragraph_three:
        'O Holocat pula no teclado e caminha por ele, mostrando a você quais teclas devem ser pressionadas.',
    },

    hashing_one: {
      title: 'Zeroes',
      nav_title: 'O computador começa a funcionar',
      paragraph_one:
        'Por acaso, ou porque Holocat realmente sabia o que estava fazendo, as letras e os números aleatórios em que ela pisou se transformaram em... mais letras e números aleatórios?',
      list_one: '> QX23Y6VGECTUKSNIEUTUB[P[pihof',
      list_two:
        '> 1c31d1d9fb848a505fc0cdbea848ff1bdd46a9ed4d639d413d3a93035194eedf',
      paragraph_two: 'O monitor exibe "HASH INCORRETO. TENTE NOVAMENTE."',
      paragraph_three:
        'É claro que o que a Holocat digitou estava errado. Ela é apenas uma atrevida gata holográfica!',
      paragraph_four: 'O que acontece se você digitar algo diferente?',
    },

    hashing_two: {
      title: 'Zeros',
      nav_title: 'Tente "hashear" algo',
      heading: 'Insira qualquer coisa',
      return_hash: 'Abaixo, você verá sua entrada convertida em um hash',
      progress_message: 'Continue...',
      success_message:
        'Muito bem, bom trabalho na brincadeira. Vamos em frente.',
    },

    hashing_three: {
      title: 'Zeros',
      nav_title: 'O poder do SHA256',
      heading: 'Você notou algo especial a respeito dos hashes?',
      list_one:
        'Assim como as impressões digitais, os hashes são únicos e exclusivos. Exceto em circunstâncias excepcionais, os hashes de duas coisas diferentes nunca serão os mesmos.',
      list_two:
        'As funções de hash são vias de mão única. Não é possível fazer engenharia reversa de um hash para descobrir os dados usados para criá-lo.',
      list_three:
        'Os hashes são extremamente confiáveis no sentido de que são determinísticos. Isso significa que você pode fazer o hash do mesmo dado várias vezes e sempre obterá o mesmo resultado.',
      paragraph_one: {
        a: 'A função usada aqui é chamada ',
        b: 'uma opção muito popular.',
      },
      paragraph_two:
        'Agora, vamos ver se você consegue encontrar um hash específico.',
      paragraph_three:
        'Encontre um hash que comece com um zero ("0"). Continue digitando coisas diferentes abaixo até encontrar o hash que desejamos.',
      tooltip_one: {
        question: 'Como o SHA-256 é usado no bitcoin?',
        link: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=how%2520is%2520SHA-256%2520used%2520in%2520bitcoin%253F',
        highlighted: 'SHA-256',
      },
    },

    hashing_four: {
      title: 'Zeroes',
      nav_title: 'Localizar um hash com um zero',
      heading:
        'Digite qualquer coisa até encontrar um hash que comece com um zero ("0")',
      hint_prompt:
        'Precisa de uma <Tooltip id="hint_prompt" position="bottom" theme="bg-[#5e212a]" offset="-1" content="chapter_two.hashing_four.hint_tooltip">dica</Tooltip>?',
      hint_tooltip:
        '<span className="text-m whitespace-nowrap leading-none text-white/50">Tente digitar:</span> <span className="whitespace-nowrap text-white">popcorn</span>',
    },

    hashing_five: {
      title: 'Zeros',
      nav_title: 'Aquecendo',
      heading: 'Não foi muito difícil!',
      paragraph_one:
        'Vamos tornar isso um pouco mais complicado. Tente encontrar um hash que comece com dois zeros ("00").',
    },

    hashing_six: {
      title: 'Zeros',
      nav_title: 'Encontre um hash com dois zeros',
      heading:
        'Digite qualquer coisa até encontrar um hash que comece com dois zeros ("00")',
      hint_prompt:
        'Precisa de uma <Tooltip id="hint_prompt" position="bottom" theme="bg-[#5e212a]" offset="-1" content="chapter_two.hashing_six.hint_tooltip">dica</Tooltip>?',
      hint_tooltip:
        '<span className="text-m whitespace-nowrap leading-none text-white/50">Tente digitar:</span> <span className="whitespace-nowrap text-white">trigonometry</span>',
    },

    scripting_one: {
      title: 'Automação',
      nav_title: 'Hasheando o nonce',
      heading: 'Vamos fazer com que o computador faça isso por nós.',
      paragraph_one:
        'OK, isso provavelmente lhe tomou muito mais tempo. Agora imagine encontrar um hash que comece com cinco ou dez zeros. Esse é o desafio que a rede bitcoin impõe aos mineradores quando eles querem enviar novos blocos com transações.',
      paragraph_two:
        'Os mineradores reúnem todas as informações que desejam colocar em um bloco, como o hash do cabeçalho do bloco anterior, um hash das transações a serem incluídas no bloco (inclusive a transação coinbase), a hora e combinam tudo isso com um número aleatório chamado nonce (Abreviação de "número usado apenas uma vez" em inglês). Tudo isso é enviado para a função hash para criar algo chamado hash do bloco.',
      paragraph_three:
        'Quando o bitcoin foi lançado pela primeira vez, os mineradores percorriam o nonce no cabeçalho do bloco incrementando os dados no campo de 32-bits em 1. No entanto, à medida que os mineradores se tornam mais poderosos e eficientes, a dificuldade aumenta. Logo, ela se tornou tão alta que era comum esgotar todas as possibilidades para o campo de 32 bits sem encontrar uma única solução abaixo do valor de',
      paragraph_four:
        'Para resolver isso, os mineradores começaram a alterar outras partes do cabeçalho do bloco, como a hora ou as transações incluídas no bloco.',
      paragraph_five:
        'A rede bitcoin tem uma configuração de dificuldade e só aceita hashes de bloco que comecem com um determinado número de zeros. Chamamos isso de "dificuldade" e ela é ajustada a cada 2016 blocos.',
      paragraph_six:
        'Para o próximo desafio, escreva um script que encontre um hash que comece com cinco zeros (00000).',
      tooltip_one: {
        question: 'Qual é a dificuldade do alvo?',
        link: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=what%2520is%2520target%2520difficulty%253F',
        highlighted: 'dificuldade do alvo',
      },
    },

    scripting_two: {
      title: 'Automação',
      nav_title: 'Crie uma função hash',
      paragraph_one:
        'Muito bem, é hora de escrever e executar seu próprio código. Escreva um script que gere um hash sha256 que comece com cinco zeros ("00000..."). Seu código deve chamar repetidamente a função sha256 com entradas diferentes até que a saída atenda a esse requisito. Você deve tentar incrementar um número inteiro dentro de um loop para obter entradas diferentes. Na criptografia, esse número pode ser chamado de "nonce" ou "número usado uma vez".',
      python: {
        paragraph_two:
          'Quando encontrar um nonce com um hash que comece com cinco zeros, retorne o nonce da função. Estamos usando a biblioteca hashlib em Python para ajudá-lo a criar essa função. Você pode usar os seguintes recursos externos para ajudá-lo a escrever essa função, se necessário:',
        list_one:
          '<Link href="https://docs.python.org/3/library/hashlib.html" target="_blank" className="underline">documentação da hashlib</Link>',
        list_two:
          '<Link href="https://datagy.io/python-sha256/" target="_blank" className="underline">Tutorial da função python</Link>',
      },
      javascript: {
        paragraph_two:
          'Quando encontrar um nonce com um hash que comece com cinco zeros, retorne o nonce da função. Estamos usando a biblioteca de criptografia em JavaScript para ajudá-lo a criar essa função. Você pode usar os seguintes recursos externos para ajudá-lo a escrever essa função, se necessário:',
        list_one:
          '<Link href="https://www.geeksforgeeks.org/node-js-crypto-createhash-method/" target="_blank" className="underline">documentação de criptografia</Link>',
        list_two:
          '<Link href="https://www.educative.io/answers/what-is-node-cryptocreatehashalgorithm-options" target="_blank" className="underline">Tutorial da função JavaScript</Link>',
      },
      success: 'Cinco zeros! É isso aí!',
    },

    mining_one: {
      title: 'Para a mina!',
      nav_title: 'Blocos de mineração',
      heading_one:
        'Agora que sabemos como a mineração funciona, vamos vê-la em ação',
      heading_two: 'Você está minerando agora',
      heading_three: 'Bom trabalho!',
      heading_four: 'Vamos chegar a 100 blocos',
      heading_five: 'Você conseguiu!',
      paragraph_one:
        'No momento, a rede bitcoin exige que os blocos tenham um hash com dez zeros à esquerda. Vamos a isso!',
      paragraph_two:
        'Para esta simulação simples, vamos supor que cada bloco contenha 3.500 transações e 0,061 BTC em recompensas e taxas.',
      paragraph_two_one: 'Veja se você consegue ativar as mineradoras.',
      paragraph_three:
        'O código que você escreveu na lição anterior para computar hashes repetidamente está em execução.',
      paragraph_four:
        'Ele será interrompido quando encontrar um hash com dez zeros à esquerda.',
      paragraph_five:
        'Está vendo o campo nonce sendo incrementado? Esse é o número de hashes que você tentou até agora!',
      paragraph_six: 'Com o seguinte nonce:',
      paragraph_seven: 'O hash resultante é:',
      paragraph_eight:
        'Ele tem os dez zeros à esquerda que todos os novos blocos exigem. Vamos minerar mais alguns blocos.',
      paragraph_eight_one: 'Ligue as mineradoras novamente.',
      paragraph_nine:
        'Isso pode levar algum tempo. Mas isso mostra como é difícil minerar blocos e confirmar transações.',
      paragraph_ten:
        'Uau! Foi necessário um grande poder de computação para fazer todo esse hashing. Veja só quantos nonces foram testados!  Foi realmente útil ter dado essa carga aumento no poder de hash, ou seja, o número de hashes que seu computador pode tentar em um segundo.',
      paragraph_eleven:
        'Como esperado, como cada bloco contém 3.500 transações, um total de 350.000 transações foi confirmado pelos 100 blocos minerados.',
      paragraph_twelve:
        'E parece que você recebeu uma boa recompensa por toda essa mineração! Além do subsídio de bloco, a quantidade de bitcoin que a rede recompensa por cada bloco, você também conseguiu obter uma renda adicional na forma de taxas de transação.',
      paragraph_thirteen:
        'Lembre-se de que isso foi apenas uma simulação, e cada bloco deve levar em média 10 minutos.',
      paragraph_fourteen:
        'Além disso, se estivéssemos realmente minerando na rede principal atual, seria necessário um poder de computação muito maior para minerar esses blocos.',
      progress_bar_title: 'Blocos encontrados',
      progress_bar_one: 'Nonce',
      progress_bar_two: 'Hashes por segundo',
      progress_bar_three: 'Transações confirmadas',
      progress_bar_four: 'Ganhos com Bitcoin',
      button_hash: '10x o poder de hash, por favor',
      ten_x_hint: 'Toque no botão 100x para acelerar o hashing!',
    },
    outro_one: {
      title: 'Outro',
      nav_title: 'Capítulo completo',
      heading: 'Excelente trabalho!',
      paragraph_one:
        'As máquinas começam a funcionar. Tudo parece estar funcionando. Um mapa aparece no monitor antigo que mostra os locais de outros armazéns cheios de antigos dispositivos de mineração da família Vanderpoole que ficaram on-line em todo o mundo. Parece que eles foram ativados quando você concluiu o desafio de mineração!',
      paragraph_two: '-HOLOCAT: "Veja, há uma mensagem".',
      paragraph_three:
        '"Bom trabalho. Isso ajudará o bitcoin a voltar a ter um bloco a cada dez minutos." - Satoshi Nakamoto',
      paragraph_four: 'Ele de novo?',
    },
    resources: {
      hashing_two: {
        hash_functions_heading: 'Funções de hash',
        hash_functions_paragraph:
          'Uma função de hash é qualquer função que possa ser usada para mapear dados de tamanho arbitrário para valores de tamanho fixo. Os valores retornados por uma função de hash são chamados de valores de hash, códigos de hash, resumos ou simplesmente hashes. Os valores geralmente são usados para indexar uma tabela de tamanho fixo chamada tabela de hash. O uso de uma função de hash para indexar uma tabela de hash é chamado de hashing ou endereçamento de armazenamento disperso (storage addressing).',
        tip: 'Basta continuar digitando! Devido ao algoritmo SHA-256, qualquer nova entrada resultará em um hash completamente aleatório, mesmo que as entradas sejam muito semelhantes',
        spoiler: 'Tente algo com 8 caracteres.',
      },
      hashing_four: {
        power_of_random_heading: 'O poder do aleatório',
        power_of_random_paragraph:
          'Como em um cenário perfeitamente aleatório, em termos de probabilidade, a função de hash SHA-256 é completamente aleatória para cada adição de novos dados. Se você fizesse o hash do romance "Guerra e Paz" e depois adicionasse apenas uma letra a mais ao texto original, o resultado seria um hash completamente diferente. Cada novo caractere altera o hash de forma completamente aleatória. Considerando que há 16 caracteres possíveis em um sistema hexadecimal (0-9 e a-f), qual é a probabilidade de encontrar um hash começando com "0"?',
        tip: 'Você consegue fazer as contas? Com base em 16 caracteres possíveis por dígito, qual você acha que é a probabilidade de encontrar um hash que comece com "00"? Que tal "000"?',
        spoiler: 'Tente algo que comece com a letra "s".',
      },
      hashing_six: {
        collision_resistance_heading: 'SHA256 e resistência à colisão',
        collision_resistance_paragraph:
          'O SHA-256 retorna um valor de hash de 256 bits (64 caracteres), que é uma representação exclusiva dos dados de entrada. Ele pertence à família de funções de hash baseadas na construção Merkle-Damgård, um método para criar funções de hash a partir de funções de compactação mais simples. Nessa construção, a mensagem de entrada é dividida em blocos de tamanho fixo, e um mecanismo de encadeamento processa iterativamente esses blocos, combinando a saída de cada bloco com o resultado do bloco anterior. Esse processo continua até que toda a mensagem seja processada, produzindo o valor de hash final. As propriedades robustas de segurança e a resistência a colisões do SHA-256 fazem dele a pedra angular da integridade e autenticação de dados na criptografia moderna.',
        tip: 'Não há dicas reais nesta lição. À medida que você continuar a estudar o Saving Satoshi, verá que cada vez menos seguraremos sua mão e deixaremos que você encontre a solução por conta própria.',
        spoiler:
          'Sabendo que cada novo caractere recalcula um hash completamente aleatório, você poderia continuar adicionando novos caracteres até começar com "00" ou mais... ou tentar a palavra trigonometry.',
      },
      scripting_one: {
        hash_libraries_heading: 'Funções de hash',
        hash_libraries_paragraph:
          'A biblioteca de criptografia em Node.js e a biblioteca hashlib em python são as bibliotecas de código que implementam os algoritmos que usaremos em ferramentas úteis para desenvolvedores. Essas bibliotecas são cuidadosamente examinadas para garantir sua precisão e segurança, pois muitas pessoas dependem delas para proteger sistemas valiosos e importantes.',
        nonce_heading: 'Nonce',
        nonce_paragraph:
          'Um nonce, abreviação de (número usado uma vez em inglês), é um número aleatório ou semi-aleatório empregado em vários processos criptográficos e computacionais. Seu objetivo principal é introduzir imprevisibilidade e garantir que uma determinada operação ou cálculo não possa ser facilmente repetido ou previsto. O nonce é essencial para a segurança da mineração de bitcoin, mas saberemos mais sobre isso mais tarde...',
        tip_one:
          'Verifique se você está decodificando corretamente as entradas. Os algoritmos de hashing geralmente retornam objetos decodificados em bytes, mas queremos poder lê-los no formato hexadecimal!',
        tip_two:
          'Pense em como você criaria uma função para continuar sendo executada até que essa resposta seja igual a um valor específico',
        tip_three:
          'Lembre-se de registrar sua resposta com <span className="p-1 font-mono bg-[#0000004D] m-1">console.log()</span> ou <span className="p-1 font-mono bg-[#0000004D] m-1">print()</span>. Essa é a única maneira pela qual nosso IDE tentará validar sua resposta.',
      },
      mining_one: {
        mining_heading: 'Mineração',
        mining_paragraph:
          'A mineração é onde todos esses conceitos se unem. A mineração de Bitcoin é o processo pelo qual novos bitcoins são criados e as transações são adicionadas ao blockchain. Os mineradores competem para resolver quebra-cabeças matemáticos complexos, encontrando um "nonce" único e válido em cada bloco de transações. Esse processo de prova de trabalho exige potência computacional e energia significativas, o que o torna uma forma segura e descentralizada de validar transações. Os mineradores bem-sucedidos são recompensados com bitcoins recém-criados e taxas de transação, e desempenham um papel fundamental na manutenção da integridade da rede bitcoin.',
        difficulty_heading: 'Dificuldade',
        difficulty_paragraph:
          'A dificuldade de mineração é o que permite que o bloco permaneça em uma média de 10 minutos entre cada novo bloco.',
        spoiler:
          'Não há nada para estragar! Basta seguir em frente e ler esta lição. Haverá mais oportunidades de mostrar seu conhecimento sobre mineração nas próximas lições!',
      },
    },
  },
  chapter_three: {
    title: 'O ataque dos 51%',
    paragraph_one:
      'Você digita o endereço de um explorador de blocos e vê que os blocos voltaram a ter intervalos de dez minutos. De alguma forma, o Holocat dorme em meio ao ruído de todos os ASICs.',
    paragraph_two: 'Gatos. O que você pode fazer?',
    paragraph_three:
      'No entanto, algo está errado. Os blocos estão vazios e as transações não estão sendo processadas. Você cometeu um erro? Será que isso é uma coincidência? Outra mensagem aparece na tela do computador, acordando o Holocat.',
    paragraph_four: 'Não é uma coincidência.',

    intro_one: {
      title: 'Introdução',
      nav_title: 'Discutindo o assunto',
      paragraph_one:
        '—SATOSHI NAKAMOTO: "Ei, você! Sim, você! Lembra de mim? O Bitcoin está sendo atingido por um ataque de 51% agora mesmo! Depois que você colocou os dispositivos de mineração on-line, Vanderpoole ligou novamente os ASICs da BitRey e está minerando blocos vazios. O problema é que não se trata apenas de suas máquinas. Ele usou um backdoor no firmware padrão do ASIC para infectar os mineradores existentes com um vírus que os impede de minerar qualquer coisa, exceto blocos vazios. Ele está tentando manter o ecossistema do bitcoin como refém e forçar as pessoas a apoiar a ideia de aumentar a oferta de bitcoin. Faça alguma coisa, dingdong!"',
      paragraph_two:
        'O computador antigo expele uma nuvem de poeira e, em seguida, produz um maço de dados chamado "planilha" que contém informações de contato de alguns dos maiores mineradores de bitcoin, bem como uma correção para o vírus. Quanto mais cedo você conseguir enviar o patch para outros mineradores, mais cedo eles poderão recuperar o controle de suas máquinas e se juntar à sua luta contra o BitRey.',
      paragraph_three:
        '—HOLOCAT: "Temos mais trabalho a fazer. Bem, você tem. Vou correr pelas paredes e assustar os ratos."',
    },

    solo_one: {
      title: 'Você vs. BitRey',
      nav_title: 'Minerando sozinho ',
      step_zero_heading: 'Vamos tentar',
      step_zero_paragraph_one:
        'Enquanto aguarda os mineradores que contatou, você decide ver se o BitRey pode ser combatido sozinho. Talvez você consiga acabar com os blocos vazios sem nenhuma ajuda. Veja como sua taxa de hash se comporta. Como você acha que isso vai acontecer?',
      step_one_heading: 'Estamos indo para as corridas',
      step_one_paragraph_one:
        'Agora, estamos minerando 100 blocos para ver como você se compara ao BitRey.',
      step_two_heading: 'Isso não deu muito certo!',
      step_two_paragraph_one:
        'Puxa, não temos hashpower suficiente para competir com BitRey e os mineradores controlados por vírus. Vamos ver se conseguimos derrotar o BitRey nos próximos 100 blocos com os outros mineradores. O Bitcoin está funcionando há mais de um século e não vai cair sem lutar.',
    },

    pool_one: {
      title: 'Pool vs. BitRey',
      nav_title: 'Encontrando amigos',
      waiting_screen_heading: 'Precisamos de apoio!',
      waiting_screen_paragraph_one: `Seus mineradores no depósito não têm a menor chance. Se você combinar seu poder de hash com outros mineradores, talvez consiga manter a linha contra o ataque da BitRey.`,
      waiting_screen_paragraph_two:
        'Vamos esperar até que os outros se juntem à sua causa para que possamos combinar forças.',
      waiting_button: 'Aguardando...',
      continue_button: 'Vamos lá',
    },

    pool_two: {
      title: 'Pool vs. BitRey',
      nav_title: 'Mineração em conjunto',
      step_zero_heading: 'Aqui vamos nós',
      step_zero_paragraph_one:
        'Ao agrupar seu hashrate com os outros mineradores, você pode enfrentar o BitRey?',
      step_two_heading: 'Outra derrota!',
      step_two_paragraph_one:
        'Há algo errado. Somente os Hashrate Hoppers encontraram blocos. Por que você acha que isso pode acontecer?',
    },

    coop_one: {
      title: 'Cooperativa vs. BitRey',
      nav_title: 'Algo deu errado',
      heading: 'Algo ainda não está certo.',
      paragraph_one:
        'O Hashrate Hoppers, que tem o maior poder de hash, está encontrando todos os seus blocos, mas os outros não encontram nada.',
      paragraph_two:
        'O problema é que todos estão verificando os mesmos nonces enquanto estão minerando. Como você pode os coordenar melhor?',
      paragraph_three:
        ' Você decide colocar um identificador exclusivo no "extraNonce" ao preparar os dados do bloco, para cada um de vocês evitar esforços duplicados.',
    },

    coop_two: {
      title: 'Cooperativa vs. BitRey',
      nav_title: 'O nonce extra',
      heading: 'O que é o extraNonce?',
      paragraph_one:
        'Para o protocolo do pool(piscina) de mineração Stratum (não o protocolo bitcoin), a transação coinbase também tem algo chamado "extra nonce". Ao fornecer aos mineradores os dados do bloco, os pools de mineração dividem o nonce extra em duas partes: "extranonce1" e "extranonce2".',
      paragraph_two:
        'Dividir o nonce extra em duas partes tem várias vantagens:',
      list_one:
        'Isso evita que os participantes do pool façam o mesmo trabalho.',
      list_two:
        'Ele permite que o pool envie a mesma lista de transações a todos os mineradores que estão se agrupando. Isso significa que os mineradores só precisam atualizar "extranonce2" e não alterar as transações incluídas no bloco.',
      list_three:
        'O "extranonce1" permite que os pools identifiquem e determinem a contribuição das ações, pois cada minerador recebe seu próprio "extranonce1".',
      paragraph_three:
        ' Os mineradores que contribuem para um pool atualizam o "extranonce2" e percorrem o nonce no cabeçalho do bloco. Se não encontrarem uma solução, eles repetem o processo com um "extranonce2" diferente até encontrarem.',
      paragraph_four:
        'Vamos tentar novamente dividir o trabalho usando esse método.',
    },

    coop_three: {
      title: 'Cooperativa vs. BitRey',
      nav_title: 'Minerando em equipe',
      step_zero_heading: 'Mais uma vez...',
      step_zero_paragraph_one:
        'Vamos ver se temos alguma chance contra o BitRey agora com nossa estratégia aprimorada de dividir o espaço de nonce.',
      step_two_heading: 'Você conseguiu!',
      step_two_paragraph_one:
        'Juntos, você e os outros mineradores impediram a tentativa da BitRey de dominar a rede.',
    },

    split_one: {
      title: 'Dividindo as recompensas',
      nav_title: 'Dividindo em partes justa',
      heading: 'Muito bem.',
      paragraph_one:
        'Você não apenas defendeu a rede contra o BitRey, mas também ganhou bitcoin como recompensa!',
      paragraph_two:
        'Para cada bloco minerado, o minerador recebe uma recompensa em bitcoin. Se mais de uma pessoa trabalhou no bloco, o grupo de mineradores (piscina de mineração) recebe uma recompensa para compartilhar.',
      paragraph_three: 'Esse prêmio é composto de duas coisas:',
      list_one: 'taxas para todas as transações no bloco',
      list_two: 'o subsídio do bloco',
      paragraph_four:
        'Você e seus amigos mineradores ganharam um total de 7,41 bitcoins e estão procurando uma boa maneira de dividi-los. Ele deve ser dividido com base na quantidade de trabalho que cada um de vocês realizou.',
      paragraph_five:
        'Os pools de mineração resolvem isso rastreando quantas soluções parciais cada minerador gerou. Um pool atribui a cada minerador uma dificuldade mínima (menor que a dificuldade do bloco) com base em seu poder de hash. A cada poucos segundos, um minerador encontra uma dessas soluções mais fáceis e notifica o pool. O pool então rastreia todas as ações enviadas e divide as recompensas do bloco de acordo.',
      paragraph_six: 'Vamos dar uma olhada nisso em ação.',
    },

    split_two: {
      title: 'Dividindo as recompensas',
      nav_title: 'Calculando as recompensas',
      step_zero_heading: 'Vamos analisar os esforços de todos',
      step_zero_paragraph:
        'Vamos repetir a batalha. Desta vez, vamos nos concentrar apenas em nosso pool, especificamente no número de soluções parciais que cada minerador encontrou.',
      step_two_heading: 'Vamos fazer as contas',
      step_two_paragraph:
        'Dê uma olhada nos números acima e veja se consegue encontrar uma maneira justa de dividir as recompensas. Já descobriu? Vamos analisar isso passo a passo.',
      step_three_heading: 'Porcentagem da taxa de hash',
      step_three_paragraph:
        'Como você sabe, isso representa a quantidade de trabalho que cada minerador fez para encontrar blocos. Mas o pool de mineração não tem como saber ou medir esse número, pois os mineradores só encaminham soluções bem-sucedidas.',
      step_four_heading: 'Percentual de blocos encontrados',
      step_four_paragraph:
        'A chance de encontrar um bloco é muito baixa, pois tem muito a ver com sorte. Especialmente em cenários com alguns mineradores extremamente poderosos, os mineradores realmente pequenos podem contribuir com trabalho, mas nunca encontrar nenhum bloco.',
      step_five_heading: 'Porcentagem de solução parcial',
      step_five_paragraph:
        'Agora esse número funcionará. Os mineradores informam regularmente às pools essas soluções para problemas mais fáceis. Isso permite que os pools meçam com bastante precisão a quantidade de trabalho que cada minerador forneceu.',
      step_six_heading: 'Dividindo as recompensas',
      step_six_paragraph:
        'Agora podemos pegar as recompensas de 7,41 bitcoin e dividi-las de acordo com a porcentagem de soluções parciais de cada pool. Parabéns!',
    },

    outro_one: {
      title: 'Outro',
      nav_title: 'Capítulo completo',
      heading: 'Toma essa, Vanderpoole!',
      paragraph_one:
        'Excelente trabalho! Você e os outros mineradores conseguiram se defender do ataque de 51% de Vanderpoole reunindo seus recursos. Os blocos vazios não estão mais sendo enviados e parece que ele desistiu.',
      paragraph_two:
        'É hora de colher suas recompensas! Vá para o próximo capítulo para retirar seu bitcoin.',
    },
    resources: {
      solo: {
        hashrate_heading: 'Hashrate de mineração',
        hashrate_paragraph:
          'O hashrate de um minerador individual refere-se ao poder computacional com o qual ele contribui para o processo de mineração da rede bitcoin. É a taxa na qual seu hardware de mineração pode realizar os cálculos matemáticos necessários para tentar minerar novos blocos. O hashrate de um minerador individual é normalmente medido em hashes por segundo ou, em escala, em terahashes, um trilhão de hashes por segundo (TH/s), dependendo da escala de sua operação de mineração e dos recursos de seu hardware de mineração.',
      },
      pool: {
        pool_heading: 'Pool de mineração',
        pool_paragraph:
          'Um pool de mineração desempenha um papel fundamental na mineração de criptomoedas, oferecendo vários benefícios importantes para os mineradores individuais. Ao reunir o poder computacional e os recursos de muitos participantes, os pools de mineração aumentam as chances de sucesso na mineração de novos blocos, resultando em ganhos mais previsíveis e consistentes. Eles também oferecem uma plataforma para que os mineradores tenham acesso a equipamentos avançados de mineração e suporte especializado, reduzindo as barreiras à entrada e nivelando o campo de atuação. Além disso, os pools de mineração ajudam a distribuir as recompensas de forma eficiente, assegurando que os mineradores recebam sua parte justa por suas contribuições, tornando a mineração de criptomoedas acessível, estável e financeiramente gratificante para uma comunidade mais ampla de participantes.',
      },
      coop: {
        distribution_heading: 'Distribuição de empregos',
        distribution_paragraph:
          'Os pools de mineração tomam precauções para garantir que seus participantes não minerem o mesmo nonce para o mesmo bloco. Isso é importante porque, no processo de mineração de bitcoin, os mineradores competem para encontrar um nonce que resulte em um bloco válido. Se dois mineradores do mesmo pool trabalharem no mesmo nonce simultaneamente, isso seria ineficiente e apenas um receberia a recompensa do bloco. Para evitar isso, os pools de mineração usam um processo chamado "atribuição de trabalho" ou "distribuição de trabalho" para alocar o trabalho de forma eficiente. Os pools de mineração distribuem o trabalho para mineradores ou participantes individuais. Quando um novo bloco precisa ser minerado, o servidor do pool (ou o operador do pool) cria um "trabalho" exclusivo para os mineradores. Esse trabalho inclui todas as informações necessárias para minerar o bloco, como a lista atual de transações não confirmadas, o cabeçalho do bloco anterior e a dificuldade desejada.',
        shares_heading: 'Envio de ações',
        shares_paragraph:
          'Os mineradores trabalham nesses trabalhos atribuídos e tentam continuamente encontrar o nonce correto. Quando um minerador acredita que tem uma solução, ele envia o que é chamado de "compartilhamento" para o servidor do pool. Esse compartilhamento demonstra que o minerador está trabalhando ativamente na solução do problema. Os compartilhamentos são muito mais fáceis de encontrar do que a solução real, mas servem como prova dos esforços do minerador.',
      },
      split: {
        payout_heading: 'Esquemas de pagamento',
        payout_subheading:
          'Um pool de mineração pode optar por distribuir as recompensas do bloco de várias maneiras, que diferem em alguns aspectos sutis, mas importantes:',
        pps_heading: 'Pagamento por ação (PPS)',
        pps_paragraph:
          'No PPS, os mineradores recebem um pagamento fixo para cada ação válida que enviam, independentemente de o pool minerar um bloco com sucesso ou não. Esse sistema oferece aos mineradores uma renda estável e previsível, o que o torna a opção preferida para aqueles que valorizam a consistência em seus ganhos. O PPS minimiza a variação nas recompensas, pois os mineradores são compensados por seu trabalho por ação, oferecendo uma fonte de renda confiável no mundo da mineração volátil de criptomoedas. No entanto, o PPS pode deduzir uma taxa dos ganhos do minerador se o pool não conseguir minerar um bloco com sucesso. Essa taxa tem o objetivo de cobrir os custos operacionais e reduzir o risco para o operador do pool caso nenhum bloco seja minerado em um determinado período de tempo. No PPS tradicional, os mineradores recebem um pagamento reduzido quando o pool enfrenta dificuldades.',
        pplns_heading: 'Pay-Per-Last-N-Shares (PPLNS)',
        pplns_paragraph:
          'O PPLNS leva em conta a contribuição de um minerador em uma janela específica dos últimos N compartilhamentos. Os mineradores são pagos com base no número e na dificuldade das ações que enviaram dentro dessa janela. O PPLNS incentiva os mineradores a permanecerem ativos no pool, pois recompensa a participação consistente e ajuda a reduzir o risco de estratégias de pool-hopping. Os mineradores recebem pagamentos quando o pool extrai um bloco com sucesso, e as recompensas são distribuídas proporcionalmente às suas contribuições recentes, proporcionando uma abordagem justa e orientada pelo desempenho para ganhar no ecossistema de mineração.',
        pps_plus_heading: 'Pagamento por ação + (PPS+)',
        pps_plus_paragraph:
          'O PPS+ oferece aos mineradores um pagamento fixo para cada ação que eles contribuem para os esforços de mineração do pool. No entanto, o PPS+ normalmente inclui um bônus ou prêmio adicional como incentivo aos mineradores que contribuem para a estabilidade e a confiabilidade do pool. Esse bônus foi criado para incentivar os mineradores a permanecerem ativos no pool e promover uma participação de longo prazo. O PPS+ oferece aos mineradores uma renda consistente e previsível, enquanto o bônus adicional o torna uma opção atraente para aqueles que buscam confiabilidade e recompensas extras no mundo da mineração de criptomoedas.',
        fpps_heading: 'Pagamento integral por ação (FPPS)',
        fpps_paragraph:
          'No Full PPS, os mineradores recebem um pagamento fixo por cada ação que enviam ao pool, independentemente de o pool minerar um bloco com sucesso ou não. Essa abordagem oferece aos mineradores uma renda estável e previsível, tornando-a uma opção atraente para aqueles que valorizam a confiabilidade em seus ganhos. Diferentemente do PPS tradicional, o Full PPS garante que os mineradores recebam o pagamento integral por seu trabalho contribuído, sem nenhuma dedução em potencial, mesmo que o pool enfrente dificuldades ocasionais. É um método estável e direto que agrada aos mineradores que buscam uma renda consistente no mundo da mineração de criptomoedas.',
      },
    },
  },

  chapter_four: {
    title: 'Reivindicação de seus 1,61 Bitcoin',
    paragraph_one:
      'Ufa, foi por pouco! Você está tremendo por causa da batalha com BitRey, mas está aliviado por ter vencido.',
    paragraph_two:
      'Ao se acomodar em sua mesa, você respira fundo, adormece e repete os eventos do dia em sua cabeça.',

    intro_one: {
      title: 'Introdução',
      nav_title: 'Protegendo a bolsa',
      paragraph_one:
        '—HOLOCAT: "É melhor um de nós dormir. Você precisa começar a entrar em contato com o restante dos mineiradores. Eles vão querer saber o que aconteceu, mais do que o resto do mundo."',
      paragraph_two:
        'Ao se acomodar em sua mesa Hover Desk da ButtLift, você relembra os eventos do dia. Vanderpoole. BitRey. A revelação de que os mineiradores nunca concordaram em fechar as portas em protesto. Será que tudo isso é verdade? Será que tudo isso foi encenado? E por quanto tempo mais você deve cuidar desse gato? (Ao longe, algo mia.)',
      paragraph_three:
        'Aconteça o que acontecer, você precisará de fundos. Espere um pouco! Você nunca reivindicou as recompensas de mineração de sua concorrência com o BitRey! Você decide retirá-las.',
    },

    public_key_one: {
      title: 'Chave pública',
      nav_title: 'Pares de chaves',
      heading: 'Sobre pares de chaves',
      paragraph_one:
        'De acordo com o pool de mineração, parece que você tem 1,61 bitcoin para reivindicar de todo o trabalho que fez anteriormente.',
      list_one: ' Chave privada',
      list_two: 'Chave pública',
      paragraph_two:
        'Mas espere, você nem sequer tem uma carteira! Talvez esteja se perguntando onde pode comprar uma. Embora seja possível comprar hardware para criar determinados tipos de carteiras, você pode criar uma com seu computador ou dispositivo móvel. Vamos a isso!',
      paragraph_three:
        'Se você se inscreveu em uma conta em algum momento, recebeu algo chamado código pessoal. Na criptografia, isso é chamado de "chave privada" e geralmente faz parte de um par:',
      paragraph_four:
        ' Um único par de chaves é tudo o que é necessário para criar uma carteira e controlar os fundos dentro dela. Quando quiser gastar bitcoin, você usa a chave privada. Quando quiser receber bitcoin, você usa a chave pública.',
    },

    public_key_two: {
      title: 'Chave pública',
      nav_title: 'Criptografia de curva elíptica',
      paragraph_one:
        'Portanto, temos a chave privada, que é o código pessoal que você recebeu quando se inscreveu. Como podemos gerar uma chave pública a partir dele?',
      paragraph_two:
        'Para fazer isso, precisamos dar uma olhada em um ramo fascinante da criptografia chamado curvas elípticas. Isso é chamado de Criptografia de Curva Elíptica, ou ECC(inglês), para abreviar.',
      paragraph_three:
        'O ECC envolve pegar determinados pontos em uma curva elíptica e realizar a adição e a multiplicação nos pontos.',
      paragraph_four:
        'O Bitcoin usa uma curva específica chamada secp256k1. Na imagem, você vê uma versão simplificada que é mais fácil de visualizar, mas segue as mesmas regras matemáticas.',
      paragraph_five:
        'Começamos com um ponto específico nessa curva, chamado de',
      tooltip_one: {
        highlighted: 'Ponto Gerador',
        question: 'O que é o Ponto Gerador?',
        link: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=What%2520is%2520the%2520Generator%2520point%253F',
      },
    },

    public_key_three: {
      title: 'Chave pública',
      nav_title: 'Calcular a chave pública',
      paragraph_one:
        'Para derivar uma chave pública de uma chave privada, realizamos uma operação de curva elíptica repetidamente com o ponto gerador. O ponto gerador é um ponto específico na curva. Seu valor faz parte do padrão secp256k1 e é sempre o mesmo:',
      paragraph_two:
        'As operações matemáticas em uma curva elíptica são semelhantes à adição. Portanto, a repetição dessas operações é semelhante à multiplicação. Usamos o símbolo * para descrever o algoritmo, em que `k` é a chave privada e `P` é a chave pública correspondente:',
      python: {
        paragraph_three:
          'Conclua a função <span className="text-green">privatekey_to_publickey()</span> que aceita uma chave privada como uma string codificada em hexadecimal e retorna a chave pública correspondente como um objeto tipo GE (Group Element).',
      },
      javascript: {
        paragraph_three:
          'Conclua a função <span className="text-green">privateKeyToPublicKey()</span> que aceita uma chave privada como uma string codificada em hexadecimal e retorna a chave pública correspondente como um objeto tipo GE (Group Element).',
      },
      paragraph_four:
        'Aqui estão algumas dicas de conversão de tipos para você começar:',
      success:
        'Bom trabalho! Essa chave pública é bem longa. Vamos tentar compactá-la!',
    },

    public_key_four: {
      title: 'Chave pública',
      nav_title: 'Comprima a chave pública',
      paragraph_one:
        'A chave pública tem uma coordenada x e y em um total de 64 bytes. Isso pode ser compactado em 33 bytes removendo a coordenada y e acrescentando um único byte de metadados. Esse byte indicará se a coordenada Y é par ou ímpar. Como a equação da curva elíptica tem apenas duas variáveis, a chave pública completa pode ser calculada posteriormente pelo verificador usando apenas x e os metadados:',
      paragraph_two_javascript:
        'O byte de metadados deve ser `2` se y for par e `3` se y for ímpar. Complete a função <span className="text-green">compressPublicKey()</span> para aceitar uma chave pública e retornar uma string hexadecimal de 33 bytes que representa a chave pública compactada.',
      paragraph_two_python:
        'O byte de metadados deve ser `2` se y for par e `3` se y for ímpar. Complete a função <span className="text-green">compress_publickey()</span> para aceitar uma chave pública e retornar uma string hexadecimal de 33 bytes que representa a chave pública compactada.',
      success:
        'Excelente. Agora temos nossa chave pública compactada. Em seguida, precisamos fazer o hash e codificá-la em um formato amigável para humanos.',
    },

    address_one: {
      title: 'Endereço',
      nav_title: 'Uma rua de mão única',
      heading: 'Bom trabalho!',
      paragraph_one:
        'E aí está! Sua chave pública compactada! Há muitas coisas interessantes que podemos fazer com ela, inclusive gerar endereços para nossa carteira. Aprenderemos sobre isso no próximo desafio.',
      paragraph_two:
        'Observe que a geração de uma chave pública é uma via de mão única. Não é possível descobrir a chave privada usada para gerar uma chave pública, a menos que você resolva um problema matemático notoriamente difícil chamado ',
      tooltip_one: {
        question:
          'Como o problema de logaritimo discreto é relevante para o bitcoin?',
        link: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=how%2520is%2520the%2520discrete%2520log%2520problem%2520relevant%2520to%2520bitcoin%253F',
        highlighted: 'problema de logaritmo discreto',
      },
    },

    address_two: {
      title: 'Endereço',
      nav_title: 'Hash da chave pública compactada',
      paragraph_one:
        'Você se lembra do desafio do hashing? Acontece que você pode gerar o tipo mais simples de endereço de bitcoin fazendo o hashing de sua chave pública compactada. O Bitcoin usa dois algoritmos de hashing diferentes para isso: SHA-256 e RIPEMD-160.',
      paragraph_two: 'Passos:',
      paragraph_three:
        '<span className="indent-48">1. Execute um hash SHA-256 em sua chave pública compactada.</span>',
      paragraph_four:
        '<span className="indent-48">2. Execute um hash RIPEMD-160 nesse resumo de saída SHA-256. O resultado final será de 20 bytes codificados como uma string hexadecimal.</span>',
      paragraph_five:
        'Conclua uma função que aceite uma chave pública compactada de 33 bytes como uma string hexadecimal e retorne um hash de chave pública de 20 bytes como uma string hexadecimal.',
      paragraph_six:
        'Aqui está a documentação das bibliotecas de hashing que importamos para você:\n' +
        '<Link href="https://nodejs.org/api/crypto.html#class-hash" target="_blank" className="underline">JavaScript: crypto</Link>\n' +
        '<Link href="https://docs.python.org/3/library/hashlib.html#usage" target="_blank" className="underline">Python: hashlib</Link>',
      success: 'Ótimo. Mais uma etapa e você terá o endereço de sua carteira.',
    },

    address_three: {
      title: 'Endereço',
      nav_title: 'Obter um endereço P2WPKH',
      paragraph_one:
        'Há vários tipos de endereços de bitcoin. No exercício anterior, criamos um hash de chave pública compactado de 20 bytes. Agora, gostaríamos de codificar esse hash em um endereço Pay-to-Witness-Public-Key-Hash(p2wpkh)(Pague-para-hash-de-chave-publica-testemunha) na rede Testnet.',
      paragraph_two:
        'Primeiro, precisamos acrescentar o número `0` da versão da testemunha ao hash. Esses 21 bytes resultantes são conhecidos como o <span className="font-bold">programa testemunha</span>.',
      paragraph_three:
        'Em seguida, o programa testemunha é codificado em um formato amigável para humanos chamado <Link href="https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki#user-content-Specification" target="_blank" className="underline">bech32</Link>. Isso acrescenta um prefixo legível por humanos e uma checksum (soma de verificação) aos dados.',
      paragraph_four: 'O prefixo é determinado pela rede:',
      table_heading: {
        item_one: 'Rede',
        item_two: 'Prefixo legível',
      },
      table_rows: {
        key_one: 'Rede principal',
        value_one: 'bc',
        key_two: 'Testnet',
        value_two: 'tb',
        key_three: 'Regtest',
        value_three: 'bcrt',
      },
      paragraph_five:
        'Como estamos criando um endereço Testnet, usaremos o prefixo "tb".',
      paragraph_six:
        'Depois que os dados foram codificados para bech32, ficamos com um endereço de bitcoin!',
      paragraph_seven:
        'Conclua a função para criar um endereço bech32 a partir de um hash de chave pública compactado. Comece criando o witness program (programa de testemunha) e, em seguida, converta o programa em um endereço usando a biblioteca bech32 que já foi importada para você.',
      paragraph_eight:
        'Talvez você precise se aprofundar na biblioteca bech32 e ler o código para encontrar as funções corretas a serem usadas:\n',
      paragraph_eight_javascript:
        '<Link href="https://github.com/saving-satoshi/bech32js/blob/main/bech32.js" target="_blank" className="underline">JavaScript: @savingsatoshi/bech32js</Link>\n',
      paragraph_eight_python:
        '<Link href="https://github.com/saving-satoshi/bech32py/blob/main/bech32py/bech32.py" target="_blank" className="underline">Python: savingsatoshi_bech32py</Link>',
      success:
        'Agora você tem um endereço para o qual o bitcoin extraído pode ser enviado.',
    },

    outro_one: {
      title: 'Outro',
      nav_title: 'Capítulo completo',
      heading: 'Sucesso!',
      paragraph_one: 'Você criou sua própria carteira de bitcoin!',
      paragraph_two:
        'E retirou o bitcoin do pool de mineração para essa carteira que acabou de criar. Agora, está totalmente financiado e pronto para o que quer que Vanderpoole e BitRey tentarem.',
    },
    resources: {
      public_key_three: {
        generator_point_heading: 'Ponto Gerador',
        generator_point_paragraph:
          'Um ponto específico na curva secp256k1. Seu valor faz parte do padrão secp256k1 e é sempre o mesmo. Esse ponto não é diferente dos outros pontos da curva, mas é aceito como o ponto de partida padrão para os cálculos. Ninguém sabe realmente por que esse ponto específico foi escolhido.',
        elliptic_curve_operations_heading: 'Operações de curva elíptica',
        elliptic_curve_operations_paragraph:
          'As curvas elípticas têm suas próprias regras matemáticas, portanto, operações simples como adição e multiplicação funcionam de forma diferente. Para simplificar e abreviar, os símbolos estabelecidos são reutilizados, como o uso de um "*" para operações semelhantes à multiplicação.',
        discrete_log_heading: 'Logaritmo discreto',
        discrete_log_paragraph:
          'Um sistema matemático em que você pode, por exemplo, multiplicar, mas não pode dividir. Uma metáfora simples para isso é olhar para um relógio. Três horas depois das 11 horas são 2 horas. Portanto, poderíamos dizer "11+3=2". No entanto, se quiséssemos executar "2-x=11" e resolver para x, teríamos infinitas respostas possíveis (3, 15, 27, 39...). Mais informações em <Link href="https://en.wikipedia.org/wiki/Discrete_logarithm" className="underline">wikipedia</Link>.',
        tip_one:
          'A multiplicação com pontos de curva elíptica não é igual ao tipo de multiplicação a que você está acostumado, aquela com números regulares. Então, como você realiza a multiplicação? Observe que o ponto gerador, <span className="p-1 font-mono bg-[#0000004D] m-1">G</span> é do tipo <span className="p-1 font-mono bg-[#0000004D] m-1">secp256k1.GE</span>. Dê uma olhada nessa classe para ver quais métodos podem ser invocados nela.',
        tip_two:
          'Embora a chave privada seja aceita no formato hexadecimal, ela precisa ser convertida em um número (BigInt se você estiver usando JS) antes de ser multiplicada pelo ponto gerador.',
      },
      public_key_four: {
        y_coordinate_compression_heading: 'Compressão de chaves públicas',
        y_coordinate_compression_paragraph:
          'Ao calcular a adição de um ponto em uma curva elíptica, você usa as coordenadas de dois pontos para encontrar as coordenadas de um terceiro ponto que se encontra na curva. Entretanto, geralmente há duas coordenadas y possíveis para qualquer coordenada x (exceto em alguns casos especiais). Ao compactar uma chave pública, você escolhe uma dessas coordenadas y e inclui apenas a coordenada x junto com um indicador de qual coordenada y usar; nesse caso, usamos os metadados anexados para indicar a coordenada y.',
        tip: 'Na verdade, esse desafio é bastante simples, pois estamos apenas tentando determinar se a coordenada y é par ou ímpar para que possamos anexar esses metadados à frente de nossa chave pública.',
      },
      address_two: {
        hash_algo_heading: 'SHA-256, RIPEMD-160',
        hash_algo_paragraph:
          'As funções de hash digerem qualquer quantidade de qualquer tipo de dados e sempre retornam um resultado do mesmo tamanho. Para o SHA256, são 32 bytes. Para o RIPEMD-160, são 20 bytes. O resultado é determinístico (sempre o mesmo resultado para a mesma entrada), mas, fora isso, indistinguível do aleatório. As funções de hash reduzem efetivamente os dados a uma pequena impressão digital consistente.',
        tip_one:
          'Ao calcular o hash SHA-256, você precisará certificar-se de fazer o hash da chave compactada como bytes e não como hexadecimal. Se estiver usando JavaScript, isso exigirá a conversão da string hexadecimal em um buffer.',
        tip_two:
          'Certifique-se de que esteja executando os algoritmos de hash na ordem correta!',
      },
      address_three: {
        wpkh_heading:
          'Endereço Hash da Chave Pública Testemunha (Witness Public Key Hash - wpkh)',
        wpkh_paragraph:
          'Um endereço de bitcoin é uma sequência de caracteres criada para ser manuseada pelos usuários. É curto, fácil de copiar e colar e tem algum tipo de soma de verificação (checksum) incorporada para garantir que seja sempre copiado corretamente. Ela codifica com segurança um script de saída(Output) de Bitcoin a partir do qual o destinatário pode gastar. Há vários tipos de scripts de saída e vários mecanismos de codificação. Neste desafio, codificamos uma chave pública compactada com o bech32 para criar o que é chamado de endereço hash de chave pública testemunha.',
        network_heading: 'Mainnet, Testnet, Signet e Regtest',
        network_paragraph:
          'Ao desenvolver um software de bitcoin, é importante testar seu código antes de confiar dinheiro real a ele! Uma das maneiras mais simples de testar o software bitcoin é usar uma corrente de blocos diferente com um novo bloco de gênese em que as moedas não importam, a mineração é gratuita e fácil e tudo pode ser redefinido a qualquer momento. Essas correntes são suportadas por uma rede exclusiva de nós que não interfere com as moedas e os nós reais na Mainnet. Testnet e Signet são os nomes de duas dessas correntes de blocos de bitcoin alternativas que são mantidas em paralelo com a Mainnet em escala global. O Regtest é um modo de desenvolvedor projetado para ser executado localmente, sem necessidade de conexões de rede.',
        tip: 'Não deixe de dar uma olhada na biblioteca bech32 para descobrir os métodos exatos que você pode usar.',
      },
    },
  },

  chapter_five: {
    title: 'Irá o verdadeiro Satoshi se levantar?',
    paragraph_one:
      'É tarde e você está cansado, mas quando fecha os olhos por um momento, recebe uma dose dupla de más notícias.',
    paragraph_two: '1) Vanderpoole está de volta à TV.',
    paragraph_three: '2) Ele afirma ser o bisneto de Satoshi Nakamoto.',
    paragraph_four: 'E está com cara de quem dorme mal.',
    intro_one: {
      title: 'Introdução',
      nav_title: 'Não confie, verifique',
      paragraph_one:
        '—DEBORAH CHUNK: "Sr. Vanderpoole. Recentemente, o senhor fez uma afirmação surpreendente na mídia antissocial, de que é bisneto de Satoshi Nakamoto. Isso está correto? Isso é verdade?"',
      paragraph_two:
        '—VANDERPOOLE: "É mesmo, Deborah. Tenho guardado esse segredo há muito, muito tempo. Veja, minha família passou um discreto CD-ROM por gerações. Para mantê-lo em segredo, nós o rotulamos de <span className="italic">Creed - My Own Prison</span>. Ele contém as chaves privadas do enorme tesouro de bitcoins do meu bisavô Satoshi Nakamoto. Portanto, quando eu falar em nome dos mineradores, saibam que também falo em nome de Satoshi Nakamoto."',
      paragraph_three:
        '—DEBORAH CHUNK: "Existe alguma maneira de verificarmos se você realmente possui as chaves privadas do bitcoin de Satoshi Nakamoto?"',
      paragraph_four:
        '—VANDERPOOLE: "De fato, existe. É uma simples questão de criptografia de chave pública."',
      paragraph_five:
        '—DEBORAH CHUNK: Mas por que esperar tanto tempo para fazer essa revelação surpreendente?',
    },
    intro_two: {
      nav_title: 'A afirmação ousada de Vanderpoole',
      paragraph_one:
        '—VANDERPOOLE: "Não tive coragem. Sempre houve rumores sobre a história da minha família, que eu poderia ter confirmado facilmente. Mas eu não estava preparado para tanta publicidade. Afinal de contas, vivo uma vida humilde e isolada em um castelo do século XIV na minha ilha particular favorita, dando de 5 a 6 entrevistas como esta na minha banheira de hidromassagem toda semana."',
      paragraph_two:
        '—VANDERPOOLE: "Mas agora que o futuro do bitcoin está em jogo, eu sabia que era hora de encarar a música, especificamente, a música do álbum de estreia do Creed, My Own Prison." *Vanderpoole cantarola a melodia da música homônima do álbum do século XX.',
      paragraph_three:
        '—VANDERPOOLE: "Só posso dizer que sinto muito por não ter vindo antes, porque o CD-ROM também contém os planos revisados de Satoshi Nakamoto para o bitcoin. Veja bem, meu bisavô sempre lamentou a limitação do fornecimento de bitcoin a 21 milhões de moedas, e é por isso que planejo realizar o sonho do meu bisavô de bifurcar o bitcoin em favor da emissão perpétua de bitcoin."',
    },
    intro_three: {
      nav_title: 'Uma mensagem de Satoshi',
      paragraph_one:
        'Sua tela Hover do TXM4H-A começa a funcionar. Você tem uma nova mensagem.',
      paragraph_two: '—HOLOCAT: Não se esqueça de dar um tapinha no meu nariz.',
      paragraph_three: 'Você toca no nariz dela',
      paragraph_four:
        '—SATOSHI NAKAMOTO: "Vanderpoole não é quem ele diz ser. Você pode denunciá-lo. Peça a ele para provar a propriedade do bitcoin de Satoshi assinando uma mensagem usando as chaves privadas da carteira."',
    },
    derive_message_one: {
      title: 'Derivando a mensagem',
      nav_title: 'A mensagem em questão',
      heading:
        'Vanderpoole diz que assinou uma mensagem com as chaves de Satoshi:',
      code_one: `-----BEGIN BITCOIN SIGNED MESSAGE-----\n \n Eu sou Vanderpoole e tenho o controle da chave privada que Satoshi usou para assinar a primeira transação de bitcoin confirmada no bloco nº 170. Esta mensagem é assinada com a mesma chave privada.\n \n -----BEGIN BITCOIN SIGNATURE-----\n \n`,
      code_two:
        '<span className="break-all"> H4vQbVD0pLK7pkzPto8BHourzsBrHMB3Qf5oYVmr741pPwdU2m6FaZZmxh4ScHxFoDelFC9qG0PnAUl5qMFth8k= </span>',
      code_three: '\n \n-----END BITCOIN SIGNATURE-----',
      paragraph_two: 'O que isso significa?',
    },
    derive_message_two: {
      nav_title: 'Localizando a chave pública',
      paragraph_one:
        'Aprendemos no capítulo 4 que as chaves privadas são números aleatórios enormes mantidos em segredo por quem os gerou. Podemos usar a matemática da curva elíptica para derivar uma chave pública a partir dessa chave privada.',
      paragraph_two:
        'A chave pública pode ser compartilhada como um identificador unico/exclusivo e a chave privada é usada para provar que uma pessoa tem controle sobre esse identificador. Essa prova é chamada de ASSINATURA. Para criar uma assinatura, você precisa de uma mensagem e de uma chave privada. Qualquer pessoa pode verificar a assinatura com uma cópia da mensagem e a chave pública correspondente.',
      paragraph_three:
        'Vanderpoole forneceu uma assinatura e uma mensagem. Onde está a chave pública?',
    },
    derive_message_three: {
      nav_title: 'Localizando a assinatura de Satoshi',
      heading: 'Vamos começar encontrando a assinatura de Satoshi',
      paragraph_one: `O bloco nº 170 contém o <link href="https://bitcointalk.org/index.php?topic=155054.0" target="_blank" className="underline">primeira transação de bitcoin</link> feita de Satoshi para Hal Finney. Essa transação tem apenas <Link href="https://blockstream.info/tx/f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16?expand" target="_blank" className="underline">uma entrada</Link>. Recupere o scriptSig dessa entrada. Ele contém a assinatura de Satoshi!`,
      placeholder: 'Cole os dados aqui',
      success:
        'Muito bem feito! Esta é, na verdade, a assinatura de Satoshi, autorizando a transferência de seu bitcoin para Hal Finney.',
    },
    derive_message_four: {
      nav_title: 'Localizando a chave pública de Satoshi',
      heading: 'Então, onde está sua chave pública?',
      paragraph_one:
        'Na verdade, ela é armazenada junto com o bitcoin gerado por Satoshi no bloco de mineração nº 9.',
      paragraph_two:
        '<Link href="https://blockstream.info/tx/0437cd7f8525ceed2324359c2d0ba26006d92d856a9c20fa0241106ee5a597c9?output:0&expand" target="_blank" className="underline">Siga o link</Link> para a transação de origem na parte superior da seção de entrada #0. Essa é a transação que Satoshi criou ao minerar o bloco nº 9. A transação cria 50 BTC e os bloqueia sob o controle de... uma chave pública! Encontre os dados que começam com 0411... no scriptPubKey.',
      paragraph_three:
        'A chave pública fica entre os comandos de script OP_PUSHBYTES e OP_CHECKSIG. Cole-a abaixo:',
      placeholder: 'Cole os dados aqui',
      success: 'É isso aí!',
    },
    derive_message_five: {
      nav_title: 'Verificação da assinatura a seguir',
      paragraph_one:
        'No exercício anterior, vimos que Satoshi recebeu 50 BTC pela mineração do bloco nº 9. Ele usou esse valor como entrada para sua transação com Hal Finney (no bloco nº 170), enviando 10 BTC para a chave pública de Hal Finney e devolvendo 40 BTC para si mesmo como troco. A chave privada de Satoshi foi usada para criar uma assinatura autorizando a transferência desses fundos.',
      paragraph_two:
        'Em seguida, precisamos aprender a verificar uma assinatura. Mas ainda está faltando algo... qual é a mensagem que Satoshi assinou para autorizar a transação para Hal?',
    },
    derive_message_six: {
      nav_title: 'Derivando a mensagem',
      heading: 'Derive a mensagem da transação',
      paragraph_one:
        'Deve ficar claro, apenas olhando a página do block explorer, que uma transação de bitcoin tem muitas partes diferentes. Algumas partes são apenas pequenos números e outras partes são pedaços maiores de dados. O protocolo bitcoin tem um algoritmo muito específico para criar mensagens a partir de transações, de modo que essas mensagens podem ser assinadas por chaves privadas.',
      paragraph_two:
        'Resumiremos o processo descrito <Link href="https://en.bitcoin.it/wiki/OP_CHECKSIG" target="_blank" className="underline">aqui</Link>. Ele usa convenientemente <Link href="https://en.bitcoin.it/wiki/OP_CHECKSIG#Code_samples_and_raw_dumps" target="_blank" className="underline">essa mesma transação do bloco nº 170</Link> como exemplo.',
      paragraph_three:
        'Para começar, precisamos dos bytes brutos que compõem a transação completa. <Link href="https://blockstream.info/api/tx/f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16/hex" target="_blank" className="underline">Nosso explorador de blocos</Link> pode nos ajudar com isso. Use o ponto da API "hex" e cole todo o bloco de dados.',
      input_challenge_label: 'Colar o blob da transação',
      success_message_line_one:
        'Esta é a transação bruta com cada componente rotulado:',
      success_message_line_two: 'versão:',
      success_message_line_three: 'número de entradas:',
      success_message_line_four: 'hash do tx de onde veio a entrada nº 0:',
      success_message_line_five:
        'índice da entrada nº 0 na transação de financiamento:',
      success_message_line_six:
        'scriptSig para autorizar a entrada de gastos nº 0:',
      success_message_line_seven: 'sequência de entrada nº 0:',
      success_message_line_eight: 'número de saídas:',
      success_message_line_nine:
        'valor da saída #0 (10 BTC ou 1.000.000.000 satoshis):',
      success_message_line_ten:
        'saída #0 scriptPubKey (chave pública de Hal Finney mais OP_CHECKSIG):',
      success_message_line_eleven:
        'valor do outut nº 1 (40 BTC ou 4.000.000.000 satoshis):',
      success_message_line_twelve:
        'output #1 scriptPubKey (novamente a chave pública do próprio Satoshi, para o troco):',
      success_message_line_thirteen: 'tempo de bloqueio:',
    },
    derive_message_seven: {
      nav_title: 'Crie a mensagem para assinar',
      paragraph_one:
        'É impossível assinar uma mensagem que contenha sua própria assinatura, portanto, o scriptSig precisa ser removido. No protocolo bitcoin, ele é, na verdade, substituído pelo scriptPubKey da saída da transação que estamos gastando.',
      paragraph_two:
        'Já encontramos o scriptPubKey na etapa anterior, você pode colá-lo no primeiro espaço em branco.',
      paragraph_three: {
        a: 'A última coisa de que precisamos para nossa mensagem de transação é uma',
        b: '. Falaremos mais sobre isso no próximo capítulo, mas, por enquanto, vamos apenas adicionar o valor <span className="font-bold">01000000</span> ao final da mensagem.',
      },
      tooltip_one: {
        question: 'O que são bandeiras sighash?',
        link: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=what%2520are%2520sighash%2520flags%253F',
        highlighted: 'bandeira com o tipo de sighash',
      },
      success: 'Legal! Você construiu uma mensagem para assinar.',
    },
    verify_signature_one: {
      title: 'Verificando a assinatura',
      nav_title: 'Verificação da assinatura',
      heading: 'Finalmente temos uma mensagem!',
      paragraph_one:
        'Também temos uma assinatura que sabemos que Satoshi criou com suas próprias chaves privadas, e temos sua chave pública. Vamos aprender a verificar a assinatura e, em seguida, tentaremos verificar a assinatura de Vanderpoole.',
    },
    verify_signature_two: {
      title: 'Verifique a assinatura',
      nav_title: 'Faça o hash da mensagem',
      heading: 'Faça o hash do resumo da transação',
      paragraph_one:
        'Os dados de transação serializados que compilamos na última etapa são, na verdade, muito longos para serem assinados ou verificados com o ECDSA.',
      paragraph_two:
        'Conhecemos alguma maneira de compactar grandes blocos de dados em partes mais consistentes e gerenciáveis? Com certeza sim: hashing.',
      paragraph_three: {
        a: 'O protocolo bitcoin usa um',
        b: ' para compactar uma transação em uma mensagem assinável.',
      },
      paragraph_four:
        'Quando temos um hash de 32 bytes, esses dados são reinterpretados como um número inteiro. Sim, um inteiro de 32 bytes (que é um número realmente enorme)!',
      tooltip_one: {
        question: 'Por que tudo no bitcoin usa hash duplo (HASH256)?',
        link: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=Why%2520does%2520everything%2520in%2520bitcoin%2520use%2520double%2520hash%2520%28HASH256%29%253F',
        highlighted: 'resumo duplo SHA256',
      },
      success: 'Muito bem feito!',
    },
    verify_signature_three: {
      nav_title: 'Decodificando a assinatura',
      heading: 'Decodifique a Assinatura',
      label_one: 'Cole o valor R',
      label_two: 'Cole o valor S',
      paragraph_one:
        'A assinatura de Satoshi é codificada em um sistema chamado DER, que é um subconjunto do ASN.1.',
      paragraph_two:
        'Há dois números de 32 bytes que precisamos extrair. Eles são chamados de R e S, respectivamente, e cada um é prefixado pelos bytes 0220 na sequência DER. Em vez de decodificar totalmente o blob DER, basta procurar os prefixos e colar os valores R e S.',
      paragraph_three:
        '# Assinatura de Satoshi, a partir da entrada scriptSig da transação para Hal Finney (bloco 170)',
    },
    verify_signature_four: {
      nav_title: 'Decodificando a chave pública',
      heading: 'Decodifique a chave pública',
      label_one: 'Cole a coordenada x',
      label_two: 'Cole a coordenada y',
      paragraph_one:
        'Aprendemos no capítulo 4 que as chaves públicas são realmente pontos na curva ECDSA, o que significa que elas têm um valor x e y. O primeiro byte 04 significa "não compactado" (em oposição a 02 e 03, como aprendemos no capítulo 4). Remova esse primeiro byte e os dados restantes serão coordenadas x e y de 32 bytes. Copie e cole novamente.',
      paragraph_two:
        '# A chave pública de Satoshi, a partir do scriptPubKey de saída da transação coinbase do bloco 9',
    },
    verify_signature_five: {
      title: 'Verifique a assinatura',
      nav_title: 'Testando a assinatura',
      heading: 'Verifique a assinatura!',
      success: 'Você conseguiu! Você verificou a assinatura de Satoshi!',
      paragraph_one:
        'Neste ponto, temos tudo o que precisamos para fazer alguns cálculos de ECDSA.',
      paragraph_two:
        'O algoritmo de verificação de assinatura ECDSA é explicado <Link className="underline" href="https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm#Signature_verification_algorithm" target="_blank">aqui</Link> e <Link className="underline" href="https://www.secg.org/sec1-v2.pdf#page=52" target="_blank">aqui</Link>.',
      paragraph_three:
        'Criamos um objeto Grupo de Elementos a partir dos elementos de chave pública X e Y para você. Você precisa terminar de implementar a função de verificação de assinatura ECDSA <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">verify()</span> que só deve retornar True se tudo for válido!',
      paragraph_four:
        'Sabemos que a assinatura de Satoshi é válida, pois ela foi verificada por todos os nós completos do bitcoin desde 2010! Se o seu programa não retornar True, algo está errado.',
      python: {
        paragraph_five_part_one:
          'Dica: o <span className="text-green">pow()</span>',
        paragraph_five_part_two:
          'pode aceitar expoentes negativos e um módulo como argumentos. Mais informações sobre a <Link className="underline" href="https://docs.python.org/3/library/functions.html#pow" target="_blank">documentação</Link>.',
      },
      javascript: {
        paragraph_five_part_one:
          'Fornecemos uma função auxiliar <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">invert()</span>',
        paragraph_five_part_two:
          'que você precisará no lugar de uma função de exponenciação modular nativa do JavaScript.',
      },
    },
    validate_signature_one: {
      title: 'Validando a assinatura',
      nav_title: 'Preparando a mensagem',
      heading: 'Prepare a mensagem de Vanderpoole para verificação',
      paragraph_one:
        'Vanderpoole usou um <Link href="https://github.com/bitcoin/bips/blob/master/bip-0137.mediawiki" target="_blank" className="underline">protocolo de assinatura de mensagem de bitcoin</Link> para sua façanha. O cálculo usa o mesmo algoritmo que já definimos, mas a preparação dos dados é um pouco diferente.',
      paragraph_two:
        'Primeiro, precisamos codificar sua mensagem em uma matriz de bytes correspondente ao modelo a seguir:',
      paragraph_three: {
        pre_link: 'Então, nós',
        highlighted: 'hasheamos duas vezes em SHA-256',
        question: 'Por que fazemos um hash duplo no bitcoin?',
        post_link:
          'esse blob de dados e convertemos esse hash em um número inteiro. Complete a função <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">encode_message()</span>. Ela deve retornar um valor hexadecimal de 32 bytes.',
      },
      success: 'Muito bem feito',
    },
    validate_signature_two: {
      nav_title: 'Preparando a assinatura',
      heading: 'Prepare a assinatura de Vanderpoole para verificação',
      paragraph_one:
        'O protocolo de assinatura de mensagens de bitcoin usado por Vanderpoole especifica a base64 para a assinatura. Precisamos decodificar essa string base64 em uma sequência de 65 bytes. Por enquanto, podemos desconsiderar o primeiro byte de metadados. O restante dos dados são os valores r e s de 32 bytes que aprendemos na etapa 6.',
      javascript: {
        paragraph_two: {
          post_link:
            'Conclua a função <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">decode_sig()</span>.',
          return:
            'Ele deve retornar uma matriz com os valores [r, s] como BigInts.',
        },
      },
      python: {
        paragraph_two: {
          post_link:
            'Conclua a função <span className=" text-green">decode_sig()</span>.',
          return: 'Ele deve retornar uma tupla com os valores (r, s).',
        },
      },
    },
    validate_signature_three: {
      title: 'Valide a assinatura',
      nav_title: 'Veja se Vanderpoole estava mentindo',
      heading: 'Então, Vanderpoole é um mentiroso?',
      paragraph_one: `Vamos reunir todos os componentes necessários para o programa e verificar se a assinatura de Vanderpoole realmente se originou da chave privada vinculada à chave pública de Satoshi! Preencha os parâmetros ausentes necessários para executar a função <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm"> verify()</span> usando o código fornecido.`,
      paragraph_two:
        'Depois, podemos executar o programa para ver se Vanderpoole estava mentindo. Rufem os tambores...',
      success:
        'Essa mensagem indica que a assinatura não se originou da chave pública de Satoshi, pois a verificação falhou.',
    },
    validate_signature_four: {
      title: 'Valide a assinatura',
      nav_title: 'Encontre a chave correta',
      heading: 'Como Vanderpoole conseguiu criar essa assinatura?',
      paragraph_one:
        'Holocat entra em cena e diz que um desertor da BitRey nos enviou uma lista de chaves públicas que Vanderpoole costuma usar, talvez ele tenha usado uma dessas chaves para assinar a mensagem.',
      paragraph_two:
        'Forneça a chave que conclui com êxito o processo de verificação, permitindo-nos identificar a chave pública que Vanderpoole usou para assinar esta mensagem.',
      paragraph_three:
        'Vamos ver se você consegue verificar a mensagem e a assinatura de Vanderpoole usando uma dessas chaves?',
      success:
        'A assinatura é válida para essa chave pública de Vanderpoole, que não era Satoshi!',
    },
    outro_one: {
      title: 'Outro',
      nav_title: 'Capítulo completo',
      heading: 'Vanderpoole mentiu!',
      paragraph_one:
        'Você aprendeu uma das lições mais importantes do bitcoin. Você não confiou, você verificou.<br><br>Ao fazer isso, você descobriu que Vanderpoole não usou as chaves de Satoshi para assinar a mensagem, lançando uma grande sombra sobre a história de sua família, sobre sua credibilidade e sobre a credibilidade do BitRey.<br><br>Agora, se você pudesse tirar essa música da cabeça.',
    },
    resources: {
      derive_message_three: {
        op_pushdata_heading: 'OP_PUSHDATA',
        op_pushdata_paragraph_one:
          'OP_PUSHDATA no script do bitcoin desempenha um papel crucial ao facilitar a inserção de dados arbitrários no blockchain. Na verdade, trata-se de toda uma categoria de opcodes que permite a inclusão de elementos de dados de tamanhos variados, tornando a linguagem de script do Bitcoin mais versátil. Esse opcode é particularmente importante para permitir a implementação de várias funcionalidades de contratos inteligentes e tipos de transações personalizadas. Como sabemos que isso deve empurrar 71 bytes de dados para a pilha, você consegue descobrir como esse opcode pode ser representado em hexadecimal? Você pode ler mais sobre alguns desses OP_CODES e outros <Link href="https://en.bitcoin.it/wiki/Script#Constants" target="_blank" className="underline">aqui</Link>.',
      },
      derive_message_four: {
        op_checksig_heading: 'OP_CHECKSIG',
        op_checksig_paragraph_one:
          'OP_CHECKSIG no script de bitcoin é extremamente importante para garantir que a chave privada correta seja capaz de gastar uma determinada transação. Em quase todos os scripts de bitcoin, haverá um OP_CHECKSIG para garantir que a pessoa que está tentando gastar o bitcoin possa fazê-lo com a chave fornecida. Você pode ler sobre alguns desses OP_CODES e mais <Link href="https://en.bitcoin.it/wiki/Script#Constants" target="_blank" className="underline">aqui</Link>.',
      },
      derive_message_six: {
        transaction_parts_heading: 'Partes da transação',
        transaction_parts_one:
          'Versão: Essa versão indica como a transação será organizada.',
        transaction_parts_two:
          'Número de entradas: O número de inputs nessa transação.',
        transaction_parts_three:
          'TXID da entrada #0: Este é o hash da transação da qual a entrada nº 0 é gasta.',
        transaction_parts_four:
          'Índice da entrada #0: Este é o índice da saída da transação identificada pelo TXID acima que fornece uma origem de fundos.',
        transaction_parts_five:
          'Scriptsig: São os dados que autorizam o gasto da saída especificada acima. Normalmente, consiste em assinaturas.',
        transaction_parts_six:
          'Sequência da entrada nº0: Esse é o número de sequência para a entrada sendo gasta.',
        transaction_parts_seven:
          'Número de saídas: Indica quantas saídas a transação tem.',
        transaction_parts_eight:
          'Valor da saída #0: Esse é o valor gasto pela primeira saída, expresso como um número inteiro little-endian.',
        transaction_parts_nine:
          'ScriptPubKey da saída #0: Esse é o script que determina o que é necessário para gastar os fundos. Normalmente, consiste em uma chave pública e outros códigos operacionais que formam um desafio.',
        transaction_parts_ten:
          'Valor da saída #1: Esse é o valor gasto pela segunda saída, expresso como um número inteiro little-endian.',
        transaction_parts_eleven:
          'Saída #1 scriptPubKey: Esse é o script que determina o que é necessário para gastar os fundos. Normalmente, consiste em uma chave pública e outros códigos operacionais que formam um desafio.',
        transaction_parts_twelve:
          'Tempo de bloqueio: Uma altura de bloco antes da qual essa transação não é válida para confirmação.',
      },
      derive_message_seven: {
        sighash_type_flag_heading: 'Bandeira do tipo SigHash',
        sighash_type_flag_paragraph_one:
          'Os sinalizadores SigHash são um mecanismo no bitcoin que define quais partes de uma transação são incluídas no hash assinado por uma chave privada. Essencialmente, eles determinam o escopo do compromisso do signatário com partes específicas dos dados da transação. O sinalizador SigHash é um byte único anexado a cada assinatura e pode variar entre entradas dentro da mesma transação. Há vários tipos de sinalizadores SigHash sobre os quais você pode aprender <Link href="https://river.com/learn/terms/s/sighash-flag" target="_blank" className="underline">aqui</Link>.',
      },
      verify_signature_two: {
        tip_one:
          'Dica de JavaScript: Você pode converter uma string hexadecimal em um buffer de bytes usando <span className="p-1 font-mono bg-[#0000004D] m-1">Buffer.from(someString, \'hex\');</span>',
        signature_verification_heading: 'Verificação de assinatura',
        signature_verification_paragraph_one:
          'A verificação de assinatura é um algoritmo matemático no qual uma parte fornece um dado (a assinatura) que só poderia ser gerado se essa parte conhecesse um número secreto (a chave privada). A verificação envolve a comparação entre a assinatura, a chave pública e uma determinada mensagem. Se o algoritmo produzir um booleano VERDADEIRO, a assinatura será considerada autêntica.',
      },
      verify_signature_three: {
        signature_encoding_heading: 'Codificação de assinatura',
        signature_encoding_paragraph_one:
          'Uma assinatura (DER) ou Distinguished Encoding Rules é simplesmente um formato usado para codificar uma assinatura ECDSA no bitcoin. Uma assinatura ECDSA é gerada usando uma chave privada e um hash da mensagem assinada. Ela consiste em dois números de 32 bytes (r,s). Ela tem vários componentes sobre os quais você pode saber mais <Link href="https://technicaldifficulties.io/2020/07/22/bip-66-unpacking-der-signatures/" target="_blank" className="underline">aqui</Link>.',
      },
      verify_signature_four: {
        eliptic_curve_heading:
          'Algoritmo de assinatura digital de curva elíptica (ECDSA)',
        eliptic_curve_paragraph_one:
          'O ECDSA é um algoritmo criptográfico usado pelo bitcoin para garantir que os fundos só possam ser gastos por seus legítimos proprietários. Uma chave pública é derivada de uma chave privada por meio da multiplicação de curvas elípticas, o que é computacionalmente simples. Entretanto, reverter esse processo para derivar a chave privada da chave pública é computacionalmente inviável. Essa função unidirecional é a pedra angular da segurança do Bitcoin.',
        public_private_key_heading: 'Chaves públicas e privadas',
        public_private_key_paragraph_one:
          'No bitcoin, um par de chaves é usado para garantir transações seguras. A chave privada, mantida em segredo, é usada para assinar transações e provar a propriedade de um endereço de bitcoin. A chave pública, derivada da chave privada, pode ser compartilhada e é usada para verificar se uma assinatura foi feita pelo detentor da chave privada, sem revelar a chave privada.',
      },
      verify_signature_five: {
        finite_field_arithmetic_heading: 'Aritmética de campo finito',
        finite_field_arithmetic_paragraph_one:
          'Esse tipo de aritmética, usado no ECDSA, envolve números em um intervalo ou campo fixo. Operações como adição, subtração, multiplicação e localização de inversos modulares são realizadas com relação ao tamanho desse campo. Isso é essencial para os cálculos da curva elíptica na criptografia do bitcoin.',
        ge_and_fe_heading:
          'Elementos de Grupo e Elementos de Campo (Group Elements (GE) and Field Elements (FE))',
        ge_and_fe_paragraph_one:
          'No contexto da criptografia de curva elíptica, um elemento de grupo normalmente representa um ponto na curva elíptica. No desafio, GE refere-se a esse ponto com coordenadas x e y específicas. FE representa um elemento do campo finito, usado para cálculos dentro das restrições do campo.',
        modular_inverse_heading: 'Inverso modular',
        modular_inverse_paragraph_one:
          'O inverso modular de um número "a" módulo "m" é um número "b" tal que (a * b) % m = 1. Encontrar o inverso modular é uma etapa crítica na verificação da assinatura ECDSA. Ele é usado no cálculo de u1 e u2 durante o processo de verificação.',
      },
      validate_signature_one: {
        message_verification_heading: 'Importância da verificação de mensagens',
        message_verification_paragraph_one:
          'A verificação de mensagens aumenta a segurança das comunicações no ecossistema bitcoin. Ela permite que as partes verifiquem a autenticidade e a integridade das mensagens, o que é valioso em situações em que a confiança e a verificação são essenciais, como em transações ponto a ponto ou na comunicação entre as partes em um contrato inteligente. Além disso, a verificação de mensagens serve como base para vários aplicativos, incluindo a verificação de identidade e o atestado de propriedade de um determinado endereço de bitcoin. Ela acrescenta uma camada de garantia criptográfica, reforçando a natureza descentralizada e sem confiança da rede bitcoin.',
      },
      validate_signature_two: {
        base64_encoding_heading: 'Codificação Base64',
        base64_encoding_paragraph_one:
          'A base64 é um esquema básico de codificação de byte para texto, que permite que os dados sejam convertidos em bytes que podem ser usados em buffers ou de bytes para texto, de forma a evitar problemas com caminhos de URL e parâmetros de consulta. Isso difere do esquema de codificação base58, pois ainda inclui os caracteres semelhantes (zero, "O" maiúsculo, "I" maiúsculo e "l" minúsculo) que podem ser confusos para um usuário ao tentar copiar ou ditar a mensagem codificada.',
      },
      validate_signature_three: {
        signing_and_ownership_heading: 'Assinatura e propriedade de mensagens',
        signing_and_ownership_paragraph_one:
          'Com base no pseudoanonimato do bitcoin, estamos limitados no que podemos provar de forma definitiva porque o proprietário de uma chave pode se recusar a assinar uma mensagem ou assinar uma mensagem com uma chave incorreta de propósito. A única coisa que podemos provar é que a chave que cria uma assinatura inválida não corresponde a uma chave que pode assinar uma mensagem.',
      },
      validate_signature_four: {
        one_for_one_heading: 'Um por um',
        one_for_one_paragraph_one:
          'Para garantir a confiabilidade e a segurança do ECDSA, uma assinatura criada por uma chave privada só pode ser verificada pela chave pública correspondente. Se chaves privadas diferentes pudessem produzir a mesma chave pública ou assinatura, isso prejudicaria a segurança e a confiabilidade do ECDSA. Com isso, podemos saber que a chave pública que foi capaz de assinar essa mensagem é proprietária desse bitcoin.',
      },
    },
  },

  chapter_six: {
    title: 'O detentor da chave',
    paragraph_one:
      'Ahhh! Vanderpoole está querendo pegá-lo por ter exposto suas alegações fraudulentas. Mas apesar do segredo ter sido revelado, muitas pessoas assustadas continuam a se apegar ao mito que Vanderpoole criou em torno de si mesmo, de sua família e de sua suposta ascendência. Os tempos são assustadores e as pessoas precisam de um herói. Infelizmente, para muitos, ele é o melhor que eles têm.',
    intro_one: {
      title: 'Introdução',
      nav_title: 'Era mesmo o Satoshi?',
      paragraph_one:
        '—SATOSHI NAKAMOTO: "Muito bem. Agora o mundo pode ver por si mesmo que Vanderpoole é uma fraude. Mesmo que alguns ainda não acreditem, acreditarão antes que nosso trabalho termine."',
      paragraph_two:
        'Você faz uma pausa e percebe que todas as mensagens até o momento foram assinadas por "Satoshi Nakamoto". Você havia presumido que esse era um pseudônimo usado por alguém que adere aos princípios fundamentais do bitcoin. Certamente, ele não poderia ser o verdadeiro Satoshi Nakamoto. Mas, finalmente, você decidiu que vale a pena perguntar.',
      paragraph_three:
        '—"Isso pode me fazer parecer estúpido, mas você é o verdadeiro Satoshi?"',
    },
    intro_two: {
      title: 'Introdução',
      nav_title: 'Pagamento de Mika 3000',
      paragraph_one:
        '—HOLOCAT: "Dificilmente é a única coisa que faz você parecer estúpido ultimamente."',
      paragraph_two:
        '—SATOSHI NAKAMOTO: "O Bitcoin foi muito além do controle de seu criador há muitos anos. Não importaria se Vanderpoole ou eu fôssemos Satoshi, ou um de seus descendentes. O Bitcoin é definido por sua comunidade e não pode ser cooptado por um único indivíduo ou entidade - inclusive Satoshi. Provar isso é a verdadeira batalha. Espero que não se importe, mas pedi á sua excêntrica amiga repórter freelancer para entrar em contato."',
      paragraph_three: '—Ele o quê?',
      paragraph_four: '—Ding.',
      paragraph_five: '—HOLOCAT: Não se esqueça de me dar um "boop" no nariz.',
      paragraph_six: `—MIKA 3000: "Você tem coragem, mas a coragem não é suficiente. O que você descobriu é apenas o começo. Há mais nessa história, mas precisamos visitar a ilha particular de Vanderpoole para saber com certeza o que é. Isso vai custar muito caro, então eu poderia usar sua ajuda para retirar fundos da carteira multisig que você me ajudou a configurar. Você ainda tem uma das minhas chaves, certo?"`,
    },
    in_out_one: {
      title: 'Entradas e Saídas',
      nav_title: 'A UTXO não gasta',
      paragraph_one:
        'Mika 3000 precisa de 1 BTC para comprar equipamentos para sua viagem à ilha particular de Vanderpoole. Você decide enviar a ela 1 BTC de suas recompensas de mineração do capítulo 3, que foram enviadas pelo pool de mineração para o endereço que você criou no capítulo 4.',
      paragraph_two:
        'Você abre seu nó completo de bitcoin e executa um comando para ver onde seu dinheiro está no blockchain.',
      paragraph_three:
        'Essa é uma saída de transação não gasta (também conhecida como "UTXO"). Talvez você reconheça o hash e o endereço de sua chave pública compactada do capítulo 4. O valor também parece correto: 1,61 BTC.',
    },
    in_out_two: {
      title: 'Entradas e Saídas',
      nav_title: 'O endereço de recebimento',
      paragraph_one:
        'Mika 3000 fornece um endereço para o qual você deve enviar sua contribuição de 1 BTC:',
      paragraph_two:
        'Hm, esse endereço parece muito maior que o seu! Eu me pergunto por quê...',
      paragraph_three: `Precisamos criar e assinar uma transação que envie um de seus 1,61 BTC para esse endereço. Vimos a estrutura de transação da Satoshi no capítulo 5, mas a sua será um pouco diferente. Atualmente, há métodos mais novos para criar transações. Usaremos um protocolo chamado Segregated Witness, que define a versão da transação como 2.`,
    },
    in_out_three: {
      title: 'Entradas e Saídas',
      nav_title: 'Etapas da transação',
      paragraph_one:
        'As transações Segregated Witness(Testemunha Segregada) funcionam exatamente como suas predecessoras legadas. Existem alguns valores globais, como versão e tempo de bloqueio. Há um conjunto de entradas (UTXOs que queremos gastar) e um conjunto de saídas (novos UTXOs que queremos criar, para que outras pessoas gastem no futuro). Haverá também um array de testemunhas, uma para cada entrada. É para lá que irão as assinaturas e os scripts, em vez do scriptSig.',
      paragraph_two:
        'As serializações de mensagens para todos esses componentes estão documentadas <Link href="https://en.bitcoin.it/wiki/Protocol_documentation#tx" target="_blank" className="underline">aqui</Link> e <Link href="https://github.com/bitcoinbook/bitcoinbook/blob/6d1c26e1640ae32b28389d5ae4caf1214c2be7db/ch06_transactions.adoc" target="_black" className="underline">aqui</Link>.',
    },
    in_out_four: {
      normal: {
        title: 'Entradas e Saídas',
        nav_title: 'A classe Entrada',
        heading: 'Observando a implementação da classe Input (Entrada)',
        paragraph_one:
          'Aqui temos código para duas classes: classe <span className="font-bold">Input</span> e classe <span className="font-bold">Outpoint</span> (não é "output"!).',
        paragraph_two:
          'As entradas de transações de Bitcoin sempre apontam para saídas de transações existentes e não gastas. Portanto, nossa classe Input tem um método <span className="text-green p-1 font-mono bg-[#00000033] m-1 text-base"> from_output()</span> que é usado para construir uma Input passando a descrição da saída:',
        paragraph_three: 'Os dois primeiros argumentos são: ',
        paragraph_four:
          '1. <span className="font-bold">txid: </span> o ID da transação que criou a saída.',
        paragraph_five:
          '2. <span className="font-bold">vout: </span>o índice da saída da transação da qual você deseja gastar.',
        paragraph_six:
          'Juntos estes elementos formam um <span className="font-bold">Outpoint</span>. Eventualmente, passaremos os valores txid e vout que você obteve acima em <span className="text-green p-1 font-mono bg-[#00000033] m-1 text-base">listunspent</span>.',
        paragraph_seven:
          'Os últimos dois argumentos são o valor da saída que queremos gastar (em satoshis) e algo chamado scriptcode. Por enquanto, apenas armazenaremos esses dados como uma matriz de bytes vazia, pois não precisaremos deles até mais tarde.',
        paragraph_eight: {
          a: 'Os hashes no bitcoin são ',
          b: {
            text: 'invertidos',
            question: 'Por que invertemos os hashes no bitcoin?',
            href: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=why%2520are%2520hashes%2520reversed%2520in%2520bitcoin',
          },
          c: ' quando os vemos como strings hexadecimais. Quando aceitamos hashes como strings de um usuário, devemos inverter a ordem dos bytes antes de armazená-los ou transmiti-los como bytes brutos. É por isso que invertemos a ordem dos bytes do argumento txid que é passado aqui.',
        },
        paragraph_nine:
          'Você pode ver um exemplo disto no método <span className="text-green p-1 font-mono bg-[#00000033] m-1 text-base">from_output()</span>, onde ele lida com o argumento txid.',
        paragraph_ten:
          'Também precisamos de um método <span className="text-green p-1 font-mono bg-[#00000033] m-1 text-base">serialize()</span> que retorne um array de bytes de acordo com a especificação. É assim que a transação é realmente enviada entre os nós da rede e como ela é expressa em um bloco:',
        heading_three: 'Outpoint (Ponto de saída)',
        table_one: {
          heading: {
            one: 'Descrição',
            two: 'Nome',
            three: 'Tipo',
            four: 'Tamanho',
          },
          row_one: {
            column: {
              one: 'Hash da transação que está sendo gasta',
              two: 'txid',
              three: 'bytes',
              four: '32',
            },
          },
          row_two: {
            column: {
              one: 'Posição da Saída que está sendo gasta no array de Saídas da transação',
              two: 'index',
              three: 'int',
              four: '4',
            },
          },
        },
        heading_four: 'Entrada',
        table_two: {
          row_one: {
            column: {
              one: 'txid e índice de saída que está sendo gasta',
              two: 'outpoint',
              three: 'bytes',
              four: '36',
            },
          },
          row_two: {
            column: {
              one: 'Comprimento do ScriptSig (sempre 0 para Segregated Witness)',
              two: 'length',
              three: 'int',
              four: '1',
            },
          },
          row_three: {
            column: {
              one: 'Sempre vazio para Segregated Witness',
              two: 'script',
              three: 'bytes',
              four: '0',
            },
          },
          row_four: {
            column: {
              one: 'O valor padrão é 0xffffffff, mas pode ser usado para timelocks relativos',
              two: 'sequence',
              three: 'int',
              four: '4',
            },
          },
        },
        paragraph_eleven: {
          a: 'E lembre-se: os números inteiros no bitcoin são serializados em ',
          b: {
            text: `little-endian`,
            question: `What is endianness?`,
            href: `https://chat.bitcoinsearch.xyz/?author=holocat&question=What%2520is%2520endianness%253F`,
          },
        },
        success: 'A classe Input parece boa. Excelente trabalho!',
      },
      hard: {
        title: 'Entradas e Saídas',
        nav_title: 'Criar a classe Entrada',
        heading: 'Concluir a implementação da classe Input',
        paragraph_one: 'Ele deve ter o seguinte método:',
        paragraph_two:
          'Os dois primeiros argumentos são o ID da transação e o índice da saída entre as saídas daquela transação da qual você deseja gastar.',
        paragraph_three:
          'Eventualmente, passaremos os valores de txid e vout que você obteve acima de listunspent. Observe que os hashes em bitcoin são little-endian, o que significa que você precisará inverter a ordem dos bytes da string txid!',
        paragraph_four:
          'Os dois segundos argumentos são o valor da saída que queremos gastar (em satoshis) e algo chamado scriptcode. Por enquanto, basta armazenar esses dados como propriedades da classe Input, pois não precisaremos deles até a etapa 6.',
        paragraph_five:
          'Também precisamos de um método <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">serialize()</span> que retorne um array de bytes de acordo com a especificação:',
        heading_two: 'Outpoint(Ponto de saída)',
        table_one: {
          heading: {
            one: 'Descrição',
            two: 'Nome',
            three: 'Tipo',
            four: 'Tamanho',
          },
          row_one: {
            column: {
              one: 'Hash da transação que está sendo gasta',
              two: 'txid',
              three: 'bytes',
              four: '32',
            },
          },
          row_two: {
            column: {
              one: 'Posição da saída que está sendo gasta no array de saídas da transação',
              two: 'index',
              three: 'int',
              four: '4',
            },
          },
        },
        heading_three: 'Entrada',
        table_two: {
          row_one: {
            column: {
              one: 'txid e índice da saída que está sendo gasto',
              two: 'outpoint',
              three: 'bytes',
              four: '36',
            },
          },
          row_two: {
            column: {
              one: 'Comprimento do ScriptSig (sempre 0 para Segregated Witness)',
              two: 'length',
              three: 'int',
              four: '1',
            },
          },
          row_three: {
            column: {
              one: 'Sempre vazio para Segregated Witness',
              two: 'script',
              three: 'bytes',
              four: '0',
            },
          },
          row_four: {
            column: {
              one: 'O valor padrão é 0xffffffff, mas pode ser usado para timelocks relativos',
              two: 'sequence',
              three: 'int',
              four: '4',
            },
          },
        },
        success: 'A classe Input parece correta. Excelente trabalho!',
      },
    },
    in_out_five: {
      title: 'Entradas e Saídas',
      nav_title: 'Criando a classe Saída',
      heading: 'Concluir a implementação da classe Output',
      paragraph_one:
        'Como a classe Input, ela precisa de um método <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">from_options()</span> que construirá um objeto Output a partir de dados fornecidos pelo usuário:',
      paragraph_two: `Ele aceita um endereço de bitcoin como uma string (como o endereço do Mika 3000) e um valor como um número inteiro. O valor é expresso como um número de satoshis! Lembre-se, 1 BTC = 100000000 satoshis. Você precisará usar nossa biblioteca bech32 novamente para decodificar o endereço em componentes de versão e dados.
        A classe também precisa de um método <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">serialize()</span> que retorne um array de bytes de acordo com a especificação:`,
      heading_two: 'Saída(Output)',
      table: {
        heading: {
          one: 'Descrição',
          two: 'Nome',
          three: 'Tipo',
          four: 'Tamanho',
        },
        row_one: {
          column: {
            one: 'Número de satoshis sendo enviados.',
            two: 'value',
            three: 'bytes',
            four: '8',
          },
        },
        row_two: {
          column: {
            one: 'Duração total do script a seguir (o "programa testemunha", SegWit).',
            two: 'length',
            three: 'int',
            four: '1',
          },
        },
        row_three: {
          column: {
            one: 'A versão de testemunha segregada. Derivada do endereço bech32.',
            two: 'version',
            three: 'int',
            four: '1',
          },
        },
        row_four: {
          column: {
            one: 'Comprimento dos dados seguintes do programa de testemunhas.',
            two: '',
            three: 'int',
            four: '1',
          },
        },
        row_five: {
          column: {
            one: 'O componente de dados derivado do endereço bech32.',
            two: 'index',
            three: 'bytes',
            four: '(var)',
          },
        },
      },
      paragraph_three:
        'Não se esqueça: os números inteiros no bitcoin são serializados em little-endian!',
      success: 'A classe Output parece correta. Excelente trabalho!',
    },
    put_it_together_one: {
      normal: {
        title: 'Juntando tudo',
        nav_title: 'Criando o resumo da transação',
        heading: 'Resumo da transação',
        paragraph_one:
          'No capítulo 5, aprendemos que, para assinar uma transação, primeiro precisamos reorganizar e fazer o hash de seus dados em uma mensagem, que se torna uma das entradas do nosso algoritmo de assinatura. Como agora estamos usando a testemunha segregada(segwit), também precisamos implementar, atualizado, o algoritmo de resumo de transação que está especificado no <Link href="https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki" target="_blank" className="underline">BIP 143</Link>.',
        paragraph_two:
          'Lembre-se de que cada entrada de transação precisa de sua própria assinatura e, portanto, alguns componentes do algoritmo de digestão podem ser armazenados em cache e reutilizados, mas outros serão diferentes dependendo da entrada que estiver sendo assinada! Conclua o método de transação <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">digest(input_index)</span> que calcula a mensagem de 32 bytes para assinar uma entrada.',
        list_heading: 'Algumas observações:',
        list_one: '"Double SHA-256" ou dSHA256 = sha256(sha256(data))',
        list_two:
          '"value" é a quantidade de satoshis na saída que está sendo gasta. Nós o adicionamos à nossa classe Input na etapa 2 e apenas o salvamos lá dentro da classe até agora.',
        list_three:
          'Scriptcode é o script de bitcoin que está sendo avaliado. Também adicionamos isso à nossa classe Input na etapa 2.',
        list_four:
          'Todos os números inteiros são codificados como little-endian!',
        paragraph_three:
          'Falaremos mais sobre isso na próxima seção, mas para gastar com seu endereço pay-to-witness-public-key-hash (P2WPKH) (Pague-para-hash-de-chave-publica-testemunha), seu código de script seria:',
        paragraph_four: '...que decodifica para o seguinte script de bitcoin.',
        paragraph_five:
          'Para obter mais informações sobre scriptcodes, consulte <Link href="https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki" target="_blank" className="underline">BIP 143</Link>.',
        paragraph_six:
          'A transação bruta tem uma pré-imagem que é a serialização de:',
        headings: {
          item_one: 'Descrição',
          item_two: 'Nome',
          item_three: 'Tipo',
          item_four: 'Tamanho',
        },
        table: {
          row_one: {
            item_one: 'Versão da transação, o padrão é 2',
            item_two: 'version',
            item_three: 'int',
            item_four: '4',
          },
          row_two: {
            item_one:
              'O dSHA256 de todos os pontos de saída(Outpoints) de todas as entradas, serializado',
            item_two: 'bytes',
            item_three: 'bytes',
            item_four: '32',
          },
          row_three: {
            item_one:
              'O dSHA256 de todos os valores de sequência de todas as entradas, serializado',
            item_two: 'sequences',
            item_three: 'bytes',
            item_four: '32',
          },
          row_four: {
            item_one:
              'O ponto de saída serializado da única entrada que está sendo assinada',
            item_two: 'outpoint',
            item_three: 'bytes',
            item_four: '36',
          },
          row_five: {
            item_one: 'O script de saída que está sendo gasto',
            item_two: 'scriptcode',
            item_three: 'bytes',
            item_four: '(var)',
          },
          row_six: {
            item_one:
              'O valor em satoshis que está sendo gasto pela única entrada que está sendo assinada',
            item_two: 'value',
            item_three: 'int',
            item_four: '8',
          },
          row_seven: {
            item_one:
              'O valor da sequência da única entrada que está sendo assinada',
            item_two: 'sequence',
            item_three: 'int',
            item_four: '4',
          },
          row_eight: {
            item_one: 'O dSHA256 de todas as saídas, serializado',
            item_two: 'outputs',
            item_three: 'bytes',
            item_four: '32',
          },
          row_nine: {
            item_one: 'Tempo de bloqueio da transação, padrão 0',
            item_two: 'locktime',
            item_three: 'int',
            item_four: '4',
          },
          row_ten: {
            item_one:
              'Tipo de hash de assinatura, usaremos 1 para indicar "ALL"',
            item_two: 'sighash',
            item_three: 'int',
            item_four: '4',
          },
        },
        paragraph_seven:
          'Por fim, a mensagem que assinamos é o SHA-256 duplo de todos esses dados serializados.',
        success: 'O método digest() parece correto. Excelente trabalho!',
      },
      hard: {
        title: 'Juntando tudo',
        nav_title: 'Criando a classe Testemunha',
        heading: 'Concluir a implementação da classe Witness',
        paragraph_one:
          'Ele deve ter o seguinte método, que aceita um array de bytes e adiciona esse item à pilha de testemunhas.',
        paragraph_two:
          'Ele também precisará de um método <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">serialize()</span> que retorne a pilha de testemunhas serializada.',
        subheading_one: 'Pilha de testemunhas',
        headings: {
          item_one: 'Descrição',
          item_two: 'Nome',
          item_three: 'Tipo',
          item_four: 'Tamanho',
        },
        table_one: {
          row_one: {
            item_one: 'O número de itens na pilha de testemunhas',
            item_two: 'count',
            item_three: 'int',
            item_four: '1',
          },
          row_two: {
            item_one: 'Itens de pilha serializados',
            item_two: 'items',
            item_three: '(itens)',
            item_four: '(var)',
          },
        },
        subheading_two: 'Item da pilha de testemunhas',
        table_two: {
          row_one: {
            item_one: 'Comprimento total do item seguinte da pilha',
            item_two: 'length',
            item_three: 'int',
            item_four: '1',
          },
          row_two: {
            item_one: 'Os bytes brutos do item da pilha',
            item_two: 'data',
            item_three: 'bytes',
            item_four: '(var)',
          },
        },
        success: 'A classe Witness parece correta. Excelente trabalho!',
      },
    },
    put_it_together_two: {
      normal: {
        title: 'Juntando tudo',
        nav_title: 'Criando a classe Testemunhas',
        heading: 'Assine e preencha a Testemunha!',
        paragraph_one:
          'No último capítulo, escrevemos alguns códigos importantes de verificação de assinatura ECDSA. Agora, para criar uma assinatura válida, pegaremos esse código e o reorganizaremos um pouco.',
        paragraph_two:
          'Neste exercício, implementaremos parte da matemática por trás do algoritmo de assinatura ECDSA. Para obter mais informações sobre como ele funciona, consulte estes recursos:',
        paragraph_three:
          '• A página da Wikipédia para <Link href="https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm" target="_blank" className="underline">Algoritmo de assinatura digital de curva elíptica</Link>',
        paragraph_four:
          '• <Link href="https://www.secg.org/sec1-v2.pdf#subsubsection.4.1.3" target="_blank" className="underline">Standards for Efficient Cryptography 1 (SEC 1)</Link>: Página 44, Seção 4.1.3',
        heading_one: 'Etapa 1',
        paragraph_five:
          'Na classe Transaction, há um método, <span className="text-green p-1 text-base font-mono bg-[#0000004D] m-1">compute_input_signature(index, key)</span> que aceita o índice de uma entrada e uma chave privada (um inteiro de 32 bytes, ou BigInt em JavaScript). Finalize esse método para que ele calcule o resumo da mensagem para a entrada escolhida. Use o método <span className="text-green p-1 text-base font-mono bg-[#0000004D] m-1">digest()</span> de nossa última etapa e retorne uma assinatura ECDSA na forma de dois inteiros de 32 bytes: <span className="italic">r</span> e <span className="italic">s</span>.',
        heading_two: 'Etapa 2',
        paragraph_six:
          'Para o algoritmo de assinatura, o protocolo bitcoin exige mais uma coisa. O valor de <span className="italic">s</span> precisa ser "baixo", ou seja, menor que a ordem da curva dividida por 2. Adicione essa verificação a <span className="text-green p-1 text-base font-mono bg-[#0000004D] m-1">compute_input_signature()</span>.',
        paragraph_seven:
          'Consulte <Link href="https://github.com/bitcoin/bips/blob/master/bip-0146.mediawiki#low_s" target="_blank" className="underline">BIP 146</Link> para saber mais.',
        heading_three: 'Etapa 3',
        paragraph_eight:
          'Complete o método <span className="text-green p-1 text-base font-mono bg-[#0000004D] m-1">sign_input(index, priv, pub, sighash)</span> para que ele chame <span className="text-green p-1 text-base font-mono bg-[#0000004D] m-1"> compute_input_signature(index, key)</span>. Ao lidar com o valor de retorno, <span className="italic">r</span> e <span className="italic">s</span> precisam ser codificados com um algoritmo chamado DER, que implementamos para você.',
        heading_four: 'Etapa 4',
        paragraph_nine:
          'O Bitcoin exige um byte extra anexado ao final da assinatura DER. Esse byte representa o "tipo de sighash". Por enquanto, sempre usaremos o byte <span className="p-1 text-base font-mono bg-[#0000004D] m-1">0x01</span> para isso, indicando "SIGHASH ALL".',
        heading_five: 'Etapa 5',
        paragraph_ten:
          'A última etapa é criar um objeto Witness com dois itens da pilha: o blob de assinatura codificado em DER que acabamos de criar e sua chave pública compactada. Envie a assinatura primeiro, seguida da chave pública.',
        paragraph_eleven:
          'Acrescente o objeto da pilha de testemunhas ao array de testemunhas do objeto da transação.',
        success:
          'Os métodos compute_input_signature() e sign_input() parecem corretos. Excelente trabalho!',
      },
      hard: {
        title: 'Juntando tudo',
        nav_title: 'Serializando a transação',
        heading: 'Concluir a implementação da classe Transaction',
        paragraph_one:
          'Ele deve ter propriedades globais de locktime e versão, bem como um array de entradas, saídas e pilhas de testemunhas.',
        paragraph_two:
          'Ele precisará de um método <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">serialize()</span> que produza a transação inteira como bytes formatados para transmissão na rede bitcoin p2p.',
        headings: {
          item_one: 'Descrição',
          item_two: 'Nome',
          item_three: 'Tipo',
          item_four: 'Tamanho',
        },
        table: {
          row_one: {
            item_one: 'Atualmente 2',
            item_two: 'version',
            item_three: 'int',
            item_four: '4',
          },
          row_two: {
            item_one: 'Deve ser exatamente 0x0001 para testemunha segregada',
            item_two: 'flags',
            item_three: 'bytes',
            item_four: '2',
          },
          row_three: {
            item_one: 'O número de entradas',
            item_two: 'count',
            item_three: 'int',
            item_four: '1',
          },
          row_four: {
            item_one: 'Todas as entradas de transação, serializadas',
            item_two: 'inputs',
            item_three: 'Inputs[]',
            item_four: '(var)',
          },
          row_five: {
            item_one: 'O número de saídas',
            item_two: 'count',
            item_three: 'int',
            item_four: '1',
          },
          row_six: {
            item_one: 'Todas as saídas de transação, serializadas',
            item_two: 'outputs',
            item_three: 'Outputs[]',
            item_four: '(var)',
          },
          row_seven: {
            item_one: 'Todas as pilhas de testemunhas, serializadas',
            item_two: 'witness',
            item_three: 'Witnesses[]',
            item_four: '(var)',
          },
          row_eight: {
            item_one: 'A configuração em 0 indica finalidade',
            item_two: 'locktime',
            item_three: 'int',
            item_four: '4',
          },
        },
        paragraph_three:
          'Observe que não há valor de "count" para as testemunhas. Isso ocorre porque o número de pilhas de testemunhas deve ser sempre exatamente igual ao número de entradas.',
        success: 'O método serialize() parece correto. Ótimo trabalho!',
      },
    },
    put_it_together_three: {
      normal: {
        title: 'Junte tudo',
        nav_title: 'Assine a transação',
        heading: 'Conclua a implementação da classe Transaction',
        paragraph_one:
          'Para concluir nossa transação, precisaremos de um método <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">serialize()</span> que produza toda a transação como bytes formatados para transmissão na rede bitcoin p2p.',
        paragraph_two:
          'Nosso script deve criar e assinar um objeto Transaction. Ele terá uma entrada (o UTXO que identificamos em <span className="underline">A classe Input</span>) e duas saídas:',
        paragraph_three:
          'Conhecemos nossa entrada, conhecemos nosso resultado. Estamos prontos para criar e assinar uma transação? Não exatamente. Temos uma entrada de 1,61 BTC e uma saída de 1 BTC... o que acontece com os outros 0,61 BTC? A maior parte será "troco" e precisamos enviá-lo de volta para nosso próprio endereço!',
        paragraph_four:
          'Observe que não há valor de "contagem" para as testemunhas. Isso ocorre porque o número de pilhas de testemunhas deve ser sempre exatamente igual ao número de entradas.',
        paragraph_five:
          'Mas espere! Precisamos incluir uma "taxa". Vamos cortar uma pequena parte de nossa saída de mudança para os pools de mineração para incentivá-los a incluir nossa transação em um bloco. Vamos reduzir nosso troco de 61.000.000 para 60.999.000 satoshis.',
        paragraph_six:
          'Finalmente, nosso trabalho está concluído. Seu script deve terminar retornando o resultado do método serialize() da transação. Essa é uma transação de bitcoin assinada válida e podemos transmiti-la à rede para enviar a Mika 3000 o dinheiro de que ela precisa!',
        headings: {
          item_one: 'Descrição',
          item_two: 'Nome',
          item_three: 'Tipo',
          item_four: 'Tamanho',
        },
        table: {
          row_one: {
            item_one: 'Atualmente 2',
            item_two: 'versão',
            item_three: 'int',
            item_four: '4',
          },
          row_two: {
            item_one: 'Deve ser exatamente 0x0001 para testemunha segregada',
            item_two: 'bandeiras',
            item_three: 'bytes',
            item_four: '2',
          },
          row_three: {
            item_one: 'O número de entradas',
            item_two: 'contagem',
            item_three: 'int',
            item_four: '1',
          },
          row_four: {
            item_one: 'Todas as entradas da transação, serializadas',
            item_two: 'entradas',
            item_three: 'Inputs[]',
            item_four: '(var)',
          },
          row_five: {
            item_one: 'O número de saídas',
            item_two: 'contagem',
            item_three: 'int',
            item_four: '1',
          },
          row_six: {
            item_one: 'Todas as saídas da transação, serializadas',
            item_two: 'saídas',
            item_three: 'Outputs[]',
            item_four: '(var)',
          },
          row_seven: {
            item_one: 'Todas as pilhas de testemunhas, serializadas',
            item_two: 'testemunha',
            item_three: 'Witnesses[]',
            item_four: '(var)',
          },
          row_eight: {
            item_one: 'A configuração em 0 indica a finalidade',
            item_two: 'tempo de bloqueio',
            item_three: 'int',
            item_four: '4',
          },
        },
        bullet_one:
          'Mika 3000 recebe 100.000.000 satoshis para bc1qgghq08syehkym52ueu9nl5x8gth23vr8hurv9dyfcmhaqk4lrlgs28epwj',
        bullet_two:
          'Você recebe 61.000.000 de volta em seu endereço bc1qm2dr49zrgf9wc74h5c58wlm3xrnujfuf5g80hs',
        success: 'Você conseguiu! Você criou uma transação!',
      },
      hard: {
        title: 'Juntando tudo',
        nav_title: 'Criando o resumo da transação',
        heading: 'Resumo da transação',
        paragraph_one:
          'No capítulo 5, aprendemos que, para assinar uma transação, primeiro precisamos reorganizar e fazer o hash de seus dados em uma mensagem, que se torna uma das entradas brutas do nosso algoritmo de assinatura. Como agora estamos usando a testemunha segregada, também precisamos implementar o algoritmo de resumo de transação atualizado que está especificado no <Link href="https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki" target="_blank" className="underline">BIP 143</Link>.',
        paragraph_two:
          'Lembre-se de que cada entrada de transação precisa de sua própria assinatura e, portanto, alguns componentes do algoritmo de digestão podem ser armazenados em cache e reutilizados, mas outros serão diferentes dependendo da entrada que estiver sendo assinada! Conclua o método de transação <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">digest(input_index)</span> que calcula a mensagem de 32 bytes para assinar uma entrada.',
        list_heading: 'Algumas observações:',
        list_one: '"Double SHA-256" ou dSHA256 = sha256(sha256(data))',
        list_two:
          '"value "é a quantidade de satoshis na saída que está sendo gasta. Nós o adicionamos à nossa classe Input na etapa 2 e apenas o salvamos lá dentro da classe até agora.',
        list_three:
          'Scriptcode é o script de bitcoin que está sendo avaliado. Também adicionamos isso à nossa classe Input na etapa 2.',
        paragraph_three:
          'Vamos nos aprofundar mais nisso na próxima seção, mas para gastar com seu endereço pay-to-witness-public-key-hash, seu código de script seria:',
        paragraph_four: '...que decodifica para o seguinte script de bitcoin.',
        paragraph_five:
          'Para obter mais informações sobre código de script, consulte <Link href="https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki" target="_blank" className="underline">BIP 143</Link>.',
        paragraph_six:
          'A transação bruta tem uma pré-imagem que é a serialização de:',
        headings: {
          item_one: 'Descrição',
          item_two: 'Nome',
          item_three: 'Tipo',
          item_four: 'Tamanho',
        },
        table: {
          row_one: {
            item_one: 'Versão da transação, padrão 2',
            item_two: 'version',
            item_three: 'int',
            item_four: '4',
          },
          row_two: {
            item_one:
              'O dSHA256 de todos os pontos de saída de todas as entradas, serializado',
            item_two: 'bytes',
            item_three: 'bytes',
            item_four: '32',
          },
          row_three: {
            item_one:
              'O dSHA256 de todos os valores de sequência de todas as entradas, serializado',
            item_two: 'sequences',
            item_three: 'bytes',
            item_four: '32',
          },
          row_four: {
            item_one:
              'O ponto de saída serializado da única entrada que está sendo assinada',
            item_two: 'outpoint',
            item_three: 'bytes',
            item_four: '36',
          },
          row_five: {
            item_one: 'O script de saída que está sendo gasto',
            item_two: 'scriptcode',
            item_three: 'bytes',
            item_four: '(var)',
          },
          row_six: {
            item_one:
              'O valor em satoshis que está sendo gasto pela única entrada que está sendo assinada',
            item_two: 'value',
            item_three: 'int',
            item_four: '8',
          },
          row_seven: {
            item_one:
              'O valor da sequência da única entrada que está sendo assinada',
            item_two: 'sequence',
            item_three: 'int',
            item_four: '8',
          },
          row_eight: {
            item_one: 'O dSHA256 de todas as saídas, serializado',
            item_two: 'outputs',
            item_three: 'bytes',
            item_four: '32',
          },
          row_nine: {
            item_one: 'Tempo de bloqueio da transação, padrão 0',
            item_two: 'locktime',
            item_three: 'int',
            item_four: '4',
          },
          row_ten: {
            item_one:
              'Tipo de hash de assinatura, usaremos 1 para indicar "ALL',
            item_two: 'sighash',
            item_three: 'int',
            item_four: '4',
          },
        },
        paragraph_seven:
          'Por fim, a mensagem que assinamos é o SHA-256 duplo de todos esses dados serializados.',
        success: 'O método digest() parece correto. Excelente trabalho!',
      },
    },
    put_it_together_four: {
      hard: {
        title: 'Juntando tudo',
        heading: 'Assinando!',
        nav_title: 'Assinando a transação',
        paragraph_one: `Escrevemos o código de verificação de assinatura ECDSA no último capítulo, agora precisamos reorganizá-lo um pouco para criar uma assinatura válida. Adicione um método chamado <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">compute_input_signature(index: int, key: int)</span> à sua classe Transaction que aceita um índice de entrada e uma chave privada (um inteiro de 32 bytes!). Ele deve calcular o resumo da mensagem para a entrada escolhida usando o método <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">digest()</span> da etapa 6 e retornar uma assinatura ECDSA na forma de dois inteiros de 32 bytes r e s.`,
        paragraph_two:
          'Consulte <Link href="https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm" target="_blank" className="underline">esta página</Link> para obter informações sobre o algoritmo de assinatura ECDSA. Além disso, <Link href="https://www.secg.org/sec1-v2.pdf#subsubsection.4.1.3" target="_blank" className="underline">este PDF</Link> (página 44, seção 4.1.3).',
        paragraph_three:
          'O protocolo bitcoin exige uma etapa extra no algoritmo de assinatura, que requer que o valor s seja "baixo", ou seja, menor que a ordem da curva dividida por 2. Saiba mais sobre isso em <Link href="https://github.com/bitcoin/bips/blob/master/bip-0146.mediawiki#low_s" target="_blank" className="underline">BIP 146</Link>.',
        success:
          'O método compute_input_signature() parece correto. Excelente trabalho!',
      },
    },
    put_it_together_five: {
      hard: {
        title: 'Juntando tudo',
        heading: 'Preencha a Testemunha',
        nav_title: 'Preencha a Testemunha',
        paragraph_one:
          'Termine o método <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">sign_input(index: int, key: int)</span> que chama nosso método da etapa 7 <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">compute_input_signature(index, key)</span> e manipula seu valor de retorno. Os números r e s precisam ser codificados com um algoritmo chamado DER, que implementamos para você.',
        paragraph_two:
          'O Bitcoin exige um byte extra anexado à assinatura DER que representa o "tipo de sighash". Por enquanto, sempre usaremos o byte 0x01 para indicar "SIGHASH ALL".',
        paragraph_three:
          'Quando tivermos esse blob de assinatura, precisaremos criar um objeto Witness(Testemunha) com dois itens de pilha: o blob de assinatura e sua chave pública compactada. Envie a assinatura primeiro, seguida da chave pública.',
        paragraph_four:
          'O objeto da pilha de testemunhas pode então ser anexado ao array de testemunhas do objeto de transação.',
        success: 'O método sign_input() parece correto. Excelente trabalho!',
      },
    },
    put_it_together_six: {
      hard: {
        title: 'Juntando tudo',
        heading: 'Junte tudo',
        nav_title: 'Junte tudo!',
        paragraph_one:
          'Conhecemos nossa entrada, conhecemos nosso resultado. Estamos prontos para criar e assinar uma transação? Não exatamente. Temos uma entrada de 1,61 BTC e uma saída de 1 BTC... o que acontece com os outros 0,61 BTC? A maior parte será "troco" e precisamos enviá-lo de volta para nosso próprio endereço!',
        paragraph_two:
          'Escreva um script que crie e assine um objeto de transação. Ele deve ter uma entrada (o UTXO que identificamos na etapa 1) e duas saídas:',
        paragraph_three:
          'Mas espere! Precisamos incluir uma "taxa". Vamos cortar uma pequena parte de nossa saída de mudança para os pools de mineração para incentivá-los a incluir nossa transação em um bloco. Vamos reduzir nosso troco de 61.000.000 para 60.999.000 satoshis.',
        paragraph_four:
          'Finalmente, nosso trabalho está concluído. Seu script deve terminar retornando o resultado da transação <span className="text-green p-1 font-mono bg-[#0000004D] m-0.5 text-sm">serialize()</span>. Essa é uma transação de bitcoin assinada válida e podemos transmiti-la à rede para enviar a Mika 3000 o dinheiro de que ele precisa!',
        bullet_one:
          'Mika 3000 recebe 100.000.000 satoshis para bc1qgghq08syehkym52ueu9nl5x8gth23vr8hurv9dyfcmhaqk4lrlgs28epwj',
        bullet_two:
          'Você recebe 61.000.000 de volta em seu endereço bc1qm2dr49zrgf9wc74h5c58wlm3xrnujfuf5g80hs',
        success: 'Você conseguiu! Você criou uma transação!',
      },
    },
    outro_one: {
      title: 'Outro',
      nav_title: 'Capítulo completo',
      heading: 'Você conseguiu!',
      paragraph_one:
        'Você criou com sucesso uma transação do zero para pagar Mika 3000 pela ajuda dela. Agora que já terminamos, vamos ver o que podemos encontrar na ilha de Vanderpoole.',
    },
    resources: {
      in_out: {
        input_class_heading: 'Classe Input',
        input_class_paragraph_one: 'Recursos placeholder',
        output_class_heading: 'Classe Output',
        output_class_paragraph_one: 'Recursos placeholder',
      },
      put_it_together: {
        building_a_transaction_heading: 'Criando de uma transação',
        building_a_transaction_paragraph_one: 'Recursos placeholder',
      },
    },
  },
  chapter_seven: {
    title: 'O ataque é a melhor defesa',
    paragraph_one:
      'Você e Mika 3000 chegam à ilha particular de Vanderpoole primeiro de avião e paraquedas, depois de buggy nas dunas e, por fim, de barco a remo que rema sozinho.',
    intro_one: {
      title: 'Introdução',
      nav_title: 'Infiltrando no complexo',
      paragraph_one:
        'Você pergunta aos seus compatriotas se eles estão preocupados com o exército de drones de segurança de Vanderpoole.',
      paragraph_two:
        '—HOLOCAT: "Me dê 15 minutos. Eles são basicamente pássaros, e eu sou um gato. Eles não têm a menor chance."',
      paragraph_three:
        'A Holocat estende suas garras e lida com o exército de drones de Vanderpoole, um por um. Mika 3000 lhe entrega um suéter preto de gola alta, luvas e um par de óculos de visão noturna.',
      paragraph_four:
        '—MIKA 3000: "Não se pode fazer espionagem com uma camisa havaiana. O que você estava pensando? Este não é mais um depósito abandonado; é uma fortaleza. Aqui, quase me esqueci. Pegue este gancho."',
      paragraph_five:
        'Pensando no que teriam se metido, você e Mika 3000 escalam as paredes do castelo da residência principal de Vanderpoole. Para sua surpresa, a casa dele está repleta de arte, livros e revistas de papel pró-bitcoin. Ele é, ou melhor, era, um verdadeiro bitcoiner. Uma coleção de mineradores de 125 anos atrás está preservada em vitrines de vidro. Então você vê: A oficina de Vanderpoole.',
    },
    intro_two: {
      nav_title: 'A sala de controle',
      paragraph_one:
        'A sala gigantesca é uma bagunça, embora seu layout seja metódico. Lembra-se de quando os mineradores estavam entupindo a rede bitcoin com blocos vazios? Dentro de cadernos abertos, você encontra os projetos de Vanderpoole para o backdoor que ele usou, esboçados em detalhes. Você estava certo: era tudo mentira, mas não contada por um vilão conivente, mas por um crente desesperado no bitcoin, cuja empresa não podia mais competir. Para preservar seu legado, Vanderpoole infectou os mineradores com um vírus.',
      paragraph_two:
        'O vírus substitui uma seção do código usado por todos os mineradores, independentemente de fazerem parte de um pool ou não. A lógica de construção de blocos, o algoritmo que reúne as transações em um modelo de bloco. O modelo ainda é passado para o código de hashing legítimo para prova de trabalho. Os modelos são combinados com zilhões de nonces diferentes durante a busca por um hash válido, mas quando um é encontrado, o dano - a ausência de qualquer transação no modelo de bloco - já foi feito.',
      paragraph_three:
        '—HOLOCAT: "Que perda. Sua família já foi ótima. É muito triste ver os Vanderpoole chegarem a esse ponto."',
    },
    intro_three: {
      nav_title: 'Corrigindo o software',
      paragraph_one:
        'Mas você não pode simplesmente deixar o código de mineração danificado no servidor de Vanderpoole. Ele continuará infectando os mineradores. Você tem que consertá-lo! Enquanto você lê o código, o Holocat mostra uma tela de mempool que está sendo preenchida com transações não confirmadas. Quanto mais cedo esse código for corrigido, melhor.',
    },
    mempool_transaction_one: {
      title: 'Blocos de construção',
      nav_title: 'Monte um bloco',
      heading: 'Desafio de programação',
      python: {
        paragraph_one:
          'Esse é o código que você encontra no servidor do Vanderpoole. Ele importa o mempool atual de um arquivo JSON e armazena todas as transações não confirmadas na memória como instâncias da classe MempoolTransaction. A função que Vanderpoole desativou é <span className="text-green">assemble_block()</span>. Se você executar o código como Vanderpoole o deixou, verá o problema imediatamente.',
      },
      javascript: {
        paragraph_one:
          'Esse é o código que você encontra no servidor do Vanderpoole. Ele importa o mempool atual de um arquivo JSON e armazena todas as transações não confirmadas na memória como instâncias da classe MempoolTransaction. A função que Vanderpoole desativou é <span className="text-green">assembleBlock()</span>. Se você executar o código como Vanderpoole o deixou, verá o problema imediatamente.',
      },
      paragraph_two: {
        a: 'Você precisa corrigir a função de montagem de blocos não apenas para criar blocos válidos, mas também para maximizar as taxas no bloco, de modo que os mineradores possam obter o maior lucro possível de acordo com as regras de consenso. As regras de consenso mais importantes às quais você precisará prestar atenção restringem o total de ',
        b: {
          text: 'peso das transações',
          href: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=what%2520are%2520weighted%2520units',
          question: 'O que são unidades ponderadas?',
        },
        c: ' e a',
        d: {
          text: 'ordem das transações',
          href: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=what%2520order%2520do%2520transactions%2520need%2520to%2520be%2520in%2520a%2520block',
          question: 'Em que ordem as transações precisam estar em um bloco?',
        },
        e: ' no bloco.',
      },
      paragraph_three:
        'Você pode fazer as seguintes suposições para concluir sua missão:',
      bullet_one:
        'Todas as transações no mempool já foram verificadas como válidas.',
      bullet_two:
        'A transação da coinbase e o peso que ela contribui para o bloco podem ser ignorados.',
      paragraph_four:
        'Você pode visualizar todo o arquivo JSON bruto do mempool <Link href="https://github.com/saving-satoshi/resources/blob/main/chapter-7/mempool.json" target="_blank" className="underline">aqui</Link>.',
      paragraph_five:
        'Ou procure um trecho do arquivo nesta tabela para obter alguns padrões básicos:',
      headings: {
        item_one: 'ID da transação',
        item_two: 'Tarifa',
        item_two_b: 'Satoshis',
        item_three: 'Peso',
        item_three_b: 'Unidades de peso',
        item_four: 'Ancestrais',
      },
      table_one: {
        footer:
          'Visualize o arquivo json <Link href="https://github.com/saving-satoshi/resources/blob/main/chapter-7/mempool.json" target="_blank" className="underline">aqui</Link> para obter o restante dos dados da transação',
      },
      poor: 'É um bloqueio válido, mas você pode fazer melhor? Tente cobrar mais taxas.',
      good: 'É um bloqueio válido, mas você ainda não está obtendo o máximo de taxas. Continue trabalhando ou continue, a escolha é sua.',
      success: 'É um bloco válido, e você otimizou as taxas. Muito bom!',
    },
    outro_one: {
      title: 'Outro',
      nav_title: 'Capítulo completo',
      heading: 'Você conseguiu!',
      paragraph_one:
        'Você escapa do complexo e volta para casa. Os investidores vendem suas ações da BitRey em massa quando a história é divulgada, fazendo despencar o patrimônio líquido de Vanderpoole.',
    },
    resources: {
      mempool_transaction_one: {
        bytes_v_weight_heading: 'Bytes versus unidades de peso',
        bytes_v_weight_paragraph_one:
          'Na construção de blocos de bitcoin, "unidades de peso" e "bytes" são duas métricas diferentes usadas para medir o tamanho das transações e dos blocos.',
        bytes_v_weight_subheading_bytes: 'Bytes',
        bytes_v_weight_paragraph_two:
          'Bytes referem-se ao tamanho bruto de uma transação ou bloco em termos de dados reais. É o tamanho literal dos dados da transação quando eles são serializados (convertidos em um formato que pode ser armazenado ou transmitido). Antes da implementação do Segregated Witness (SegWit), o tamanho do bloco era limitado a 1 megabyte (1 MB), medido em bytes.',
        bytes_v_weight_subheading_wu: 'Unidades ponderadas',
        bytes_v_weight_paragraph_three:
          'As unidades ponderadas são uma métrica mais complexa introduzida com o SegWit na Bitcoin Improvement Proposal 141 <Link href="https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki#user-content-Other_consensus_critical_limits" target="_blank" className="undeline">BIP 141</Link>. Esse sistema visa alocar de forma mais justa o espaço do bloco, considerando o impacto dos dados de testemunha separadamente.',
        bytes_v_weight_paragraph_four:
          'Em nossa lição, é importante observar que estamos usando unidades de peso para calcular o tamanho máximo do bloco e o mesmo para cada tx, portanto, certifique-se de que seu bloco não exceda o tamanho máximo de 4000000 unidades de peso.',
      },
    },
  },

  chapter_eight: {
    title: 'Vinte e um milhões',
    paragraph_one: `Graças à sua investigação, as pessoas realmente querem saber de você, então você toca no nariz do Holocat, revelando um convite de Deborah Chunk, que o convida a comparecer pessoalmente nos escritórios do LARGE BIG NEWS Studios. A divulgação da história é importante, portanto, mais uma vez, você entra em seu Budgetcopter.`,
    intro_one: {
      title: 'Introdução',
      nav_title: 'O engano de Vanderpoole',
      paragraph_one: `—DEBORAH CHUNK: "Esses documentos expõem as supostas mentiras de Thomas Vanderpoole de uma forma que é certamente histórica, até mesmo escandalosa. A primeira coisa que as pessoas mais vão querer saber é se você agiu sozinho. A segunda é onde você obteve suas informações."`,
      paragraph_two: `Você conta a ela sobre o Holocat e somente sobre o Holocat. Você diz que a informação foi entregue diretamente a você e a Mika 3000 por alguém que diz ser Satoshi Nakamoto, que você suspeita ser, na verdade, um coletivo de hackers. Esse último ponto faz com que Thomas Vanderpoole ligue diretamente para o programa.`,
    },
    intro_two: {
      title: 'Introdução',
      nav_title: ' A raiva de Vanderpoole',
      paragraph_one: `—THOMAS VANDERPOOLE: "Minha família é Satoshi Nakamoto! Está vendo o que esse palhaço acabou de dizer? Ele acabou de admitir que trabalha com hackers, um coletivo que só usa o nome Satoshi Nakamoto para reivindicar um legado que é meu por direito. Esse canalha está mentindo para minar os protestos dos bitcoiners que estão legitimamente chateados com a eliminação das recompensas de bloco!"`,
      paragraph_two: `Vanderpoole continua a lançar insultos de dois séculos atrás contra você. Ele o chama de verminoso, de vagabundo, de covarde, de novato e muito mais. Você quase se sente mal por ele. Sua família foi inegavelmente importante para a história do bitcoin, mesmo que suas afirmações sobre Satoshi Nakamoto sejam transparentemente falsas.`,
    },
    intro_three: {
      intro: 'Introdução',
      nav_title: 'Alegações contra Vanderpoole',
      paragraph_one: `—DEBORAH CHUNK: "Sr. Vanderpoole, se me permite. As pessoas estão confusas e incertas sobre se o fornecimento de bitcoin foi adulterado. O senhor pode provar que não participou da suposta adulteração? Hacker misterioso e seu holocat, você pode provar que Vanderpoole tentou cometer esse crime contra o bitcoin?"`,
    },
    building_blocks_one: {
      title: 'Blocos de construção',
      nav_title: 'Localizando a ponta da corrente',
      paragraph_one: {
        a: 'Você sabe que Vanderpoole tem tentado confundir as pessoas ao minerar blocos que geram mais bitcoins do que o permitido, inflacionando o suprimento de dinheiro. Esses blocos são inválidos porque violam regras de protocolo codificadas, mas ainda assim podem enganar algumas pessoas que executam softwares com bugs ou mal-intencionados, ou ',
        b: {
          text: 'clientes leves(light clients)',
          href: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=what%2520are%2520light%2520clients%253F',
          question: 'O que são clientes leves?',
        },
        c: ' que não verificam totalmente os dados da rede.',
      },
      paragraph_two: `Você também sabe que em algum lugar da rede há uma corrente de blocos válidos, desde o bloco de gênese até a "ponta da corrente" de hoje, em que cada transação e bloco seguem as regras. Essa corrente é a única corrente <span className="italic">real</span>, a única corrente que importa e a única corrente em que o suprimento de 21 milhões de bitcoins originais do bitcoin está intacto.`,
      paragraph_three:
        'Agora, na TV ao vivo e diante do mundo inteiro, você precisa encontrar o blockchain válido mais longo e verificar a integridade do suprimento de moedas. Enquanto estiver fazendo isso, você também poderá provar que Vanderpoole transformou a rede bitcoin em um campo minado de blocos inválidos.',
    },
    building_blocks_two: {
      title: 'Blocos de construção',
      nav_title: 'Uma árvore de blocos de bitcoin',
      paragraph_one:
        'Cada bloco tem exatamente um bloco anterior, mas pode ter mais de um bloco seguinte. Por esse motivo, os blocos de bitcoin formam mais uma árvore do que uma corrente. Alguns dos ramos são becos sem saída e, como você deve provar, alguns dos ramos são inválidos devido às travessuras de Vanderpoole.',
      paragraph_two:
        'Em algum lugar desse labirinto, há um caminho que vai do bloco de gênese até o bloco mais recente de hoje. Você precisa encontrá-lo e dizer à Deborah Chunk qual bloco está na ponta da corrente mais válida da árvore... antes do próximo intervalo comercial. Ahhh!',
      paragraph_three:
        'Essa interpretação artística da "árvore" do blockchain do bitcoin mostra como cada bloco tem exatamente um pai, mas pode ter mais de um filho. Cada bloco é rotulado com seu hash e o hash de seu pai (<span className="p-1 font-mono m-0.5 text-sm">anterior</span>).',
      paragraph_four:
        'Alguns desses blocos são vermelhos porque são inválidos. O caminho mais longo de blocos a partir do bloco de gênese é colorido de verde e representa a corrente "mais funcional" ou "mais válida". As transações nesses blocos são as únicas transações realmente "confirmadas". Outros blocos válidos, os azuis, não têm tantos descendentes quanto a corrente "mais trabalhosa". Eles terminam no que é chamado de <span className="italic">pontas obsoletas</span>.',
    },
    building_blocks_three: {
      title: 'Blocos de construção',
      nav_title: 'Explore a API do Bitcoin',
      heading: 'A API do Bitcoin',
      paragraph_one: `Para responder a essas perguntas, você precisará interagir com um nó completo de bitcoin por meio de sua API JSON-RPC. Importamos uma biblioteca para você chamada <span className="p-1 font-mono bg-[#0000004D] m-1">bitcoin_rpc</span>, que lida com a conexão HTTP segura do seu script com o full node, executa seus comandos e retorna as respostas. Seu full node está "podando", de modo que só tem acesso aos últimos 300 blocos, mas isso deve ser suficiente para incluir todo o período de tempo da recente sujeira de Vanderpoole.`,
      paragraph_two: `Vamos começar nos familiarizando com a API. A biblioteca tem uma função que aceita um argumento obrigatório, <span className="p-1 font-mono bg-[#0000004D] m-1">method</span> (uma string) e um argumento opcional, <span className="p-1 font-mono bg-[#0000004D] m-1">params</span> (uma string ou um número):`,
      paragraph_three:
        'A API também tem um método conveniente de "help"! Peça ajuda a ela para saber mais sobre os comandos disponíveis e, em seguida, passe no desafio imprimindo a dificuldade atual da rede.',
      success: 'Bom trabalho ao explorar a API! Vamos seguir em frente.',
    },
    building_blocks_four: {
      title: 'Blocos de construção',
      nav_title: 'Encontre o menor bloco de transações',
      heading: 'Dados do bloco',
      paragraph_one: `Cada nó completo de bitcoin(full node) tem um banco de dados. É nele que os blocos são armazenados e indexados por seu hash. O full node mantém o controle de quais blocos são candidatos em cada altura da corrente com um segundo índice que mapeia altura -> [hashes de bloco].`,
      paragraph_two: `A API JSON-RPC retorna dados de bloco como objetos JSON que incluem uma propriedade<span className="p-1 font-mono bg-[#0000004D] m-1">txs</span>que é um array de objetos de transação.`,
      paragraph_three: `Recupere todos os candidatos a bloco na altura 6929996 e imprima o hash do bloco com o menor número de transações.`,
      success: 'Muito bem',
    },
    building_blocks_five: {
      title: 'Blocos de construção',
      nav_title: `Obtenha a taxa de transação`,
      heading: `Dados de transação`,
      paragraph_one: `Os objetos de transação confirmados em um bloco são objetos JSON que incluem arrays de "entradas" e "saídas". Ambos arrays são listas de UTXOs, também conhecidas como "moedas". Os objetos de moeda têm uma propriedade "value" representada em satoshis.`,
      paragraph_two: `O array "inputs" são as moedas gastas (destruídas) pela transação e o array "outputs" são as moedas criadas pela transação. Você deve se lembrar do Capítulo 6 que as transações sempre pagam uma taxa para incentivar os mineradores a incluí-las em um bloco. Essa taxa é exatamente a diferença de valor entre os valores totais de entrada e saída de uma transação.`,
      paragraph_three: `Em outras palavras, o minerador fica com qualquer bitcoin que tenha sido enviado para a transação, mas não enviado de volta para os destinatários da transação.`,
      paragraph_four: `Há uma transação com o txid:`,
      paragraph_five: `em um bloco com o hash:`,
      paragraph_six: `Imprima a taxa da transação em satoshis.`,
      success: `Muito bem`,
    },
    building_blocks_six: {
      title: 'Blocos de construção',
      nav_title: 'Determine o subsídio',
      heading: 'A transação Coinbase',
      paragraph_one:
        'A primeira transação em cada bloco é chamada de coinbase. Ela também pode ser chamada de transação "0ª" (referindo-se a txs[0]) e tem algumas propriedades muito especiais. Em primeiro lugar, ela não tem entradas! Isso ocorre porque ela não gasta nenhuma moeda existente. Em segundo lugar, seu valor de saída é estritamente definido pelo protocolo (apesar do que Vanderpoole possa dizer!). Esse é o mecanismo pelo qual os mineradores coletam as taxas das transações e geram novas moedas.',
      paragraph_two:
        'É bastante fácil entender como as taxas totais de transação em um bloco são somadas, mas de onde vem o valor do subsídio do bloco? Como cada participante da rede bitcoin determina exatamente quanto os novos mineradores de bitcoin podem gerar em um determinado momento?',
      paragraph_three:
        'Esse é o algoritmo escrito por Satoshi Nakamoto que permaneceu como uma propriedade central imutável do sistema bitcoin desde o início:',
      list_one:
        'A partir do bloco nº 1 minerado em 2009, o subsídio do bloco é de 50 BTC (ou 5.000.000.000 satoshis)',
      list_two: 'A cada 210.000 blocos, esse valor é reduzido pela metade.',
      paragraph_four:
        'Na altura do bloco 209.999, o subsídio era de 50 BTC. No bloco seguinte, na altura de 210.000, o subsídio era de 25 BTC, e assim por diante. Após 32 "halvings", o subsídio será de um único satoshi. A última redução pela metade reduzirá o subsídio a zero.',
      paragraph_five: 'E A ÚLTIMA REDUÇÃO PELA METADE FOI ONTEM!',
      paragraph_six:
        'Conclua a implementação da seguinte função que aceita uma altura de bloco como argumento e retorna o valor do subsídio em satoshis.',
      success: 'A função get_subsidy parece correta. Bom trabalho!',
    },
    building_blocks_seven: {
      title: 'Blocos de construção',
      nav_title: 'Obtenha o bloco válido',
      heading: 'Aquele pernóstico escroque!',
      paragraph_one: `Há quatro blocos candidatos na altura 6929851. Apenas um deles é um bloco válido, os outros três foram minerados pelo cartel de Vanderpoole em tentativas imprudentes de inflar o suprimento de dinheiro do bitcoin.`,
      paragraph_two: `Usando a função de subsídio de bloco que você escreveu no desafio anterior e a API JSON-RPC, escreva uma função para verificar a validade de um candidato a bloco. Faça isso verificando se a saída da coinbase está correta. Sua função deve retornar true se o bloco for válido.`,
      paragraph_three: `Aqui está como seu código será usado para encontrar o único bloco válido na altura 6929851:`,
      success: 'A função de validação do bloco parece correta. Bom trabalho!',
    },

    building_blocks_eight: {
      title: 'Blocos de construção',
      nav_title: 'Hora do show!',
      heading_one: 'Hora do show!',
      paragraph_one: `As câmeras estão rodando, dois bilhões de pessoas em todo o mundo estão sintonizadas na transmissão ao vivo. Faltam apenas alguns minutos para o próximo intervalo comercial. Deborah Chunk está suando. De alguma forma, o Holocat também está suando. Em algum lugar do outro lado da chamada, Vanderpoole também deve estar suando. Este é o seu momento.`,
      paragraph_two: `Começando com o bloco válido imediatamente antes daquele que você encontrou na altura 6929851, encontre a corrente mais longa de blocos válidos que puder. Armazene a corrente como uma matriz de hashes de bloco. Enquanto estiver fazendo isso, mantenha uma matriz de cada bloco inválido que encontrar também, apenas para mostrar ao mundo o quanto Vanderpoole tentou quebrar o bitcoin. Não importa a ordem desses hashes de bloco inválidos, mas sua corrente válida DEVE começar com o hash do bloco 6929850, seguido de um hash de bloco em cada altura até a ponta da corrente.`,
      paragraph_three: `Vanderpoole é sorrateiro! Ele minerou blocos válidos em cima de blocos inválidos e blocos inválidos em cima de corrente curtas de blocos válidos! É um labirinto, um campo minado, lá fora. Talvez seja necessário acompanhar vários ramos válidos ao atravessar a árvore. Haverá blocos válidos com pais válidos que não estão na corrente mais longa! No final, haverá apenas uma folha válida com uma altura maior do que todas as outras.`,
      paragraph_four: `Lembre-se: os objetos de bloco retornados pela API JSON têm uma propriedade "prev" que identifica o pai do bloco por seu hash:`,
      heading_two: `Um bloco é válido SOMENTE se:`,
      paragraph_five: `Seu valor da saída da Coinbase é igual ao subsídio esperado do bloco mais o total de taxas de transação no bloco.`,
      heading_three: `E`,
      paragraph_six: `O bloco é um filho de outro bloco VÁLIDO. Isso garante uma VALID CHAIN.`,
      paragraph_seven: `Retorna um objeto JSON com duas matrizes rotuladas como "válido" e inválido:`,
      success: 'A função showtime parece ótima. Bom trabalho!',
    },
    outro_one: {
      title: 'Outro',
      nav_title: 'Capítulo completo',
      heading: 'Estamos fazendo isso ao vivo!',
      paragraph_one:
        'Você encontrou a corrente mais longa e provou isso para todos! A lista de blocos inválidos que você encontrou é impressionantemente longa. Vanderpoole se esforçou ao máximo para tentar fazer com que as pessoas aceitassem seus blocos contendo subsídios, mas não conseguiu fazer nada para mudar as regras do bitcoin. Como observamos, o fato de um bloco fazer parte de uma corrente não significa necessariamente que ele seja válido. Agora, você está um passo mais perto de desacreditar Vanderpoole. Não é preciso dizer que ele não respondeu ao restante das perguntas da Sra. Chunk.',
    },
    resources: {
      building_blocks_three: {
        tip: 'Experimente esse comando primeiro para ter uma ideia de quais comandos estão disponíveis.',
        rpc_heading: 'Comandos RPC',
        rpc_paragraph_one:
          'Os comandos RPC são uma interface de comandos que permitem que um cliente faça solicitações a um programa, criando uma interação entre o cliente e o servidor. Essas solicitações são enviadas pelo cliente ou solicitante juntamente com quaisquer parâmetros que o cliente precise para modificar a solicitação.',
      },
      building_blocks_four: {
        block_data_heading: 'Dados do bloco',
        block_data_paragraph_one:
          'Em sua essência, o bitcoin é um livro-razão, uma lista de todas as transações já enviadas desde sua criação. Cada transação é organizada por bloco e cada bloco é organizado em ordem a partir do bloco de gênese.',
      },
      building_blocks_five: {
        transaction_data_heading: 'Dados de transação',
        transaction_data_paragraph_one:
          'Cada transação contém seu próprio subconjunto de informações para se distinguir de outras transações e para deixar claro quanto bitcoin é transferido e quais entradas e saídas estão sendo usadas.',
      },
      building_blocks_six: {
        block_subsidy_heading: 'Subsídio do bloco',
        block_subsidy_paragraph_one:
          'O subsídio do bloco é a quantidade de bitcoin liberada para circulação a partir da base de moedas de cada novo bloco. Como há apenas cerca de 21 milhões de bitcoins totais que podem ser criados, deve haver alguma equação decrescente para permitir um subsídio da base de moedas que atinja o valor de 21 milhões. A equação abaixo visualiza o que existe no bitcoin.',
        block_subsidy_paragraph_two:
          'O que essa equação faz? Bem, sabemos que a recompensa da Coinbase do bloco Genesis foi de 50 bitcoins e isso é indicado pelo numerador da fração no lado direito da equação. O denominador é a parte de nossa equação que indica o quanto a recompensa será reduzida a cada metade, neste caso 2, ou seja, pela metade. Também sabemos que o bitcoin só tem conhecimento de blocos individuais como um sistema cronológico, portanto, fazemos com que cada redução pela metade tenha 210.000 blocos. Por fim, queremos fazer com que cada halving dobre a cada vez, de modo que queremos dobrar o valor do subsídio que é reduzido à metade a cada halving, de modo que elevamos 2 à potência do halving atual `i` para a época final do halving, 32 iterações no futuro.',
      },
      building_blocks_seven: {
        validating_heading: 'Validação de blocos',
        validating_paragraph_one:
          'A validação de um bloco é extremamente importante para a solidez da rede, pois cada bloco é construído com base em transações de blocos anteriores. Se for descoberto que algum bloco é inválido no passado, isso pode causar enormes ramificações, pois uma grande corrente de blocos passa a ser questionada com um bloco inválido anteriormente.',
      },
      building_blocks_eight: {
        showtime_heading: 'Validação da corrente',
        showtime_paragraph_one:
          'A validação do blockchain no Bitcoin é fundamental para manter a integridade e a segurança de toda a rede. Cada transação deve ser verificada pelos mineradores para garantir que ela seja legítima e siga as regras de consenso estabelecidas pela rede. Esse processo de validação evita gastos duplos e fraudes, permitindo que os usuários confiem no sistema sem a necessidade de uma autoridade central. Além disso, ele aumenta a transparência, pois todas as transações validadas são registradas em um livro-razão público, permitindo que qualquer pessoa audite o histórico das transações.',
      },
    },
  },

  chapter_nine: {
    title: 'Não confie, verifique.',
    paragraph_one: `Na hora certa, você provou ao mundo que Vanderpoole estava tentando confundir a rede bitcoin com blocos inválidos. Enquanto um intervalo comercial vai ao ar, a equipe de televisão do estúdio se prepara para o próximo segmento.`,
    intro_one: {
      title: 'Introdução',
      nav_title: 'Ameaças',
      paragraph_one:
        'Todos estão comemorando, todos estão sorrindo. Mas há um homem no set que não está feliz: um homem alto, bem vestido e de cabelos grisalhos que você reconhece imediatamente. A multidão se separa e você o vê cara a cara pela primeira vez: Vanderpoole!',
      paragraph_two:
        'Seus punhos estão cerrados. Você arruinou o negócio dele e expôs o longo golpe de sua família. A primeira coisa que sai da boca dele é uma ameaça de processá-lo todos os dias pelo resto de sua vida "vezes infinito".',
    },
    intro_two: {
      title: 'Introdução',
      nav_title: 'Chegando a um acordo',
      paragraph_one:
        'Enquanto Vanderpoole reclama, um produtor entra e lhe diz que os espectadores de todo o mundo querem apoiar a sua causa doando bitcoin e calzones para você por... algum motivo! Deborah pede que você forneça aos espectadores um endereço de carteira.',
      paragraph_two:
        'Isso deixa Vanderpoole ainda mais furioso. Ele exige que você divida as doações recebidas com ele, ou ele o afogará em mais processos judiciais, como se fosse possível haver mais de infinitos processos judiciais.',
      paragraph_three:
        'Compartilhar doações com Vanderpoole não faz muito sentido. O dinheiro vem de pessoas que querem lhe agradecer por expor os esforços de Vanderpoole para prejudicar o bitcoin. Você percebe que essa demanda tem mais a ver com o fato de ele estar perdendo do que com o fato de querer dinheiro. Por um momento, você até começa a se sentir mal por ele. Ele se colocou em um beco sem saída.',
      paragraph_four:
        'Como se pudesse ler sua mente, Deborah Chunk entra em cena. Ela pergunta se há alguma instituição de caridade para a qual Vanderpoole gostaria que uma parte das doações fosse destinada. Para sua surpresa, ele nomeia com entusiasmo a Lil Bits Foundation, uma organização sem fins lucrativos dedicada a ajudar crianças.',
      paragraph_five:
        'A tez de Vanderpoole muda de vermelho rabanete para roxo beterraba. Você começa a criar um contrato de script de bitcoin entre você e Vanderpoole. Ele é responsável por enviar os fundos para a Lil Bits Foundation. Esse contrato de script é o que você usará para derivar o endereço da doação. Ele tratará Vanderpoole como uma contraparte não confiável e garantirá que vocês dois possam gastar com ele como e quando concordarem.',
    },
    opcodes_one: {
      title: 'Códigos de operação',
      nav_title: 'Bitcoin Script',
      heading: 'Bitcoin cript',
      paragraph_one:
        'Mencionamos o script de bitcoin no capítulo 6, mas não nos aprofundamos nele porque as moedas que você estava gastando eram bloqueadas por um mecanismo simples: uma única assinatura e um script implícito que avaliava essa assinatura com uma chave pública. Agora as coisas ficarão mais interessantes.',
      paragraph_two:
        'Há duas partes importantes para gastar uma saída de bitcoin: Um script e uma pilha.',
      paragraph_three: `Primeiro, exploraremos os dois conceitos em um nível mais elevado.`,
    },
    opcodes_two: {
      title: 'OpCodes',
      nav_title: 'Bitcoin stack',
      heading: 'A pilha',
      paragraph_one:
        'Pense em uma pilha de livros 📚. Se você quiser adicionar um livro, terá de colocá-lo no topo da pilha. Não há outro lugar para ele ir. Se quiser ler um livro, o único que você pode acessar é o que está no topo da pilha. Mesmo que você queira mais de um, terá de começar no topo da pilha e ir descendo. Em termos de computação, uma pilha é como um array de itens de dados com duas operações:',
      paragraph_two:
        '<span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_PUSH</span> Adicione um item ao "topo" da pilha.',
      paragraph_three:
        '<span className="text-[#3DCFEF] w-fit rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_POP</span> Remova o item "superior" da pilha para processamento.',
      subheading_one: 'Exemplo:',
      stack_list_one:
        'Aqui está uma pilha: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">[]</span>',
      stack_list_two:
        'Pressione o número 1: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">[1]</span>',
      stack_list_three:
        'Pressione o número 2: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">[1, 2]</span>',
      stack_list_four:
        'Retire o item superior da pilha: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">[1]</span>',
      paragraph_four:
        'Observe que o primeiro item colocado na pilha será o último item retirado da pilha, portanto, será o último item processado pelo script. Por esse motivo, a pilha tem uma sensação de estar "de cabeça para baixo" ou "de trás para frente", e a primeira coisa que você vê na pilha provavelmente será a solução necessária no final do processamento do script.',
      paragraph_five:
        'Ao gastar a saída de uma transação de bitcoin, os elementos exigidos pelo gastador são fornecidos na seção de testemunha da entrada da transação de gasto (consulte o capítulo 6) e esses elementos são colocados na pilha antes do início de qualquer processamento de script. Vamos nos referir a esses itens como a pilha inicial (INITIAL STACK). Eles são importantes porque são literalmente os dados que desbloqueiam um script e permitem que as moedas sejam gastas!',
    },
    opcodes_three: {
      title: 'OpCodes',
      nav_title: 'OpCodes',
      heading: 'Códigos de operação',
      paragraph_one:
        'O script é uma série linear de comandos que são executados um a um, manipulando itens na pilha. Quando o fim do script é alcançado, deve haver EXATAMENTE UM ITEM NÃO-ZERO (NÃO-FALSO) restante na pilha, ou toda a operação é inválida e sua transação de bitcoin também. Há mais de 100 comandos na linguagem de script do bitcoin, chamados de "opcodes". Usaremos apenas alguns deles para este desafio.  ',
      paragraph_two:
        'Vamos demonstrar um exemplo em que bloqueamos um bitcoin com o problema matemático 1 + 2 = ? Quem souber a resposta para esse problema matemático poderá gastar as moedas.',
      paragraph_three: 'O script seria parecido com o seguinte:',
      paragraph_four:
        '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_1 OP_2 OP_ADD OP_EQUAL</span>',
      paragraph_five:
        'Esse script será "hasheado" e codificado com bech32 em um endereço para o qual alguém pode enviar moedas.',
    },
    opcodes_four: {
      title: 'OpCodes',
      nav_title: 'A solução de pilha',
      heading: 'A solução de pilha',
      paragraph_one:
        'A solução de pilha seria parecida com esta e a transação de gasto precisa conter todos esses elementos. Eles vão para a seção de testemunhas da entrada que está tentando gastar essas moedas. Vamos examinar isso:',
      table_one: {
        headings: {
          item_one: 'Etapa',
          item_two: 'Pilha',
          item_three: 'Execução de scripts',
        },
      },
      subheading_one: 'Explicação',
      stack_list_one:
        'init: a saída da transação de financiamento e a entrada da transação de gastos são reunidas.',
      stack_list_two:
        'Etapa 1: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_1</span>empurra "1" na pilha.',
      stack_list_three:
        'Etapa 2: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_2</span>empurra "2" na pilha.',
      stack_list_four:
        'Etapa 3: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ADD</span> retira dois itens da pilha, soma-os e coloca a soma de volta na pilha.',
      stack_list_five:
        'Etapa 4: <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_EQUAL</span> retira dois itens da pilha, compara-os e coloca um resultado booleano de volta na pilha.',
      paragraph_two:
        'Agora chegamos ao final do script e só resta um único item VERDADEIRO na pilha - as moedas foram gastas!',
      paragraph_three:
        'Se começássemos esse exemplo com um 4 na pilha, não poderíamos gastar as moedas porque o OP_EQUAL seria avaliado como FALSO. Para esses desafios, usaremos um conjunto muito limitado de opcodes, que apresentaremos por categoria.',
    },
    opcodes_five: {
      title: 'OpCodes',
      nav_title: 'Calcule aritmética básica',
      heading: 'Aritmética básica',
      paragraph_one:
        'O script Bitcoin pode fazer operações matemáticas simples. Você poderia bloquear moedas usando matemática simples, mas qualquer pessoa que saiba fazer matemática poderia gastar as moedas! Em outras palavras, não tente fazer isso na rede principal.',
      subheading_one:
        'Códigos operacionais que colocam inteiros ou dados arbitrários na pilha',
      opconstants_list_one_heading:
        '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_0</span>',
      opconstants_list_one_paragraph: 'Empurra o número 0 para a pilha.',
      opconstants_list_two_heading:
        '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_1</span>',
      opconstants_list_two_paragraph: 'Empurra o número 1 para a pilha.',
      opconstants_list_three_heading:
        '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_2</span>',
      opconstants_list_three_paragraph: 'Empurra o número 2 para a pilha.',
      opconstants_list_four_heading:
        '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_3</span>',
      opconstants_list_four_paragraph: 'Empurra o número 3 para a pilha.',
      opconstants_list_five_heading:
        '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_DUP</span>',
      opconstants_list_five_paragraph:
        'Empurra uma duplicata do item do topo da pilha para a pilha.',
      opconstants_list_six_heading:
        '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_PUSH</span>',
      opconstants_list_six_paragraph:
        'Empurra o seguinte valor de script para a pilha. Os valores de exemplo incluem os segredos SIG(alice), PUBKEY(alice), HASH256(secret). As strings em minúsculas representam dados do mundo real e os outros códigos operacionais desse interpretador os processarão como se fossem chaves, assinaturas, resumos de hash e pré-imagens reais.',
      subheading_two: 'Opcodes que fazem aritmética',
      oparithmetic_list_one_heading:
        '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ADD</span>',
      oparithmetic_list_one_paragraph:
        'Retira dois itens da pilha, soma-os e coloca a soma de volta na pilha.',
      oparithmetic_list_two_heading:
        '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_EQUAL</span>',
      oparithmetic_list_two_paragraph:
        'Retira dois itens da pilha, compara a igualdade entre eles e coloca um booleano de volta na pilha.',
      oparithmetic_list_three_heading:
        '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_EQUALVERIFY</span>',
      oparithmetic_list_three_paragraph:
        'Como OP_EQUAL, mas gera um erro e interrompe a execução do script imediatamente se os dois itens não forem iguais.',
      paragraph_two: 'Forneça a pilha inicial para gastar com o script.',
    },
    opcodes_six: {
      title: 'OpCodes',
      nav_title: 'Decodifique com criptografia',
      heading: 'Criptografia simples',
      paragraph_one:
        'Já exploramos o "pay to public key hash" em capítulos anteriores. Esse é o script do bitcoin que foi escrito explicitamente em milhões de saídas de transações antes que a testemunha segregada(segwit) aparecesse e o abreviasse. As moedas são bloqueadas pelo hash de uma chave pública. O gastador deve revelar a chave pública que corresponde a esse hash e, em seguida, fornecer uma assinatura verificada por essa chave pública.',
      subheading_one: 'Opcodes que fazem criptografia simples',
      opcryptography_list_one_heading:
        '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm h-fit">OP_HASH256</span>',
      opcryptography_list_one_paragraph:
        'Retira um item da pilha, calcula o digest double-SHA256 e coloca esse digest de volta na pilha. Em nosso exercício, essa operação é simbolizada usando strings. Exemplo: O script OP_1 OP_HASH256 produz a pilha [HASH256(1)]',
      opcryptography_list_two_heading:
        '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm h-fit">OP_CHECKSIG</span>',
      opcryptography_list_two_paragraph:
        'Retira dois itens da pilha. O primeiro item retirado deve ser uma chave pública no formato PUBKEY(...). O segundo item deve ser uma assinatura no formato SIG(...). Se as strings dentro dos parênteses em ambos os itens forem iguais, consideramos que se trata de uma assinatura ECDSA válida e colocamos TRUE de volta na pilha; caso contrário, FALSE',
      paragraph_two: 'Forneça a pilha inicial para gastar com o script.',
    },
    opcodes_seven: {
      title: 'OpCodes',
      nav_title: 'Multisig',
      heading: 'Multisig',
      paragraph_one:
        'As políticas de várias assinaturas fornecem uma lista de chaves públicas e um número de assinaturas necessárias para um gasto válido. Ela pode ser descrita como "m-de-n", o que significa que "é necessário um número m de assinaturas dessa lista de n chaves públicas". As chaves públicas e os valores m e n são normalmente incluídos no script de bloqueio e o gastador só precisa fornecer o número correto de assinaturas.',
      paragraph_two:
        'O Holocat aparece com uma mensagem pré-gravada de Satoshi Nakamoto!',
      paragraph_three:
        'Olá. Acidentalmente, encontrei um erro quando implementei <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_CHECKMULTISIG</span>. Ele retira um item extra da pilha que não é usado. Então, uh, whoops. Desculpe-me. Esse código é crítico para o consenso, portanto, toda operação <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_CHECKMULTISIG</span> no passado, presente e futuro do bitcoin será forçada a incluir um elemento "fictício". Não se esqueça disso ou você não poderá gastar suas moedas multisig!',
    },
    opcodes_eight: {
      title: 'OpCodes',
      nav_title: 'Assinar com várias chaves',
      heading:
        '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-1">OP_CHECKMULTISIG</span>',
      subheading_one:
        'Processa a assinatura múltipla m-de-n seguindo esse algoritmo.',
      multisig_list_one:
        'Retira um único número inteiro da pilha. Esse é o valor <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">n</span>.',
      multisig_list_two:
        'Pop <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">n</span> número de itens da pilha, espera-se que todos eles sejam chaves públicas do formato <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">PUBKEY(...)</span>',
      multisig_list_three:
        'Retira um único número inteiro da pilha. Esse é o valor <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">m</span>.',
      multisig_list_four:
        'Pop <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">m</span> número de itens da pilha, espera-se que todos eles sejam assinaturas do formato <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">SIG(...)</span>',
      multisig_list_five:
        'Retira um elemento extra da pilha sem absolutamente nenhuma razão.',
      multisig_list_six:
        'Itera por cada chave pública: Verifica a chave em relação à assinatura no topo da pilha. Se for válida, remove a chave e a assinatura e continua com a próxima chave pública. Se não for válida, remove somente a chave pública e prossegue para a próxima chave pública (que começará verificando a mesma assinatura no topo da pilha)',
      multisig_list_seven:
        'Se todas as chaves públicas tiverem sido testadas e houver alguma assinatura restante, a operação falhará.',
      multisig_list_eight:
        'Depois que todas as assinaturas tiverem sido removidas, a operação poderá ser concluída antecipadamente com sucesso, mesmo que ainda restem mais chaves públicas.',
      paragraph_one:
        'Observe que m <= n. Pode haver mais chaves públicas do que assinaturas, mas nunca mais assinaturas do que chaves públicas. Observe também que as chaves e as assinaturas DEVEM estar na mesma ordem, mesmo que algumas chaves não sejam usadas para assinar.',
      paragraph_two: 'Forneça a pilha inicial para gastar com o script.',
    },
    opcodes_nine: {
      title: 'OpCodes',
      nav_title: 'Aguarde para desbloquear',
      heading: 'Time Locks',
      paragraph_one:
        'No século passado, um documento intitulado BIP 65 propôs um novo código de operação para o bitcoin que acabou sendo adicionado às regras de consenso. Ele é usado para exigir que o nLocktime de uma transação seja igual ou superior a um valor especificado pelo script. As regras de consenso do Bitcoin já proíbem a inclusão de uma transação em um bloco se a altura desse bloco for maior que o nLocktime da transação. Em outras palavras, esse opcode torna uma transação impossível de ser gasta até que o blockchain atinja uma determinada altura em algum momento no futuro. Como foi adicionado com uma bifurcação suave, ele NÃO retira nada da pilha, o que significa que a maioria dos usos também exigirá um <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_DROP</span> também. Se o opcode determinar que é muito cedo para incluir essa transação em um bloco, a avaliação do script será interrompida imediatamente com um erro.',
      subheading_one: 'Opcodes que bloqueiam timelocks',
      optimelock_list_one_heading:
        '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_DROP</span>',
      optimelock_list_one_paragraph: 'Retira um item da pilha e o ignora.',
      optimelock_list_two_heading:
        '<span className="flex items-center text-[#3DCFEF] w-fit rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_CHECKLOCKTIMEVERIFY</span>',
      optimelock_list_two_paragraph:
        'Lê (não remove) o item superior da pilha e o interpreta como uma altura de bloco. Se o argumento de altura consumido pelo opcode não for pelo menos igual à altura do bloco NEXT, a operação será inválida.',
      paragraph_two: 'Forneça a pilha inicial para gastar com o script.',
    },
    opcodes_ten: {
      title: 'OpCodes',
      nav_title: 'Crie uma lógica',
      heading: 'Condicionais',
      paragraph_one:
        'Assim como qualquer outra boa linguagem de programação, o script de bitcoin tem ramificações lógicas! O caminho através das ramificações é normalmente escolhido pelo gastador para escolher a combinação de condições de autenticação que ele precisa satisfazer,',
      paragraph_two:
        '<span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_IF</span> <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ELSE</span> <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ENDIF</span> Ramos lógicos.',
      paragraph_three:
        '<span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_IF</span> retira um valor da pilha e o avalia como um booleano. Se for verdadeiro, a execução do código continua até <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ELSE</span> e, em seguida, pula para <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ENDIF</span>, caso contrário, ele pula para <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ELSE</span> e continua executando até <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ENDIF</span>. Os ramos lógicos podem ser aninhados, mas cada <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_IF</span> deve ser emparelhado com um <span className="text-[#3DCFEF] rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_ENDIF</span> para fechar cada ramificação; caso contrário, o interpretador emitirá um erro e o script falhará.',
      paragraph_four: 'Forneça a pilha inicial para gastar com o script.',
    },
    proposal_one: {
      title: 'Avançado',
      nav_title: 'De volta à história',
      heading: 'De volta à história!',
      paragraph_one: `Bom trabalho! Examinamos a maioria dos códigos de operação de que você precisará ao criar scripts para transações básicas. Agora vamos colocá-los à prova.`,
      paragraph_two: `Para cada proposta de contrato que você discutir, forneça um script de bitcoin e uma pilha de gastos válida.`,
    },
    proposal_two: {
      title: '2 de 2 multisig',
      nav_title: 'Assine de forma cooperativa',
      heading: '2 de 2 multisig',
      paragraph_one: `A primeira coisa que Vanderpoole sugere é um multisig 2 de 2. Todas as doações serão divididas entre você e a Lil Bits Foundation em 50/50. Isso será gerenciado por ambos, com cada um de vocês assinando todas as transações de gastos do endereço de doação. Isso significa que você terá de concordar com todas as retiradas do endereço de doação.`,
      paragraph_two: `Vanderpoole lhe entrega a chave pública dele, que é PUBKEY(vanderpoole) e a sua é PUBKEY(me).`,
      paragraph_three: 'Forneça a pilha inicial para gastar com o script.',
      next_step_message:
        'Parece bom! Agora vamos tentar com sua própria assinatura.',
    },
    proposal_three: {
      title: 'Transação condicional com bloqueio de tempo',
      nav_title: 'Faça-o esperar',
      heading: 'Transação condicional com bloqueio de tempo',
      paragraph_one: `Espere um minuto, isso não faz sentido - você não quer lidar com ele para sempre! O novo acordo é que você receberá todas as doações pelas próximas duas horas enquanto ainda estiver na TV. A Lil Bits Foundation fica com tudo o que entrar depois disso. Vocês olham para o bloco de bitcoin na parede do estúdio e concordam que o bloco de altura 6930300 provavelmente será minerado em cerca de duas horas.`,
      paragraph_two: `Lembre-se de que a chave pública de Vanderpoole é PUBKEY(vanderpoole) e a sua é PUBKEY(me).`,
      paragraph_three: 'Forneça a pilha inicial para gastar com o script.',
      next_step_message:
        'Parece bom! Agora vamos tentar com sua própria assinatura.',
    },
    proposal_four: {
      title: 'Transação secreta com pré-imagem bloqueada',
      nav_title: 'Trabalhe com um oráculo',
      heading: 'Transação secreta com pré-imagem bloqueada',
      paragraph_one:
        'Vanderpoole muda de ideia novamente. Ele não gosta desse acordo por causa das incógnitas. Ele decide que quer que a fundação Lil Bits receba o primeiro 1,0 BTC do total de doações e que você possa gastar o restante depois disso.',
      paragraph_two:
        'Não há como verificar um saldo total em vários UTXOs no script de bitcoin para que você concorde com um oráculo imparcial de terceiros: Deborah Chunk! Ela monitorará o valor total das doações no blockchain e, assim que elas somarem pelo menos 1,0 BTC, ela anunciará, ao vivo na TV, a pré-imagem de um valor de hash com o qual você se comprometerá no script.',
      paragraph_three: {
        a: 'Ela gera um nonce aleatório seguro em particular e, em seguida, entrega a você o resumo do hash: <span className="text-[#3DCFEF] w-fit rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">HASH256(FD3771E8)</span>. Você pode gastar todas as moedas que receber quando ela revelar esse segredo, e nenhum ',
        b: ' um segundo antes!',
      },
      paragraph_four: `Lembre-se de que a chave pública de Vanderpoole é PUBKEY(vanderpoole) e a sua é PUBKEY(me).`,
      paragraph_five: 'Forneça a pilha inicial para gastar com o script.',
      tooltip_one: {
        question: 'O que é um satoshi?',
        link: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=What%2520is%2520a%2520satoshi%253F',
        highlighted: 'satoshi',
      },
      next_step_message:
        'Vamos ver se usamos nossa assinatura com a pré-imagem corretamente.',
    },
    outro_one: {
      title: 'Outro',
      nav_title: 'Capítulo Completo',
      heading: 'Muito bem!',
      paragraph_one:
        'As doações já foram distribuídas para você e para a Lil Bits Foundation, e muitos espectadores lhe agradecem por esclarecer as ações de Vanderpoole. Embora a natureza descentralizada do bitcoin dificulte o controle da rede, isso não impede que pessoas como ele tentem. Você está aliviado porque a verdade finalmente foi revelada, especialmente depois de todo o esforço que foi necessário para chegar até aqui.',
    },

    resources: {
      opcodes_five: {
        arithmetic_heading: 'OpCodes aritméticos',
        arithmetic_paragraph:
          'No script bitcoin, as operações aritméticas, como na matemática, recebem algumas entradas para realizar operações matemáticas. No script de bitcoin real, as entradas são limitadas a números inteiros de 32 bits assinados, mas a saída pode transbordar.',
        spoiler: `Coloque dois números inteiros que resultem na soma de 3 na pilha inicial`,
      },
      opcodes_six: {
        cryptography_heading: 'OpCodes criptográficos',
        cryptography_paragraph:
          'Esses códigos de operação são importantes nas transações cotidianas, pois garantem que os resultados só possam ser gastos com a assinatura do proprietário do utxo. Observe que não há categorias formais de códigos operacionais e que eles são organizados apenas por sua representação em código hexadecimal.',
        spoiler: `O script verifica uma assinatura em relação a uma chave pública com hash. Coloque uma chave de assinatura primeiro e depois uma chave pública`,
      },
      opcodes_eight: {
        multisig_heading: 'OpCodes multisig',
        multisig_paragraph:
          '<span className="text-[#3DCFEF] rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_CHECKMULTISIG</span> tem um bug notável que exige que a pilha inclua outro valor não utilizado na parte superior da pilha, não relacionado ao multisig real.',
        spoiler: `É um script multisig que requer duas assinaturas, e o primeiro valor na pilha é um espaço reservado para uma peculiaridade na operação CHECKMULTISIG`,
      },
      opcodes_nine: {
        timelock_heading: 'OpCodes de bloqueio de tempo',
        timelock_paragraph:
          'O script do Bitcoin pode ler a altura do bloco atual, permitindo que as transações sejam bloqueadas com base em blocos de bitcoin no futuro. A semântica exata do <span className="text-[#3DCFEF] rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_CHECKLOCKTIMEVERIFY</span> real pode ser encontrada',
        timelock_link:
          '<Link target="_blank" href="https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki" className="underline">aqui</Link>.',
        spoiler: ` O script bloqueia os gastos até uma altura de bloco específica e, em seguida, verifica a assinatura na pilha inicial.`,
      },
      opcodes_ten: {
        conditionals_heading: 'Lógica dos OpCodes',
        conditionals_paragraph:
          'Os códigos de operação condicionais permitem algumas ramificações básicas da lógica de programação.  Embora a lógica condicional permita uma ampla gama de possibilidades adicionais no script de bitcoin, ela ainda é limitada em comparação com uma linguagem de programação tradicional.',
        spoiler: `A soma dos dois primeiros valores na pilha inicial é falsa, portanto, o script segue a ramificação OP_ELSE.`,
      },
      proposal_two: {
        making_script_heading: 'Criação de script',
        making_script_paragraph:
          'Lembre-se de que os scripts só podem ser validados se terminarem com um único valor verdadeiro na pilha. Algumas versões permitem qualquer valor verdadeiro, mas nosso editor de scripts só permite valores iguais a 1 ou verdadeiro.',
        tip: 'Não se esqueça do bug em <span className="text-[#3DCFEF] rounded-sm px-1.5 h-[28px] font-mono bg-[#0000004D] m-0.5 text-sm">OP_CHECKMULTISIG</span> que requer o valor extra não utilizado na pilha!',
        spoiler: `Dica de script: Esse arranjo multisig precisa que ambos os participantes assinem. O script especifica que são necessárias duas assinaturas e inclui ambas as chaves públicas.
Dica de pilha: para atender ao script, você precisa fornecer as duas assinaturas. O '0' na pilha é responsável por um comportamento específico da operação CHECKMULTISIG.`,
      },
      proposal_three: {
        tip: 'Vamos pensar em combinar uma condicional com algum bloqueio de tempo para separar a assinatura de Vanderpoole da sua.',
        spoiler: `Dica de script: O script permite gastar em duas condições: antes do bloqueio 6930300 ou depois. Antes do bloqueio, você pode gastar; depois do bloqueio, Vanderpoole pode gastar.

Dica da pilha: Para gastar antes do bloco especificado, você usa sua assinatura. Após o bloqueio, Vanderpoole usa sua assinatura e precisa fornecer um 0 porque o script passou pela verificação do tempo de bloqueio.`,
      },
      proposal_four: {
        tip: 'A pré-imagem será revelada após um período de tempo desconhecido, portanto, não há necessidade de usar relógios de ponto.',
        spoiler: `Dica de script: O script permite gastar em duas condições: antes ou depois de o segredo ser revelado. Antes do segredo, Vanderpoole pode gastar; depois do segredo, vocês dois podem.
Dica da pilha: Para gastar antes de o segredo ser revelado, Vanderpoole usa sua assinatura. Depois que o segredo é revelado, você usa sua assinatura, um hash do segredo e fornece um 0 porque o script passou da verificação não revelada.`,
      },
    },
  },

  chapter_ten: {
    title: '10 bilhões de conexões',
    paragraph_one: `A luz AO-VIVO do estúdio de TV se apaga. Os assistentes de palco desligam suas câmeras 3D e saem depois de um dia longo e cheio de acontecimentos. O Mika 3000 está lá esperando por você.`,
    intro_one: {
      title: 'Celebração',
      nav_title: 'Celebração',
      paragraph_one: `—MIKA 3000: "Você conseguiu! Você realmente conseguiu! Vamos pegar algo para beber e comemorar".`,
      paragraph_two: `Vocês caminham até um bar próximo chamado The Public Key Pub. O barman, um cara simpático com o nome Laszlo, dá as boas-vindas a vocês dois.`,
      paragraph_three: `—MIKA 3000: "Não sei por que, mas eu gostaria muito de comer um calzone".`,
      paragraph_four: `—LASZLO: "Não temos isso, mas meu tataravô garantiu que a pizza daqui é a melhor. Alguns diriam que é boa em 10.000 bitcoins."`,
      paragraph_five: {
        a: `—MIKA 3000: "10 mil bitcoins? Espere... você se chama Laszlo porque é descendente de `,
        b: `?"`,
      },
      paragraph_six: `—LASZLO: "O único."`,
      tooltip_one: {
        question: 'Qual é o significado de Laszlo e do dia da pizza?',
        link: 'https://chat.bitcoinsearch.xyz/?author=holocat&question=What%2520is%2520the%2520significance%2520of%2520Laszlo%2520and%2520pizza%2520day%253F',
        highlighted: 'O Laszlo',
      },
    },
    intro_two: {
      title: 'Indo beber',
      nav_title: 'Indo beber',
      paragraph_one:
        '—MIKA 3000: "Isso é muito legal. Contanto que não seja 10.000 bitcoins, aceitaremos uma dessas pizzas e duas limonadas Lightning. Mas é uma pena os calzones."',
      paragraph_two:
        'Mika 3000 e Laszlo sacam seus ePhone Infinities movidos a energia solar e começam a apertar botões.',
      paragraph_three:
        '—MIKA 3000: "Uh oh. Sua pequena façanha lá atrás fez um estrago nas taxas dos mineradores. A rede bitcoin está experimentando um aumento na atividade e as taxas de transação estão nas alturas! Vamos ter que pagar por isso fora da corrente".',
    },
    intro_three: {
      title: 'Fora da corrente?',
      nav_title: 'Fora da corrente?',
      paragraph_one: `Desde que "Satoshi" entrou em contato inicialmente, você só teve que trabalhar com transações na corrente. Foi assim que você reivindicou suas recompensas de mineração e transferiu fundos para o Mika 3000. No entanto, essas transações on-chain não são ideais para o uso diário e frequente, pois o espaço do bloco é limitado e as taxas de mineração podem variar.`,
      paragraph_two: `Como é possível, então, que as pessoas consigam usar o bitcoin diariamente de uma forma escalável? A resposta são os pagamentos fora da corrente, algo que você provavelmente já viu um milhão de vezes: Um táxi laranja ejetando seus passageiros e saindo em disparada, alguém comprando o jantar em um carrinho halal, uma criança saindo de uma loja com seu holodog e uma caixa de digimilk. E assim por diante. Os casos de uso do dinheiro são quase infinitos.`,
      paragraph_three: `Embora o bitcoin não tenha sido projetado para lidar com tanta atividade por si só, com pagamentos fora da corrente, ele pode.`,
      paragraph_four: `—VOCÊ: "Isso não é problema nenhum, Mika 3000. Eu posso lidar com isso. Vou provar isso usando um pagamento fora da corrente para comprar uma cerveja do Laszlo."`,
    },
    opening_a_channel_one: {
      title: 'Os fundos iniciais',
      nav_title: 'Os fundos iniciais',
      heading_one: 'Os fundos iniciais',
      paragraph_one:
        'Você tem um UTXO confirmado no blockchain por 101.000 satoshis. Parece muito simples fazer um pagamento fora da corrente, certo?',
    },
    opening_a_channel_two: {
      title: 'A transação fora da corrente',
      nav_title: 'A transação fora da corrente',
      heading_one: 'A transação fora da corrente',
      paragraph_one:
        'Vamos criar uma transação válida de Bitcoin, mas em vez de enviá-la para a rede, vamos enviá-la diretamente para Laszlo! Laszlo deve trocar uma cerveja com você por essa transação, pois ele sabe que efetivamente tem o dinheiro, embora a transação não seja transmitida ou confirmada.',
      paragraph_two:
        'Lembre-se de que estamos no ano 2139! Uma Stout SHA-256 custa 0,0001000 BTC.',
      heading_two: 'Dicas',
      off_chain_list_one:
        'Preencha os dois valores de saída, 1000 satoshis para Laszlo e o restante para seu troco.',
      off_chain_list_two:
        '<span className="font-bold">NB</span>: Para obter o dinheiro, Laszlo precisará transmitir essa transação para a rede e contabilizar as taxas. Vamos reservar 1.000 sats para as taxas de mineração.',
      off_chain_list_three: 'Escreva os dois scripts de saída',
      off_chain_list_four: 'Assine a entrada clicando em "assinar"',
      // off_chain_list_four:'Send it to Laszlo by clicking "send to bob"',
      hint_one: `Laszlo gasta a saída 0 com <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> SIG(LASZLO)</span>`,
      hint_two: `Você gasta a saída 1 com <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> SIG(YOU)</span>`,
    },
    opening_a_channel_three: {
      title: 'Problema de confiança de pagamento fora da corrente',
      nav_title: 'Problema de confiança de pagamento fora da corrente',
      paragraph_one: `—LASZLO: "Espere um pouco, isso não faz sentido - você ainda pode gastar essa produção a qualquer momento. Você poderia beber sua cerveja e depois devolver todo o dinheiro para si mesmo sem que eu recebesse nada!`,
      paragraph_two: `Se você quiser gastar dinheiro fora da corrente comigo, preciso de uma garantia de que não conseguirá movimentar o dinheiro sozinho NA corrente."`,
    },
    opening_a_channel_four: {
      title: 'Multisig',
      nav_title: 'Multisig',
      heading_one: 'Multisig',
      paragraph_one: `Esse jogo terá que começar com um multisig 2 de 2, confirmado no blockchain. Quando tivermos isso, poderemos descobrir uma maneira de fazer com que essa única transação na corrente trabalhe mais. Para fazer mais com menos.`,
      multisig_one: 'Preencha o valor da saída e o script de saída',
      multisig_two: 'Assine a entrada clicando em "Assinar"',
      heading_two: 'Dicas',
      hint_one_a: `Você e Laszlo querem trabalhar juntos no futuro para gastar o output 0 com <br/>`,
      hint_one_b: `<span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> 0 SIG(LASZLO) SIG(YOU) </span>`,
    },
    opening_a_channel_five: {
      title: 'Proteção de reembolso na Multisig',
      nav_title: 'Proteção de reembolso na Multisig',
      paragraph_one: `—LASZLO: "OK, obrigado, esse é um bom começo. Mas e se eu me afastar da mesa e você nunca mais me ver? Eu poderia transmitir essa transação, e seus 100.000 satoshis ficariam presos em um multisig de duas chaves do qual você nunca poderia se recuperar.`,
      paragraph_two: `Faça um favor a si mesmo: antes de assinar isso, faça uma transação de reembolso para saber que pode recuperar seu dinheiro."`,
    },
    updating_the_state_one: {
      title: 'O reembolso',
      nav_title: 'O reembolso',
      heading_one: 'O reembolso',
      paragraph_one: `Uma nova guia é exibida: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base">Refund</span> que inicia outro modelo de TX na mesma tela, com uma seta da saída <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base">Multi-Sig</span> para essa entrada de TX.`,
      refund_list_one: `Preencha o valor da saída e o script de saída`,
      refund_list_two: `Envie-a para Laszlo clicando em "Assinar" para que ele nos diga se vai assiná-la.`,
      refund_list_three: `Não assine você mesmo ainda! Vamos ver o que Laszlo acha, primeiro`,
      heading_two: 'Dicas',
      hint_one: `A saída 0 é gasta por você com <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> SIG(YOU) </span>`,
    },
    updating_the_state_two: {
      title: 'Garantia de pagamentos',
      nav_title: 'Garantia de pagamentos',
      paragraph_one: `—LASZLO: "OK, legal, vou assinar isso e enviar de volta para você, e então você pode assinar a transação de financiamento.`,
      paragraph_two: `Mas espere um pouco. Se eu assinar isso, voltaremos ao ponto de partida: Você pode transmitir essa transação mesmo depois que eu lhe der uma cerveja, e eu não serei pago`,
      paragraph_three:
        'Antes de assinar isso, preciso de uma garantia de que sua transação de reembolso total pode ser revogada.',
      paragraph_four: `Uma vez que você realmente me pague pela cerveja, não poderá transmiti-la. E se você tentar transmitir a transação revogada, eu fico com TODOS os 100.000 satoshis!"`,
    },
    updating_the_state_three: {
      title: 'A revogação',
      nav_title: 'A revogação',
      heading_one: 'A revogação',
      paragraph_one: `Você pode tornar a saída para si mesmo revogável por Laszlo adicionando uma condição extra à saída de 100.000 satoshi. O ramo lógico deve permitir que Laszlo gaste a saída com sua própria chave E uma nova chave privada gerada por você. Para revogar a transação, você simplesmente fornecerá a Laszlo a nova chave privada. É algo muito incomum de se fazer! Mas, como isso coloca 100.000 satoshis em jogo, prova a Laszlo que você NÃO transmitirá a transação depois de revogá-la.`,
      paragraph_two: `Você gera um novo par de chaves: uma chave privada revocation_you_1 e PUBKEY(REVOCATION_YOU_1). Você gerará um novo par de chaves como este toda vez que quiser atualizar o estado do canal de pagamento`,
      revocation_list_one: `Adicione uma condição IF ao script para que Laszlo possa gastar a saída SOMENTE se ele TAMBÉM tiver a chave de revogação (você continuará mantendo a chave em segredo até a hora de revogar!)`,
      revocation_list_two: `Envie-o para Laszlo clicando em "Enviar para Laszlo" para que ele possa assiná-lo`,
      revocation_list_three: `Não assine você mesmo ainda!`,
      heading_two: `Dicas`,
      paragraph_three: `A saída 0 é gasta por QUALQUER UM:`,
      hint_one: `Você: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> SIG(YOU) 1 </span>`,
      hint_two: `Laszlo: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> 0 SIG(REVOCATION_YOU_1) SIG(LASZLO) 0 </span>`,
    },
    updating_the_state_four: {
      title: 'A corrida para revogar',
      nav_title: 'A corrida para revogar',
      paragraph_one:
        '—LASZLO: "Bem, isso é melhor, mas me ocorreu que, mesmo que eu tenha a chave de revogação, ainda será uma corrida entre nós dois para gastar essa saída',
      paragraph_two:
        'Preciso de uma boa vantagem inicial para ter a chance de perceber que você me enganou. Então, poderei varrer o bitcoin com a chave de revogação antes de você receber seu reembolso total."',
    },
    updating_the_state_five: {
      title: 'O bloqueio de tempo',
      nav_title: 'O bloqueio de tempo',
      heading_one: 'O bloqueio de tempo',
      time_lock_list_one:
        'Adicione um atraso de 700 blocos antes de poder gastar a saída',
      time_lock_list_two:
        'Envie-a para Laszlo clicando em "Assinar" para que ele possa assiná-la',
      time_lock_list_three: 'Não assine você mesmo ainda!',
      heading_two: 'Dicas',
      paragraph_one: 'A saída 0 é gasta por QUALQUER UM:',
      hint_one:
        'Você, após 700 blocos: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> SIG(YOU) 1 </span>',
      hint_two:
        'Laszlo: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> 0 SIG(REVOCATION_YOU_1) SIG(LASZLO) 0 </span>',
    },
    updating_the_state_six: {
      title: 'Canal aberto com Laszlo',
      nav_title: 'Canal aberto com Laszlo',
      paragraph_one:
        'Desta vez, quando você clicar em Enviar para Laszlo, ele sorri e aplaude! Ele assina a transação filha ([X] Laszlo). Agora você pode assinar a transação pai e enviá-la para a blockchain: O CANAL ESTÁ ABERTO',
      paragraph_two:
        'Você conseguiu que Laszlo concordasse em permitir que você comprasse bebidas dele fora da corrente e abriu um canal para fazer isso!',
    },
    making_a_payment_one: {
      title: 'Efetuar um pagamento',
      nav_title: 'Efetuar um pagamento',
      heading_one: 'Efetuar um pagamento',
      paragraph_one: 'Vamos recapitular:',
      list_one:
        'Você enviou 100.000 satoshis para uma saída multisig 2 de 2 entre você e Laszlo',
      list_two: 'Você tem, off-line, uma transação que gasta essa saída.',
      list_three: 'Essa saída off-line permite QUALQUER UM',
      list_three_sub_one:
        'Você receberá todo o seu dinheiro de volta após 700 blocos',
      list_three_sub_two:
        'Laszlo receberá todo o dinheiro se obtiver de você a chave privada de revocação revocation_you_1',
      list_four:
        'Laszlo já o assinou, e você pode assiná-lo quando quiser transmiti-lo.',
      list_five:
        'Depois que Laszlo assinou a transação filha off-line, você estava seguro para assinar e transmitir a transação pai',
      paragraph_two:
        'A transação confirmada que financiou a saída multisig é chamada de transação de financiamento. Confirmá-la no blockchain significa que seu canal agora está ABERTO.',
      paragraph_three:
        'A transação off-line que gasta essa saída é chamada de transação de compromisso. A confirmação dessa transação na blockchain encerraria o canal. A primeira transação de compromisso é o seu reembolso total, pois você ainda não fez nenhum pagamento a Laszlo.',
      paragraph_four:
        'Enquanto o canal estiver ABERTO, você e Laszlo podem fazer pagamentos off-line um para o outro, negociando novas transações de compromisso e revogando as antigas. À medida que você comprar mais bebidas, seu valor de "reembolso" diminuirá e os valores de saída de Laszlo aumentarão.',
    },
    making_a_payment_two: {
      title: 'Compre uma cerveja!',
      nav_title: 'Compre uma cerveja!',
      heading_one: 'Compre uma cerveja!',
      paragraph_one: `Agora, finalmente, chegou a hora de enviar o bitcoin fora da corrente para Laszlo. Nós "simplesmente" adicionaremos uma saída de 1.000 satoshi para ele em uma transação de compromisso atualizada. Também precisaremos prometer que nunca transmitiremos a transação de compromisso antiga, que não pagou nada a Laszlo. Isso será garantido quando enviarmos a ele a chave de revogação dessa transação de compromisso antiga, o que faremos a seguir.`,
      paragraph_two: `Você precisará gerar outra chave de revogação para esse novo estado, caso queira repetir o ciclo (revogar ESTA transação para outro novo compromisso em que Laszlo é pago por uma segunda cerveja), afinal, é uma festa!`,
      paragraph_three: `Você gera uma chave privada <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> revocation_you_2 </span>`,
      list_one: `Deduza 1000 satoshis de sua saída`,
      list_two: `Adicione 1000 satoshis à segunda saída e preencha o script para Laszlo`,
      list_three: `Envie-o para Laszlo clicando em "Enviar para Laszlo" para que ele possa assiná-lo`,
      list_four: 'Não assine você mesmo ainda!',
      heading_two: 'Dicas',
      paragraph_four: 'A saída 0 é gasta por QUALQUER UM:',
      hint_one:
        'Você, após 700 blocos: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base">SIG(You) 1 </span>',
      hint_two: `Laszlo: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> 0 SIG(revocation_you_2) SIG(Laszlo) 0 </span>`,
      paragraph_five: `A saída 1 é gasta por Laszlo: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> SIG(Laszlo) </span>`,
    },
    making_a_payment_three: {
      title: `O dilema da blockchain de Laszlo`,
      nav_title: `O dilema da blockchain de Laszlo`,
      paragraph_one: `Laszlo analisa a transação por um segundo e pega um copo atrás do balcão, mas não serve a cerveja`,
      paragraph_two: `—Laszlo: "Espere. Se você não assinar essa transação, não terei nada. Você poderia desaparecer com essa cerveja e eu não poderia confirmar nada na corrente. Talvez você devesse assinar primeiro e depois enviar para mim para que ambos tenhamos uma cópia?"`,
    },
    making_a_payment_four: {
      title: `Aviso sem confiança do Holocat`,
      nav_title: `Aviso sem confiança do Holocat`,
      paragraph_one: `É nesse momento que o Holocat se materializa na mesa, levantando-se sobre as patas traseiras com as patas dianteiras estendidas, e mia.`,
      paragraph_two: `—HOLOCAT: "Espere aí, você não pode dar a Laszlo sua assinatura para essa transação! Da próxima vez que fizer um pagamento, você dará a ele a chave de revogação revocation_you_2. Ele terá tudo o que precisa para roubar todos os 100.000 satoshis!"`,
      paragraph_three: `As coisas estão ficando um pouco confusas agora. Laszlo precisa de algo para poder lhe dar uma cerveja com a certeza de que será pago por ela. Mas ele não pode ter sua transação, pois acabará tendo acesso a todo o seu dinheiro! Laszlo é uma ótima pessoa, e seu bar é um dos melhores da cidade, mas seria bom se não tivéssemos que confiar nele.`,
    },
    making_a_payment_five: {
      title: `Assimetria`,
      nav_title: `Assimetria`,
      heading_one: `Assimetria`,
      paragraph_one: `Portanto, sabemos que queremos que Laszlo assine a primeira transação, mas não queremos que ele tenha nossa assinatura nela. Precisamos criar uma segunda transação para ele que tenha a nossa assinatura, mas sem qualquer possibilidade de ele gastar todo o dinheiro injustamente.`,
      paragraph_two: `E se Laszlo vai ter sua própria transação de compromisso, não queremos que essa transação seja revogável? Sim, de fato, a transação de compromisso de Laszlo será uma imagem espelhada da sua. O script de bloqueio de tempo revogável usará a primeira chave de revogação de Laszlo, PUBKEY(revocation_bob_1), e a grande saída de reembolso será enviada diretamente para você, sem qualquer problema.`,
      list_one: `Preencha os valores e os scripts de saída para a transação de compromisso de Laszlo`,
      list_two: `Assine-o e envie-o para Laszlo, que assinará sua transação de compromisso e a enviará de volta para você`,
      heading_two: 'Dicas',
      paragraph_three: 'A saída 0 é gasta por QUALQUER UM:',
      hint_one:
        'Laszlo, após 700 blocos: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base">SIG(LASZLO) 1 </span>',
      hint_two: `Você <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> 0 SIG(REVOCATION_LASZLO_1) SIG(YOU) 0 </span>`,
      paragraph_four: `A saída 1 é gasta por você: <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> SIG(YOU) </span>`,
    },
    making_a_payment_six: {
      title: `Conclua o pagamento`,
      nav_title: `Conclua o pagamento`,
      heading_one: `Conclua o pagamento`,
      paragraph_one: 'Vamos fazer outra rápida recapitulação.',
      list_one: 'Uma saída 2 de 2 é confirmada no blockchain',
      paragraph_two:
        'Há várias transações fora da corrente que gastam essa saída:',
      paragraph_three: 'Você tem essas transações:',
      paragraph_four: 'Compromisso 1 (Você):',
      commitment_1_you: {
        list_one: 'Entrada 0: assinada por Laszlo',
        list_two:
          'Saída 0: 100000 satoshis para você após 700 blocos ou Laszlo com a chave revocation_you_1',
      },
      commitment_2_you: {
        list_one: 'Entrada 0: assinada por Laszlo',
        list_two:
          'Saída 0: 99000 satoshis para você após 700 blocos ou Laszlo com a chave revocation_you_2',
        list_three: 'Saída 1: 1.000 satoshis para Laszlo',
      },
      paragraph_five: 'Compromisso 2 (Você):',
      paragraph_six: 'Laszlo tem essa transação:',
      paragraph_seven: 'Compromisso 2 (Laszlo):',
      commitment_2_laszlo: {
        list_one: 'Entrada 0: assinada por você',
        list_two:
          'Saída 0: 1.000 satoshis para Laszlo após 700 blocos ou Você com a chave revocation_laszlo_1',
        list_three: 'Saída 1: 99000 satoshis para você',
      },
      paragraph_eight:
        'Todas essas três transações estão assinadas e são válidas, mas Laszlo ainda não lhe entregou uma cerveja. Por que não? Só resta uma coisa a fazer...',
    },
    making_a_payment_seven: {
      title: `🍺 Ahhhhhhh, daora.`,
      nav_title: `Ahhhhhhh, daora.`,
      paragraph_one: `🍺 Ahhhhhhh, daora.`,
    },
    making_a_payment_eight: {
      title: `Efetue outro pagamento`,
      nav_title: `Efetue outro pagamento`,
      heading_one: `Efetue outro pagamento`,
      paragraph_one: `A noite ainda é jovem e você não está levando seu Budgetcopter para casa. Tem tempo para outra cerveja? Agora que você e Laszlo têm suas transações assimétricas e um fluxo elaborado com chaves de revogação, vamos executar o protocolo mais algumas vezes.`,
      paragraph_two: `As duas transações que representam o estado atual estão na tela, onde você pagou 1.000 satoshis a Laszlo. Envie outro pagamento de 1.000 satoshi para Laszlo.`,
      list_one: 'Atualizar os valores e os scripts de saída',
      list_two: 'Assinar a transação de Laszlo e enviá-la a ele',
      list_three: `Laszlo revogará seu último estado enviando-lhe <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> REVOCATION_LASZLO_1 </span>`,
      list_four: 'Envie sua transação para Laszlo para que ele possa assiná-la',
      list_five: `Assim que tiver a assinatura de Laszlo, envie a ele sua <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> REVOCATION_YOU_1 </span>`,
      paragraph_three: 'Aproveite 🍺',
      heading_two: 'Dicas',
      paragraph_four: 'A saída 0 é gasta por QUALQUER UM:',
      hint_one: `Você, após 700 blocos:  <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> SIG(YOU) 1 </span>`,
      hint_two: `Laszlo:  <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> 0 SIG(REVOCATION_YOU_3) SIG(LASZLO) 0 </span> `,
      paragraph_five: `A saída 1 é gasta por Laszlo <span className="rounded-sm px-1.5 py-1 h-[28px] font-mono bg-[#0000004D] m-0.5 text-base"> SIG(LASZLO) </span> `,
    },

    outro_one: {
      title: 'Outro',
      nav_title: 'A noite toda',
      paragraph_one:
        'Você pode fazer isso a noite toda! Bem, até que todos os seus 100.000 satoshis tenham sido enviados para Laszlo',
      paragraph_two:
        'Não se esqueça de beber água! Eles também têm holodogs e nachos.',
    },

    outro_two: {
      title: 'Outro',
      nav_title: 'Voltando para casa',
      paragraph_one: `Depois de um longo dia, você paga as bebidas e vai para casa, mas, ao abrir a porta da sua casa impressa em 3D, você - ah, droga! É o Vanderpoole de novo! Isso está realmente acontecendo ou você tomou muitas Margaritas Mempool? Apesar de um pequeno grupo de holocats que o acompanha por todos os lados, ele não está procurando briga`,
      paragraph_two: `—VANDERPOOLE: "Nós não nos conhecemos realmente, embora, como meu avô costumava dizer, os destinos de estranhos geralmente estão entrelaçados. Preciso que você me ouça. Toda a história de Satoshi Nakamoto era eu tentando salvar os negócios da minha família. Você não pode imaginar o quanto a mineração significava para nós. Acho que eu não estava pronto para a mudança e queria manter as coisas mais ou menos do mesmo jeito."`,
    },

    outro_three: {
      title: 'Outro',
      nav_title: 'Comunidade Bitcoin',
      paragraph_one: `Você pergunta por que o nome era tão importante para ele.`,
      paragraph_two: `—VANDERPOOLE: "É o único nome no bitcoin maior que Bitrey e Vanderpoole. Uma pessoa que usava o nome Satoshi Nakamoto me disse certa vez que o bitcoin tinha saído do controle de seu criador há mais de um século. É por isso que, para salvar o nome Vanderpoole, tentei reivindicar um nome mais proeminente. Não dá para entender a emoção de cunhar novas moedas. Era mágico para mim naquela época; é mágico para mim agora."`,
      paragraph_three: `—VANDERPOOLE: "Percebo agora que, mesmo que eu fosse o bisneto de Satoshi, o bitcoin não é definido por líderes. Ele é definido por sua comunidade. Nem mesmo Satoshi poderia mudar o que o bitcoin se tornou. Isso sempre foi o que tornou o bitcoin excelente e por que os milhões de outras moedas criadas à imagem do bitcoin nunca duraram."`,
    },

    outro_four: {
      title: 'Outro',
      nav_title: 'A vilania de Vanderpoole',
      paragraph_one: `Vanderpoole pega seu holocat e ele começa a ronronar. As pessoas são complicadas, e ninguém sabe disso melhor do que os gatos, holo ou não`,
      paragraph_two: `—HOLOCAT: "O senhor não é um vilão, Sr. Vanderpoole. Mas talvez, apenas talvez, o senhor tenha se preocupado demais."`,
      paragraph_three: `—VANDERPOOLE: Essa é a verdade.`,
    },

    outro_five: {
      title: 'Você conseguiu!!!',
      nav_title: 'Você conseguiu!!!',
      heading_one: 'Você conseguiu!!!',
      paragraph_one: `Como Satoshi, você não era ninguém, mas suas ideias tinham mérito, então as pessoas o seguiram. Satoshi se foi, mas seu espírito e suas ideias continuam vivos. Armado com suas novas habilidades de codificação de desenvolvimento de bitcoin, uma dose saudável de humildade e um pouco da boa e velha persistência, você pode deixar uma marca duradoura nesse sistema elegante que uniu o mundo sob um dinheiro sem permissão e resistente à censura por mais de 100 anos. Novas aventuras esperam por você no código e no mercado aberto de ideias. O bitcoin só sobrevive porque pessoas como você contribuem com o que podem. É por isso que todos nós somos Satoshi.`,
    },

    outro_six: {
      title: 'Além de salvar Satoshi',
      nav_title: 'Indo além do Saving Satoshi',
      heading: 'O Bitcoin ainda precisa de sua ajuda...',
      paragraph_one:
        'Embora 2139 possa parecer distante, a missão do Bitcoin permanece atemporal: criar dinheiro que seja justo, aberto e honesto. Entretanto, para alcançar essa visão, serão necessários os esforços de todos, inclusive os seus.',
      paragraph_two:
        'Você já demonstrou que entende de bitcoin. Agora é o momento perfeito para transformar esse conhecimento em ação, contribuindo para uma das tecnologias mais importantes de todos os tempos.',
      paragraph_three:
        'O <Link className="underline" href="https://bitcoindevs.xyz/">Bitcoin Dev Project</Link> está aqui para orientar as futuras gerações de colaboradores de código aberto. Tornar-se um herói do bitcoin nos dias de hoje está a apenas um clique de distância.',
      paragraph_four: 'Somos todos Satoshi.',
    },
  },

  ///CHALLENGE PAGE
  challenge_list: {
    coming_soon: 'Em breve. Aguarde.',
  },

  chapter: {
    chapter_locked_one: 'Capítulo completo',
    chapter_locked_two: 'para desbloquear.',
    coming_soon: 'Em breve. Aguarde.',
    description:
      'Explore os mistérios de Satoshi e aprenda sobre o bitcoin ao longo do caminho.',
  },

  hero: {
    title: 'Salvando Satoshi',
    description: 'Descubra os mistérios do bitcoin programando.',
    start_journey: 'Início',
    tell_more: 'Conte-me mais',
  },

  footer: {
    paragraph_one: 'Uma produção de código aberto da comunidade bitcoin.',
    link: 'Verifique o código',
  },

  navbar: {
    intro: 'Introdução',
    chapter: 'Capítulo',
    chapter_complete: 'Capítulo completo',
    challenge: 'Desafio',
    help_tooltip: 'Precisa de ajuda?',
  },

  modal_signin: {
    heading: 'Cadastre-se',
    pre_signin_paragraph_one:
      'Digite sua chave privada abaixo para restaurar sua conta e seu progresso.',
    post_signin_paragraph_one:
      'É bom ver você voltar para salvar Satoshi! Você pode ir diretamente para sua última lição a partir daqui.',
    prompt: 'Digite sua chave privada',
    confirm: 'Cadastre-se',
    create_account: 'Não tem uma conta?',
    login: 'Fazer login',
    welcome_back: 'Bem-vindo de volta!',
    progress_redirect: 'Leve-me até onde parei',
  },

  modal_logout: {
    heading: 'Você está logado',
    paragraph_one:
      'Sua sessão permanecerá ativa até que você se desconecte usando o botão abaixo.',
    private_key: 'Sua chave privada',
    signout: 'Sair',
  },

  modal_signup: {
    heading: 'Salve seu progresso',
    paragraph_one:
      'Copie e armazene um código simples para salvar e carregar seu progresso neste navegador. Se você já tiver um código, carregue seu progresso aqui.',
    subheading_one: 'Escolha um avatar',
    subheading_two: 'Faça backup de sua chave privada',
    generate:
      'Tudo pronto? O código foi copiado e o backup foi feito? Certifique-se de que sim, pois ele não poderá ser recuperado se você o perder.',
    confirm: 'Feito',
    acknowledged:
      'Reconheço que salvei essa chave privada e sei que precisarei dela para desafios no futuro.',
  },

  difficulty_selection: {
    NORMAL: 'Ative o modo difícil para aumentar a dificuldade dos desafios.',
    HARD: 'Desative o modo difícil para diminuir a dificuldade dos desafios.',
  },

  social: {
    twitter_share: 'Compartilhar via X',
    nostr_share: 'Compartilhar via nostr',
    sharing: 'Compartilhamento...',
    shared: 'Compartilhado!',
    share_error: 'Falha no compartilhamento',
  },

  disclaimer: {
    description:
      'Estamos ansiosos para que você mergulhe de cabeça. Saiba que alguns desafios exigem experiência básica em programação (há dicas disponíveis). Experimente e compartilhe seu <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf1xpNqUYJyvYL5IZDnxy78273pkqzfYW2Hf91H4Do4KHgy9g/viewform?usp=sf_link" className="underline">feedback</Link>',
  },

  opcode: {
    run: 'Executar o script',
    reset: 'Redefinir',
  },

  status_bar: {
    begin_message: 'Complete o desafio acima para continuar...',
    error_message: 'Hm... isso ainda não está bem certo...',
    in_progress_message: 'Está parecendo bom até agora...',
    success_message: 'Muito bem!',
    next_step_message: 'Parece bom, agora vamos passar para a próxima etapa.',
    try_again: 'Tente novamente',
    next: 'Próximo',
  },

  hasher: {
    placeholder: 'Digite aqui...',
    return_hash: 'Abaixo, você verá sua entrada convertida em um hash',
  },

  hashrate: {
    start: 'Início',
    running: 'Executando',
    blocks_found: 'Blocos encontrados',
    hashrate: 'Hashrate',
    partial_solutions: 'Soluções parciais',
  },

  runner: {
    run: 'Executar o script',
    running: 'Executando',
    pause: 'Pausa',
    result: 'Resultado',
    computing: 'Computando...',
    evaluation: 'Avaliação',
    script_output: 'Saída do script',
    waiting: 'Aguardando sua entrada acima...',
    poor: 'Esse código é válido, mas não é exatamente o que estamos procurando. Tente novamente.',
    good: 'Bom trabalho, não está perfeito, mas ainda é considerado correto. Continue trabalhando ou continue, a escolha é sua.',
    success: 'Ótimo trabalho, seu código parece excelente!',
    language_tabs: {
      locked: 'Linguagem desativada, já que você começou este capítulo em',
      reset: 'Redefinir o terminal',
    },
  },
  notfound: {
    first: 'Hmm... onde estamos?',
    second: 'Não está muito claro onde ou o que é esse lugar.',
    third: 'Talvez tenhamos nos perdido no espaço (ou no tempo).',
    back_safety: 'Voltar',
  },
  error: {
    first: 'Algo está errado!',
    second: 'O Holocat pode ter mastigado alguns cabos novamente. Gato mau!',
    reload: 'Repetir',
  },
  help_page: {
    main_heading: 'Recursos de aprendizado',
    main_subheading:
      'Que informações e recursos úteis podemos fornecer para que você aprenda mais?',
    tips_heading: 'Dicas',
    tips_subheading:
      'Que dicas específicas podemos/queremos dar aos alunos se eles estiverem com dificuldades?',
    spoilers_heading: 'Spoilers',
    spoilers_confirm: 'Sim, quero ver a solução',
    pseudo_confirm: 'Sim, quero ver o pseudocódigo',
    solution: 'Solução para esse desafio',
    pseudo_solution: 'Solução de pseudocódigo para esse desafio',
    solution_one: 'Solução para a primeira parte deste desafio',
    feedback:
      'Seu feedback é valioso e nos ajuda a aprimorar ainda mais nosso trabalho. Envie-nos seu feedback usando <a href="https://docs.google.com/forms/d/e/1FAIpQLSf1xpNqUYJyvYL5IZDnxy78273pkqzfYW2Hf91H4Do4KHgy9g/viewform" target="_blank" rel="noreferrer">este link</a>.',
    help_suggestion:
      'Se você tiver alguma dúvida, pressione o botão "?" no canto superior direito. Ele fornece recursos e dicas úteis.',
  },
}
export default translations
