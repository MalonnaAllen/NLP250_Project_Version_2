// Query selector for save button.
const saveButton = document.querySelector(".save-button");

// Event listener for save button.
saveButton.addEventListener("click", () => {
  alert("Your progress has been saved.");

  // Save game progress to local storage.
  localStorage.setItem("saveGame", JSON.stringify({progress: "saved"}));
});
