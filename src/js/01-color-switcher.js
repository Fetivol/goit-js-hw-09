const selectors = {
  startButEl: document.querySelector('button[data-start]'),
  stopButEl: document.querySelector('button[data-stop]'),
  bodyEl: document.body,
};
let interval = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
selectors.stopButEl.disabled = true;

selectors.startButEl.addEventListener('click', () => {
  selectors.startButEl.disabled = true;
  selectors.stopButEl.disabled = false;
  interval = setInterval(() => {
    selectors.bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

selectors.stopButEl.addEventListener('click', () => {
  clearInterval(interval);
  selectors.startButEl.disabled = false;
  selectors.stopButEl.disabled = true;
});
