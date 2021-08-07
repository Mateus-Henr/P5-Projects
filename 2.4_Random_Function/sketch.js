let ellipseSize, backgroundColor, ellipseColor;
let i = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = random(0, 100);
  background(backgroundColor);
}

function draw() {
  ellipseColor = random(0, 255);
  ellipseSize = random(0, 20);

  ellipseMode(CENTER);
  fill(0, ellipseColor, 0);
  ellipse(random(windowWidth), random(windowHeight), ellipseSize);
}
function mousePressed() {
  fill(ellipseColor, 0, ellipseColor);
  while (i != 100) {
    ellipse(random(windowWidth), random(windowHeight), ellipseSize);
    i++;
  }
}