
<html>
var x = 0;
	var h = 50;
	var w = 60;
let W = 100;
let t = 0; // time variable

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(40, 200, 40);
}

function draw() {

    textAlign(CENTER); 
    textSize(80);
    text("Michelle's MMP100 Production", width / 2, height / 2);
fill(255, 204, 100);
  background(10, 10); // translucent background 
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 10); // particle
    }
  }

  t = t + 0.01; // T=Time



if(mouseIsPressed) {

  stroke(200); //  line drawing color to white
  frameRate(20);
  textSize(15);
  background(0); 
  W = W - 1;
  if (W < 0) {
    W = height;
  }
  line(0, W, windowWidth, W);} 
  //if you press down on mouse the line will start to move, but when you let objects will follow the mouse and line stops.
  
 
// The statements in draw() are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read, the first
// line is executed again.
else {

	fill('rgb(0,255,0)');
triangle(30, 75, 58, 20, 86, 75);
stroke('#FF9D4A');
triangle(mouseX,mouseY,h,w);

}


while(x < 400){
	fill('#fae');
	rect(random(windowWidth),random(windowHeight),h,w);  //rectangles in the background
	console.log(x); 
	print(x);
 
			x++}
			
}//this is my closing function draw brackect 


	

</html>
