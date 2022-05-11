
let canvas;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("my-container");
  angleMode(DEGREES);
  noLoop();
}

let value = color(random);


function draw() {
  background(color('#f5f5dc'));

  translate(width / 2, height / 2 + 200); //position
  branch(100);
}

function mousePressed() {
  if (value === 0) {
    value = 255;
  } else {
    background(value);
    value = 0;
  } }


//Tree
function branch(len) {
  push();
  if (len > 10) {
    strokeWeight(map(len, 10, 100, 1, 15));
    stroke(70, 40, 20);
    line(0, 0, 0, -len);
    translate(0, -len);
    rotate(30); //rotates each time you press start
    branch(len * random(0.7, 0.9));
    rotate(-60);
    branch(len * random(0.7, 0.9));
  }
  else {
    var r = 220 + random(-20, 20);
    var g = 120 + random(-20, 20);
    var b = 170 + random(-20, 20);
    fill(r, g, b, 150);
    noStroke();

    beginShape()
    for (var i = 45; i < 135; i++) {
      var rad = 15;
      var x = rad * cos(i);
      var y = rad * sin(i);
      vertex(x, y);
    }

    for (var i = 135; i > 40; i--) {
      var rad = 15;
      var x = rad * cos(i);
      var y = rad * sin(-i) + 20;
      vertex(x, y);
    }
    endShape();
  }

  pop();

}
