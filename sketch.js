
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1;

function preload()
{
	
}

function setup() {
	createCanvas(1100,1100);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 bobObject1 = new Bob(250,710,100);
 rope1 = new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
 bobObject2 = new Bob(450,710,100);
 rope2 = new Rope(bobObject2.body,roofObject.body,-bobDiameter*2,0);
 bobObject3 = new Bob(650,710,100);
 rope3 = new Rope(bobObject3.body,roofObject.body,-bobDiameter*2,0);
 bobObject4 = new Bob(850,710,100);
 rope4 = new Rope(bobObject4.body,roofObject.body,-bobDiameter*2,0);
 bobObject5 = new Bob(1000,710,100);
 rope5 = new Rope(bobObject5.body,roofObject.body,-bobDiameter*2,0);
	
 roofObject = new Roof(500,100,1000,70)
 
 Engine.run(engine);
  
}
function draw() {
Engine.update(engine)
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display(); 
  rope3.display();
  rope4.display();
  rope5.display();
}



