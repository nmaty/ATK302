function setup() {
  // put setup code here
}

function draw() {
  // put drawing code here
}

var mic;
var vol;
var y = 0 ;

function setup() {
  createCanvas(800, 800);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(255,0,0);

  ellipse(400,385,200,200);


  vol = mic.getLevel(); // level is between 0 and 1
  vol = vol * 100; // you may need to change this

  let h = map(vol, 0, 1, height, 0);
  ellipse(width / 2, h - 25, 50, 50);

  if (vol > 3) {
    // do something
    y++ ;

  }


  textSize(40);
  text("Activate", 330,400);


}


// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}
