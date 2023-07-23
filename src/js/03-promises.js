import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  width: '300px',
  clickToClose: true,
});

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget.elements;
  let delayInput = Number(delay.value);
  let amountValue = 0;
  let position = 0;

  const intervalId = setInterval(() => {
    if (amountValue === Number(amount.value)) {
      clearInterval(intervalId);
      return;
    }
    amountValue += 1;
    position += 1;

    createPromise(position, delayInput)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayInput += Number(step.value);
  }, 0);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
