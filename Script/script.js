let startTime = 0; 
let interval; 
let isRunning = false; 

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function formatTime(milliseconds) {
    const date = new Date(milliseconds);
    return date.toISOString().substr(11, 8); 
}

function startTimer() {
    if (!isRunning) {
        startTime = Date.now() - (startTime > 0 ? startTime : 0); 
        interval = setInterval(updateTimer, 10);
        isRunning = true;
        startBtn.textContent = 'Pause';
    } else {
        clearInterval(interval);
        isRunning = false;
        startBtn.textContent = 'Resume';
    }
}

function stopTimer() {
    clearInterval(interval);
    isRunning = false;
    startBtn.textContent = 'Start';
}

function resetTimer() {
    clearInterval(interval);
    isRunning = false;
    startTime = 0;
    display.textContent = '00:00:00';
    startBtn.textContent = 'Start';
}

function updateTimer() {
    const currentTime = Date.now() - startTime;
    display.textContent = formatTime(currentTime);
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
