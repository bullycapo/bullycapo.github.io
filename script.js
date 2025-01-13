// Lista över videor att spela upp
const videoFiles = [
    "monthlybtc.mp4",
    "dailybtc.mp4",
    "quarterbtc.mp4",
    "weeklybtc.mp4"
];

// Hämta videoelementet
const videoElement = document.getElementById('background-video');

// Håll koll på vilken video som spelas
let currentVideoIndex = 0;

// Funktion för att spela nästa video
function playNextVideo() {
    // Ställ in src till nästa video
    videoElement.src = videoFiles[currentVideoIndex];
    videoElement.load();
    videoElement.play();

    // Uppdatera index för nästa video
    currentVideoIndex = (currentVideoIndex + 1) % videoFiles.length; // Loop tillbaka till början
}

// Lyssna på när en video är slut och spela nästa
videoElement.addEventListener('ended', playNextVideo);

// Starta uppspelningen
playNextVideo();
