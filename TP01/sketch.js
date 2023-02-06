function setup() {
  createCanvas(640, 480);
  print("hello world");
  frameRate(10)
}

function draw() {
  if (mouseIsPressed) {

    fill(255);
    ellipse(mouseX, mouseY, 55, 55);
  }
  else {
    fill(random(255), random(255), random(255));
  }
  background(random(255), random(255), random(255), random(50));
  ellipse(random(640), random(480), 55, 55);
  line(random(640), random(480), random(640), random(480))
}