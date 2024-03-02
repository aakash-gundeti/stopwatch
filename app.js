//elements
const timer = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const milliseconds = document.getElementById('milliseconds');

let startTime = 0;
let interval = null;

startBtn.addEventListener('click',() => {
  startTime = Date.now();
  interval = setInterval(startStopwatch, 10);
})

stopBtn.addEventListener('click', () => {
  clearInterval(interval);
})

resetBtn.addEventListener('click', () => {
  startTime = 0;
  clearInterval(interval);
  hours.textContent = "00";
  minutes.textContent = "00";
  seconds.textContent = "00";
  milliseconds.textContent = "00";
})

function startStopwatch(){
  const elapsedTime = Date.now() - startTime;

  hours.textContent = Math.floor(elapsedTime / 360000).toString().padStart(2 , "0");
  minutes.textContent = Math.floor(elapsedTime / 60000).toString().padStart(2, "0");
  seconds.textContent = Math.floor((elapsedTime % 60000) / 1000).toString().padStart(2,"0");
  milliseconds.textContent = ((elapsedTime % (1000 * 60)) / 100).toFixed().toString().padStart(3, "0");
}