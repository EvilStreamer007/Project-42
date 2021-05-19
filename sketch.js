
hr = hour();
mn = minute();
s = second();

angleMode(DEGREES);

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  scAngle = map(sc, 0, 60, 0, 360);
  
  stroke(255,0,0);
  storkeWeight(7);
  line(0,0,100,0);

  drawSprites();
}