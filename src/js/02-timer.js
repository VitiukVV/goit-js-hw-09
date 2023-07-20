import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  width: '300px',
  clickToClose: true,
});

const startBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let startTime = 0;
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  //   заблокувати вибір невалідної дати(минуле) опцією!
  // minDate: this.defaultDate,
  onClose(selectedDates) {
    if (selectedDates[0] - Date.now() < 0) {
      Notify.failure('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      startTime = selectedDates[0];
    }
  },
};

const flatpickr = flatpickr('input#datetime-picker', options);
startBtn.addEventListener('click', startTimer);

function startTimer(event) {
  startBtn.disabled = true;
  timer.start();
}

const timer = {
  timerID: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    this.timerID = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;

      if (deltaTime < 1000) {
        this.stop();
        Notify.success('That time has come', {
          timeout: 6000,
          position: 'center-center',
          fontSize: '20px',
        });
      }

      const { days, hours, minutes, seconds } = convertMs(deltaTime);
      daysEl.textContent = days;
      hoursEl.textContent = hours;
      minutesEl.textContent = minutes;
      secondsEl.textContent = seconds;
    }, 1000);
  },
  stop() {
    clearInterval(this.timerID);
    this.isActive = false;
  },
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
