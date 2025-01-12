// Startdatum för bullmarknaden
const startDate = new Date('2022-11-21T00:00:00');

// Funktion för att uppdatera timern
function updateTimer() {
    const now = new Date(); // Hämta nuvarande tid
    const elapsed = now - startDate; // Skillnad i millisekunder

    // Beräkna dagar, timmar, minuter och sekunder
    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((elapsed / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsed / 1000) % 60);

    // Visa endast tiden på sidan
    document.getElementById('timer-display').innerText =
        `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Uppdatera timern varje sekund
setInterval(updateTimer, 1000);

// Funktion för att kopiera adress
function copyAddress() {
    const address = document.getElementById('contract-address').innerText;
    navigator.clipboard.writeText(address).then(() => {
        alert('Contract Address copied!');
    });
}
