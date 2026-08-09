// Anchor Design Journal interactions

const theme = {
  accent: 'Terracotta',
  photoTilt: true,
};

const accents = {
  Terracotta: '#B5502E',
  Ocean: '#3A6B8A',
  Lavender: '#7A6A9E',
  Golden: '#9A7B1E',
};

function applyTheme() {
  const root = document.documentElement;
  root.style.setProperty('--acc', accents[theme.accent] || accents.Terracotta);
  root.style.setProperty('--t1', theme.photoTilt ? '-1.4deg' : '0deg');
  root.style.setProperty('--t2', theme.photoTilt ? '1.2deg' : '0deg');
  root.style.setProperty('--t3', theme.photoTilt ? '-0.8deg' : '0deg');
}

let lightboxOverlay = null;

function closeLightbox() {
  if (lightboxOverlay) {
    lightboxOverlay.remove();
    lightboxOverlay = null;
  }
}

function openLightbox(src) {
  closeLightbox();

  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';

  const image = document.createElement('img');
  image.className = 'lightbox-image';
  image.src = src;
  image.alt = '';

  image.addEventListener('click', (event) => {
    event.stopPropagation();
    const zoomed = image.classList.toggle('is-zoomed');

    if (zoomed) {
      image.style.width = `${Math.max(image.naturalWidth * 1.5, window.innerWidth * 0.95)}px`;
    } else {
      image.style.width = '';
    }
  });

  overlay.addEventListener('click', closeLightbox);
  overlay.appendChild(image);
  document.body.appendChild(overlay);
  lightboxOverlay = overlay;
}

document.addEventListener('DOMContentLoaded', () => {
  applyTheme();

  document.addEventListener('click', (event) => {
    const target = event.target.closest?.('[data-zoom]');
    if (target?.src) {
      openLightbox(target.src);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  });
});
