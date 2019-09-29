
var myState = 0;
var timer = 0;

function setup() {
  // put setup code here
  createCanvas(800,800);
}

function draw() {
  // put drawing code here
  timer = timer + 1;
  switch(myState) {

    case 0:
    background(0);
    fill(255,255,0);
    rect(225,200,150,400);
    fill(255,0,0);
    ellipse(300,300,100,100);
    break ;

    case 1:
    background(0);
    fill(255,255,0);
    rect(225,200,150,400);
    fill(225,200,0);
    ellipse (300,410, 100, 100);
    break;

    case 2:
    background(0);
    fill(255,255,0);
    rect(225,200,150,400);
    fill(0,255,0);
    ellipse(300,520,100,100);
    break;
  }


    if (timer > 500) {
      myState = myState +1;
      timer = 0;

if (myState > 2) {
  myState = 0;
}
  }
}
