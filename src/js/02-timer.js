import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Report } from 'notiflix/build/notiflix-report-aio';

const ref = {
  bodyView: document.querySelector('body'),
  input: document.querySelector('#date-time-picker'),
  buttonStart: document.querySelector('[data-start]'),
  valueDays: document.querySelector('[data-days]'),
  valueHours: document.querySelector('[data-hours]'),
  valueMinutes: document.querySelector('[data-minutes]'),
  valueSeconds: document.querySelector('[data-seconds]'),
  timer: document.querySelector('.timer'),
  field: document.querySelectorAll('.field'),
  value: document.querySelectorAll('.value'),
  label: document.querySelectorAll('.label'),
};

const newParagraph = document.createElement('p');
newParagraph.textContent =
  'SELECT A FUTURE DATE AND TIME TO START THE COUNTDOWN';
ref.input.insertAdjacentElement('beforebegin', newParagraph);
ref.input.previousSibling.style.cssText = `background-color: #e42525cd;  font-weight: 900; color: #f6c218; padding: 8px 4px; border: 2px solid #f6c218; border-radius: 8px; text-align: center;  font-size: 16px; width: 308px; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;`;

const buttonReset = document.createElement('button');
buttonReset.textContent = 'Reset';
ref.buttonStart.insertAdjacentElement('afterend', buttonReset);
buttonReset.style.cssText = `display: none;`;

ref.bodyView.style.cssText = `background-color: #a9a8a8; display: flex; gap: 20px; align-items: center;
flex-direction: column;`;

ref.input.style.cssText = `background-color: #08aa31c2; font-size: large; color: #f6c218; padding: 12px 4px; border: 2px solid #f6c218; border-radius: 8px;  text-align: center; font-weight: 900; font-size: 28px; outline: none; width: 308px;`;

ref.buttonStart.style.cssText = `background-color: rgba(239, 239, 239, 0.3); font-size: large; color: rgba(16, 16, 16, 0.3), rgba(255, 255, 255, 0.3); padding: 20px 40px; border: 2px solid rgba(118, 118, 118, 0.3), rgba(195, 195, 195, 0.3); border-radius: 8px; width: 128px; box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;`;
ref.buttonStart.disabled = true;

ref.timer.style.cssText = `display: flex; gap: 8px; margin-top: 240px; `;

ref.field.forEach(element => {
  element.style.cssText = `background-color: #08aa31c2; color: #f6c218; padding: 0; border: 2px solid #f6c218; border-radius: 8px;  text-align: center; outline: none; width: 84px; display: flex; align-items: center; justify-content: center;
flex-direction: column;  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;`;
});

ref.value.forEach(element => {
  element.style.cssText = `background-color: #08aa31c2; font-size: 28px; color: #212121; padding: 0;  text-align: center; font-weight: 700;`;
});

ref.label.forEach(element => {
  element.style.cssText = `background-color: #08aa31c2; color: #f6c218; padding: 0; text-align: center; font-weight: 400; font-size: 16px;`;
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let ms = selectedDates[0] - options.defaultDate;

    if (ms <= 0) {
      // window.alert('Please choose a date in the future');
      Report.warning(
        'Please choose a date in the future.',
        'It seems, that you are from the country where the cruiser "Moscow" sank.',
        'Sorry, I will be more careful'
      );
    } else {
      ref.buttonStart.disabled = false;
      ref.buttonStart.style.cssText = `background-color: #08aa31c2; font-size: large; color: #f6c218; padding: 20px 40px; border: 2px solid #f6c218; border-radius: 8px; cursor: pointer; width: 128px; box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;`;

      ref.buttonStart.addEventListener('click', () => {
        ref.buttonStart.style.cssText = `display: none;`;
        buttonReset.style.cssText = `background-color: #e42525cd; font-size: large; color: #f6c218; padding: 20px 40px; border: 2px solid #f6c218; border-radius: 8px; cursor: pointer; width: 128px; box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;`;
        ref.input.disabled = true;

        setInterval(() => {
          ms = ms - 1000;

          function addLeadingZero(value) {
            return value.toString().padStart(2, '0');
          }

          const timeComponents = convertMs(ms);

          ref.valueDays.textContent = addLeadingZero(timeComponents.days);

          ref.valueHours.textContent = addLeadingZero(timeComponents.hours);

          ref.valueMinutes.textContent = addLeadingZero(timeComponents.minutes);

          ref.valueSeconds.textContent = addLeadingZero(timeComponents.seconds);
        }, 1000);
      });
    }
  },
};

flatpickr('#date-time-picker', options);

buttonReset.addEventListener('click', () => {
  location.reload();
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// інший варіант функції вираховування відліку часу
// function getTimeComponents(time) {
//   const days = Math.floor(
//     (time % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
//   );
//   const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((time % (1000 * 60)) / 1000);
//   return { days, hours, minutes, seconds };
// }
