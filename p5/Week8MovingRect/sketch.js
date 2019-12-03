var x=0;

function setup() {
  createCanvas(800,800);
  // put setup code here
}

function draw() {
  background(100);

x=x+5;
  fill('red');
  rect(x,400,100,50);
  if (x > 800) {
  x=0;
  }

  // put drawing code here
}
