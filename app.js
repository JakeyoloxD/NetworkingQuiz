/* Cisco Drill — vanilla JS
   Features:
   - Loads cisco_quiz_questions_v1.json
   - Shuffles questions and choices
   - Multiple guesses allowed until correct
   - Clear visual feedback for wrong/right
   - Auto-resets when version/count changes
   - Optional localStorage persistence
*/

const DATA_URL = "cisco_quiz_questions_v1.json?v=1.0";
const persistKey = "cisco_drill_state_v1";

const els = {
  progressBar: document.getElementById("progressBar"),
  progressText: document.getElementById("progressText"),
  domain: document.getElementById("domain"),
  difficulty: document.getElementById("difficulty"),
  questionText: document.getElementById("questionText"),
  choices: document.getElementById("choices"),
  feedback: document.getElementById("feedback"),
  explain: document.getElementById("explain"),
  explainText: document.getElementById("explainText"),
  refs: document.getElementById("refs"),
  nextBtn: document.getElementById("nextBtn"),
  resetBtn: document.getElementById("resetBtn"),
  persistToggle: document.getElementById("persistToggle"),
  card: document.getElementById("card"),
};

let bank = [];
let order = [];
let idx = 0;
let attemptsThisQ = 0;
let answeredCorrect = false;
let bankSig = "";

init();

async function init() {
  try {
    const res = await fetch(DATA_URL, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to load question bank");
    const data = await res.json();
    bank = data.questions || [];
    bankSig = `${data.version || "unknown"}:${bank.length}`;
    console.log(`Loaded bank v${data.version} with ${bank.length} questions`);
  } catch (e) {
    failHard("Could not load the JSON. Make sure the file is in the same folder.");
    console.error(e);
    return;
  }

  const saved = loadState();
  if (saved && saved.sig === bankSig) {
    order = saved.order;
    idx = saved.idx;
  } else {
    order = shuffle([...Array(bank.length).keys()]);
    idx = 0;
    attemptsThisQ = 0;
    answeredCorrect = false;
    saveState();
  }

  els.persistToggle.checked = !!saved;
  bindEvents();
  render();
}

function bindEvents() {
  els.nextBtn.addEventListener("click", () => {
    if (!answeredCorrect) return;
    idx++;
    if (idx >= order.length) {
      congrats();
      return;
    }
    answeredCorrect = false;
    attemptsThisQ = 0;
    render();
  });

  els.resetBtn.addEventListener("click", () => {
    order = shuffle([...Array(bank.length).keys()]);
    idx = 0;
    attemptsThisQ = 0;
    answeredCorrect = false;
    clearState();
    if (els.persistToggle.checked) saveState();
    render();
  });

  els.persistToggle.addEventListener("change", () => {
    if (els.persistToggle.checked) {
      saveState();
    } else {
      clearState();
    }
  });
}

function render() {
  if (els.persistToggle.checked) saveState();

  const q = bank[order[idx]];
  if (!q) return;

  els.domain.textContent = q.category || "";
  els.difficulty.textContent = (q.difficulty || "unknown").toUpperCase();
  els.questionText.textContent = q.question;
  els.feedback.textContent = "";
  els.feedback.className = "feedback";
  els.explain.classList.add("hidden");
  els.explainText.textContent = "";
  els.refs.innerHTML = "";
  els.nextBtn.disabled = true;

  els.choices.innerHTML = "";
  const choiceIndexes = shuffle(q.choices.map((_, i) => i));
  choiceIndexes.forEach((choiceIndex) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.type = "button";
    btn.style.color = "#fff"; // white text on buttons
    btn.setAttribute("role", "option");
    btn.textContent = q.choices[choiceIndex];
    btn.addEventListener("click", () => onChoice(q, btn, choiceIndex));
    els.choices.appendChild(btn);
  });

  const done = idx;
  const total = order.length;
  const pct = Math.round((done / total) * 100);
  els.progressBar.style.width = `${pct}%`;
  els.progressText.textContent = `${done} / ${total}`;
  attemptsThisQ = 0;
}

function onChoice(q, btn, chosenIndex) {
  if (answeredCorrect) return;

  const correctIndex = q.choices.indexOf(q.answer);
  attemptsThisQ++;

  if (chosenIndex === correctIndex) {
    answeredCorrect = true;
    btn.classList.remove("wrong");
    btn.classList.add("correct");
    els.feedback.textContent =
      attemptsThisQ === 1
        ? "Correct. Clean hit."
        : `Correct after ${attemptsThisQ} tries. Locked in.`;
    els.feedback.className = "feedback ok";
    [...els.choices.children].forEach((ch) => {
      if (ch !== btn) ch.setAttribute("disabled", "true");
    });
    if (q.explanation) els.explainText.textContent = q.explanation;
    if (Array.isArray(q.tags) && q.tags.length) {
      els.refs.innerHTML = q.tags
        .map((t) => `<span class="tag">${t}</span>`)
        .join(" ");
    }
    els.explain.classList.remove("hidden");
    els.nextBtn.disabled = false;
    confettiMini(els.card);
  } else {
    btn.classList.add("wrong");
    btn.setAttribute("disabled", "true");
    els.feedback.textContent = "Not it. Try again.";
    els.feedback.className = "feedback bad";
  }

  if (els.persistToggle.checked) saveState();
}

function congrats() {
  els.questionText.textContent = "All questions completed.";
  els.choices.innerHTML = "";
  els.feedback.textContent =
    "Nice work. Reset to run it again with a new order.";
  els.feedback.className = "feedback ok";
  els.explain.classList.add("hidden");
  els.nextBtn.disabled = true;
}

/* Utils */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function failHard(msg) {
  els.questionText.textContent = msg;
  els.choices.innerHTML = "";
  els.feedback.textContent = "Fix the file path or name, then refresh.";
  els.feedback.className = "feedback bad";
  els.nextBtn.disabled = true;
}

/* Persistence */
function saveState() {
  const state = { order, idx, sig: bankSig };
  try {
    localStorage.setItem(persistKey, JSON.stringify(state));
  } catch {}
}
function loadState() {
  try {
    const raw = localStorage.getItem(persistKey);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
function clearState() {
  try {
    localStorage.removeItem(persistKey);
  } catch {}
}

/* Tiny confetti without deps */
function confettiMini(target) {
  const n = 18;
  for (let i = 0; i < n; i++) {
    const s = document.createElement("span");
    s.style.position = "absolute";
    s.style.left = Math.random() * 100 + "%";
    s.style.top = "0px";
    s.style.width = "6px";
    s.style.height = "10px";
    s.style.background = `hsl(${Math.random() * 360},80%,60%)`;
    s.style.borderRadius = "2px";
    s.style.transform = `translateY(0) rotate(${Math.random() * 360}deg)`;
    s.style.opacity = "0.95";
    s.style.pointerEvents = "none";
    target.appendChild(s);
    const dy = 80 + Math.random() * 120;
    const duration = 700 + Math.random() * 500;
    s.animate(
      [{ transform: `translateY(0)` }, { transform: `translateY(${dy}px)` }],
      { duration, easing: "ease-out" }
    );
    setTimeout(() => s.remove(), duration + 50);
  }
}
