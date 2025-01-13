// Synkronisera videor
const videos = [
    { id: "video-daily", offset: 0 },    // Ingen offset
    { id: "video-weekly", offset: 2 },  // Starta 2 sekunder senare
    { id: "video-monthly", offset: 0 }, // Ingen offset
    { id: "video-quarter", offset: 3 }, // Starta 3 sekunder senare
];

window.onload = () => {
    videos.forEach(videoObj => {
        const video = document.getElementById(videoObj.id);
        video.currentTime = videoObj.offset;
        video.play();
    });
};

// Timer-kod (från tidigare)
const startDate = new Date("2022-11-21T00:00:00Z");
setInterval(() => {
    const now = new Date();
    const elapsed = Math.floor((now - startDate) / 1000);
    const days = Math.floor(elapsed / 86400);
    const hours = Math.floor((elapsed % 86400) / 3600);
    const minutes = Math.floor((elapsed % 3600) / 60);
    const seconds = elapsed % 60;

    document.getElementById("timer-display").textContent = 
        `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
}, 1000);
