// Timer-funktion
const startDate = new Date('2023-01-01T00:00:00');

function updateTimer() {
    const now = new Date();
    const elapsed = now - startDate;

    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((elapsed / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsed / 1000) % 60);

    document.getElementById('timer-display').innerText =
        `${days} dagar, ${hours} timmar, ${minutes} minuter, ${seconds} sekunder`;
}

setInterval(updateTimer, 1000);

// Kopiera adress
function copyAddress() {
    const address = document.getElementById('contract-address').innerText;
    navigator.clipboard.writeText(address).then(() => {
        alert('Contract Address kopierad!');
    });
}
