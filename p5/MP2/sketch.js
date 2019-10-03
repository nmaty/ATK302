var myState = 0;
var timer = 0;

let slide1;
let slide2;
let slide3;
let slide4;
let slide5;

function setup() {
  // put setup code

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
    break ;

    case 1:
    background(slide2);
    textSize(80)
    textFont('Boulder')
    fill('black')
    text ("Safari Map", 450,150);
    break ;

    case 2:
    background(slide3);
    textSize(80)
    textFont('Boulder')
    fill('white')
    text ("Rainforest Map", 350,500);
    break ;

    case 3:
    background(slide4);
    textSize(80)
    textFont('Boulder')
    fill('black')
    text ("Arctic Map", 450,150);
    break ;

    case 4:
    background(slide5);
    textSize(80)
    textFont('Boulder')
    fill('black')
    text ("Desert Map", 450,150);
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
