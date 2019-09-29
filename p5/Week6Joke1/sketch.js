var myState = 0;

function setup() {
  // put setup code here
  createCanvas(800,800);
}

function draw() {
  // put drawing code here
  switch(myState) {

    case 0:
    background(255,0,0);
    textSize(24)
    text ("whats the best thing about switzerland?", 100,100);
    break ;

    case 1:
    background(0,255,0);
    textSize(24)
    text("I don't know, but the flag is a big plus", 200,200);
    break ;

  }
}

function mouseReleased() {
myState++ ;
if (myState > 2) {
  myState = 0 ;
  }
}
