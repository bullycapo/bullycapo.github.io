// Funktion för att uppdatera timer varje sekund
const startDate = new Date("2022-11-21T00:00:00Z");

function updateTimer() {
    const currentTime = new Date();
    const timeElapsed = currentTime - startDate;

    const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

    const timerDisplay = document.getElementById("timer-display");
    timerDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateTimer, 1000);

// Funktion för att hantera video-sekvenser (looping)
let videos = ["monthlybtc.mp4", "daillybtc.mp4", "quarterbtc.mp4", "weeklybtc.mp4"];
let videoIndex = 0;

const videoElement = document.getElementById('background-video');
videoElement.src = videos[videoIndex];

videoElement.onended = function () {
    videoIndex = (videoIndex + 1) % videos.length;
    videoElement.src = videos[videoIndex];
    videoElement.play();
};
