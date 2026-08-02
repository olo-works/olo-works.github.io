console.log('main.js loaded, rail:', document.getElementById('rail'));

// ── Custom cursor ──────────────────────────────────────────────────────────
// Total rewrite, period-first rather than a cleanup of the old design.
// The old dot+halo pair is gone — a second element orbiting the cursor is
// itself a modern (2010s+) web convention; no era-authentic UI paired a
// cursor with a trailing ring. Real cursors from that period were a single
// flat sprite with a fixed hotspot at the tip, not centered on the pointer.
//
// This is a single solid triangle, built with the classic CSS border-arrow
// trick (a genuinely old technique — borders meeting at angles to fake a
// shape, long since replaced by clip-path in modern practice). No easing,
// no transitions anywhere — state changes cut instantly, the way menu
// cursors of that era actually behaved.
const cur  = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');

const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

if (cur && !isTouchDevice) {

  // The old markup includes a #cursor-ring element from the shared page
  // template — not used by this design, so it's just hidden rather than
  // requiring every page's HTML to be edited.
  if (ring) ring.style.display = 'none';

  const cursorStyle = document.createElement('style');
  cursorStyle.textContent = `
    #cursor {
      pointer-events: none;
      position: fixed;
      z-index: 9999;
      width: 0;
      height: 0;
      top: 0;
      left: 0;
    }
  `;
  document.head.appendChild(cursorStyle);

  const HOVER_SELECTOR = 'a, button, [role="button"], .tool-logo, .map-city-pin, .discipline-col, .interest-card, .lang-item, .img-item';

  // Flat right-pointing triangle via border trick. Tip sits at the actual
  // pointer position (translate(0,-50%) — hotspot at the point, not center).
  function setDefaultShape() {
    cur.style.borderTop    = '6px solid transparent';
    cur.style.borderBottom = '6px solid transparent';
    cur.style.borderLeft   = '11px solid var(--teal)';
    cur.style.borderRight  = '0';
    cur.style.transform    = 'translate(0,-50%)';
    cur.style.background   = 'transparent';
  }

  // Hover state: larger, filled solid — an instant cut, not a grown/eased
  // version of the same shape. Reads as "this row is selected."
  function setHoverShape() {
    cur.style.borderTop    = '9px solid transparent';
    cur.style.borderBottom = '9px solid transparent';
    cur.style.borderLeft   = '16px solid var(--teal)';
    cur.style.borderRight  = '0';
    cur.style.transform    = 'translate(0,-50%)';
    cur.style.background   = 'transparent';
  }

  let hovering = false;
  setDefaultShape();

  // 1:1 tracking, no interpolation/lag of any kind.
  document.addEventListener('mousemove', e => {
    cur.style.left = e.clientX + 'px';
    cur.style.top  = e.clientY + 'px';
  });

  // Press feedback is an instant size drop, not an eased scale.
  document.addEventListener('mousedown', () => {
    if (hovering) {
      cur.style.borderTop    = '7px solid transparent';
      cur.style.borderBottom = '7px solid transparent';
      cur.style.borderLeft   = '13px solid var(--teal)';
    } else {
      cur.style.borderTop    = '5px solid transparent';
      cur.style.borderBottom = '5px solid transparent';
      cur.style.borderLeft   = '9px solid var(--teal)';
    }
  });
  document.addEventListener('mouseup', () => {
    hovering ? setHoverShape() : setDefaultShape();
  });

  document.addEventListener('mouseover', e => {
    if (e.target.closest(HOVER_SELECTOR)) {
      hovering = true;
      setHoverShape();
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(HOVER_SELECTOR)) {
      hovering = false;
      setDefaultShape();
    }
  });

} else if (ring) {
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