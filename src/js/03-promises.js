import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ref = {
  bodyView: document.querySelector('body'),
};
ref.bodyView.style.cssText = `background-color: #a9a8a8; display: flex; gap: 20px; align-items: center;
flex-direction: column;`;

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
