
function setup() {
  createCanvas(500, 500);

  frameRate(60)
}
function draw() {
  let x = mouseX;
  let y = mouseY;
  let ix = width - x;
  let iy = height - y;
  if (keyIsPressed) background(126)
  else background(x - y, (x + y) % 255, (x * y) % 255);
  let colorR = x % 255;
  let colorG = y % 255;
  let colorB = (x * y) % 255;
  if (keyIsPressed) fill(255);
  else fill(colorR, colorG, colorB);
  ellipse(x, y, y, y);
  if (keyIsPressed) fill(0)
  else fill(255 - colorR, 255 - colorG, 255 - colorB);
  ellipse(ix, iy, iy, iy);
}