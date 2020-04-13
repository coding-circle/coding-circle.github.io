const weight = 30;

var diameter = 300;
var step = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  const maxDiameter = windowWidth >= windowHeight ? windowHeight : windowWidth;

  if (diameter + step >= maxDiameter - weight || diameter + step <= 0) {
    step *= -1;
  }

  diameter += step;

  background(0);
  drawRing(diameter);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function drawRing(diameter) {
  fill(0, 0);
  stroke("#27b0ff");
  strokeWeight(weight);
  ellipse(windowWidth / 2, windowHeight / 2, diameter, diameter);
}
