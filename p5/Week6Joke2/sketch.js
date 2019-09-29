
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
    background(255,0,0);
    textSize(24)
    text ("why do we tell actors to break a leg?", 100,100);
    break ;

    case 1:
    background(0,255,0);
    textSize(24)
    text("Because every play has a cast", 200,200);
    break;
  }

    if (timer > 500) {
      myState = myState +1;
      timer = 0;

if (myState > 1) {
  myState = 0;
}
  }
}
