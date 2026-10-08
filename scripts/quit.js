// Query selector for quit button.
const quitButton = document.querySelector(".quit-button");

// Event listener for quit button.
quitButton.addEventListener("click", () => {
  if (
    confirm("Are you sure you want to quit? Make sure to save your progress.")
  ) {
    // Return to home page when quitting.
    window.location.href = "index.html";
  }
});
