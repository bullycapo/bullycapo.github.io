// Lista över videokällor i önskad ordning
const videoSources = [
    "monthlybtc.mp4",
    "dailybtc.mp4",
    "quarterbtc.mp4",
    "weeklybtc.mp4"
];

let videoIndex = 0; // Starta med den första videon
const videoElement = document.getElementById("background-video");

// Funktion för att spela nästa video
function playNextVideo() {
    videoElement.src = videoSources[videoIndex];
    videoElement.play();
    videoIndex = (videoIndex + 1) % videoSources.length; // Loopa tillbaka till början efter sista videon
}

// Lyssna på när videon slutar och spela nästa
videoElement.addEventListener("ended", playNextVideo);

// Starta uppspelningen med den första videon
playNextVideo();
