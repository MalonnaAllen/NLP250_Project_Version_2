// Query selector for ending cards.
const endingCards = document.querySelectorAll(".ending-card");

// Retrieve unlocked endings from local storage.
const unlockedEndings = JSON.parse(
  localStorage.getItem("unlockedEndings") || "[]",
);

// Update ending cards based on unlocked endings.
endingCards.forEach((card) => {
  if (unlockedEndings.includes(card.dataset.ending)) {
    card.classList.add("is-unlocked");
  }
});

// Function to unlock an ending and update local storage.
window.unlockEnding = (endingNumber) => {
  const ending = String(endingNumber);
  const endings = JSON.parse(localStorage.getItem("unlockedEndings") || "[]");

  if (!endings.includes(ending)) {
    endings.push(ending);
    localStorage.setItem("unlockedEndings", JSON.stringify(endings));
  }
};
