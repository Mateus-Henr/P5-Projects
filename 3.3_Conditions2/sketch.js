let position = 0;
let variation = 10;
let control = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  line(windowWidth, 0, 0, position);
  line(0, 0, windowWidth, position);

  if (control) {
    position += variation;
    if (position > windowWidth * 2) control = false;
  }
  if (!control) {
    position -= variation;
    if (position < 0) control = true;
  }

  variation++;
}
