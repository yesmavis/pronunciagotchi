const LEVELS = [
  {
    name: "Iniciante: Primeiras Palavras",
    "pt-BR": {
      curated: [
        { ctx: "Saudação", text: "Tudo bem?", trans: "Como estás?", hint: "Pergunta rápida e comum", hard: false },
        { ctx: "Agradecimento", text: "Muito obrigado!", trans: "Muito obrigado!", hint: "Sorria ao falar", hard: false },
        { ctx: "Cafeteria", text: "Um café, por favor", trans: "Um café, por favor.", hint: "Simples e direto", hard: false },
        { ctx: "🔥 DESAFIO BOSS", text: "Com licença, você sabe onde fica a estação mais próxima?", trans: "Com licença, sabes onde fica a estação mais próxima?", hint: "Frase mais longa para iniciantes", hard: true }
      ],
      starters: ["Oi,", "Tudo", "Fala"],
      middles: ["bom dia", "beleza", "tudo bem"],
      endings: ["aí?", "amigo?", "por aqui?"]
    },
    "en-US": {
      curated: [
        { ctx: "Greeting", text: "How are you?", trans: "Como estás?", hint: "Friendly greeting", hard: false },
        { ctx: "Thanks", text: "Thank you so much!", trans: "Muito obrigado!", hint: "Express gratitude", hard: false },
        { ctx: "Coffee", text: "One coffee, please", trans: "Um café, por favor.", hint: "Simple order", hard: false },
        { ctx: "🔥 BOSS CHALLENGE", text: "Excuse me, do you know where the nearest subway station is?", trans: "Com licença, sabes onde fica a estação de metro mais próxima?", hint: "Clear articulation", hard: true }
      ],
      starters: ["Hey,", "Good", "What's"],
      middles: ["morning", "sup", "how's it"],
      endings: ["going?", "today?", "there?"]
    },
    "es-ES": {
      curated: [
        { ctx: "Saludo", text: "¿Qué tal?", trans: "Tudo bem?", hint: "Saludo informal", hard: false },
        { ctx: "Agradecimiento", text: "¡Muchas gracias!", trans: "Muito obrigado!", hint: "Agradece con energía", hard: false },
        { ctx: "Café", text: "Un café, por favor", trans: "Um café, por favor.", hint: "Pedido básico", hard: false },
        { ctx: "🔥 BOSS CHALLENGE", text: "Perdona, ¿sabes dónde está la estación de metro más cercana?", trans: "Desculpa, sabes onde fica a estação de metro mais próxima?", hint: "Ritmo natural", hard: true }
      ],
      starters: ["Hola,", "Buenos", "Qué"],
      middles: ["días", "tal", "pasa"],
      endings: ["amigo", "por aquí", "hoy"]
    },
    "fr-FR": {
      curated: [
        { ctx: "Salutation", text: "Salut, ça va?", trans: "Olá, tudo bem?", hint: "Salutation courante", hard: false },
        { ctx: "Remerciement", text: "Merci beaucoup !", trans: "Muito obrigado!", hint: "Souriant", hard: false },
        { ctx: "Café", text: "Un café, s'il vous plaît", trans: "Um café, por favor.", hint: "Poli et clair", hard: false },
        { ctx: "🔥 BOSS CHALLENGE", text: "Excusez-moi, savez-vous où se trouve la station de métro la plus proche ?", trans: "Com licença, sabe onde fica a estação de metro mais próxima?", hint: "Liaisons fluides", hard: true }
      ],
      starters: ["Bonjour", "Salut", "Coucou"],
      middles: ["mon ami", "ça va", "tu vas"],
      endings: ["bien ?", "ce matin ?", "ici ?"]
    }
  },
  {
    name: "Trabalho & Rotina",
    "pt-BR": {
      curated: [
        { ctx: "Trabalho", text: "Até logo!", trans: "Até logo!", hint: "Despedida", hard: false },
        { ctx: "Ajuda", text: "Preciso de ajuda", trans: "Preciso de ajuda.", hint: "Útil no dia a dia", hard: false },
        { ctx: "🔥 DESAFIO BOSS", text: "Infelizmente o cronograma tá super apertado para esta semana", trans: "Infelizmente o cronograma está super apertado para esta semana.", hint: "Mantenha o ritmo", hard: true }
      ],
      starters: ["Meu chefe pediu", "A gente precisa enviar", "O prazo para entregar"],
      middles: ["esse relatório", "a planilha", "o projeto"],
      endings: ["hoje", "amanhã", "com urgência"]
    },
    "en-US": {
      curated: [
        { ctx: "Work", text: "See you later!", trans: "Até logo!", hint: "Goodbye", hard: false },
        { ctx: "Help", text: "I need some help", trans: "Preciso de ajuda.", hint: "Useful phrase", hard: false },
        { ctx: "🔥 BOSS CHALLENGE", text: "Unfortunately, the schedule is very tight for this week", trans: "Infelizmente, o horário está muito apertado para esta semana.", hint: "Steady rhythm", hard: true }
      ],
      starters: ["We need to finish", "Can you send", "My manager asked for"],
      middles: ["the report", "the spreadsheet", "the project"],
      endings: ["tomorrow", "soon", "today"]
    },
    "es-ES": {
      curated: [
        { ctx: "Trabajo", text: "¡Hasta luego!", trans: "Até logo!", hint: "Despedida", hard: false },
        { ctx: "Ayuda", text: "Necesito ayuda", trans: "Preciso de ajuda.", hint: "Básico", hard: false },
        { ctx: "🔥 BOSS CHALLENGE", text: "Desafortunadamente, el horario está muy apretado esta semana", trans: "Infelizmente, o horário está muito apertado esta semana.", hint: "Fluidez", hard: true }
      ],
      starters: ["Tengo que terminar", "El jefe quiere", "Necesitamos enviar"],
      middles: ["el informe", "los datos", "la presentación"],
      endings: ["hoy", "pronto", "mañana"]
    },
    "fr-FR": {
      curated: [
        { ctx: "Travail", text: "À plus tard !", trans: "Até mais tarde!", hint: "Adieu", hard: false },
        { ctx: "Aide", text: "J'ai besoin d'aide", trans: "Preciso de ajuda.", hint: "Essentiel", hard: false },
        { ctx: "🔥 BOSS CHALLENGE", text: "Malheureusement, le planning est très serré pour cette semaine", trans: "Infelizmente, o planeamento está muito apertado para esta semana.", hint: "Liaison", hard: true }
      ],
      starters: ["Il faut finir", "Le patron attend", "On doit envoyer"],
      middles: ["le dossier", "les chiffres", "le rapport"],
      endings: ["ce soir", "vite", "demain"]
    }
  }
];

