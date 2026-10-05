// Import background music.
const backgroundMusic = new Audio("sounds/ambience.ogg");

// Loop background music and set volume.
backgroundMusic.loop = true;
backgroundMusic.volume = 0.5;

// Play background music when the page loads.
backgroundMusic.play();
