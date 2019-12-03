var myState = 0

function setup() {
  // put setup code here
  createCanvas(1500,700);
}

function draw() {
  // put drawing code here
  switch(myState) {

    case 0:
    background(255,0,0);
    textSize(24)
    text ("1", 100,100);
    break ;

    case 1:
    background(0,255,0);
    textSize(24)
    text("2", 200,200);
    break ;

    case 2:
    background(0,0,255);
    textSize(24)
    text("3", 200,200);
    break ;

    case 3:
    background(0);
    textSize(24)
    text("4", 200,200);
    break ;

    case 4:
    background(255);
    textSize(24)
    text("5", 200,200);
    break ;

  }
}

function mouseReleased() {
myState++ ;
if (myState > 4) {
  myState = 0 ;
  }
}
