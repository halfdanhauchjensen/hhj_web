
var sketchHeight = 2000;
var nrOfContentAreas = 4;
var contentAreaHeight;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowWidth/2*nrOfContentAreas);
  contentAreaHeight = windowWidth/2;
  noFill();
}

function draw() {
  // put drawing code here
  for (var i = 0; i < nrOfContentAreas; i++){
  	rect(100,50+(i*contentAreaHeight), width-200, contentAreaHeight-100);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowWidth/2*nrOfContentAreas);
  contentAreaHeight = windowWidth/2;
  background(255);
}