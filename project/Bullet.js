class Pellet{
    constructor(x,y, a){
        this.pos = createVector(x, y);
        this.angle = a;
    }

    render() {
        push()
        translate(this.pos.x, this.pos.y);
        fill(0, 255, 0);
        ellipse(0 ,0, pelletWidth, pelletHeight)
        pop()
    }

    move(){
        this.pos.x += Math.cos(this.angle) * pelletSpeed
        this.pos.y += Math.sin(this.angle) * pelletSpeed
    }
    
    hits(john){
        let distance = (p5.Vector.sub(this.pos, john.pos)).mag();
        if (distance < pelletHeight / 2 + johnHeight / 2) {
            return true;
        } else {
            return false;
        }
    }
}