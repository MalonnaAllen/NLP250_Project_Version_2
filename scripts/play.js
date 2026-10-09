const gameContainer = document.querySelector(".game-container");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const selectButton = document.querySelector(".select-button");

const scenes = {
  intro: {
    prompt:
      "There's a knock at the door. You take your time answering it, a soaked and dirty package lays at your doorstop.",
    choices: [
      {text: "Bring the package inside?", next: "opened"},
      {text: "Leave it there.", next: "ending1"},
    ],
  },
  opened: {
    prompt:
      "You don't really have a choice do you? You open the package to find a VHS tape with your name on it. You bring it inside and pop it into the VCR player. As soon as you do so the phone in the other room begins to ring.",
    choices: [
      {text: "Ignore the phone, play the tape.", next: "tape"},
      {text: "Answer the phone.", next: "phone"},
    ],
  },
  tape: {
    prompt:
      "Your hand hesitates over the play button, you knew this day would come but you still weren't ready for it. Are you sure you're ready to play the tape?",
    choices: [
      {text: "Yes, play the tape.", next: "playtapebad"},
      {text: "No, take a look around the house first.", next: "lookaround"},
    ],
  },
  playtapebad: {
    prompt:
      "You press play and as the VCR whirs the phone stops ringing. The video shows a grisly familiar scene, your childhood home up in flames.",
    choices: [
      {text: "Turn the TV off.", next: "tvoffbad"},
      {text: "Keep watching.", next: "keepwatchingbad"},
    ],
  },
  tvoffbad: {
    prompt: "You turn the TV off and a pang of guilt hits you.",
    choices: [{text: "", next: ""}],
  },
  ending1: {
    prompt:
      "COWARD: You leave the package there but you know that won't stop them from trying. It's only a matter of time before your actions catch back up to you.",
    choices: [{text: "Restart?", next: "intro"}],
  },
};

let currentScene = "intro";
let selectedChoice = 0;

function renderScene() {
  const scene = scenes[currentScene];
  const choiceMarkup = scene.choices
    .map(
      (choice, index) => `
				<li class="game-choice${index === selectedChoice ? " is-selected" : ""}">
					<span class="choice-marker" aria-hidden="true">${index === selectedChoice ? ">" : " "}</span>
					<span>${choice.text}</span>
				</li>`,
    )
    .join("");

  gameContainer.innerHTML = `
		<p class="prompt-text">${scene.prompt}</p>
		<ol class="choice-list" aria-label="Choices">
			${choiceMarkup}
		</ol>
		<p class="choice-status">${selectedChoice + 1} / ${scene.choices.length}</p>
	`;
}

function moveSelection(direction) {
  const choiceCount = scenes[currentScene].choices.length;
  selectedChoice = (selectedChoice + direction + choiceCount) % choiceCount;
  renderScene();
}

// Function to unlock endings.
function selectChoice() {
  currentScene = scenes[currentScene].choices[selectedChoice].next;
  if (currentScene === "ending1") {
    window.unlockEnding(1);
  }
  selectedChoice = 0;
  renderScene();
}

upButton.addEventListener("click", () => moveSelection(-1));
downButton.addEventListener("click", () => moveSelection(1));
selectButton.addEventListener("click", selectChoice);

renderScene();
