var myCar ;
var myCar1 ;
var myCar2 ;
var myCar3 ;

function setup() {
  createCanvas(800,800) ;
  myCar = new Car() ;
  myCar1 = new Car() ;
  myCar2 = new Car() ;
  myCar3 = new Car() ;
  // put setup code here
}

function draw() {
  background('blue') ;

  myCar.display() ;
  myCar.drive() ;

  myCar1.display() ;
  myCar1.drive() ;

  myCar2.display() ;
  myCar2.drive() ;

  myCar3.display() ;
  myCar3.drive() ;

  // put drawing code here
}
//our car class
function Car(){
  //attributes

  this.x = random (width) ;
  this.y = random (height) ;
  this.vel = random (25);
  this.r = random(255,0,0);
  this.g = random(0,255,0);
  this.b = random(0,0,255);

  //methods
  this.display = function(){
    fill (this.r, this.g, this.b);
    ellipse(this.x,this.y,100,100) ;
    fill('white');
    ellipse(this.x,this.y,60,60) ;
    fill('red');
    ellipse(this.x,this.y,30,30) ;

  }

  this.drive = function() {
    this.x = this.x + this.vel ;
    if (this.x > width) {
      this.x = 0;
    }
  }
}
