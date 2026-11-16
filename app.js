const UI_STRINGS = {
  "en-US": {
    levelPrefix: "Level",
    level1Name: "First Words",
    eggBadge: "🥚 Egg",
    eggProgressTitle: "Egg Progress 🥚",
    eggProgressText: (xp) => `${xp} / 100 XP (Egg)`,
    eggMood: (rem) => `Egg hatches at 100 XP! ${rem} XP remaining.`,
    lvlProgressTitle: (lvl) => `Level ${lvl} Progress`,
    xpBoostTag: "✨ [XP Boost Active]",
    lblHappy: "❤️ Mood:",
    lblHunger: "🍔 Hunger:",
    lblHealth: "💊 Health:",
    btnFeed: "🍗 Feed (10)",
    btnPlay: "🎾 Play (10)",
    btnAccessory: "🕶️ Accessory (200)",
    btnMedicine: "💊 Medicine (15)",
    btnExport: "💾 Export Save",
    btnImport: "📂 Import Save",
    lblBlind: "👂 Ear Only",
    btnTranslate: "🌐 Translate",
    btnNormalSpeed: "🔊 Normal Speed",
    btnSlowSpeed: "🐢 Slow (0.7x)",
    btnSkip: "⏭️ Skip",
    micIdle: "🎤 Tap & Speak",
    micRecording: "🎙️ Listening...",
    defaultFeedback: "Tap 🔊 to listen, then 🎤 to speak!",
    bossFeedback: "⚠️ BOSS PHRASE: Worth extra XP! Speak accurately.",
    transPrefix: "Translation: ",
    notEnoughCoins: "Not enough coins!",
    need200Coins: "Not enough coins! You need 200 🪙 for the shades.",
    fedMsg: (name) => `${name} ate and is full! 🍗`,
    playMsg: (name) => `${name} loved playing! 🎾`,
    accMsg: (name) => `${name} got stylish shades! ✨ (XP Boost Active)`,
    medMsg: (name) => `${name} took medicine and is healed! 💊`,
    greatPronun: (name) => `${name} loved your pronunciation! 🔥`,
    sadPronun: (name) => `${name} got sad... Listen to the audio! 👂`,
    scorePass: (score, coins, xp, bonus) => `✅ <strong>Score ${score}%!</strong> +${coins} Coins | +${xp} XP ${bonus ? '(✨ Boost)' : ''}`,
    scoreFail: (score, thresh) => `❌ <strong>Score ${score}%</strong> (Min ${thresh}%)`,
    heardLabel: "Heard: ",
    listenVoice: "🎧 Hear My Voice",
    levelUp: (name, lvl) => `🎊 <strong>LEVEL UP! ${name} reached Level ${lvl}!</strong>`,
    eggHatched: (rarity, petInfo, name) => `🎉 THE EGG HATCHED!\n\nYou hatched a ${rarity} pet:\n${petInfo}!\n\n${name} will now join your studies!`,
    exportSuccess: "✅ Save code copied to your clipboard!",
    exportPrompt: "Copy this save code to restore your progress on another device:",
    importPrompt: "Paste your save code here:",
    importSuccess: "Progress restored! Reloading...",
    importError: "Invalid code!",
    browserAlert: "Please use Google Chrome or Microsoft Edge."
  },
  "pt-BR": {
    levelPrefix: "Nível",
    level1Name: "Primeiras Palavras",
    eggBadge: "🥚 Ovo",
    eggProgressTitle: "Progresso do Ovo 🥚",
    eggProgressText: (xp) => `${xp} / 100 XP (Ovo)`,
    eggMood: (rem) => `O ovo choca em 100 XP! Faltam ${rem} XP.`,
    lvlProgressTitle: (lvl) => `Progresso do Nível ${lvl}`,
    xpBoostTag: "✨ [Bônus XP Ativo]",
    lblHappy: "❤️ Humor:",
    lblHunger: "🍔 Fome:",
    lblHealth: "💊 Saúde:",
    btnFeed: "🍗 Alimentar (10)",
    btnPlay: "🎾 Brincar (10)",
    btnAccessory: "🕶️ Acessório (200)",
    btnMedicine: "💊 Remédio (15)",
    btnExport: "💾 Salvar Save",
    btnImport: "📂 Carregar Save",
    lblBlind: "👂 Só Ouvido",
    btnTranslate: "🌐 Tradução",
    btnNormalSpeed: "🔊 Velocidade Real",
    btnSlowSpeed: "🐢 Devagar (0.7x)",
    btnSkip: "⏭️ Pular",
    micIdle: "🎤 Toque e Fale",
    micRecording: "🎙️ Ouvindo...",
    defaultFeedback: "Toque em 🔊 para ouvir e depois 🎤 para falar!",
    bossFeedback: "⚠️ FRASE BOSS: Vale mais XP! Fale com precisão.",
    transPrefix: "Tradução: ",
    notEnoughCoins: "Moedas insuficientes!",
    need200Coins: "Moedas insuficientes! Você precisa de 200 🪙 para comprar os óculos.",
    fedMsg: (name) => `${name} comeu e está satisfeito! 🍗`,
    playMsg: (name) => `${name} adorou brincar! 🎾`,
    accMsg: (name) => `${name} comprou óculos estilosos! ✨ (Bônus de XP Ativo)`,
    medMsg: (name) => `${name} tomou o remédio e está curado! 💊`,
    greatPronun: (name) => `${name} adorou sua pronúncia! 🔥`,
    sadPronun: (name) => `${name} ficou triste... Ouça o áudio! 👂`,
    scorePass: (score, coins, xp, bonus) => `✅ <strong>Nota ${score}%!</strong> +${coins} Moedas | +${xp} XP ${bonus ? '(✨ Bônus)' : ''}`,
    scoreFail: (score, thresh) => `❌ <strong>Nota ${score}%</strong> (Mínimo ${thresh}%)`,
    heardLabel: "Entendido: ",
    listenVoice: "🎧 Ouvir Minha Voz",
    levelUp: (name, lvl) => `🎊 <strong>LEVEL UP! ${name} subiu para o Nível ${lvl}!</strong>`,
    eggHatched: (rarity, petInfo, name) => `🎉 O OVO RACHOU!\n\nVocê chocou um pet ${rarity}:\n${petInfo}!\n\nAgora ${name} vai te acompanhar nos estudos!`,
    exportSuccess: "✅ Código de save copiado!",
    exportPrompt: "Copie este código para restaurar seu progresso em outro aparelho:",
    importPrompt: "Cole seu código de salvamento aqui:",
    importSuccess: "Progresso restaurado! Recarregando...",
    importError: "Código inválido!",
    browserAlert: "Use o Google Chrome ou Microsoft Edge."
  },
  "es-ES": {
    levelPrefix: "Nivel",
    level1Name: "Primeras Palabras",
    eggBadge: "🥚 Huevo",
    eggProgressTitle: "Progreso del Huevo 🥚",
    eggProgressText: (xp) => `${xp} / 100 XP (Huevo)`,
    eggMood: (rem) => `¡El huevo eclosiona a los 100 XP! Faltan ${rem} XP.`,
    lvlProgressTitle: (lvl) => `Progreso del Nivel ${lvl}`,
    xpBoostTag: "✨ [Bono XP Activo]",
    lblHappy: "❤️ Ánimo:",
    lblHunger: "🍔 Hambre:",
    lblHealth: "💊 Salud:",
    btnFeed: "🍗 Alimentar (10)",
    btnPlay: "🎾 Jugar (10)",
    btnAccessory: "🕶️ Accesorio (200)",
    btnMedicine: "💊 Medicina (15)",
    btnExport: "💾 Guardar Partida",
    btnImport: "📂 Cargar Partida",
    lblBlind: "👂 Solo Oído",
    btnTranslate: "🌐 Traducir",
    btnNormalSpeed: "🔊 Velocidad Normal",
    btnSlowSpeed: "🐢 Lento (0.7x)",
    btnSkip: "⏭️ Saltar",
    micIdle: "🎤 Toca y Habla",
    micRecording: "🎙️ Escuchando...",
    defaultFeedback: "¡Toca 🔊 para escuchar y luego 🎤 para hablar!",
    bossFeedback: "⚠️ FRASE JEFE: ¡Vale más XP! Habla con precisión.",
    transPrefix: "Traducción: ",
    notEnoughCoins: "¡Monedas insuficientes!",
    need200Coins: "¡Monedas insuficientes! Necesitas 200 🪙 para las gafas.",
    fedMsg: (name) => `¡${name} comió y está satisfecho! 🍗`,
    playMsg: (name) => `¡A ${name} le encantó jugar! 🎾`,
    accMsg: (name) => `¡${name} consiguió gafas con estilo! ✨ (Bono XP Activo)`,
    medMsg: (name) => `¡${name} tomó medicina y está curado! 💊`,
    greatPronun: (name) => `¡A ${name} le encantó tu pronunciación! 🔥`,
    sadPronun: (name) => `${name} se puso triste... ¡Escucha el audio! 👂`,
    scorePass: (score, coins, xp, bonus) => `✅ <strong>¡Nota ${score}%!</strong> +${coins} Monedas | +${xp} XP ${bonus ? '(✨ Bono)' : ''}`,
    scoreFail: (score, thresh) => `❌ <strong>Nota ${score}%</strong> (Mínimo ${thresh}%)`,
    heardLabel: "Escuchado: ",
    listenVoice: "🎧 Oír Mi Voz",
    levelUp: (name, lvl) => `🎊 <strong>¡SUBIDA DE NIVEL! ¡${name} subió al Nivel ${lvl}!</strong>`,
    eggHatched: (rarity, petInfo, name) => `🎉 ¡EL HUEVO ECLOSIONÓ!\n\nConseguiste una mascota ${rarity}:\n${petInfo}!\n\n¡Ahora ${name} te acompañará en tus estudios!`,
    exportSuccess: "✅ ¡Código copiado al portapapeles!",
    exportPrompt: "Copia este código para restaurar tu progreso en otro dispositivo:",
    importPrompt: "Pega tu código de guardado aquí:",
    importSuccess: "¡Progreso restaurado! Recargando...",
    importError: "¡Código inválido!",
    browserAlert: "Por favor usa Google Chrome o Microsoft Edge."
  },
  "fr-FR": {
    levelPrefix: "Niveau",
    level1Name: "Premiers Mots",
    eggBadge: "🥚 Œuf",
    eggProgressTitle: "Progression de l'Œuf 🥚",
    eggProgressText: (xp) => `${xp} / 100 XP (Œuf)`,
    eggMood: (rem) => `L'œuf éclot à 100 XP ! Il manque ${rem} XP.`,
    lvlProgressTitle: (lvl) => `Progression Niveau ${lvl}`,
    xpBoostTag: "✨ [Bonus XP Actif]",
    lblHappy: "❤️ Humeur :",
    lblHunger: "🍔 Faim :",
    lblHealth: "💊 Santé :",
    btnFeed: "🍗 Nourrir (10)",
    btnPlay: "🎾 Jouer (10)",
    btnAccessory: "🕶️ Accessoire (200)",
    btnMedicine: "💊 Soigner (15)",
    btnExport: "💾 Sauvegarder",
    btnImport: "📂 Charger",
    lblBlind: "👂 À l'oreille",
    btnTranslate: "🌐 Traduire",
    btnNormalSpeed: "🔊 Vitesse Normale",
    btnSlowSpeed: "🐢 Lent (0.7x)",
    btnSkip: "⏭️ Passer",
    micIdle: "🎤 Appuyer & Parler",
    micRecording: "🎙️ Écoute...",
    defaultFeedback: "Appuyez sur 🔊 pour écouter puis sur 🎤 pour parler !",
    bossFeedback: "⚠️ PHRASE BOSS : Plus d'XP ! Parlez avec précision.",
    transPrefix: "Traduction : ",
    notEnoughCoins: "Pas assez de pièces !",
    need200Coins: "Pas assez de pièces ! Il faut 200 🪙 pour les lunettes.",
    fedMsg: (name) => `${name} a mangé et est rassasié ! 🍗`,
    playMsg: (name) => `${name} a adoré jouer ! 🎾`,
    accMsg: (name) => `${name} a des lunettes stylées ! ✨ (Bonus XP Actif)`,
    medMsg: (name) => `${name} a pris son médicament et est guéri ! 💊`,
    greatPronun: (name) => `${name} a adoré votre prononciation ! 🔥`,
    sadPronun: (name) => `${name} est triste... Écoutez l'audio ! 👂`,
    scorePass: (score, coins, xp, bonus) => `✅ <strong>Score ${score}% !</strong> +${coins} Pièces | +${xp} XP ${bonus ? '(✨ Bonus)' : ''}`,
    scoreFail: (score, thresh) => `❌ <strong>Score ${score}%</strong> (Min ${thresh}%)`,
    heardLabel: "Entendu : ",
    listenVoice: "🎧 Écouter Ma Voix",
    levelUp: (name, lvl) => `🎊 <strong>NIVEAU SUPÉRIEUR ! ${name} passe au Niveau ${lvl} !</strong>`,
    eggHatched: (rarity, petInfo, name) => `🎉 L'ŒUF A ÉCLOS !\n\nVous avez obtenu un familier ${rarity} :\n${petInfo} !\n\n${name} vous accompagne désormais !`,
    exportSuccess: "✅ Code copié dans le presse-papiers !",
    exportPrompt: "Copiez ce code pour restaurer votre progression ailleurs :",
    importPrompt: "Collez votre code de sauvegarde ici :",
    importSuccess: "Progression restaurée ! Rechargement...",
    importError: "Code invalide !",
    browserAlert: "Veuillez utiliser Google Chrome ou Microsoft Edge."
  }
};

