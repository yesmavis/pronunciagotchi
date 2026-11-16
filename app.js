// TOPIC DATABASE WITH DYNAMIC GENERATOR MATRICES
const LEVELS = [
  {
    name: "Rolê, Café & Gírias",
    "pt-BR": {
      curated: [
        { ctx: "Pedindo um café", text: "Me vê um pingado e um pão na chapa com capricho", trans: "Give me a coffee with milk and toasted bread.", hint: "Junte 'me vê um' naturalmente", hard: false },
        { ctx: "Na correria", text: "Caraca, tô super atrasado pro trampo", trans: "Damn, I'm super late for work.", hint: "'trampo' = trabalho", hard: false },
        { ctx: "🔥 DESAFIO BOSS", text: "Mano, o trânsito tá tão emperrado que eu prefiro ir correndo do que pegar o busão lotado na hora do rush", trans: "Bro, traffic is so stuck I'd rather run than take the crowded bus at rush hour.", hint: "Frase longa e natural!", hard: true }
      ],
      starters: ["Mano, cê viu", "Pô, eu queria muito pedir", "Nossa, tô com mó vontade de tomar", "Aandou rolando maior papo sobre"],
      middles: ["um café bem forte", "um pão na chapa com queijo", "um suco gelado", "um salgado caprichado"],
      endings: ["aqui na padoca", "antes de ir pro trampo", "para aguentar o turno", "nesta manhã fria"]
    },
    "en-US": {
      curated: [
        { ctx: "Ordering coffee", text: "Can I grab an iced coffee to go?", trans: "Posso pegar um café gelado para viagem?", hint: "Connect 'Can I'", hard: false },
        { ctx: "🔥 BOSS CHALLENGE", text: "I honestly couldn't care less about what they think of my outfit", trans: "Sinceramente, eu não poderia estar menos preocupado com o que acham da minha roupa.", hint: "Fast natural linkage", hard: true }
      ],
      starters: ["Hey, can we grab", "I'm really craving", "Do you want", "Let's order"],
      middles: ["some fresh donuts", "an iced macchiato", "a double espresso", "some sweet pastries"],
      endings: ["before class starts", "down the street", "on our way back", "right now"]
    },
    "es-ES": {
      curated: [
        { ctx: "En la cafetería", text: "¿Me pones un café con leche para llevar?", trans: "Me dá um café com leite para levar?", hint: "Enlaza palabras", hard: false },
        { ctx: "🔥 BOSS CHALLENGE", text: "Tío, no me digas que has perdido el autobús otra vez esta mañana", trans: "Cara, não me diga que você perdeu o ônibus de novo hoje de manhã.", hint: "Ritmo rápido", hard: true }
      ],
      starters: ["Oye, ¿vamos a por", "Tengo ganas de pedir", "Me apetece mucho", "Vamos a buscar"],
      middles: ["un café con leche", "un cruasán caliente", "un zumo natural", "algo de comer"],
      endings: ["por aquí cerca", "antes de entrar", "para desayunar", "con prisa"]
    },
    "fr-FR": {
      curated: [
        { ctx: "Au café", text: "Je voudrais un café à emporter s'il vous plaît", trans: "Eu gostaria de um café para viagem, por favor.", hint: "Liaison", hard: false },
        { ctx: "🔥 BOSS CHALLENGE", text: "J'ai trop la dalle, on se fait un petit resto rapide ce soir ?", trans: "Estou morrendo de fome, vamos a um restaurante rápido hoje à noite?", hint: "Argot français", hard: true }
      ],
      starters: ["Dis, tu veux qu'on prenne", "J'ai trop envie de commander", "On peut s'acheter", "Viens, on prend"],
      middles: ["un grand café", "une viennoiserie", "un jus d'orange", "un sandwich frais"],
      endings: ["tout de suite", "pour la route", "en vitesse", "cette aprem"]
    }
  },
  {
    name: "Trabalho & Correria",
    "pt-BR": {
      curated: [
        { ctx: "Reunião", text: "O chefe marcou call em cima da hora", trans: "The boss scheduled a last-minute call.", hint: "'Call' = reunião online", hard: false },
        { ctx: "🔥 DESAFIO BOSS", text: "Infelizmente o cronograma tá super apertado e a gente vai ter que virar a noite", trans: "Unfortunately the schedule is super tight and we'll have to pull an all-nighter.", hint: "Mantenha o ritmo", hard: true }
      ],
      starters: ["Meu chefe pediu", "A gente precisa enviar", "O prazo para entregar"],
      middles: ["esse relatório de vendas", "a planilha atualizada", "o projeto final", "as notas da reunião"],
      endings: ["até o fim do dia", "antes de fechar o escritório", "com urgência máxima", "para o cliente ver"]
    },
    "en-US": {
      curated: [
        { ctx: "At work", text: "I've been swamped with shifts all week", trans: "Estive lotado de turnos a semana toda.", hint: "Swamped = super ocupado", hard: false }
      ],
      starters: ["We need to finish", "Can you send over", "My manager asked for"],
      middles: ["the client feedback", "the budget spreadsheet", "the weekly schedule"],
      endings: ["by tomorrow morning", "as soon as possible", "before the team call"]
    },
    "es-ES": {
      curated: [
        { ctx: "Trabajo", text: "Tengo una reunión urgente con el jefe", trans: "Tenho uma reunião urgente com o chefe.", hint: "Fluidez", hard: false }
      ],
      starters: ["Tengo que terminar", "El jefe quiere revisar", "Necesitamos enviar"],
      middles: ["el informe mensual", "los datos del cliente", "la presentación"],
      endings: ["antes del mediodía", "para hoy mismo", "sin falta"]
    },
    "fr-FR": {
      curated: [
        { ctx: "Au bureau", text: "Je suis débordé par le boulot aujourd'hui", trans: "Estou sobrecarregado de trabalho hoje.", hint: "Liaison", hard: false }
      ],
      starters: ["Il faut absolument finir", "Le patron attend", "On doit envoyer"],
      middles: ["le dossier client", "les chiffres de vente", "le compte-rendu"],
      endings: ["avant ce soir", "pour la réunion", "rapidement"]
    }
  },
  {
    name: "Esporte & Curtilação",
    "pt-BR": {
      curated: [
        { ctx: "Futebol", text: "E aí, vai colar no futiba mais tarde?", trans: "Hey, are you gonna show up to soccer later?", hint: "'Futiba' = futebol", hard: false },
        { ctx: "🔥 DESAFIO BOSS", text: "O maluco meteu um golaço de calcanhar que deixou todo mundo estático", trans: "The guy scored an amazing backheel goal that left everyone stunned.", hint: "Consoantes rápidas", hard: true }
      ],
      starters: ["Bora treinar", "Hoje tem partida de", "Consegui vaga pra jogar"],
      middles: ["futebol na quadra", "basquete no clube", "vôlei de praia"],
      endings: ["logo mais à noite", "neste final de semana", "depois do expediente"]
    },
    "en-US": {
      curated: [
        { ctx: "Gym", text: "I'm hitting the gym before work today", trans: "Vou para a academia antes do trabalho hoje.", hint: "Hit the gym", hard: false }
      ],
      starters: ["Are you going to", "Let's play some", "We should join"],
      middles: ["tennis on Saturday", "basketball at the park", "the local soccer match"],
      endings: ["this weekend", "later tonight", "tomorrow morning"]
    },
    "es-ES": {
      curated: [
        { ctx: "Deporte", text: "Voy a correr un rato al parque", trans: "Vou correr um pouco no parque.", hint: "Ritmo constante", hard: false }
      ],
      starters: ["¿Te apetece jugar a", "Vamos a correr", "Quedamos para hacer"],
      middles: ["fútbol en el campo", "un poco de ejercicio", "baloncesto"],
      endings: ["esta tarde", "mañana temprano", "el sábado"]
    },
    "fr-FR": {
      curated: [
        { ctx: "Sport", text: "Je vais à la salle de sport après les cours", trans: "Vou para a academia depois das aulas.", hint: "Enchainement", hard: false }
      ],
      starters: ["On va faire un peu de", "Tu es chaud pour un match de", "J'ai prévu d'aller faire"],
      middles: ["football", "basketball", "sport en salle"],
      endings: ["ce soir", "ce week-end", "demain"]
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

let state = JSON.parse(localStorage.getItem("pronunciagotchi_matrix_v1")) || {
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
  localStorage.setItem("pronunciagotchi_matrix_v1", JSON.stringify(state));
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
    document.getElementById("petMood").textContent = `${state.petName} (${state.hatchedPet.rarity})`;
  }

  document.getElementById("happyBar").value = state.happiness;
  document.getElementById("hungerBar").value = state.hunger;
  document.getElementById("healthBar").value = state.health;
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

  // 50% chance to pull a hand-crafted curated phrase/boss challenge, 50% to generate a dynamic combo
  if (Math.random() < 0.4 && topicData.curated && topicData.curated.length > 0) {
    const unseenCurated = topicData.curated.filter(p => !state.completed.includes(p.text));
    if (unseenCurated.length > 0) {
      return unseenCurated[Math.floor(Math.random() * unseenCurated.length)];
    }
  }

  // Generate dynamic unique combination from matrix
  if (topicData.starters && topicData.middles && topicData.endings) {
    for (let i = 0; i < 30; i++) {
      const s = topicData.starters[Math.floor(Math.random() * topicData.starters.length)];
      const m = topicData.middles[Math.floor(Math.random() * topicData.middles.length)];
      const e = topicData.endings[Math.floor(Math.random() * topicData.endings.length)];
      const text = `${s} ${m} ${e}`;

      if (!state.completed.includes(text)) {
        return {
          ctx: "Conversa Dinâmica",
          text: text,
          trans: "Tradução gerada contextualmente para treino fluído.",
          hint: "Fale direto, ligando as palavras de forma natural",
          hard: false
        };
      }
    }
  }

  // Fallback
  return topicData.curated[0];
}

function loadNextPhrase() {
  currentItem = generateFreshPhrase();
  document.getElementById("contextTag").textContent = currentItem.ctx;
  document.getElementById("targetPhrase").textContent = currentItem.text;
  document.getElementById("phraseHint").textContent = "💡 " + currentItem.hint;
  document.getElementById("translationBox").textContent = "Tradução: " + currentItem.trans;
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

    const threshold = currentItem.hard ? 90 : 80;

    if (finalScore >= threshold) {
      let earnedCoins = currentItem.hard ? 25 : 10;
      let earnedXP = currentItem.hard ? 50 : 20;

      if (finalScore >= 95) {
        earnedXP = Math.round(earnedXP * 1.5);
        earnedCoins += 5;
      }

      state.coins += earnedCoins;
      state.happiness = Math.min(100, state.happiness + 10);
      state.hunger = Math.min(100, state.hunger + 5);
      
      if (!state.completed.includes(currentItem.text)) {
        state.completed.push(currentItem.text);
      }

      if (!state.hatchedPet) {
        state.xp += earnedXP;
        if (state.xp >= 100) {
          hatchEgg(finalScore);
          state.xp = state.xp - 100;
        }
      } else {
        state.xp += earnedXP;
        const reqXP = getRequiredXP(state.level);
        if (state.xp >= reqXP) {
          state.xp -= reqXP;
          state.level++;
          feedback.innerHTML = `🎊 <strong>LEVEL UP! ${state.petName} subiu para o Nível ${state.level}!</strong>`;
        }
      }

      feedback.innerHTML = `✅ <strong>Nota ${finalScore}%!</strong> +${earnedCoins} Moedas | +${earnedXP} XP<br>${check.highlighted}${playbackBtn}`;
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
  if (state.coins < 30) { alert("Moedas insuficientes!"); return; }
  state.coins -= 30;
  state.hasShades = !state.hasShades;
  document.getElementById("petMood").textContent = `${state.petName} mudou o visual! 😎`;
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
