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
    transFallback: "Dynamic conversation practice.",
    dynamicCtx: "Dynamic Chat",
    dynamicHint: "Speak smoothly and naturally",
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
    transFallback: "Treino de conversação dinâmica.",
    dynamicCtx: "Conversa Dinâmica",
    dynamicHint: "Fale de forma natural e contínua",
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
    transFallback: "Práctica de conversación dinámica.",
    dynamicCtx: "Charla Dinámica",
    dynamicHint: "Habla de forma natural y fluida",
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
    transFallback: "Entraînement de conversation dynamique.",
    dynamicCtx: "Discussion Dynamique",
    dynamicHint: "Parlez naturellement et sans hésiter",
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
    exportPrompt: "Copiez ce code pour restaurer votre progression ailleurs :",
    importPrompt: "Collez votre code de sauvegarde ici :",
    importSuccess: "Progression restaurée ! Rechargement...",
    importError: "Code invalide !",
    browserAlert: "Veuillez utiliser Google Chrome ou Microsoft Edge."
  }
};

const LEVELS = [
  {
    "pt-BR": {
      curated: [
        { ctx: "Saudação", text: "Tudo bem?", hint: "Pergunta rápida e comum", hard: false },
        { ctx: "Agradecimento", text: "Muito obrigado!", hint: "Sorria ao falar", hard: false },
        { ctx: "Cafeteria", text: "Um café, por favor", hint: "Simples e direto", hard: false },
        { ctx: "🔥 BOSS", text: "Com licença, você sabe onde fica a estação mais próxima?", hint: "Frase mais longa para iniciantes", hard: true }
      ],
      starters: ["Oi,", "Tudo", "Fala"],
      middles: ["bom dia", "beleza", "tudo bem"],
      endings: ["aí?", "amigo?", "por aqui?"]
    },
    "pt-PT": {
      curated: [
        { ctx: "Saudação", text: "Está tudo bem?", hint: "Pergunta comum em Portugal", hard: false },
        { ctx: "Agradecimento", text: "Muito obrigado!", hint: "Agradecimento formal", hard: false },
        { ctx: "Café", text: "Um café, por favor", hint: "Pedido simples", hard: false },
        { ctx: "🔥 BOSS", text: "Desculpe, sabe dizer-me onde fica a estação mais próxima?", hint: "Frase típica europeia", hard: true }
      ],
      starters: ["Olá,", "Tudo", "Diga"],
      middles: ["bom dia", "tudo fixe", "então"],
      endings: ["tudo bem?", "amigo?", "por aqui?"]
    },
    "en-US": {
      curated: [
        { ctx: "Greeting", text: "How are you?", hint: "Friendly greeting", hard: false },
        { ctx: "Thanks", text: "Thank you so much!", hint: "Express gratitude", hard: false },
        { ctx: "Coffee", text: "One coffee, please", hint: "Simple order", hard: false },
        { ctx: "🔥 BOSS", text: "Excuse me, do you know where the nearest subway station is?", hint: "Clear articulation", hard: true }
      ],
      starters: ["Hey,", "Good", "What's"],
      middles: ["morning", "sup", "how's it"],
      endings: ["going?", "today?", "there?"]
    },
    "en-GB": {
      curated: [
        { ctx: "Greeting", text: "You alright?", hint: "British casual greeting", hard: false },
        { ctx: "Thanks", text: "Cheers, mate!", hint: "UK friendly thanks", hard: false },
        { ctx: "Coffee", text: "Could I have a cuppa, please?", hint: "British tea/coffee slang", hard: false },
        { ctx: "🔥 BOSS", text: "Excuse me, could you tell me where the nearest underground station is?", hint: "British vocabulary (underground)", hard: true }
      ],
      starters: ["Right then,", "Morning,", "Alright"],
      middles: ["mate", "chap", "lovely"],
      endings: ["then?", "today?", "innit?"]
    },
    "es-ES": {
      curated: [
        { ctx: "Saludo", text: "¿Qué tal?", hint: "Saludo informal", hard: false },
        { ctx: "Agradecimiento", text: "¡Muchas gracias!", hint: "Agradece con energía", hard: false },
        { ctx: "Café", text: "Un café, por favor", hint: "Pedido básico", hard: false },
        { ctx: "🔥 BOSS", text: "Perdona, ¿sabes dónde está la estación de metro más cercana?", hint: "Ritmo natural", hard: true }
      ],
      starters: ["Hola,", "Buenos", "Qué"],
      middles: ["días", "tal", "pasa"],
      endings: ["amigo", "por aquí", "hoy"]
    },
    "fr-FR": {
      curated: [
        { ctx: "Salutation", text: "Salut, ça va?", hint: "Salutation courante", hard: false },
        { ctx: "Remerciement", text: "Merci beaucoup !", hint: "Souriant", hard: false },
        { ctx: "Café", text: "Un café, s'il vous plaît", hint: "Poli et clair", hard: false },
        { ctx: "🔥 BOSS", text: "Excusez-moi, savez-vous où se trouve la station de métro la plus proche ?", hint: "Liaisons fluides", hard: true }
      ],
      starters: ["Bonjour", "Salut", "Coucou"],
      middles: ["mon ami", "ça va", "tu vas"],
      endings: ["bien ?", "ce matin ?", "ici ?"]
    }
  }
];

