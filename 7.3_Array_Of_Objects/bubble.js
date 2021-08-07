let variation = 10;
let control = true;
let initialValue = 0;

class Bubble {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.initialValue = y;
  }

  bounce() {
    if (this.initialValue < windowHeight) {
      if (control) {
        this.y += variation;
        if (this.y > windowHeight) control = false;
      }
      if (!control) {
        this.y -= variation;
        if (this.y < this.initialValue) {
          this.initialValue = this.initialValue + 10;
          control = true;
        }
      }
    }
    ellipse(this.x, this.y, this.size);
  }
}
