let bubble;
let color;

class Bubble {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
  }

  show() {
    this.transformColor();
    ellipse(this.x, this.y, this.size);
  }

  transformColor() {
    let newColor = this.color.toString().toLowerCase();
    if (newColor === "green") {
      return fill(0, 255, 0);
    } else if (newColor === "blue") {
      return fill(0, 0, 255);
    } else if (newColor === "yellow") {
      return fill(255, 255, 0);
    } else if (newColor === "black") {
      return fill(0, 0, 0);
    } else if (newColor === "red") {
      return fill(255, 0, 0);
    }
  }

  giveInfo() {
    let title = "The Ball";
    let infoColors =
      "You can type the color name in the function, the colors currently available right now are: \n-Green \n-Blue \n-Yellow \n-Black \n-Red";
    text(title + "\n\n" + infoColors, this.x - 200, this.y - 300, 500);
  }

  getValues() {
    let values =
      "X: " + this.x + "\nY: " + this.y + "\nBubble Size: " + this.size;
    fill(200, 200, 200);
    return text(values, this.x - this.size / 4, this.y + 200, 200);
  }
}
