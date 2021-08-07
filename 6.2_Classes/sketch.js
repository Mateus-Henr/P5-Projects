let bubble;

class Bubble {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  show() {
    ellipse(this.x, this.y, this.size);
  }

  getValues() {
    let values =
      "X: " + this.x + "\nY: " + this.y + "\nBubble Size: " + this.size;
    fill(200, 200, 200);
    return text(values, this.x - 20, this.y + 200, 200);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
  bubble = new Bubble(windowWidth / 2, windowHeight / 2, 100);
  bubble.show();
  bubble.getValues();
}
