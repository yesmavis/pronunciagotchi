const LEVELS = [
  {
    name: "Lvl 1: Food, Coffee & Hangouts",
    "en-US": [
      { ctx: "Ordering fast", text: "Can I grab an iced coffee to go?", hint: "Connect 'Can I' -> 'Can-I'" },
      { ctx: "Hungry with friends", text: "I'm starving, wanna grab a bite?", hint: "'wanna' = want to" },
      { ctx: "Splitting the bill", text: "Don't worry about it, it's on me", hint: "Smooth rhythm on 'about-it'" },
      { ctx: "Tasting food", text: "Yo, this tastes way better than I expected", hint: "Stress 'way' and 'better'" },
      { ctx: "Grocery run", text: "We're totally out of milk and bananas", hint: "'We're' = we are" }
    ],
    "es-ES": [
      { ctx: "En la cafetería", text: "¿Me pones un café con leche para llevar?", hint: "Enlaza 'un-café'" },
      { ctx: "Con hambre", text: "Me muero de hambre, ¿pillamos algo?", hint: "'Pillar' = jerga común para comprar/coger" },
      { ctx: "Pagando la cuenta", text: "Tranqui, hoy invito yo", hint: "'Tranqui' = tranquilo (muy natural)" }
    ],
    "pt-PT": [
      { ctx: "No café", text: "Olha, era um café cheio se faz favor", hint: "Expressão típica em Portugal" },
      { ctx: "Com fome", text: "Estou cheio de fome, bora comer qualquer coisa?", hint: "'Bora' = vamos embora" }
    ],
    "fr-FR": [
      { ctx: "Au café", text: "Je vais prendre un café à emporter, s'il vous plaît", hint: "Liaison 'un-café'" },
      { ctx: "Entre potes", text: "J'ai trop la dalle, on mange un truc ?", hint: "'Avoir la dalle' = argot pour avoir très faim" }
    ],
    generators: {
      "en-US": {
        a: ["I'm kinda craving", "Wanna go get", "Let's grab", "I could really go for"],
        b: ["some spicy tacos", "a cold smoothie", "fresh strawberries", "some street food", "a quick snack"],
        c: ["right now", "after this", "on the way home", "before it closes"]
      }
    }
  },
  {
    name: "Lvl 2: Jobs, Hustle & Professions",
    "en-US": [
      { ctx: "Talking about work", text: "What do you do for a living?", hint: "Say 'Whaddaya do' naturally" },
      { ctx: "Busy schedule", text: "I've been swamped with shifts all week", hint: "'Swamped' = super busy" },
      { ctx: "Side hustle", text: "She's freelancing as a graphic designer now", hint: "Clear 'v' and 'z' sounds" },
      { ctx: "Career change", text: "Honestly, I'm thinking about switching careers", hint: "Drop the 'g' slightly in casual speech" }
    ],
    "es-ES": [
      { ctx: "Hablando de curro", text: "¿De qué curras ahora mismo?", hint: "'Currar' = trabajar (jerga diaria)" },
      { ctx: "Mucho trabajo", text: "Llevo toda la semana hasta arriba de curro", hint: "Entonación natural" }
    ],
    "pt-PT": [
      { ctx: "Sobre trabalho", text: "O que é que andas a fazer agora?", hint: "Fluidez no 'o que é que'" }
    ],
    "fr-FR": [
      { ctx: "Au boulot", text: "Tu fais quoi dans la vie ?", hint: "Forme orale directe" }
    ],
    generators: {
      "en-US": {
        a: ["My buddy works as", "I'm interviewing to be", "She just got hired as"],
        b: ["a software developer", "a personal trainer", "a nurse at the clinic", "a video editor"],
        c: ["downtown", "remotely", "for a startup"]
      }
    }
  },
  {
    name: "Lvl 3: Sports, Gym & Gaming",
    "en-US": [
      { ctx: "At the gym", text: "I'm gonna hit the gym before work", hint: "'gonna' = going to" },
      { ctx: "Watching a match", text: "Did you see that crazy goal last night?", hint: "'Did you' -> 'Didja'" },
      { ctx: "Tired after workout", text: "My legs are completely dead after leg day", hint: "Stress 'dead'" }
    ],
    "es-ES": [
      { ctx: "Entrenando", text: "Voy a entrenar un rato antes de cenar", hint: "Ritmo rápido" }
    ],
    "pt-PT": [
      { ctx: "No ginásio", text: "Hoje vou treinar pernas e já estou todo roto", hint: "'Todo roto' = muito cansado" }
    ],
    "fr-FR": [
      { ctx: "Au sport", text: "Je vais à la salle juste après le taf", hint: "'Le taf' = le travail" }
    ],
    generators: {
      "en-US": {
        a: ["We're playing", "I'm watching", "They crushed us in"],
        b: ["soccer", "basketball", "tennis", "ranked matches"],
        c: ["this weekend", "tonight", "at the park"]
      }
    }
  },
  {
    name: "Lvl 4: School, Uni & Classroom",
    "en-US": [
      { ctx: "Before an exam", text: "I didn't study at all for today's quiz", hint: "Link 'at-all'" },
      { ctx: "In class", text: "Wait, what page are we supposed to be on?", hint: "'supposed to' -> 'supposta'" },
      { ctx: "Group project", text: "Can you send me the notes from yesterday?", hint: "'Can you' -> 'Canya'" }
    ],
    "es-ES": [
      { ctx: "En clase", text: "Tío, no me he enterado de nada en clase", hint: "Expresión súper común" }
    ],
    "pt-PT": [
      { ctx: "Na aula", text: "Podes mandar-me os apontamentos de ontem?", hint: "Som fechado em 'ontem'" }
    ],
    "fr-FR": [
      { ctx: "En cours", text: "J'ai rien compris au cours d'aujourd'hui", hint: "Suppression du 'ne' à l'oral" }
    ],
    generators: {
      "en-US": {
        a: ["I forgot my", "Did you finish the", "The teacher checked our"],
        b: ["homework", "presentation slides", "lab report", "textbook"],
        c: ["this morning", "before class", "for tomorrow"]
      }
    }
  },
  {
    name: "Lvl 5: Office, Calls & Real Work",
    "en-US": [
      { ctx: "Video call", text: "Sorry, I was on mute—can you hear me now?", hint: "Natural pause after 'mute'" },
      { ctx: "Deadlines", text: "Let's circle back on this tomorrow morning", hint: "Common office slang" },
      { ctx: "Wrapping up", text: "I'm logging off for the day, catch you later!", hint: "Friendly upbeat tone" }
    ],
    "es-ES": [
      { ctx: "En reunión", text: "Perdona, tenía el micro silenciado, ¿me oyes?", hint: "Naturalidad en videollamada" }
    ],
    "pt-PT": [
      { ctx: "No escritório", text: "Vamos fechar isto hoje para despachar", hint: "'Despachar' = resolver rápido" }
    ],
    "fr-FR": [
      { ctx: "Au bureau", text: "On fait un point rapide demain matin ?", hint: "Ton professionnel décontracté" }
    ],
    generators: {
      "en-US": {
        a: ["I'll send over the", "We need to update the", "Let's review the"],
        b: ["budget sheet", "client proposal", "project timeline"],
        c: ["by end of day", "before the meeting", "as soon as possible"]
      }
    }
  },
  {
    name: "Lvl 6: Street, Travel & Directions",
    "en-US": [
      { ctx: "Lost in the city", text: "Hey, do you know which way the subway is?", hint: "Polite casual opener" },
      { ctx: "Running late", text: "I'm stuck in traffic, I'll be there in ten", hint: "'in ten' = in ten minutes" }
    ],
    "es-ES": [
      { ctx: "Por la calle", text: "Perdona, ¿sabes por dónde queda el metro?", hint: "Pregunta directa en la calle" }
    ],
    "pt-PT": [
      { ctx: "Na rua", text: "Desculpa, sabes onde fica a estação de metro?", hint: "Fluidez natural" }
    ],
    "fr-FR": [
      { ctx: "Dans la rue", text: "Excusez-moi, c'est par où le métro ?", hint: "Tournure orale courante" }
    ],
    generators: {
      "en-US": {
        a: ["How long does it take to", "I'm trying to get to", "Is it faster to walk or"],
        b: ["the airport", "the train station", "downtown"],
        c: ["from here?", "at this hour?", "without traffic?"]
      }
    }
  },
  {
    name: "Lvl 7: Friends, Texting & Social Life",
    "en-US": [
      { ctx: "Making plans", text: "What are you up to this weekend?", hint: "'What are you' -> 'Whatcha'" },
      { ctx: "Agreeing", text: "For sure, just text me when you're outside", hint: "'For sure' = definitely" }
    ],
    "es-ES": [
      { ctx: "Quedando", text: "¿Qué plan tienes para este finde?", hint: "'Finde' = fin de semana" }
    ],
    "pt-PT": [
      { ctx: "Combinar planos", text: "O que é que vais fazer este fim de semana?", hint: "Ritmo natural" }
    ],
    "fr-FR": [
      { ctx: "Entre amis", text: "Tu fais quoi ce week-end ?", hint: "Intonation montante à la fin" }
    ],
    generators: {
      "en-US": {
        a: ["Let me know if you're", "Text me once you", "We should totally"],
        b: ["free tonight", "get home safe", "hang out soon"],
        c: ["okay?", "bro!", "this Friday"]
      }
    }
  },
  {
    name: "Lvl 8: Movies, Music & Pop Culture",
    "en-US": [
      { ctx: "Recommending a show", text: "Have you binged that new series yet?", hint: "'Binged' = watched nonstop" },
      { ctx: "Music taste", text: "This song has been stuck in my head all day", hint: "Link 'stuck-in-my'" }
    ],
    "es-ES": [
      { ctx: "Series", text: "¿Te has visto ya la nueva temporada?", hint: "Sonido suave en 'visto'" }
    ],
    "pt-PT": [
      { ctx: "Séries", text: "Já viste o último episódio daquela série?", hint: "Entonação de pergunta" }
    ],
    "fr-FR": [
      { ctx: "Séries", text: "T'as déjà maté la nouvelle saison ?", hint: "'Mater' = regarder (argot)" }
    ],
    generators: {
      "en-US": {
        a: ["I can't stop listening to", "You gotta watch", "Everyone's talking about"],
        b: ["that new album", "the season finale", "that viral podcast"],
        c: ["lately", "right now", "it's insane"]
      }
    }
  }
];

