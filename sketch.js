
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var dustbin1;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;

  ball = new CrumpledBall(50,680,20);
  ground = new Ground(400,690,800);
	dustbin1 = new Dustbin(500,670);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  

  dustbin1.display();
  ball.display();
  ground.display();
  drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
	  
	    Matter.Body.applyForce(ball.body,ball.body.position,{x:45,y:-75});
       
    }
    
}



