import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ref = {
  bodyView: document.querySelector('body'),
  form: document.querySelector('form'),
  button: document.querySelector('button'),
  label: document.querySelectorAll('label'),
  input: document.querySelectorAll('input'),
};

ref.label.forEach(element => {
  element.style.cssText = `
  display: flex; 
  row-gap: 12px;
  flex-direction: column; 
  color: #f6c218; 
  font-size: 20px;`;
});

ref.input.forEach(element => {
  element.style.cssText = `    
  width: 100%;
  color: #08aa31;
  font-size: 20px;
  background-color: #f6c218;
  border-radius: 5px;
  padding: 10px;
  font-weight: 900;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }`;
});

ref.button.style.cssText = `
  background-color: #08aa31c2; 
  font-size: large; 
  color: #f6c218; 
  padding: 10px 10px; 
  border: 2px solid #f6c218; 
  border-radius: 8px; 
  cursor: pointer; 
  max-width: 200px; 
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;`;

ref.form.style.cssText = `
  padding: 20px 40px; 
  border: 2px solid #f6c218; 
  border-radius: 8px; 
  display: flex; 
  gap: 20px; 
  align-items: center;
  flex-direction: column;
  max-width: 320px;
  width: 80%; 
  background-color: #3d8c6a; 
  border-radius: 10px; 
  padding: 20px;`;

ref.bodyView.style.cssText = `
background-color: rgba(238,191,49,0.5); 
display: flex; 
gap: 20px; 
align-items: center; 
flex-direction: column;`;

ref.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = {
    delay: Number(ref.form.delay.value),
    step: Number(ref.form.step.value),
    amount: ref.form.amount.value,
  };

  let delay = formData.delay;

  for (let i = 0; i < formData.amount; i++) {
    createPromise(formData.delay, delay)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
        //console.log(`✅ Fulfilled promise ${position} in ${delay}ms`
      })

      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`);
        //console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delay += formData.step;
  }
  ref.form.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
