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
