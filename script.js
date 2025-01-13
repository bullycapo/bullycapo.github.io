const videoSources = [
    "monthlybtc.mp4",
    "dailybtc.mp4",
    "quarterbtc.mp4",
    "weeklybtc.mp4"
];

const videoElement = document.getElementById("background-video");
let currentVideoIndex = 0;

// Spela nästa video i listan
function playNextVideo() {
    videoElement.src = videoSources[currentVideoIndex];
    
    // När videon är redo att spelas, starta den
    videoElement.oncanplaythrough = () => {
        videoElement.play();
    };

    // Lyssna på videoens slut
    videoElement.onended = () => {
        currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
        playNextVideo();
    };
}

// Starta videosekvensen
playNextVideo();

// Timer Funktion
const startDate = new Date("2022-11-21T00:00:00");
const timerDisplay = document.getElementById("timer-display");

function updateTimer() {
    const now = new Date();
    const elapsed = now - startDate;

    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((elapsed / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsed / 1000) % 60);

    timerDisplay.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

setInterval(updateTimer, 1000);