// 100% AUTHENTIC, GRAMMATICALLY COMPLETE PHRASES + NATIVE TRANSLATIONS
const PHRASE_BANK = {
  "pt-BR": [
    {
      ctx: "Saudação",
      text: "Oi, tudo bem?",
      hint: "Saudação informal do dia a dia",
      hard: false,
      trans: { "en-US": "Hi, how are you?", "pt-BR": "Oi, tudo bem?", "es-ES": "Hola, ¿qué tal?", "fr-FR": "Salut, ça va ?" }
    },
    {
      ctx: "Manhã",
      text: "Bom dia! Como você está?",
      hint: "Cumprimento educado pela manhã",
      hard: false,
      trans: { "en-US": "Good morning! How are you?", "pt-BR": "Bom dia! Como você está?", "es-ES": "¡Buenos días! ¿Cómo estás?", "fr-FR": "Bonjour ! Comment ça va ?" }
    },
    {
      ctx: "Agradecimento",
      text: "Muito obrigado pela ajuda!",
      hint: "Agradecimento comum",
      hard: false,
      trans: { "en-US": "Thank you very much for the help!", "pt-BR": "Muito obrigado pela ajuda!", "es-ES": "¡Muchas gracias por la ayuda!", "fr-FR": "Merci beaucoup pour l'aide !" }
    },
    {
      ctx: "Cafeteria",
      text: "Quero um café com leite, por favor",
      hint: "Pedido simples na padaria",
      hard: false,
      trans: { "en-US": "I want a coffee with milk, please", "pt-BR": "Quero um café com leite, por favor", "es-ES": "Quiero un café con leche, por favor", "fr-FR": "Je veux un café au lait, s'il vous plaît" }
    },
    {
      ctx: "Despedida",
      text: "A gente se vê amanhã!",
      hint: "Despedida natural entre amigos",
      hard: false,
      trans: { "en-US": "See you tomorrow!", "pt-BR": "A gente se vê amanhã!", "es-ES": "¡Nos vemos mañana!", "fr-FR": "On se voit demain !" }
    },
    {
      ctx: "Rua",
      text: "Onde fica o banheiro?",
      hint: "Pergunta essencial",
      hard: false,
      trans: { "en-US": "Where is the bathroom?", "pt-BR": "Onde fica o banheiro?", "es-ES": "¿Dónde está el baño?", "fr-FR": "Où sont les toilettes ?" }
    },
    {
      ctx: "🔥 BOSS",
      text: "Com licença, você sabe onde fica a estação mais próxima?",
      hint: "Frase completa para praticar ritmo",
      hard: true,
      trans: { "en-US": "Excuse me, do you know where the nearest station is?", "pt-BR": "Com licença, você sabe onde fica a estação mais próxima?", "es-ES": "Disculpa, ¿sabes dónde está la estación más cercana?", "fr-FR": "Excusez-moi, savez-vous où se trouve la station la plus proche ?" }
    }
  ],
  "pt-PT": [
    {
      ctx: "Saudação",
      text: "Olá, está tudo bem?",
      hint: "Cumprimento natural em Portugal",
      hard: false,
      trans: { "en-US": "Hello, is everything alright?", "pt-BR": "Olá, está tudo bem?", "es-ES": "Hola, ¿todo bien?", "fr-FR": "Salut, tout va bien ?" }
    },
    {
      ctx: "Manhã",
      text: "Bom dia! Como está?",
      hint: "Saudação educada",
      hard: false,
      trans: { "en-US": "Good morning! How are you?", "pt-BR": "Bom dia! Como você está?", "es-ES": "¡Buenos días! ¿Cómo está?", "fr-FR": "Bonjour ! Comment allez-vous ?" }
    },
    {
      ctx: "Café",
      text: "Queria uma bica, por favor",
      hint: "'Bica' = café expresso em Lisboa",
      hard: false,
      trans: { "en-US": "I'd like an espresso, please", "pt-BR": "Queria um café expresso, por favor", "es-ES": "Quería un café solo, por favor", "fr-FR": "Je voudrais un expresso, s'il vous plaît" }
    },
    {
      ctx: "Agradecimento",
      text: "Muito obrigado!",
      hint: "Agradecimento padrão",
      hard: false,
      trans: { "en-US": "Thank you very much!", "pt-BR": "Muito obrigado!", "es-ES": "¡Muchas gracias!", "fr-FR": "Merci beaucoup !" }
    },
    {
      ctx: "Despedida",
      text: "Até já!",
      hint: "Despedida rápida em Portugal",
      hard: false,
      trans: { "en-US": "See you soon!", "pt-BR": "Até logo!", "es-ES": "¡Hasta ahora!", "fr-FR": "À tout à l'heure !" }
    },
    {
      ctx: "🔥 BOSS",
      text: "Desculpe, sabe dizer-me onde fica a estação mais próxima?",
      hint: "Colocação pronominal típica europeia",
      hard: true,
      trans: { "en-US": "Excuse me, can you tell me where the nearest station is?", "pt-BR": "Desculpe, sabe me dizer onde fica a estação mais próxima?", "es-ES": "Disculpe, ¿sabe decirme dónde está la estación más cercana?", "fr-FR": "Excusez-moi, savez-vous me dire où se trouve la gare la plus proche ?" }
    }
  ],
  "en-US": [
    {
      ctx: "Greeting",
      text: "Hey, how are you doing?",
      hint: "Natural everyday greeting",
      hard: false,
      trans: { "en-US": "Hey, how are you doing?", "pt-BR": "Oi, como você está?", "es-ES": "Hola, ¿cómo te va?", "fr-FR": "Salut, comment ça va ?" }
    },
    {
      ctx: "Coffee Shop",
      text: "Can I get an iced coffee, please?",
      hint: "Common US coffee order",
      hard: false,
      trans: { "en-US": "Can I get an iced coffee, please?", "pt-BR": "Posso pedir um café gelado, por favor?", "es-ES": "¿Me pones un café con hielo, por favor?", "fr-FR": "Je peux avoir un café glacé, s'il vous plaît ?" }
    },
    {
      ctx: "Thanks",
      text: "Thank you so much!",
      hint: "Warm thank you",
      hard: false,
      trans: { "en-US": "Thank you so much!", "pt-BR": "Muito obrigado mesmo!", "es-ES": "¡Muchísimas gracias!", "fr-FR": "Merci infiniment !" }
    },
    {
      ctx: "Small Talk",
      text: "Nice to meet you!",
      hint: "When meeting someone new",
      hard: false,
      trans: { "en-US": "Nice to meet you!", "pt-BR": "Prazer em conhecer você!", "es-ES": "¡Encantado de conocerte!", "fr-FR": "Ravi de vous rencontrer !" }
    },
    {
      ctx: "Goodbye",
      text: "Have a great day!",
      hint: "Polite farewell",
      hard: false,
      trans: { "en-US": "Have a great day!", "pt-BR": "Tenha um ótimo dia!", "es-ES": "¡Que tengas un buen día!", "fr-FR": "Passez une bonne journée !" }
    },
    {
      ctx: "🔥 BOSS",
      text: "Excuse me, do you know where the nearest subway station is?",
      hint: "Full sentence linkage",
      hard: true,
      trans: { "en-US": "Excuse me, do you know where the nearest subway station is?", "pt-BR": "Com licença, você sabe onde fica a estação de metrô mais próxima?", "es-ES": "Disculpa, ¿sabes dónde está la estación de metro más cercana?", "fr-FR": "Excusez-moi, savez-vous où se trouve la station de métro la plus proche ?" }
    }
  ],
  "en-GB": [
    {
      ctx: "Greeting",
      text: "Alright mate, how's it going?",
      hint: "Classic British casual greeting",
      hard: false,
      trans: { "en-US": "Hey buddy, how is it going?", "pt-BR": "E aí cara, como vão as coisas?", "es-ES": "Buenas tío, ¿cómo va todo?", "fr-FR": "Salut l'ami, comment ça roule ?" }
    },
    {
      ctx: "Tea / Coffee",
      text: "Could I have a cuppa, please?",
      hint: "'Cuppa' = cup of tea (or coffee)",
      hard: false,
      trans: { "en-US": "Could I have a cup of tea, please?", "pt-BR": "Poderia me dar uma xícara de chá, por favor?", "es-ES": "¿Me pones una taza de té, por favor?", "fr-FR": "Je pourrais avoir une tasse de thé, s'il vous plaît ?" }
    },
    {
      ctx: "Thanks",
      text: "Cheers, thanks a lot!",
      hint: "'Cheers' = thank you in the UK",
      hard: false,
      trans: { "en-US": "Thanks a lot!", "pt-BR": "Valeu, muito obrigado!", "es-ES": "¡Gracias, muchas gracias!", "fr-FR": "Merci beaucoup !" }
    },
    {
      ctx: "Apology",
      text: "Sorry to bother you",
      hint: "Polite British opener",
      hard: false,
      trans: { "en-US": "Sorry to bother you", "pt-BR": "Desculpe incomodar", "es-ES": "Perdona que te moleste", "fr-FR": "Désolé de vous déranger" }
    },
    {
      ctx: "🔥 BOSS",
      text: "Excuse me, could you tell me where the nearest underground station is?",
      hint: "British 'underground' instead of 'subway'",
      hard: true,
      trans: { "en-US": "Excuse me, could you tell me where the nearest subway station is?", "pt-BR": "Com licença, poderia me dizer onde fica a estação de metrô mais próxima?", "es-ES": "Disculpe, ¿podría decirme dónde está la estación de metro más cercana?", "fr-FR": "Excusez-moi, pourriez-vous me dire où est la station de métro la plus proche ?" }
    }
  ],
  "es-ES": [
    {
      ctx: "Saludo",
      text: "Hola, ¿qué tal estás?",
      hint: "Saludo natural en España",
      hard: false,
      trans: { "en-US": "Hi, how are you?", "pt-BR": "Oi, como você está?", "es-ES": "Hola, ¿qué tal estás?", "fr-FR": "Salut, comment ça va ?" }
    },
    {
      ctx: "Cafetería",
      text: "¿Me pones un café con leche, por favor?",
      hint: "Forma natural de pedir en un bar",
      hard: false,
      trans: { "en-US": "Can I have a coffee with milk, please?", "pt-BR": "Me vê um café com leite, por favor?", "es-ES": "¿Me pones un café con leche, por favor?", "fr-FR": "Vous me mettez un café au lait, s'il vous plaît ?" }
    },
    {
      ctx: "Agradecimiento",
      text: "¡Muchas gracias por todo!",
      hint: "Agradecimiento cálido",
      hard: false,
      trans: { "en-US": "Thank you very much for everything!", "pt-BR": "Muito obrigado por tudo!", "es-ES": "¡Muchas gracias por todo!", "fr-FR": "Merci beaucoup pour tout !" }
    },
    {
      ctx: "Despedida",
      text: "¡Hasta luego, nos vemos!",
      hint: "Despedida cotidiana",
      hard: false,
      trans: { "en-US": "See you later!", "pt-BR": "Até logo, a gente se vê!", "es-ES": "¡Hasta luego, nos vemos!", "fr-FR": "À plus tard, on se voit !" }
    },
    {
      ctx: "🔥 BOSS",
      text: "Perdona, ¿sabes dónde está la estación de metro más cercana?",
      hint: "Entonación de pregunta fluida",
      hard: true,
      trans: { "en-US": "Excuse me, do you know where the nearest subway station is?", "pt-BR": "Desculpa, você sabe onde fica a estação de metrô mais próxima?", "es-ES": "Perdona, ¿sabes dónde está la estación de metro más cercana?", "fr-FR": "Pardon, sais-tu où se trouve la station de métro la plus proche ?" }
    }
  ],
  "fr-FR": [
    {
      ctx: "Salutation",
      text: "Salut, comment ça va ?",
      hint: "Salutation courante entre amis",
      hard: false,
      trans: { "en-US": "Hi, how is it going?", "pt-BR": "Oi, como vão as coisas?", "es-ES": "Hola, ¿cómo va todo?", "fr-FR": "Salut, comment ça va ?" }
    },
    {
      ctx: "Au Café",
      text: "Je voudrais un café, s'il vous plaît",
      hint: "Commande polie au café",
      hard: false,
      trans: { "en-US": "I would like a coffee, please", "pt-BR": "Eu gostaria de um café, por favor", "es-ES": "Quisiera un café, por favor", "fr-FR": "Je voudrais un café, s'il vous plaît" }
    },
    {
      ctx: "Remerciement",
      text: "Merci beaucoup pour votre aide !",
      hint: "Remerciement poli",
      hard: false,
      trans: { "en-US": "Thank you very much for your help!", "pt-BR": "Muito obrigado pela sua ajuda!", "es-ES": "¡Muchas gracias por su ayuda!", "fr-FR": "Merci beaucoup pour votre aide !" }
    },
    {
      ctx: "Au revoir",
      text: "Bonne journée, à bientôt !",
      hint: "Formule de politesse quotidienne",
      hard: false,
      trans: { "en-US": "Have a nice day, see you soon!", "pt-BR": "Tenha um bom dia, até breve!", "es-ES": "¡Buen día, hasta pronto!", "fr-FR": "Bonne journée, à bientôt !" }
    },
    {
      ctx: "🔥 BOSS",
      text: "Excusez-moi, savez-vous où se trouve la station de métro la plus proche ?",
      hint: "Enchaînement et liaisons naturelles",
      hard: true,
      trans: { "en-US": "Excuse me, do you know where the nearest subway station is?", "pt-BR": "Com licença, você sabe onde fica a estação de metrô mais próxima?", "es-ES": "Disculpe, ¿sabe dónde está la estación de metro más cercana?", "fr-FR": "Excusez-moi, savez-vous où se trouve la station de métro la plus proche ?" }
    }
  ]
};

