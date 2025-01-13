// Lista över videor
const videos = [
    "monthlybtc.mp4",
    "daillybtc.mp4",
    "quarterbtc.mp4",
    "weeklybtc.mp4"
];

// Videospelare
const videoElement = document.getElementById("background-video");
let currentVideoIndex = 0;

// Laddar och spelar nästa video
function playNextVideo() {
    videoElement.src = videos[currentVideoIndex];
    videoElement.play();
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
}

// Event Listener för att spela nästa video när den nuvarande är slut
videoElement.addEventListener("ended", playNextVideo);

// Starta med första videon
playNextVideo();

// Kopiera CA-funktion
function copyAddress() {
    const address = document.getElementById("contract-address").textContent;
    navigator.clipboard.writeText(address).then(() => {
        alert("Address copied!");
    });
}