const PET_DATABASE = {
  legendary: [
    { name: "Dragão Estelar Crômico 🐉", rarity: "🌟 LENDÁRIO" },
    { name: "Fênix de Cristal 🐦‍🔥", rarity: "🌟 LENDÁRIO" }
  ],
  epic: [
    { name: "Lobo Cibernético 🐺", rarity: "🟣 ÉPICO" },
    { name: "Gryphon Místico 🦅", rarity: "🟣 ÉPICO" }
  ],
  rare: [
    { name: "Panda Vermelho Gamer 🐼", rarity: "🔵 RARO" },
    { name: "Raposa das Neves 🦊", rarity: "🔵 RARO" }
  ],
  common: [
    { name: "Pintinho Fofinho 🐣", rarity: "⚪ COMUM" },
    { name: "Coelhinho Saltitante 🐰", rarity: "⚪ COMUM" },
    { name: "Preguiça Zen 🦥", rarity: "⚪ COMUM" }
  ]
};

let state = JSON.parse(localStorage.getItem("pronunciagotchi_v3")) || {
  petName: null,
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

if (!state.petName) {
  let namePrompt = prompt("Escolha o nome do seu pet:", "Pipoca");
  state.petName = namePrompt ? namePrompt : "Tamagotchi";
  saveState();
}

let currentItem = null;
let lastAudioURL = null;

function getRequiredXP(lvl) {
  return Math.floor(100 * Math.pow(lvl, 1.3));
}

function saveState() {
  localStorage.setItem("pronunciagotchi_v3", JSON.stringify(state));
  const lvlObj = LEVELS[(state.level - 1) % LEVELS.length];
  
  document.getElementById("levelBadge").textContent = `Nível ${state.level}: ${lvlObj.name}`;
  document.getElementById("coinCount").textContent = state.coins;

  if (!state.hatchedPet) {
    document.getElementById("headerPetInfo").textContent = `${state.petName} - 🥚 Ovo`;
  } else {
    document.getElementById("headerPetInfo").textContent = `${state.petName} - ${state.hatchedPet.rarity}`;
  }

  const reqXP = getRequiredXP(state.level);

  if (!state.hatchedPet) {
    document.getElementById("xpBar").max = 100;
    document.getElementById("xpBar").value = state.xp;
    document.getElementById("xpText").textContent = `${state.xp} / 100 XP (Ovo)`;
    document.getElementById("xpTitle").textContent = "Progresso do Ovo 🥚";
    document.getElementById("petAvatar").textContent = "🥚";
    document.getElementById("petMood").textContent = `O ovo choca em 100 XP! Faltam ${Math.max(0, 100 - state.xp)} XP.`;
  } else {
    document.getElementById("xpBar").max = reqXP;
    document.getElementById("xpBar").value = state.xp;
    document.getElementById("xpText").textContent = `${state.xp} / ${reqXP} XP`;
    document.getElementById("xpTitle").textContent = `Progresso do Nível ${state.level}`;
    document.getElementById("petAvatar").textContent = state.hasShades ? "😎 " + state.hatchedPet.emoji : state.hatchedPet.emoji;
    document.getElementById("petMood").textContent = `${state.petName} (${state.hatchedPet.rarity}) ${state.hasShades ? '✨ [Bônus XP Ativo]' : ''}`;
  }

  document.getElementById("happyBar").value = state.happiness;
  document.getElementById("hungerBar").value = state.hunger;
  document.getElementById("healthBar").value = state.health;
}

function exportSave() {
  const saveString = btoa(JSON.stringify(state));
  prompt("Copie este código para restaurar seu progresso em outro aparelho:", saveString);
}

function importSave() {
  const saveString = prompt("Cole seu código de salvamento aqui:");
  if (saveString) {
    try {
      state = JSON.parse(atob(saveString));
      saveState();
      alert("Progresso restaurado! Recarregando...");
      location.reload();
    } catch (e) {
      alert("Código inválido!");
    }
  }
}

function hatchEgg(avgAccuracy) {
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
  alert(`🎉 O OVO RACHOU!\n\nVocê chocou um pet ${chosen.rarity}:\n${chosen.name}!\n\nAgora ${state.petName} vai te acompanhar nos estudos!`);
}

function generateFreshPhrase() {
  const lang = document.getElementById("langSelect").value;
  const lvlObj = LEVELS[(state.level - 1) % LEVELS.length];
  const topicData = lvlObj[lang] || lvlObj["pt-BR"];

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
          ctx: "Conversa Dinâmica",
          text: text,
          trans: "Treino de conversação fluida para iniciantes.",
          hint: "Fale de forma natural e contínua",
          hard: false
        };
      }
    }
  }

  return topicData.curated[0];
}

