function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  background(0,0,0);
  
  frameRate(12);
}

function draw() {
  background(0,0,0,20);
  translate(height/2,width/2);

  
  
  rotate(frameCount*10);
  noStroke();
  fill(255,255,255,50)
  ellipse(5,5,20,30);
  
  stroke(lerpColor(color('#ea0043'), color('#0fefca'), frameCount/120));
  rotate(10);
  line(0,100,cos(8),100);

  stroke(lerpColor(color('#0fefca'),color('#ea0043'), frameCount/120))
  rotate(frameCount*2);
  line(-50,-60,-10,-20);
  
  rotate(-10);
  line(100,0,cos(-20),60);
  
  rotate(frameCount*1.5);
 noStroke();
 fill(250,250,0);
 ellipse(0,frameCount+2,5,5);
 ellipse(0,-frameCount+2,5,5);
  
  noStroke();
  fill(255,255,255,80)
  ellipse(100,100,-frameCount+2,5);
  ellipse(-100,100,-frameCount+2,5);
  
  /*if (frameCount == 180) {
    noLoop();
  }*/
  
}

