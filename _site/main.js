console.log('main.js loaded, rail:', document.getElementById('rail'));

console.log('main.js loaded, rail:', document.getElementById('rail'));

// ── Custom cursor ──────────────────────────────────────────────────────────
const cur  = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');

const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

if (cur && ring && !isTouchDevice) {
  const cursorStyle = document.createElement('style');
  cursorStyle.textContent = `
    #cursor, #cursor-ring {
      pointer-events: none;
      position: fixed;
      z-index: 9999;
    }
  `;
  document.head.appendChild(cursorStyle);

  cur.style.background    = '#A5332D';
  cur.style.width         = '10px';
  cur.style.height        = '10px';
  cur.style.borderRadius  = '50%';
  cur.style.transform     = 'translate(-50%,-50%)';

  ring.style.borderColor  = '#E8EEF1';
  ring.style.borderWidth  = '1.5px';
  ring.style.borderStyle  = 'solid';
  ring.style.background   = 'transparent';
  ring.style.width        = '36px';
  ring.style.height       = '36px';
  ring.style.borderRadius = '50%';
  ring.style.transform    = 'translate(-50%,-50%)';

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  let clicking    = false;

  document.addEventListener('mousedown', () => {
    clicking = true;
    cur.style.transform  = 'translate(-50%,-50%) scale(1.8)';
    ring.style.transform = 'translate(-50%,-50%) scale(1.5)';
  });
  document.addEventListener('mouseup', () => {
    clicking = false;
    cur.style.transform  = 'translate(-50%,-50%) scale(1)';
    ring.style.transform = 'translate(-50%,-50%) scale(1)';
  });

  function onEnter() {
    cur.style.borderRadius = '4px';
    cur.style.width        = '16px';
    cur.style.height       = '16px';
    ring.style.borderRadius = '12px';
    ring.style.width        = '40px';
    ring.style.height       = '40px';
  }

  function onLeave() {
    cur.style.borderRadius = '50%';
    cur.style.width        = '10px';
    cur.style.height       = '10px';
    ring.style.borderRadius = '50%';
    ring.style.width        = '36px';
    ring.style.height       = '36px';
  }

  document.addEventListener('mouseover', e => {
    if (e.target.closest('a, button, [role="button"], .tool-logo, .map-city-pin, .discipline-col, .interest-card, .lang-item, .img-item')) {
      onEnter();
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest('a, button, [role="button"], .tool-logo, .map-city-pin, .discipline-col, .interest-card, .lang-item, .img-item')) {
      onLeave();
    }
  });

  cur.style.transition  = 'width .18s, height .18s, border-radius .18s, transform .12s';
  ring.style.transition = 'width .22s, height .22s, border-radius .22s, transform .14s';

  (function anim() {
    cur.style.left  = mx + 'px';
    cur.style.top   = my + 'px';
    rx += (mx - rx) * .12;
    ry += (my - ry) * .12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(anim);
  })();

} else if (cur && ring) {
  ring.style.display = 'none';
}

// ── Rail ───────────────────────────────────────────────────────────────────
const rail = document.getElementById('rail');
if (rail) {
  if (sessionStorage.getItem('railOpen') === 'true') {
    rail.classList.add('rail-open');
  }
  rail.addEventListener('mouseenter', () => {
    sessionStorage.setItem('railOpen', 'true');
    rail.classList.add('rail-open');
  });
  rail.addEventListener('mouseleave', () => {
    setTimeout(() => {
      if (!rail.matches(':hover')) {
        sessionStorage.setItem('railOpen', 'false');
        rail.classList.remove('rail-open');
      }
    }, 300);
  });
}

// ── Mobile nav ────────────────────────────────────────────────────────────
document.querySelectorAll('.mob-item').forEach(item => {
  item.addEventListener('click', function(e) {
    const href    = this.getAttribute('href');
    const current = document.querySelector('.mob-item.active');
    if (current === this) return;
    e.preventDefault();
    if (current) current.classList.remove('active');
    this.classList.add('active');
    setTimeout(() => { window.location.href = href; }, 400);
  });
});