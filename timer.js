
let newYear = new Date('1 Jan 2022');

let daysElm = document.getElementById('days');
let hoursElm = document.getElementById('hours');
let minsElm = document.getElementById('mins');
let secondsElm = document.getElementById('seconds');

const beginCountdown = () => {
  let currYear = new Date();
  let diff = newYear - currYear;
  let totalSeconds = diff / 1000;
  let days = Math.floor(totalSeconds / 3600 / 24);
  let hours = Math.floor(totalSeconds / 3600) % 24;
  let minutes = Math.floor(totalSeconds / 60) % 60;
  let seconds = Math.floor(totalSeconds) % 60;

  daysElm.textContent = pad(days);
  hoursElm.textContent = pad(hours);
  minsElm.textContent = pad(minutes);
  secondsElm.textContent = pad(seconds);
}
const pad = time => {
  return time < 10 ? `0${time}` : time;
};


beginCountdown();
setInterval(beginCountdown, 500);