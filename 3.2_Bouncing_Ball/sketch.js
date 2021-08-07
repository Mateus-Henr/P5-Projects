let x = 1;
let y = 1;
let setVDir = true;
let setHDir = true;
let verticalEdge = 0;
let horizontalEdge = 0;
let variation = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  verticalEdge = windowHeight;
  horizontalEdge = windowWidth;
}

function draw() {
  if (x > horizontalEdge) {
    setHDir = false;
  }
  if (x < 0) {
    setHDir = true;
  }
  if (setHDir) {
    x += variation;
  }
  else {
    x -= variation;
  }

  if (y > verticalEdge) {
    setVDir = false;
  }

  if (y < 0) {
    setVDir = true;
  }
  if (setVDir) {
    y += variation;
  }
  else {
    y -= variation
  }

  ellipseMode(CENTER);
  ellipse(x, y, 100);
}