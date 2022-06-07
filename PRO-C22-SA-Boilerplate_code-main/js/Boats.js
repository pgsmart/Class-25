class Boats{
    constructor(x,y,w,h){

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = loadImage("assets/boat.png");
        this.body = Matter.Bodies.rectangle(this.x,this.y,this.w,this.h);
        World.add(world,this.body)
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.w,this.h);
    }
}