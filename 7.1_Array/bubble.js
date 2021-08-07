let bubble;
let color;

class Bubble {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  show() {
    ellipse(this.x, this.y, this.size);
  }
}
