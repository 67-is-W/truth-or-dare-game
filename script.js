const players = ["KV", "KS", "AD", "SD", "MIKU", "AK99"];

const truthPrompts = [
  "What is the funniest thing you've ever done in public?",
  "What is your biggest secret fear?",
  "If you could switch lives with any person here, who would it be and why?",
  "What is the most embarrassing thing you've ever texted by accident?",
  "What is a silly thing you used to believe as a kid?",
  "Who here do you think is the funniest person in the room?",
  "What is one thing you would never do even for $1,000?",
  "What is your most chaotic thought right now?",
  "Tell us your biggest pet peeve.",
  "What would your dream sleepover snack be?",
  "What is one thing you wish people knew about you?",
  "Which person in the group is most likely to start a prank war?"
];

const darePrompts = [
  "Do your best dramatic movie monologue for the group.",
  "Tell a silly joke and make everyone laugh without smiling. ",
  "Take a goofy selfie with the group and post it as your lock screen. ",
  "Do 10 jumping jacks while saying your name in a robot voice.",
  "Sing the chorus of a song with the most dramatic voice possible.",
  "Swap shoes with the person on your left for the next round.",
  "Say one compliment to every person in the room.",
  "Act like a mysterious movie villain for 15 seconds.",
  "Do your best impression of a sleepy cat. ",
  "Tell the group your funniest fake excuse for being late.",
  "Do a mini dance challenge with no music.",
  "Let someone else choose your next 10-second challenge."
];

const playerList = document.getElementById("playerList");
const currentPlayerEl = document.getElementById("currentPlayer");
const challengeCard = document.getElementById("challengeCard");
const challengeTypeEl = document.getElementById("challengeType");
const challengeTextEl = document.getElementById("challengeText");
const truthBtn = document.getElementById("truthBtn");
const dareBtn = document.getElementById("dareBtn");
const nextBtn = document.getElementById("nextBtn");
const resetBtn = document.getElementById("resetBtn");

let currentIndex = 0;

function renderPlayers() {
  playerList.innerHTML = players
    .map(
      (player, index) => `
        <div class="player-chip ${index === currentIndex ? "active" : ""}">
          ${player}
        </div>
      `
    )
    .join("");

  currentPlayerEl.textContent = players[currentIndex];
}

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function updateChallenge(type, text) {
  challengeCard.classList.remove("hidden");
  challengeTypeEl.textContent = type;
  challengeTextEl.textContent = text;
}

function generateChallenge(type) {
  const currentPlayer = players[currentIndex];
  const promptPool = type === "Truth" ? truthPrompts : darePrompts;
  const prompt = randomItem(promptPool);

  updateChallenge(type, `${currentPlayer}: ${prompt}`);
}

function nextPlayer() {
  currentIndex = (currentIndex + 1) % players.length;
  challengeCard.classList.add("hidden");
  challengeTypeEl.textContent = "Ready";
  challengeTextEl.textContent = "Pick a challenge!";
  renderPlayers();
}

function resetGame() {
  currentIndex = 0;
  challengeCard.classList.add("hidden");
  challengeTypeEl.textContent = "Ready";
  challengeTextEl.textContent = "Pick a challenge!";
  renderPlayers();
}

truthBtn.addEventListener("click", () => generateChallenge("Truth"));
dareBtn.addEventListener("click", () => generateChallenge("Dare"));
nextBtn.addEventListener("click", nextPlayer);
resetBtn.addEventListener("click", resetGame);

renderPlayers();
