const canvas = document.getElementById("myCanvas");

function resizeCanvas() {
  canvas.height = window.innerHeight;
  canvas.width = 200;
}

// Run 100ms after resize event stops
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(resizeCanvas, 100);
});

resizeCanvas();

const ctx = canvas.getContext("2d");
const car = new Car(100, 100, 30, 50);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  car.update();
  car.draw(ctx);
  requestAnimationFrame(animate);
}

animate();
