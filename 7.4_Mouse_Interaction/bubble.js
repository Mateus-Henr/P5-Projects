class Bubble {
  constructor(id, x, y, size) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.size = size;
  }

  show() {
    ellipse(this.x, this.y, this.size);
  }

  move() {
    this.y = this.y + random(-5, 5);
    this.x = this.x + random(-5, 5);
  }

  clicked() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.size / 2) {
      console.log("CLICKED on the bubblewith ID: " + this.id);
    }
  }
}