let state = JSON.parse(localStorage.getItem("pronunciagotchi_v2")) || {
  coins: 20,
  xp: 0,
  levelIndex: 0,
  happiness: 60,
  hunger: 50,
  hasShades: false,
  completed: []
};

let currentItem = null;
let lastAudioURL = null;

function saveState() {
  localStorage.setItem("pronunciagotchi_v2", JSON.stringify(state));
  const lvl = LEVELS[state.levelIndex % LEVELS.length];
  document.getElementById("levelBadge").textContent = lvl.name;
  document.getElementById("coinCount").textContent = state.coins;
  document.getElementById("xpBar").value = state.xp % 100;
  document.getElementById("xpText").textContent = `${state.xp % 100} / 100 XP`;
  document.getElementById("happyBar").value = state.happiness;
  document.getElementById("hungerBar").value = state.hunger;
  document.getElementById("petAvatar").textContent = state.hasShades ? "😎🐣" : "🐣";
}

function generateFreshPhrase() {
  const lang = document.getElementById("langSelect").value;
  const lvl = LEVELS[state.levelIndex % LEVELS.length];
  const pool = lvl[lang] || lvl["en-US"];

  // 1. Pick an uncompleted curated phrase first
  const unseen = pool.filter(p => !state.completed.includes(p.text));
  if (unseen.length > 0) {
    return unseen[Math.floor(Math.random() * unseen.length)];
  }

  // 2. Otherwise dynamically build a never-seen combo sentence
  const gen = (lvl.generators && lvl.generators[lang]) || (lvl.generators && lvl.generators["en-US"]);
  if (gen) {
    for (let tries = 0; tries < 50; tries++) {
      const a = gen.a[Math.floor(Math.random() * gen.a.length)];
      const b = gen.b[Math.floor(Math.random() * gen.b.length)];
      const c = gen.c[Math.floor(Math.random() * gen.c.length)];
      const combo = `${a} ${b} ${c}`;
      if (!state.completed.includes(combo)) {
        return { ctx: "Dynamic Conversation", text: combo, hint: "Speak smoothly without pausing between chunks" };
      }
    }
  }

  // Fallback: pick random from pool
  return pool[Math.floor(Math.random() * pool.length)];
}

