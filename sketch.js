
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var santaObj,groundObject;
var world;

function preload(){
	//add image here
}


function setup() {
	createCanvas(700,700);

	engine = Engine.create();
	world = engine.world;
	
	santaObj=new santa(550,600,150);
	groundObject=new ground(0,695,1400,5);

	Engine.run(engine);
  
}


function draw() {
  background(255); 

  santaObj.display();
  groundObject.display();
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
    	Matter.Body.applyForce(santaObj.body,santaObj.body.position,{x:-8,y:-7});
  	}
}
