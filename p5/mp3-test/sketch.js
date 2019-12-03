var cars = [];
var frogPos;
var myState = 0;
var timer ;

function setup() {
  createCanvas(1500, 750);

  // spawn the cars
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width / 2, height - 100);
  imageMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  switch (myState) {

    case 0:
      background('blue')
      textSize(72);
      text('CLICK TO START', 450, height/2)
      break;

    case 1:
      game();
      timer ++ ;
      if(timer > 600) {
        timer = 0;
        myState = 2;
      }
      break;

    case 2:
      background('red')
      textSize(72);
      text('LOSE', 650, height/2)
      break;

    case 3:
      background('green')
      textSize(72);
      text('WIN', 650, height/2)
      break;


  }


  //frog
  fill('yellow');
  ellipse(frogPos.x, frogPos.y, 75, 75);
  checkForKeys();
}

function mouseReleased() {
  switch(myState){
    case 0:
    myState = 1;
    break ;

    case 2:
    resetTheGame();
    myState = 0;
    break ;

    case 3:
    resetTheGame();
    myState = 0;
    break ;
  }
}

function resetTheGame(){

  cars = [];//clear the array, then spawn

  // spawn the cars
  for (var i = 0; i < 5; i++) {
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

  //methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    ellipse(this.pos.x, this.pos.y, 100, 100);
    fill('white');
    ellipse(this.pos.x, this.pos.y, 60, 60);
    fill('red');
    ellipse(this.pos.x, this.pos.y, 30, 30);

  }

  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 10;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 10;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 10;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 10;


}

function game() {
  background('blue');

  // iterate through cars array
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();

    // collision detection
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }

  if(cars.length == 0){
    timer = 0;
    myState = 3;

  }
  //frog
  fill('yellow');
  ellipse(frogPos.x, frogPos.y, 75, 75);
  checkForKeys();
}
