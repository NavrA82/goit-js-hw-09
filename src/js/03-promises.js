const ref = {
  bodyView: document.querySelector('body'),
};
ref.bodyView.style.cssText = `background-color: #a9a8a8; display: flex; gap: 20px; align-items: center;
flex-direction: column;`;

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
