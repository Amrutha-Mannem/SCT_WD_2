let startTime, elapsed = 0, interval;
const timeDisplay = document.getElementById("time");
const laps = document.getElementById("laps");

function formatTime(ms) {
  let totalSeconds = Math.floor(ms / 1000);
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  let centiseconds = Math.floor((ms % 1000) / 10);
  return `${pad(minutes)}:${pad(seconds)}:${pad(centiseconds)}`;
}

function pad(num) {
  return num.toString().padStart(2, '0');
}

function updateDisplay() {
  timeDisplay.textContent = formatTime(elapsed);
}

document.getElementById("start").onclick = () => {
  if (!interval) {
    startTime = Date.now() - elapsed;
    interval = setInterval(() => {
      elapsed = Date.now() - startTime;
      updateDisplay();
    }, 10);
  }
};

document.getElementById("pause").onclick = () => {
  clearInterval(interval);
  interval = null;
};

document.getElementById("reset").onclick = () => {
  clearInterval(interval);
  interval = null;
  elapsed = 0;
  updateDisplay();
  laps.innerHTML = '';
};

document.getElementById("lap").onclick = () => {
  const li = document.createElement("li");
  li.textContent = formatTime(elapsed);
  laps.appendChild(li);
};
