const refs = {
  timer: document.querySelector("#timer-1"),
  days: document.querySelector("span[data-value='days']"),
  hours: document.querySelector("span[data-value='hours']"),
  mins: document.querySelector("span[data-value='mins']"),
  secs: document.querySelector("span[data-value='secs']"),
};

function countdownTimer() {
  updateTimer(0);
  const targetDate = new Date("March 19, 2021");

  const intervalId = setInterval(() => {
    const currentTime = Date.now();

    const deltaTime = targetDate - currentTime;
    updateTimer(deltaTime);

    if (currentTime >= targetDate) {
      clearInterval(intervalId);
      updateTimer(0);
    }
  }, 1000);
}

countdownTimer();

function updateTimer(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}

function pad(value) {
  return String(value).padStart(2, "0");
}
