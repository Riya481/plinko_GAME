class Particle {
    constructor(x,y,r){
        var options = {
            restitution : 0.4,
        }
        this.r = r;
        this.body = Bodies.circle(x,y,this.r,options);
        this.colour = color(random(0,255,),random(0,255),random(0,255));
        World1.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate1(pos.x , pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode1(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

    
}