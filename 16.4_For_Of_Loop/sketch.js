var arrayOfBubbles = [];
let size = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200, 200, 100);
  createObjects();
}

function draw() {
  styleIt();
  for (let bubble of arrayOfBubbles) {
    bubble.move();
  }
}

function createObjects() {
  let x = 0;
  let y = 0;

  for (var i = 0; arrayOfBubbles.length < 100; i++) {
    bubble = new Bubble(x, y, size);
    arrayOfBubbles.push(bubble);
  }
}

function styleIt() {
  background(200, 200, 100);
  fill(200, 200, 100);
  smooth();
}
