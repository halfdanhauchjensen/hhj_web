
var sketchHeight = 2000;
var nrOfContentAreas = 4;
var contentAreaHeight;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowWidth/2*nrOfContentAreas);
  contentAreaHeight = windowWidth/2;
}

function draw() {
  // put drawing code here
  for (var i = 0; i < nrOfContentAreas; i++){
  	fill(50+50*i, 100, 100);
  	rect(0,i*contentAreaHeight, width, contentAreaHeight);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowWidth/2*nrOfContentAreas);
  contentAreaHeight = windowWidth/2;
}