document.getElementById("scheduleForm")?.addEventListener("submit", function() {
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const message = document.getElementById("message");
  message.value += `\n\nBooking Details:\nDate: ${date}\nTime: ${time}`;
});

// Scroll animations
const elements = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

const canvas = document.getElementById("heroCanvas");
if(canvas){
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  for(let i=0;i<60;i++){
    particles.push({
      x:Math.random()*canvas.width,
      y:Math.random()*canvas.height,
      vx:(Math.random()-0.5)*0.5,
      vy:(Math.random()-0.5)*0.5
    });
  }

  function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{
      p.x+=p.vx;
      p.y+=p.vy;

      ctx.beginPath();
      ctx.arc(p.x,p.y,2,0,Math.PI*2);
      ctx.fillStyle="#14b8a6";
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// INIT for pages
initParticles("heroCanvas");
initParticles("formCanvas");