function loadNextPhrase() {
  currentItem = generateFreshPhrase();
  document.getElementById("contextTag").textContent = currentItem.ctx;
  document.getElementById("targetPhrase").textContent = currentItem.text;
  document.getElementById("phraseHint").textContent = "💡 " + currentItem.hint;
  document.getElementById("feedback").textContent = "Tap 🔊 to listen, then 🎤 to reply!";
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
    alert("Use Chrome or Edge for Speech Recognition.");
    return;
  }

  // Reveal text once user attempts speaking in Ear-Only mode
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
  micBtn.textContent = "🎙️ Listening...";

  recognition.onresult = (event) => {
    const result = event.results[0][0];
    const spoken = result.transcript;
    const confidence = result.confidence > 0 ? result.confidence : 0.95;

    const check = wordByWordCheck(currentItem.text, spoken);
    const finalScore = Math.round(check.accuracy * confidence);
    const playbackBtn = `<br><button style="margin-top:8px" onclick="playMyVoice()">🎧 Hear Yourself</button>`;

    if (finalScore >= 88) {
      state.coins += 10;
      state.xp += 25;
      state.happiness = Math.min(100, state.happiness + 10);
      if (!state.completed.includes(currentItem.text)) {
        state.completed.push(currentItem.text);
      }

      const newLevel = Math.floor(state.xp / 100);
      let levelUpMsg = "";
      if (newLevel > state.levelIndex) {
        state.levelIndex = newLevel;
        levelUpMsg = `<br>🎊 <strong>LEVEL UP! Unlocked ${LEVELS[state.levelIndex % LEVELS.length].name}!</strong>`;
      }

      feedback.innerHTML = `✅ <strong>${finalScore}% Match!</strong> +10 Coins | +25 XP<br>${check.highlighted}${levelUpMsg}${playbackBtn}`;
      document.getElementById("petMood").textContent = "You sounded just like a local! 🔥";
      bouncePet();
      setTimeout(loadNextPhrase, 2400);
    } else {
      feedback.innerHTML = `❌ <strong>${finalScore}% Match</strong> (Need 88%+)<br>${check.highlighted}<br>Heard: "<em>${spoken}</em>"${playbackBtn}`;
      document.getElementById("petMood").textContent = "Listen to the native speed again & retry! 👂";
    }
    saveState();
  };

  recognition.onerror = (e) => {
    feedback.textContent = "Mic error: " + e.error;
  };

  recognition.onend = () => {
    if (mediaRecorder && mediaRecorder.state !== "inactive") mediaRecorder.stop();
    micBtn.classList.remove("recording");
    micBtn.textContent = "🎤 Tap & Speak";
  };

  recognition.start();
}

function playMyVoice() {
  if (lastAudioURL) new Audio(lastAudioURL).play();
}

function buyItem(item, cost) {
  if (state.coins < cost) {
    document.getElementById("petMood").textContent = "Need more coins! Nail a phrase to earn +10 🪙";
    return;
  }
  state.coins -= cost;
  if (item === "snack") {
    state.hunger = Math.min(100, state.hunger + 30);
    document.getElementById("petMood").textContent = "Tacos hit the spot! 🌮";
  } else if (item === "glasses") {
    state.hasShades = true;
    document.getElementById("petMood").textContent = "Too cool for school! 😎";
  } else if (item === "energy") {
    state.happiness = 100;
    document.getElementById("petMood").textContent = "Caffeinated & ready! ⚡";
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
