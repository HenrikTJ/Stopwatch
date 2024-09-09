//Variables
let timer;
let isRunning = false;
let [hours, minutes, seconds] = [0, 0, 0];


//Refering to elements from index.html
const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');



//Update display 
function updateDisplay() {
  let hrs = String(hours).padStart(2, '0');
  let mins = String(minutes).padStart(2, '0');
  let secs = String(seconds).padStart(2, '0');
  display.textContent = `${hrs}:${mins}:${secs}`;
}


//Start or stop the stopwatch
startStopButton.addEventListener('click', startStopwatch);
function startStopwatch() {
  if (!isRunning) {
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }
      updateDisplay();
    }, 1000);

    startStopButton.textContent = "Stop";
    isRunning = true;
  } 
  else {
    clearInterval(timer);
    startStopButton.textContent = "Start";
    isRunning = false;
  }
}

//Reset the stopwatch
resetButton.addEventListener('click', resetStopwatch);
function resetStopwatch() {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  startStopButton.textContent = "Start";
  isRunning = false;
}


// Initialize display
updateDisplay();