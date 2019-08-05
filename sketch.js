
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
  //image(lightPathCover.get(0,0,100,100), 0,0,100,100);
  // put drawing code here
  for (var i = 0; i < nrOfContentAreas; i++){
  	//rect(width/10,width/20+(i*contentAreaHeight), width-width/5, contentAreaHeight-width/10);
    
    //if (i==0) image(lightPathCover, width/10,width/20+(i*contentAreaHeight), width-width/5, contentAreaHeight-width/10);
    //if (i==1) image(socialMegaphoneCover, width/10,width/20+(i*contentAreaHeight), width-width/5, contentAreaHeight-width/10);
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

  var segmentWidth = ildDaabCover.width/3;
  var segmentHeight = ildDaabCover.height/3;

  for (var i = 0; i < 10; i++){
    image(ildDaabCover.get(ildDaabCover.width/10*i,0,ildDaabCover.width/10, ildDaabCover.height), segmentWidth*i,0, segmentWidth, segmentHeight);
  }


  var w = 1500/10;
  var h = 750/10;
  var x = random(0, 1500-w);
  var y = random(0, 750-h);


  
  var mappedW = (width/10 + (width-width/5)) / 10;
  var mappedH = (contentAreaHeight-width/10) / 10;

  var mappedX = map(x, 0, 1500-w, width/10, (width/10 + (width-width/5) - mappedW));
  var mappedY = map(y, 0, 750-h, (width/20+(0*contentAreaHeight)), ((width/20+(0*contentAreaHeight)) +  (contentAreaHeight-width/10) - mappedH ));


  //image(ildDaabCover.get(x,y,w,h), mappedX,mappedY,mappedW,mappedH);

}