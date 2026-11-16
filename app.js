const LEVELS = [
  {
    name: "Nível 1: Rolê, Café & Gírias",
    "pt-BR": [
      { ctx: "Pedindo um café", text: "Me vê um pingado e um pão na chapa com capricho", hint: "Junte 'me vê um' naturalmente", hard: false },
      { ctx: "Na correria", text: "Caraca, tô super atrasado pro trampo", hint: "'trampo' = trabalho", hard: false },
      { ctx: "🔥 DESAFIO BOSS", text: "Mano, o trânsito tá tão emperrado que eu prefiro ir correndo do que pegar o busão lotado na hora do rush", hint: "Frase longa e natural: controle o fôlego!", hard: true }
    ],
    "en-US": [
      { ctx: "Ordering coffee", text: "Can I grab an iced coffee to go?", hint: "Connect 'Can I'", hard: false },
      { ctx: "🔥 BOSS CHALLENGE", text: "I honestly couldn't care less about what they think of my outfit", hint: "Fast natural linkage", hard: true }
    ]
  },
  {
    name: "Nível 2: Trabalho, Correria & Job",
    "pt-BR": [
      { ctx: "Reunião de última hora", text: "O chefe marcou call em cima da hora", hint: "'Call' = reunião online", hard: false },
      { ctx: "🔥 DESAFIO BOSS", text: "Infelizmente o cronograma tá super apertado e a gente vai ter que virar a noite entregando esse relatório", hint: "Muitas sílabas, mantenha o ritmo", hard: true }
    ]
  },
  {
    name: "Nível 3: Rolê, Esporte & Curtilação",
    "pt-BR": [
      { ctx: "Futebol com os amigos", text: "E aí, vai colar no futiba mais tarde?", hint: "'Futiba' = futebol", hard: false },
      { ctx: "🔥 DESAFIO BOSS", text: "O maluco meteu um golaço de calcanhar que deixou todo mundo estático no meio da quadra", hint: "Articulação rápida de consoantes", hard: true }
    ]
  }
];

// PET GACHA POOL
const PET_DATABASE = {
  legendary: [
    { name: "Dragão Estelar Crômico 🐉", rarity: "🌟 LENDÁRIO (1%)" },
    { name: "Fênix de Cristal 🐦‍🔥", rarity: "🌟 LENDÁRIO (1%)" }
  ],
  epic: [
    { name: "Lobo Cibernético 🐺", rarity: "🟣 ÉPICO (5%)" },
    { name: "Gryphon Místico 🦅", rarity: "🟣 ÉPICO (5%)" }
  ],
  rare: [
    { name: "Panda Vermelho Gamer 🐼", rarity: "🔵 RARO (10%)" },
    { name: "Raposa das Neves 🦊", rarity: "🔵 RARO (10%)" }
  ],
  common: [
    { name: "Pintinho Fofinho 🐣", rarity: "⚪ COMUM" },
    { name: "Coelhinho Saltitante 🐰", rarity: "⚪ COMUM" },
    { name: "Preguiça Zen 🦥", rarity: "⚪ COMUM" }
  ]
};

let state = JSON.parse(localStorage.getItem("pronunciagotchi_mmorpg_v1")) || {
  coins: 20,
  xp: 0,
  level: 1,
  happiness: 60,
  hunger: 50,
  hasShades: false,
  completed: [],
  hatchedPet: null
};

let currentItem = null;
let lastAudioURL = null;

function getRequiredXP(lvl) {
  return Math.floor(100 * Math.pow(lvl, 1.3));
}

function saveState() {
  localStorage.setItem("pronunciagotchi_mmorpg_v1", JSON.stringify(state));
  const lvlObj = LEVELS[(state.level - 1) % LEVELS.length];
  document.getElementById("levelBadge").textContent = `Nível ${state.level}: ${lvlObj.name}`;
  document.getElementById("coinCount").textContent = state.coins;

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
    document.getElementById("petMood").textContent = `${state.hatchedPet.name} (${state.hatchedPet.rarity})`;
  }

  document.getElementById("happyBar").value = state.happiness;
  document.getElementById("hungerBar").value = state.hunger;
}

