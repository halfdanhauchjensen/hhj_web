// Daniel Shiffman
// code for https://youtu.be/vqE8DMfOajk

function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.r = 1;
  
  this.update = function() {
    this.x += random(-10, 10);
    this.y += random(-10, 10);

    this.x = constrain(this.x, 0, width);    
    this.y = constrain(this.y, 0, height);    
  }
  
  //this.show = function(img) {
    this.show = function() {
    noStroke();
    var px = floor(this.x);
    var py = floor(this.y);

    //var col = img.get(px, py);
    //console.log(col);
    //fill(col[0], col[1], col[2], 200);
    fill(0); //
    ellipse(this.x, this.y, this.r, this.r);    
  }
  
}