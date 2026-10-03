// Import hover sound effect.
const hoverSound = new Audio("sounds/hover.ogg");

// Query selector for navbar links.
document.querySelectorAll(".navbar a").forEach((link) => {
  // Event listener for mouse enter.
  link.addEventListener("mouseenter", () => {
    hoverSound.currentTime = 0;
    hoverSound.play().catch(() => {});
  });
});
