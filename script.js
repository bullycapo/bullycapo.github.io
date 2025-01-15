const videoSources = [
    "monthlybtc.mp4",
    "dailybtc.mp4",
    "quarterbtc.mp4",
    "weeklybtc.mp4",
];

let videoIndex = 0;
const videoElement = document.getElementById("background-video");

function playNextVideo() {
    videoElement.src = videoSources[videoIndex];
    videoElement.play();
    videoIndex = (videoIndex + 1) % videoSources.length;
}

videoElement.addEventListener("ended", playNextVideo);
playNextVideo();

// Timer-funktion
function updateTimer() {
    const launchDate = new Date("2022-11-21T00:00:00");
    const now = new Date();
    const diff = now - launchDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("timer-display").textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateTimer, 1000);
