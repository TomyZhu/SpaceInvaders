class John{
    constructor(x,y){
        this.pos = createVector(x, y);
        this.speed = johnSpeed;
    }

    render() {
        //push()
        //translate(this.pos.x, this.pos.y);
        //image(johnImg, 0, 0, johnWidth, johnHeight)
        fill(0,0,255)
        ellipse(this.pos.x ,this.pos.y , johnWidth, johnHeight)
        //pop()
    }

    move(){
        this.pos.x += this.speed;
    }

    shift(){
        this.pos.y += moveDown;
        this.speed *= -1;
    }
    
}