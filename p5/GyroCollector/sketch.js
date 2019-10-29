var cars = [];
var frogPos;
var myState = 0;

//bunny stuff
var alpha, beta, gamma; // orientation data
var bunnyImage;
var xPosition = 0;
var yPosition = 0;
var x = 0; // acceleration data
var y = 0;
var z = 0;

function setup() {
  createCanvas(1500, 750);

  // initialize accelerometer variables
  alpha = 0;
  beta = 0;
  gamma = 0;

  bunnyImage = loadImage("assets/bunny.jpg");
  imageMode(CENTER);
  rectMode(CENTER);

  // spawn the cars
  for (var i = 0; i < 100; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width / 2, height - 100);
  imageMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  background('blue');

  // the map command !!!!
  // takes your variable and maps it from range 1 to range 2
  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
  xPosition = map(gamma, -60, 60, 0, width);
  yPosition = map(beta, -30, 30, 0, height);

  push(); // before you use translate, rotate, or scale commands, push and then pop after

  translate(xPosition, yPosition); // move everything over by x, y

  rotate(radians(alpha)); // using alpha in here so it doesn't feel bad

  image(bunnyImage, 0, 0, 500, 500);
  //  	rect(0, 0, 100, 100) ;
  pop();


  // DECORATIONS
  // Just a bunch of text commands to display data coming in from addEventListeners
  textAlign(LEFT);
  textSize(20);
  fill('black');
  text("orientation data:", 25, 25);
  textSize(15);
  text("alpha: " + alpha, 25, 50);
  text("beta: " + beta, 25, 70);
  text("gamma: " + gamma, 25, 90);
  textSize(20);
  text("acceleration data:", 25, 125);
  textSize(15);
  text("x = " + x.toFixed(2), 25, 150); // .toFixed means just show (x) decimal places
  text("y = " + y.toFixed(2), 25, 170);
  text("z = " + z.toFixed(4), 25, 190);

  // MORE DECORATIONS - write that pretty ATK type on top.
  fill('white');
  noStroke();
  textSize(300);
  textAlign(CENTER);
  text("atk", width / 2, height / 2);


// iterate through cars array
for (var i = 0; i < cars.length; i++) {
  cars[i].display();
  cars[i].drive();

  // collision detection
  if (cars[i].pos.dist(frogPos) < 50) {
    cars.splice(i, 1);
  }
}
//frog
fill('yellow');
ellipse(frogPos.x, frogPos.y, 75, 75);
checkForKeys();
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
