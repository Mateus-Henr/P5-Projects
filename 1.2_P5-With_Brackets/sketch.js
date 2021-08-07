function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(70);
  createEllipse();
  setInterval(createEllipse, 2000);
}

function createEllipse() {
  ellipse(random([0], [400]), random([0], [400]), random([20], [40]), random([20], [40]));
}