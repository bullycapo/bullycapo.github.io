// Funktion för att spela videorna i ordning
let videos = [
    "monthlybtc.mp4",
    "daillybtc.mp4",
    "quarterbtc.mp4",
    "weeklybtc.mp4"
];

let videoIndex = 0;  // Startar med den första videon
let videoElement = document.getElementById("background-video");

// Funktion för att byta till nästa video
function playNextVideo() {
    videoElement.src = videos[videoIndex];
    videoElement.play();
    videoIndex = (videoIndex + 1) % videos.length;  // När vi når slutet loopar vi tillbaka
}

// När en video är slut, spela nästa video
videoElement.addEventListener("ended", playNextVideo);

// Starta uppspelning från början
playNextVideo();

// Timer för att visa tiden sedan 21 november 2022
function updateTimer() {
    const startDate = new Date("2022-11-21");
    const currentDate = new Date();
    const timeDiff = currentDate - startDate;

    const days = Math.floor(timeDiff / (1000 * 3600 * 24));
    const hours = Math.floor((timeDiff % (1000 * 3600 * 24)) / (1000 * 3600));
    const minutes = Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById("timer-display").textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Uppdatera timern varje sekund
setInterval(updateTimer, 1000);
