let x, y;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  x = map(mouseX, 0, windowWidth, 0, 255);
  y = map(mouseX, 0, windowHeight, 0, 255);
  background(x, y, x);
  rectMode(CENTER);
  rect(mouseX, mouseY, 100)
}