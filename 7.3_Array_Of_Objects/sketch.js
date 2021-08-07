var arrayOfBubbles = [];
let size;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200, 200, 100);
}

function draw() {
  background(200, 200, 100);
  for (let bubble of arrayOfBubbles) {
    bubble.bounce();
  }
}

function mousePressed() {
  size = random(0, 50);
  bubble = new Bubble(mouseX, mouseY, size);
  arrayOfBubbles.push(bubble);
}
