import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const selectors = {
  delayEl: formEl.elements.delay,
  stepEl: formEl.elements.step,
  amountEl: formEl.elements.amount,
  submitEl: formEl.children[3],
};

// let fulfilledCount = 0;
// let rejectedCount = 0;
let amount = 0;

formEl.addEventListener('submit', promiseGenerator);

function promiseGenerator(evt) {
  evt.preventDefault();
  let delay = Number(selectors.delayEl.value);
  const step = Number(selectors.stepEl.value);
  amount = Number(selectors.amountEl.value);

  setTimeout(() => {
    for (let position = 1; position <= amount; position += 1) {
      createPromise(position, delay)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
          // fulfilledCount += 1;
          // checkCompletion();
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
          // rejectedCount += 1;
          // checkCompletion();
        });
      delay += step;
    }
  }, delay);
  formEl.reset();
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
}

// function checkCompletion() {
//   if (fulfilledCount + rejectedCount === amount) {
//     formEl.reset();
//   }
// }
