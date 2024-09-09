let timer;
let counting = false;
let [hours, minutes, seconds] = [0, 0, 0];

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
  if (!counting) {
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
    counting = true;
  } 

  else {
    clearInterval(timer);
    startStopButton.textContent = "Start";
    counting = false;
  }
}


//Reset the stopwatch
resetButton.addEventListener('click', resetStopwatch);
function resetStopwatch() {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  startStopButton.textContent = "Start";
  counting = false;
}
