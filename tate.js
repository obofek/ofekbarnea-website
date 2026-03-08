// ===== HERO TITLE RANDOMIZER =====
const headlines = [
  ['היה', 'מוכן'],
  ['דע את', 'הכללים'],
  ['כבוש את', 'המשחק'],
  ['חמוש', 'בארצנו'],
  ['שלוט', 'בתהליך']
];

const titleEl = document.getElementById('heroTitle');
if (titleEl) {
  const pick = headlines[Math.floor(Math.random() * headlines.length)];
  titleEl.innerHTML = pick.map(w => `<span class="t-grad-text">${w}</span>`).join('');
}

// ===== CAROUSEL =====
const track   = document.getElementById('cTrack');
const slides  = Array.from(document.querySelectorAll('.t-slide'));
const dots    = Array.from(document.querySelectorAll('.t-dot'));
const arrowL  = document.getElementById('arrowL');
const arrowR  = document.getElementById('arrowR');

let current = 0;

function getOffset(index) {
  const viewport = track.parentElement;
  const slide    = slides[index];
  const vpW      = viewport.offsetWidth;
  const slideW   = slide.offsetWidth;
  // Center the target slide inside the viewport
  return slide.offsetLeft - (vpW / 2) + (slideW / 2);
}

function goTo(i) {
  current = (i + slides.length) % slides.length;

  // Move track
  track.style.transform = `translateX(-${getOffset(current)}px)`;

  // Update active states
  slides.forEach((s, idx) => s.classList.toggle('active', idx === current));
  dots.forEach((d, idx)   => d.classList.toggle('active', idx === current));
}

// Init
goTo(0);

// Arrow clicks
arrowL.addEventListener('click', () => goTo(current - 1));
arrowR.addEventListener('click', () => goTo(current + 1));

// Dot clicks
dots.forEach(d => d.addEventListener('click', () => goTo(+d.dataset.i)));

// Slide clicks
slides.forEach((s, i) => s.addEventListener('click', () => goTo(i)));

// Recalculate on resize
window.addEventListener('resize', () => goTo(current));
