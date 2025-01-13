// Timer-funktion
const timerDisplay = document.getElementById('timer-display');
const startDate = new Date('2022-11-21T00:00:00');

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    timerDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Byt bakgrundsfärg varje sekund
    const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
    timerDisplay.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

// Uppdatera timern varje sekund
setInterval(updateTimer, 1000);
