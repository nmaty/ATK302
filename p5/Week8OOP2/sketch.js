var cars = [];
var frogPos ;
var myState = 0 ;

function setup() {
  createCanvas(1500,750) ;

  // spawn the cars
  for (var i = 0; i<100; i++) {
  cars.push(new Car());
  }

  frogPos = createVector (width/2, height-100);
  imageMode (CENTER) ;
  ellipseMode (CENTER) ;
}

function draw() {
  background('blue') ;

// iterate through cars array
  for (var i = 0; i < cars.length; i++) {
  cars[i].display() ;
  cars[i].drive() ;

  // collision detection
  if (cars[i].pos.dist(frogPos) < 50) {
    cars.splice(i,1) ;
  }
}
  //frog
  fill('yellow');
  ellipse(frogPos.x, frogPos.y, 75,75);
  checkForKeys();
}

//our car class
function Car(){
  //attributes
  this.pos = createVector(100,100) ;
  this.vel = createVector(random(-5,5),random(-5,5));

  this.r = random(255);
  this.g = random(255);
  this.b = random(255);

  //methods
  this.display = function(){
    fill (this.r, this.g, this.b);
    ellipse(this.pos.x,this.pos.y,100,100) ;
    fill('white');
    ellipse(this.pos.x,this.pos.y,60,60) ;
    fill('red');
    ellipse(this.pos.x,this.pos.y,30,30) ;

  }

  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

function checkForKeys(){
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 10;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 10;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 10;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 10;

}
