const translations = {
  shared: {
    next: `Continuar`,
    start: `Iniciar`,
    copy: `Copiar`,
    about: `Info`,
    chapter: `Capítulo`,
    chapters: `Capítulos`,
    challenge: `Desafío`,
    coming_soon: `Muy pronto`,
    start_chapter: `Iniciar capítulo`,
    back: `Volver`,
  },
  status_bar: {
    begin_message: `Completa el desafío anterior para continuar...`,
    error_message: `Mmm... eso aún no es del todo correcto...`,
    in_progress_message: `De momento tiene buena pinta...`,
    success_message: `¡Bien hecho!`,
    next: `Siguiente`,
  },
  ///ABOUT PAGE
  about: {
    title: `Info`,
    mobile_title: `De qué se trata`,
    subtitle: `El año es 2139. Faltan dos semanas para que se extraiga el último bitcoin. Durante meses, un reloj ha hecho tic-tac en el la Plaza Satoshi.`,
    intro: `El mundo espera el último bloque. Entonces, de repente, la red se detiene. <br><br>Recibes un holocat (es como cualquier otro e-holograma, pero éste tiene forma de gato) de alguien que usa el nombre de Satoshi Nakamoto. Abres el holocat tocándole la nariz con curiosidad por escuchar lo que tiene que decir...`,

    project: {
      title: `Construido para divertirse`,
      paragraph_one: `Saving Satoshi es un primer punto de contacto para desarrolladores que sientan curiosidad por el desarrollo bitcoin. Saving Satoshi es una mezcla de texto técnico y retos basados en código, aunque los retos deberían ser aptos para cualquiera con conocimientos básicos de programación. El proyecto es gratuito y de código abierto, y todo el arte se ha generado utilizando herramientas de conversión de texto en imagen (también conocidas como IA) como Midjourney.`,
      paragraph_two: `Esta versión del proyecto se encuentra actualmente en estado de demostración con el objetivo de obtener comentarios sobre la experiencia general y proporcionar una prueba de concepto para los primeros usuarios. Por ello, el progreso del usuario se almacena localmente en el navegador y la historia y las imágenes no están finalizadas.`,
      paragraph_three: `En función de los comentarios que recibamos, trabajaremos para lanzar una versión oficial (que llamaremos V1) que incluya 2-3 capítulos completos de lecciones, cuentas y mucho más. Se han planificado 10 capítulos que se irán publicando a medida que se completen. Entre las funciones adicionales se incluyen el aprendizaje colaborativo, las insignias, las misiones secundarias más desafiantes, etc.`,
    },

    contributing: {
      title: `Cómo contribuir`,
      paragraph_one: `Esto es un proyecto de código abierto, así que todas las puertas están abiertas para que ayudes a darle forma.`,

      feedback: {
        title: `Comentarios`,
        paragraph_one: `Una buena forma de contribuir es repasar el capítulo 1 y darnos tu opinión sobre la experiencia general utilizando este formulario.`,
      },

      contribute: {
        title: `Contribuir`,
        paragraph_one: `Todas las sugerencias son bienvenidas, incluidos los cambios de contenido, mecánica de juego - realmente cualquier cosa. También estamos siempre buscando ayuda para revisar y <a href="https://leaf-singer-0fc.notion.site/How-to-QA-5177e63f65a4406da01bc57d886b5ac2" target="_blank" rel="noreferrer">Controlar la calidad de los cambios de código</a>. Para mejorar el código, puedes abrir directamente una incidencia o enviar un pull request en GitHub.`,
        paragraph_two: `Si quieres participar en el diseño, la historia o cualquier otra cosa, únete a nosotros en el canal #saving-satoshi en el Discord <a href="https://discord.gg/DC8Dys4G3h" target="_blank" rel="noreferrer">Bitcoin Design</a>. Menciona cómo te gustaría contribuir y te ayudaremos a orientarte en la dirección correcta.`,
      },
    },

    contributors: {
      title: `¡Disfrútalo!`,
      contributions_by: `Contribuciones de`,
      many_more: `, <a href="https://VEINTIUNO.world/libro/salvando-satoshi/" target="_blank">@VEINTIUNO.world</a> y <a href="https://github.com/saving-satoshi/saving-satoshi/graphs/contributors" target="_blank" rel="noreferrer">muchos más</a>.`,
    },

    satoshi_needs_you: `Ahora date prisa, Satoshi te necesita.`,
  },

  ///CHAPTERS TITLE PAGE
  chapter_one: {
    title: `Secretos a la vista de todos`,
    paragraph_one: `El año es 2139. Faltan dos semanas para que se extraiga el último bitcoin. Desde hace meses, un reloj hace tictac en la Plaza Satoshi. El mundo espera el último bloque. De repente, la red se detiene.`,

    ///CHAPTER 1
    intro_one: {
      title: `Génesis`,
      paragraph_one: `Unos instantes después, tu pantalla se activa.`,
      paragraph_two: `-Deborah Chunk: "Thomas Vanderpoole. Como CEO de BitRey, diriges uno de los mayores pools de minería de bitcoines del mundo. También fabricas máquinas para minar bitcóin. ¿Qué está ocurriendo? ¿Está muriendo bitcoin?”`,
      paragraph_three: `-Vanderpoole: "Sí, Deborah. Como mi padre y su padre antes que él. Los Vanderpoole han estado minando desde el Bloque 21.000. Por eso puedo decir con seguridad que los mineros de todo el mundo están causando estos retrasos al apagar sus máquinas. Esto es una protesta. Nadie quiere que bitcoin deje de emitirse a los 21 millones. No podemos sobrevivir sólo con las comisiones.”`,
      start: `Continúa`,
    },

    intro_two: {
      title: `Génesis`,
      paragraph_one: `Recibes un holocat de alguien que usa el nombre de Satoshi Nakamoto. (Es como cualquier otro e-holograma, pero este tiene forma de gato.) Abres el holocat golpeando su nariz.`,
      paragraph_two: `-"Bitcoin no se está muriendo, pero necesita tu ayuda. No te olvides del gato". - Satoshi Nakamoto`,
      paragraph_three: `-¿Satoshi? ¿El Satoshi? No, no puede ser. Se les da por muertos desde hace más de un siglo. ¿No es así?`,
      paragraph_four: `¿No es así?`,
      paragraph_five: `Holocat: "Será mejor que te pongas a trabajar. Puedo ayudar, pero tienes que empezar a miau"`,
    },

    genesis_one: {
      title: `Génesis`,
      heading: `Tu primer reto`,
      paragraph_one: `Bitcoin es dinero resistente a la censura. Cualquiera puede enviar dinero emitiendo una transacción a la red. Tras la emisión, los mineros empaquetan las transacciones en bloques. Los mineros compiten contra otros mineros por el privilegio de construir en la cadena. Esto es lo que mantiene a bitcoin descentralizado`,
      paragraph_two: `Satoshi Nakamoto, el inventor seudónimo de bitcoin, también minó el primer bloque de bitcoin. Dejó al mundo un mensaje secreto en la primera transacción bitcoin que se hizo. Tu primer reto es encontrarlo y descifrarlo`,
    },

    genesis_two: {
      title: `Génesis`,
      heading: `Encuentra el mensaje oculto`,
      paragraph_one: `Vamos a encontrar el primer bloque de la blockchain de bitcoin. Haz clic en el botón de abajo para abrir un <Tooltip id="genesis_two_paragraph_one" content="genesis_two.tooltip_block_explorer" >explorador de bloques</Tooltip> exactamente en el bloque 0, que se llama bloque génesis.`,
      paragraph_two: `Desplázate hacia abajo y expande los detalles de la única transacción que se almacena en este bloque. Busca la entrada llamada "Coinbase". Ahora busca la etiqueta "SCRIPTSIG (<Tooltip id="genesis_two_paragraph_two" content="genesis_two.tooltip_hex" >HEX</Tooltip>)". El valor que aparece junto a él es un mensaje codificado`,
      paragraph_three: `Copia este valor y pégalo aquí abajo.`,
      tooltip_block_explorer: `Un <a href="https://bitcoinops.org/en/topics/block-explorers/" target="_blank" rel="noreferrer">explorador de bloques</a> es una herramienta útil para buscar rápidamente información sobre transacciones bitcoin.`,
      tooltip_hex: `Abreviatura de hexadecimal, un sistema numérico que representa números utilizando una base de 16.`,
      view_block_0: `Ver bloque 0`,
      placeholder: `Pega el valor que has encontrado aquí`,
    },

    genesis_three: {
      title: `Génesis`,
      heading: `Descifremos el mensaje`,
      paragraph_one: `El mensaje que encontraste estaba codificado en un formato llamado HEX. Ahora ejecutaremos un comando para convertirlo en ASCII, el cual podremos leer`,
      paragraph_two: `Copia y pega el comando de abajo en el Terminal de la derecha y pulsa "Enter"`,
      terminal_challenge_lines: `Introduce tus comandos aquí y pulsa Intro...\n\n La variable $scriptSigHex ya está definida para ti.\n\n var $scriptSigHex = "04fff...e6b73"`,
      waiting_for_input: `Esperando a que escribas y ejecutes el script...`,
      success: `¡Buen trabajo! El mensaje descifrado hace referencia a la portada de <Link href="https://en.bitcoin.it/wiki/Genesis_block" className="underline">The Times</Link> del 3 de enero de 2009, el mismo día que Satoshi minó el bloque génesis. ¿No es genial? Este mensaje también nos da una idea de su motivación para crear bitcoin,`,
    },

    genesis_four: {
      title: `Génesis`,
      subtitle: `¡Felicidades! ¡Has completado el primer reto!`,
      paragraph_one: `Encontraste el mensaje secreto que Satoshi Nakamoto incrustó en el bloque génesis. Es hora de ampliar lo que acabas de aprender. Descifra una pista importante sobre la historia en el siguiente desafío.`,
    },

    transacting_one: {
      title: `Transaccionando`,
      heading: `¿Qué hay en una transacción?`,
      paragraph_one: `Las transacciones tienen dos partes: entradas y salidas. En el ejercicio anterior desciframos un mensaje secreto que se encontraba dentro de la entrada de una transacción. Esta vez descifraremos un mensaje que pertenece a la parte de salida`,
      paragraph_two: `Para la siguiente transacción, vamos a identificar la salida de tipo OP_RETURN.`,
    },

    transacting_two: {
      title: `Transaccionando`,
      heading: `OP_RETURN`,
      paragraph_one: `Hay otra forma de ocultar mensajes secretos en las transacciones. Bitcoin tiene un tipo especial de código llamado OP_RETURN que permite a los usuarios adjuntar mensajes a las salidas de las transacciones. Veamos si podemos encontrar uno`,
      paragraph_two: `1. Haz clic <Link href="https://blockstream.info/tx/ff9148605a772a51cba39004df5fb042d40515967a3e38ff5294cfd017c452a9?expand" className="underline">aquí</Link> para ver una transacción específica.`,
      paragraph_three: `2. Abre los detalles y busca la parte que es de tipo "OP_RETURN".`,
      párrafo_cuarto: `3. Ahora encuentra el campo "SCRIPTPUBKEY (ASM)". ¿Ves la parte "OP_RETURN OP_PUSHBYTES_33"? Esto se llama opcodes. En realidad nos interesa lo que viene después de ellos`,
      paragraph_five: `4. Copia la larga cadena de números después de "OP_RETURN OP_PUSHBYTES_33" y pégala debajo. `,
      input_challenge_label: `Introduce el tipo de OP_RETURN`,
    },

    transacting_three: {
      title: `Transaccionando`,
      heading: `Otro mensaje secreto`,
      paragraph_one: `Hemos identificado la parte de la salida de la transacción que contiene el mensaje`,
      paragraph_two: `Ahora solo queda decodificarlo, igual que hicimos en el ejercicio anterior`,
      paragraph_three: `¿Necesitas buscar $scriptPubKeyBytes otra vez? Aquí tienes`,
      link: `Ver transacción`,
      terminal_challenge_success: `¡Eso es correcto! Buen trabajo.\n\n Como puedes ver, la pista es una dirección. Ve a ella.\n\n Tu próximo reto te espera`,
      terminal_challenge_lines: `Ingresa tus comandos aquí y presiona Enter...\n\nTen en cuenta que $scriptPubKeyBytes no está definido para ti esta vez. Tendrás que sustituir esta variable en el código por el valor que encontraste en el reto anterior`,
      terminal_challenge_error: `¡Casi! Recuerda que la variable $scriptPubKeyBytes no está definida para ti esta vez`,
    },

    outro_one: {
      title: `Outro`,
      paragraph_one: `Corres a tu garaje, te subes al viejo solocóptero de tu padre, marcas las coordenadas y te diriges a la dirección.`,
      paragraph_two: `A pesar de que las alergias a los gatos son tan intensas que se aplican incluso a los hologramas, el holocat llega. Te opones, pero los gatos son los gatos`,
      button_text: `Completa el capítulo 1`,
    },

    outro_two: {
      title: `¡¡¡Lo has conseguido!!!`,
      description: `Increíble. Has completado el primer capítulo y has aprendido mucho sobre bitcoin. Síguenos en <Link href="https://twitter.com/savingsatoshi" className="underline">@savingsatoshi</Link> para saber cuándo lanzamos nuevos capítulos y retos.`,
    },

    end: {
      save: `Guardar mi progreso`,
      next: `Continúa sin guardar`,
      feedback: `Comparte tu opinión`,
    },
  },

  chapter_two: {
    title: `El ataque del 51%`,
    paragraph_one: `La caída de la red tiene que estar relacionada con la subvención en bloque. Es imposible que sea una coincidencia`,
    paragraph_two: `Entras en tu ordenador para investigar sobre minería cuando notas algo inusual en los pocos bloques que se están minando. Todos parecen proceder del mismo lugar, posiblemente incluso de la misma reserva minera. ¿Qué ha pasado con el resto de mineros?`,

    intro_one: {
      title: 'Plan de acción',
      paragraph_one: `HOLOCAT: "Chico, qué vertedero. Más vale que este sitio guarde sardinas o pescado seco. Incluso me conformaría con un poco de e-nip`,
      paragraph_two: `Aterrizas, te estabilizas y buscas un punto de entrada. Ahí, esa ventana rota debería servir. Quitas lo que queda de la ventana con un ladrillo y saltas dentro. El edificio está lleno de miles de polvorientos y bien conservados mineros de bitcoin`,
      paragraph_three: `HOLOCAT: "Esto no es un almacén; es un museo. Creo que son viejos mineros ASIC de la familia Vanderpoole. Los mineros de circuitos integrados de aplicación específica estaban de moda en los primeros días de bitcoin. ¿Puedes creer que la gente minaba otras monedas en algún momento?"`,
    },

    intro_two: {
      title: `Elaborando un plan`,
      paragraph_one: `En la esquina, un monitor de ordenador que apenas funciona, con una nota pegada a él, parpadea. La nota dice: "Enciéndelos, estúpido"`,
      paragraph_two: `HOLOCAT: "Qué grosero"`,
      paragraph_three: `Vaya, un teclado mecánico. Holocat salta sobre el teclado y camina por él, mostrándote qué teclas pulsar`,
    },

    scripting_one: {
      title: `Automatización`,
      heading: `Hagamos que el ordenador haga esto por nosotros`,
      paragraph_one: `OK, eso probablemente te llevó mucho más tiempo. Ahora imagina encontrar un hash que empiece por cinco o diez ceros. Este es el reto que la red bitcoin plantea a los mineros cuando quieren enviar nuevos bloques con transacciones`,
      paragraph_two: `Los mineros toman todo lo que quieren poner en un bloque, las transacciones y un montón de metadatos relacionados, y lo combinan con un número aleatorio llamado nonce. Envían todo esto a la función hash para crear algo llamado hash del bloque`,
      paragraph_three: `La red bitcoin tiene un ajuste de dificultad y sólo acepta hashes de bloque que comienzan con un cierto número de ceros. A esto lo llamamos "dificultad" y se revisa cada 2016 bloques`,
      paragraph_four: `Para el siguiente reto, escribe un script que encuentre un hash que empiece por cinco ceros ("00000").`,
    },

    scripting_two: {
      title: `Automatización`,
      paragraph_one: `Muy bien, es hora de escribir y ejecutar tu propio código. Escribe un script que encuentre un hash que empiece por cinco ceros ("00000").`,
      paragraph_two: `Cuando pulses "Ejecutar el script", la función findHash será llamada una y otra vez con un nonce cada vez mayor (que no es más que un número normal). Escribe código para calcular y devolver un hash basado en el nonce.`,
      success: `¡Cinco ceros! ¡Ya está!`,
    },
  },

  chapter_three: {
    title: `Reclamación de premios`,
    paragraph_one: `Uf, ha estado cerca. Sigues temblando por la batalla contra Amestris, pero te sientes aliviado de haber conseguido la victoria.`,
    paragraph_two: `Mientras te acomodas en tu escritorio, respiras hondo y te dejas llevar por los acontecimientos del día. Tus manos se entretienen jugando con el misterioso sobre, mientras te preguntas quién lo habrá enviado. Al fin y al cabo, estamos en 2139. Aún más curioso es que tiene un sello de 2008... ¿podría ser otra pista?`,
    paragraph_three: `De repente, te das cuenta de que nunca reclamaste las recompensas de bloque de tu competición con Amestris. Tu monedero de bitcoins se está agotando, así que es un buen momento para recargarlo de nuevo.`,
  },

  chapter_four: {
    title: 'Reclamando tus 6.1 bitcoins',
    paragraph_one:
      '¡Uf, eso estuvo cerca! Todavía tiemblas después de tu batalla contra BitRey, pero te sientes aliviado de que tú y tus amigos ganaron.',
    paragraph_two:
      'Mientras te acomodas en tu escritorio, tomas una profunda respiración y te dejas llevar reviviendo los eventos del día. Tus manos se mantienen ocupadas jugando con el misterioso sobre, mientras te preguntas quién lo envió.',

    intro_one: {
      title: 'Asegurando el bolso',
      paragraph_one:
        'HOLOCAT: Uno de nosotros debe dormir. Necesitas volver a casa y empezar a ponerte en contacto con las piscinas de minería. Ellos querrán saber más al respecto que el mundo."',
      paragraph_two:
        'Al instalarte en tu Escritorio Flotante TMY92-P, repasas los eventos del día. Vanderpoole. BitRey. La revelación de que las piscinas de minería nunca acordaron cerrar en protesta. ¿Podría ser todo cierto? ¿Fue todo esto un montaje? ¿Y cuánto tiempo se supone que debes cuidar de este gato?',
      paragraph_three:
        'Pase lo que pase a continuación, es probable que necesites fondos. Te das cuenta de que nunca reclamaste las recompensas mineras de tu competencia con BitRey. Decides retirarlas para ayudar a pagar tu vuelo de regreso a casa.',
    },

    public_key_one: {
      title: 'Clave pública',
      heading: 'Pares de claves',
      paragraph_one:
        'Según la piscina de minería, parece que tienes 6.1 bitcoins para reclamar por todo el trabajo que hiciste anteriormente.',
      list_one: 'Clave privada',
      list_two: 'Clave pública',
      paragraph_two:
        'Pero espera, ¡ni siquiera tienes una billetera! Puede que te estés preguntando dónde puedes comprar una. Aunque puedes adquirir hardware para construir ciertos tipos de billeteras, en realidad puedes hacer una con tu ordenador o dispositivo móvil. ¡Hagámoslo!',
      paragraph_three:
        'Si te registraste en una cuenta en algún momento, obtuviste algo llamado un código personal. En criptografía, esto se llama "clave privada" y a menudo es parte de un par.',
      paragraph_four:
        'Un solo par de claves es todo lo que se necesita para crear una billetera y controlar los fondos dentro de ella. Cuando deseas gastar bitcoins, utilizas la clave privada. Cuando deseas recibir bitcoins, utilizas la clave pública.',
    },

    public_key_two: {
      title: 'Clave pública',
      paragraph_one:
        'Así que tenemos la clave privada, es el código personal que obtuviste al registrarte. ¿Cómo generamos una clave pública a partir de ella?',
      paragraph_two:
        'Para hacer eso, necesitamos echar un vistazo a una fascinante rama de la criptografía llamada curvas elípticas. Esto se llama Criptografía de Curva Elíptica, o ECC para abreviar.',
      paragraph_three:
        'La ECC implica tomar ciertos puntos en una curva elíptica y realizar sumas y multiplicaciones con los puntos.',
      paragraph_four:
        'Bitcoin utiliza una curva específica llamada secp256k1. A la derecha, puedes ver una versión simplificada que es más fácil de visualizar, pero sigue las mismas reglas matemáticas',
      paragraph_five:
        'Comenzamos con un punto específico en esta curva, llamado el <Link href="public-key-2/help" className="underline">Punto Generador</Link>.',
    },

    public_key_three: {
      title: 'Clave pública',
      paragraph_one:
        'Para derivar una clave pública a partir de una clave privada, realizamos una operación de curva elíptica repetidamente con el punto generador (descubre por qué). El punto generador es un punto específico en la curva. Su valor es parte del estándar secp256k1 y siempre es el mismo:',
      paragraph_two:
        'La operación de curva elíptica es similar a la adición y, por lo tanto, su repetición es similar a la multiplicación. Utilizamos el símbolo * para describir el algoritmo (aprende más), donde k es la clave privada y P es la clave pública correspondiente:The elliptic curve operation is similar to addition and therefore its repetition is similar to multiplication. We use the * symbol to describe the algorithm (learn more), where `k` is the private key and `P` is the corresponding public key:',
      paragraph_three:
        'Completa la función privatekey_to_publickey() de modo que devuelva la clave pública derivada de una clave privada dada.',
    },

    public_key_four: {
      title: 'Clave pública',
      paragraph_one:
        'La clave pública tiene coordenadas x e y, lo que suma un total de 64 bytes. Esto puede comprimirse a 33 bytes al eliminar la coordenada y y agregar un solo byte de metadatos al principio. Ese byte indicará si la coordenada Y es par o impar. Debido a que la ecuación de la curva elíptica solo tiene dos variables, la clave pública completa puede ser calculada más tarde por el verificador utilizando solo x y los metadatos:',
      paragraph_two:
        'El byte de metadatos debe ser 2 si y es par y 3 si y es impar. Completa la función compress_publickey() para que acepte una clave pública y devuelva una matriz de 33 bytes que representen la clave pública comprimida.',
    },

    public_key_five: {
      title: 'Clave pública',
      heading: '¡Buen trabajo!',
      paragraph_one:
        '¡Y ahí lo tienes! ¡Tu clave pública comprimida! Hay muchas cosas interesantes que podemos hacer con ella, incluyendo la generación de direcciones para nuestra billetera. Aprenderemos sobre eso en el próximo desafío.',
      paragraph_two:
        'Ten en cuenta que generar una clave pública es un proceso unidireccional. No puedes descifrar la clave privada utilizada para generar una clave pública a menos que resuelvas un problema matemático notoriamente difícil llamado el problema del logaritmo discreto.',
    },

    address_one: {
      title: 'Dirección',
      paragraph_one:
        '¿Recuerdas el desafío de hash? Resulta que puedes generar el tipo más simple de dirección de Bitcoin al aplicar una función hash a tu clave pública comprimida. Bitcoin utiliza dos algoritmos de hash diferentes para esto: SHA-256 y RIPEMD-160.',
      paragraph_two:
        'El primer paso consiste en aplicar una función hash SHA-256 a tu clave pública comprimida. Luego, realiza una función hash RIPEMD-160 en ese resultado de salida SHA-256. El resultado final será un arreglo de 20 bytes.',
      paragraph_three:
        'Completa la función hash_compressed() que acepta una clave pública comprimida de 33 bytes y devuelve un hash de clave pública de 20 bytes.',
    },

    address_two: {
      title: 'Dirección',
      paragraph_one:
        'Existen varios tipos de direcciones de Bitcoin. Queremos crear una dirección de Hash de Clave Pública Testigo de Signet (wpkh) para codificar el hash de clave pública comprimida de 20 bytes. Primero debemos agregar el hash con el número de versión testigo 0. Estos 21 bytes se conocen como el programa testigo. El programa testigo se codifica en un formato fácil de entender para los humanos llamado bech32, que añadirá un prefijo legible por humanos y un valor de comprobación.',
      paragraph_two: 'El prefijo es determinado por la red:',
      list_one: 'Mainnet: ‘bc’',
      list_two: 'Signet: ‘tb’',
      list_three: 'Regtest: ‘bcrt’',
      paragraph_three:
        '¡Llama a la función proporcionada hash_to_address() con tus datos para generar tu dirección de Bitcoin!',
    },

    outro_one: {
      title: 'Outro',
      heading: 'Éxito!',
      paragraph_one: '¡Has creado tu propia billetera de Bitcoin!',
      paragraph_two:
        'Retiras los bitcoins de la piscina de minería a la billetera que acabas de crear. Ahora estás completamente financiado y listo para enfrentar lo que Vanderpoole y BitRey puedan lanzarte a continuación.',
    },
  },

  chapter_five: {
    title: `El llavero`,
  },

  chapter_six: {
    title: `El ataque es la mejor defensa`,
  },

  chapter_seven: {
    title: `Veintiuno`,
  },

  chapter_eight: {
    title: `Una cuestión de sostenibilidad`,
  },

  chapter_nine: {
    title: `No compute, verifica.`,
  },

  chapter_ten: {
    title: `10.000 millones de conexiones`,
  },

  ///CHALLENGE PAGE
  challenge_list: {
    coming_soon: `Muy pronto. Agárrate fuerte.`,
  },

  chapter: {
    chapter_locked_one: `Complete Capítulo`,
    chapter_locked_two: `para desbloquear.`,
  },

  hero: {
    title: `Salvando Satoshi`,
    description: `Ábrete camino con el código a través de los misterios del bitcoin.`,
    start_journey: `Iniciar el Librojuego`,
    tell_more: `Más información`,
  },

  footer: {
    paragraph_one: `Una producción de código abierto de la comunidad bitcoin.`,
    link: `Compruebe el código`,
  },

  navbar: {
    intro: `Introducción`,
    chapter: `Capítulo`,
    chapter_complete: `Capítulo completo`,
    challenge: `Desafío`,
    help_tooltip: `¿Necesitas ayuda?`,
  },

  modal_login: {
    heading: `Carga tu progreso`,
    paragraph_one: `Introduce tu código personal a continuación para restaurar el progreso de tus capítulos y desafíos, así como tu avatar.`,
    clear: `¿Aún no tienes un código?`,
    prompt: `Introduzca tu código`,
    confirm: `Cargar mis progreso`,
    paragraph_two: `Lo siento, ese no es el código correcto para el progreso almacenado en este navegador.`,
    paragraph_three: `¿Aún no tienes código o quieres empezar de nuevo?`,
    quit: `Borra el progreso de guardado.`,
    success: `Progreso cargado`,
    success_message: `Everything is ready to continue with the chapter`,
  },

  modal_logout: {
    heading: `Has iniciado sesión`,
    paragraph_one: `Tu progreso se almacena en este navegador. Se cerrará tu sesión automáticamente después de 30 días. Utiliza el código siguiente para restablecerla después de tomarte un descanso`,
    signout: `Cerrar sesión`,
  },

  modal_signup: {
    heading: `¿Quieres guardar tu progreso?`,
    paragraph_one: `Copia y guarda un sencillo código para guardar y cargar tu progreso en cualquier dispositivo y navegador. Si ya tienes un código, carga tu progreso aquí`,
    subtítulo_uno: `Elige un avatar`,
    subheading_two: `Haz una copia de seguridad de tu código personal`,
    paragraph_two: `¿Todo listo? ¿Código copiado y copia de seguridad? Asegúrate de hacerlo, ya que no se puede recuperar si lo pierdes`,
    confirm: `He copiado y hecho una copia de seguridad de mi código`,
  },

  demo_disclaimer: {
    title: `Esta es una demostración`,
    description: `Aún estamos en las primeras fases de este proyecto. El capítulo 1 es funcional, el resto está en desarrollo. Pruébelo y díganos lo que piensa, nos encantaría recibir <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf1xpNqUYJyvYL5IZDnxy78273pkqzfYW2Hf91H4Do4KHgy9g/viewform?usp=sf_link" className="underline">sus comentarios</Link>..`,
  },

  runner: {
    run: `Ejecutar el script`,
    running: `Ejecutando`,
    pause: `Pausa`,
    result: `Resultados`,
    evaluation: `Evaluación`,
    script_output: `Resultado del script`,
    waiting: `En espera de la información arriba...`,
  },
}

export default translations
