// Ange startdatum
const startDate = new Date('2023-01-01T00:00:00');

// Uppdatera timern varje sekund
function updateTimer() {
    const now = new Date();
    const timeElapsed = now - startDate;

    // Omvandla till dagar, timmar, minuter och sekunder
    const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeElapsed / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeElapsed / (1000 * 60)) % 60);
    const seconds = Math.floor((timeElapsed / 1000) % 60);

    // Visa tiden på hemsidan
    document.getElementById('timer').innerText =
        `${days} dagar, ${hours} timmar, ${minutes} minuter, ${seconds} sekunder`;
}

setInterval(updateTimer, 1000);