const PET_DATABASE = {
  legendary: [
    { name: "Chromatic Star Dragon 🐉", rarity: "🌟 LEGENDARY" },
    { name: "Crystal Phoenix 🐦‍🔥", rarity: "🌟 LEGENDARY" }
  ],
  epic: [
    { name: "Cyber Wolf 🐺", rarity: "🟣 EPIC" },
    { name: "Mystic Gryphon 🦅", rarity: "🟣 EPIC" }
  ],
  rare: [
    { name: "Gamer Red Panda 🐼", rarity: "🔵 RARE" },
    { name: "Snow Fox 🦊", rarity: "🔵 RARE" }
  ],
  common: [
    { name: "Cute Chick 🐣", rarity: "⚪ COMMON" },
    { name: "Bouncy Bunny 🐰", rarity: "⚪ COMMON" },
    { name: "Zen Sloth 🦥", rarity: "⚪ COMMON" }
  ]
};

let state = JSON.parse(localStorage.getItem("pronunciagotchi_clean_v1")) || {
  petName: null,
  nativeLang: null,
  coins: 20,
  xp: 0,
  level: 1,
  happiness: 60,
  hunger: 50,
  health: 100,
  hasShades: false,
  completed: [],
  hatchedPet: null
};

function getUI() {
  return UI_STRINGS[state.nativeLang] || UI_STRINGS["en-US"];
}

