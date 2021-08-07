function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
  bubble = new Bubble(windowWidth / 2, windowHeight / 2, 100, "blue");
  bubble.giveInfo();
  bubble.show();
  bubble.getValues();
}
