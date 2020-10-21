import './style.css';

const body = document.querySelector('body');
const toggle = document.querySelector('#mode-toggle input');

function toggleMode() {
    setMode(toggle.checked ? 'light' : 'dark');
}

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

window.matchMedia('(prefers-color-scheme: light)').addListener(
    e => setMode(e.matches ? 'light' : 'dark')
);

window.onload = (event) => {
    let saved = localStorage.getItem('mode');
    let preferred = window.matchMedia('prefers-color-scheme: light').matches ? 'light' : 'dark';
    setMode(saved || preferred);

    // Enable transitions after we've set the initial state
    // Don't want to see the transitions on page load!
    setTimeout(() => body.classList.remove('no-transitions'), 300);
}