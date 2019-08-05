
var sketchHeight = 3000;
var nrOfContentAreas = 5;
var contentAreaHeight;
let lightPathCover;
let shadowPlayCover;
let socialMegaphoneCover;
let classicalConcertCover;
let ildDaabCover;

var particles = [];

function preload() {
  lightPathCover = loadImage('pics/light_path/cover.jpg');
  shadowPlayCover = loadImage('pics/shadow_play/cover.jpg');
  socialMegaphoneCover = loadImage('pics/social_megaphone/cover.jpg');
  classicalConcertCover = loadImage('pics/classical_concert/cover.jpg');
  ildDaabCover = loadImage('pics/ild_daab/cover.jpg');
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowWidth/2*nrOfContentAreas);
  contentAreaHeight = windowWidth/2;
  noFill();

  for (var i = 0; i < 200; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
}

function draw() {
  //particlesDraw();
  collage();
  // put drawing code here
  for (var i = 0; i < nrOfContentAreas; i++){
  	//rect(width/10,width/20+(i*contentAreaHeight), width-width/5, contentAreaHeight-width/10);
    
    if (i==0) image(lightPathCover, width/10,width/20+(i*contentAreaHeight), width-width/5, contentAreaHeight-width/10);
    if (i==1) image(socialMegaphoneCover, width/10,width/20+(i*contentAreaHeight), width-width/5, contentAreaHeight-width/10);
    if (i==2) image(ildDaabCover, width/10,width/20+(i*contentAreaHeight), width-width/5, contentAreaHeight-width/10);
    if (i==3) image(classicalConcertCover, width/10,width/20+(i*contentAreaHeight), width-width/5, contentAreaHeight-width/10);
    if (i==4) image(shadowPlayCover, width/10,width/20+(i*contentAreaHeight), width-width/5, contentAreaHeight-width/10);
    
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowWidth/2*nrOfContentAreas);
  contentAreaHeight = windowWidth/2;
  //background(255);
}

function particlesDraw(){

  for(var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
    //particles[i].show(lightPathCover);
  }
}

function collage(){
  image(lightPathCover.get(0,0,100,lightPathCover.height));

}