var initialSize = 700;
var mutableSize = initialSize;
var canvasSize = 700;
var speed = 0;
var control = false;

function setup() {
  smooth();
  createCanvas(canvasSize, canvasSize);
  background(200);
}

function draw() {
  speed = random(0, 30);

  if (!control) {
    mutableSize = mutableSize - speed;
    fill(200, 200, 200, 10);
    stroke(100, 100, 100);
    ellipse(mouseX, mouseY, mutableSize, mutableSize);
    if (mutableSize <= 0)
      control = true;
  }

  if (control) {
    mutableSize = mutableSize + speed;
    fill(200, 200, 200, 10);
    stroke(100, 100, 100);
    ellipse(mouseX, mouseY, mutableSize, mutableSize);
    if (mutableSize >= 700)
      control = false;
  }
  erase();
}

function mousePressed() {
  background(200);
}