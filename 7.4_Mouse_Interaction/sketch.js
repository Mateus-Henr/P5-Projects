let bubbles = [];
let totalBubbles = 10;
let bubbleSize = 100;
let bubble;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100, 200, 100);
}

function draw() {
  background(100, 200, 100);
  let x = round(random(0, windowWidth));
  let y = round(random(0, windowHeight));
  let size = round(random(0, bubbleSize));

  createBubbles(x, y, size);
  for (bubble of bubbles) {
    bubble.show();
    bubble.move();
  }
}

function mousePressed() {
  for (bubble of bubbles) {
    bubble.clicked();
  }
}

function createBubbles(x, y, size) {
  if (bubbles.length < totalBubbles) {
    for (var i = 0; i < totalBubbles; i++) {
      bubble = new Bubble(x, y, size, i);
      bubbles.push(bubble);
    }
  }
}
