const { body } = document;
const toggle = document.querySelector('#mode-toggle input');

function setMode(mode) {
  localStorage.setItem('mode', mode);

  if (mode === 'light') {
    body.classList.add('light');
    toggle.checked = true;
  } else {
    body.classList.remove('light');
    toggle.checked = false;
  }
}

window.onload = () => {
  const saved = localStorage.getItem('mode');
  const preferred = window.matchMedia('prefers-color-scheme: light').matches
    ? 'light'
    : 'dark';
  setMode(saved || preferred);

  toggle.addEventListener('change', () =>
    setMode(toggle.checked ? 'light' : 'dark')
  );

  window
    .matchMedia('(prefers-color-scheme: light)')
    .addEventListener('change', (e) => setMode(e.matches ? 'light' : 'dark'));
};
