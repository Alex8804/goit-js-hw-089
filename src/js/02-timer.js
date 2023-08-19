import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('button[data-start]');
const date = new Date();

startBtn.addEventListener('click', onStartBtnClick);
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() <= date.getTime()) {
      window.alert('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
    }
  },
};

function onStartBtnClick() {}

flatpickr('#datetime-picker', options);

// const date = new Date();
// console.log(date);
