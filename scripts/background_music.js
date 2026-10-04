// Import the background music.
const backgroundMusic = new Audio("sounds/ambience.ogg");

// Loop the background music and set volume.
backgroundMusic.loop = true;
backgroundMusic.volume = 0.5;

// Play the background music when the page loads.
backgroundMusic.play();
