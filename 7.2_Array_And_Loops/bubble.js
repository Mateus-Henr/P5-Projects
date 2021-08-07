class Bubble {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  move() {
    this.x = this.x + random(0, this.size);
    if (this.x > windowWidth) {
      this.y = random(0, windowHeight);
      this.x = 0;
    }
    ellipse(this.x, this.y, this.size);
  }

  show() {
    ellipse(this.x, this.y, this.size);
  }
}