function applyLocalization() {
  const ui = getUI();
  document.getElementById("lblHappy").textContent = ui.lblHappy;
  document.getElementById("lblHunger").textContent = ui.lblHunger;
  document.getElementById("lblHealth").textContent = ui.lblHealth;
  document.getElementById("btnFeed").textContent = ui.btnFeed;
  document.getElementById("btnPlay").textContent = ui.btnPlay;
  document.getElementById("btnAccessory").textContent = ui.btnAccessory;
  document.getElementById("btnMedicine").textContent = ui.btnMedicine;
  document.getElementById("btnExport").textContent = ui.btnExport;
  document.getElementById("btnImport").textContent = ui.btnImport;
  document.getElementById("lblBlind").textContent = ui.lblBlind;
  document.getElementById("btnTranslate").textContent = ui.btnTranslate;
  document.getElementById("btnNormalSpeed").textContent = ui.btnNormalSpeed;
  document.getElementById("btnSlowSpeed").textContent = ui.btnSlowSpeed;
  document.getElementById("btnSkip").textContent = ui.btnSkip;
  document.getElementById("micBtn").textContent = ui.micIdle;
}

window.addEventListener("DOMContentLoaded", () => {
  if (!state.petName || !state.nativeLang) {
    document.getElementById("setupModal").style.display = "flex";
  } else {
    applyLocalization();
    loadNextPhrase();
  }
  saveState();
});

