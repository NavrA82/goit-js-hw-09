import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ref = {
  bodyView: document.querySelector('body'),
  form: document.querySelector('form'),
  button: document.querySelector('button'),
  label: document.querySelectorAll('label'),
  inputDelay: document.querySelector('input[name="delay"]'),
  inputStep: document.querySelector('input[name="step"]'),
  inputAmount: document.querySelector('input[name="amount"]'),
};

ref.label.forEach(element => {
  element.style.cssText = `display: flex; row-gap: 12px; flex-direction: column; color: #f6c218; font-size: 20px;`;
});

ref.button.style.cssText = `background-color: #08aa31c2; font-size: large; color: #f6c218; padding: 10px 10px; border: 2px solid #f6c218; border-radius: 8px; cursor: pointer; max-width: 200px; box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;`;

ref.form.style.cssText = `padding: 20px 40px; border: 2px solid #f6c218; border-radius: 8px; display: flex; gap: 20px; align-items: center;
flex-direction: column; max-width: 320px; width: 80%; background-color: #3d8c6a; border-radius: 10px; flex-direction: column; align-items: center; gap: 20px; margin-top: 10vh; padding: 20px;`;

ref.bodyView.style.cssText = `background-color: rgba(238,191,49,0.5); display: flex; gap: 20px; align-items: center; flex-direction: column;`;

Notify.success('Sol lucet omnibus');
Notify.failure('Qui timide rogat docet negare');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
