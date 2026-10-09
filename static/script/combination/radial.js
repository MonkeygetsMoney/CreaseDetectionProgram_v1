function setup() {
  createCanvas(400, 400);
  background(220);
  noStroke();

  // Create radial gradient: (x0, y0, r0, x1, y1, r1)
  let cx = width / 2;
  let cy = height / 2;
  let radGradient = drawingContext.createRadialGradient(cx, cy, 0, cx, cy, 100);
  
  radGradient.addColorStop(0, 'yellow');    // Center color
  //radGradient.addColorStop(0.6, 'orangered'); // Middle color
  radGradient.addColorStop(1, 'red'); // Outer color

  drawingContext.fillStyle = radGradient;
  
  // Draw circle
  circle(cx, cy, 200);
}
