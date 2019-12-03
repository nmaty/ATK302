var myState = 0;
var timer = 0;
let x,y;


let slide1;
let slide2;
let slide3;
let slide4;
let slide5;

function setup() {
  // put setup code
  x = width / 2;
  y = height;
  slide1 = loadImage('assets/slide1.jpg');
  slide2 = loadImage('assets/slide2.jpg');
  slide3 = loadImage('assets/slide3.jpg');
  slide4 = loadImage('assets/slide4.jpg');
  slide5 = loadImage('assets/slide5.jpg');
  createCanvas(1500,700);
}

function draw() {
  // put drawing code here
  timer = timer + 1;
  y = y - 1;

  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
  switch(myState) {

    case 0:
    background(slide1);
    textSize(80)
    textFont('Boulder')
    fill('orange')
    text ("Welcome To:", 325,325);
    textSize(60)
    textFont('Boulder')
    fill('orange')
    text ("2K 19 The Hunt", 450,550);
    fill('red')
    ellipse (1300,400,150,150);
    fill('white')
    ellipse (1300,400,100,100);
    fill('red')
    ellipse (1300,400,50,50);
    break ;

    case 1:
    background(slide2);
    textSize(80)
    textFont('Boulder')
    fill('black')
    text ("Safari Map", width/2,y);
    break ;

    case 2:
    background(slide3);
    textSize(80)
    textFont('Boulder')
    fill('white')
    text ("Rainforest Map", width/2,y);
    break ;

    case 3:
    background(slide4);
    textSize(80)
    textFont('Boulder')
    fill('black')
    text ("Arctic Map", width/2,y);
    break ;

    case 4:
    background(slide5);
    textSize(80)
    textFont('Boulder')
    fill('black')
    text ("Desert Map", width/2,y);
    break ;

  }

    if (timer > 300) {
      myState = myState +1;
      timer = 0;
    }
}
function mouseReleased() {
myState++ ;
if (myState > 4) {
  myState = 0 ;
  }
}
