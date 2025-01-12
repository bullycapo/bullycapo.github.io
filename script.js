// Datum för lansering
const startDate = new Date('2023-01-01T00:00:00'); // Ändra detta till ditt faktiska lanseringsdatum

// Funktion för att uppdatera timern
function updateTimer() {
    const now = new Date(); // Hämta nuvarande tid
    const elapsed = now - startDate; // Räkna ut tiden som gått

    // Omvandla tiden till dagar, timmar, minuter och sekunder
    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((elapsed / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsed / 1000) % 60);

    // Uppdatera texten i HTML
    document.getElementById('timer-display').innerText =
        `${days} dagar, ${hours} timmar, ${minutes} minuter, ${seconds} sekunder`;
}

// Kör funktionen direkt när sidan laddas
updateTimer();

// Uppdatera timern varje sekund
setInterval(updateTimer, 1000);
