let vertMiddle, horMiddle;
let rectCalculous;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 220);
  vertMiddle = windowHeight / 2;
  horMiddle = windowWidth / 2;
}

function draw() {
  drawFlower(200);
}

function drawFlower(flowerSize) {
  ellipseMode(CENTER);
  rectMode(CENTER);

  rectCalculous = vertMiddle + flowerSize;
  fill(0, 255, 0);
  rect(horMiddle, rectCalculous, flowerSize / 10, flowerSize * 2);
  // Petals, the beginning
  fill(0, 255, 255);
  ellipse(horMiddle, vertMiddle + flowerSize / 2, flowerSize / 2);
  ellipse(horMiddle, vertMiddle - flowerSize / 2, flowerSize / 2);
  ellipse(horMiddle + flowerSize / 2, vertMiddle, flowerSize / 2);
  ellipse(horMiddle - flowerSize / 2, vertMiddle, flowerSize / 2);
  ellipse(
    horMiddle - flowerSize / 2.5,
    vertMiddle - flowerSize / 2.5,
    flowerSize / 2
  );
  ellipse(
    horMiddle - flowerSize / 2.5,
    vertMiddle + flowerSize / 2.5,
    flowerSize / 2
  );
  ellipse(
    horMiddle + flowerSize / 2.5,
    vertMiddle - flowerSize / 2.5,
    flowerSize / 2
  );
  ellipse(
    horMiddle + flowerSize / 2.5,
    vertMiddle + flowerSize / 2.5,
    flowerSize / 2
  );
  // End of Petals
  fill(255, 204, 0);
  ellipse(horMiddle, vertMiddle + flowerSize * 4, flowerSize * 5);
  fill(255, 255, 0);
  ellipse(horMiddle, vertMiddle, flowerSize);
  fill(0, 0, 220);
  stroke(0, 0, 220);
  rect(horMiddle, vertMiddle + flowerSize * 5, windowWidth, flowerSize * 5);
}
