class CannonBall{
    constructor(x,y,r){
        var options = {
            isStatic: true,
            density: 1,
            restitution: 0
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Matter.Bodies.circle(this.x,this.y,this.r,options);
        this.image = loadImage("assets/cannonball.png");
        World.add(world,this.body);

    }
    display(){
       // imageMode(CENTER);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);
    }
    shoot(){
        var ballAngle = cannon.angle - 40;
        var velocity = p5.Vector.fromAngle(ballAngle * (3.14/180));
        velocity.mult(0.5);

        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body,{x:velocity.x * 180/3.14,y:velocity.y * 180/3.14})

    }
}