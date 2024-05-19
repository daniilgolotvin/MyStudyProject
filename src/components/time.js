let startTime = localStorage.getItem('startTime');
if (!startTime) {
    startTime = Date.now();
    localStorage.setItem('startTime', startTime);
}

function updateTimer() {
    const now = Date.now();
    const elapsedTime = now - startTime;

    const hours = Math.floor(elapsedTime / 3600000);
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);

    document.getElementById('timer-display').textContent =
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

updateTimer();
setInterval(updateTimer, 1000);
