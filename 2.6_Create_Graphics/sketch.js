let extraCanvas;
let x = 200;
let y = 200;
let squareSize = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  extraCanvas = createGraphics(windowWidth, windowHeight);
  background(0);
}

function draw() {
  x = random(0, windowWidth);
  y = random(0, windowHeight);


  fill(255);
  noStroke();
  rectMode(CENTER);
  rect(x, y, squareSize);

  if (mouseIsPressed) {
    fill(255);
    noStroke();
    extraCanvas.ellipse(mouseX, mouseY, 60, 60);
  }

  image(extraCanvas, 0, 0);
}