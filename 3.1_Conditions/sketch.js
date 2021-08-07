let isBetweenTheRange = false;
let randomValue = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(random(0, 255), random(0, 255), random(0, 255));
}

function draw() {
  randomValue = random(0, 255);

  if (randomValue < 100) {
    ellipseMode(CENTER);
    ellipse(windowWidth / 2, windowHeight / 2, 100);
  }
  else {
    rectMode(CENTER);
    rect(windowWidth / 2, windowHeight / 2, 100);
  }
}