function saveSetup() {
  const nameInput = document.getElementById("setupPetName").value.trim();
  const langSelect = document.getElementById("setupNativeLang").value;

  state.petName = nameInput ? nameInput : "Pipoca";
  state.nativeLang = langSelect;
  
  document.getElementById("setupModal").style.display = "none";
  applyLocalization();
  saveState();
  loadNextPhrase();
}

let currentItem = null;
let lastAudioURL = null;

function getRequiredXP(lvl) {
  return Math.floor(100 * Math.pow(lvl, 1.3));
}

function saveState() {
  localStorage.setItem("pronunciagotchi_clean_v1", JSON.stringify(state));
  const ui = getUI();
  
  document.getElementById("levelBadge").textContent = `${ui.levelPrefix} ${state.level}: ${ui.level1Name}`;
  document.getElementById("coinCount").textContent = state.coins;

  if (!state.hatchedPet) {
    document.getElementById("headerPetInfo").textContent = `${state.petName || 'Pet'} - ${ui.eggBadge}`;
  } else {
    document.getElementById("headerPetInfo").textContent = `${state.petName} - ${state.hatchedPet.rarity}`;
  }

  const reqXP = getRequiredXP(state.level);

  if (!state.hatchedPet) {
    document.getElementById("xpBar").max = 100;
    document.getElementById("xpBar").value = state.xp;
    document.getElementById("xpText").textContent = ui.eggProgressText(state.xp);
    document.getElementById("xpTitle").textContent = ui.eggProgressTitle;
    document.getElementById("petAvatar").textContent = "🥚";
    document.getElementById("petMood").textContent = ui.eggMood(Math.max(0, 100 - state.xp));
  } else {
    document.getElementById("xpBar").max = reqXP;
    document.getElementById("xpBar").value = state.xp;
    document.getElementById("xpText").textContent = `${state.xp} / ${reqXP} XP`;
    document.getElementById("xpTitle").textContent = ui.lvlProgressTitle(state.level);
    document.getElementById("petAvatar").textContent = state.hasShades ? "😎 " + state.hatchedPet.emoji : state.hatchedPet.emoji;
    document.getElementById("petMood").textContent = `${state.petName} (${state.hatchedPet.rarity}) ${state.hasShades ? ui.xpBoostTag : ''}`;
  }

  document.getElementById("happyBar").value = state.happiness;
  document.getElementById("hungerBar").value = state.hunger;
  document.getElementById("healthBar").value = state.health;
}

