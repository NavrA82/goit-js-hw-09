const ref = {
  buttonStart: document.querySelector('[data-start]'),
  buttonStop: document.querySelector('[data-stop]'),
  bodyView: document.querySelector('body'),
};

let intervalId = null;

ref.buttonStart.style.cssText = `background-color: #08aa31c2; font-size: large; color: #f6c218; padding: 20px 40px; border: 2px solid #f6c218; border-radius: 8px; cursor: pointer;`;
ref.buttonStop.style.cssText = `background-color: rgba(239, 239, 239, 0.3); font-size: large; color:  rgba(16, 16, 16, 0.3), rgba(255, 255, 255, 0.3); padding: 20px 40px; border: 2px solid rgba(118, 118, 118, 0.3), rgba(195, 195, 195, 0.3);  border-radius: 8px;`;

ref.buttonStop.disabled = true;

ref.bodyView.style.cssText = `background-color: #a9a8a8; display: flex; gap: 20px; align-items: center;
flex-direction: column;`;

ref.buttonStart.addEventListener('click', () => {
  // audio.play();

  intervalId = setInterval(() => {
    ref.bodyView.style.cssText = `background-color: ${getRandomHexColor()}; display: flex; gap: 20px; align-items: center;
flex-direction: column;`;
  }, 1000);

  ref.buttonStart.disabled = true;
  ref.buttonStop.disabled = false;

  ref.buttonStart.style.cssText = `background-color: rgba(239, 239, 239, 0.3); font-size: large; color: rgba(16, 16, 16, 0.3), rgba(255, 255, 255, 0.3); padding: 20px 40px; border: 2px solid rgba(118, 118, 118, 0.3), rgba(195, 195, 195, 0.3); border-radius: 8px; `;
  ref.buttonStop.style.cssText = `background-color: #e42525cd; font-size: large; color: #f6c218; padding: 20px 40px; border: 2px solid #f6c218; border-radius: 8px; cursor: pointer;`;
});

ref.buttonStop.addEventListener('click', () => {
  clearInterval(intervalId);

  // audio.pause();

  ref.buttonStart.disabled = false;
  ref.buttonStop.disabled = true;

  ref.buttonStart.style.cssText = `background-color: #08aa31c2; font-size: large; color: #f6c218; padding: 20px 40px; border: 2px solid #f6c218; border-radius: 8px; cursor: pointer;`;
  ref.buttonStop.style.cssText = `background-color: rgba(239, 239, 239, 0.3); font-size: large; color:  rgba(16, 16, 16, 0.3), rgba(255, 255, 255, 0.3); padding: 20px 40px; border: 2px solid rgba(118, 118, 118, 0.3), rgba(195, 195, 195, 0.3);  border-radius: 8px;`;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const audioMarkUp = /*html*/ `<audio src="/goit-js-hw-09/next-level.mp3" class="audio" id="audio-player" controls type="audio/mpeg"></audio>`;

// ref.buttonStop.insertAdjacentHTML('afterend', audioMarkUp);
// const audio = new Audio('/goit-js-hw-09/next-level.mp3');

// const audio = document.querySelector('#audio-player');
// console.log(audio);
// console.dir(audio);

// console.log(ref.bodyView);
