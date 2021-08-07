let size = 20;
let gameSpeed = 10;
let clickedArea;

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  kick() {
    this.x = this.x + gameSpeed;
    ellipse(this.x, this.y, size);
  }

  show() {
    ellipse(this.x, this.y, size);
  }
}
