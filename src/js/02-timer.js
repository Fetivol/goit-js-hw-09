import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
let selectedDate;
let dateDifference;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0].getTime();
    dateDifference = selectedDate - options.defaultDate.getTime();
    wrongDate();
    selectors.startButEl.addEventListener('click', countDownTimer);
  },
};

const selectors = {
  inputEl: document.querySelector('#datetime-picker'),
  startButEl: document.querySelector('button[data-start]'),
  dayEl: document.querySelector('.value[data-days]'),
  hourEl: document.querySelector('.value[data-hours]'),
  minEl: document.querySelector('.value[data-minutes]'),
  secEl: document.querySelector('.value[data-seconds]'),
};
selectors.startButEl.disabled = true;

flatpickr(selectors.inputEl, options);

function wrongDate() {
  if (selectedDate >= options.defaultDate.getTime()) {
    selectors.startButEl.disabled = false;
  } else {
    window.alert('Please choose a date in the future');
    selectors.startButEl.disabled = true;
  }
}

function countDownTimer() {
  const intervalId = setInterval(() => {
    dateDifference -= 1000;
    const { days, hours, minutes, seconds } = convertMs(dateDifference);
    selectors.dayEl.textContent = addLeadingZero(days);
    selectors.hourEl.textContent = addLeadingZero(hours);
    selectors.minEl.textContent = addLeadingZero(minutes);
    selectors.secEl.textContent = addLeadingZero(seconds);
    if (dateDifference < 1000) {
      clearInterval(intervalId);
    }
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  if (value.toString().length >= 2) {
    return value;
  }
  return value.toString().padStart(2, '0');
}
