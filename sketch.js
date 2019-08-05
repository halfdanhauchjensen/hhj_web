
var sketchHeight = 2000;
var nrOfContentAreas = 4;
var contentAreaHeight;
let lightPathCover;

function preload() {
  lightPathCover = loadImage('pics/light_path/cover.jpg');
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowWidth/2*nrOfContentAreas);
  contentAreaHeight = windowWidth/2;
  noFill();
}

function draw() {
  // put drawing code here
  for (var i = 0; i < nrOfContentAreas; i++){
  	rect(width/10,width/20+(i*contentAreaHeight), width-width/5, contentAreaHeight-width/10);
    if (i==0) image(lightPathCover, width/10,width/20+(i*contentAreaHeight), width-width/5, contentAreaHeight-width/10);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowWidth/2*nrOfContentAreas);
  contentAreaHeight = windowWidth/2;
  background(255);
}