const videos = [
    "monthlybtc.mp4",
    "daillybtc.mp4",
    "quarterbtc.mp4",
    "weeklybtc.mp4"
];

let currentVideoIndex = 0;
const backgroundVideo = document.getElementById("background-video");

// Funktion som byter video utan att det syns några vita sekunder.
function changeVideo() {
    backgroundVideo.src = videos[currentVideoIndex];
    backgroundVideo.load();
    backgroundVideo.play();
    
    // När videon är slut, byter vi till nästa.
    backgroundVideo.onended = function() {
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        changeVideo();
    };
}

// Starta videobytet direkt när sidan laddas
window.onload = function() {
    changeVideo();
};
