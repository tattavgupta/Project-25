
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinSprite

function preload(){
  paperIMG=loadImage("paper.png")
  dustbinIMG=loadImage("dustbingreen.png")
}

function setup() {
  createCanvas(1000, 500);
	engine = Engine.create();
	world = engine.world;
  Engine.run(engine);
    dustbinSprite=createSprite(900,390,20,20)
    dustbinSprite.addImage(dustbinIMG)
    dustbinSprite.scale=0.5
    ground=new Ground(500,480,1000,10);
    plastic1=new Plastic(900,466,140,17);
    plastic2=new Plastic(838,382,17,149);
    plastic3=new Plastic(962,382,17,149);
    ball=new Paper(30,450,15)
}


function draw() {
  ellipseMode(RADIUS)
  rectMode(CENTER);
  ball.display();
  plastic1.display();
  plastic2.display();
  plastic3.display();
  background("white");
  ground.display();
  paperSprite.depth=dustbinSprite.depth-10
  drawSprites();
 
}

function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:47,y:-45})
  }
}

