let startTime = localStorage.getItem('startTime');
let elapsedTime = 0;
let timerInterval;

if (startTime) {
    elapsedTime = Date.now() - parseInt(startTime, 10);
}

function updateTimer() {
    const hours = Math.floor(elapsedTime / 3600000);
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);

    document.getElementById('timer-display').textContent =
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    startTime = Date.now() - elapsedTime;
    localStorage.setItem('startTime', startTime);

    timerInterval = setInterval(function() {
        elapsedTime = Date.now() - startTime;
        updateTimer();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

window.addEventListener('beforeunload', function() {
    stopTimer();
    localStorage.removeItem('startTime');
});

updateTimer();
startTimer();
