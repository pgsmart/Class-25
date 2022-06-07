class Cannon{
  constructor(x,y,w,h,angle){
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.angle = angle;
      this.cannonImg = loadImage("assets/canon.png");
  }

  display(){
    if(keyIsDown(LEFT_ARROW)&&this.angle > -25){
      this.angle = this.angle - 1;
    }
    if(keyIsDown(RIGHT_ARROW)&&this.angle < 40){
      this.angle = this.angle + 1;
    }
      push();
      translate(this.x,this.y);
      rotate(this.angle);
      image(this.cannonImg,0,0,this.w,this.h);
      pop();
  }
}