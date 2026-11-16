const PHRASES = {
  "es-ES": [
    { text: "El gato corre rápido", hint: "The cat runs fast" },
    { text: "Me gusta comer manzanas", hint: "I like to eat apples" },
    { text: "Dónde está la estación", hint: "Where is the station" }
  ],
  "en-US": [
    { text: "The weather is lovely today", hint: "Focus on 'th' and 'v'" },
    { text: "I would like a cup of coffee", hint: "Link 'cup of'" },
    { text: "She sells seashells by the seashore", hint: "Tongue twister!" }
  ],
  "pt-PT": [
    { text: "Bom dia, tudo bem", hint: "Good morning, all good?" },
    { text: "Quero um café por favor", hint: "I want a coffee please" }
  ],
  "fr-FR": [
    { text: "Je voudrais un croissant", hint: "I would like a croissant" },
    { text: "Il fait très beau aujourd'hui", hint: "The weather is very nice today" }
  ]
};

let state = JSON.parse(localStorage.getItem("pronunciagotchi")) || {
  coins: 20,
  happiness: 60,
  hunger: 50,
  hasHat: false,
  index: 0
};

function saveState() {
  localStorage.setItem("pronunciagotchi", JSON.stringify(state));
  document.getElementById("coinCount").textContent = state.coins;
  document.getElementById("happyBar").value = state.happiness;
  document.getElementById("hungerBar").value = state.hunger;
  document.getElementById("petAvatar").textContent = state.hasHat ? "🎩🐣" : "🐣";
}

function getCurrentPhrase() {
  const lang = document.getElementById("langSelect").value;
  const list = PHRASES[lang];
  return list[state.index % list.length];
}

function nextPhrase() {
  state.index++;
  const item = getCurrentPhrase();
  document.getElementById("targetPhrase").textContent = item.text;
  document.getElementById("phraseHint").textContent = item.hint;
  document.getElementById("feedback").textContent = "Tap the mic and read the phrase aloud!";
  saveState();
}

function speakTarget(rate) {
  const utterance = new SpeechSynthesisUtterance(getCurrentPhrase().text);
  utterance.lang = document.getElementById("langSelect").value;
  utterance.rate = rate;
  window.speechSynthesis.speak(utterance);
}

function similarity(s1, s2) {
  const clean = s => s.toLowerCase().replace(/[^\p{L}\s]/gu, "").trim();
  const a = clean(s1), b = clean(s2);
  if (!a || !b) return 0;
  const matrix = Array.from({ length: b.length + 1 }, (_, i) => [i]);
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      matrix[i][j] = b[i - 1] === a[j - 1]
        ? matrix[i - 1][j - 1]
        : Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
    }
  }
  return Math.round((1 - matrix[b.length][a.length] / Math.max(a.length, b.length)) * 100);
}

function startListening() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("Your browser does not support Speech Recognition. Try Chrome or Edge!");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = document.getElementById("langSelect").value;
  const micBtn = document.getElementById("micBtn");
  const feedback = document.getElementById("feedback");

  micBtn.classList.add("recording");
  micBtn.textContent = "🎙️ Listening...";

  recognition.onresult = (event) => {
    const spoken = event.results[0][0].transcript;
    const target = getCurrentPhrase().text;
    const score = similarity(target, spoken);

    if (score >= 80) {
      state.coins += 10;
      state.happiness = Math.min(100, state.happiness + 10);
      feedback.innerHTML = `✅ <strong>${score}% Match!</strong> You earned +10 Coins!<br>Heard: "<em>${spoken}</em>"`;
      document.getElementById("petMood").textContent = "Your pet loves your pronunciation! 🎉";
      bouncePet();
    } else {
      feedback.innerHTML = `⚠️ <strong>${score}% Match.</strong> Try again!<br>Heard: "<em>${spoken}</em>"`;
    }
    saveState();
  };

  recognition.onerror = (e) => {
    feedback.textContent = "Mic error: " + e.error + ". Make sure microphone permission is allowed.";
  };

  recognition.onend = () => {
    micBtn.classList.remove("recording");
    micBtn.textContent = "🎤 Tap & Speak";
  };

  recognition.start();
}

function buyItem(item, cost) {
  if (state.coins < cost) {
    document.getElementById("petMood").textContent = "Not enough coins! Practice speaking!";
    return;
  }
  state.coins -= cost;
  if (item === "apple") {
    state.hunger = Math.min(100, state.hunger + 25);
    document.getElementById("petMood").textContent = "Yum! Crunchy apple! 🍎";
  } else if (item === "hat") {
    state.hasHat = true;
    document.getElementById("petMood").textContent = "Looking stylish! 🎩";
  } else if (item === "medicine") {
    state.happiness = 100;
    document.getElementById("petMood").textContent = "Feeling 100% healthy! 💊";
  }
  bouncePet();
  saveState();
}

function bouncePet() {
  const pet = document.getElementById("petAvatar");
  pet.classList.add("bounce");
  setTimeout(() => pet.classList.remove("bounce"), 300);
}

saveState();
