import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const ref = {
  bodyView: document.querySelector('body'),
  input: document.querySelector('#datetime-picker'),
  buttonStart: document.querySelector(['data-start']),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr('#datetime-picker', options);

ref.bodyView.style.cssText = `background-color: #a9a8a8; display: flex; gap: 20px; align-items: center;
flex-direction: column;`;
console.dir(ref.input);
