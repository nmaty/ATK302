function setup() {
createCanvas (windowWidth, windowHeight) ;

}
function mouseReleased() {
  console.log(mouseX + ',' + mouseY) ;
}

function draw() {
  background(0);
  fill(255);

  if (mouseIsPressed) {
    //pressed state
    //cape
    translate (800,0)
    rotate(120)
    fill(255,0,0)
    triangle(100, 400, 565, 400, 338, 160);
    fill(0,0,255)
    triangle(190, 350, 475, 350, 338, 190);
    //left leg
    fill(255,255,0)
    rect(290,250,40,150);
    //right leg
 rect(335,250,40,150);
//left arm
 rect(260,152,40,98);
//right arm
 rect(370,152,40,98);
 //body
  rect(300,158,70,92);
//head
 rect(300,88,70,70);
 //right leg stripe
 fill(0)
 rect(345,250,20,150);
 //left leg stripe

 rect(300,250,20,150);
 //right arm circle

 ellipse(390,200,20,70);
 //left arm circle

 ellipse(280,200,20,70);
 //right eye
 fill(255)
 ellipse(350,110,15,15);
 //left eye

 ellipse(320,110,15,15);
 //mouth
rect(310,140,50,5);
//left eye laser
rotate(120)
fill(255,0,0)
rect(320,-190,10,100);
//right eye laser
rotate(0)
fill(255,0,0)
rect(345,-208,10,100);









  } else {

    //not pressed state
    //cape
    fill(0,200,0)
    triangle(100, 400, 565, 400, 338, 160);
    fill(255,200,0)
    triangle(190, 350, 475, 350, 338, 190);
    //left leg
    fill(0,100,255)
    rect(290,250,40,150);
    //right leg
 rect(335,250,40,150);
//left arm
 rect(260,152,40,98);
//right arm
 rect(370,152,40,98);
 //body
  rect(300,158,70,92);

//head
 rect(300,88,70,70);
 //right leg stripe
 fill(255,0,0)
 rect(345,250,20,150);
 //left leg stripe
 fill(255,0,0)
 rect(300,250,20,150);
 //right arm circle
 fill(255,0,0)
 ellipse(390,200,20,70);
 //left arm circle
 fill(255,0,0)
 ellipse(280,200,20,70);
 //right eye
 fill(0)
 ellipse(350,110,15,15);
 //left eye
 fill(0)
 ellipse(320,110,15,15);
 //mouth
 fill(0)
 rect(310,140,50,5);





  }


}
