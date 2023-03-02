// sketch.js
let posX = 120;
let posY = 120;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background(14, 15, 57);
}

function draw () {
  fill (254, 255, 195);
  stroke(251, 255, 253);
  strokeWeight(4);
  ellipse(random(120), random(100), 90, 90);
  ellipse(posX, posY, 90, 90);
  posX = posX + 1;
  posY = posY + 1;
  if(posX == windowWidth){
    posX = 40;
  }
 if(posY == windowHeight){
  posY = 40;
 }

}