class Ball {
	constructor(x, y, vx, vy, radius, c) {
	
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.radius = radius;
		this.c = c;

	
    }
   
    drawBall() {
		fill(this.c);
		ellipse(this.x, this.y, this.radius*2, this.radius*2);
		
	} 
	moveBall() {
		this.x = this.x + this.vx;
		this.y = this.y + this.vy;
	}
}

let bounceBall;

function setup() {

    createCanvas(600,600);
    angleMode (DEGREES);
    bounceBall = new Ball(200,240,0,0,20,150);
    bounceBall.vx = 4*cos(25);
    bounceBall.vy = 4*sin(25);
    bounceBallTwo = new Ball(100,240,0,0,20,230);
    bounceBallTwo.vx = 4*cos(70);
    bounceBallTwo.vy = 4*sin(70);
  }

  

function draw() {

    background(0,255,0);
    
  
    if (bounceBall.x > 600){bounceBall.vx=-bounceBallTwo.vx}
    if (bounceBall.x < 0){bounceBall.vx=-bounceBallTwo.vx}
    if (bounceBall.y > 600){bounceBall.vy =-bounceBallTwo.vy}
    if (bounceBall.y < 0){bounceBall.vy =-bounceBallTwo.vy}
    if (bounceBallTwo.x > 600){bounceBallTwo.vx =-bounceBallTwo.vx}
    if (bounceBallTwo.x < 0){bounceBallTwo.vx =-bounceBallTwo.vx}
    if (bounceBallTwo.y > 600){bounceBallTwo.vy =-bounceBallTwo.vy}
    if (bounceBallTwo.y < 0){bounceBallTwo.vy =-bounceBallTwo.vy}
    noStroke;
    bounceBall.drawBall();
    bounceBall.moveBall();
    bounceBallTwo.drawBall();
    bounceBallTwo.moveBall();
  }