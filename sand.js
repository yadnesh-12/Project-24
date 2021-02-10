class Sand{

    constructor(x,y,radius){
        
        var options={
        isStatic : false,
        restitution:1.3,
        friction:5,
        density:1.0
        }
        this.body = Bodies.circle(x,y,radius);
        //this.width = width;
        this.radius = radius ;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        ellipseMode(RADIUS);
        fill("red");
        translate(pos.x,pos.y);
        rotate(angle);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}