function loadNextPhrase() {
  currentItem = generateFreshPhrase();
  document.getElementById("contextTag").textContent = currentItem.ctx;
  document.getElementById("targetPhrase").textContent = currentItem.text;
  document.getElementById("phraseHint").textContent = "💡 " + currentItem.hint;
  document.getElementById("translationBox").textContent = currentItem.trans;
  document.getElementById("translationBox").style.display = "none";
  
  document.getElementById("feedback").textContent = currentItem.hard ? "⚠️ FRASE BOSS: Vale mais XP! Fale com precisão." : "Toque em 🔊 para ouvir e depois 🎤 para falar!";
  
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
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("Use o Google Chrome ou Microsoft Edge.");
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
  micBtn.textContent = "🎙️ Ouvindo...";

  recognition.onresult = (event) => {
    const result = event.results[0][0];
    const spoken = result.transcript;
    const confidence = result.confidence > 0 ? result.confidence : 0.95;

    const check = wordByWordCheck(currentItem.text, spoken);
    const finalScore = Math.round(check.accuracy * confidence);
    const playbackBtn = `<br><button style="margin-top:8px" onclick="playMyVoice()">🎧 Ouvir Minha Voz</button>`;

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
          hatchEgg(finalScore);
          state.xp = state.xp - 100;
        }
      } else {
        state.xp += rawXP;
        const reqXP = getRequiredXP(state.level);
        if (state.xp >= reqXP) {
          state.xp -= reqXP;
          state.level++;
          feedback.innerHTML = `🎊 <strong>LEVEL UP! ${state.petName} subiu para o Nível ${state.level}!</strong>`;
        }
      }

      feedback.innerHTML = `✅ <strong>Nota ${finalScore}%!</strong> +${earnedCoins} Moedas | +${rawXP} XP ${state.hasShades ? '(✨ Bônus)' : ''}<br>${check.highlighted}${playbackBtn}`;
      document.getElementById("petMood").textContent = `${state.petName} adorou sua pronúncia! 🔥`;
      bouncePet();
      setTimeout(loadNextPhrase, 2600);
    } else {
      state.health = Math.max(0, state.health - 5);
      feedback.innerHTML = `❌ <strong>Nota ${finalScore}%</strong> (Mínimo ${threshold}%)<br>${check.highlighted}<br>Entendido: "<em>${spoken}</em>"${playbackBtn}`;
      document.getElementById("petMood").textContent = `${state.petName} ficou triste... Ouça o áudio! 👂`;
    }
    saveState();
  };

  recognition.onerror = (e) => {
    feedback.textContent = "Erro no microfone: " + e.error;
  };

  recognition.onend = () => {
    if (mediaRecorder && mediaRecorder.state !== "inactive") mediaRecorder.stop();
    micBtn.classList.remove("recording");
    micBtn.textContent = "🎤 Toque e Fale";
  };

  recognition.start();
}

