var initialSize = 700;
var canvasSize = 700;
var speed = 10;

function setup() {
  smooth();
  createCanvas(canvasSize, canvasSize);
  background(220);
}

function draw() {
  initialSize = initialSize - speed;
  fill(200, 200, 200, 10);
  stroke(100, 100, 100);
  ellipse(500, 500, initialSize, initialSize);
}
