const hello = document.querySelector('#hello');
const stars = document.querySelector('#stars');
const signal = document.querySelector('#signal');
const blackout = document.querySelector('#blackout');
const starfield = document.querySelector('#starfield');
let started = false;
for (let i = 0; i < 100; i++) {
  const star = document.createElement('span');
  star.className = i % 9 === 0 ? 'star cross' : 'star';
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.setProperty('--duration', `${2 + Math.random() * 4}s`);
  star.style.setProperty('--delay', `${-Math.random() * 6}s`);
  starfield.appendChild(star);
}
function beginSurprise() {
  if (started) return;
  started = true;
  hello.hidden = true;
  stars.hidden = false;
  stars.focus();
  // Give the message a moment before revealing the signal.
  setTimeout(() => {
    signal.hidden = false;
    stars.classList.add('revealed');
    // The full signal stays on screen for thirty seconds.
    setTimeout(() => {
      stars.hidden = true;
      blackout.hidden = false;
      document.body.style.background = '#000';
      document.querySelector('meta[name="theme-color"]').content = '#000000';
    }, 30000);
  }, 3500);
}
document.querySelectorAll('.choices button').forEach(button => {
  button.addEventListener('click', beginSurprise);
});