async function exportSave() {
  const ui = getUI();
  const saveString = btoa(JSON.stringify(state));
  try {
    await navigator.clipboard.writeText(saveString);
    alert(ui.exportSuccess);
  } catch (err) {
    prompt(ui.exportPrompt, saveString);
  }
}

function importSave() {
  const ui = getUI();
  const saveString = prompt(ui.importPrompt);
  if (saveString) {
    try {
      state = JSON.parse(atob(saveString));
      saveState();
      alert(ui.importSuccess);
      location.reload();
    } catch (e) {
      alert(ui.importError);
    }
  }
}

function hatchEgg() {
  const ui = getUI();
  const roll = Math.random() * 100;
  let pool;
  if (roll < 15) pool = PET_DATABASE.legendary;
  else if (roll < 40) pool = PET_DATABASE.epic;
  else if (roll < 75) pool = PET_DATABASE.rare;
  else pool = PET_DATABASE.common;

  const chosen = pool[Math.floor(Math.random() * pool.length)];
  const parts = chosen.name.split(" ");
  const emoji = parts.pop();
  const name = parts.join(" ");

  state.hatchedPet = { name, emoji, rarity: chosen.rarity };
  alert(ui.eggHatched(chosen.rarity, chosen.name, state.petName));
}

function generateFreshPhrase() {
  const lang = document.getElementById("langSelect").value;
  const pool = PHRASE_BANK[lang] || PHRASE_BANK["en-US"];

  // Avoid repeating the exact phrase currently displayed
  const candidates = pool.filter(p => !currentItem || p.text !== currentItem.text);
  const unseen = candidates.filter(p => !state.completed.includes(p.text));

  if (unseen.length > 0) {
    return unseen[Math.floor(Math.random() * unseen.length)];
  }
  return candidates[Math.floor(Math.random() * candidates.length)] || pool[0];
}

