//Varibales used in this program.
let startTime = 0; 
let interval; 
let isRunning = false; 

//getting elemenets using id
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

// The date is coming is not in the correct format hence we need to substring those date that is coming from the Date function
function formatTime(milliseconds) {
    const date = new Date(milliseconds);
    return date.toISOString().substr(11, 8); 
}

//This function is to start the timer here we are checking if the timmer is running through isRunning function if it is running then 
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
//This function is to stop the timmer.
function stopTimer() {
    clearInterval(interval);
    isRunning = false;
    startBtn.textContent = 'Start';
}

//reseting the timer function.
function resetTimer() {
    clearInterval(interval);
    isRunning = false;
    startTime = 0;
    display.textContent = '00:00:00';
    startBtn.textContent = 'Start';
}
//This functin is to update the timmer.
function updateTimer() {
    const currentTime = Date.now() - startTime;
    display.textContent = formatTime(currentTime);
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