function hatchEgg(avgAccuracy) {
  const roll = Math.random() * 100;
  let pool;

  if (roll < (1 + (avgAccuracy > 95 ? 3 : 0))) {
    pool = PET_DATABASE.legendary;
  } else if (roll < (6 + (avgAccuracy > 90 ? 4 : 0))) {
    pool = PET_DATABASE.epic;
  } else if (roll < (16 + (avgAccuracy > 85 ? 5 : 0))) {
    pool = PET_DATABASE.rare;
  } else {
    pool = PET_DATABASE.common;
  }

  const chosen = pool[Math.floor(Math.random() * pool.length)];
  const parts = chosen.name.split(" ");
  const emoji = parts.pop();
  const name = parts.join(" ");

  state.hatchedPet = { name, emoji, rarity: chosen.rarity };
  alert(`🎉 O OVO RACHOU!\n\nVocê chocou um pet ${chosen.rarity}:\n${chosen.name}!\n\nSua dedicação na pronúncia deu frutos!`);
}

function generateFreshPhrase() {
  const lang = document.getElementById("langSelect").value;
  const lvlObj = LEVELS[(state.level - 1) % LEVELS.length];
  const pool = lvlObj[lang] || lvlObj["pt-BR"];

  const unseen = pool.filter(p => !state.completed.includes(p.text));
  if (unseen.length > 0) {
    return unseen[Math.floor(Math.random() * unseen.length)];
  }

  return pool[Math.floor(Math.random() * pool.length)];
}

function loadNextPhrase() {
  currentItem = generateFreshPhrase();
  document.getElementById("contextTag").textContent = currentItem.ctx;
  document.getElementById("targetPhrase").textContent = currentItem.text;
  document.getElementById("phraseHint").textContent = "💡 " + currentItem.hint;
  document.getElementById("feedback").textContent = currentItem.hard ? "⚠️ FRASE BOSS: Vale o dobro de XP! Fale com precisão." : "Toque em 🔊 para ouvir o nativo e depois 🎤 para falar!";
  
  if (currentItem.hard) {
    document.getElementById("targetPhrase").style.color = "#f43f5e";
  } else {
    document.getElementById("targetPhrase").style.color = "#f8fafc";
  }

  toggleBlindMode();
  saveState();
}

function toggleBlindMode() {
  const isBlind = document.getElementById("blindMode").checked;
  const el = document.getElementById("targetPhrase");
  if (isBlind) {
    el.classList.add("blurred");
  } else {
    el.classList.remove("blurred");
  }
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

  const highlighted = targetWords.map((word, i) => {
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
    alert("Use o Google Chrome ou Microsoft Edge para reconhecimento de voz.");
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

    const threshold = currentItem.hard ? 90 : 82;

    if (finalScore >= threshold) {
      let earnedCoins = currentItem.hard ? 25 : 10;
      let earnedXP = currentItem.hard ? 50 : 20;

      if (finalScore >= 96) {
        earnedXP = Math.round(earnedXP * 1.5);
        earnedCoins += 5;
      }

      state.coins += earnedCoins;
      state.happiness = Math.min(100, state.happiness + 10);
      
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
          feedback.innerHTML = `🎊 <strong>LEVEL UP! Você avançou para o Nível ${state.level}!</strong>`;
        }
      }

      feedback.innerHTML = `✅ <strong>Nota ${finalScore}%!</strong> +${earnedCoins} Moedas | +${earnedXP} XP<br>${check.highlighted}${playbackBtn}`;
      document.getElementById("petMood").textContent = currentItem.hard ? "Incrível! Derrotou o Desafio Boss! 🐉🔥" : "Mandou muito bem! 🔥";
      bouncePet();
      setTimeout(loadNextPhrase, 2600);
    } else {
      feedback.innerHTML = `❌ <strong>Nota ${finalScore}%</strong> (Mínimo ${threshold}% para esta frase)<br>${check.highlighted}<br>Entendido: "<em>${spoken}</em>"${playbackBtn}`;
      document.getElementById("petMood").textContent = "Quase lá! Ouça o áudio e tente de novo. 👂";
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

function buyItem(item, cost) {
  if (state.coins < cost) {
    document.getElementById("petMood").textContent = "Faltam moedas! Acerte frases ou desafios para ganhar 🪙";
    return;
  }
  state.coins -= cost;
  if (item === "snack") {
    state.hunger = Math.min(100, state.hunger + 30);
    document.getElementById("petMood").textContent = "Coxinha deliciosa! 🍗";
  } else if (item === "glasses") {
    state.hasShades = true;
    document.getElementById("petMood").textContent = "Estilo puro! 😎";
  } else if (item === "energy") {
    state.happiness = 100;
    document.getElementById("petMood").textContent = "Energia total! ☕";
  }
  bouncePet();
  saveState();
}

function bouncePet() {
  const pet = document.getElementById("petAvatar");
  pet.classList.add("bounce");
  setTimeout(() => pet.classList.remove("bounce"), 300);
}

loadNextPhrase();
