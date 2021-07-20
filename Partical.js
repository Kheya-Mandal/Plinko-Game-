class Partical {
    constructor(x, y) {
        var options = {
            restitution: 0.5,
            friction: 0,
            isStatic:false,
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
        var color=this.color;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //noStroke();
        fill(color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};