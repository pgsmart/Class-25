var engine, world;
var ground, tower, cannon, cannonBall;
var backgroundImg, towerImg, cannonBaseImg;
var angle = 20;
var balls = [];
var boat, boats;
var collision;


const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

function preload(){
    backgroundImg = loadImage("assets/background.gif");
    towerImg = loadImage("assets/tower.png");
    cannonBaseImg = loadImage("assets/cannonBase.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight - 4);

    engine = Engine.create();
    world = engine.world;

    var ground_options = {
        isStatic: true
    }

    ground = Bodies.rectangle(width/2,height - height/7,width,20,ground_options);
    World.add(world,ground);

    tower = Bodies.rectangle(width/7.5,height - height/2.4,100,100,ground_options);
    World.add(world,tower);

    cannon = new Cannon(width/7,height/4,width/8,height/5,angle);

    boats = [];
}

function draw(){
    rectMode(CENTER);
    imageMode(CENTER);
    angleMode(DEGREES);

    background(0);
    Engine.update(engine);

    image(backgroundImg,width/2,height/2,width,height);
    fill(255,255,255);
    //rect(ground.position.x,ground.position.y,width,20);

    cannon.display();


    for(var a = 0; a < balls.length;a++){
        balls[a].display();
    }

    for(var b = 0; b < boats.length;b++){
        boats[b].display();
        Matter.Body.setVelocity(boats[b].body,{x:-3,y:0});
    }

    for(var a = 0; a < balls.length;a++){
        for(var b = 0; b < boats.length;b++){
            boatCollision();
        }
    }

    if(frameCount % 300 === 0){
        boat = new Boats(width + 500,height - 300,400,200);
        boats.push(boat);
    }

    image(cannonBaseImg,width/7,height/4.1,width/5,height/4);


    image(towerImg,tower.position.x,tower.position.y,width/7,height/2);



}

function keyPressed(){
    if(keyCode === 32){
        cannonBall = new CannonBall(cannon.x,cannon.y,70);
        balls.push(cannonBall);

        console.log(cannonBall);
        console.log(balls);
    }
}
function keyReleased(){
    if(keyCode === 32){
        cannonBall.shoot();
    }
}

function boatCollision(){
    for(var i = 0; i < balls.length; i++){
        for(var b = 0; b < boats.length; b++){
            collision = Matter.SAT.collides(balls[i].body,boats[b].body);
            console.log(collision);
            if(collision.collided){
                console.log("WORKING");
                Matter.World.remove(world,boats[b].body);
                delete boats[b];
            }
        
        }
    }
}
