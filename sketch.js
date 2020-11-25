var hr, hrAngle
var mn, mnAngle
var sc, scAngle

function setup() {
  createCanvas(800,400);
}

function draw() {
  background("black");  

  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);
  translate(400, 200);
  rotate(-90);

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);

  push();
  rotate(scAngle);
  stroke("blue");
  strokeWeight(8);
  line(0,0,100,0);
  noFill();
  arc(0, 0, 260, 260, scAngle, 0);
  pop();

  push();
  rotate(mnAngle);
  stroke("chartreuse");
  strokeWeight(8);
  line(0, 0, 75, 0);
  noFill();
  arc(0,0, 280, 280, mnAngle, 0);
  pop();

  push();
  rotate(hrAngle);
  stroke("Red");
  strokeWeight(8);
  line(0,0,50,50);
  noFill();
  arc(0,0,300,300, hrAngle, 0);
  pop();
}