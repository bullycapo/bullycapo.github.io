const videos = [
    "monthlybtc.mp4",
    "dailybtc.mp4",
    "quarterbtc.mp4",
    "weeklybtc.mp4"
];

const videoElement = document.getElementById("background-video");
let currentVideoIndex = 0;

function playNextVideo() {
    videoElement.src = videos[currentVideoIndex];
    videoElement.play();
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
}

videoElement.addEventListener("ended", playNextVideo);

// Start första videon
playNextVideo();
