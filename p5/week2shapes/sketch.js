var x=0

function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 500);
}

function draw() {
background('#3890CE');
noStroke();

fill(160,82,45);
rect(195, 100, 75, 300);

fill(0,175,0);
rect(0, 400, 720, 100);

fill(0);
rect(375, 260, 50, 10);

fill(0);
rect(390, 210, 20, 50);

fill(255);
ellipse(400, 375, 75, 75);

fill(255);
ellipse(400, 325, 60, 50);

fill(255);
ellipse(400, 290, 40, 40);

fill(0);
ellipse(400, 325, 10, 10);

fill(0);
ellipse(400, 350, 10, 10);

fill(0);
ellipse(400, 375, 10, 10);

fill(0,230,0);
ellipse(232, 144, 175, 175);

fill(255,255,0);
ellipse(600, 124, 150, 150);
x = x + 1 ;
if (x > 720) x = 0 ;

fill(255);
ellipse(x, 100, 100, 100);

fill(255);
ellipse(x-50, 100, 80, 80);

fill(255);
ellipse(x+50, 100, 80, 80);

fill(255);
ellipse(x+200, 300, 100, 100);

fill(255);
ellipse(x+150, 300, 80, 80);

fill(255);
ellipse(x+250, 300, 80, 80);

fill(255);
text(mouseX + ',' + mouseY, 20, 20);
}

function mouseReleased() {
  console.log(mouseX + ',' + mouseY) ;
}
