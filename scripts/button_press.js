// Import button press sound effects.
const buttonPressSound = new Audio("sounds/press.ogg");
const upDownSound = new Audio("sounds/updown.ogg");

// Query selector for buttons.
const buttons = document.querySelectorAll("button, .button");

// Event listener for button clicks.
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const sound =
      button.id === "up-button" || button.id === "down-button"
        ? upDownSound
        : buttonPressSound;

    sound.currentTime = 0;
    sound.play();
  });
});
