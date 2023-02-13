

let colorBack = 0;
function setup() {
  createCanvas(500, 500);

  frameRate(60)
}
function draw() {
  let x = mouseX;
  let y = mouseY;
  let ix = width - x;
  let iy = height - y;
  if (keyIsPressed) colorBack += 5;
  background((y + colorBack) % 255, (x + colorBack) % 255, colorBack % 255);
  let colorR = (x + colorBack) % 255;
  let colorG = (y + colorBack) % 255;
  let colorB = (255 + colorBack) / 2;
  fill(colorR % 255, colorG % 255, colorB % 255);
  ellipse(x, y, y, y);
  fill((abs(255 - colorR) % 255), abs((255 - colorG) % 255), abs((255 - colorB) % 255));
  ellipse(ix, iy, iy, iy);
}