function loadNextPhrase() {
  const ui = getUI();
  currentItem = generateFreshPhrase();
  document.getElementById("contextTag").textContent = currentItem.ctx;
  document.getElementById("targetPhrase").textContent = currentItem.text;
  document.getElementById("phraseHint").textContent = "💡 " + currentItem.hint;
  
  const translatedText = currentItem.trans[state.nativeLang] || currentItem.trans["en-US"];
  document.getElementById("translationBox").textContent = ui.transPrefix + translatedText;
  document.getElementById("translationBox").style.display = "none";
  
  document.getElementById("feedback").textContent = currentItem.hard ? ui.bossFeedback : ui.defaultFeedback;
  document.getElementById("targetPhrase").style.color = currentItem.hard ? "#f43f5e" : "#f8fafc";

  toggleBlindMode();
  saveState();
}

function toggleTranslation() {
  const box = document.getElementById("translationBox");
  box.style.display = box.style.display === "none" ? "block" : "none";
}

function toggleBlindMode() {
  const isBlind = document.getElementById("blindMode").checked;
  const el = document.getElementById("targetPhrase");
  if (isBlind) el.classList.add("blurred");
  else el.classList.remove("blurred");
}

function speakTarget(rate) {
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(currentItem.text);
  utterance.lang = document.getElementById("langSelect").value;
  utterance.rate = rate;
  window.speechSynthesis.speak(utterance);
}

function cleanText(str) {
  return str.toLowerCase().replace(/[^\p{L}\s]/gu, "").trim();
}

function wordByWordCheck(target, spoken) {
  const targetWords = cleanText(target).split(/\s+/);
  const spokenWords = cleanText(spoken).split(/\s+/);
  let matched = 0;

  const highlighted = targetWords.map((word) => {
    if (spokenWords.includes(word)) {
      matched++;
      return `<span style="color:#4ade80">${word}</span>`;
    }
    return `<span style="color:#f87171; text-decoration:underline">${word}</span>`;
  }).join(" ");

  const accuracy = Math.round((matched / targetWords.length) * 100);
  return { accuracy, highlighted };
}

