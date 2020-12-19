
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1,log1,log4,log5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ball1=new ball(800,200);
log1=new log (100,300,100,Pl);
log4=new log2 (100,300,100,Pl/2);
log5=new log3(100,300,100,Pl/2);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 ball1=display(); 
 log1=display();
 log4=display();
 log5=display();
 keypressed();
  drawSprites();
 
}
function keypressed(){
	if (keyCode===UP_ARROW){
Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}




