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
const road = new Road(canvas.width / 2, canvas.width * 0.9); // leave 10% margin (5% each side)
const car = new Car(road.getLaneCenter(5), 100, 30, 50);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  car.update();
  road.draw(ctx);
  car.draw(ctx);
  requestAnimationFrame(animate);
}

animate();
