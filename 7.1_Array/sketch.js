var balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
  if (mouseIsPressed) {
    bubble = new Bubble(mouseX, mouseY, 100);
    balls.push(bubble);
    bubble.show();
  }
}