async function startListening() {
  const ui = getUI();
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert(ui.browserAlert);
    return;
  }

  document.getElementById("targetPhrase").classList.remove("blurred");

  let mediaRecorder;
  let audioChunks = [];
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  if (!isIOS) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = e => audioChunks.push(e.data);
      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunks, { type: "audio/webm" });
        lastAudioURL = URL.createObjectURL(blob);
        stream.getTracks().forEach(t => t.stop());
      };
      mediaRecorder.start();
    } catch (err) {}
  }

  const recognition = new SpeechRecognition();
  recognition.lang = document.getElementById("langSelect").value;

  const micBtn = document.getElementById("micBtn");
  const feedback = document.getElementById("feedback");
  micBtn.classList.add("recording");
  micBtn.textContent = ui.micRecording;

  recognition.onresult = (event) => {
    const result = event.results[0][0];
    const spoken = result.transcript;
    const confidence = result.confidence > 0 ? result.confidence : 0.95;

    const check = wordByWordCheck(currentItem.text, spoken);
    const finalScore = Math.round(check.accuracy * confidence);
    const playbackBtn = !isIOS ? `<br><button style="margin-top:8px" onclick="playMyVoice()">${ui.listenVoice}</button>` : "";

    const threshold = currentItem.hard ? 85 : 70;

    if (finalScore >= threshold) {
      let earnedCoins = currentItem.hard ? 25 : 10;
      let rawXP = currentItem.hard ? 50 : 20;

      if (state.hasShades) {
        rawXP = Math.round(rawXP * 1.15);
      }

      if (finalScore >= 92) {
        rawXP = Math.round(rawXP * 1.4);
        earnedCoins += 5;
      }

      state.coins += earnedCoins;
      state.happiness = Math.min(100, state.happiness + 10);
      state.hunger = Math.min(100, state.hunger + 5);
      
      if (!state.completed.includes(currentItem.text)) {
        state.completed.push(currentItem.text);
      }

      if (!state.hatchedPet) {
        state.xp += rawXP;
        if (state.xp >= 100) {
          hatchEgg();
          state.xp = state.xp - 100;
        }
      } else {
        state.xp += rawXP;
        const reqXP = getRequiredXP(state.level);
        if (state.xp >= reqXP) {
          state.xp -= reqXP;
          state.level++;
          feedback.innerHTML = ui.levelUp(state.petName, state.level);
        }
      }

      feedback.innerHTML = `${ui.scorePass(finalScore, earnedCoins, rawXP, state.hasShades)}<br>${check.highlighted}${playbackBtn}`;
      document.getElementById("petMood").textContent = ui.greatPronun(state.petName);
      bouncePet();
      setTimeout(loadNextPhrase, 2600);
    } else {
      state.health = Math.max(0, state.health - 5);
      feedback.innerHTML = `${ui.scoreFail(finalScore, threshold)}<br>${check.highlighted}<br>${ui.heardLabel}"<em>${spoken}</em>"${playbackBtn}`;
      document.getElementById("petMood").textContent = ui.sadPronun(state.petName);
    }
    saveState();
  };

  recognition.onerror = (e) => {
    feedback.textContent = "Mic error: " + e.error;
  };

  recognition.onend = () => {
    if (mediaRecorder && mediaRecorder.state !== "inactive") mediaRecorder.stop();
    micBtn.classList.remove("recording");
    micBtn.textContent = ui.micIdle;
  };

  recognition.start();
}

function playMyVoice() {
  if (lastAudioURL) new Audio(lastAudioURL).play();
}

function feedPet() {
  const ui = getUI();
  if (state.coins < 10) { alert(ui.notEnoughCoins); return; }
  state.coins -= 10;
  state.hunger = Math.min(100, state.hunger + 30);
  document.getElementById("petMood").textContent = ui.fedMsg(state.petName);
  bouncePet();
  saveState();
}

function playWithPet() {
  const ui = getUI();
  if (state.coins < 10) { alert(ui.notEnoughCoins); return; }
  state.coins -= 10;
  state.happiness = Math.min(100, state.happiness + 30);
  document.getElementById("petMood").textContent = ui.playMsg(state.petName);
  bouncePet();
  saveState();
}

function buyAccessory() {
  const ui = getUI();
  if (state.coins < 200) { alert(ui.need200Coins); return; }
  state.coins -= 200;
  state.hasShades = !state.hasShades;
  document.getElementById("petMood").textContent = ui.accMsg(state.petName);
  bouncePet();
  saveState();
}

function giveMedicine() {
  const ui = getUI();
  if (state.coins < 15) { alert(ui.notEnoughCoins); return; }
  state.coins -= 15;
  state.health = 100;
  state.happiness = Math.min(100, state.happiness + 15);
  document.getElementById("petMood").textContent = ui.medMsg(state.petName);
  bouncePet();
  saveState();
}

function bouncePet() {
  const pet = document.getElementById("petAvatar");
  pet.classList.add("bounce");
  setTimeout(() => pet.classList.remove("bounce"), 300);
}
