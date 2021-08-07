let largeness = 10;
let ball, extraCanvas;

function setup() {
  createCanvas(windowWidth, windowHeight);
  extraCanvas = createGraphics(windowWidth, windowHeight);
  background(0, 100, 0);
  createField();
}

function draw() {
  background(0, 100, 0, 0);
  generateBall();
  ball.kick();

  extraCanvas.background(0, 100, 0);
  createField();
  image(extraCanvas, 0, 0);
}

function createField() {
  styleField();
  extraCanvas.rect(0, 0, windowWidth, largeness);
  extraCanvas.rect(0, windowHeight - largeness, windowWidth, largeness);
  extraCanvas.rect(0, 0, largeness, windowHeight);
  extraCanvas.rect(windowWidth - largeness, 0, largeness, windowHeight);

  extraCanvas.rect(windowWidth / 2, 0, largeness, windowHeight);
  extraCanvas.ellipse(windowWidth / 2 + 5, windowHeight / 2, 40);

  extraCanvas.rect(0, windowHeight / 4, windowWidth / 8, largeness);
  extraCanvas.rect(
    0,
    windowHeight - windowHeight / 4 - 10,
    windowWidth / 8,
    largeness
  );
  extraCanvas.rect(
    windowWidth / 8,
    windowHeight / 4,
    largeness,
    windowHeight / 2
  );

  extraCanvas.rect(
    windowWidth - windowWidth / 8,
    windowHeight / 4,
    windowWidth / 8,
    largeness
  );
  extraCanvas.rect(
    windowWidth - windowWidth / 8,
    windowHeight - windowHeight / 4 - 10,
    windowWidth / 8,
    largeness
  );
  extraCanvas.rect(
    windowWidth - windowWidth / 8,
    windowHeight / 4,
    largeness,
    windowHeight / 2
  );

  extraCanvas.fill(200);
  extraCanvas.rect(
    windowWidth - largeness - 5,
    windowHeight / 3 + 15,
    largeness,
    windowHeight / 4
  );

  extraCanvas.fill(200);
  extraCanvas.rect(5, windowHeight / 3 + 15, largeness, windowHeight / 4);
}

function styleField() {
  extraCanvas.fill(255);
  extraCanvas.noStroke();
}

function generateBall() {
  styleBall();
  ball = new Ball(windowWidth / 2 + 5, windowHeight / 2);
  ball.show();
}

function styleBall() {
  stroke(0);
  fill(100);
}
