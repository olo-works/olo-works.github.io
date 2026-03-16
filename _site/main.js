console.log('main.js loaded, rail:', document.getElementById('rail'));

// Custom cursor
const cur = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
if (cur && ring) {
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});
  (function anim(){
    cur.style.left=mx+'px';cur.style.top=my+'px';
    rx+=(mx-rx)*.12;ry+=(my-ry)*.12;
    ring.style.left=rx+'px';ring.style.top=ry+'px';
    requestAnimationFrame(anim);
  })();
  document.querySelectorAll('a,button').forEach(el=>{
    el.addEventListener('mouseenter',()=>{cur.style.width='16px';cur.style.height='16px';ring.style.width='52px';ring.style.height='52px';});
    el.addEventListener('mouseleave',()=>{cur.style.width='10px';cur.style.height='10px';ring.style.width='36px';ring.style.height='36px';});
  });
}
// Keep rail expanded after navigation if mouse was over it
const rail = document.getElementById('rail');

if (sessionStorage.getItem('railOpen') === 'true') {
  rail.classList.add('rail-open');
}

rail.addEventListener('mouseenter', () => {
  sessionStorage.setItem('railOpen', 'true');
  rail.classList.add('rail-open');
});

rail.addEventListener('mouseleave', () => {
  // Small delay so click navigation doesn't clear it
  setTimeout(() => {
    if (!rail.matches(':hover')) {
      sessionStorage.setItem('railOpen', 'false');
      rail.classList.remove('rail-open');
    }
  }, 300);
});

// Mobile nav animation
document.querySelectorAll('.mob-item').forEach(item => {
  item.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    const current = document.querySelector('.mob-item.active');
    if (current === this) return;
    e.preventDefault();

    // deselect current
    if (current) {
      current.classList.remove('active');
    }

    // select new
    this.classList.add('active');

    // navigate after animation completes
    setTimeout(() => {
      window.location.href = href;
    }, 400);
  });
});
