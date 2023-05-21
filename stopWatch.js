const start = document.getElementById("start");
const reset = document.getElementById("reset");

let seconds = 0;
let minutes = 0;
let hours = 0;

let timerInterval = null;
let timerStatus = "stopped";

function count() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      // seconds=0;
      minutes = 0;
      hours++;
    }
  }
  let displayTimer = (document.getElementById("timer").innerText =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0"));
}

start.addEventListener("click", () => {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(count, 1000);
    document.getElementById("start").innerText = `Pause`;
    timerStatus = "Started";
  } else {
    clearInterval(timerInterval);
    document.getElementById("start").innerText = `Play`;
    timerStatus = "stopped";
  }
});
reset.addEventListener("click", () => {
  clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("timer").innerText = `00:00:00`;
  document.getElementById("start").innerText = `Play`;
  timerStatus="stopped"
});