const TRANSLATIONS = {
  "pt-BR": {
    "Tudo bem?": "Como estás?",
    "Muito obrigado!": "Muito obrigado!",
    "Um café, por favor": "Um café, por favor.",
    "Com licença, você sabe onde fica a estação mais próxima?": "Com licença, sabes onde fica a estação mais próxima?",
    "Está tudo bem?": "Está tudo bem?",
    "Desculpe, sabe dizer-me onde fica a estação mais próxima?": "Desculpe, sabe dizer-me onde fica a estação mais próxima?",
    "How are you?": "Como você está?",
    "Thank you so much!": "Muito obrigado mesmo!",
    "One coffee, please": "Um café, por favor.",
    "Excuse me, do you know where the nearest subway station is?": "Com licença, você sabe onde fica a estação de metrô mais próxima?",
    "You alright?": "Tudo bem / Tudo certo?",
    "Cheers, mate!": "Valeu, meu velho!",
    "Could I have a cuppa, please?": "Poderia me dar uma xícara (de café/chá), por favor?",
    "Excuse me, could you tell me where the nearest underground station is?": "Com licença, você poderia me dizer onde fica a estação de metrô mais próxima?",
    "¿Qué tal?": "Tudo bem?",
    "¡Muchas gracias!": "Muito obrigado!",
    "Perdona, ¿sabes dónde está la estación de metro más cercana?": "Desculpa, você sabe onde fica a estação de metrô mais próxima?",
    "Salut, ça va?": "Olá, tudo bem?",
    "Merci beaucoup !": "Muito obrigado!",
    "Un café, s'il vous plaît": "Um café, por favor.",
    "Excusez-moi, savez-vous où se trouve la station de métro la plus proche ?": "Com licença, o senhor sabe onde fica a estação de metrô mais próxima?"
  },
  "en-US": {
    "Tudo bem?": "How are you?",
    "Muito obrigado!": "Thank you so much!",
    "Um café, por favor": "One coffee, please",
    "Com licença, você sabe onde fica a estação mais próxima?": "Excuse me, do you know where the nearest station is?",
    "Está tudo bem?": "Is everything alright?",
    "Desculpe, sabe dizer-me onde fica a estação mais próxima?": "Excuse me, do you know where the nearest station is?",
    "How are you?": "How are you?",
    "Thank you so much!": "Thank you so much!",
    "One coffee, please": "One coffee, please",
    "Excuse me, do you know where the nearest subway station is?": "Excuse me, do you know where the nearest subway station is?",
    "You alright?": "Are you alright?",
    "Cheers, mate!": "Thanks, buddy!",
    "Could I have a cuppa, please?": "Could I have a cup of coffee, please?",
    "Excuse me, could you tell me where the nearest underground station is?": "Excuse me, could you tell me where the nearest subway station is?",
    "¿Qué tal?": "How's it going?",
    "¡Muchas gracias!": "Thank you very much!",
    "Perdona, ¿sabes dónde está la estación de metro más cercana?": "Excuse me, do you know where the nearest subway station is?",
    "Salut, ça va?": "Hi, how's it going?",
    "Merci beaucoup !": "Thank you very much!",
    "Un café, s'il vous plaît": "A coffee, please",
    "Excusez-moi, savez-vous où se trouve la station de métro la plus proche ?": "Excuse me, do you know where the closest subway station is?"
  },
  "es-ES": {
    "Tudo bem?": "¿Cómo estás?",
    "Muito obrigado!": "¡Muchísimas gracias!",
    "Um café, por favor": "Un café, por favor.",
    "Com licença, você sabe onde fica a estação mais próxima?": "Disculpa, ¿sabes dónde está la estación más cercana?",
    "Está tudo bem?": "¿Todo bien?",
    "Desculpe, sabe dizer-me onde fica a estação mais próxima?": "Perdona, ¿sabes dónde está la estación más cercana?",
    "How are you?": "¿Cómo estás?",
    "Thank you so much!": "¡Muchas gracias!",
    "One coffee, please": "Un café, por favor",
    "Excuse me, do you know where the nearest subway station is?": "Disculpa, ¿sabes dónde está la estación de metro más cercana?",
    "You alright?": "¿Todo bien?",
    "Cheers, mate!": "¡Gracias, amigo!",
    "Could I have a cuppa, please?": "¿Me pones un café, por favor?",
    "Excuse me, could you tell me where the nearest underground station is?": "Disculpa, ¿sabes dónde está la estación de metro?",
    "¿Qué tal?": "¿Qué tal?",
    "¡Muchas gracias!": "¡Muchas gracias!",
    "Perdona, ¿sabes dónde está la estación de metro más cercana?": "Perdona, ¿sabes dónde está la estación de metro más cercana?",
    "Salut, ça va?": "Hola, ¿qué tal?",
    "Merci beaucoup !": "¡Muchas gracias!",
    "Un café, s'il vous plaît": "Un café, por favor",
    "Excusez-moi, savez-vous où se trouve la station de métro la plus proche ?": "Disculpe, ¿sabe dónde está la estación de metro más cercana?"
  },
  "fr-FR": {
    "Tudo bem?": "Comment ça va ?",
    "Muito obrigado!": "Merci beaucoup !",
    "Um café, por favor": "Un café, s'il vous plaît.",
    "Com licença, você sabe onde fica a estação mais próxima?": "Excusez-moi, savez-vous où se trouve la station la plus proche ?",
    "Está tudo bem?": "Tout va bien ?",
    "Desculpe, sabe dizer-me onde fica a estação mais próxima?": "Pardon, savez-vous où est la station la plus proche ?",
    "How are you?": "Comment vas-tu ?",
    "Thank you so much!": "Merci infiniment !",
    "One coffee, please": "Un café, s'il vous plaît",
    "Excuse me, do you know where the nearest subway station is?": "Excusez-moi, savez-vous où se trouve la station de métro la plus proche ?",
    "You alright?": "Ça va ?",
    "Cheers, mate!": "Merci l'ami !",
    "Could I have a cuppa, please?": "Un café, s'il vous plaît ?",
    "Excuse me, could you tell me where the nearest underground station is?": "Excusez-moi, où est la station de métro ?",
    "¿Qué tal?": "Comment ça va ?",
    "¡Muchas gracias!": "Merci beaucoup !",
    "Perdona, ¿sabes dónde está la estación de metro más cercana?": "Sais-tu où est la station de métro la plus proche ?",
    "Salut, ça va?": "Salut, ça va ?",
    "Merci beaucoup !": "Merci beaucoup !",
    "Un café, s'il vous plaît": "Un café, s'il vous plaît",
    "Excusez-moi, savez-vous où se trouve la station de métro la plus proche ?": "Excusez-moi, savez-vous où est la station de métro la plus proche ?"
  }
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

let state = JSON.parse(localStorage.getItem("pronunciagotchi_i18n_v1")) || {
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
  localStorage.setItem("pronunciagotchi_i18n_v1", JSON.stringify(state));
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

function exportSave() {
  const ui = getUI();
  const saveString = btoa(JSON.stringify(state));
  prompt(ui.exportPrompt, saveString);
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
  const ui = getUI();
  const lang = document.getElementById("langSelect").value;
  const lvlObj = LEVELS[(state.level - 1) % LEVELS.length];
  const topicData = lvlObj[lang] || lvlObj["en-US"];

  if (topicData.curated && topicData.curated.length > 0) {
    const unseenCurated = topicData.curated.filter(p => !state.completed.includes(p.text));
    if (unseenCurated.length > 0 && Math.random() < 0.6) {
      return unseenCurated[Math.floor(Math.random() * unseenCurated.length)];
    }
  }

  if (topicData.starters && topicData.middles && topicData.endings) {
    for (let i = 0; i < 50; i++) {
      const s = topicData.starters[Math.floor(Math.random() * topicData.starters.length)];
      const m = topicData.middles[Math.floor(Math.random() * topicData.middles.length)];
      const e = topicData.endings[Math.floor(Math.random() * topicData.endings.length)];
      const text = `${s} ${m} ${e}`;

      if (!state.completed.includes(text)) {
        return {
          ctx: ui.dynamicCtx,
          text: text,
          hint: ui.dynamicHint,
          hard: false
        };
      }
    }
  }

  return topicData.curated[0];
}

function loadNextPhrase() {
  const ui = getUI();
  currentItem = generateFreshPhrase();
  document.getElementById("contextTag").textContent = currentItem.ctx;
  document.getElementById("targetPhrase").textContent = currentItem.text;
  document.getElementById("phraseHint").textContent = "💡 " + currentItem.hint;
  
  const dict = TRANSLATIONS[state.nativeLang] || TRANSLATIONS["en-US"];
  const translatedText = dict[currentItem.text] || ui.transFallback;
  document.getElementById("translationBox").textContent = ui.transPrefix + translatedText;
  document.getElementById("translationBox").style.display = "none";
  
  document.getElementById("feedback").textContent = currentItem.hard ? ui.bossFeedback : ui.defaultFeedback;
  
  if (currentItem.hard) {
    document.getElementById("targetPhrase").style.color = "#f43f5e";
  } else {
    document.getElementById("targetPhrase").style.color = "#f8fafc";
  }

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
    const playbackBtn = `<br><button style="margin-top:8px" onclick="playMyVoice()">${ui.listenVoice}</button>`;

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
