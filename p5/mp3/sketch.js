var cars = [];
var frogPos;
var myState = 0;
var timer = 0;
var yoda, yodaRight, yodaLeft, darth, darthleft, darthright ;
var bird ;
var target1, target2, target3, falling ;
var birds = [];
let b2 ;
let x,y;
var song1;

var img;

function preload()
{
  img = loadImage("b1.png");
}

function preload() {
  song1 = loadSound("assets/audio2.mp3");

  song1.loop();
  song1.pause();
}

function setup() {
  createCanvas(1400,700);

  x = width / 2;
  y = height;

  birds [0] = loadImage("assets/target1.png");
  birds [1] = loadImage("assets/target2.png");
  birds [2] = loadImage("assets/target3.png");
  b2 = loadImage("assets/b2.jpg");

  // spawn the cars
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }

  yoda = loadImage("assets/yoda.gif") ;
  yodaLeft = loadImage("assets/yodaleft.png") ;
  darthright = loadImage("assets/darth.png") ;
  darthleft = loadImage("assets/darthleft.png") ;
  darth = darthright ;
  bird = loadImage("assets/bird1.png");


  frogPos = createVector(width/2-60, height - 100);
  imageMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {

  y = y - 1;

  // Reset to the bottom
  if (y < 0) {
    y = height;
  }

  switch (myState) {

    case 0:
      background('blue');
      fill ('black');
      textSize(72);
      text('CLICK TO START', x/2, y)
      fill ('white');
      textSize(60);
      text('Collect all bananas before time reaches 1000', x/2-300, y+125)
      fill ('white');
      textSize(60);
      text('Use arrow keys to move gorilla', x/2-100, y+250)
      break;

    case 1:
    song1.play();
    myState = 2;
    break;

    case 2:
      game();
      timer++ ;
      textSize(100);
      fill('white');
      text(timer, 1200,675);
      if(timer > 1000) {
        timer = 0;
        myState = 3;
      }
      break;

    case 3:
      song1.stop();
      background('red')
      fill ('black');
      textSize(72);
      text('YOU LOST! Click to restart', x/2-50, y)
      break;

    case 4:
    song1.stop();
      background('green')
      fill ('black');
      textSize(72);
      text('YOU WIN! Congrats!', x/2, y)
      break;


  }


  //frog
  image(darth, frogPos.x, frogPos.y, 225,225);
  checkForKeys();
}

function mouseReleased() {
  switch(myState){
    case 0:
    myState = 1;
    break ;

    case 3:
    resetTheGame();
    myState = 0;
    break ;

    case 4:
    resetTheGame();
    myState = 0;
    break ;
  }
}

function resetTheGame(){

  cars = [];//clear the array, then spawn

  // spawn the cars
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }
  timer = 0;
}
//our car class
function Car() {
  //attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));

  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.birdNum = 0;
  this.timer = 0;
  this.maxtimer = random (10,30);

  //methods
  this.display = function() {
    fill(this.r, this.g, this.b);
  //  image(bird, this.pos.x, this.pos.y, 100, 100);
  image(birds[this.birdNum], this.pos.x, this.pos.y, 150, 150);
  this.timer = this.timer +1;
  if(this.timer > this.maxtimer) {
    this.birdNum = this.birdNum + 1;
      if (this.birdNum > birds.length-1) this.birdNum = 0;
    this.timer = 0;
  }




}

  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

function keyPressed(){
  if (keyCode === LEFT_ARROW) darth = darthleft ;
  if (keyCode === RIGHT_ARROW) darth = darthright ;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 10;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 10;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 10;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 10;


}

function game() {
  background('black');

  // iterate through cars array
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();

    // collision detection
    if (cars[i].pos.dist(frogPos) < 100) {
      cars.splice(i, 1);
    }
  }

  if(cars.length == 0){
    timer = 0;
    myState = 4;

  }
  //frog
  checkForKeys();
}
