// Анимация фона с частицами
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let w, h;

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
resize();

const lines = Array.from({ length: 35 }, () => ({
  x: Math.random() * w,
  y: Math.random() * h,
  dx: (Math.random() - 0.5) * 0.4,
  dy: (Math.random() - 0.5) * 0.4
}));

function animate() {
  ctx.fillStyle = 'rgba(14,14,16,0.2)';
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = 'rgba(0,120,255,0.15)';
  
  lines.forEach(l => {
    l.x += l.dx;
    l.y += l.dy;
    if (l.x < 0 || l.x > w) l.dx *= -1;
    if (l.y < 0 || l.y > h) l.dy *= -1;
  });
  
  for (let i = 0; i < lines.length; i++) {
    for (let j = i + 1; j < lines.length; j++) {
      const a = lines[i], b = lines[j];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d < 120) {
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animate);
}

animate();