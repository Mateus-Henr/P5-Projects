var initialSize = 200;
var mutableSize = initialSize;
var speed = 1;
var calculateValue = {
  1: function (mutableSize, speed) { return mutableSize + speed },
  2: function (mutableSize, speed) { return mutableSize - speed },
  3: function (mutableSize, speed) { return mutableSize + speed },
  4: function (mutableSize, speed) { return mutableSize - speed }
};

function setup() {
  createCanvas(1000, 1000);
  background(200);
}

function draw() {
  mutableSize = randomOperator(mutableSize, speed);
  stroke(random(0, 254));
  ellipseMode(CENTER);
  translate(mutableSize / 4, mutableSize / 4);
  translate(p5.Vector.fromAngle(millis() / 500, 250));
  ellipse(450, 450, mutableSize, mutableSize);
}

function randomOperator() {
  let choice = Math.round(random(1, 4));

  return calculateValue[choice](mutableSize, speed);
}

function mousePressed() {
  fill(random(0, 254), random(0, 254), random(0, 254));
  mutableSize = mutableSize - 10;
}