function playMyVoice() {
  if (lastAudioURL) new Audio(lastAudioURL).play();
}

function feedPet() {
  if (state.coins < 10) { alert("Moedas insuficientes!"); return; }
  state.coins -= 10;
  state.hunger = Math.min(100, state.hunger + 30);
  document.getElementById("petMood").textContent = `${state.petName} comeu e está satisfeito! 🍗`;
  bouncePet();
  saveState();
}

function playWithPet() {
  if (state.coins < 10) { alert("Moedas insuficientes!"); return; }
  state.coins -= 10;
  state.happiness = Math.min(100, state.happiness + 30);
  document.getElementById("petMood").textContent = `${state.petName} adorou brincar! 🎾`;
  bouncePet();
  saveState();
}

function buyAccessory() {
  if (state.coins < 200) { alert("Moedas insuficientes! Você precisa de 200 🪙 para comprar os óculos."); return; }
  state.coins -= 200;
  state.hasShades = !state.hasShades;
  document.getElementById("petMood").textContent = `${state.petName} comprou óculos estilosos! ✨ (Bônus de XP Ativo)`;
  bouncePet();
  saveState();
}

function giveMedicine() {
  if (state.coins < 15) { alert("Moedas insuficientes!"); return; }
  state.coins -= 15;
  state.health = 100;
  state.happiness = Math.min(100, state.happiness + 15);
  document.getElementById("petMood").textContent = `${state.petName} tomou o remédio e está curado! 💊`;
  bouncePet();
  saveState();
}

function bouncePet() {
  const pet = document.getElementById("petAvatar");
  pet.classList.add("bounce");
  setTimeout(() => pet.classList.remove("bounce"), 300);
}

loadNextPhrase();
