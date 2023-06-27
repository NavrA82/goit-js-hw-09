const ref = {
  buttonStart: document.querySelector('[data-start]'),
  buttonStop: document.querySelector('[data-stop]'),
  bodyView: document.querySelector('body'),
  audioPlayer: document.querySelector('#audio-player'),
};

let intervalId = null;

ref.buttonStart.style.cssText = `
background-color: #08aa31c2; 
font-size: large; 
color: #f6c218; 
padding: 20px 40px; 
border: 2px solid #f6c218; 
border-radius: 8px; 
cursor: pointer; 
box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;`;

ref.buttonStop.style.cssText = `
  background-color: rgba(239, 239, 239, 0.3); 
  font-size: large; 
  color:  rgba(16, 16, 16, 0.3), rgba(255, 255, 255, 0.3); 
  padding: 20px 40px; 
  border: 2px solid rgba(118, 118, 118, 0.3), rgba(195, 195, 195, 0.3);  
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  `;

ref.buttonStop.disabled = true;

ref.bodyView.style.cssText = `
  background-color: rgba(238,191,49,0.5); 
  display: flex; 
  gap: 20px; 
  align-items: center;
  flex-direction: column;
`;

ref.audioPlayer.style.cssText = `opacity: 0; margin-top: 500px;`;

ref.audioPlayer.volume = 0.2;

ref.buttonStart.addEventListener('click', () => {
  ref.audioPlayer.play();

  intervalId = setInterval(() => {
    ref.bodyView.style.cssText = `
    background-color: ${getRandomHexColor()}; 
    display: flex; 
    gap: 20px; 
    align-items: center;
    flex-direction: column;`;
  }, 1000);

  ref.buttonStart.disabled = true;
  ref.buttonStop.disabled = false;

  ref.buttonStart.style.cssText = `
  background-color: rgba(239, 239, 239, 0.3); 
  font-size: large; 
  color: rgba(16, 16, 16, 0.3), 
  rgba(255, 255, 255, 0.3); 
  padding: 20px 40px; 
  border: 2px solid rgba(118, 118, 118, 0.3), rgba(195, 195, 195, 0.3); 
  border-radius: 8px; 
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;`;

  ref.buttonStop.style.cssText = `
  background-color: #e42525cd; 
  font-size: large; 
  color: #f6c218; 
  padding: 20px 40px; 
  border: 2px solid #f6c218; 
  border-radius: 8px; 
  cursor: pointer; 
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;`;
});

ref.buttonStop.addEventListener('click', () => {
  clearInterval(intervalId);

  ref.audioPlayer.pause();

  ref.buttonStart.disabled = false;

  ref.buttonStop.disabled = true;

  ref.buttonStart.style.cssText = `
    background-color: #08aa31c2; 
    font-size: large; 
    color: #f6c218; 
    padding: 20px 40px; 
    border: 2px solid #f6c218; 
    border-radius: 8px;
    cursor: pointer; 
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  `;

  ref.buttonStop.style.cssText = `
    background-color: rgba(239, 239, 239, 0.3); 
    font-size: large; color:  rgba(16, 16, 16, 0.3), rgba(255, 255, 255, 0.3); 
    padding: 20px 40px; 
    border: 2px solid rgba(118, 118, 118, 0.3), rgba(195, 195, 195, 0.3);  
    border-radius: 8px; box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  `;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
